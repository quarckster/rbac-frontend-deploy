(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[740],{44554:(e,t,r)=>{(t=r(23645)(!1)).push([e.id,".ins-c-rbac__summary .pf-l-grid{margin-bottom:var(--pf-global--gutter--md)}.ins-c-rbac__bold-text{font-weight:var(--pf-global--FontWeight--bold)}@media only screen and (max-width: 768px){.ins-m-hide-on-sm{display:none}.pf-c-table__expandable-row.pf-m-expanded{max-height:none !important;overflow-y:visible}.pf-c-table__expandable-row.pf-m-expanded tr:first-of-type{padding-top:0 !important}.pf-c-table__expandable-row.pf-m-expanded>td::before{display:none}.ins-c-rbac__user-row .pf-c-label{width:max-content}.ins-c-conditional-filter .pf-l-split__item.pf-m-fill{flex-grow:.8}.pf-c-empty-state__content h4.pf-c-title{font-size:var(--pf-c-title--m-2xl--FontSize)}.pf-c-empty-state__content .pf-c-empty-state__icon{font-size:var(--pf-c-empty-state--m-xl__icon--FontSize)}}\n",""]),e.exports=t},69244:(e,t,r)=>{(t=r(23645)(!1)).push([e.id,".ins-c-rbac-denied-state .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},27625:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Y});var n=r(34575),o=r.n(n),i=r(93913),a=r.n(i),c=r(81506),s=r.n(c),l=r(2205),u=r.n(l),p=r(78585),d=r.n(p),f=r(29754),m=r.n(f),g=r(59713),E=r.n(g),O=r(80150),y=r.n(O),h=r(45697),_=r.n(h),b=r(47194),L=r(70983),v=r(6479),P=r.n(v),R=r(55917),D=r(60306),j=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(446),r.e(753),r.e(825),r.e(903),r.e(694),r.e(326),r.e(537),r.e(274),r.e(182)]).then(r.bind(r,45182))})),I=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(446),r.e(753),r.e(825),r.e(903),r.e(982),r.e(694),r.e(326),r.e(537),r.e(565)]).then(r.bind(r,67565))})),F=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(446),r.e(753),r.e(279),r.e(825),r.e(694),r.e(326),r.e(274),r.e(129)]).then(r.bind(r,60129))})),w=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(946)]).then(r.bind(r,63946))})),G=(0,O.lazy)((function(){return r.e(924).then(r.bind(r,71924))})),S=function(e){var t=e.rootClass,r=P()(e,["rootClass"]),n=document.getElementById("root");return n.removeAttribute("class"),n.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),n.setAttribute("role","main"),y().createElement(b.Route,r)};S.propTypes={rootClass:_().string};var N=function(){return y().createElement(O.Suspense,{fallback:y().createElement(R.zx,null)},y().createElement(b.Switch,null,y().createElement(S,{path:D._j.Xx,component:j,rootClass:"groups"}),y().createElement(S,{path:D._j.uJ,component:I,rootClass:"roles"}),y().createElement(S,{path:D._j.rC,component:F,rootClass:"users"}),y().createElement(S,{path:D._j.d$,component:w,rootClass:"myUserAccess"}),y().createElement(S,{path:D._j.kj,component:G,rootClass:"accessRequest"}),y().createElement(b.Route,null,y().createElement(b.Redirect,{to:D._j.rC}))))};N.propTypes={childProps:_().object};var U=r(86350),T=r(96533),C=r(93242),x=r(60485),A=r(47173),k=r(9947),z=r(38424),Z=r(75106),M=r(99332),H=r(48716),W=r(39173);r(77258);const X=function(){return y().createElement(y().Fragment,null,y().createElement(H.Z,null,y().createElement(W.Z,{title:"User access"})),y().createElement(U.Z,null,y().createElement(k.u,{variant:k.I.full,className:"ins-c-rbac-denied-state"},y().createElement(z.k,{icon:M.ZP}),y().createElement(x.D,{headingLevel:"h4"},"You do not have permissions to view or manage User access"),y().createElement(Z.B,null,"Contact your organization administrator(s) for more information."),document.referrer?y().createElement(A.zx,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):y().createElement(A.zx,{variant:"primary",component:"a",href:"."},"Go to landing page"))))};r(33172);var V=function(e){u()(i,e);var t,r,n=(t=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(r){var o=m()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return d()(this,e)});function i(){var e;o()(this,i);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),E()(s()(e),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),e}return a()(i,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),!insights.chrome.getApp()&&t.push("/my-user-access"),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp(insights.chrome.getApp()),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,r=e.isAdmin;return t?r||"rbac"!==insights.chrome.getApp()?y().createElement(C.Z,{locale:"en"},y().createElement(y().Fragment,null,y().createElement(T.ZP,null),y().createElement(U.Z,{style:{marginLeft:0,padding:0}},y().createElement(N,null)))):y().createElement(X,null):y().createElement(R.zx,null)}}]),i}(O.Component);V.propTypes={history:_().object};const Y=(0,b.withRouter)((0,L.connect)()(V))},71410:(e,t,r)=>{"use strict";r.d(t,{he:()=>n,eX:()=>o});var n={limit:20,offset:0,itemCount:0},o={limit:10,offset:0,itemCount:0}},55917:(e,t,r)=>{"use strict";r.d(t,{Wi:()=>_,zx:()=>b,h2:()=>L,Vj:()=>v,Z0:()=>P});var n=r(67154),o=r.n(n),i=r(319),a=r.n(i),c=r(6479),s=r.n(c),l=r(80150),u=r.n(l),p=r(45697),d=r.n(p),f=r(31765),m=r(27511),g=r(61282),E=r(81217),O=r(14087),y=r(24561),h=r(56455),_=function(e){var t=e.items,r=s()(e,["items"]);return u().createElement(l.Fragment,null,u().createElement(f.FR,{"aria-label":"datalist-placeholder"},a()(Array(t)).map((function(e,t){return u().createElement(g.L,{key:t,"aria-labelledby":"datalist-item-placeholder"},u().createElement(E.V,{"aria-label":"datalist-item-placeholder-row"},u().createElement(O.p,{dataListCells:[u().createElement(m.K,{key:"1"},u().createElement(h.Z,o()({size:h.i.lg},r)))]})))}))))};_.propTypes={items:d().number},_.defaultProps={items:5};var b=function(e){return u().createElement("div",null,u().createElement(y.ZP,o()({height:16,width:300,speed:2},e),u().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),u().createElement(_,null))},L=function(e){return u().createElement("div",{style:{width:"200px",height:"21px"}},u().createElement(y.ZP,o()({height:21,width:200,speed:2},e),u().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},v=function(e){e.showDivider;var t=s()(e,["showDivider"]);return u().createElement("div",{style:{width:"200px",height:"18px"}},u().createElement(y.ZP,o()({height:18,width:200,speed:2},t),u().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))};v.propTypes={showDivider:d().any};var P=function(){return u().createElement(y.ZP,{height:32,width:160,speed:2},u().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}},84887:(e,t,r)=>{"use strict";r.d(t,{_h:()=>n,kL:()=>o,eb:()=>i,Po:()=>a,t3:()=>c,v9:()=>s,WH:()=>l,MF:()=>u,rz:()=>p,Lp:()=>d,W2:()=>f,eJ:()=>m,Ef:()=>g,nI:()=>E,hi:()=>O,b9:()=>y,Nr:()=>h,Yc:()=>_,fG:()=>b,XS:()=>L,Vh:()=>v,as:()=>P,qj:()=>R,Y2:()=>D,Sw:()=>j,kg:()=>I,ft:()=>F,wI:()=>w,KD:()=>G,vf:()=>S,E2:()=>N,s6:()=>U,ZX:()=>T,e:()=>C,e0:()=>x});var n="FETCH_GROUP",o="FETCH_SYSTEM_GROUP",i="FETCH_GROUPS",a="ADD_GROUP",c="UPDATE_GROUP",s="REMOVE_GROUPS",l="FETCH_USERS",u="ADD_ROLE",p="FETCH_ROLE",d="FETCH_ROLES",f="REMOVE_ROLE",m="FETCH_ROLES_FOR_WIZARD",g="FETCH_GROUP_POLICIES",E="FETCH_POLICY",O="RESET_SELECTED_GROUP",y="REMOVE_MEMBERS_FROM_GROUP",h="ADD_MEMBERS_TO_GROUP",_="REMOVE_ROLES_FROM_GROUP",b="ADD_ROLES_TO_GROUP",L="FETCH_ROLES_FOR_GROUP",v="FETCH_MEMBERS_FOR_GROUP",P="FETCH_ADD_ROLES_FOR_GROUP",R="FETCH_ROLE_FOR_USER",D="FETCH_ROLE_FOR_PRINCIPAL",j="UPDATE_ROLE",I="PATCH_ROLE",F="GET_PRINCIPAL_ACCESS",w="LIST_PERMISSIONS",G="LIST_APPLICATION_OPTIONS",S="LIST_RESOURCE_OPTIONS",N="LIST_OPERATION_OPTIONS",U="GET_RESOURCE_DEFINITIONS",T="GET_RESOURCE",C="EXPAND_SPLATS",x="RESET_EXPAND_SPLATS"},54479:(e,t,r)=>{"use strict";r.d(t,{Z:()=>ee});var n,o=r(5068),i=r(84885),a=r(83215),c=r(18546),s=r(94500),l=r.n(s),u=r(53894),p=r(59713),d=r.n(p),f=r(84887),m=r(71410);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={selectedUser:{},isUserDataLoading:!1,users:{meta:m.he}};const y=(n={},d()(n,"".concat(f.WH,"_PENDING"),(function(e){return E(E({},e),{},{isUserDataLoading:!0})})),d()(n,"".concat(f.WH,"_FULFILLED"),(function(e,t){var r=t.payload;return E(E({},e),{},{users:r,isUserDataLoading:!1})})),n);var h,_=r(57557),b=r.n(_);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={groups:{data:[],meta:m.he},selectedGroup:{addRoles:{},members:{meta:m.he},pagination:m.he},isLoading:!1,isRecordLoading:!1},R=function(e){return v(v({},e),{},{isLoading:!0})};const D=(h={},d()(h,"".concat(f.eb,"_PENDING"),R),d()(h,"".concat(f.eb,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{groups:r,isLoading:!1})})),d()(h,"".concat(f.kL,"_PENDING"),R),d()(h,"".concat(f.kL,"_FULFILLED"),(function(e,t){var r,n,o=t.payload;return v(v({},e),{},{systemGroup:null==o||null===(r=o.data)||void 0===r||null===(n=r.filter((function(e){return null==e?void 0:e.platform_default})))||void 0===n?void 0:n[0]})})),d()(h,"".concat(f._h,"_PENDING"),(function(e){return v(v({},e),{},{isRecordLoading:!0,selectedGroup:v(v({},e.selectedGroup),{},{loaded:!1})})})),d()(h,"".concat(f._h,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{isRecordLoading:!1,groups:v(v({},e.groups),{},{data:e.groups.data.map((function(e){return v(v({},e),r.uuid===e.uuid&&v(v({},r),{},{loaded:!0}))}))}),selectedGroup:v(v(v({},e.selectedGroup),{},{members:v(v({},e.selectedGroup.members),{},{data:r.principals})},b()(r,["principals","roles"])),{},{loaded:!0,pagination:v(v({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),d()(h,"".concat(f.XS,"_PENDING"),(function(e){return v(v({},e),{},{isRecordRolesLoading:!0,selectedGroup:v(v({},e.selectedGroup),{},{loaded:!1})})})),d()(h,"".concat(f.XS,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{isRecordRolesLoading:!1,selectedGroup:v(v({},e.selectedGroup),{},{roles:r.data,pagination:r.meta,loaded:!0})})})),d()(h,"".concat(f.Vh,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),d()(h,"".concat(f.Vh,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup||{}),{},{members:v({isLoading:!1},r)})})})),d()(h,"".concat(f.as,"_PENDING"),(function(e){return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),d()(h,"".concat(f.as,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup),{},{addRoles:{roles:r.data,pagination:r.meta,loaded:!0}})})})),d()(h,f.hi,(function(e){return v(v({},e),{},{selectedGroup:void 0})})),h);var j;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const w=(j={},d()(j,"".concat(f.Ef,"_PENDING"),(function(e){return F(F({},e),{},{isLoading:!0})})),d()(j,"".concat(f.Ef,"_FULFILLED"),(function(e,t){var r=t.payload;return F(F({},e),{},{policies:r,isLoading:!1})})),d()(j,"".concat(f.nI,"_PENDING"),(function(e){return F(F({},e),{},{isRecordLoading:!0})})),d()(j,"".concat(f.nI,"_FULFILLED"),(function(e,t){var r=t.payload;return F(F({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),j);var G;function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:m.he},rolesForWizard:{data:[],meta:m.he},selectedRole:{}},T=function(e){return N(N({},e),{},{isRecordLoading:!0})},C=function(e,t){var r=t.payload;return N(N({},e),{},{rolesWithAccess:N(N({},e.rolesWithAccess),{},d()({},r.uuid,r)),isRecordLoading:!1})};const x=(G={},d()(G,"".concat(f.rz,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{selectedRole:r,isRecordLoading:!1})})),d()(G,"".concat(f.rz,"_PENDING"),T),d()(G,"".concat(f.Lp,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{roles:r,isLoading:!1})})),d()(G,"".concat(f.Lp,"_PENDING"),(function(e){return N(N({},e),{},{isLoading:!0})})),d()(G,"".concat(f.qj,"_FULFILLED"),C),d()(G,"".concat(f.qj,"_PENDING"),T),d()(G,"".concat(f.Y2,"_FULFILLED"),C),d()(G,"".concat(f.Y2,"_PENDING"),T),d()(G,"".concat(f.eJ,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),d()(G,"".concat(f.eJ,"_PENDING"),(function(e){return N(N({},e),{},{isWizardLoading:!0})})),G);var A;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={isLoading:!1,access:{data:[],meta:m.he}};const M=(A={},d()(A,"".concat(f.ft,"_PENDING"),(function(e){return z(z({},e),{},{isLoading:!0})})),d()(A,"".concat(f.ft,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{access:r,isLoading:!1})})),A);var H;function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={isLoading:!1,options:{isLoadingApplication:!1,isLoadingResource:!1,isLoadingOperation:!1,application:{data:[]},resource:{data:[]},operation:{data:[]}},permission:{data:[],meta:m.he},expandSplats:{data:[],meta:m.he}};const Y=(H={},d()(H,"".concat(f.wI,"_PENDING"),(function(e){return X(X({},e),{},{isLoading:!0})})),d()(H,"".concat(f.wI,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{permission:r,isLoading:!1})})),d()(H,"".concat(f.KD,"_PENDING"),(function(e){return X(X({},e),{},{options:X(X({},e.options),{},{isLoadingApplication:!0})})})),d()(H,"".concat(f.KD,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{options:X(X({},e.options),{},{application:r,isLoadingApplication:!1})})})),d()(H,"".concat(f.vf,"_PENDING"),(function(e){return X(X({},e),{},{options:X(X({},e.options),{},{isLoadingResource:!0})})})),d()(H,"".concat(f.vf,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{options:X(X({},e.options),{},{resource:r,isLoadingResource:!1})})})),d()(H,"".concat(f.E2,"_PENDING"),(function(e){return X(X({},e),{},{options:X(X({},e.options),{},{isLoadingOperation:!0})})})),d()(H,"".concat(f.E2,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{options:X(X({},e.options),{},{operation:r,isLoadingOperation:!1})})})),d()(H,"".concat(f.e,"_PENDING"),(function(e){return X(X({},e),{},{isLoadingExpandSplats:!0})})),d()(H,"".concat(f.e,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{expandSplats:r,isLoadingExpandSplats:!1})})),d()(H,"".concat(f.e0),(function(){return V})),H);var B;function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q={isLoading:!1,resourceTypes:{data:[],meta:m.he},resources:{},loadingResources:0};const $=(B={},d()(B,"".concat(f.s6,"_PENDING"),(function(e){return K(K({},e),{},{isLoading:!0})})),d()(B,"".concat(f.s6,"_FULFILLED"),(function(e,t){var r=t.payload;return K(K({},e),{},{resourceTypes:r,isLoading:!1})})),d()(B,"".concat(f.ZX,"_PENDING"),(function(e){return K(K({},e),{},{loadingResources:e.loadingResources+1})})),d()(B,"".concat(f.ZX,"_FULFILLED"),(function(e,t){var r=t.payload;return K(K({},e),{},{resources:K(K({},e.resources),{},d()({},r.links.first.split("/")[5],r.data.filter((function(e){return null!==e.value})))),loadingResources:e.loadingResources-1})})),B);var Q=new c.ZP({},[u.Z,o.ZP,(0,i.default)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),l()]);Q.register({userReducer:(0,c.Gg)(y,O),groupReducer:(0,c.Gg)(D,P),policyReducer:(0,c.Gg)(w,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:(0,c.Gg)(x,U),accessReducer:(0,c.Gg)(M,Z),permissionReducer:(0,c.Gg)(Y,V),costReducer:(0,c.Gg)($,q),notifications:a.ee});const ee=Q.getStore()},33172:(e,t,r)=>{var n=r(93379),o=r(44554);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var i=n(o,{insert:"head",singleton:!1});if(!o.locals||e.hot.invalidate){var a=o.locals;e.hot.accept(44554,(function(){"string"==typeof(o=(o=r(44554)).__esModule?o.default:o)&&(o=[[e.id,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.locals)?(a=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},77258:(e,t,r)=>{var n=r(93379),o=r(69244);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var i=n(o,{insert:"head",singleton:!1});if(!o.locals||e.hot.invalidate){var a=o.locals;e.hot.accept(69244,(function(){"string"==typeof(o=(o=r(69244)).__esModule?o.default:o)&&(o=[[e.id,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.locals)?(a=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},60306:e=>{"use strict";e.exports=JSON.parse('{"_j":{"Sy":"/","Xx":"/groups","BC":"/groups/add-group","jz":"/groups/removegroups","M5":{"E":"/groups/edit/:id"},"fe":"/groups/detail/:uuid","Rx":"/groups/detail/:uuid/members/edit","Xi":"/groups/detail/:uuid/roles/edit","Se":"/groups/detail/:uuid/members/remove","ub":"/groups/detail/:uuid/roles/remove","mh":"/groups/detail/:uuid/roles","Pc":"/groups/detail/:uuid/roles/add_roles","C1":"/groups/detail/:uuid/members","dZ":"/groups/detail/:uuid/members/add_members","T1":"/groups/detail/:groupUuid/roles/detail/:uuid","uJ":"/roles","EM":"/roles/add-role","fV":"/roles/remove/:id","ld":"/roles/edit/:id","Fh":"/roles/detail/:uuid","W3":"/roles/detail/:uuid/role-add-permission","GL":"/roles/detail/:id/remove","Pu":"/roles/detail/:id/edit","T0":"/roles/detail/:roleId/permission/:permissionId","nu":"/roles/detail/:roleId/permission/:permissionId/edit","rC":"/users","tG":"/users/detail/:username","d$":"/my-user-access","kj":"/access-request"}}')}}]);
//# sourceMappingURL=740.38f0509979d150951306.js.map