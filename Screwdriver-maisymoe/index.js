(function(exports,plugin,metro,patcher,common,storage,assets,components){'use strict';const DeveloperOptionsStore = metro.findByStoreName("DeveloperOptionsStore");
const devOptsModule = metro.findByProps("setDeveloperOptionSettings");
const setBugReporterState = function(state) {
  return devOptsModule.setDeveloperOptionSettings({
    bugReporterEnabled: state
  });
};
function disableBugReporter() {
  vendetta.metro.findByProps("ChatListAnimationExperiment").ChatListAnimationExperiment.getCurrentConfig().shouldAnimateAndroid = true;
  const oldState = DeveloperOptionsStore.isBugReporterEnabled;
  setBugReporterState(!plugin.storage.disableBugReporter);
  const unpatch = patcher.before("setDeveloperOptionSettings", devOptsModule, function(args) {
    if (!plugin.storage.disableBugReporter || !args[0]?.bugReporterEnabled)
      return;
    args[0].bugReporterEnabled = false;
  });
  return function() {
    unpatch();
    setBugReporterState(oldState);
  };
}const fileModule = metro.findByProps("addFiles", "popFirstFile");
function patchAddFiles() {
  return patcher.before("addFiles", fileModule, function(args) {
    if (!plugin.storage.fixJSONUploads)
      return;
    args[0]?.files.forEach(function(file) {
      file.mimeType === "application/json" && (file.mimeType = "text/plain");
    });
  });
}const { FormSection, FormRow, FormSwitchRow, FormDivider } = components.Forms;
const categories = [
  {
    title: "Quality of Life",
    items: [
      {
        label: "Forcibly disable Bug Reporter",
        subLabel: "Prevent enabling Discord's Bug Reporter, since the value of built-in toggle does not persist.",
        icon: "ic_noise_cancellation_disabled",
        setting: "disableBugReporter",
        action: function() {
          return setBugReporterState(false);
        }
      }
    ]
  },
  {
    title: "Fixes",
    items: [
      {
        label: "JSON file uploads",
        subLabel: "Fix a long-standing Discord bug causing JSON files to be uploaded with their metadata as contents.",
        icon: "ic_file_upload_24px",
        setting: "fixJSONUploads"
      }
    ]
  }
];
function Settings() {
  storage.useProxy(plugin.storage);
  return /* @__PURE__ */ React.createElement(common.ReactNative.ScrollView, {
    style: {
      flex: 1
    },
    contentContainerStyle: {
      paddingBottom: 38
    }
  }, categories.map(function(category, index) {
    return /* @__PURE__ */ React.createElement(FormSection, {
      title: category.title,
      titleStyleType: index === 0 ? "no_border" : void 0
    }, category.disclaimer && /* @__PURE__ */ React.createElement(common.ReactNative.View, {
      style: {
        marginHorizontal: 10,
        marginBottom: 10
      }
    }, /* @__PURE__ */ React.createElement(components.HelpMessage, {
      messageType: 0
    }, category.disclaimer)), category.items.map(function(item, index2) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormSwitchRow, {
        label: item.label,
        subLabel: item.subLabel,
        leading: item.icon && /* @__PURE__ */ React.createElement(FormRow.Icon, {
          source: assets.getAssetIDByName(item.icon)
        }),
        disabled: item.disabled,
        value: plugin.storage[item.setting],
        onValueChange: function(v) {
          item.action?.(v);
          plugin.storage[item.setting] = v;
        }
      }), index2 !== category.items.length - 1 && /* @__PURE__ */ React.createElement(FormDivider, null));
    }));
  }));
}plugin.storage.fixJSONUploads ??= true;
const patches = [
  disableBugReporter(),
  patchAddFiles()
];
const onUnload = function() {
  return patches.forEach(function(p) {
    return p();
  });
};exports.onUnload=onUnload;exports.settings=Settings;return exports;})({},vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.metro.common,vendetta.storage,vendetta.ui.assets,vendetta.ui.components);