!function(e){function t(t){for(var n,o,a=t[0],i=t[1],c=t[2],u=0,s=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(S,o)&&S[o]&&s.push(S[o][0]),S[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(A&&A(t);s.length;)s.shift()();return G.push.apply(G,c||[]),r()}function r(){for(var e,t=0;t<G.length;t++){for(var r=G[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==S[a]&&(n=!1)}n&&(G.splice(t--,1),e=U(U.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var r in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(h[r]=t[r]);0==--b&&0===O&&w()}(e,t),n&&n(e,t)};var o,a=!0,i="bccc63c63baafef2c925",c={},u=[],s=[];function l(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":F(t);break;case"prepare":case"check":case"dispose":case"apply":(g=g||[]).push(t)}},check:j,apply:D,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return o=void 0,r}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,y,g,b=0,O=0,v={},E={},_={};function P(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=U.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return f(R()?"ready":"idle"),null;E={},v={},_=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var r in h={},S)L(r);return"prepare"===p&&0===O&&0===b&&w(),t}));var t}function L(e){_[e]?(E[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=U.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function w(){f("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then((function(){return D(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&t.push(P(r));e.resolve(t)}}function D(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(r){var n,a,s,l,d;function p(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,i=o.chain;if((l=I[a])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<l.parents.length;c++){var u=l.parents[c],s=I[u];if(s){if(s.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([u]),moduleId:a,parentId:u};-1===t.indexOf(u)&&(s.hot._acceptedDependencies[a]?(r[u]||(r[u]=[]),m(r[u],[a])):(delete r[u],t.push(u),n.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}R();var b={},O=[],v={},E=function(){console.warn("[HMR] unexpected require("+L.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var L;d=P(j),L=h[j]?p(d):{type:"disposed",moduleId:j};var w=!1,D=!1,F=!1,G="";switch(L.chain&&(G="\nUpdate propagation: "+L.chain.join(" -> ")),L.type){case"self-declined":r.onDeclined&&r.onDeclined(L),r.ignoreDeclined||(w=new Error("Aborted because of self decline: "+L.moduleId+G));break;case"declined":r.onDeclined&&r.onDeclined(L),r.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+L.moduleId+" in "+L.parentId+G));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(L),r.ignoreUnaccepted||(w=new Error("Aborted because "+d+" is not accepted"+G));break;case"accepted":r.onAccepted&&r.onAccepted(L),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(L),F=!0;break;default:throw new Error("Unexception type "+L.type)}if(w)return f("abort"),Promise.reject(w);if(D)for(d in v[d]=h[d],m(O,L.outdatedModules),L.outdatedDependencies)Object.prototype.hasOwnProperty.call(L.outdatedDependencies,d)&&(b[d]||(b[d]=[]),m(b[d],L.outdatedDependencies[d]));F&&(m(O,[L.moduleId]),v[d]=E)}var C,N=[];for(a=0;a<O.length;a++)d=O[a],I[d]&&I[d].hot._selfAccepted&&v[d]!==E&&!I[d].hot._selfInvalidated&&N.push({module:d,parents:I[d].parents.slice(),errorHandler:I[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete S[e]}(e)}));var x,A,H=O.slice();for(;H.length>0;)if(d=H.pop(),l=I[d]){var k={},T=l.hot._disposeHandlers;for(s=0;s<T.length;s++)(n=T[s])(k);for(c[d]=k,l.hot.active=!1,delete I[d],delete b[d],s=0;s<l.children.length;s++){var M=I[l.children[s]];M&&((C=M.parents.indexOf(d))>=0&&M.parents.splice(C,1))}}for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(l=I[d]))for(A=b[d],s=0;s<A.length;s++)x=A[s],(C=l.children.indexOf(x))>=0&&l.children.splice(C,1);f("apply"),void 0!==y&&(i=y,y=void 0);for(d in h=void 0,v)Object.prototype.hasOwnProperty.call(v,d)&&(e[d]=v[d]);var z=null;for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&(l=I[d])){A=b[d];var q=[];for(a=0;a<A.length;a++)if(x=A[a],n=l.hot._acceptedDependencies[x]){if(-1!==q.indexOf(n))continue;q.push(n)}for(a=0;a<q.length;a++){n=q[a];try{n(A)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:A[a],error:e}),r.ignoreErrored||z||(z=e)}}}for(a=0;a<N.length;a++){var B=N[a];d=B.module,u=B.parents,o=d;try{U(d)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),r.ignoreErrored||z||(z=t),z||(z=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:e}),r.ignoreErrored||z||(z=e)}}if(z)return f("fail"),Promise.reject(z);if(g)return t(r).then((function(e){return O.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(O)}))}(t=t||{})}function R(){if(g)return h||(h={}),g.forEach(F),g=void 0,!0}function F(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var I={},S={13:0},G=[];function U(t){if(I[t])return I[t].exports;var r=I[t]={i:t,l:!1,exports:{},hot:l(t),parents:(s=u,u=[],s),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=I[e];if(!t)return U;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(u=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),u=[]),U(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return U[e]},set:function(t){U[e]=t}}};for(var a in U)Object.prototype.hasOwnProperty.call(U,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===p&&f("prepare"),O++,U.e(e).then(t,(function(e){throw t(),e}));function t(){O--,"prepare"===p&&(v[e]||L(e),0===O&&0===b&&w())}},r.t=function(e,t){return 1&t&&(e=r(e)),U.t(e,-2&t)},r}(t)),r.l=!0,r.exports}U.e=function(e){var t=[],r=S[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=S[e]=[t,n]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,U.nc&&a.setAttribute("nonce",U.nc),a.src=function(e){return U.p+"js/"+({}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var r=S[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}S[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},U.m=e,U.c=I,U.d=function(e,t,r){U.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},U.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},U.t=function(e,t){if(1&t&&(e=U(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(U.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)U.d(r,n,function(t){return e[t]}.bind(null,n));return r},U.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return U.d(t,"a",t),t},U.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},U.p="/beta/apps/rbac/",U.oe=function(e){throw console.error(e),e},U.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],N=C.push.bind(C);C.push=t,C=C.slice();for(var x=0;x<C.length;x++)t(C[x]);var A=N;G.push([658,0,1,14,15]),r()}({123:function(e){e.exports=JSON.parse('{"a":{"rbac":"/","groups":"/groups","add-group":"/groups/add-group","remove-group":"/groups/removegroups","group-edit":{"path":"/groups/edit/:id","description":"Edit single group"},"group-detail":"/groups/detail/:uuid","group-detail-roles":"/groups/detail/:uuid/roles","group-add-roles":"/groups/detail/:uuid/roles/add_roles","group-detail-members":"/groups/detail/:uuid/members","group-add-members":"/groups/detail/:uuid/members/add_members","group-detail-role-detail":"/groups/detail/:groupUuid/roles/detail/:uuid","roles":"/roles","add-role":"/roles/add-role","remove-role":"/roles/remove/:id","edit-role":"/roles/edit/:id","role-detail":"/roles/detail/:uuid","role-detail-remove":"/roles/detail/:id/remove","role-detail-edit":"/roles/detail/:id/edit","users":"/users","user-detail":"/users/detail/:username","my-user-access":"/my-user-access"}}')},160:function(e,t,r){"use strict";r.d(t,"d",(function(){return v})),r.d(t,"a",(function(){return E})),r.d(t,"e",(function(){return _})),r.d(t,"b",(function(){return P})),r.d(t,"c",(function(){return j}));var n=r(134),o=r.n(n),a=r(316),i=r.n(a),c=r(159),u=r.n(c),s=r(0),l=r.n(s),d=r(31),p=r.n(d),f=r(299),m=r(391),h=r(388),y=r(389),g=r(390),b=(r(322),r(204),r(130)),O=r(171),v=function(e){var t=e.items,r=u()(e,["items"]);return l.a.createElement(s.Fragment,null,l.a.createElement(f.DataList,{"aria-label":"datalist-placeholder"},i()(Array(t)).map((function(e,t){return l.a.createElement(h.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},l.a.createElement(y.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},l.a.createElement(g.DataListItemCells,{dataListCells:[l.a.createElement(m.DataListCell,{key:"1"},l.a.createElement(O.Skeleton,o()({size:O.SkeletonSize.lg},r)))]})))}))))};v.propTypes={items:p.a.number},v.defaultProps={items:5};var E=function(e){return l.a.createElement("div",null,l.a.createElement(b.default,o()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),l.a.createElement(v,null))},_=function(e){return l.a.createElement("div",{style:{width:"200px",height:"21px"}},l.a.createElement(b.default,o()({height:21,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},P=function(e){return l.a.createElement("div",{style:{width:"200px",height:"18px"}},l.a.createElement(b.default,o()({height:18,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))},j=function(){return l.a.createElement(b.default,{height:32,width:160,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}},17:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"q",(function(){return o})),r.d(t,"g",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"z",(function(){return c})),r.d(t,"u",(function(){return u})),r.d(t,"r",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"k",(function(){return d})),r.d(t,"l",(function(){return p})),r.d(t,"w",(function(){return f})),r.d(t,"n",(function(){return m})),r.d(t,"h",(function(){return h})),r.d(t,"j",(function(){return y})),r.d(t,"y",(function(){return g})),r.d(t,"v",(function(){return b})),r.d(t,"b",(function(){return O})),r.d(t,"x",(function(){return v})),r.d(t,"d",(function(){return E})),r.d(t,"m",(function(){return _})),r.d(t,"i",(function(){return P})),r.d(t,"e",(function(){return j})),r.d(t,"p",(function(){return L})),r.d(t,"o",(function(){return w})),r.d(t,"A",(function(){return D})),r.d(t,"s",(function(){return R})),r.d(t,"t",(function(){return F}));var n="FETCH_GROUP",o="FETCH_SYSTEM_GROUP",a="FETCH_GROUPS",i="ADD_GROUP",c="UPDATE_GROUP",u="REMOVE_GROUPS",s="FETCH_USERS",l="ADD_ROLE",d="FETCH_ROLE",p="FETCH_ROLES",f="REMOVE_ROLE",m="FETCH_ROLES_FOR_WIZARD",h="FETCH_GROUP_POLICIES",y="FETCH_POLICY",g="RESET_SELECTED_GROUP",b="REMOVE_MEMBERS_FROM_GROUP",O="ADD_MEMBERS_TO_GROUP",v="REMOVE_ROLES_FROM_GROUP",E="ADD_ROLES_TO_GROUP",_="FETCH_ROLES_FOR_GROUP",P="FETCH_MEMBERS_FOR_GROUP",j="FETCH_ADD_ROLES_FOR_GROUP",L="FETCH_ROLE_FOR_USER",w="FETCH_ROLE_FOR_PRINCIPAL",D="UPDATE_ROLE",R="GET_PRINCIPAL_ACCESS",F="LIST_PERMISSIONS"},231:function(e,t,r){var n=r(4),o=r(554);(t=n(!1)).i(o),t.push([e.i,".delete-group-warning-icon{color:var(--pf-global--warning-color--100)}.ins-c-rbac__summary .pf-l-grid .pf-l-grid__item{margin-bottom:var(--pf-global--gutter--md)}@media only screen and (max-width: 768px){.ins-c-rbac__user-row .pf-c-label{width:max-content}}.pf-c-toolbar .pf-c-dropdown__menu .ins-c-primary-toolbar__first-action{display:none}\n",""]),e.exports=t},242:function(e,t,r){(t=r(4)(!1)).push([e.i,".ins-c-rbac-denied-state .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},327:function(e,t,r){var n=r(5),o=r(231);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(231,(function(){"string"==typeof(o=(o=r(231)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},571:function(e,t,r){var n=r(5),o=r(242);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(242,(function(){"string"==typeof(o=(o=r(242)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},61:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n={limit:20,offset:0,itemCount:0},o={limit:10,offset:0,itemCount:0}},658:function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r.n(o),i=r(25),c=r.n(i),u=r(158),s=r(122),l=r(378),d=r(108),p=r.n(d),f=r(379),m=r.n(f),h=r(380),y=r.n(h),g=r(381),b=r.n(g),O=r(382),v=r(12),E=r.n(v),_=r(17),P=r(61);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w,D={selectedUser:{},isUserDataLoading:!1,users:{meta:P.b}},R=(n={},E()(n,"".concat(_.r,"_PENDING"),(function(e){return L(L({},e),{},{isUserDataLoading:!0})})),E()(n,"".concat(_.r,"_FULFILLED"),(function(e,t){var r=t.payload;return L(L({},e),{},{users:r,isUserDataLoading:!1})})),n),F=r(383),I=r.n(F);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U,C={groups:{data:[],meta:P.b},selectedGroup:{addRoles:{},members:{meta:P.b},pagination:P.b},isLoading:!1,isRecordLoading:!1},N=function(e){return G(G({},e),{},{isLoading:!0})},x=(w={},E()(w,"".concat(_.g,"_PENDING"),N),E()(w,"".concat(_.g,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{groups:r,isLoading:!1})})),E()(w,"".concat(_.q,"_PENDING"),N),E()(w,"".concat(_.q,"_FULFILLED"),(function(e,t){var r,n,o=t.payload;return G(G({},e),{},{systemGroup:null==o||null===(r=o.data)||void 0===r||null===(n=r.filter((function(e){return null==e?void 0:e.platform_default})))||void 0===n?void 0:n[0]})})),E()(w,"".concat(_.f,"_PENDING"),(function(e){return G(G({},e),{},{isRecordLoading:!0,selectedGroup:G(G({},e.selectedGroup),{},{loaded:!1})})})),E()(w,"".concat(_.f,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{isRecordLoading:!1,groups:G(G({},e.groups),{},{data:e.groups.data.map((function(e){return G(G({},e),r.uuid===e.uuid&&G(G({},r),{},{loaded:!0}))}))}),selectedGroup:G(G(G({},e.selectedGroup),{},{members:G(G({},e.selectedGroup.members),{},{data:r.principals})},I()(r,["principals","roles"])),{},{loaded:!0,pagination:G(G({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),E()(w,"".concat(_.m,"_PENDING"),(function(e){return G(G({},e),{},{isRecordRolesLoading:!0,selectedGroup:G(G({},e.selectedGroup),{},{loaded:!1})})})),E()(w,"".concat(_.m,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{isRecordRolesLoading:!1,selectedGroup:G(G({},e.selectedGroup),{},{roles:r.data,pagination:r.meta,loaded:!0})})})),E()(w,"".concat(_.i,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),E()(w,"".concat(_.i,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup||{}),{},{members:G({isLoading:!1},r)})})})),E()(w,"".concat(_.e,"_PENDING"),(function(e){return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),E()(w,"".concat(_.e,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup),{},{addRoles:{roles:r.data,pagination:r.meta,loaded:!0}})})})),E()(w,_.y,(function(e){return G(G({},e),{},{selectedGroup:void 0})})),w);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k,T=(U={},E()(U,"".concat(_.h,"_PENDING"),(function(e){return H(H({},e),{},{isLoading:!0})})),E()(U,"".concat(_.h,"_FULFILLED"),(function(e,t){var r=t.payload;return H(H({},e),{},{policies:r,isLoading:!1})})),E()(U,"".concat(_.j,"_PENDING"),(function(e){return H(H({},e),{},{isRecordLoading:!0})})),E()(U,"".concat(_.j,"_FULFILLED"),(function(e,t){var r=t.payload;return H(H({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),U);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q,B={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:P.b},rolesForWizard:{data:[],meta:P.b},selectedRole:{}},W=function(e){return z(z({},e),{},{isRecordLoading:!0})},V=function(e,t){var r=t.payload;return z(z({},e),{},{rolesWithAccess:z(z({},e.rolesWithAccess),{},E()({},r.uuid,r)),isRecordLoading:!1})},J=(k={},E()(k,"".concat(_.k,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{selectedRole:r,isRecordLoading:!1})})),E()(k,"".concat(_.k,"_PENDING"),W),E()(k,"".concat(_.l,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{roles:r,isLoading:!1})})),E()(k,"".concat(_.l,"_PENDING"),(function(e){return z(z({},e),{},{isLoading:!0})})),E()(k,"".concat(_.p,"_FULFILLED"),V),E()(k,"".concat(_.p,"_PENDING"),W),E()(k,"".concat(_.o,"_FULFILLED"),V),E()(k,"".concat(_.o,"_PENDING"),W),E()(k,"".concat(_.n,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),E()(k,"".concat(_.n,"_PENDING"),(function(e){return z(z({},e),{},{isWizardLoading:!0})})),k);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X,Z={isLoading:!1,access:{data:[],meta:P.b}},Q=(q={},E()(q,"".concat(_.s,"_PENDING"),(function(e){return K(K({},e),{},{isLoading:!0})})),E()(q,"".concat(_.s,"_FULFILLED"),(function(e,t){var r=t.payload;return K(K({},e),{},{access:r,isLoading:!1})})),q);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te={isLoading:!1,permission:{data:[],meta:ee(ee({},P.b),{},{limit:100})}},re=(X={},E()(X,"".concat(_.t,"_PENDING"),(function(e){return ee(ee({},e),{},{isLoading:!0})})),E()(X,"".concat(_.t,"_FULFILLED"),(function(e,t){var r=t.payload;return ee(ee({},e),{},{permission:r,isLoading:!1})})),X),ne=new p.a({},[O.a,l.a,y()({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),b.a]);ne.register({userReducer:Object(d.applyReducerHash)(R,D),groupReducer:Object(d.applyReducerHash)(x,C),policyReducer:Object(d.applyReducerHash)(T,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:Object(d.applyReducerHash)(J,B),accessReducer:Object(d.applyReducerHash)(Q,Z),permissionReducer:Object(d.applyReducerHash)(re,te),notifications:m.a});var oe=ne.getStore(),ae=r(384),ie=r.n(ae),ce=r(385),ue=r.n(ce),se=r(298),le=r.n(se),de=r(386),pe=r.n(de),fe=r(387),me=r.n(fe),he=r(310),ye=r.n(he),ge=r(31),be=r.n(ge),Oe=r(39),ve=r(159),Ee=r.n(ve),_e=r(160),Pe=r(123),je=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(5),r.e(17)]).then(r.bind(null,935))})),Le=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(5),r.e(16)]).then(r.bind(null,936))})),we=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(18)]).then(r.bind(null,938))})),De=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(5),r.e(19)]).then(r.bind(null,937))})),Re=function(e){var t=e.rootClass,r=Ee()(e,["rootClass"]),n=document.getElementById("root");return n.removeAttribute("class"),n.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),n.setAttribute("role","main"),a.a.createElement(Oe.b,r)};Re.propTypes={rootClass:be.a.string};var Fe=function(){return a.a.createElement(o.Suspense,{fallback:a.a.createElement(_e.a,null)},a.a.createElement(Oe.d,null,a.a.createElement(Re,{path:Pe.a.groups,component:je,rootClass:"groups"}),a.a.createElement(Re,{path:Pe.a.roles,component:Le,rootClass:"roles"}),a.a.createElement(Re,{path:Pe.a.users,component:we,rootClass:"roles"}),a.a.createElement(Re,{path:Pe.a.myUserAccess,component:De,rootClass:"myUserAccess"}),a.a.createElement(Oe.b,{render:function(){return a.a.createElement(Oe.a,{to:Pe.a.myUserAccess})}})))};Fe.propTypes={childProps:be.a.object};r(327);var Ie=r(194),Se=r(321),Ge=r(712),Ue=(r(570),r(161)),Ce=r(80),Ne=r(162),xe=r(318),Ae=r(319),He=r(392),ke=r.n(He),Te=r(172),Me=(r(571),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Te.PageHeader,null,a.a.createElement(Te.PageHeaderTitle,{title:"User access"})),a.a.createElement(Ie.Main,null,a.a.createElement(Ne.EmptyState,{variant:Ne.EmptyStateVariant.full,className:"ins-c-rbac-denied-state"},a.a.createElement(xe.EmptyStateIcon,{icon:ke.a}),a.a.createElement(Ue.Title,{headingLevel:"h5",size:"lg"},"You do not have permissions to view or manage User access"),a.a.createElement(Ae.EmptyStateBody,null,"Contact your organization administrator(s) for more information."),document.referrer?a.a.createElement(Ce.Button,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):a.a.createElement(Ce.Button,{variant:"primary",component:"a",href:"."},"Go to landing page"))))});function ze(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ye()(e);if(t){var o=ye()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return me()(this,r)}}var qe=function(e){pe()(r,e);var t=ze(r);function r(){var e;ie()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),E()(le()(e),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),e}return ue()(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp(insights.chrome.getApp()),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,r=e.isAdmin;return t?r||"rbac"!==insights.chrome.getApp()?a.a.createElement(Ge.a,{locale:"en"},a.a.createElement(a.a.Fragment,null,a.a.createElement(Se.NotificationsPortal,null),a.a.createElement(Ie.Main,{style:{marginLeft:0,padding:0}},a.a.createElement(Fe,null)))):a.a.createElement(Me,null):a.a.createElement(_e.a,null)}}]),r}(o.Component);qe.propTypes={history:be.a.object};var Be=Object(Oe.k)(Object(s.connect)()(qe)),We=r(393);c.a.render(a.a.createElement(s.Provider,{store:oe},a.a.createElement(u.a,{basename:Object(We.getBaseName)(location.pathname)},a.a.createElement(Be,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map