import localDbSvc from './localDbSvc';
import store from '../store';
import utils from './utils';
import networkSvc from './networkSvc';
import exportSvc from './exportSvc';
import providerRegistry from './providers/common/providerRegistry';

const hasCurrentFilePublishLocations = () => !!store.getters['publishLocation/current'].length;

const loader = type => fileId => localDbSvc.loadItem(`${fileId}/${type}`)
  // Item does not exist, create it
  .catch(() => store.commit(`${type}/setItem`, {
    id: `${fileId}/${type}`,
  }));
const loadContent = loader('content');

const ensureArray = (value) => {
  if (!value) {
    return [];
  }
  if (!Array.isArray(value)) {
    return `${value}`.trim().split(/\s*,\s*/);
  }
  return value;
};

const ensureString = (value, defaultValue) => {
  if (!value) {
    return defaultValue;
  }
  return `${value}`;
};

const ensureDate = (value, defaultValue) => {
  if (!value) {
    return defaultValue;
  }
  return new Date(`${value}`);
};

const publish = async (publishLocation) => {
  const { fileId } = publishLocation;
  const template = store.getters['data/allTemplates'][publishLocation.templateId];
  const html = await exportSvc.applyTemplate(fileId, template);
  const content = await localDbSvc.loadItem(`${fileId}/content`);
  const file = store.state.file.itemMap[fileId];
  const properties = utils.computeProperties(content.properties);
  const provider = providerRegistry.providers[publishLocation.providerId];
  const token = provider.getToken(publishLocation);
  const metadata = {
    title: ensureString(properties.title, file.name),
    author: ensureString(properties.author),
    tags: ensureArray(properties.tags),
    categories: ensureArray(properties.categories),
    excerpt: ensureString(properties.excerpt),
    featuredImage: ensureString(properties.featuredImage),
    status: ensureString(properties.status),
    date: ensureDate(properties.date, new Date()),
  };
  return provider.publish(token, html, metadata, publishLocation);
};

const publishFile = async (fileId) => {
  let counter = 0;
  await loadContent(fileId);
  const publishLocations = [
    ...store.getters['publishLocation/filteredGroupedByFileId'][fileId] || [],
  ];
  try {
    await utils.awaitSequence(publishLocations, async (publishLocation) => {
      await store.dispatch('queue/doWithLocation', {
        location: publishLocation,
        action: async () => {
          const publishLocationToStore = await publish(publishLocation);
          try {
            // Replace publish location if modified
            if (utils.serializeObject(publishLocation) !==
              utils.serializeObject(publishLocationToStore)
            ) {
              store.commit('publishLocation/patchItem', publishLocationToStore);
            }
            counter += 1;
          } catch (err) {
            if (store.state.offline) {
              throw err;
            }
            console.error(err); // eslint-disable-line no-console
            store.dispatch('notification/error', err);
          }
        },
      });
    });
    const file = store.state.file.itemMap[fileId];
    store.dispatch('notification/info', `"${file.name}" was published to ${counter} location(s).`);
  } finally {
    await localDbSvc.unloadContents();
  }
};

const requestPublish = () => {
  // No publish in light mode
  if (store.state.light) {
    return;
  }

  store.dispatch('queue/enqueuePublishRequest', () => new Promise((resolve, reject) => {
    let intervalId;
    const attempt = () => {
      // Only start publishing when these conditions are met
      if (networkSvc.isUserActive()) {
        clearInterval(intervalId);
        if (!hasCurrentFilePublishLocations()) {
          // Cancel sync
          reject(new Error('Publish not possible.'));
          return;
        }
        publishFile(store.getters['file/current'].id)
          .then(resolve, reject);
      }
    };
    intervalId = utils.setInterval(() => attempt(), 1000);
    attempt();
  }));
};

const createPublishLocation = (publishLocation) => {
  publishLocation.id = utils.uid();
  const currentFile = store.getters['file/current'];
  publishLocation.fileId = currentFile.id;
  store.dispatch(
    'queue/enqueue',
    async () => {
      const publishLocationToStore = await publish(publishLocation);
      store.commit('publishLocation/setItem', publishLocationToStore);
      store.dispatch('notification/info', `A new publication location was added to "${currentFile.name}".`);
    },
  );
};

export default {
  requestPublish,
  createPublishLocation,
};
