(self.webpackChunk=self.webpackChunk||[]).push([["209"],{4009:function(t,e,n){"use strict";var o=n("9620"),i=n("7069");n("5014");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},7018:function(t,e,n){"use strict";var o=n("2843"),i=n("6915"),r=n("6481");e.Z={components:{VanDoc:o.Z},data:()=>({hasSimulator:!0,darkModeClass:i.vc.site.darkModeClass}),computed:{simulator(){if(i.vc.site.simulator?.url)return i.vc.site.simulator?.url;let t=location.pathname.replace(/\/index(\.html)?/,"/");return`${t}mobile.html${location.hash}`},lang(){let{lang:t}=this.$route.meta;return t||""},langConfigs(){let{locales:t={}}=i.vc.site;return Object.keys(t).map(e=>({lang:e,label:t[e].langLabel||""}))},config(){let{locales:t}=i.vc.site;return t?t[this.lang]:i.vc.site},versions:()=>i.vc.site.versions||null},watch:{"$route.path"(){this.setTitleAndToggleSimulator()},lang(t){(0,r.Wg)(t),this.setTitleAndToggleSimulator()},config:{handler(t){t&&this.setTitleAndToggleSimulator()},immediate:!0}},mounted(){this.$route.hash&&this.$nextTick(()=>{let t=document.querySelector(this.$route.hash);t&&t.scrollIntoView()})},methods:{setTitleAndToggleSimulator(){let{title:t}=this.config,e=this.config.nav.reduce((t,e)=>[...t,...e.items],[]).find(t=>t.path===this.$route.meta.name);e&&e.title?t=e.title+" - "+t:this.config.description&&(t+=` - ${this.config.description}`),document.title=t,this.hasSimulator=!(i.vc.site.hideSimulator||this.config.hideSimulator||e&&e.hideSimulator)}}}},1972:function(t,e,n){"use strict";var o=n("1850"),i=n("3921");n("2541");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},3921:function(t,e){"use strict";e.Z={name:"VanDocContainer",props:{hasSimulator:Boolean}}},7359:function(t,e,n){"use strict";var o=n("3831"),i=n("4319");n("5927");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},8798:function(t,e,n){"use strict";var o=n("2753");e.Z={name:"VanDocContent",data:()=>({iframeDocument:null}),computed:{currentPage(){let{path:t}=this.$route;return t?t.split("/").slice(-1)[0]:this.$route.name}},watch:{$route(t,e){e.path!==t.path&&setTimeout(()=>{this.copyAction()})}},mounted(){this.copyAction()},methods:{onClick({target:t}){["H2","H3","H4","H5"].includes(t.tagName)&&this.scrollToAnchor(t)},scrollToAnchor(t){t.id&&(this.$router.push({name:this.$route.name,hash:"#"+t.id}),this.syncMobilePos(t.id))},syncMobilePos(t){if(!this.iframeDocument){let t=document.querySelector("iframe");this.iframeDocument=t.contentWindow.document}if(this.iframeDocument){let e=this.iframeDocument.getElementById(t);e&&e.scrollIntoView(!0)}},copyAction(){let t=document.querySelectorAll(".van-doc-card pre code");if(t&&t.length)for(let e=0;e<t.length;e++){let n=t[e],i=null;n.addEventListener("click",()=>{if(i)return;let t=n.innerText;(0,o.vQ)(t),n.classList.add("code-copy-success"),i=setTimeout(()=>{n.classList.remove("code-copy-success"),i=null},1400)})}}}}},3223:function(t,e,n){"use strict";var o=n("1077"),i=n("4599");n("7824");let r=(0,n("3665").default)(i.Z,[["render",o.s],["__scopeId","data-v-4fd78de2"]]);e.Z=r},4521:function(t,e,n){"use strict";var o=n("2753");e.Z={name:"DemoPlayground",props:{originCode:String,codeSnippet:String,transform:Boolean,compact:Boolean,inline:Boolean},data:()=>({showSource:!1,copyStatus:"ready"}),methods:{unescape,toggleSource(){this.showSource=!this.showSource},copySourceCode(){(0,o.vQ)(unescape(this.originCode)),this.copyStatus="copied",setTimeout(()=>{this.copyStatus="ready"},2e3)}}}},4258:function(t,e,n){"use strict";var o=n("156"),i=n("7851");n("4762");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},8709:function(t,e,n){"use strict";var o=n("6915"),i=n("6145");e.Z={name:"VanDocHeader",props:{lang:String,config:Object,versions:Array,langConfigs:Array,darkModeClass:String},data:()=>({currentTheme:(0,i.Vx)(),packageVersion:o.b$,showVersionPop:!1}),computed:{langLink(){return`#${this.$route.path.replace(this.lang,this.anotherLang.lang)}`},langLabel(){return this.anotherLang.label},anotherLang(){let t=this.langConfigs.filter(t=>t.lang!==this.lang);return t.length?t[0]:{}},themeImg(){return"light"===this.currentTheme?"https://b.yzcdn.cn/vant/dark-theme.svg":"https://b.yzcdn.cn/vant/light-theme.svg"}},watch:{currentTheme:{handler(t,e){window.localStorage.setItem("vantTheme",t),document.documentElement.classList.remove(`van-doc-theme-${e}`),document.documentElement.classList.add(`van-doc-theme-${t}`),(0,i.yt)(t)},immediate:!0}},methods:{toggleTheme(){this.currentTheme="light"===this.currentTheme?"dark":"light"},toggleVersionPop(){let t=!this.showVersionPop;document.body[`${t?"add":"remove"}EventListener`]("click",this.checkHideVersionPop),this.showVersionPop=t},checkHideVersionPop(t){!this.$refs.version.contains(t.target)&&(this.showVersionPop=!1)},onSwitchLang(t){this.$router.push(this.$route.path.replace(t.from,t.to))},onSwitchVersion(t){t.link&&(location.href=t.link)}}}},5644:function(t,e,n){"use strict";var o=n("2048"),i=n("2293");n("8665");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},9571:function(t,e,n){"use strict";var o=n("2834");e.Z={name:"VanDocNav",components:{[o.Z.name]:o.Z},props:{lang:String,navConfig:Array},data:()=>({isFixed:!1}),computed:{base(){return this.lang?`/${this.lang}/`:"/"}},created(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll(){let{pageYOffset:t}=window;this.isFixed=t>64}}}},2834:function(t,e,n){"use strict";var o=n("3247"),i=n("7143");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},7143:function(t,e){"use strict";e.Z={name:"VanDocNavLink",props:{base:String,item:Object},computed:{itemName(){let t=(this.item.title||this.item.name).split(" ");return`${t[0]} <span>${t.slice(1).join(" ")}</span>`},path(){return`${this.base}${this.item.path}`},active(){return this.$route.path===this.path||"home"===this.item.path&&this.$route.path===this.base}},watch:{active(){this.scrollIntoView()}},mounted(){this.scrollIntoView()},methods:{scrollIntoView(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}}},3517:function(t,e,n){"use strict";var o=n("3417"),i=n("8166");n("3055");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},8166:function(t,e){"use strict";e.Z={name:"VanDocSimulator",props:{src:String},data:()=>({scrollTop:window.scrollY,windowHeight:window.innerHeight}),computed:{isFixed(){return this.scrollTop>60},simulatorStyle(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted(){window.addEventListener("scroll",()=>{this.scrollTop=window.scrollY}),window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})}}},2843:function(t,e,n){"use strict";var o=n("4109"),i=n("9880");let r=(0,n("3665").default)(i.Z,[["render",o.s]]);e.Z=r},7080:function(t,e,n){"use strict";var o=n("5644"),i=n("4258"),r=n("7359"),s=n("1972"),a=n("3517");e.Z={name:"VanDoc",components:{DocNav:o.Z,DocHeader:i.Z,DocContent:r.Z,DocContainer:s.Z,DocSimulator:a.Z},props:{lang:String,versions:Array,simulator:String,langConfigs:Array,hasSimulator:Boolean,darkModeClass:String,config:{type:Object,required:!0},base:{type:String,default:""}},emits:["switch-version"],watch:{$route(){this.setNav()}},created(){this.setNav(),this.keyboardHandler()},methods:{setNav(){let t;let{nav:e}=this.config,n=e.reduce((t,e)=>t.concat(e.items),[]),o=this.$route.path.split("/").pop();for(let e=0,i=n.length;e<i;e++)if(n[e].path===o){t=e;break}this.leftNav=n[t-1],this.rightNav=n[t+1]},keyboardNav(t){if(/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase()))return;let e="prev"===t?this.leftNav:this.rightNav;e.path&&this.$router.push(this.base+e.path)},keyboardHandler(){window.addEventListener("keyup",t=>{switch(t.keyCode){case 37:this.keyboardNav("prev");break;case 39:this.keyboardNav("next")}})}}}},7069:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("7018")},4319:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("8798")},4599:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("4521")},7851:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("8709")},2293:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("9571")},9880:function(t,e,n){"use strict";n.d(e,{Z:function(){return o.Z}});var o=n("7080")},9620:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});var o=n("2529");let i={class:"app"};function r(t,e,n,r,s,a){let c=(0,o.up)("router-view"),l=(0,o.up)("van-doc");return(0,o.wg)(),(0,o.iD)("div",i,[a.config?((0,o.wg)(),(0,o.j4)(l,{key:0,lang:a.lang,config:a.config,versions:a.versions,simulator:a.simulator,"has-simulator":s.hasSimulator,"lang-configs":a.langConfigs,"dark-mode-class":s.darkModeClass},{default:(0,o.w5)(()=>[(0,o.Wm)(c)]),_:1},8,["lang","config","versions","simulator","has-simulator","lang-configs","dark-mode-class"])):(0,o.kq)("",!0)])}},1850:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});var o=n("2529"),i=n("346");function r(t,e,n,r,s,a){return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["van-doc-container van-doc-row",{"van-doc-container--with-simulator":n.hasSimulator}])},[(0,o.WI)(t.$slots,"default")],2)}},3831:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});var o=n("2529"),i=n("346");function r(t,e,n,r,s,a){return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["van-doc-content",`van-doc-content--${a.currentPage}`]),onClick:e[0]||(e[0]=(...t)=>a.onClick&&a.onClick(...t))},[(0,o.WI)(t.$slots,"default")],2)}},1077:function(t,e,n){"use strict";let o;n.d(e,{s:function(){return h}});var i=n("2529"),r=n("346"),s=n("991");let a={class:"demo-playground--code"},c={class:"demo-playground--code--actions"};let l=(o=()=>(0,i._)("span",null,null,-1),(0,i.dD)("data-v-4fd78de2"),o=o(),(0,i.Cn)(),o),u=["data-status"],d=["innerHTML"];function h(t,e,n,o,h,m){return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)({"demo-playground":!n.inline,transform:n.transform})},[n.inline?(0,i.WI)(t.$slots,"default",{key:0},void 0,!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",{class:(0,r.C_)(["demo-playground--previewer",{compact:n.compact}])},[(0,i.WI)(t.$slots,"default",{},void 0,!0)],2),(0,i._)("div",a,[(0,i._)("div",c,[l,(0,i._)("button",{title:"Copy source code",class:"action-icon",role:"copy","data-status":h.copyStatus,onClick:e[0]||(e[0]=(...t)=>m.copySourceCode&&m.copySourceCode(...t))},null,8,u),(0,i._)("button",{title:"Toggle source code panel",class:"action-icon",role:"source",onClick:e[1]||(e[1]=(...t)=>m.toggleSource&&m.toggleSource(...t))})]),(0,i.wy)((0,i._)("div",{innerHTML:m.unescape(n.codeSnippet),class:"demo-playground--code--content"},null,8,d),[[s.F8,h.showSource]])])],64))],2)}},156:function(t,e,n){"use strict";n.d(e,{s:function(){return $}});var o=n("2529"),i=n("346"),r=n("991");let s={class:"van-doc-header"},a={class:"van-doc-row"},c={class:"van-doc-header__top"},l={class:"van-doc-header__logo"},u=["src"],d={class:"van-doc-header__title"},h={key:0,class:"van-doc-header__subtitle"},m={class:"van-doc-header__top-nav"},g=["href"],p=["src"],f={key:1},v={key:0,class:"van-doc-header__top-nav-item"},w=["src"],y={key:1,ref:"version",class:"van-doc-header__top-nav-item"},k={key:0,class:"van-doc-header__version-pop"},_=["onClick"],S={key:2,class:"van-doc-header__top-nav-item"},b=["href"];function $(t,e,n,$,C,D){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",a,[(0,o._)("div",c,[(0,o._)("a",l,[(0,o._)("img",{src:n.config.logo},null,8,u),(0,o._)("span",d,(0,i.zw)(n.config.title),1),n.config.subtitle?((0,o.wg)(),(0,o.iD)("span",h,(0,i.zw)(n.config.subtitle),1)):(0,o.kq)("",!0)]),(0,o._)("ul",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.config.links,(t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:"van-doc-header__top-nav-item"},[(0,o._)("a",{class:"van-doc-header__link",target:"_blank",href:t.url},[t.logo?((0,o.wg)(),(0,o.iD)("img",{key:0,src:t.logo},null,8,p)):t.text?((0,o.wg)(),(0,o.iD)("span",f,(0,i.zw)(t.text),1)):(0,o.kq)("",!0)],8,g)]))),128)),n.darkModeClass?((0,o.wg)(),(0,o.iD)("li",v,[(0,o._)("a",{class:"van-doc-header__link",target:"_blank",onClick:e[0]||(e[0]=(...t)=>D.toggleTheme&&D.toggleTheme(...t))},[(0,o._)("img",{src:D.themeImg},null,8,w)])])):(0,o.kq)("",!0),n.versions?((0,o.wg)(),(0,o.iD)("li",y,[(0,o._)("span",{class:"van-doc-header__cube van-doc-header__version",onClick:e[1]||(e[1]=(...t)=>D.toggleVersionPop&&D.toggleVersionPop(...t))},[(0,o.Uk)((0,i.zw)(C.packageVersion)+" ",1),(0,o.Wm)(r.uT,{name:"van-doc-dropdown"},{default:(0,o.w5)(()=>[C.showVersionPop?((0,o.wg)(),(0,o.iD)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.versions,(t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"van-doc-header__version-pop-item",onClick:e=>D.onSwitchVersion(t)},(0,i.zw)(t.label),9,_))),128))])):(0,o.kq)("",!0)]),_:1})])],512)):(0,o.kq)("",!0),D.langLabel&&D.langLink?((0,o.wg)(),(0,o.iD)("li",S,[(0,o._)("a",{class:"van-doc-header__cube",href:D.langLink},(0,i.zw)(D.langLabel),9,b)])):(0,o.kq)("",!0)])])])])}},2048:function(t,e,n){"use strict";n.d(e,{s:function(){return s}});var o=n("2529"),i=n("346");let r={class:"van-doc-nav__title"};function s(t,e,n,s,a,c){let l=(0,o.up)("van-doc-nav-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["van-doc-nav",{"van-doc-nav-fixed":a.isFixed}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.navConfig,(t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"van-doc-nav__group",key:e},[(0,o._)("div",r,(0,i.zw)(t.title),1),t.items?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(t.items,(t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"van-doc-nav__item"},[(0,o.Wm)(l,{item:t,base:c.base},null,8,["item","base"])]))),128)):(0,o.kq)("",!0)]))),128))],2)}},3247:function(t,e,n){"use strict";n.d(e,{s:function(){return a}});var o=n("2529"),i=n("346");let r=["href","innerHTML"],s=["innerHTML"];function a(t,e,n,a,c,l){let u=(0,o.up)("router-link");return n.item.path?((0,o.wg)(),(0,o.j4)(u,{key:0,class:(0,i.C_)({active:l.active}),to:l.path,innerHTML:l.itemName},null,8,["class","to","innerHTML"])):n.item.link?((0,o.wg)(),(0,o.iD)("a",{key:1,href:n.item.link,innerHTML:l.itemName},null,8,r)):((0,o.wg)(),(0,o.iD)("a",{key:2,innerHTML:l.itemName},null,8,s))}},3417:function(t,e,n){"use strict";n.d(e,{s:function(){return s}});var o=n("2529"),i=n("346");let r=["src"];function s(t,e,n,s,a,c){return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["van-doc-simulator",{"van-doc-simulator-fixed":c.isFixed}])},[(0,o._)("iframe",{ref:"iframe",src:n.src,style:(0,i.j5)(c.simulatorStyle),frameborder:"0"},null,12,r)],2)}},4109:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});var o=n("2529");let i={class:"van-doc"};function r(t,e,n,r,s,a){let c=(0,o.up)("doc-header"),l=(0,o.up)("doc-nav"),u=(0,o.up)("doc-content"),d=(0,o.up)("doc-container"),h=(0,o.up)("doc-simulator");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c,{lang:n.lang,config:n.config,versions:n.versions,"lang-configs":n.langConfigs,"dark-mode-class":n.darkModeClass,onSwitchVersion:e[0]||(e[0]=e=>t.$emit("switch-version",e))},null,8,["lang","config","versions","lang-configs","dark-mode-class"]),(0,o.Wm)(l,{lang:n.lang,"nav-config":n.config.nav},null,8,["lang","nav-config"]),(0,o.Wm)(d,{"has-simulator":n.hasSimulator},{default:(0,o.w5)(()=>[(0,o.Wm)(u,null,{default:(0,o.w5)(()=>[(0,o.WI)(t.$slots,"default")]),_:3})]),_:3},8,["has-simulator"]),n.hasSimulator?((0,o.wg)(),(0,o.j4)(h,{key:0,src:n.simulator},null,8,["src"])):(0,o.kq)("",!0)])}},6915:function(t,e,n){"use strict";n.d(e,{De:function(){return i},b$:function(){return r},vc:function(){return o}});let o={name:"galaxy-vant",build:{css:{preprocessor:"less"},site:{publicPath:"/galaxy/"}},site:{title:"galaxy-vant",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",nav:[{title:"\u5F00\u53D1\u6307\u5357",items:[{path:"home",title:"\u4ECB\u7ECD"},{path:"quickstart",title:"\u5FEB\u901F\u4E0A\u624B"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"button",title:"Button \u6309\u94AE"},{path:"divider",title:"Divider \u5206\u5272\u7EBF"}]}]}},i={Home:()=>n.e("786").then(n.bind(n,"4728")),Quickstart:()=>n.e("436").then(n.bind(n,"369")),Button:()=>n.e("749").then(n.bind(n,"3001")),Divider:()=>n.e("50").then(n.bind(n,"3626")),Locale:()=>n.e("228").then(n.bind(n,"5594")),Style:()=>n.e("408").then(n.bind(n,"5818"))},r="0.0.1"},5014:function(t,e,n){"use strict";n.r(t.exports={})},2541:function(t,e,n){"use strict";n.r(t.exports={})},5927:function(t,e,n){"use strict";n.r(t.exports={})},7824:function(t,e,n){"use strict";n.r(t.exports={})},4762:function(t,e,n){"use strict";n.r(t.exports={})},8665:function(t,e,n){"use strict";n.r(t.exports={})},3055:function(t,e,n){"use strict";n.r(t.exports={})},3850:function(t,e,n){"use strict";n.r(t.exports={})},9809:function(t,e,n){"use strict";n.r(t.exports={})},7834:function(t,e,n){"use strict";n.r(t.exports={})},2839:function(t,e,n){"use strict";n.r(t.exports={})},4210:function(t,e,n){"use strict";n.r(t.exports={})},2409:function(t,e,n){"use strict";n.r(t.exports={})},7179:function(t,e,n){"use strict";n.r(t.exports={})},6145:function(t,e,n){"use strict";n.d(e,{Vx:function(){return l},nC:function(){return a},yt:function(){return c},z3:function(){return u}});var o=n("6915");let i=[],r=!1;function s(t){r?t():i.push(t)}window.top===window?window.addEventListener("message",t=>{"iframeReady"===t.data.type&&(r=!0,i.forEach(t=>t()),i=[])}):window.top.postMessage({type:"iframeReady"},"*");function a(){let t=document.querySelector("iframe");t&&s(()=>{t.contentWindow.postMessage({type:"replacePath",value:function(){let{path:t}=window.vueRouter.currentRoute.value;return o.vc.site.simulator?.routeMapper?o.vc.site.simulator?.routeMapper(t):t}()},"*")})}function c(t){let e=document.querySelector("iframe");e&&s(()=>{e.contentWindow.postMessage({type:"updateTheme",value:t},"*")})}function l(){let t=window.localStorage.getItem("vantTheme");return t?t:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function u(t){window.addEventListener("message",e=>{if(e.data?.type!=="replacePath")return;let n=e.data?.value||"";t.currentRoute.value.path!==n&&t.replace(n).catch(()=>{})})}},2753:function(t,e,n){"use strict";n.d(e,{Y8:function(){return r},tq:function(){return i},vQ:function(){return s}});let o=navigator.userAgent.toLowerCase(),i=/ios|iphone|ipod|ipad|android/.test(o);function r(t,e="-"){return t.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}function s(t){let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);let n=document.getSelection();if(!n)return;let o=n.rangeCount>0&&n.getRangeAt(0);e.select(),document.execCommand("copy"),document.body.removeChild(e),o&&(n.removeAllRanges(),n.addRange(o))}},6481:function(t,e,n){"use strict";n.d(e,{GO:function(){return c},VQ:function(){return s},Wg:function(){return a}});let o="zh-CN",i="vant-cli-lang",r=o;function s(){return r}function a(t){r=t,localStorage.setItem(i,t)}function c(t){let e=localStorage.getItem(i);if(e){r=e;return}if(navigator.language&&-1!==navigator.language.indexOf("zh-")){r=o;return}r=t||"en-US"}},1029:function(t,e,n){"use strict";var o=n("991"),i=n("4009"),r=n("3223"),s=n("4981");window.app=(0,o.ri)(i.Z).use(s.N).component(r.Z.name,r.Z),setTimeout(()=>{window.app.mount("#app")},0)},4981:function(t,e,n){"use strict";n.d(e,{N:function(){return d}});var o=n("2529"),i=n("5218"),r=n("2753"),s=n("6915"),a=n("6481"),c=n("6145");r.tq&&location.replace("mobile.html"+location.hash);let{locales:l,defaultLang:u}=s.vc.site;(0,a.GO)(u);let d=(0,i.p7)({history:(0,i.r5)(),routes:function(){let t=[],e=Object.keys(s.De);return l?t.push({name:"notFound",path:"/:path(.*)+",redirect:t=>({name:function(t){let e=t.path.split("/")[1];return -1!==Object.keys(l).indexOf(e)?e:(0,a.VQ)()}(t)})}):t.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"home"}}),e.forEach(e=>{let{component:n,lang:o}=function(t){if(-1!==t.indexOf("_")){let e=t.split("_"),n=e.shift();return{component:`${(0,r.Y8)(n)}`,lang:e.join("-")}}return{component:`${(0,r.Y8)(t)}`,lang:""}}(e);if("home"===n){var i,a;i=s.De[e],a=o,t.push({name:a||"home",path:`/${a||""}`,component:i,meta:{lang:a}})}o?t.push({name:`${o}/${n}`,path:`/${o}/${n}`,component:s.De[e],meta:{lang:o,name:n}}):t.push({name:`${n}`,path:`/${n}`,component:s.De[e],meta:{name:n}})}),t}(),scrollBehavior:t=>t.hash?{el:t.hash}:{top:0}});d.afterEach(()=>{(0,o.Y3)(c.nC)}),s.vc.site.simulator?.syncPathFromSimulator!==!1&&(0,c.z3)(d),window.vueRouter=d}}]);