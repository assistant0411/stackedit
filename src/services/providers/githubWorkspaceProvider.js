import store from '../../store';
import githubHelper from './helpers/githubHelper';
import Provider from './common/Provider';
import utils from '../utils';
import userSvc from '../userSvc';

const getAbsolutePath = syncData =>
  `${store.getters['workspace/currentWorkspace'].path || ''}${syncData.id}`;

const getWorkspaceWithOwner = () => {
  const workspace = store.getters['workspace/currentWorkspace'];
  const [owner, repo] = workspace.repo.split('/');
  return {
    ...workspace,
    owner,
    repo,
  };
};

let treeShaMap;
let treeFolderMap;
let treeFileMap;
let treeDataMap;
let treeSyncLocationMap;
let treePublishLocationMap;

const endsWith = (str, suffix) => str.slice(-suffix.length) === suffix;

export default new Provider({
  id: 'githubWorkspace',
  getToken() {
    return store.getters['workspace/syncToken'];
  },
  async initWorkspace() {
    const [owner, repo] = (utils.queryParams.repo || '').split('/');
    const { branch } = utils.queryParams;
    const workspaceParams = {
      providerId: this.id,
      repo: `${owner}/${repo}`,
      branch,
    };
    const path = (utils.queryParams.path || '')
      .replace(/^\/*/, '') // Remove leading `/`
      .replace(/\/*$/, '/'); // Add trailing `/`
    if (path !== '/') {
      workspaceParams.path = path;
    }
    const workspaceId = utils.makeWorkspaceId(workspaceParams);
    let workspace = store.getters['data/sanitizedWorkspaces'][workspaceId];

    // See if we already have a token
    let token;
    if (workspace) {
      // Token sub is in the workspace
      token = store.getters['data/githubTokens'][workspace.sub];
    }
    if (!token) {
      await store.dispatch('modal/open', { type: 'githubAccount' });
      token = await githubHelper.addAccount(store.getters['data/localSettings'].githubRepoFullAccess);
    }

    if (!workspace) {
      const pathEntries = (path || '').split('/');
      const name = pathEntries[pathEntries.length - 2] || repo; // path ends with `/`
      workspace = {
        ...workspaceParams,
        id: workspaceId,
        sub: token.sub,
        name,
      };
    }

    // Fix the URL hash
    utils.setQueryParams(workspaceParams);
    if (workspace.url !== window.location.href) {
      store.dispatch('data/patchWorkspaces', {
        [workspaceId]: {
          ...workspace,
          url: window.location.href,
        },
      });
    }
    return store.getters['data/sanitizedWorkspaces'][workspaceId];
  },
  async getChanges() {
    const syncToken = store.getters['workspace/syncToken'];
    const { owner, repo, branch } = getWorkspaceWithOwner();
    const tree = await githubHelper.getTree({
      token: syncToken,
      owner,
      repo,
      branch,
    });
    const workspacePath = store.getters['workspace/currentWorkspace'].path || '';
    const syncDataByPath = store.getters['data/syncData'];
    const syncDataByItemId = store.getters['data/syncDataByItemId'];

    // Store all blobs sha
    treeShaMap = Object.create(null);
    // Store interesting paths
    treeFolderMap = Object.create(null);
    treeFileMap = Object.create(null);
    treeDataMap = Object.create(null);
    treeSyncLocationMap = Object.create(null);
    treePublishLocationMap = Object.create(null);

    tree.filter(({ type, path }) => type === 'blob' && path.indexOf(workspacePath) === 0)
      .forEach((blobEntry) => {
        // Make path relative
        const path = blobEntry.path.slice(workspacePath.length);
        // Collect blob sha
        treeShaMap[path] = blobEntry.sha;
        // Collect parents path
        let parentPath = '';
        path.split('/').slice(0, -1).forEach((folderName) => {
          const folderPath = `${parentPath}${folderName}/`;
          treeFolderMap[folderPath] = parentPath;
          parentPath = folderPath;
        });
        // Collect file path
        if (path.indexOf('.stackedit-data/') === 0) {
          treeDataMap[path] = true;
        } else if (endsWith(path, '.md')) {
          treeFileMap[path] = parentPath;
        } else if (endsWith(path, '.sync')) {
          treeSyncLocationMap[path] = true;
        } else if (endsWith(path, '.publish')) {
          treePublishLocationMap[path] = true;
        }
      });

    // Collect changes
    const changes = [];
    const pathIds = {};
    const syncDataToIgnore = Object.create(null);
    const getId = (path) => {
      const syncData = syncDataByPath[path];
      const id = syncData ? syncData.itemId : utils.uid();
      pathIds[path] = id;
      return id;
    };

    // Folder creations/updates
    // Assume map entries are sorted from top to bottom
    Object.entries(treeFolderMap).forEach(([path, parentPath]) => {
      const id = getId(path);
      const item = utils.addItemHash({
        id,
        type: 'folder',
        name: path.slice(parentPath.length, -1),
        parentId: pathIds[parentPath] || null,
      });
      changes.push({
        syncDataId: path,
        item,
        syncData: {
          id: path,
          itemId: id,
          type: item.type,
          hash: item.hash,
        },
      });
    });

    // File creations/updates
    Object.entries(treeFileMap).forEach(([path, parentPath]) => {
      const id = getId(path);
      const item = utils.addItemHash({
        id,
        type: 'file',
        name: path.slice(parentPath.length, -'.md'.length),
        parentId: pathIds[parentPath] || null,
      });
      changes.push({
        syncDataId: path,
        item,
        syncData: {
          id: path,
          itemId: id,
          type: item.type,
          hash: item.hash,
        },
      });

      // Content creations/updates
      const contentSyncData = syncDataByItemId[`${id}/content`];
      if (contentSyncData) {
        syncDataToIgnore[contentSyncData.id] = true;
      }
      if (!contentSyncData || contentSyncData.sha !== treeShaMap[path]) {
        // Use `/` as a prefix to get a unique syncData id
        changes.push({
          syncDataId: `/${path}`,
          item: {
            id: `${id}/content`,
            type: 'content',
            // Need a truthy value to force saving sync data
            hash: 1,
          },
          syncData: {
            id: `/${path}`,
            itemId: `${id}/content`,
            type: 'content',
            // Need a truthy value to force downloading the content
            hash: 1,
          },
        });
      }
    });

    // Data creations/updates
    Object.keys(treeDataMap).forEach((path) => {
      try {
        const [, id] = path.match(/^\.stackedit-data\/([\s\S]+)\.json$/);
        pathIds[path] = id;
        const syncData = syncDataByItemId[id];
        if (syncData) {
          syncDataToIgnore[syncData.id] = true;
        }
        if (!syncData || syncData.sha !== treeShaMap[path]) {
          changes.push({
            syncDataId: path,
            item: {
              id,
              type: 'data',
              // Need a truthy value to force saving sync data
              hash: 1,
            },
            syncData: {
              id: path,
              itemId: id,
              type: 'data',
              // Need a truthy value to force downloading the content
              hash: 1,
            },
          });
        }
      } catch (e) {
        // Ignore parsing errors
      }
    });

    // Location creations/updates
    [{
      type: 'syncLocation',
      map: treeSyncLocationMap,
      pathMatcher: /^([\s\S]+)\.([\w-]+)\.sync$/,
    }, {
      type: 'publishLocation',
      map: treePublishLocationMap,
      pathMatcher: /^([\s\S]+)\.([\w-]+)\.publish$/,
    }]
      .forEach(({ type, map, pathMatcher }) => Object.keys(map).forEach((path) => {
        try {
          const [, filePath, data] = path.match(pathMatcher);
          // If there is a corresponding md file in the tree
          const fileId = pathIds[`${filePath}.md`];
          if (fileId) {
            const id = getId(path);
            const item = utils.addItemHash({
              ...JSON.parse(utils.decodeBase64(data)),
              id,
              type,
              fileId,
            });
            changes.push({
              syncDataId: path,
              item,
              syncData: {
                id: path,
                itemId: id,
                type: item.type,
                hash: item.hash,
              },
            });
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }));

    // Deletions
    Object.keys(syncDataByPath).forEach((path) => {
      if (!pathIds[path] && !syncDataToIgnore[path]) {
        changes.push({ syncDataId: path });
      }
    });

    return changes;
  },
  async saveSimpleItem(item) {
    const path = store.getters.itemPaths[item.fileId || item.id];
    const syncToken = store.getters['workspace/syncToken'];
    const syncData = {
      itemId: item.id,
      type: item.type,
      hash: item.hash,
    };

    if (item.type === 'file') {
      syncData.id = `${path}.md`;
      return syncData;
    }
    if (item.type === 'folder') {
      syncData.id = path;
      return syncData;
    }

    // locations are stored as paths, so we upload an empty file
    const data = utils.encodeBase64(utils.serializeObject({
      ...item,
      id: undefined,
      type: undefined,
      fileId: undefined,
    }), true);
    const extension = item.type === 'syncLocation' ? 'sync' : 'publish';
    syncData.id = `${path}.${data}.${extension}`;
    await githubHelper.uploadFile({
      ...getWorkspaceWithOwner(),
      token: syncToken,
      path: getAbsolutePath(syncData),
      content: '',
      sha: treeShaMap[syncData.id],
    });
    return syncData;
  },
  async removeItem(syncData) {
    // Ignore content deletion
    if (syncData.type !== 'content') {
      const syncToken = store.getters['workspace/syncToken'];
      await githubHelper.removeFile({
        ...getWorkspaceWithOwner(),
        token: syncToken,
        path: getAbsolutePath(syncData),
        sha: treeShaMap[syncData.id],
      });
    }
  },
  async downloadContent(token, syncLocation) {
    const syncData = store.getters['data/syncDataByItemId'][syncLocation.fileId];
    const contentSyncData = store.getters['data/syncDataByItemId'][`${syncLocation.fileId}/content`];
    if (!syncData || !contentSyncData) {
      return null;
    }
    const { sha, content } = await githubHelper.downloadFile({
      ...getWorkspaceWithOwner(),
      token,
      path: getAbsolutePath(syncData),
    });
    const item = Provider.parseContent(content, `${syncLocation.fileId}/content`);
    if (item.hash !== contentSyncData.hash) {
      store.dispatch('data/patchSyncData', {
        [contentSyncData.id]: {
          ...contentSyncData,
          hash: item.hash,
          sha,
        },
      });
    }
    return item;
  },
  async downloadData(dataId) {
    const syncData = store.getters['data/syncDataByItemId'][dataId];
    if (!syncData) {
      return null;
    }
    const syncToken = store.getters['workspace/syncToken'];
    const { sha, content } = await githubHelper.downloadFile({
      ...getWorkspaceWithOwner(),
      token: syncToken,
      path: getAbsolutePath(syncData),
    });
    const item = JSON.parse(content);
    if (item.hash !== syncData.hash) {
      store.dispatch('data/patchSyncData', {
        [syncData.id]: {
          ...syncData,
          hash: item.hash,
          sha,
        },
      });
    }
    return item;
  },
  async uploadContent(token, content, syncLocation) {
    const contentSyncData = store.getters['data/syncDataByItemId'][`${syncLocation.fileId}/content`];
    if (!contentSyncData || contentSyncData.hash !== content.hash) {
      const path = `${store.getters.itemPaths[syncLocation.fileId]}.md`;
      const absolutePath = `${store.getters['workspace/currentWorkspace'].path || ''}${path}`;
      const id = `/${path}`;
      const res = await githubHelper.uploadFile({
        ...getWorkspaceWithOwner(),
        token,
        path: absolutePath,
        content: Provider.serializeContent(content),
        sha: treeShaMap[id],
      });
      store.dispatch('data/patchSyncData', {
        [id]: {
          // Build sync data
          id,
          itemId: content.id,
          type: content.type,
          hash: content.hash,
          sha: res.content.sha,
        },
      });
    }
    return syncLocation;
  },
  async uploadData(item) {
    const oldSyncData = store.getters['data/syncDataByItemId'][item.id];
    if (!oldSyncData || oldSyncData.hash !== item.hash) {
      const syncData = {
        id: `.stackedit-data/${item.id}.json`,
        itemId: item.id,
        type: item.type,
        hash: item.hash,
      };
      const syncToken = store.getters['workspace/syncToken'];
      const res = await githubHelper.uploadFile({
        ...getWorkspaceWithOwner(),
        token: syncToken,
        path: getAbsolutePath(syncData),
        content: JSON.stringify(item),
        sha: oldSyncData && oldSyncData.sha,
      });
      store.dispatch('data/patchSyncData', {
        [syncData.id]: {
          ...syncData,
          sha: res.content.sha,
        },
      });
    }
  },
  onSyncEnd() {
    // Clean up
    treeShaMap = null;
    treeFolderMap = null;
    treeFileMap = null;
    treeDataMap = null;
    treeSyncLocationMap = null;
    treePublishLocationMap = null;
  },
  async listRevisions(token, fileId) {
    const { owner, repo, branch } = getWorkspaceWithOwner();
    const syncData = Provider.getContentSyncData(fileId);
    const entries = await githubHelper.getCommits({
      token,
      owner,
      repo,
      sha: branch,
      path: syncData.id,
    });
    return entries.map(({
      author,
      committer,
      commit,
      sha,
    }) => {
      let user;
      if (author && author.login) {
        user = author;
      } else if (committer && committer.login) {
        user = committer;
      }
      const sub = `gh:${user.id}`;
      userSvc.addInfo({ id: sub, name: user.login, imageUrl: user.avatar_url });
      const date = (commit.author && commit.author.date)
        || (commit.committer && commit.committer.date);
      return {
        id: sha,
        sub,
        created: date ? new Date(date).getTime() : 1,
      };
    })
      .sort((revision1, revision2) => revision2.created - revision1.created);
  },
  async getRevisionContent(token, fileId, revisionId) {
    const syncData = Provider.getContentSyncData(fileId);
    const { content } = await githubHelper.downloadFile({
      ...getWorkspaceWithOwner(),
      token,
      branch: revisionId,
      path: getAbsolutePath(syncData),
    });
    return Provider.parseContent(content, `${fileId}/content`);
  },
});
