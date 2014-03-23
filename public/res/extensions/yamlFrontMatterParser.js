define([
    "underscore",
    "classes/Extension",
    "yaml-js",
], function(_, Extension, YAML) {

    var yamlFrontMatterParser = new Extension("yamlFrontMatterParser", "YAML front matter");

    var eventMgr;
    yamlFrontMatterParser.onEventMgrCreated = function(eventMgrParameter) {
        eventMgr = eventMgrParameter;
    };

    var fileDesc;
    yamlFrontMatterParser.onFileSelected = function(fileDescParam) {
        fileDesc = fileDescParam;
    };

    var regex = /^(\s*-{3}\s*\n([\w\W]+?)\n\s*-{3}\s*?\n)?([\w\W]*)$/;

    function parseFrontMatter(fileDesc, content) {
        var results = regex.exec(content);
        var yaml = results[2];

        if(!yaml) {
            fileDesc.frontMatter = undefined;
        }
        else if(!fileDesc.frontMatter || fileDesc.frontMatter._yaml != yaml) {
            fileDesc.frontMatter = undefined;
            try {
                fileDesc.frontMatter = YAML.parse(yaml);
                if(!_.isObject(fileDesc.frontMatter)) {
                    fileDesc.frontMatter = undefined;
                }
                fileDesc.frontMatter._yaml = yaml;
                fileDesc.frontMatter._frontMatter = results[1];
            }
            catch (e) {
            }
        }
    }

    yamlFrontMatterParser.onFileOpen = parseFrontMatter;
    yamlFrontMatterParser.onContentChanged = parseFrontMatter;

    return yamlFrontMatterParser;
});
