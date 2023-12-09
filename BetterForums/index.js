(function(exports,metro,common,patcher,ui,assets){'use strict';const { View, Text, Pressable } = metro.findByProps("Button", "Text", "View");
const snowflakeUtils = metro.findByProps("extractTimestamp");
const MessageStyles = common.stylesheet.createThemedStyleSheet({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: common.constants.Fonts.PRIMARY_SEMIBOLD,
    fontSize: 24,
    textAlign: "left",
    color: ui.semanticColors.HEADER_PRIMARY,
    paddingVertical: 25
  },
  text: {
    flex: 1,
    flexDirection: "row",
    fontSize: 16,
    textAlign: "justify",
    color: ui.semanticColors.HEADER_PRIMARY
  },
  dateContainer: {
    height: 16,
    alignSelf: "baseline"
  }
});
function FancyDate(param) {
  let { date } = param;
  return /* @__PURE__ */ React.createElement(Pressable, {
    style: MessageStyles.dateContainer,
    onPress: function() {
      common.toasts.open({
        content: common.moment(date).toLocaleString(),
        source: assets.getAssetByName("clock").id
      });
    },
    onLongPress: function() {
      common.clipboard.setString(date.getTime().toString());
      common.toasts.open({
        content: "Copied to clipboard"
      });
    }
  }, /* @__PURE__ */ React.createElement(Text, {
    style: MessageStyles.text
  }, common.moment(date).fromNow()));
}
function HiddenChannel(param) {
  let { channel } = param;
  return /* @__PURE__ */ React.createElement(View, {
    style: MessageStyles.container
  }, /* @__PURE__ */ React.createElement(Text, {
    style: MessageStyles.title
  }, "Hewwo :3"), /* @__PURE__ */ React.createElement(Text, {
    style: MessageStyles.text
  }, "Topic: ", channel.topic || "No topic.", "\n\n", "Creation date: ", /* @__PURE__ */ React.createElement(FancyDate, {
    date: new Date(snowflakeUtils.extractTimestamp(channel.id))
  }), "\n\n", "Last message: ", channel.lastMessageId ? /* @__PURE__ */ React.createElement(FancyDate, {
    date: new Date(snowflakeUtils.extractTimestamp(channel.lastMessageId))
  }) : "No messages.", "\n\n", "Last pin: ", channel.lastPinTimestamp ? /* @__PURE__ */ React.createElement(FancyDate, {
    date: new Date(channel.lastPinTimestamp)
  }) : "No pins."));
}const Permissions = metro.findByProps("getChannelPermissions", "can");
const Router = metro.findByProps("transitionToGuild");
const Fetcher = metro.findByProps("stores", "fetchMessages");
const { ChannelTypes } = metro.findByProps("ChannelTypes");
const { getChannel } = metro.findByProps("getChannel");
const skipChannels = [
  ChannelTypes.DM,
  ChannelTypes.GROUP_DM,
  ChannelTypes.GUILD_CATEGORY
];
function isHidden(channel) {
  if (channel == void 0)
    return false;
  if (typeof channel === "string")
    channel = getChannel(channel);
  if (!channel || skipChannels.includes(channel.type))
    return false;
  channel.realCheck = true;
  let res = !Permissions.can(common.constants.Permissions.VIEW_CHANNEL, channel);
  delete channel.realCheck;
  return res;
}
function patchForum() {
  const MessagesConnected = metro.findByName("MessagesWrapperConnected", false);
  patcher.after("can", Permissions, function(param, res) {
    let [permID, channel] = param;
    if (!channel?.realCheck && permID === common.constants.Permissions.VIEW_CHANNEL)
      return true;
    return res;
  });
  patcher.instead("transitionToGuild", Router, function(args, orig) {
    const [_, channel] = args;
    if (!isHidden(channel) && typeof orig === "function")
      orig(args);
  });
  patcher.instead("fetchMessages", Fetcher, function(args, orig) {
    const [channel] = args;
    if (!isHidden(channel) && typeof orig === "function")
      orig(args);
  });
  patcher.instead("default", MessagesConnected, function(args, orig) {
    const channel = args[0]?.channel;
    if (!isHidden(channel) && typeof orig === "function")
      return orig(...args);
    else
      return common.React.createElement(HiddenChannel, {
        channel
      });
  });
}let patches = [];
var index = {
  onLoad: function() {
    patches.push(patchForum());
  },
  onUnload: function() {
    for (const unpatch of patches) {
      unpatch();
    }
  }
};exports.default=index;Object.defineProperty(exports,'__esModule',{value:true});return exports;})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui,vendetta.ui.assets);