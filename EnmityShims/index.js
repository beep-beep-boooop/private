(function(exports){'use strict';let patches = [];
var index = {
  onLoad: function() {
    patches.push(function() {
      window.enmity = {
        plugins: {
          registerPlugin: function(b) {
            window.enmity.plugins.registerPlugin(b);
          }
        },
        modules: {
          common: {
            Constants: window.enmity.modules.common.Constants,
            Clipboard: window.enmity.modules.common.Clipboard,
            Assets: window.enmity.modules.common.Assets,
            Messages: window.enmity.modules.common.Messages,
            Clyde: window.enmity.modules.common.Clyde,
            Avatars: window.enmity.modules.common.Avatars,
            Native: window.enmity.modules.common.Native,
            React: window.enmity.modules.common.React,
            Dispatcher: window.enmity.modules.common.Dispatcher,
            Storage: window.enmity.modules.common.Storage,
            Toasts: window.enmity.modules.common.Toasts,
            Dialog: window.enmity.modules.common.Dialog,
            Token: window.enmity.modules.common.Token,
            REST: window.enmity.modules.common.REST,
            Settings: window.enmity.modules.common.Settings,
            Users: window.enmity.modules.common.Users,
            Navigation: window.enmity.modules.common.Navigation,
            NavigationNative: window.enmity.modules.common.NavigationNative,
            NavigationStack: window.enmity.modules.common.NavigationStack,
            Theme: window.enmity.modules.common.Theme,
            Linking: window.enmity.modules.common.Linking,
            StyleSheet: window.enmity.modules.common.StyleSheet,
            ColorMap: window.enmity.modules.common.ColorMap,
            Components: window.enmity.modules.common.Components,
            Locale: window.enmity.modules.common.Locale,
            Profiles: window.enmity.modules.common.Profiles,
            Lodash: window.enmity.modules.common.Lodash,
            Logger: window.enmity.modules.common.Logger,
            Flux: window.enmity.modules.common.Flux,
            SVG: window.enmity.modules.common.SVG,
            Scenes: window.enmity.modules.common.Scenes,
            Moment: window.enmity.modules.common.Moment
          },
          getByProps
        },
        patcher: {
          create: Ae
        },
        assets: {
          getIDByName: function(b) {
            return window.enmity.assets.getIDByName(b);
          }
        },
        utilities: {
          uuid: Be
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