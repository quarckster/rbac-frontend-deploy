(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[5662],{92758:(e,t,r)=>{"use strict";r.d(t,{a:()=>l,M:()=>p});var n=r(319),a=r.n(n),c=r(59713),i=r.n(c);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new URLSearchParams(e.location.search),c=t.reduce((function(e,t){var r=n.getAll(t);return s(s({},e),{},i()({},t,r.length>1?r:r[0]))}),{});return Object.keys(r).forEach((function(e){var t=r[e];c=s(s({},c),{},i()({},e,Array.isArray(c[e])?a()(new Set([].concat(a()(c[e]),a()(Array.isArray(t)?t:[t])))):(null==t?void 0:t.length)>0&&t||c[e])),Array.isArray(t)?t.forEach((function(t){return n.getAll(e).includes(t)||n.append(e,t)})):n.get(e)||t&&n.set(e,t)})),e.replace({pathname:e.location.pathname,search:n.toString()}),c},p=function(e,t){var r=new URLSearchParams(e.location.search);Object.keys(t).forEach((function(e){return r.delete(e)})),Object.keys(t).forEach((function(e){var n=t[e];Array.isArray(n)?n.forEach((function(t){return t&&r.append(e,t)})):n&&r.set(e,n)})),e.replace({pathname:e.location.pathname,search:r.toString()})}},16796:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(80150),a=r.n(n),c=r(45697),i=r.n(c),o=r(334),s=r(64029),l=r(32835),p=r(19571),u=function(e){return e?a().createElement(s.a,null,Object.values(e).map((function(e,t){return e.title?a().createElement(l.g,{key:e.title,isActive:e.isActive},e.to&&a().createElement(o.NavLink,{exact:!0,to:e.to},e.title)||e.title):a().createElement(p.Vj,{key:t})}))):null};u.propTypes={breadcrumbs:i().object};const d=u},38376:(e,t,r)=>{"use strict";r.d(t,{Q:()=>m,y:()=>g});var n=r(80150),a=r.n(n),c=r(45697),i=r.n(c),o=r(68340),s=r(68774),l=r(28191),p=r(92298),u=r(19571),d=r(16796),f=r(48716),h=r(39173),m=(r(90491),function(e){var t=e.children,r=e.breadcrumbs;return a().createElement(n.Fragment,null,r&&a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(d.Z,r)),a().createElement(f.Z,{className:"ins-rbac-page-header"},t))});m.propTypes={children:i().oneOfType([i().arrayOf(i().node),i().node]).isRequired,breadcrumbs:i().array,paddingBottom:i().bool},m.defaultProps={paddingBottom:!1};var g=function(e){var t=e.title,r=e.renderTitleTag,c=e.description,i=e.children;return a().createElement(n.Fragment,null,a().createElement(l.k,null,a().createElement(p.B,{className:"pf-u-mb-sm"},a().createElement(h.Z,{title:t||a().createElement(u.h2,null),className:"ins-rbac-page-header__title"})),a().createElement(p.B,{alignSelf:{modifier:"alignSelfCenter"}},r&&r())),c&&a().createElement(s.D,{className:"ins-rbac-page-header__description"},"string"==typeof c?a().createElement(o.x,{component:o.q.p},c):c),i)};g.propTypes={title:i().node,renderTitleTag:i().func,description:i().node,children:i().oneOfType([i().node,i().arrayOf(i().node)])}},93327:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(6479),a=r.n(n),c=r(80150),i=r.n(c),o=r(45697),s=r.n(o),l=r(334),p=function(e){var t=e.pageAction,r=a()(e,["pageAction"]);return(0,c.useEffect)((function(){return insights.chrome.appAction(t),function(){return insights.chrome.appAction(void 0)}}),[t]),i().createElement(l.Route,r)};p.propTypes={pageAction:s().string.isRequired};const u=p},32307:(e,t,r)=>{(t=r(23645)(!1)).push([e.id,".rbac .ins-rbac-page-header__title,.my-user-access .ins-rbac-page-header__title{display:block}.rbac .ins-rbac-page-header__title+.ins-rbac-page-header__description,.my-user-access .ins-rbac-page-header__title+.ins-rbac-page-header__description{margin-top:8px}\n",""]),e.exports=t},90491:(e,t,r)=>{var n=r(93379),a=r(32307);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);var c=n(a,{insert:"head",singleton:!1});if(!a.locals||e.hot.invalidate){var i=a.locals;e.hot.accept(32307,(function(){"string"==typeof(a=(a=r(32307)).__esModule?a.default:a)&&(a=[[e.id,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(i,a.locals)?(i=a.locals,c(a)):e.hot.invalidate()}))}e.hot.dispose((function(){c()})),e.exports=a.locals||{}}}]);
//# sourceMappingURL=../sourcemaps/5662.4dcf426169ea8a62fec5.js.map