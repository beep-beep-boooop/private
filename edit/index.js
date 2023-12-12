(function(exports,patcher,assets,metro,utils,common,components,ui,toasts,alerts){'use strict';const { Image: Image$1 } = components.General;
const { FormRow } = components.Forms;
const ActionSheetRow = vendetta.metro.findByProps("ActionSheetRow")?.ActionSheetRow;
function ActionSheetRow$1(param) {
  let { label, icon, onPress, onLongPress } = param;
  const styles = common.stylesheet.createThemedStyleSheet({
    icon: {
      width: 18,
      height: 18,
      tintColor: ui.semanticColors.INTERACTIVE_NORMAL,
      opacity: 1
    }
  });
  return ActionSheetRow ? /* @__PURE__ */ React.createElement(ActionSheetRow, {
    label,
    icon: /* @__PURE__ */ React.createElement(ActionSheetRow.Icon, {
      source: icon,
      IconComponent: function() {
        return /* @__PURE__ */ React.createElement(Image$1, {
          resizeMode: "cover",
          style: styles.icon,
          source: icon
        });
      }
    }),
    onPress: function() {
      return onPress?.();
    },
    onLongPress: function() {
      return onLongPress?.();
    }
  }) : /* @__PURE__ */ React.createElement(FormRow, {
    label,
    leading: /* @__PURE__ */ React.createElement(FormRow.Icon, {
      source: icon,
      style: styles.icon
    }),
    onPress: function() {
      return onPress?.();
    },
    onLongPress: function() {
      return onLongPress?.();
    }
  });
}const API_URL_DEEPL = "https://mnhrte8nst.us.aircode.run/translate";
const API_URL_GOOGLE = "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t";
async function googleTranslate(inputText) {
  const fromLanguage = "auto";
  const toLanguage = "en";
  const url = `${API_URL_GOOGLE}&sl=${fromLanguage}&tl=${toLanguage}&q=${encodeURIComponent(inputText.replace(/\n/g, "                                           "))}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return "Try Again";
    }
    const data = await response.json();
    const translatedText = data[0][0][0];
    return translatedText;
  } catch (error) {
  }
}
async function deeplTranslate(text) {
  const sourceLang = "auto";
  const targetLang = "en";
  const data = await (await fetch(API_URL_DEEPL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text,
      source_lang: sourceLang,
      target_lang: targetLang
    })
  })).json();
  if (data.code !== 200) {
    return "Try Again.";
  }
  return data.data;
}
async function Translate(text, mode) {
  try {
    if (mode === "dl") {
      return await deeplTranslate(text);
    } else {
      return await googleTranslate(text);
    }
  } catch (error) {
  }
}const edit = " \uFF3D`\n\n";
metro.findByStoreName("MessageStore");
metro.findByProps("getChannel", "getDMFromUserId");
const ActionSheet$1 = metro.findByProps("openLazy", "hideActionSheet");
function stripStringAfterLastKeyword(inputString, keyword) {
  let lastKeywordIndex = inputString.lastIndexOf(keyword);
  if (lastKeywordIndex !== -1) {
    return inputString.substring(lastKeywordIndex + keyword.length);
  } else {
    return inputString;
  }
}
async function translate(message, mode) {
  let trimmed = message.content;
  try {
    const strip = "06e56823dash6945dash4281dash8a2bdashecee215cba27";
    trimmed = stripStringAfterLastKeyword(trimmed, strip);
  } catch (error) {
  }
  if (trimmed.includes(edit)) {
    trimmed = `${trimmed.substring(trimmed.lastIndexOf(edit) + edit.length)}`;
  }
  const translatedText = await Translate(trimmed, mode);
  alerts.showConfirmationAlert({
    title: `Translation [en] | @${message.author.globalName?.normalize("NFKC") || message.author.username}`,
    content: `${translatedText}`,
    confirmText: "Copy",
    cancelText: "Close",
    confirmColor: "brand",
    onConfirm: function() {
      try {
        common.clipboard.setString(`${translatedText}`);
        toasts.showToast("Copied Translation", assets.getAssetIDByName("toast_copy_message"));
      } catch (error) {
      }
    }
  });
  ActionSheet$1.hideActionSheet();
}
function patchButtons() {
  patcher.before("openLazy", ActionSheet$1, function(ctx) {
    const [component, args, actionMessage] = ctx;
    const message = actionMessage?.message;
    if (args !== "MessageLongPressActionSheet" || !message)
      return;
    component.then(function(instance) {
      const unpatch = patcher.after("default", instance, function(_, component2) {
        common.React.useEffect(function() {
          return function() {
            return unpatch();
          };
        }, []);
        const buttons = utils.findInReactTree(component2, function(x) {
          return x?.[0]?.type?.name === "ButtonRow";
        });
        if (!buttons)
          return component2;
        if (message.content) {
          buttons.splice(5, 0, /* @__PURE__ */ common.React.createElement(ActionSheetRow$1, {
            label: "Translate Message",
            icon: assets.getAssetIDByName("ic_locale_24px"),
            onPress: async function() {
              return await translate(message, "dl");
            },
            onLongPress: async function() {
              return await translate(message, "gl");
            }
          }));
        }
      });
    });
  });
}const { View, Text, TextInput, TouchableOpacity } = components.General;
const { FormIcon } = components.Forms;
const { ScrollView, Image, Modal } = common.ReactNative;
const modals$1 = metro.findByProps("pushModal");
const ThemeStore = metro.findByStoreName("ThemeStore");
const { meta: { resolveSemanticColor } } = metro.findByProps("colors", "meta");
const Navigator = metro.findByName("Navigator") ?? metro.findByProps("Navigator")?.Navigator;
const closeButton = metro.findByProps("getRenderCloseButton")?.getRenderCloseButton ?? metro.findByProps("getHeaderCloseButton")?.getHeaderCloseButton;
const Svg = metro.findByName("Svg", false).default;
const Path = metro.findByName("Svg", false).Path;
const SafeArea = metro.findByProps("useSafeAreaInsets");
function button(onPress, onLongPress) {
  return function() {
    return /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      onPress,
      onLongPress
    }, /* @__PURE__ */ common.React.createElement(FormIcon, {
      source: assets.getAssetIDByName("ic_edit_24px"),
      style: {
        marginRight: 8,
        marginLeft: -8,
        opacity: 1
      }
    }));
  };
}
function createEditModal() {
  let filename = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "unknown", data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "dummy", subtitle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "dummy", onPress = arguments.length > 3 ? arguments[3] : void 0, canEdit = arguments.length > 4 ? arguments[4] : void 0;
  return function() {
    const [wordWrap, setWordWrap] = common.React.useState(true);
    const [textStore, setText] = common.React.useState(`${data}`);
    const Colors = {
      header: resolveSemanticColor(ThemeStore.theme, ui.semanticColors.HEADER_PRIMARY),
      test: resolveSemanticColor(ThemeStore.theme, ui.semanticColors.TEXT_MUTED),
      bgDark: resolveSemanticColor(ThemeStore.theme, ui.semanticColors.BACKGROUND_SECONDARY_ALT),
      bgBright: resolveSemanticColor(ThemeStore.theme, ui.semanticColors.BACKGROUND_SECONDARY),
      bgBrighter: resolveSemanticColor(ThemeStore.theme, ui.semanticColors.BACKGROUND_ACCENT)
    };
    const wordWrapSvg = /* @__PURE__ */ common.React.createElement(Svg, {
      height: "24",
      width: "24",
      viewBox: "0 0 24 24",
      fill: wordWrap ? Colors.header : Colors.test
    }, /* @__PURE__ */ common.React.createElement(Path, {
      d: "M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"
    }), /* @__PURE__ */ common.React.createElement(Path, {
      d: "M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"
    }), /* @__PURE__ */ common.React.createElement(Path, {
      d: "M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"
    }));
    const [isOverlayVisible, setIsOverlayVisible] = common.React.useState(false);
    const scrollViewRef = common.React.useRef(null);
    const insets = SafeArea.useSafeAreaInsets();
    let loaded = /* @__PURE__ */ common.React.createElement(View, {
      style: {
        marginTop: 0
      }
    }, /* @__PURE__ */ common.React.createElement(View, {
      style: {
        padding: 15,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between"
      }
    }, /* @__PURE__ */ common.React.createElement(View, {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: 8
      }
    }, /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      onPress: function() {
        setWordWrap(!wordWrap);
      },
      onLongPress: function() {
        toasts.showToast("Toggle Word Wrap", assets.getAssetIDByName("ic_information_filled_24px"));
      },
      style: {
        backgroundColor: wordWrap ? Colors.bgBrighter : Colors.bgDark,
        padding: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: wordWrap ? Colors.bgBright : Colors.bgDark
      }
    }, wordWrapSvg), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      onPress: function() {
        setIsOverlayVisible(true);
      },
      onLongPress: function() {
        toasts.showToast(common.i18n.Messages.JUMP, assets.getAssetIDByName("ic_information_filled_24px"));
      },
      style: {
        marginLeft: 10,
        backgroundColor: Colors.bgDark,
        padding: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.bgDark
      }
    }, /* @__PURE__ */ common.React.createElement(Image, {
      source: assets.getAssetIDByName("ic_reply_24px"),
      style: {
        height: 24,
        width: 24,
        transform: [
          {
            scaleX: -1
          },
          {
            rotate: "-90deg"
          }
        ]
      }
    })))), /* @__PURE__ */ common.React.createElement(ScrollView, {
      ref: scrollViewRef,
      style: {
        margin: 15,
        marginBottom: 50 + insets.bottom
      }
    }, /* @__PURE__ */ common.React.createElement(ScrollView, {
      horizontal: !wordWrap
    }, /* @__PURE__ */ common.React.createElement(View, {
      style: {
        flexDirection: "row"
      }
    }, /* @__PURE__ */ common.React.createElement(View, {
      style: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: Colors.bgDark,
        marginRight: 5,
        paddingRight: 2,
        paddingLeft: 2,
        alignSelf: "flex-start"
      }
    }), /* @__PURE__ */ common.React.createElement(TextInput, {
      multiline: true,
      selectable: true,
      editable: canEdit,
      style: [
        {
          color: Colors.header,
          lineHeight: 20,
          flex: 1
        }
      ],
      onChangeText: function(text) {
        setText(`${text}`);
      }
    }, textStore)))), /* @__PURE__ */ common.React.createElement(Modal, {
      transparent: true,
      animationType: "none",
      visible: isOverlayVisible,
      onRequestClose: function() {
        return setIsOverlayVisible(false);
      }
    }, /* @__PURE__ */ common.React.createElement(View, {
      style: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
        // Semi-transparent background color
      }
    }, /* @__PURE__ */ common.React.createElement(View, {
      style: {
        backgroundColor: Colors.bgBright,
        padding: 20,
        borderRadius: 10,
        width: "90%"
      }
    }, /* @__PURE__ */ common.React.createElement(View, {
      style: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
      }
    }, /* @__PURE__ */ common.React.createElement(components.Forms.FormText, {
      style: {
        fontSize: 20,
        fontFamily: common.constants.Fonts.PRIMARY_BOLD
      }
    }, common.i18n.Messages.JUMP), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      onPress: function() {
        return setIsOverlayVisible(false);
      }
    }, /* @__PURE__ */ common.React.createElement(FormIcon, {
      source: assets.getAssetIDByName("ic_close_16px"),
      style: {
        opacity: 1
      }
    }))), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: {
        backgroundColor: Colors.bgDark,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      onPress: function() {
        let scrollView = scrollViewRef?.current;
        setIsOverlayVisible(false);
        scrollView?.scrollToEnd?.({
          animated: true
        });
      }
    }, /* @__PURE__ */ common.React.createElement(FormIcon, {
      source: assets.getAssetIDByName("ic_jump_to_bottom_24px"),
      style: {
        opacity: 1
      }
    }), /* @__PURE__ */ common.React.createElement(components.Forms.FormText, {
      style: {
        color: Colors.test,
        fontSize: 16,
        fontFamily: common.constants.Fonts.PRIMARY_BOLD,
        textTransform: "uppercase"
      }
    }, "Jump to the bottom"), /* @__PURE__ */ common.React.createElement(View, null)), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: {
        backgroundColor: Colors.bgDark,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      onPress: function() {
        let scrollView = scrollViewRef?.current;
        setIsOverlayVisible(false);
        scrollView?.scrollTo?.({
          y: 0,
          animated: true
        });
      }
    }, /* @__PURE__ */ common.React.createElement(FormIcon, {
      source: assets.getAssetIDByName("ic_jump_to_bottom_24px"),
      style: {
        opacity: 1,
        transform: [
          {
            scaleY: -1
          }
        ]
      }
    }), /* @__PURE__ */ common.React.createElement(components.Forms.FormText, {
      style: {
        color: Colors.test,
        fontSize: 16,
        fontFamily: common.constants.Fonts.PRIMARY_BOLD,
        textTransform: "uppercase"
      }
    }, "Jump to the top"), /* @__PURE__ */ common.React.createElement(View, null))))));
    return /* @__PURE__ */ common.React.createElement(Navigator, {
      initialRouteName: "FILE_CONTENT_PREVIEW",
      screens: {
        FILE_CONTENT_PREVIEW: {
          headerLeft: closeButton(function() {
            return modals$1.popModal("file-content-preview");
          }),
          headerRight: button(function() {
            return onPress(`${textStore}`);
          }),
          render: function() {
            return loaded;
          },
          headerTitle: function() {
            let headerColor = resolveSemanticColor(ThemeStore.theme, ui.semanticColors.HEADER_PRIMARY);
            return /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
              onPress: function() {
                common.clipboard.setString(filename);
                toasts.showToast(common.i18n.Messages.COPIED_TEXT, assets.getAssetIDByName("toast_copy_message"));
              }
            }, /* @__PURE__ */ common.React.createElement(View, {
              style: {
                alignSelf: "flex-start",
                maxWidth: "80%",
                minWidth: "80%"
              }
            }, /* @__PURE__ */ common.React.createElement(Text, {
              ellipsizeMode: "tail",
              numberOfLines: 1,
              style: {
                color: headerColor,
                textAlign: "left"
              }
            }, filename)), /* @__PURE__ */ common.React.createElement(View, {
              style: {
                alignSelf: "flex-start"
              }
            }, /* @__PURE__ */ common.React.createElement(Text, {
              ellipsizeMode: "tail",
              style: {
                color: headerColor,
                fontSize: 12,
                textAlign: "left"
              }
            }, subtitle)));
          }
        }
      }
    });
  };
}const ChannelStore = metro.findByProps("getChannel", "getDMFromUserId");
metro.findByStoreName("MessageStore");
metro.findByStoreName("SelectedChannelStore");
metro.findByProps("MessagesHandlers");
const ActionSheet = metro.findByProps("openLazy", "hideActionSheet");
const modals = metro.findByProps("pushModal");
function cleanMessage(msg) {
  const clone = JSON.parse(JSON.stringify(msg));
  for (const key in clone.author) {
    switch (key) {
      case "email":
      case "phone":
      case "mfaEnabled":
      case "hasBouncedEmail":
        delete clone.author[key];
    }
  }
  return Object.fromEntries(Object.entries(clone).sort(function(param, param1) {
    let [k1] = param, [k2] = param1;
    return k1.localeCompare(k2);
  }));
}
function patchEdit() {
  patcher.before("openLazy", ActionSheet, function(ctx) {
    const [component, args, actionMessage] = ctx;
    const message = actionMessage?.message;
    if (args !== "MessageLongPressActionSheet" || !message)
      return;
    component.then(function(instance) {
      const unpatch = patcher.after("default", instance, function(_, component2) {
        common.React.useEffect(function() {
          return function() {
            return unpatch();
          };
        }, []);
        const buttons = utils.findInReactTree(component2, function(x) {
          return x?.[0]?.type?.name === "ButtonRow";
        });
        if (!buttons)
          return component2;
        buttons.push(/* @__PURE__ */ common.React.createElement(ActionSheetRow$1, {
          label: "Edit Message Locally",
          icon: assets.getAssetIDByName("ic_chat_bubble_32px"),
          onPress: async function() {
            modals.pushModal({
              key: "file-content-preview",
              modal: {
                key: "file-content-preview",
                modal: createEditModal(message.content && message.content.trim() !== "" ? message.content.replace(/\n/g, " ") : "[Attachment(s)]", message.content && message.content.trim() !== "" ? message.content : "\uFEFF ", `@${message?.author?.username}`, function(textStore) {
                  common.FluxDispatcher.dispatch({
                    type: "MESSAGE_UPDATE",
                    message: {
                      ...message,
                      content: `${textStore}`,
                      guild_id: ChannelStore.getChannel(message?.channel_id)?.guild_id,
                      embeds: null,
                      messageReference: null
                    },
                    dont_log: true
                  });
                  toasts.showToast("Pushed Edit", assets.getAssetIDByName("ic_edit_24px"));
                  modals.popModal("file-content-preview");
                }),
                animation: "slide-up",
                shouldPersistUnderModals: false,
                closable: true
              }
            });
            ActionSheet.hideActionSheet();
          },
          onLongPress: async function() {
            modals.pushModal({
              key: "file-content-preview",
              modal: {
                key: "file-content-preview",
                modal: createEditModal(message.content && message.content != "" ? message?.content.length > 32 ? message?.content?.slice(0, 32)?.replace(/\n/g, " ") + "..." : message?.content : "[Attachment(s)]", JSON.stringify(cleanMessage(message), null, "	"), `@${message?.author?.username}`, function(textStore) {
                  try {
                    let toDispatch = {
                      type: "MESSAGE_UPDATE",
                      message: {
                        ...JSON.parse(textStore),
                        guild_id: ChannelStore.getChannel(message?.channel_id)?.guild_id,
                        embeds: null,
                        messageReference: null
                      },
                      dont_log: true
                    };
                    if (!toDispatch.message.content || toDispatch.message.content.replace(/\ufeff/g, "") === "")
                      delete toDispatch.message.content;
                    common.FluxDispatcher.dispatch(toDispatch);
                    toasts.showToast("Pushed Edit", assets.getAssetIDByName("ic_edit_24px"));
                    modals.popModal("file-content-preview");
                  } catch (error) {
                    toasts.showToast("Make sure the JSON is valid", assets.getAssetIDByName("ic_warning_24px"));
                  }
                }),
                animation: "slide-up",
                shouldPersistUnderModals: false,
                closable: true
              }
            });
            ActionSheet.hideActionSheet();
          }
        }));
        if (!message?.content?.includes("06e56823dash6945dash4281dash8a2bdashecee215cba27")) {
          buttons.push(/* @__PURE__ */ common.React.createElement(ActionSheetRow$1, {
            label: "Hide Message Locally",
            icon: assets.getAssetIDByName("ic_eye"),
            onPress: async function() {
              common.FluxDispatcher.dispatch({
                type: "MESSAGE_DELETE",
                id: message.id,
                channelId: message.channel_id,
                __vml_cleanup: true
              });
              toasts.showToast("Hidden Message", assets.getAssetIDByName("ic_eye_hidden"));
              ActionSheet.hideActionSheet();
            }
          }));
        }
      });
    });
  });
}let patches = [];
var index = {
  onLoad: function() {
    patches.push(patchEdit());
    patches.push(patchButtons());
  },
  onUnload: function() {
    for (const unpatch of patches) {
      unpatch();
    }
  }
};exports.default=index;Object.defineProperty(exports,'__esModule',{value:true});return exports;})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts);