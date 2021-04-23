(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9822],{39822:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>$});var r=t(59713),n=t.n(r),a=t(63038),c=t.n(a),i=t(80150),l=t.n(i),o=t(56787),p=t(84457),u=t(75728),d=t(39173),m=t(68340),b=t(2372),f=t(45697),g=t.n(f),y=t(69174),_=t(35224),v=function(e){return e.isOrgAdmin?l().createElement(_.u,{position:_.D.right,content:l().createElement("span",null," You can manage other users' permissions with 'User access' ")},l().createElement(y._,{color:"purple"}," Org. Administrator ")):l().createElement(l().Fragment,null)};v.propTypes={isOrgAdmin:g().bool};const h=v;t(54530);var O=t(50693),A=t(16475),w=t(49739),E=t(83826),U=t(60485),j=t(334),k=t(94184),P=t.n(k),x=t(60306),D=t(32203),S=t(70),N=t(62394),C=[{entitlement:"application_services",title:"Application Services",apps:{"Streams for Apache Kafka (beta)":"/","API Management (beta)":"/","Data Science (private beta)":"/"}},{entitlement:"openshift",title:"OpenShift",apps:{clusters:"/",subscriptions:"/subscriptions","cost management":"/cost-management"},appsIds:["cost-management","subscriptions"]},{entitlement:"rhel",title:"Red Hat Enterprise Linux",apps:{advisor:"/advisor",compliance:"/compliance",drift:"/drift","image builder":"/image-builder",patch:"/patch",vulnerability:"/vulnerability",policies:"/policies",subscriptions:"/subscriptions"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory","notifications","image-builder","subscriptions"]},{entitlement:"ansible",title:"Ansible Automation Platform",apps:{"automation hub":"/automation-hub","automation services catalog":"/catalog",insights:"/automation-analytics"},appsIds:["catalog","approval","automation-analytics","automation-hub"]}];function M(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?M(Object(t),!0).forEach((function(s){n()(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}const F=function(){for(var e=(0,j.useLocation)(),s=e.search,t=new URLSearchParams(s),r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return a.reduce((function(e,s){return B(B({},e),{},n()({},s,t.get(s)))}),{})};t(19697);var L=function(e){var s=e.header,t=e.entitlements,r=e.isDisabled,n=F("bundle").bundle;return l().createElement(l().Fragment,null,s&&l().createElement(U.D,{headingLevel:"h3",size:"xl"},s),l().createElement(w.K,{className:P()({"pf-u-mt-lg":!s}),hasGutter:!0},t&&(null==C?void 0:C.map((function(e){var s=t.find((function(s){var t=c()(s,1)[0];return e.entitlement===t})),a=e.entitlement;return s?l().createElement(E.v,{key:a,className:"ins-c-mua-cardWrapper"},l().createElement(j.NavLink,{className:P()("ins-c-mua-bundles__cardlink",{"ins-c-mua-bundles__cardlink--disabled":r}),to:{pathname:x._j.d$,search:"bundle=".concat(a)}},l().createElement(D.Z,{key:e.title,isFlat:r||a!==n,isSelectable:!r,isSelected:!r&&a===n,className:P()("ins-c-mua-bundles__card","ins-c-mua-bundles__card--".concat(e.entitlement),{"ins-c-mua-bundles__card--disabled":r})},l().createElement(S.l,{className:"ins-c-mua-bundles__card--header"}," ",e.title),l().createElement(N.e,null,l().createElement(w.K,{hasGutter:!0},l().createElement(E.v,{className:"ins-c-mua-bundles__card--applist"},Object.entries(e.apps||{}).map((function(e){var s=c()(e,1)[0];return l().createElement("span",{key:s}," ",s," ")})))))))):null})))))};L.propTypes={header:g().string,entitlements:g().array,isDisabled:g().bool};const I=L;t(66471);function z(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?z(Object(t),!0).forEach((function(s){n()(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var Z=function(){return i.Fragment};const K=function(){var e=F("bundle").bundle,s=function(e){var s,t=(0,j.useHistory)(),r=t.push,n=t.location.pathname;return"string"!=typeof e||0===e.length?(r({to:n,search:"bundle=rhel"}),[]):(null===(s=C.find((function(s){return s.entitlement===e})))||void 0===s?void 0:s.appsIds)||[]}(e),r=(0,i.useState)({}),a=c()(r,2),o=a[0],p=a[1];(0,i.useEffect)((function(){Object.prototype.hasOwnProperty.call(o,e)||t(19289)("./".concat(e)).then((function(s){return p((function(t){return T(T({},t),{},n()({},e,s.default))}))})).catch(console.log)}),[e]);var u=o[e]||Z;return l().createElement(u,{key:e,apps:s})};var W=t(63053),G=function(e){var s,t=e.entitlements,r=e.isOrgAdmin,n=Object.entries(t).filter((function(e){return c()(e,2)[1].is_entitled})),a=Object.entries(t).filter((function(e){return!c()(e,2)[1].is_entitled})),i=F("bundle").bundle;return l().createElement(W.Z.Provider,{value:r},l().createElement(O.r,null,l().createElement(A.P,{className:"pf-m-3-col-on-md ins-l-myUserAccess-section__cards ins-m-hide-on-sm"},l().createElement(w.K,null,l().createElement(E.v,{className:"ins-l-myUserAccess-section__cards--entitled"},l().createElement(I,{entitlements:n})),a.length>0&&l().createElement(E.v,{className:"ins-l-myUserAccess-section__cards--unentitled"},l().createElement(I,{header:"Not subscribed",entitlements:a,isDisabled:!0})))),l().createElement(A.P,{className:"pf-m-9-col-on-md ins-l-myUserAccess-section__table"},"application_services"!==i&&l().createElement(U.D,{headingLevel:"h3",size:"xl"},"Your ".concat(null===(s=C.find((function(e){return e.entitlement===i})))||void 0===s?void 0:s.title," ").concat(r?"roles":"permissions")),l().createElement(K,null))))};G.propTypes={entitlements:g().object,isOrgAdmin:g().bool};const H=G;function R(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?R(Object(t),!0).forEach((function(s){n()(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}const $=function(){var e=(0,i.useState)({}),s=c()(e,2),t=s[0],r=s[1];(0,i.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){var s,t=e.identity,n=e.entitlements;return r({entitlements:n,isOrgAdmin:null==t||null===(s=t.user)||void 0===s?void 0:s.is_org_admin})}))}),[]);var n=Y(Y({},t.entitlements),window.insights.chrome.isProd?{}:{application_services:{is_entitled:!0,is_trial:!1}}),a=(0,i.useState)(!1),f=c()(a,2),g=f[0],y=f[1],_=[l().createElement(p.h,{key:"test"},"test")];return l().createElement(l().Fragment,null,Object.prototype.hasOwnProperty.call(t,"entitlements")&&Object.prototype.hasOwnProperty.call(t,"isOrgAdmin")?l().createElement(l().Fragment,null,l().createElement(d.Z,{className:"ins-p-myUserAccess--title sticky",title:l().createElement(l().Fragment,null,l().createElement("span",null," My User Access "),l().createElement(h,{isOrgAdmin:t.isOrgAdmin}))}),l().createElement(m.x,{component:"p",className:"ins-p-myUserAccess--subtitle"},"Select applications to view your personal permissions."),l().createElement("div",{className:"ins-p-myUserAccess--dropdown sticky"},l().createElement(o.L,{ouiaId:"mua-bundle-dropdown",toggle:l().createElement(u.Z,{onToggle:function(){return y()},id:"mua-bundle-dropdown"},"Choose a subscription..."),dropdownItems:_,isOpen:g})),l().createElement("section",null,l().createElement(H,{entitlements:n,isOrgAdmin:t.isOrgAdmin}))):l().createElement(b.$,null))}},63053:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});const r=(0,t(80150).createContext)(!1)},10945:(e,s,t)=>{(s=t(23645)(!1)).push([e.id,".rbac .ins-c-mua-bundles__card--header,.my-user-access .ins-c-mua-bundles__card--header{font-weight:300}.rbac .ins-c-mua-bundles__card--body,.my-user-access .ins-c-mua-bundles__card--body{color:var(--pf-global--Color--200)}.rbac .ins-c-mua-bundles__card--applist,.my-user-access .ins-c-mua-bundles__card--applist{display:flex;flex-direction:column;color:var(--pf-global--Color--400)}.rbac .ins-c-mua-bundles__card--applist span,.my-user-access .ins-c-mua-bundles__card--applist span{text-transform:capitalize;font-size:var(--pf-global--FontSize--sm);margin-top:var(--pf-global--spacer--sm)}.rbac .ins-c-mua-bundles__card--rhel .ins-c-mua-bundles__card--applist,.my-user-access .ins-c-mua-bundles__card--rhel .ins-c-mua-bundles__card--applist{display:grid;grid-template-columns:auto auto;gap:var(--pf-global--spacer--sm)}.rbac .ins-c-mua-bundles__card--rhel .ins-c-mua-bundles__card--applist span,.my-user-access .ins-c-mua-bundles__card--rhel .ins-c-mua-bundles__card--applist span{margin-top:0}.rbac .ins-c-mua-bundles__card--disabled,.my-user-access .ins-c-mua-bundles__card--disabled{background:var(--pf-global--disabled-color--300)}.rbac .ins-c-mua-bundles__card+.ins-c-mua-bundles__card,.my-user-access .ins-c-mua-bundles__card+.ins-c-mua-bundles__card{margin-top:var(--pf-global--spacer--md)}.rbac .ins-c-mua-bundles__cardlink,.my-user-access .ins-c-mua-bundles__cardlink{color:inherit}.rbac .ins-c-mua-bundles__cardlink:hover,.my-user-access .ins-c-mua-bundles__cardlink:hover{text-decoration:none}.rbac .ins-c-mua-bundles__cardlink--disabled,.my-user-access .ins-c-mua-bundles__cardlink--disabled{pointer-events:none}\n",""]),e.exports=s},55742:(e,s,t)=>{(s=t(23645)(!1)).push([e.id,".rbac .ins-l-myUserAccess-section__cards--unentitled .pf-c-title,.my-user-access .ins-l-myUserAccess-section__cards--unentitled .pf-c-title{border-top:1px solid var(--pf-global--BorderColor--100);padding-top:var(--pf-global--spacer--md)}.rbac .ins-l-myUserAccess-section__cards--unentitled .ins-c-mua-cardWrapper,.my-user-access .ins-l-myUserAccess-section__cards--unentitled .ins-c-mua-cardWrapper{cursor:not-allowed}\n",""]),e.exports=s},38620:(e,s,t)=>{(s=t(23645)(!1)).push([e.id,".rbac .ins-p-myUserAccess--title,.my-user-access .ins-p-myUserAccess--title{display:flex;align-items:center;background-color:var(--pf-global--BackgroundColor--100);padding:var(--pf-global--spacer--lg) 0 var(--pf-global--spacer--lg) var(--pf-global--spacer--lg)}.rbac .ins-p-myUserAccess--title .pf-c-label,.my-user-access .ins-p-myUserAccess--title .pf-c-label{margin-left:var(--pf-global--spacer--md)}.rbac .ins-p-myUserAccess--subtitle,.my-user-access .ins-p-myUserAccess--subtitle{position:relative;background-color:var(--pf-global--BackgroundColor--100);box-shadow:var(--pf-global--BoxShadow--md-bottom);padding:0 var(--pf-global--spacer--lg) var(--pf-global--spacer--md) var(--pf-global--spacer--lg)}.rbac .ins-p-myUserAccess--dropdown,.my-user-access .ins-p-myUserAccess--dropdown{display:none}.rbac .ins-l-myUserAccess-section__cards,.rbac .ins-l-myUserAccess-section__table,.my-user-access .ins-l-myUserAccess-section__cards,.my-user-access .ins-l-myUserAccess-section__table{background-color:var(--pf-global--BackgroundColor--100);height:calc(100vh - 111px - 84px);padding:0 var(--pf-global--spacer--lg);overflow-x:auto}.rbac .ins-l-myUserAccess-section__cards h3,.rbac .ins-l-myUserAccess-section__table h3,.my-user-access .ins-l-myUserAccess-section__cards h3,.my-user-access .ins-l-myUserAccess-section__table h3{padding:var(--pf-global--spacer--lg) 0}.rbac .ins-l-myUserAccess-section__cards,.my-user-access .ins-l-myUserAccess-section__cards{border-right:1px solid var(--pf-global--BorderColor--100)}@media only screen and (max-width: 768px){.rbac .sticky,.my-user-access .sticky{position:sticky;position:-webkit-sticky;background-color:var(--pf-global--BackgroundColor--100);height:60px;width:100%;z-index:200}.rbac .ins-p-myUserAccess--title,.my-user-access .ins-p-myUserAccess--title{padding:var(--pf-global--spacer--xl) var(--pf-global--spacer--lg) var(--pf-global--spacer--md) var(--pf-global--spacer--lg);top:0}.rbac .ins-p-myUserAccess--subtitle,.my-user-access .ins-p-myUserAccess--subtitle{box-shadow:none;padding:0 var(--pf-global--spacer--lg) var(--pf-global--spacer--lg) var(--pf-global--spacer--lg)}.rbac .ins-p-myUserAccess--dropdown,.my-user-access .ins-p-myUserAccess--dropdown{display:block;padding:0 var(--pf-global--spacer--lg);top:60px}.rbac .ins-p-myUserAccess--dropdown .pf-c-dropdown,.my-user-access .ins-p-myUserAccess--dropdown .pf-c-dropdown{width:100%}.rbac .ins-p-myUserAccess--dropdown .pf-c-dropdown button,.my-user-access .ins-p-myUserAccess--dropdown .pf-c-dropdown button{width:100%}.rbac .ins-p-myUserAccess-section__table,.my-user-access .ins-p-myUserAccess-section__table{height:auto;margin:var(--pf-global--spacer--md)}.rbac .ins-p-myUserAccess-section__table>.pf-c-title,.my-user-access .ins-p-myUserAccess-section__table>.pf-c-title{display:none}}\n",""]),e.exports=s},19697:(e,s,t)=>{var r=t(93379),n=t(10945);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);var a=r(n,{insert:"head",singleton:!1});if(!n.locals||e.hot.invalidate){var c=n.locals;e.hot.accept(10945,(function(){"string"==typeof(n=(n=t(10945)).__esModule?n.default:n)&&(n=[[e.id,n,""]]),function(e,s){if(!e&&s||e&&!s)return!1;var t;for(t in e)if(e[t]!==s[t])return!1;for(t in s)if(!e[t])return!1;return!0}(c,n.locals)?(c=n.locals,a(n)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=n.locals||{}},66471:(e,s,t)=>{var r=t(93379),n=t(55742);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);var a=r(n,{insert:"head",singleton:!1});if(!n.locals||e.hot.invalidate){var c=n.locals;e.hot.accept(55742,(function(){"string"==typeof(n=(n=t(55742)).__esModule?n.default:n)&&(n=[[e.id,n,""]]),function(e,s){if(!e&&s||e&&!s)return!1;var t;for(t in e)if(e[t]!==s[t])return!1;for(t in s)if(!e[t])return!1;return!0}(c,n.locals)?(c=n.locals,a(n)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=n.locals||{}},54530:(e,s,t)=>{var r=t(93379),n=t(38620);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);var a=r(n,{insert:"head",singleton:!1});if(!n.locals||e.hot.invalidate){var c=n.locals;e.hot.accept(38620,(function(){"string"==typeof(n=(n=t(38620)).__esModule?n.default:n)&&(n=[[e.id,n,""]]),function(e,s){if(!e&&s||e&&!s)return!1;var t;for(t in e)if(e[t]!==s[t])return!1;for(t in s)if(!e[t])return!1;return!0}(c,n.locals)?(c=n.locals,a(n)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=n.locals||{}},19289:(e,s,t)=>{var r={"./MUABundles":[44761,7,4761],"./MUABundles.scss":[44761,7,4761],"./__mocks__/rhel":[18348,9,8348],"./__mocks__/rhel.js":[18348,9,8348],"./ansible":[85039,9,6410,5252,4155,8446,5157,3279,3349,2920,4250,5039],"./ansible.js":[85039,9,6410,5252,4155,8446,5157,3279,3349,2920,4250,5039],"./application_services":[62997,9,6410,4761,2997],"./application_services.js":[62997,9,6410,4761,2997],"./openshift":[57416,9,6410,5252,4155,8446,5157,3279,3349,2920,4250,4761,7416],"./openshift.js":[57416,9,6410,5252,4155,8446,5157,3279,3349,2920,4250,4761,7416],"./rhel":[54250,9,6410,5252,4155,8446,5157,3279,3349,2920,4250],"./rhel.js":[54250,9,6410,5252,4155,8446,5157,3279,3349,2920,4250]};function n(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=r[e],n=s[0];return Promise.all(s.slice(2).map(t.e)).then((()=>t.t(n,16|s[1])))}n.keys=()=>Object.keys(r),n.id=19289,e.exports=n}}]);
//# sourceMappingURL=../sourcemaps/9822.d86f1ecce3cbd6800abd.js.map