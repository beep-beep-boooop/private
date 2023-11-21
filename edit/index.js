(function(D,b,i,o,L,e,_,p,f,j){"use strict";const{FormRow:v}=_.Forms,P=o.findByProps("ActionSheetRow")?.ActionSheetRow;function S(n){let{label:r,icon:a,onPress:c,onLongPress:t}=n;const u=e.stylesheet.createThemedStyleSheet({icon:{width:24,height:24,tintColor:p.semanticColors.INTERACTIVE_NORMAL}});return P?React.createElement(P,{label:r,icon:React.createElement(P.Icon,{source:a,IconComponent:function(){return React.createElement(e.ReactNative.Image,{resizeMode:"cover",style:u.icon,source:a})}}),onPress:function(){return c?.()},onLongPress:function(){return t?.()}}):React.createElement(v,{label:r,leading:React.createElement(v.Icon,{source:a}),onPress:function(){return c?.()},onLongPress:function(){return t?.()}})}const z="https://api.deeplx.org/translate",J="https://translate.googleapis.com/translate_a/single?client=gtx&dt=t";async function Y(n){const r=`${J}&sl=auto&tl=en&q=${encodeURIComponent(n.replace(/\n/g,"                                           "))}`;try{const a=await fetch(r);return a.ok?(await a.json())[0][0][0]:"Try Again"}catch{}}async function G(n){const r=await(await fetch(z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n,source_lang:"auto",target_lang:"en"})})).json();return r.code!==200?"Try Again.":r.data}async function W(n,r){try{return r==="dl"?await G(n):await Y(n)}catch{}}const x=` \uFF3D\`

`;o.findByStoreName("MessageStore"),o.findByProps("getChannel","getDMFromUserId");const F=o.findByProps("openLazy","hideActionSheet");async function O(n,r){let a=n.content;a.includes(x)&&(a=`${a.substring(a.lastIndexOf(x)+x.length)}`);const c=await W(a,r);j.showConfirmationAlert({title:`Translation [en] | @${n.author.globalName?.normalize("NFKC")||n.author.username}`,content:`${c}`,confirmText:"Copy",cancelText:"Close",confirmColor:"brand",onConfirm:function(){try{e.clipboard.setString(`${c}`),f.showToast("Copied Translation",i.getAssetIDByName("toast_copy_message"))}catch{}}}),F.hideActionSheet()}function V(){b.before("openLazy",F,function(n){const[r,a,c]=n,t=c?.message;a!=="MessageLongPressActionSheet"||!t||r.then(function(u){const E=b.after("default",u,function(N,s){e.React.useEffect(function(){return function(){return E()}},[]);const h=L.findInReactTree(s,function(g){return g?.[0]?.type?.name==="ButtonRow"});if(!h)return s;t.content&&h.splice(5,0,e.React.createElement(S,{label:"Translate Message",icon:i.getAssetIDByName("ic_locale_24px"),onPress:async function(){return await O(t,"dl")},onLongPress:async function(){return await O(t,"gl")}}))})})})}const{View:l,Text:k,TextInput:X,TouchableOpacity:R}=_.General,{FormIcon:B}=_.Forms,{ScrollView:$,Image:K,Modal:Z}=e.ReactNative,q=o.findByProps("pushModal"),C=o.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:m}}=o.findByProps("colors","meta"),Q=o.findByName("Navigator")??o.findByProps("Navigator")?.Navigator,ee=o.findByProps("getRenderCloseButton")?.getRenderCloseButton??o.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,te=o.findByName("Svg",!1).default,w=o.findByName("Svg",!1).Path,ne=o.findByProps("useSafeAreaInsets");function H(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"hmm",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"hmm",c=arguments.length>3?arguments[3]:void 0;return function(){const[t,u]=e.React.useState(!0),[E,N]=e.React.useState(`${r}`),s={header:m(C.theme,p.semanticColors.HEADER_PRIMARY),test:m(C.theme,p.semanticColors.TEXT_MUTED),bgDark:m(C.theme,p.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:m(C.theme,p.semanticColors.BACKGROUND_SECONDARY),bgBrighter:m(C.theme,p.semanticColors.BACKGROUND_ACCENT)},h=e.React.createElement(te,{height:"24",width:"24",viewBox:"0 0 24 24",fill:t?s.header:s.test},e.React.createElement(w,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(w,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(w,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"})),[g,d]=e.React.useState(!1),M=e.React.useRef(null),oe=ne.useSafeAreaInsets();let ie=e.React.createElement(l,{style:{marginTop:0}},e.React.createElement(l,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(l,{style:{display:"flex",flexDirection:"row",gap:8}},e.React.createElement(R,{onPress:function(){u(!t)},onLongPress:function(){f.showToast("Toggle Word Wrap",i.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:t?s.bgBrighter:s.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:t?s.bgBright:s.bgDark}},h),e.React.createElement(R,{onPress:function(){d(!0)},onLongPress:function(){f.showToast(e.i18n.Messages.JUMP,i.getAssetIDByName("ic_information_filled_24px"))},style:{marginLeft:10,backgroundColor:s.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:s.bgDark}},e.React.createElement(K,{source:i.getAssetIDByName("ic_reply_24px"),style:{height:24,width:24,transform:[{scaleX:-1},{rotate:"-90deg"}]}})))),e.React.createElement($,{ref:M,style:{margin:15,marginBottom:50+oe.bottom}},e.React.createElement($,{horizontal:!t},e.React.createElement(l,{style:{flexDirection:"row"}},e.React.createElement(l,{style:{borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:s.bgDark,marginRight:5,paddingRight:2,paddingLeft:2,alignSelf:"flex-start"}}),e.React.createElement(X,{multiline:!0,selectable:!0,style:[{color:s.header,lineHeight:20,flex:1}],onChangeText:function(y){N(`${y}`)}},E)))),e.React.createElement(Z,{transparent:!0,animationType:"none",visible:g,onRequestClose:function(){return d(!1)}},e.React.createElement(l,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}},e.React.createElement(l,{style:{backgroundColor:s.bgBright,padding:20,borderRadius:10,width:"90%"}},e.React.createElement(l,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}},e.React.createElement(_.Forms.FormText,{style:{fontSize:20,fontFamily:e.constants.Fonts.PRIMARY_BOLD}},e.i18n.Messages.JUMP),e.React.createElement(R,{onPress:function(){return d(!1)}},e.React.createElement(B,{source:i.getAssetIDByName("ic_close_16px"),style:{opacity:1}}))),e.React.createElement(R,{style:{backgroundColor:s.bgDark,borderRadius:5,padding:10,marginBottom:15,marginTop:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let y=M?.current;d(!1),y?.scrollToEnd?.({animated:!0})}},e.React.createElement(B,{source:i.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1}}),e.React.createElement(_.Forms.FormText,{style:{color:s.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the bottom"),e.React.createElement(l,null)),e.React.createElement(R,{style:{backgroundColor:s.bgDark,borderRadius:5,padding:10,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let y=M?.current;d(!1),y?.scrollTo?.({y:0,animated:!0})}},e.React.createElement(B,{source:i.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1,transform:[{scaleY:-1}]}}),e.React.createElement(_.Forms.FormText,{style:{color:s.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the top"),e.React.createElement(l,null))))));return e.React.createElement(Q,{initialRouteName:"TEXT_EDITOR",screens:{TEXT_EDITOR:{headerLeft:ee(function(){return q.popModal("text-editor")}),headerRight:e.React.createElement(R,{onPress:c(`${E}`),onLongPress:c(`${E}`)},e.React.createElement(B,{source:i.getAssetIDByName("ic_edit_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}})),render:function(){return ie},headerTitle:function(){let y=m(C.theme,p.semanticColors.HEADER_PRIMARY);return e.React.createElement(R,{onPress:function(){e.clipboard.setString(n),f.showToast(e.i18n.Messages.COPIED_TEXT,i.getAssetIDByName("toast_copy_message"))}},e.React.createElement(k,{numberOfLines:1,style:{color:y}},n),e.React.createElement(k,{style:{color:y,fontSize:12}},a))}}}})}}const U=o.findByProps("getChannel","getDMFromUserId");o.findByStoreName("MessageStore"),o.findByStoreName("SelectedChannelStore"),o.findByProps("MessagesHandlers");const T=o.findByProps("openLazy","hideActionSheet"),A=o.findByProps("pushModal");function ae(n){const r=JSON.parse(JSON.stringify(n));for(const a in r.author)switch(a){case"email":case"phone":case"mfaEnabled":case"hasBouncedEmail":delete r.author[a]}return Object.fromEntries(Object.entries(r).sort(function(a,c){let[t]=a,[u]=c;return t.localeCompare(u)}))}function re(){b.before("openLazy",T,function(n){const[r,a,c]=n,t=c?.message;a!=="MessageLongPressActionSheet"||!t||r.then(function(u){const E=b.after("default",u,function(N,s){e.React.useEffect(function(){return function(){return E()}},[]);const h=L.findInReactTree(s,function(g){return g?.[0]?.type?.name==="ButtonRow"});if(!h)return s;h.splice(21,0,e.React.createElement(S,{label:"View Raw",icon:i.getAssetIDByName("ic_chat_bubble_16px"),onPress:async function(){A.pushModal({key:"text-editor",modal:{key:"text-editor",modal:H(t.content&&t.content!=""?t?.content.length>32?t?.content?.slice(0,32)?.replace(/\n/g," ")+"...":t?.content:"[Attachment(s)]",JSON.stringify(ae(t),null,"	"),`@${t?.author?.username}`,function(g){try{let d={type:"MESSAGE_UPDATE",message:{...JSON.parse(g),guild_id:U.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0};(!d.message.content||d.message.content.replace(/\ufeff/g,"")==="")&&delete d.message.content,e.FluxDispatcher.dispatch(d),f.showToast("Pushed Edit",i.getAssetIDByName("ic_edit_24px")),A.popModal("text-editor")}catch{f.showToast("Make sure the JSON is valid",i.getAssetIDByName("ic_warning_24px"))}}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),T.hideActionSheet()},onLongPress:async function(){A.pushModal({key:"text-editor",modal:{key:"text-editor",modal:H(t.content&&t.content.trim()!==""?t.content.replace(/\n/g," "):"[Attachment(s)]",t.content&&t.content.trim()!==""?t.content:"\uFEFF ",`@${t?.author?.username}`,function(g){e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...t,content:`${g.replace(/\ufeff/g,"")}`,guild_id:U.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0}),f.showToast("Pushed Edit",i.getAssetIDByName("ic_edit_24px")),A.popModal("text-editor")}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),T.hideActionSheet()}})),t.__vml_deleted||h.splice(30,0,e.React.createElement(S,{label:"Hide Message Locally",icon:i.getAssetIDByName("ic_eye"),onPress:async function(){e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:t.id,channelId:t.channel_id,__vml_cleanup:!0}),f.showToast("Hidden Message",i.getAssetIDByName("ic_eye_hidden")),T.hideActionSheet()}}))})})})}let I=[];var se={onLoad:function(){I.push(re()),I.push(V())},onUnload:function(){for(const n of I)n()}};return D.default=se,Object.defineProperty(D,"__esModule",{value:!0}),D})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts);
