(self.webpackChunk=self.webpackChunk||[]).push([["50"],{4696:function(t,e,n){"use strict";var o=n("1392"),i=n("9132");n("7403");let u=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=u},9792:function(t,e,n){"use strict";var o=n("2529"),i=n("1327"),u=n("6145"),r=n("1018");e.Z={components:{DemoNav:i.Z},setup(){let t=(0,u.Xw)();(0,o.YP)(t,(t,e)=>{document.documentElement.classList.remove(`van-doc-theme-${e}`),document.documentElement.classList.add(`van-doc-theme-${t}`);let{darkModeClass:n,lightModeClass:o}=r.v.site;n&&document.documentElement.classList.toggle(n,"dark"===t),o&&document.documentElement.classList.toggle(o,"light"===t)},{immediate:!0})}}},3459:function(t,e,n){"use strict";var o=n("8317"),i=n("3665");let u=(0,i.default)({},[["render",o.s]]);e.Z=u},9582:function(t,e,n){"use strict";var o=n("2453"),i=n("920");n("327");let u=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=u},920:function(t,e,n){"use strict";e.Z={name:"DemoBlock",props:{card:Boolean,title:String},data:()=>({slugify:null}),computed:{slugifyTitle(){return this.slugify?this.slugify(this.title):""}},watch:{slugifyTitle(t){t&&this.$nextTick(()=>{let e="";e=top?top.location.hash.split("#").pop():location.hash.split("#").pop();let n=document.getElementById(t);n&&t===e&&n.scrollIntoView(!0)})}},async mounted(){let{slugify:t}=await n.e("80").then(n.t.bind(n,"1825",23));this.slugify=t}}},3918:function(t,e,n){"use strict";var o=n("7219"),i=n("1097");n("552");let u=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=u},545:function(t,e,n){"use strict";var o=n("1018"),i=n("6781");e.Z={components:{DemoHomeNav:i.Z},computed:{lang(){let{lang:t}=this.$route.meta;return t},config(){let{locales:t}=o.v.site;return t?t[this.lang]:o.v.site},smallTitle(){return this.config.title.length>=8}}}},6781:function(t,e,n){"use strict";var o=n("3235"),i=n("2156");n("8801");let u=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=u},3818:function(t,e,n){"use strict";var o=n("3459");e.Z={components:{ArrowRight:o.Z},props:{lang:String,group:Object},data:()=>({active:[]}),computed:{base(){return this.lang?`/${this.lang}`:""}}}},1327:function(t,e,n){"use strict";var o=n("7015"),i=n("5578");n("6824");let u=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=u},5578:function(t,e){"use strict";e.Z={data:()=>({path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}),computed:{title(){let{name:t}=this.$route.meta||{};return t?t.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}}},9503:function(t,e,n){"use strict";var o=n("1261"),i=n("150");n("1440");let u=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=u},5138:function(t,e,n){"use strict";var o=n("2753");e.Z={name:"DemoSection",computed:{demoName(){let{meta:t}=this.$route||{};return t&&t.name?`demo-${(0,o.Y8)(t.name)}`:""}}}},9132:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("9792")},1097:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("545")},2156:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("3818")},150:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("5138")},1392:function(t,e,n){"use strict";n.d(e,{s:function(){return i}});var o=n("2529");function i(t,e,n,i,u,r){let s=(0,o.up)("demo-nav"),a=(0,o.up)("demo-section"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(c,null,{default:(0,o.w5)(({Component:t})=>[(0,o.Wm)(a,null,{default:(0,o.w5)(()=>[((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(t)))],1024))]),_:2},1024)]),_:1})],64)}},8317:function(t,e,n){"use strict";n.d(e,{s:function(){return s}});var o=n("2529");let i={viewBox:"0 0 1024 1024"},u=(0,o._)("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),r=[u,(0,o._)("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1)];function s(t,e){return(0,o.wg)(),(0,o.iD)("svg",i,r)}},2453:function(t,e,n){"use strict";n.d(e,{s:function(){return a}});var o=n("2529"),i=n("346");let u={class:"van-doc-demo-block"},r=["id"],s={key:1,class:"van-doc-demo-block__card"};function a(t,e,n,a,c,l){return(0,o.wg)(),(0,o.iD)("div",u,[n.title?((0,o.wg)(),(0,o.iD)("h2",{key:0,class:"van-doc-demo-block__title",id:l.slugifyTitle},(0,i.zw)(n.title),9,r)):(0,o.kq)("",!0),n.card?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.WI)(t.$slots,"default")])):(0,o.WI)(t.$slots,"default",{key:2})])}},7219:function(t,e,n){"use strict";n.d(e,{s:function(){return a}});var o=n("2529"),i=n("346");let u={class:"demo-home"},r=["src"],s={key:0,class:"demo-home__desc"};function a(t,e,n,a,c,l){let d=(0,o.up)("demo-home-nav");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("h1",{class:(0,i.C_)(["demo-home__title",{"demo-home__title--small":l.smallTitle}])},[(0,o._)("img",{src:l.config.logo},null,8,r),(0,o._)("span",null,(0,i.zw)(l.config.title),1)],2),l.config.description?((0,o.wg)(),(0,o.iD)("h2",s,(0,i.zw)(l.config.description),1)):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.config.nav,(t,e)=>((0,o.wg)(),(0,o.j4)(d,{key:e,lang:l.lang,group:t},null,8,["lang","group"]))),128))])}},3235:function(t,e,n){"use strict";n.d(e,{s:function(){return a}});var o=n("2529"),i=n("346");let u={class:"demo-home-nav"},r={class:"demo-home-nav__title"},s={class:"demo-home-nav__group"};function a(t,e,n,a,c,l){let d=(0,o.up)("arrow-right"),m=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",r,(0,i.zw)(n.group.title),1),(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.group.items,t=>((0,o.wg)(),(0,o.j4)(m,{class:"demo-home-nav__block",key:t.path,to:`${l.base}/${t.path}`},{default:(0,o.w5)(()=>[(0,o.Uk)((0,i.zw)(t.title)+" ",1),(0,o.Wm)(d,{class:"demo-home-nav__icon"})]),_:2},1032,["to"]))),128))])])}},7015:function(t,e,n){"use strict";n.d(e,{s:function(){return c}});var o=n("2529"),i=n("346"),u=n("991");let r={class:"demo-nav"},s={class:"demo-nav__title"},a=["d"];function c(t,e,n,c,l,d){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",s,(0,i.zw)(d.title),1),((0,o.wg)(),(0,o.iD)("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:e[0]||(e[0]=(...t)=>d.onBack&&d.onBack(...t))},[(0,o._)("path",{fill:"#969799","fill-rule":"evenodd",d:l.path},null,8,a)]))],512)),[[u.F8,d.title]])}},1261:function(t,e,n){"use strict";n.d(e,{s:function(){return u}});var o=n("2529"),i=n("346");function u(t,e,n,u,r,s){return(0,o.wg)(),(0,o.iD)("section",{class:(0,i.C_)(["van-doc-demo-section",s.demoName])},[(0,o.WI)(t.$slots,"default")],2)}},8181:function(t,e,n){"use strict";n.d(e,{vc:function(){return o}});let o={name:"galaxy",build:{css:{preprocessor:"less"},site:{publicPath:"/galaxy/"}},site:{title:"galaxy",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",nav:[{title:"\u5F00\u53D1\u6307\u5357",items:[{path:"home",title:"\u4ECB\u7ECD"},{path:"quickstart",title:"\u5FEB\u901F\u4E0A\u624B"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"demo-button",title:"DemoButton \u6309\u94AE"}]}]}}},1018:function(t,e,n){"use strict";n.d(e,{D:function(){return o},v:function(){return i}}),n("1530");let o={DemoButton:()=>n.e("249").then(n.bind(n,"9622"))},i={name:"galaxy",build:{css:{preprocessor:"less"},site:{publicPath:"/galaxy/"}},site:{title:"galaxy",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",nav:[{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"demo-button",title:"DemoButton \u6309\u94AE"}]}]}}},6145:function(t,e,n){"use strict";n.d(e,{Dl:function(){return s},Xw:function(){return a},z3:function(){return c}});var o=n("8468"),i=n("8181");let u=[],r=!1;window.top===window?window.addEventListener("message",t=>{"iframeReady"===t.data.type&&(u.forEach(t=>t()),u=[])}):window.top.postMessage({type:"iframeReady"},"*");function s(){window.top.postMessage({type:"replacePath",value:function(){let{path:t}=window.vueRouter.currentRoute.value;return i.vc.site.simulator?.routeMapper?i.vc.site.simulator?.routeMapper(t):t}()},"*")}function a(){let t=(0,o.iH)(function(){let t=window.localStorage.getItem("vantTheme");return t?t:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}());return window.addEventListener("message",e=>{if(e.data?.type!=="updateTheme")return;let n=e.data?.value||"";t.value=n}),t}function c(t){window.addEventListener("message",e=>{if(e.data?.type!=="replacePath")return;let n=e.data?.value||"";t.currentRoute.value.path!==n&&t.replace(n).catch(()=>{})})}},2753:function(t,e,n){"use strict";n.d(e,{Y8:function(){return i}});let o=navigator.userAgent.toLowerCase();function i(t,e="-"){return t.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}/ios|iphone|ipod|ipad|android/.test(o)},6481:function(t,e,n){"use strict";n.d(e,{GO:function(){return r},VQ:function(){return u}});let o="zh-CN",i=o;function u(){return i}function r(t){let e=localStorage.getItem("vant-cli-lang");if(e){i=e;return}if(navigator.language&&-1!==navigator.language.indexOf("zh-")){i=o;return}i=t||"en-US"}},9507:function(t,e,n){"use strict";var o=n("991"),i=n("9582"),u=n("9503"),r=n("557"),s=n("4696");n("6382"),window.app=(0,o.ri)(s.Z).use(r.N).component(i.Z.name,i.Z).component(u.Z.name,u.Z),setTimeout(()=>{window.app.mount("#app")},0),document.addEventListener("touchstart",()=>{},{passive:!0})},557:function(t,e,n){"use strict";n.d(e,{N:function(){return m}});var o=n("2529"),i=n("5218"),u=n("3918"),r=n("2753"),s=n("1018"),a=n("6481"),c=n("6145");let{locales:l,defaultLang:d}=s.v.site;(0,a.GO)(d);let m=(0,i.p7)({history:(0,i.r5)(),routes:function(){let t=[],e=Object.keys(s.D),n=l?Object.keys(l):[];return n.length?(t.push({name:"NotFound",path:"/:path(.*)+",redirect:t=>({name:function(t){let e=t.path.split("/")[1];return -1!==Object.keys(l).indexOf(e)?e:(0,a.VQ)()}(t)})}),n.forEach(e=>{t.push({name:e,path:`/${e}`,component:u.Z,meta:{lang:e}})})):(t.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),t.push({name:"home",path:"/",component:u.Z})),e.forEach(e=>{let o=(0,r.Y8)(e);n.length?n.forEach(n=>{t.push({name:`${n}/${o}`,path:`/${n}/${o}`,component:s.D[e],meta:{name:e,lang:n}})}):t.push({name:o,path:`/${o}`,component:s.D[e],meta:{name:e}})}),t}(),scrollBehavior:(t,e,n)=>n||{x:0,y:0}});(0,o.YP)(m.currentRoute,()=>{!m.currentRoute.value.redirectedFrom&&(0,o.Y3)(c.Dl)}),(0,c.z3)(m),window.vueRouter=m},6382:function(){"use strict";!function(){if("undefined"!=typeof window){var t,e="ontouchstart"in window;!document.createTouch&&(document.createTouch=function(t,e,o,i,u,r,s){return new n(e,o,{pageX:i,pageY:u,screenX:r,screenY:s,clientX:i-window.pageXOffset,clientY:u-window.pageYOffset},0,0)}),!document.createTouchList&&(document.createTouchList=function(){for(var t=i(),e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length=arguments.length,t}),!Element.prototype.matches&&(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),!Element.prototype.closest&&(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var n=function(t,e,n,o,i){o=o||0,i=i||0,this.identifier=e,this.target=t,this.clientX=n.clientX+o,this.clientY=n.clientY+i,this.screenX=n.screenX+o,this.screenY=n.screenY+i,this.pageX=n.pageX+o,this.pageY=n.pageY+i},o=!1;a.multiTouchOffset=75,!e&&new a}function i(){var t=[];return t.item=function(t){return this[t]||null},t.identifiedTouch=function(t){return this[t+1]||null},t}function u(e){return function(n){"mousedown"===n.type&&(o=!0),"mouseup"===n.type&&(o=!1),("mousemove"!==n.type||o)&&(("mousedown"===n.type||!t||t&&!t.dispatchEvent)&&(t=n.target),null==t.closest("[data-no-touch-simulate]")&&function(e,n){var o=document.createEvent("Event");o.initEvent(e,!0,!0),o.altKey=n.altKey,o.ctrlKey=n.ctrlKey,o.metaKey=n.metaKey,o.shiftKey=n.shiftKey,o.touches=s(n),o.targetTouches=s(n),o.changedTouches=r(n),t.dispatchEvent(o)}(e,n),"mouseup"===n.type&&(t=null))}}function r(e){var o=i();return o.push(new n(t,1,e,0,0)),o}function s(t){return"mouseup"===t.type?i():r(t)}function a(){window.addEventListener("mousedown",u("touchstart"),!0),window.addEventListener("mousemove",u("touchmove"),!0),window.addEventListener("mouseup",u("touchend"),!0)}}()}}]);