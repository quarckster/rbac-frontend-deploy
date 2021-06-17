(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[822],{39822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(96156),s=n(28481),i=n(92950),a=n.n(i),c=n(489),l=n(39173),o=n(45697),u=n.n(o),m=function(e){return e.isOrgAdmin?a().createElement(c.Tooltip,{position:c.TooltipPosition.right,content:a().createElement("span",null," You can manage other users' permissions with 'User access' ")},a().createElement(c.Label,{color:"purple"}," Org. Administrator ")):a().createElement(a().Fragment,null)};m.propTypes={isOrgAdmin:u().bool};const p=m;var d=n(334),b=n(94184),f=n.n(b),O=n(60306),h=[{entitlement:"application_services",title:"Application Services",apps:{"Streams for Apache Kafka (beta)":"/","API Management (beta)":"/","Data Science (private beta)":"/"}},{entitlement:"openshift",title:"OpenShift",apps:{clusters:"/",subscriptions:"/subscriptions","cost management":"/cost-management"},appsIds:["cost-management","subscriptions"]},{entitlement:"rhel",title:"Red Hat Enterprise Linux",apps:{advisor:"/advisor",compliance:"/compliance",drift:"/drift","image builder":"/image-builder",patch:"/patch",vulnerability:"/vulnerability",policies:"/policies",subscriptions:"/subscriptions"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory","notifications","image-builder","subscriptions"]},{entitlement:"ansible",title:"Ansible Automation Platform",apps:{"automation hub":"/automation-hub","automation services catalog":"/catalog",insights:"/automation-analytics"},appsIds:["catalog","approval","automation-analytics","automation-hub"]}];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const v=function(){for(var e=(0,d.useLocation)(),t=e.search,n=new URLSearchParams(t),s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.reduce((function(e,t){return y(y({},e),{},(0,r.Z)({},t,n.get(t)))}),{})};var E=function(e){var t=e.header,n=e.entitlements,r=e.isDisabled,i=v("bundle").bundle;return a().createElement(a().Fragment,null,t&&a().createElement(c.Title,{headingLevel:"h3",size:"xl"},t),a().createElement(c.Stack,{className:f()({"pf-u-mt-lg":!t}),hasGutter:!0},n&&(null==h?void 0:h.map((function(e){var t=n.find((function(t){var n=(0,s.Z)(t,1)[0];return e.entitlement===n})),l=e.entitlement;return t?a().createElement(c.StackItem,{key:l,className:"ins-c-mua-cardWrapper"},a().createElement(d.NavLink,{className:f()("ins-c-mua-bundles__cardlink",{"ins-c-mua-bundles__cardlink--disabled":r}),to:{pathname:O._j.d$,search:"bundle=".concat(l)}},a().createElement(c.Card,{key:e.title,isFlat:r||l!==i,isSelectable:!r,isSelected:!r&&l===i,className:f()("ins-c-mua-bundles__card","ins-c-mua-bundles__card--".concat(e.entitlement),{"ins-c-mua-bundles__card--disabled":r})},a().createElement(c.CardTitle,{className:"ins-c-mua-bundles__card--header"}," ",e.title),a().createElement(c.CardBody,null,a().createElement(c.Stack,{hasGutter:!0},a().createElement(c.StackItem,{className:"ins-c-mua-bundles__card--applist"},Object.entries(e.apps||{}).map((function(e){var t=(0,s.Z)(e,1)[0];return a().createElement("span",{key:t}," ",t," ")})))))))):null})))))};E.propTypes={header:u().string,entitlements:u().array,isDisabled:u().bool};const _=E;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){return i.Fragment};const k=function(){var e=v("bundle").bundle,t=function(e){var t,n=(0,d.useHistory)(),r=n.push,s=n.location.pathname;return"string"!=typeof e||0===e.length?(r({to:s,search:"bundle=rhel"}),[]):(null===(t=h.find((function(t){return t.entitlement===e})))||void 0===t?void 0:t.appsIds)||[]}(e),c=(0,i.useState)({}),l=(0,s.Z)(c,2),o=l[0],u=l[1];(0,i.useEffect)((function(){Object.prototype.hasOwnProperty.call(o,e)||n(19289)("./".concat(e)).then((function(t){return u((function(n){return w(w({},n),{},(0,r.Z)({},e,t.default))}))})).catch(console.log)}),[e]);var m=o[e]||P;return a().createElement(m,{key:e,apps:t})};var A=n(63053),S=function(e){var t,n=e.entitlements,r=e.isOrgAdmin,i=Object.entries(n).filter((function(e){return(0,s.Z)(e,2)[1].is_entitled})),l=Object.entries(n).filter((function(e){return!(0,s.Z)(e,2)[1].is_entitled})),o=v("bundle").bundle;return a().createElement(A.Z.Provider,{value:r},a().createElement(c.Grid,null,a().createElement(c.GridItem,{className:"pf-m-3-col-on-md ins-l-myUserAccess-section__cards ins-m-hide-on-sm"},a().createElement(c.Stack,null,a().createElement(c.StackItem,{className:"ins-l-myUserAccess-section__cards--entitled"},a().createElement(_,{entitlements:i})),l.length>0&&a().createElement(c.StackItem,{className:"ins-l-myUserAccess-section__cards--unentitled"},a().createElement(_,{header:"Not subscribed",entitlements:l,isDisabled:!0})))),a().createElement(c.GridItem,{className:"pf-m-9-col-on-md ins-l-myUserAccess-section__table"},"application_services"!==o&&a().createElement(c.Title,{headingLevel:"h3",size:"xl"},"Your ".concat(null===(t=h.find((function(e){return e.entitlement===o})))||void 0===t?void 0:t.title," ").concat(r?"roles":"permissions")),a().createElement(k,null))))};S.propTypes={entitlements:u().object,isOrgAdmin:u().bool};const D=S;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Z=function(){var e=(0,i.useState)({}),t=(0,s.Z)(e,2),n=t[0],r=t[1];(0,i.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){var t,n=e.identity,s=e.entitlements;return r({entitlements:s,isOrgAdmin:null==n||null===(t=n.user)||void 0===t?void 0:t.is_org_admin})}))}),[]);var o=U(U({},n.entitlements),{},{application_services:{is_entitled:!0,is_trial:!1}}),u=(0,i.useState)(!1),m=(0,s.Z)(u,2),d=m[0],b=m[1],f=[a().createElement(c.DropdownItem,{key:"test"},"test")];return a().createElement(a().Fragment,null,Object.prototype.hasOwnProperty.call(n,"entitlements")&&Object.prototype.hasOwnProperty.call(n,"isOrgAdmin")?a().createElement(a().Fragment,null,a().createElement(l.Z,{className:"ins-p-myUserAccess--title sticky",title:a().createElement(a().Fragment,null,a().createElement("span",null," My User Access "),a().createElement(p,{isOrgAdmin:n.isOrgAdmin}))}),a().createElement(c.Text,{component:"p",className:"ins-p-myUserAccess--subtitle"},"Select applications to view your personal permissions."),a().createElement("div",{className:"ins-p-myUserAccess--dropdown sticky"},a().createElement(c.Dropdown,{ouiaId:"mua-bundle-dropdown",toggle:a().createElement(c.DropdownToggle,{onToggle:function(){return b()},id:"mua-bundle-dropdown"},"Choose a subscription..."),dropdownItems:f,isOpen:d})),a().createElement("section",null,a().createElement(D,{entitlements:o,isOrgAdmin:n.isOrgAdmin}))):a().createElement(c.Spinner,null))}},63053:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)(!1)},19289:(e,t,n)=>{var r={"./MUABundles":[35337,436,337],"./MUABundles.scss":[35337,436,337],"./__mocks__/rhel":[18348,348],"./__mocks__/rhel.js":[18348,348],"./ansible":[85039,410,252,736,691,657,250,39],"./ansible.js":[85039,410,252,736,691,657,250,39],"./application_services":[62997,410,436,997],"./application_services.js":[62997,410,436,997],"./openshift":[57416,410,252,736,691,657,250,436,416],"./openshift.js":[57416,410,252,736,691,657,250,436,416],"./rhel":[54250,410,252,736,691,657,250],"./rhel.js":[54250,410,252,736,691,657,250]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=19289,e.exports=s}}]);
//# sourceMappingURL=../sourcemaps/822.7f4ca42ab1b1ab7e5015.js.map