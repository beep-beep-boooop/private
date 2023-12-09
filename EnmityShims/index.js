(function(exports){'use strict';let patches = [];
var index = {
  onLoad: function() {
    patches.push(function() {
      window.enmity = {
        modules: {},
        themer: {},
        patcher: {},
        version: {},
        plugins: {},
        clyde: {
          sendReply: function(channelID, content, username, avatarURL) {
          }
        },
        commands: {
          registerCommands: function(caller, commands) {
          },
          unregisterCommands: function(caller) {
          }
        },
        utilities: {},
        settings: {},
        components: {},
        native: {
          reload: function() {
          }
        },
        assets: {
          find: function(filter) {
          },
          getByName: function(name) {
          },
          getByID: function(id) {
          },
          getIDByName: function(name) {
          }
        }
      };
      window.themes = {};
    });
  },
  onUnload: function() {
    for (const unpatch of patches) {
      unpatch();
    }
  }
};exports.default=index;Object.defineProperty(exports,'__esModule',{value:true});return exports;})({});