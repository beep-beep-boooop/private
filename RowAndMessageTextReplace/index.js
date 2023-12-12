(function(exports,metro,common,patcher){'use strict';metro.findByProps("startEditMessage");
metro.findByProps("getMessage", "getMessages");
const patches = [];
metro.findByProps("_channelMessages");
metro.findByProps("updateMessageRecord", "createMessageRecord");
metro.findByName("MessageRecord", false);
const RowManager = metro.findByName("RowManager");
let codeRow = `row.message.edited = "pee"`;
let customRow = new Function("row", "data", codeRow);
let codeMessage = `message.content = "pee"`;
let customMessage = new Function("message", codeMessage);
patches.push(patcher.before("actionHandler", common.FluxDispatcher._actionHandlers._computeOrderedActionHandlers("MESSAGE_CREATE").find(function(i) {
  return i.name === "MessageStore";
}), function(args) {
  let message = args[0].message;
  try {
    customMessage(message);
  } catch (error) {
    console.error(error);
  }
}));
patches.push(patcher.before("actionHandler", common.FluxDispatcher._actionHandlers._computeOrderedActionHandlers("LOAD_MESSAGES_SUCCESS").find(function(i) {
  return i.name === "MessageStore";
}), function(args) {
  args[0].messages.forEach(function(message) {
    try {
      customMessage(message);
    } catch (error) {
      console.error(error);
    }
  });
}));
patches.push(patcher.after("generate", RowManager.prototype, function(param, row) {
  let [data] = param;
  if (data.rowType !== 1)
    return;
  try {
    customRow(row, data);
  } catch (error) {
    console.error(error);
  }
}));
const onUnload = function() {
  patches.forEach(function(unpatch) {
    return unpatch();
  });
};exports.onUnload=onUnload;return exports;})({},vendetta.metro,vendetta.metro.common,vendetta.patcher);