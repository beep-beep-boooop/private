(function(exports,metro,patcher){'use strict';const Metadata = metro.findByProps("trackWithMetadata");
const { AnalyticsActionHandlers: Analytics } = metro.findByProps("AnalyticsActionHandlers");
const Properties = metro.findByProps("encodeProperties", "track");
const Reporter = metro.findByProps("submitLiveCrashReport");
const Sentry = {
  main: globalThis.__SENTRY__?.hub,
  client: globalThis.__SENTRY__?.hub?.getClient()
};
const patches = [];
const noopAndPush = function(prop, mod) {
  return patches.push(patcher.instead(prop, mod, function() {
  }));
};
const patchSet = [
  {
    module: Metadata,
    prop: "trackWithMetadata"
  },
  {
    module: Analytics,
    prop: "handleTrack"
  },
  {
    module: Properties,
    prop: "track"
  },
  {
    module: Reporter,
    prop: "submitLiveCrashReport"
  }
];
for (const p of patchSet)
  p.module?.[p.prop] && noopAndPush(p.prop, p.module);
if (Sentry.main && Sentry.client) {
  Sentry.client.getOptions().enabled = false;
  Sentry.client.close();
  Sentry.main.getStackTop().scope.clear();
  Sentry.main.getScope().clear();
  noopAndPush("addBreadcrumb", Sentry.main);
}
try {
  vendetta.metro.findByProps("Adjust").Adjust.setEnabled(false);
} catch (error) {
}
try {
  Object.keys(console).forEach(function(x) {
    return console[x] = console[x].__sentry_original__ ?? console[x];
  });
} catch {
}
const analyticsTest = /client-analytics\.braintreegateway\.com|discord\.com\/api\/v9\/science/;
patches.push(patcher.instead("send", XMLHttpRequest.prototype, function(args, orig) {
  if (!analyticsTest.test(this.__sentry_xhr__?.url))
    return orig.apply(this, args);
}));
function onUnload() {
  patches.forEach(function(p) {
    return p();
  });
  if (Sentry.main && Sentry.client) {
    Sentry.client.getOptions().enabled = true;
    Sentry.client.open();
  }
  try {
    vendetta.metro.findByProps("Adjust").Adjust.setEnabled(true);
  } catch (error) {
  }
}exports.onUnload=onUnload;return exports;})({},vendetta.metro,vendetta.patcher);