(function(exports,metro,patcher,common,storage,ui,components){'use strict';const state = storage.createProxy({
  logIndex: 0,
  rows: []
}).proxy;
const initInterceptor = function() {
  return patcher.after("updateRows", common.ReactNative.NativeModules.DCDChatManager, function(args) {
    state.logIndex = args[0];
    state.rows = JSON.parse(args[1]);
  });
};const { FormText: FormText$1 } = components.Forms;
const styles$2 = common.stylesheet.createThemedStyleSheet({
  title: {
    fontSize: 20
  }
});
function Error(param) {
  let { error } = param;
  return /* @__PURE__ */ common.React.createElement(common.ReactNative.View, null, /* @__PURE__ */ common.React.createElement(FormText$1, {
    style: styles$2.title
  }, "Well shit."), /* @__PURE__ */ common.React.createElement(FormText$1, null, error));
}const { FormText } = components.Forms;
const styles$1 = common.stylesheet.createThemedStyleSheet({
  body: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  avatar: {
    height: 48,
    width: 48
  },
  contentBody: {
    flex: 1,
    flexDirection: "column"
  },
  usernameRow: {
    flex: 1,
    flexDirection: "row"
  }
});
function Message(param) {
  let { row } = param;
  return /* @__PURE__ */ React.createElement(common.ReactNative.View, {
    style: styles$1.body
  }, /* @__PURE__ */ React.createElement(common.ReactNative.Image, {
    style: styles$1.avatar,
    source: {
      uri: row.message.avatarURL
    }
  }), /* @__PURE__ */ React.createElement(common.ReactNative.View, {
    style: styles$1.contentBody
  }, /* @__PURE__ */ React.createElement(common.ReactNative.View, {
    style: styles$1.usernameRow
  }, /* @__PURE__ */ React.createElement(FormText, null, row.message.username)), /* @__PURE__ */ React.createElement(common.ReactNative.View, null, /* @__PURE__ */ React.createElement(FormText, null, "Message content needs parsing..."))));
}const styles = common.stylesheet.createThemedStyleSheet({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: ui.semanticColors.CHAT_BACKGROUND,
    height: "100%"
  }
});
function Chat() {
  try {
    storage.useProxy(state);
    if (state.rows.length === 0)
      return /* @__PURE__ */ React.createElement(Error, {
        error: "Rows empty"
      });
    return /* @__PURE__ */ React.createElement(common.ReactNative.View, {
      style: styles.body
    }, /* @__PURE__ */ React.createElement(common.ReactNative.FlatList, {
      inverted: true,
      data: state.rows,
      renderItem: function(param) {
        let { item } = param;
        if (item.type === 1)
          return /* @__PURE__ */ React.createElement(Message, {
            row: item
          });
        else
          return /* @__PURE__ */ React.createElement(Error, {
            error: `Unhandled message type ${item.type}`
          });
      },
      keyExtractor: function(item) {
        return item.index.toString();
      }
    }));
  } catch (error) {
  }
}const DiscordChat = metro.findByName("Chat");
const patches = [
  initInterceptor(),
  patcher.instead("render", DiscordChat.prototype, function() {
    return /* @__PURE__ */ React.createElement(Chat, null);
  })
];
const onUnload = function() {
  return patches.forEach(function(p) {
    return p();
  });
};exports.onUnload=onUnload;return exports;})({},vendetta.metro,vendetta.patcher,vendetta.metro.common,vendetta.storage,vendetta.ui,vendetta.ui.components);