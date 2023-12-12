(function(exports,plugin,metro,ui,common,patcher,utils$1,components,alerts,toasts,assets,storage,_vendetta){'use strict';const CLIENT_ID = "915703782174752809";
const BASE_URL = "https://manti.vendicated.dev";
const API_URL = BASE_URL + "/api/reviewdb";var constants=/*#__PURE__*/Object.freeze({__proto__:null,API_URL:API_URL,BASE_URL:BASE_URL,CLIENT_ID:CLIENT_ID});const { getCurrentUser: getCurrentUser$2 } = metro.findByStoreName("UserStore");
const { meta } = metro.findByProps("colors", "meta");
const { useThemeContext: useThemeContext$1 } = metro.findByProps("useThemeContext");
const canDeleteReview = function(review) {
  return review.sender.discordID === getCurrentUser$2()?.id || admins.includes(getCurrentUser$2()?.id);
};
async function jsonFetch(input, options) {
  const req = await fetch(input, {
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    ...options
  });
  const json = await req.json();
  if (json.success === false)
    throw new Error(json.message);
  return json;
}
const useThemedColor = function(key) {
  return meta.resolveSemanticColor(useThemeContext$1()?.theme ?? "dark", ui.semanticColors[key]);
};var utils=/*#__PURE__*/Object.freeze({__proto__:null,canDeleteReview:canDeleteReview,jsonFetch:jsonFetch,useThemedColor:useThemedColor});const getReviews = async function(userId) {
  return (await jsonFetch(API_URL + `/users/${userId}/reviews`)).reviews;
};
const getAdmins = async function() {
  return await jsonFetch(BASE_URL + "/admins");
};
const addReview = async function(userId, comment) {
  return await jsonFetch(API_URL + `/users/${userId}/reviews`, {
    method: "PUT",
    body: JSON.stringify({
      comment,
      token: plugin.storage.authToken
    })
  });
};
const deleteReview = async function(userId, id) {
  return await jsonFetch(API_URL + `/users/${userId}/reviews`, {
    method: "DELETE",
    body: JSON.stringify({
      reviewid: id,
      token: plugin.storage.authToken
    })
  });
};
const reportReview = async function(id) {
  return await jsonFetch(API_URL + "/reports", {
    method: "PUT",
    body: JSON.stringify({
      reviewid: id,
      token: plugin.storage.authToken
    })
  });
};
const getCurrentUser$1 = async function() {
  return await jsonFetch(API_URL + "/users", {
    method: "POST",
    body: JSON.stringify({
      token: plugin.storage.authToken
    })
  });
};var api=/*#__PURE__*/Object.freeze({__proto__:null,addReview:addReview,deleteReview:deleteReview,getAdmins:getAdmins,getCurrentUser:getCurrentUser$1,getReviews:getReviews,reportReview:reportReview});const { hideActionSheet } = metro.findByProps("openLazy", "hideActionSheet");
const { showSimpleActionSheet } = metro.findByProps("showSimpleActionSheet");
function showReviewActionSheet(review) {
  return showSimpleActionSheet({
    key: "ReviewOverflow",
    header: {
      title: review.type !== 3 ? `Review by ${review.sender.username}` : "ReviewDB System Message",
      // TODO: Return to the user profile
      onClose: function() {
        return hideActionSheet();
      }
    },
    options: [
      {
        label: "Copy Text",
        onPress: function() {
          common.clipboard.setString(review.comment);
          toasts.showToast("Copied Review Text", assets.getAssetIDByName("ic_message_copy"));
        }
      },
      ...plugin.storage.authToken && review.type !== 3 ? [
        ...canDeleteReview(review) ? [
          {
            label: "Delete Review",
            isDestructive: true,
            onPress: function() {
              return alerts.showConfirmationAlert({
                title: "Delete Review",
                content: "Are you sure you want to delete this review?",
                confirmText: "Yes",
                cancelText: "No",
                // @ts-ignore
                confirmColor: "red",
                onConfirm: function() {
                  return deleteReview(review.sender.discordID, review.id);
                }
              });
            }
          }
        ] : [],
        {
          label: "Report Review",
          isDestructive: true,
          onPress: function() {
            return alerts.showConfirmationAlert({
              title: "Report Review",
              content: "Are you sure you want to report this review?",
              confirmText: "Yes",
              cancelText: "No",
              // @ts-ignore
              confirmColor: "red",
              onConfirm: function() {
                return reportReview(review.id);
              }
            });
          }
        }
      ] : []
    ]
  });
}function ReviewBadge(param) {
  let { badge } = param;
  return /* @__PURE__ */ React.createElement(common.ReactNative.Pressable, {
    style: {
      marginLeft: 4
    },
    onPress: function() {
      toasts.showToast(badge.name, {
        uri: badge.icon
      });
    }
  }, /* @__PURE__ */ React.createElement(common.ReactNative.Image, {
    source: {
      uri: badge.icon,
      width: 16,
      height: 16
    }
  }));
}const styles$2 = common.stylesheet.createThemedStyleSheet({
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});
const { FormLabel } = components.Forms;
function ReviewUsername(param) {
  let { username, badges } = param;
  return /* @__PURE__ */ React.createElement(common.ReactNative.View, {
    style: styles$2.row
  }, /* @__PURE__ */ React.createElement(FormLabel, {
    text: username,
    style: {
      color: useThemedColor("TEXT_NORMAL")
    }
  }), /* @__PURE__ */ React.createElement(common.ReactNative.View, {
    style: styles$2.row
  }, badges.map(function(b) {
    return /* @__PURE__ */ React.createElement(ReviewBadge, {
      badge: b
    });
  })));
}const styles$1 = common.stylesheet.createThemedStyleSheet({
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18
  }
});
const { FormRow: FormRow$1, FormSubLabel } = components.Forms;
function ReviewRow(param) {
  let { review } = param;
  return /* @__PURE__ */ React.createElement(FormRow$1, {
    label: /* @__PURE__ */ React.createElement(ReviewUsername, {
      username: review.sender.username,
      badges: review.sender.badges
    }),
    subLabel: /* @__PURE__ */ React.createElement(FormSubLabel, {
      text: review.comment,
      style: {
        color: useThemedColor("TEXT_NORMAL")
      }
    }),
    leading: /* @__PURE__ */ React.createElement(common.ReactNative.Image, {
      style: styles$1.avatar,
      source: {
        uri: review.sender.profilePhoto
      }
    }),
    onLongPress: function() {
      return showReviewActionSheet(review);
    }
  });
}const styles = common.stylesheet.createThemedStyleSheet({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  textInput: {
    flex: 1,
    flexGrow: 1,
    fontSize: 16,
    fontFamily: common.constants.Fonts.DISPLAY_MEDIUM
  },
  sendButton: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
    minWidth: 40,
    borderRadius: 999
  }
});
const { useThemeContext } = metro.findByProps("useThemeContext");
function ReviewInput(param) {
  let { userId, shouldEdit, refetch } = param;
  storage.useProxy(plugin.storage);
  const [reviewText, setReviewText] = common.React.useState("");
  const disableTextArea = !plugin.storage.authToken;
  const disableButton = !plugin.storage.authToken || reviewText.length === 0;
  return /* @__PURE__ */ common.React.createElement(common.ReactNative.View, {
    style: styles.container
  }, /* @__PURE__ */ common.React.createElement(common.ReactNative.TextInput, {
    style: {
      ...styles.textInput,
      color: useThemedColor("TEXT_NORMAL")
    },
    editable: !disableTextArea,
    placeholder: disableTextArea ? "You must be authenticated to add a review." : `Tap to ${shouldEdit ? "edit your" : "add a"} review`,
    placeholderTextColor: useThemedColor("INPUT_PLACEHOLDER_TEXT"),
    value: reviewText,
    onChangeText: function(i) {
      return setReviewText(i);
    }
  }), /* @__PURE__ */ common.React.createElement(common.ReactNative.Pressable, {
    style: {
      ...styles.sendButton,
      backgroundColor: plugin.storage.useThemedSend && useThemeContext().primaryColor || ui.rawColors.BRAND_500,
      opacity: disableButton ? 0.25 : 1
    },
    disabled: disableButton,
    onPress: function() {
      addReview(userId, reviewText).then(function(res) {
        setReviewText("");
        refetch();
        toasts.showToast(res.message, assets.getAssetIDByName("Check"));
      }).catch(function(err) {
        return toasts.showToast(err.message, assets.getAssetIDByName("Small"));
      });
    }
  }, /* @__PURE__ */ common.React.createElement(common.ReactNative.Image, {
    style: {
      tintColor: "#fff"
    },
    source: assets.getAssetIDByName("ic_send")
  })));
}const { getCurrentUser } = metro.findByStoreName("UserStore");
const UserProfileSection = metro.findByName("UserProfileSection");
function ReviewSection(param) {
  let { userId } = param;
  const [reviews, setReviews] = common.React.useState([]);
  const fetchReviews = function() {
    getReviews(userId).then(function(i) {
      return setReviews(i);
    });
  };
  common.React.useEffect(fetchReviews, []);
  const hasExistingReview = reviews.filter(function(i) {
    return i.sender.discordID === getCurrentUser()?.id;
  }).length !== 0;
  return /* @__PURE__ */ common.React.createElement(components.ErrorBoundary, null, /* @__PURE__ */ common.React.createElement(UserProfileSection, {
    title: "Reviews",
    showContainer: true
  }, /* @__PURE__ */ common.React.createElement(common.ReactNative.View, {
    style: {
      flex: 1
    }
  }, reviews.map(function(i) {
    return /* @__PURE__ */ common.React.createElement(ReviewRow, {
      review: i
    });
  })), /* @__PURE__ */ common.React.createElement(ReviewInput, {
    userId,
    refetch: fetchReviews,
    shouldEdit: hasExistingReview
  })));
}const UserProfile = metro.findByTypeName("UserProfile");
function patchProfile() {
  return patcher.after("type", UserProfile, function(args, ret) {
    const profileSections = utils$1.findInReactTree(ret, function(r) {
      return r?.type?.displayName === "View" && // UserProfileBio still exists even when the user has no bio. Yep.
      r?.props?.children.findIndex(function(i) {
        return i?.type?.name === "UserProfileBio";
      }) !== -1;
    })?.props?.children;
    const userId = args[0]?.userId;
    profileSections?.push(common.React.createElement(ReviewSection, {
      userId
    }));
  });
}const { pushModal, popModal } = metro.findByProps("pushModal");
const OAuth2AuthorizeModal = metro.findByName("OAuth2AuthorizeModal");
function showAuthModal() {
  return pushModal({
    key: "oauth2-authorize",
    modal: {
      key: "oauth2-authorize",
      modal: OAuth2AuthorizeModal,
      animation: "slide-up",
      shouldPersistUnderModals: false,
      props: {
        clientId: CLIENT_ID,
        redirectUri: API_URL + "/auth",
        scopes: [
          "identify"
        ],
        responseType: "code",
        permissions: 0n,
        cancelCompletesFlow: false,
        callback: async function(param) {
          let { location } = param;
          try {
            const url = new URL(location);
            url.searchParams.append("returnType", "json");
            url.searchParams.append("clientMod", "vendetta");
            const { token, success, message } = await jsonFetch(url, {
              headers: {
                accept: "application/json"
              }
            });
            if (success) {
              plugin.storage.authToken = token;
            } else {
              popModal("oauth2-authorize");
              throw new Error(message);
            }
          } catch (e) {
            _vendetta.logger.error("Authorization failed!", e);
          }
        },
        dismissOAuthModal: function() {
          return popModal("oauth2-authorize");
        }
      },
      closable: true
    }
  });
}function exposeAPI() {
  globalThis.vendettaRDB = {
    api,
    utils: {
      ...utils,
      showAuthModal,
      showReviewActionSheet
    },
    constants
  };
  return function() {
    return delete globalThis.vendettaRDB;
  };
}const { FormSection, FormRow, FormSwitchRow, FormDivider } = components.Forms;
function Settings() {
  storage.useProxy(plugin.storage);
  return /* @__PURE__ */ React.createElement(common.ReactNative.ScrollView, {
    style: {
      flex: 1
    },
    contentContainerStyle: {
      paddingBottom: 38
    }
  }, /* @__PURE__ */ React.createElement(FormSection, {
    title: "Authentication",
    titleStyleType: "no_border"
  }, /* @__PURE__ */ React.createElement(FormRow, {
    label: "Authenticate with ReviewDB",
    leading: /* @__PURE__ */ React.createElement(FormRow.Icon, {
      source: assets.getAssetIDByName("copy")
    }),
    trailing: FormRow.Arrow,
    onPress: showAuthModal
  }), /* @__PURE__ */ React.createElement(FormDivider, null), /* @__PURE__ */ React.createElement(FormRow, {
    label: "Log out of ReviewDB",
    subLabel: "Note that this does not remove ReviewDB from your Authorized Apps page in Discord.",
    leading: /* @__PURE__ */ React.createElement(FormRow.Icon, {
      source: assets.getAssetIDByName("ic_logout_24px")
    }),
    disabled: plugin.storage.authToken.length === 0,
    onPress: function() {
      return plugin.storage.authToken = "";
    }
  })), /* @__PURE__ */ React.createElement(FormSection, {
    title: "Settings"
  }, /* @__PURE__ */ React.createElement(FormSwitchRow, {
    label: "Use profile-themed send button",
    subLabel: "Controls whether the review send button should attempt to match the user's profile colors.",
    leading: /* @__PURE__ */ React.createElement(FormRow.Icon, {
      source: assets.getAssetIDByName("ic_paint_brush")
    }),
    value: plugin.storage.useThemedSend,
    onValueChange: function(v) {
      return plugin.storage.useThemedSend = v;
    }
  })));
}plugin.storage.authToken ??= "";
plugin.storage.useThemedSend ??= true;
const patches = [
  exposeAPI(),
  patchProfile()
];
const admins = [];
getAdmins().then(function(i) {
  return admins.push(...i);
});
const onUnload = function() {
  return patches.forEach(function(p) {
    return p();
  });
};exports.admins=admins;exports.onUnload=onUnload;exports.settings=Settings;return exports;})({},vendetta.plugin,vendetta.metro,vendetta.ui,vendetta.metro.common,vendetta.patcher,vendetta.utils,vendetta.ui.components,vendetta.ui.alerts,vendetta.ui.toasts,vendetta.ui.assets,vendetta.storage,vendetta);