(function(t){function e(e){for(var n,a,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({latest:"latest"}[t]||t)+"."+{latest:"9cc30170"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={latest:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({latest:"latest"}[t]||t)+"."+{latest:"400a6b2a"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)}).then(function(){a[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,r){n=s[t]=[e,r]});e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=s[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}s[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/beer/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"0079":function(t,e,r){"use strict";var n=r("8869"),a=r.n(n);a.a},1661:function(t,e,r){},"1e19":function(t,e,r){"use strict";var n=r("454b"),a=r.n(n);a.a},"454b":function(t,e,r){},4678:function(t,e,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=s(t);return r(e)}function s(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="4678"},"4a89":function(t,e,r){"use strict";var n=r("d107"),a=r.n(n);a.a},"5c0b":function(t,e,r){"use strict";var n=r("b19e"),a=r.n(n);a.a},8869:function(t,e,r){},b19e:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",[t.loading?r("div",{staticClass:"loading"},[r("BeerLoader"),r("h2",[t._v("tapping the kegs")]),r("div",{staticClass:"almost"},[r("v-fade-transition",[t.additionalText?r("p",[t._v("pouring a pint...")]):t._e()])],1)],1):t._e(),t.apiLimit?r("div",{staticClass:"loading"},[r("AppHeader",{attrs:{noLinks:"true"}}),r("BeerLoader"),r("h2",[t._v("go grab a beer")]),r("div",{staticClass:"almost"},[r("p",[t._v("\n          untappd is telling us to cool our jets -\n          "),r("br"),t._v("try again after a cold one or two\n        ")])])],1):t._e(),t.apiLimit||t.loading?t._e():r("div",[r("AppHeader"),r("transition",{attrs:{name:"fade"}},[r("router-view")],1),t.viewingStats?t._e():r("ProfileDrawer",{staticClass:"hidden-sm-and-down"})],1)])],1)},s=[],i=r("9ab4"),o=r("2f62"),c=r("60a3"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",{attrs:{dark:"",color:"purple","scroll-toolbar-off-screen":"",fixed:""}},[t.noLinks?t._e():r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",{staticClass:"white--text"},[t._v("What's John Drinking?")]),r("v-spacer"),r("v-menu",{attrs:{"nudge-bottom":48},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:""}},n),[r("v-icon",[t._v("open_in_new")])],1)]}}])},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{on:{click:t.goHome}},[r("v-list-tile-title",[t._v("➜   view my website")])],1),r("v-list-tile",{on:{click:t.goToUntappd}},[r("v-list-tile-title",[t._v("➜   view my untappd page")])],1),r("v-list-tile",{on:{click:t.goToGitHub}},[r("v-list-tile-title",[t._v("➜   view my github page")])],1)],1)],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",width:"200"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("img",{staticClass:"beer-sign",attrs:{src:"/assets/beer_sign_cropped.jpg",alt:"beer"}}),r("v-list",{staticClass:"pt-0"},[r("v-list-tile",{on:{click:function(e){return t.$router.push({name:"Latest"})}}},[r("v-list-tile-action",[r("v-icon",[t._v("fas fa-beer")])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v("my latest beers")])],1)],1),r("v-list-tile",{on:{click:function(e){return t.$router.push({name:"Stats"})}}},[r("v-list-tile-action",[r("v-icon",[t._v("fas fa-chart-bar")])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v("my beer stats")])],1)],1),r("v-list-tile",{on:{click:function(e){return t.$router.push({name:"Top"})}}},[r("v-list-tile-action",[r("v-icon",[t._v("fas fa-award")])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v("my top beers")])],1)],1)],1)],1)],1)},l=[],d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.drawer=!1,e}return i["d"](e,t),e.prototype.goHome=function(){window.location.href="https://johnmberger.com"},e.prototype.goToUntappd=function(){window.location.href="https://untappd.com/user/Mustached"},e.prototype.goToGitHub=function(){window.location.href="https://github.com/johnmberger"},i["c"]([Object(c["b"])()],e.prototype,"noLinks",void 0),e=i["c"]([c["a"]],e),e}(c["c"]),f=d,b=f,p=(r("1e19"),r("2877")),v=Object(p["a"])(b,u,l,!1,null,"07c0c78e",null),m=v.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader-wrapper"},[r("div",{staticClass:"loader-container"},[r("div",{staticClass:"mug"},[r("div",{staticClass:"beer"})]),r("div",{staticClass:"bubble"}),r("div",{staticClass:"small-bubbles"}),r("div",{staticClass:"drip"})])])}],g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["d"](e,t),e=i["c"]([c["a"]],e),e}(c["c"]),y=g,_=y,w=(r("0079"),Object(p["a"])(_,h,j,!1,null,"2f466776",null)),k=w.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{staticClass:"drawer-container",attrs:{right:"",fixed:"",permanent:"",clipped:"",width:"250px"}},[r("v-card",{staticClass:"profile"},[r("h1",{staticClass:"profile-title"},[t._v("stats")]),t.meLoaded&&t.recentBeersLoaded?r("div",[r("div",{staticClass:"tile"},[r("v-icon",{attrs:{large:""}},[t._v("fas fa-calendar-day")]),r("p",{staticClass:"tile-title"},[t._v("last beer")]),r("p",{staticClass:"tile-content"},[t._v(t._s(t.mostRecentBeer))])],1),r("div",{staticClass:"tile"},[r("v-icon",{attrs:{large:""}},[t._v("fas fa-award")]),r("p",{staticClass:"tile-title"},[t._v("total badges")]),r("p",{staticClass:"tile-content"},[t._v(t._s(t.userStats.total_badges))])],1),r("div",{staticClass:"tile"},[r("v-icon",{attrs:{large:""}},[t._v("fas fa-beer")]),r("p",{staticClass:"tile-title"},[t._v("unique beers")]),r("p",{staticClass:"tile-content"},[t._v(t._s(t.userStats.total_beers))])],1)]):r("div",{staticClass:"loader-container"},[r("v-progress-circular",{attrs:{size:50,color:"orange",indeterminate:""}})],1)])],1)},C=[],L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["d"](e,t),e=i["c"]([Object(c["a"])({computed:i["a"]({},Object(o["c"])(["meLoaded","recentBeersLoaded"]),Object(o["b"])(["mostRecentBeer","userStats"]))})],e),e}(c["c"]),T=L,x=T,B=(r("dbb8"),Object(p["a"])(x,S,C,!1,null,"3520e0c6",null)),O=B.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-speed-dial",{staticClass:"dial",attrs:{bottom:"",right:"",fixed:"",direction:"top"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"orange",dark:"",fab:"",large:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[r("v-icon",[t._v("menu")]),r("v-icon",[t._v("close")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[r("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"first-icon",attrs:{fab:"",dark:"",color:"green"},on:{click:function(e){return t.$router.push({name:"Latest"})}}},n),[r("v-icon",[t._v("fas fa-beer")])],1)]}}])},[r("span",[t._v("latest new beers")])]),r("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(e){return t.$router.push({name:"Top"})}}},n),[r("v-icon",[t._v("fas fa-award")])],1)]}}])},[r("span",[t._v("top 10 beers")])]),r("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{fab:"",dark:"",color:"purple"},on:{click:function(e){return t.$router.push({name:"Stats"})}}},n),[r("v-icon",[t._v("fas fa-chart-bar")])],1)]}}])},[r("span",[t._v("some fun stats")])])],1)},$=[],E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fab=!1,e}return i["d"](e,t),e=i["c"]([c["a"]],e),e}(c["c"]),P=E,A=P,D=(r("4a89"),Object(p["a"])(A,z,$,!1,null,"4acbd0e1",null)),H=D.exports,N=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.additionalText=!1,e.loading=!0,e}return i["d"](e,t),e.prototype.mounted=function(){return i["b"](this,void 0,void 0,function(){var t=this;return i["e"](this,function(e){switch(e.label){case 0:return setTimeout(function(){t.additionalText=!0},4500),[4,Promise.all([this.$store.dispatch("userInfo"),this.$store.dispatch("topTenBeers"),this.$store.dispatch("recentBeers"),this.$store.dispatch("beerStats")])];case 1:return e.sent(),this.loading=!1,[2]}})})},e=i["c"]([Object(c["a"])({components:{AppHeader:m,BeerLoader:k,ProfileDrawer:O,SpeedDial:H},computed:i["a"]({},Object(o["c"])(["apiLimit"]),{viewingStats:function(){return"Stats"===this.$route.name}})})],e),e}(c["c"]),U=N,R=U,I=(r("5c0b"),Object(p["a"])(R,a,s,!1,null,null,null)),M=I.exports,q=r("8c4f");n["default"].use(q["a"]);var G=new q["a"]({routes:[{path:"/latest",name:"Latest",component:function(){return r.e("latest").then(r.bind(null,"1a40"))}},{path:"/top",name:"Top",component:function(){return r.e("latest").then(r.bind(null,"09d9"))}},{path:"/stats",name:"Stats",component:function(){return r.e("latest").then(r.bind(null,"ed93"))}},{path:"*",redirect:"/latest"}]}),J=r("bc3a"),V=r.n(J),F="https://beer-proxy.herokuapp.com",W={getUserInfo:function(){return V()({method:"get",url:F+"/user-info"})},getLatest:function(){return V()({method:"get",url:F+"/beer-list"})},getStats:function(){return V()({method:"get",url:F+"/stats"})},getTopTen:function(){return V()({method:"get",url:F+"/top-ten"})}},K=r("c1df"),Q=r.n(K);n["default"].use(o["a"]);var X={state:{me:{},meLoaded:!1,topTenBeers:[],topTenLoaded:!1,recentBeers:[],recentBeersLoaded:!1,beerStats:null,statsLoaded:!1,apiLimit:!1,error:null},actions:{userInfo:function(t){var e=t.commit;return i["b"](this,void 0,void 0,function(){var t,r,n;return i["e"](this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,W.getUserInfo()];case 1:return t=a.sent(),t&&t.data.meta&&429===t.data.meta.code&&e("apiLimit"),r=tt(t),e("setUserInfo",r),[3,3];case 2:return n=a.sent(),e("error",n),[3,3];case 3:return[2]}})})},topTenBeers:function(t){var e=t.commit;return i["b"](this,void 0,void 0,function(){var t,r,n;return i["e"](this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,W.getTopTen()];case 1:return t=a.sent(),t&&t.data.meta&&429===t.data.meta.code&&e("apiLimit"),r=Z(t),e("setTopTenBeers",r),[3,3];case 2:return n=a.sent(),e("error",n),[3,3];case 3:return[2]}})})},recentBeers:function(t){var e=t.commit;return i["b"](this,void 0,void 0,function(){var t,r,n;return i["e"](this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,W.getLatest()];case 1:return t=a.sent(),t&&t.data.meta&&429===t.data.meta.code&&e("apiLimit"),r=Z(t),e("setRecentBeers",r),[3,3];case 2:return n=a.sent(),e("error",n),[3,3];case 3:return[2]}})})},beerStats:function(t){var e=t.commit;return i["b"](this,void 0,void 0,function(){var t,r,n;return i["e"](this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,W.getStats()];case 1:return t=a.sent(),r=t.data,e("setStats",r),[3,3];case 2:return n=a.sent(),e("error",n),[3,3];case 3:return[2]}})})}},getters:{mostRecentBeer:function(t){return t.recentBeers.length?Q()(t.recentBeers[0].created_at).fromNow():""},userStats:function(t){return t.me.stats?t.me.stats:{}},avgRating:function(t){return t.beerStats?t.beerStats.avgRating:0},monthCountValues:function(t){return t.beerStats?t.beerStats.monthCount.map(function(t){return t.count}):[]},dayCountValues:function(t){return t.beerStats?t.beerStats.dayCount.map(function(t){return t.count}):[]},hourCountValues:function(t){return t.beerStats?t.beerStats.hourCount.map(function(t){return t.count}):[]},ratingCount:function(t){return t.beerStats?t.beerStats.ratingCount.map(function(t){return t.count}):[]},ratingLabels:function(t){return t.beerStats?t.beerStats.ratingCount.map(function(t){return t.name}):[]},styleCount:function(t){return t.beerStats?t.beerStats.styleCount:[]}},mutations:{setUserInfo:function(t,e){t.me=e,t.meLoaded=!0},setTopTenBeers:function(t,e){t.topTenBeers=e,t.topTenLoaded=!0},setRecentBeers:function(t,e){t.recentBeers=e,t.recentBeersLoaded=!0},setStats:function(t,e){t.beerStats=e,t.statsLoaded=!0},apiLimit:function(t){t.apiLimit=!0}}},Y=new o["a"].Store(X),Z=function(t){if(t.data&&t.data.response){if(t.data.response.checkins&&t.data.response.checkins.items)return t.data.response.checkins.items;if(t.data.response.beers&&t.data.response.beers.items)return t.data.response.beers.items}return[]},tt=function(t){return t.data&&t.data.response&&t.data.response.user?t.data.response.user:{}},et=r("ce5b"),rt=r.n(et);r("bf40");n["default"].filter("formatDate",function(t){return t?Q()(String(t)).fromNow():t}),n["default"].filter("formatRating",function(t){return t?t>=4.75?"this is one of the best beers i've ever had":t>=4.5?"this beer was incredible.":t>=4?"this beer was awesome.":t>=3.5?"this beer was good.":t>=3?"this beer was fine.":t>=2?"this beer was trash.":t>=.25?"this beer was unbelievably bad.":"i want to kill myself this beer was so bad.":"i was too drunk to rate this beer"}),n["default"].filter("formatBadge",function(t){return t.includes(" (")?t.split(" (")[0]:t}),n["default"].filter("formatHours",function(t){if(!t)return"";switch(t.toString()){case"4":return"4am";case"8":return"8am";case"12":return"noon";case"16":return"4pm";case"20":return"8pm";case"24":return"midnight";default:return""}}),n["default"].filter("dayOfWeek",function(t){if(!t)return"";switch(t.toString()){case"1":return"mon";case"2":return"tues";case"3":return"wed";case"4":return"thurs";case"5":return"fri";case"6":return"sat";case"7":return"sun";default:return""}}),n["default"].filter("month",function(t){if(!t)return"";switch(t.toString()){case"1":return"jan";case"2":return"feb";case"3":return"mar";case"4":return"apr";case"5":return"may";case"6":return"june";case"7":return"july";case"8":return"aug";case"9":return"sept";case"10":return"oct";case"11":return"nov";case"12":return"dec";default:return""}}),n["default"].filter("rating",function(t){if(!t)return"";switch(t.toString()){case"0":return"jan";case"1":return"jan";case"2":return"feb";case"3":return"mar";case"4":return"apr";case"5":return"may";case"6":return"june";case"7":return"july";case"8":return"aug";case"9":return"sept";case"10":return"oct";case"11":return"nov";case"12":return"dec";default:return""}}),n["default"].use(rt.a),n["default"].config.productionTip=!1,new n["default"]({router:G,store:Y,render:function(t){return t(M)}}).$mount("#app")},d107:function(t,e,r){},dbb8:function(t,e,r){"use strict";var n=r("1661"),a=r.n(n);a.a}});
//# sourceMappingURL=app.1469be84.js.map