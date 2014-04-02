define([
    'underscore',
    'utils',
    'settings',
    'eventMgr',
    'fileMgr',
    'editor',
    'diff_match_patch_uncompressed',
    'jsondiffpatch',
], function(_, utils, settings, eventMgr, fileMgr, editor, diff_match_patch, jsondiffpatch) {

    function Provider(providerId, providerName) {
        this.providerId = providerId;
        this.providerName = providerName;
        this.isPublishEnabled = true;
    }

    // Parse and check a JSON discussion list
    Provider.prototype.parseDiscussionList = function(discussionListJSON) {
        try {
            var discussionList = JSON.parse(discussionListJSON);
            _.each(discussionList, function(discussion, discussionIndex) {
                if(
                    (discussion.discussionIndex != discussionIndex) ||
                    (!_.isNumber(discussion.selectionStart)) ||
                    (!_.isNumber(discussion.selectionEnd))
                ) {
                    throw 'invalid';
                }
                if(discussion.type == 'conflict') {
                    return;
                }
                discussion.commentList.forEach(function(comment) {
                    if(
                        (!_.isString(comment.author)) ||
                        (!_.isString(comment.content))
                    ) {
                        throw 'invalid';
                    }
                });
            });
            return discussionList;
        }
        catch(e) {
        }
    };

    Provider.prototype.serializeContent = function(content, discussionList) {
        if(discussionList.length > 2) { // It's a serialized JSON
            return content + '<!--se_discussion_list:' + discussionList + '-->';
        }
        return content;
    };

    Provider.prototype.parseSerializedContent = function(content) {
        var discussionList = '{}';
        var discussionExtractor = /<!--se_discussion_list:([\s\S]+)-->$/.exec(content);
        if(discussionExtractor && this.parseDiscussionList(discussionExtractor[1])) {
            content = content.substring(0, discussionExtractor.index);
            discussionList = discussionExtractor[1];
        }
        return {
            content: content,
            discussionList: discussionList
        };
    };

    var diffMatchPatch = new diff_match_patch();
    diffMatchPatch.Match_Threshold = 0;
    diffMatchPatch.Patch_DeleteThreshold = 0;
    var jsonDiffPatch = jsondiffpatch.create({
        objectHash: function(obj) {
            return JSON.stringify(obj);
        },
        textDiff: {
            minLength: 9999999
        }
    });

    var merge = settings.conflictMode == 'merge';
    Provider.prototype.syncMerge = function(fileDesc, syncAttributes, remoteContent, remoteTitle, remoteDiscussionListJSON) {

        function cleanupDiffs(diffs) {
            var result = [];
            var removeDiff = [-1, ''];
            var addDiff = [1, ''];
            var distance = 20;
            function pushDiff() {
                var separator = '///';
                if(removeDiff[1]) {
                    removeDiff[1] = '///' + removeDiff[1] + separator;
                    separator = '';
                    result.push(removeDiff);
                }
                if(addDiff[1]) {
                    addDiff[1] = separator + addDiff[1] + '///';
                    result.push(addDiff);
                }
                removeDiff = [-1, ''];
                addDiff = [1, ''];
            }
            diffs.forEach(function(diff) {
                var diffType = diff[0];
                var diffText = diff[1];
                if(diffType === 0) {
                    if(diffText.length > distance) {
                        if(removeDiff[1] || addDiff[1]) {
                            var match = /\s/.exec(diffText);
                            if(match) {
                                var prefixOffset = match.index;
                                var prefix = diffText.substring(0, prefixOffset);
                                diffText = diffText.substring(prefixOffset);
                                removeDiff[1] += prefix;
                                addDiff[1] += prefix;
                            }
                        }
                        if(diffText) {
                            var suffixOffset = diffText.length;
                            while(suffixOffset && /\S/.test(diffText[suffixOffset - 1])) {
                                suffixOffset--;
                            }
                            var suffix = diffText.substring(suffixOffset);
                            diffText = diffText.substring(0, suffixOffset);
                            if(diffText.length > distance) {
                                pushDiff();
                                result.push([0, diffText]);
                            }
                            else {
                                removeDiff[1] += diffText;
                                addDiff[1] += diffText;
                            }
                            removeDiff[1] += suffix;
                            addDiff[1] += suffix;
                        }
                    }
                    else {
                        removeDiff[1] += diffText;
                        addDiff[1] += diffText;
                    }
                }
                else if(diffType === -1) {
                    removeDiff[1] += diffText;
                }
                else if(diffType === 1) {
                    addDiff[1] += diffText;
                }
            });
            if(removeDiff[1] == addDiff[1]) {
                result.push([0, addDiff[1]]);
            }
            else {
                pushDiff();
            }
            return result;
        }

        function moveComments(oldTextContent, newTextContent, discussionList) {
            if(!discussionList.length) {
                return;
            }
            var changes = diffMatchPatch.diff_main(oldTextContent, newTextContent);
            var changed = false;
            var startOffset = 0;
            changes.forEach(function(change) {
                var changeType = change[0];
                var changeText = change[1];
                if(changeType === 0) {
                    startOffset += changeText.length;
                    return;
                }
                var endOffset = startOffset;
                var diffOffset = changeText.length;
                if(changeType === -1) {
                    endOffset += diffOffset;
                    diffOffset = -diffOffset;
                }
                discussionList.forEach(function(discussion) {
                    // selectionEnd
                    if(discussion.selectionEnd >= endOffset) {
                        discussion.selectionEnd += diffOffset;
                        discussion.discussionIndex && (changed = true);
                    }
                    else if(discussion.selectionEnd > startOffset) {
                        discussion.selectionEnd = startOffset;
                        discussion.discussionIndex && (changed = true);
                    }
                    // selectionStart
                    if(discussion.selectionStart >= endOffset) {
                        discussion.selectionStart += diffOffset;
                        discussion.discussionIndex && (changed = true);
                    }
                    else if(discussion.selectionStart > startOffset) {
                        discussion.selectionStart = startOffset;
                        discussion.discussionIndex && (changed = true);
                    }
                });
                startOffset = endOffset;
            });
            return changed;
        }

        var localContent = fileDesc.content;
        var localTitle = fileDesc.title;
        var localDiscussionListJSON = fileDesc.discussionListJSON;
        var localDiscussionList = fileDesc.discussionList;
        var remoteDiscussionList = JSON.parse(remoteDiscussionListJSON);

        // Local/Remote CRCs
        var localContentCRC = utils.crc32(localContent);
        var localTitleCRC = utils.crc32(localTitle);
        var localDiscussionListCRC = utils.crc32(localDiscussionListJSON);
        var remoteContentCRC = utils.crc32(remoteContent);
        var remoteTitleCRC = utils.crc32(remoteTitle);
        var remoteDiscussionListCRC = utils.crc32(remoteDiscussionListJSON);

        // Check content
        var localContentChanged = syncAttributes.contentCRC != localContentCRC;
        var remoteContentChanged = syncAttributes.contentCRC != remoteContentCRC;
        var contentChanged = localContent != remoteContent && remoteContentChanged;
        var contentConflict = contentChanged && localContentChanged;

        // Check title
        syncAttributes.titleCRC = syncAttributes.titleCRC || localTitleCRC; // Not synchronized with Dropbox
        var localTitleChanged = syncAttributes.titleCRC != localTitleCRC;
        var remoteTitleChanged = syncAttributes.titleCRC != remoteTitleCRC;
        var titleChanged = localTitle != remoteTitle && remoteTitleChanged;
        var titleConflict = titleChanged && localTitleChanged;

        // Check discussionList
        var localDiscussionListChanged = syncAttributes.discussionListCRC != localDiscussionListCRC;
        var remoteDiscussionListChanged = syncAttributes.discussionListCRC != remoteDiscussionListCRC;
        var discussionListChanged = localDiscussionListJSON != remoteDiscussionListJSON && remoteDiscussionListChanged;
        var discussionListConflict = discussionListChanged && localDiscussionListChanged;

        var conflictList = [];
        var newContent = remoteContent;
        var newTitle = remoteTitle;
        var newDiscussionList = remoteDiscussionList;
        var adjustLocalDiscussionList = false;
        var adjustRemoteDiscussionList = false;
        var mergeDiscussionList = false;
        var diffs, patch;
        if(
            (!merge && (contentConflict || titleConflict || discussionListConflict)) ||
            (contentConflict && syncAttributes.content === undefined) ||
            (titleConflict && syncAttributes.title === undefined) ||
            (discussionListConflict && syncAttributes.discussionList === undefined)
        ) {
            fileMgr.createFile(localTitle + " (backup)", localContent, localDiscussionListJSON);
            eventMgr.onMessage('Conflict detected on "' + localTitle + '". A backup has been created locally.');
        }
        else {
            if(contentConflict) {
                // Patch content
                var oldContent = syncAttributes.content;
                diffs = diffMatchPatch.diff_main(oldContent, localContent);
                diffMatchPatch.diff_cleanupSemantic(diffs);
                patch = diffMatchPatch.patch_make(oldContent, diffs);
                var patchResult = diffMatchPatch.patch_apply(patch, remoteContent);
                newContent = patchResult[0];
                if(patchResult[1].some(function(patchSuccess) {
                    return !patchSuccess;
                })) {
                    // Remaining conflicts
                    diffs = diffMatchPatch.diff_main(localContent, newContent);
                    diffs = cleanupDiffs(diffs);

                    newContent = '';
                    var conflict;
                    diffs.forEach(function(diff) {
                        var diffType = diff[0];
                        var diffText = diff[1];
                        if(diffType !== 0 && !conflict) {
                            conflict = {
                                selectionStart: newContent.length,
                                type: 'conflict'
                            };
                        }
                        else if(diffType === 0 && conflict) {
                            conflict.selectionEnd = newContent.length;
                            conflictList.push(conflict);
                            conflict = undefined;
                        }
                        newContent += diffText;
                    });
                    if(conflict) {
                        conflict.selectionEnd = newContent.length;
                        conflictList.push(conflict);
                    }
                }
            }

            if(contentChanged) {
                if(localDiscussionListChanged) {
                    adjustLocalDiscussionList = true;
                }
                if(remoteDiscussionListChanged) {
                    adjustRemoteDiscussionList = true;
                }
                else {
                    adjustLocalDiscussionList = true;
                    newDiscussionList = localDiscussionList;
                }
            }

            if(discussionListConflict) {
                mergeDiscussionList = true;
            }

            if(titleConflict) {
                // Patch title
                patch = diffMatchPatch.patch_make(syncAttributes.title, localTitle);
                newTitle = diffMatchPatch.patch_apply(patch, remoteTitle)[0];
            }
        }

        // Adjust local discussions offset
        var editorSelection;
        if(contentChanged) {
            var localDiscussionArray = [];
            // Adjust editor's cursor position and local discussions at the same time
            if(fileMgr.currentFile === fileDesc) {
                editorSelection = {
                    selectionStart: editor.inputElt.selectionStart,
                    selectionEnd: editor.inputElt.selectionEnd
                };
                localDiscussionArray.push(editorSelection);
                fileDesc.newDiscussion && localDiscussionArray.push(fileDesc.newDiscussion);
            }
            if(adjustLocalDiscussionList) {
                localDiscussionArray = localDiscussionArray.concat(_.values(localDiscussionList));
            }
            discussionListChanged |= moveComments(localContent, newContent, localDiscussionArray);
        }

        // Adjust remote discussions offset
        if(adjustRemoteDiscussionList) {
            var remoteDiscussionArray = _.values(remoteDiscussionList);
            moveComments(remoteContent, newContent, remoteDiscussionArray);
        }

        // Patch remote discussionList with local modifications
        if(mergeDiscussionList) {
            var oldDiscussionList = JSON.parse(syncAttributes.discussionList);
            diffs = jsonDiffPatch.diff(oldDiscussionList, localDiscussionList);
            jsonDiffPatch.patch(remoteDiscussionList, diffs);
            _.each(remoteDiscussionList, function(discussion, discussionIndex) {
                if(!discussion) {
                    delete remoteDiscussionList[discussionIndex];
                }
            });
        }

        if(conflictList.length) {
            discussionListChanged = true;
            // Add conflicts to discussionList
            conflictList.forEach(function(conflict) {
                // Create discussion index
                var discussionIndex;
                do {
                    discussionIndex = utils.randomString() + utils.randomString(); // Increased size to prevent collision
                } while(_.has(newDiscussionList, discussionIndex));
                conflict.discussionIndex = discussionIndex;
                newDiscussionList[discussionIndex] = conflict;
            });
        }

        if(titleChanged) {
            fileDesc.title = newTitle;
            eventMgr.onTitleChanged(fileDesc);
            eventMgr.onMessage('"' + localTitle + '" has been renamed to "' + newTitle + '" on ' + this.providerName + '.');
        }

        if(contentChanged || discussionListChanged) {
            var self = this;
            editor.watcher.noWatch(function() {
                if(contentChanged) {
                    if(!/\n$/.test(newContent)) {
                        newContent += '\n';
                    }
                    if(fileMgr.currentFile === fileDesc) {
                        editor.setValueNoWatch(newContent);
                        editorSelection && editor.inputElt.setSelectionStartEnd(
                            editorSelection.selectionStart,
                            editorSelection.selectionEnd
                        );
                    }
                    fileDesc.content = newContent;
                    eventMgr.onContentChanged(fileDesc, newContent);
                }
                if(discussionListChanged) {
                    fileDesc.discussionList = newDiscussionList;
                    var diff = jsonDiffPatch.diff(localDiscussionList, newDiscussionList);
                    var commentsChanged = false;
                    _.each(diff, function(discussionDiff, discussionIndex) {
                        if(!_.isArray(discussionDiff)) {
                            commentsChanged = true;
                        }
                        else if(discussionDiff.length === 1) {
                            eventMgr.onDiscussionCreated(fileDesc, newDiscussionList[discussionIndex]);
                        }
                        else {
                            eventMgr.onDiscussionRemoved(fileDesc, localDiscussionList[discussionIndex]);
                        }
                    });
                    commentsChanged && eventMgr.onCommentsChanged(fileDesc);
                }
                editor.undoManager.currentMode = 'sync';
                editor.undoManager.saveState();
                eventMgr.onMessage('"' + remoteTitle + '" has been updated from ' + self.providerName + '.');
                if(conflictList.length) {
                    eventMgr.onMessage('"' + remoteTitle + '" has conflicts that you have to review.');
                }
            });
        }

        // Return remote CRCs
        return {
            contentCRC: remoteContentCRC,
            titleCRC: remoteTitleCRC,
            discussionListCRC: remoteDiscussionListCRC
        };
    };

    return Provider;
});
