!function(e){function t(t){for(var n,o,a=t[0],i=t[1],c=t[2],s=0,u=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(F,o)&&F[o]&&u.push(F[o][0]),F[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(T&&T(t);u.length;)u.shift()();return G.push.apply(G,c||[]),r()}function r(){for(var e,t=0;t<G.length;t++){for(var r=G[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==F[a]&&(n=!1)}n&&(G.splice(t--,1),e=N(N.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!E[e])return;for(var r in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(h[r]=t[r]);0==--O&&0===b&&j()}(e,t),n&&n(e,t)};var o,a=!0,i="22d2742ec0a39d9d9bcd",c={},s=[],u=[];function l(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":I(t);break;case"prepare":case"check":case"dispose":case"apply":(g=g||[]).push(t)}},check:P,apply:w,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return o=void 0,r}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,h,y,g,O=0,b=0,v={},E={},_={};function L(e){return+e+""===e?+e:e}function P(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=N.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return f(R()?"ready":"idle"),null;E={},v={},_=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var r in h={},F)D(r);return"prepare"===p&&0===b&&0===O&&j(),t}));var t}function D(e){_[e]?(E[e]=!0,O++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=N.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function j(){f("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then((function(){return w(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&t.push(L(r));e.resolve(t)}}function w(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(r){var n,a,u,l,d;function p(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,i=o.chain;if((l=S[a])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<l.parents.length;c++){var s=l.parents[c],u=S[s];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[a]?(r[s]||(r[s]=[]),m(r[s],[a])):(delete r[s],t.push(s),n.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}R();var O={},b=[],v={},E=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var P in h)if(Object.prototype.hasOwnProperty.call(h,P)){var D;d=L(P),D=h[P]?p(d):{type:"disposed",moduleId:P};var j=!1,w=!1,I=!1,G="";switch(D.chain&&(G="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":r.onDeclined&&r.onDeclined(D),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+D.moduleId+G));break;case"declined":r.onDeclined&&r.onDeclined(D),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+G));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(D),r.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+G));break;case"accepted":r.onAccepted&&r.onAccepted(D),w=!0;break;case"disposed":r.onDisposed&&r.onDisposed(D),I=!0;break;default:throw new Error("Unexception type "+D.type)}if(j)return f("abort"),Promise.reject(j);if(w)for(d in v[d]=h[d],m(b,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,d)&&(O[d]||(O[d]=[]),m(O[d],D.outdatedDependencies[d]));I&&(m(b,[D.moduleId]),v[d]=E)}var U,x=[];for(a=0;a<b.length;a++)d=b[a],S[d]&&S[d].hot._selfAccepted&&v[d]!==E&&!S[d].hot._selfInvalidated&&x.push({module:d,parents:S[d].parents.slice(),errorHandler:S[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete F[e]}(e)}));var A,T,C=b.slice();for(;C.length>0;)if(d=C.pop(),l=S[d]){var H={},k=l.hot._disposeHandlers;for(u=0;u<k.length;u++)(n=k[u])(H);for(c[d]=H,l.hot.active=!1,delete S[d],delete O[d],u=0;u<l.children.length;u++){var M=S[l.children[u]];M&&((U=M.parents.indexOf(d))>=0&&M.parents.splice(U,1))}}for(d in O)if(Object.prototype.hasOwnProperty.call(O,d)&&(l=S[d]))for(T=O[d],u=0;u<T.length;u++)A=T[u],(U=l.children.indexOf(A))>=0&&l.children.splice(U,1);f("apply"),void 0!==y&&(i=y,y=void 0);for(d in h=void 0,v)Object.prototype.hasOwnProperty.call(v,d)&&(e[d]=v[d]);var z=null;for(d in O)if(Object.prototype.hasOwnProperty.call(O,d)&&(l=S[d])){T=O[d];var q=[];for(a=0;a<T.length;a++)if(A=T[a],n=l.hot._acceptedDependencies[A]){if(-1!==q.indexOf(n))continue;q.push(n)}for(a=0;a<q.length;a++){n=q[a];try{n(T)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:T[a],error:e}),r.ignoreErrored||z||(z=e)}}}for(a=0;a<x.length;a++){var B=x[a];d=B.module,s=B.parents,o=d;try{N(d)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),r.ignoreErrored||z||(z=t),z||(z=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:e}),r.ignoreErrored||z||(z=e)}}if(z)return f("fail"),Promise.reject(z);if(g)return t(r).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(b)}))}(t=t||{})}function R(){if(g)return h||(h={}),g.forEach(I),g=void 0,!0}function I(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var S={},F={13:0},G=[];function N(t){if(S[t])return S[t].exports;var r=S[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=S[e];if(!t)return N;var r=function(r){return t.hot.active?(S[r]?-1===S[r].parents.indexOf(e)&&S[r].parents.push(e):(s=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),N(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(t){N[e]=t}}};for(var a in N)Object.prototype.hasOwnProperty.call(N,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===p&&f("prepare"),b++,N.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(v[e]||D(e),0===b&&0===O&&j())}},r.t=function(e,t){return 1&t&&(e=r(e)),N.t(e,-2&t)},r}(t)),r.l=!0,r.exports}N.e=function(e){var t=[],r=F[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=F[e]=[t,n]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,N.nc&&a.setAttribute("nonce",N.nc),a.src=function(e){return N.p+"js/"+({}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var r=F[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}F[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},N.m=e,N.c=S,N.d=function(e,t,r){N.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,t){if(1&t&&(e=N(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(N.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)N.d(r,n,function(t){return e[t]}.bind(null,n));return r},N.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(t,"a",t),t},N.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},N.p="/beta/apps/rbac/",N.oe=function(e){throw console.error(e),e},N.h=function(){return i};var U=window.webpackJsonp=window.webpackJsonp||[],x=U.push.bind(U);U.push=t,U=U.slice();for(var A=0;A<U.length;A++)t(U[A]);var T=x;G.push([735,0,1,14,15]),r()}({127:function(e){e.exports=JSON.parse('{"a":{"rbac":"/","groups":"/groups","add-group":"/groups/add-group","remove-group":"/groups/removegroups","group-edit":{"path":"/groups/edit/:id","description":"Edit single group"},"group-detail":"/groups/detail/:uuid","group-detail-roles":"/groups/detail/:uuid/roles","group-add-roles":"/groups/detail/:uuid/roles/add_roles","group-detail-members":"/groups/detail/:uuid/members","group-add-members":"/groups/detail/:uuid/members/add_members","group-detail-role-detail":"/groups/detail/:groupUuid/roles/detail/:uuid","roles":"/roles","add-role":"/roles/add-role","remove-role":"/roles/remove/:id","edit-role":"/roles/edit/:id","role-detail":"/roles/detail/:uuid","role-detail-remove":"/roles/detail/:id/remove","role-detail-edit":"/roles/detail/:id/edit","role-detail-permission":"/roles/detail/:roleId/permission/:permissionId","role-detail-permission-edit":"/roles/detail/:roleId/permission/:permissionId/edit","users":"/users","user-detail":"/users/detail/:username","my-user-access":"/my-user-access"}}')},13:function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"r",(function(){return o})),r.d(t,"h",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"G",(function(){return c})),r.d(t,"A",(function(){return s})),r.d(t,"s",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"l",(function(){return d})),r.d(t,"m",(function(){return p})),r.d(t,"C",(function(){return f})),r.d(t,"o",(function(){return m})),r.d(t,"i",(function(){return h})),r.d(t,"k",(function(){return y})),r.d(t,"F",(function(){return g})),r.d(t,"B",(function(){return O})),r.d(t,"b",(function(){return b})),r.d(t,"D",(function(){return v})),r.d(t,"d",(function(){return E})),r.d(t,"n",(function(){return _})),r.d(t,"j",(function(){return L})),r.d(t,"f",(function(){return P})),r.d(t,"q",(function(){return D})),r.d(t,"p",(function(){return j})),r.d(t,"H",(function(){return w})),r.d(t,"t",(function(){return R})),r.d(t,"y",(function(){return I})),r.d(t,"w",(function(){return S})),r.d(t,"z",(function(){return F})),r.d(t,"x",(function(){return G})),r.d(t,"v",(function(){return N})),r.d(t,"u",(function(){return U})),r.d(t,"e",(function(){return x})),r.d(t,"E",(function(){return A}));var n="FETCH_GROUP",o="FETCH_SYSTEM_GROUP",a="FETCH_GROUPS",i="ADD_GROUP",c="UPDATE_GROUP",s="REMOVE_GROUPS",u="FETCH_USERS",l="ADD_ROLE",d="FETCH_ROLE",p="FETCH_ROLES",f="REMOVE_ROLE",m="FETCH_ROLES_FOR_WIZARD",h="FETCH_GROUP_POLICIES",y="FETCH_POLICY",g="RESET_SELECTED_GROUP",O="REMOVE_MEMBERS_FROM_GROUP",b="ADD_MEMBERS_TO_GROUP",v="REMOVE_ROLES_FROM_GROUP",E="ADD_ROLES_TO_GROUP",_="FETCH_ROLES_FOR_GROUP",L="FETCH_MEMBERS_FOR_GROUP",P="FETCH_ADD_ROLES_FOR_GROUP",D="FETCH_ROLE_FOR_USER",j="FETCH_ROLE_FOR_PRINCIPAL",w="UPDATE_ROLE",R="GET_PRINCIPAL_ACCESS",I="LIST_PERMISSIONS",S="LIST_APPLICATION_OPTIONS",F="LIST_RESOURCE_OPTIONS",G="LIST_OPERATION_OPTIONS",N="GET_RESOURCE_DEFINITIONS",U="GET_RESOURCE",x="EXPAND_SPLATS",A="RESET_EXPAND_SPLATS"},190:function(e,t,r){"use strict";r.d(t,"d",(function(){return v})),r.d(t,"a",(function(){return E})),r.d(t,"e",(function(){return _})),r.d(t,"b",(function(){return L})),r.d(t,"c",(function(){return P}));var n=r(160),o=r.n(n),a=r(361),i=r.n(a),c=r(161),s=r.n(c),u=r(0),l=r.n(u),d=r(29),p=r.n(d),f=r(341),m=r(437),h=r(434),y=r(435),g=r(436),O=(r(363),r(233),r(153)),b=r(200),v=function(e){var t=e.items,r=s()(e,["items"]);return l.a.createElement(u.Fragment,null,l.a.createElement(f.DataList,{"aria-label":"datalist-placeholder"},i()(Array(t)).map((function(e,t){return l.a.createElement(h.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},l.a.createElement(y.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},l.a.createElement(g.DataListItemCells,{dataListCells:[l.a.createElement(m.DataListCell,{key:"1"},l.a.createElement(b.Skeleton,o()({size:b.SkeletonSize.lg},r)))]})))}))))};v.propTypes={items:p.a.number},v.defaultProps={items:5};var E=function(e){return l.a.createElement("div",null,l.a.createElement(O.default,o()({height:16,width:300,speed:2},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),l.a.createElement(v,null))},_=function(e){return l.a.createElement("div",{style:{width:"200px",height:"21px"}},l.a.createElement(O.default,o()({height:21,width:200,speed:2},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},L=function(e){e.showDivider;var t=s()(e,["showDivider"]);return l.a.createElement("div",{style:{width:"200px",height:"18px"}},l.a.createElement(O.default,o()({height:18,width:200,speed:2},t),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))};L.propTypes={showDivider:p.a.any};var P=function(){return l.a.createElement(O.default,{height:32,width:160,speed:2},l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}},272:function(e,t,r){(t=r(5)(!1)).push([e.i,".ins-c-rbac-denied-state .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},275:function(e,t,r){var n=r(5),o=r(636);(t=n(!1)).i(o),t.push([e.i,".delete-group-warning-icon{color:var(--pf-global--warning-color--100)}.ins-c-rbac__summary .pf-l-grid{margin-bottom:var(--pf-global--gutter--md)}.ins-c-rbac__bold-text{font-weight:var(--pf-global--FontWeight--bold)}.pf-c-toolbar .pf-c-dropdown__menu .ins-c-primary-toolbar__first-action{display:none}@media only screen and (max-width: 768px){.ins-m-hide-on-sm{display:none}.pf-c-table__expandable-row.pf-m-expanded{max-height:none !important;overflow-y:visible}.pf-c-table__expandable-row.pf-m-expanded tr:first-of-type{padding-top:0 !important}.pf-c-table__expandable-row.pf-m-expanded>td::before{display:none}.ins-c-rbac__user-row .pf-c-label{width:max-content}.ins-c-conditional-filter .pf-l-split__item.pf-m-fill{flex-grow:.9}.pf-c-empty-state__content h4.pf-c-title{font-size:var(--pf-c-title--m-2xl--FontSize)}.pf-c-empty-state__content .pf-c-empty-state__icon{font-size:var(--pf-c-empty-state--m-xl__icon--FontSize)}}\n",""]),e.exports=t},492:function(e,t,r){var n=r(6),o=r(275);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(275,(function(){"string"==typeof(o=(o=r(275)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},56:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n={limit:20,offset:0,itemCount:0},o={limit:10,offset:0,itemCount:0}},633:function(e,t,r){var n=r(6),o=r(272);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=n(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(272,(function(){"string"==typeof(o=(o=r(272)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},735:function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r.n(o),i=r(19),c=r.n(i),s=r(189),u=r(140),l=r(424),d=r(112),p=r.n(d),f=r(425),m=r.n(f),h=r(426),y=r.n(h),g=r(427),O=r.n(g),b=r(428),v=r(10),E=r.n(v),_=r(13),L=r(56);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j,w={selectedUser:{},isUserDataLoading:!1,users:{meta:L.b}},R=(n={},E()(n,"".concat(_.s,"_PENDING"),(function(e){return D(D({},e),{},{isUserDataLoading:!0})})),E()(n,"".concat(_.s,"_FULFILLED"),(function(e,t){var r=t.payload;return D(D({},e),{},{users:r,isUserDataLoading:!1})})),n),I=r(429),S=r.n(I);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N,U={groups:{data:[],meta:L.b},selectedGroup:{addRoles:{},members:{meta:L.b},pagination:L.b},isLoading:!1,isRecordLoading:!1},x=function(e){return G(G({},e),{},{isLoading:!0})},A=(j={},E()(j,"".concat(_.h,"_PENDING"),x),E()(j,"".concat(_.h,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{groups:r,isLoading:!1})})),E()(j,"".concat(_.r,"_PENDING"),x),E()(j,"".concat(_.r,"_FULFILLED"),(function(e,t){var r,n,o=t.payload;return G(G({},e),{},{systemGroup:null==o||null===(r=o.data)||void 0===r||null===(n=r.filter((function(e){return null==e?void 0:e.platform_default})))||void 0===n?void 0:n[0]})})),E()(j,"".concat(_.g,"_PENDING"),(function(e){return G(G({},e),{},{isRecordLoading:!0,selectedGroup:G(G({},e.selectedGroup),{},{loaded:!1})})})),E()(j,"".concat(_.g,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{isRecordLoading:!1,groups:G(G({},e.groups),{},{data:e.groups.data.map((function(e){return G(G({},e),r.uuid===e.uuid&&G(G({},r),{},{loaded:!0}))}))}),selectedGroup:G(G(G({},e.selectedGroup),{},{members:G(G({},e.selectedGroup.members),{},{data:r.principals})},S()(r,["principals","roles"])),{},{loaded:!0,pagination:G(G({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),E()(j,"".concat(_.n,"_PENDING"),(function(e){return G(G({},e),{},{isRecordRolesLoading:!0,selectedGroup:G(G({},e.selectedGroup),{},{loaded:!1})})})),E()(j,"".concat(_.n,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{isRecordRolesLoading:!1,selectedGroup:G(G({},e.selectedGroup),{},{roles:r.data,pagination:r.meta,loaded:!0})})})),E()(j,"".concat(_.j,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),E()(j,"".concat(_.j,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup||{}),{},{members:G({isLoading:!1},r)})})})),E()(j,"".concat(_.f,"_PENDING"),(function(e){return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),E()(j,"".concat(_.f,"_FULFILLED"),(function(e,t){var r=t.payload;return G(G({},e),{},{selectedGroup:G(G({},e.selectedGroup),{},{addRoles:{roles:r.data,pagination:r.meta,loaded:!0}})})})),E()(j,_.F,(function(e){return G(G({},e),{},{selectedGroup:void 0})})),j);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H,k=(N={},E()(N,"".concat(_.i,"_PENDING"),(function(e){return C(C({},e),{},{isLoading:!0})})),E()(N,"".concat(_.i,"_FULFILLED"),(function(e,t){var r=t.payload;return C(C({},e),{},{policies:r,isLoading:!1})})),E()(N,"".concat(_.k,"_PENDING"),(function(e){return C(C({},e),{},{isRecordLoading:!0})})),E()(N,"".concat(_.k,"_FULFILLED"),(function(e,t){var r=t.payload;return C(C({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),N);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q,B={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:L.b},rolesForWizard:{data:[],meta:L.b},selectedRole:{}},W=function(e){return z(z({},e),{},{isRecordLoading:!0})},V=function(e,t){var r=t.payload;return z(z({},e),{},{rolesWithAccess:z(z({},e.rolesWithAccess),{},E()({},r.uuid,r)),isRecordLoading:!1})},J=(H={},E()(H,"".concat(_.l,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{selectedRole:r,isRecordLoading:!1})})),E()(H,"".concat(_.l,"_PENDING"),W),E()(H,"".concat(_.m,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{roles:r,isLoading:!1})})),E()(H,"".concat(_.m,"_PENDING"),(function(e){return z(z({},e),{},{isLoading:!0})})),E()(H,"".concat(_.q,"_FULFILLED"),V),E()(H,"".concat(_.q,"_PENDING"),W),E()(H,"".concat(_.p,"_FULFILLED"),V),E()(H,"".concat(_.p,"_PENDING"),W),E()(H,"".concat(_.o,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),E()(H,"".concat(_.o,"_PENDING"),(function(e){return z(z({},e),{},{isWizardLoading:!0})})),H);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K,Z={isLoading:!1,access:{data:[],meta:L.b}},Q=(q={},E()(q,"".concat(_.t,"_PENDING"),(function(e){return Y(Y({},e),{},{isLoading:!0})})),E()(q,"".concat(_.t,"_FULFILLED"),(function(e,t){var r=t.payload;return Y(Y({},e),{},{access:r,isLoading:!1})})),q);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te,re={isLoading:!1,options:{isLoadingApplication:!1,isLoadingResource:!1,isLoadingOperation:!1,application:{data:[]},resource:{data:[]},operation:{data:[]}},permission:{data:[],meta:L.b},expandSplats:{data:[],meta:L.b}},ne=(K={},E()(K,"".concat(_.y,"_PENDING"),(function(e){return ee(ee({},e),{},{isLoading:!0})})),E()(K,"".concat(_.y,"_FULFILLED"),(function(e,t){var r=t.payload;return ee(ee({},e),{},{permission:r,isLoading:!1})})),E()(K,"".concat(_.w,"_PENDING"),(function(e){return ee(ee({},e),{},{options:ee(ee({},e.options),{},{isLoadingApplication:!0})})})),E()(K,"".concat(_.w,"_FULFILLED"),(function(e,t){var r=t.payload;return ee(ee({},e),{},{options:ee(ee({},e.options),{},{application:r,isLoadingApplication:!1})})})),E()(K,"".concat(_.z,"_PENDING"),(function(e){return ee(ee({},e),{},{options:ee(ee({},e.options),{},{isLoadingResource:!0})})})),E()(K,"".concat(_.z,"_FULFILLED"),(function(e,t){var r=t.payload;return ee(ee({},e),{},{options:ee(ee({},e.options),{},{resource:r,isLoadingResource:!1})})})),E()(K,"".concat(_.x,"_PENDING"),(function(e){return ee(ee({},e),{},{options:ee(ee({},e.options),{},{isLoadingOperation:!0})})})),E()(K,"".concat(_.x,"_FULFILLED"),(function(e,t){var r=t.payload;return ee(ee({},e),{},{options:ee(ee({},e.options),{},{operation:r,isLoadingOperation:!1})})})),E()(K,"".concat(_.e,"_PENDING"),(function(e){return ee(ee({},e),{},{isLoadingExpandSplats:!0})})),E()(K,"".concat(_.e,"_FULFILLED"),(function(e,t){var r=t.payload;return ee(ee({},e),{},{expandSplats:r,isLoadingExpandSplats:!1})})),E()(K,"".concat(_.E),(function(){return re})),K);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie={isLoading:!1,resourceTypes:{data:[],meta:L.b},resources:{},loadingResources:0},ce=(te={},E()(te,"".concat(_.v,"_PENDING"),(function(e){return ae(ae({},e),{},{isLoading:!0})})),E()(te,"".concat(_.v,"_FULFILLED"),(function(e,t){var r=t.payload;return ae(ae({},e),{},{resourceTypes:r,isLoading:!1})})),E()(te,"".concat(_.u,"_PENDING"),(function(e){return ae(ae({},e),{},{loadingResources:e.loadingResources+1})})),E()(te,"".concat(_.u,"_FULFILLED"),(function(e,t){var r=t.payload;return ae(ae({},e),{},{resources:ae(ae({},e.resources),{},E()({},r.links.first.split("/")[5],r.data)),loadingResources:e.loadingResources-1})})),te),se=new p.a({},[b.a,l.a,y()({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),O.a]);se.register({userReducer:Object(d.applyReducerHash)(R,w),groupReducer:Object(d.applyReducerHash)(A,U),policyReducer:Object(d.applyReducerHash)(k,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:Object(d.applyReducerHash)(J,B),accessReducer:Object(d.applyReducerHash)(Q,Z),permissionReducer:Object(d.applyReducerHash)(ne,re),costReducer:Object(d.applyReducerHash)(ce,ie),notifications:m.a});var ue=se.getStore(),le=r(430),de=r.n(le),pe=r(431),fe=r.n(pe),me=r(340),he=r.n(me),ye=r(432),ge=r.n(ye),Oe=r(433),be=r.n(Oe),ve=r(352),Ee=r.n(ve),_e=r(29),Le=r.n(_e),Pe=r(42),De=r(161),je=r.n(De),we=r(190),Re=r(127),Ie=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(5),r.e(17)]).then(r.bind(null,1042))})),Se=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(5),r.e(16)]).then(r.bind(null,1043))})),Fe=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(18)]).then(r.bind(null,1045))})),Ge=Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(5),r.e(19)]).then(r.bind(null,1044))})),Ne=function(e){var t=e.rootClass,r=je()(e,["rootClass"]),n=document.getElementById("root");return n.removeAttribute("class"),n.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),n.setAttribute("role","main"),a.a.createElement(Pe.b,r)};Ne.propTypes={rootClass:Le.a.string};var Ue=function(){return a.a.createElement(o.Suspense,{fallback:a.a.createElement(we.a,null)},a.a.createElement(Pe.d,null,a.a.createElement(Ne,{path:Re.a.groups,component:Ie,rootClass:"groups"}),a.a.createElement(Ne,{path:Re.a.roles,component:Se,rootClass:"roles"}),a.a.createElement(Ne,{path:Re.a.users,component:Fe,rootClass:"users"}),a.a.createElement(Ne,{path:[Re.a.myUserAccess,Re.a.rbac],component:Ge,rootClass:"myUserAccess"}),a.a.createElement(Pe.b,{render:function(){return a.a.createElement(Pe.a,{to:Re.a.myUserAccess})}})))};Ue.propTypes={childProps:Le.a.object};var xe=r(218),Ae=r(367),Te=r(799),Ce=(r(632),r(191)),He=r(113),ke=r(192),Me=r(364),ze=r(365),qe=r(438),Be=r.n(qe),We=r(203),Ve=(r(633),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(We.PageHeader,null,a.a.createElement(We.PageHeaderTitle,{title:"User access"})),a.a.createElement(xe.Main,null,a.a.createElement(ke.EmptyState,{variant:ke.EmptyStateVariant.full,className:"ins-c-rbac-denied-state"},a.a.createElement(Me.EmptyStateIcon,{icon:Be.a}),a.a.createElement(Ce.Title,{headingLevel:"h4"},"You do not have permissions to view or manage User access"),a.a.createElement(ze.EmptyStateBody,null,"Contact your organization administrator(s) for more information."),document.referrer?a.a.createElement(He.Button,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):a.a.createElement(He.Button,{variant:"primary",component:"a",href:"."},"Go to landing page"))))});r(492);function Je(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ee()(e);if(t){var o=Ee()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return be()(this,r)}}var Xe=function(e){ge()(r,e);var t=Je(r);function r(){var e;de()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),E()(he()(e),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),e}return fe()(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),!insights.chrome.getApp()&&t.push("/my-user-access"),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp(insights.chrome.getApp()),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,r=e.isAdmin;return t?r||"rbac"!==insights.chrome.getApp()?a.a.createElement(Te.a,{locale:"en"},a.a.createElement(a.a.Fragment,null,a.a.createElement(Ae.NotificationsPortal,null),a.a.createElement(xe.Main,{style:{marginLeft:0,padding:0}},a.a.createElement(Ue,null)))):a.a.createElement(Ve,null):a.a.createElement(we.a,null)}}]),r}(o.Component);Xe.propTypes={history:Le.a.object};var Ye=Object(Pe.k)(Object(u.connect)()(Xe)),Ke=r(439);c.a.render(a.a.createElement(u.Provider,{store:ue},a.a.createElement(s.a,{basename:Object(Ke.getBaseName)(location.pathname)},a.a.createElement(Ye,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map