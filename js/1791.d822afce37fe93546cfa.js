(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1791],{11791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var r=n(80150),a=n.n(r),i=n(334),s=n(49739),c=n(83826),o=n(38376),l=n(54213),u=n(98033),p=n(82916),d=n(319),m=n.n(d),f=n(59713),b=n.n(f),h=n(63038),g=n.n(h),E=n(45697),v=n.n(E),y=n(12167),_=n(23279),O=n.n(_),j=n(47173),k=n(69174),w=n(41800),x=n(62410),T=n(56455),P=n(28090),R=n(90944),S=n(19571),U=n(61338),Z=n(43349),A=n(67643),I=n(16796),C=n(11107);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(50664);var N,B=["Roles",{title:"Groups",cellTransforms:[Z.compoundExpand]},{title:"Permissions",cellTransforms:[Z.compoundExpand]},{title:"Last commit"}],D=function(e){var t=e.match.params.username,n=e.fetchRoles,u=e.fetchRoleForUser,p=e.fetchUsers,d=e.roles,f=e.isLoading,h=e.rolesWithAccess,E=e.user,v=(0,r.useState)(""),_=g()(v,2),P=_[0],R=_[1],F=(0,r.useState)({}),D=g()(F,2),V=D[0],W=D[1],H=(0,y.useSelector)((function(e){return e.roleReducer.error!==C.VG}));(0,r.useEffect)((function(){return p(L(L({},U.he),{},{limit:0,filters:{username:t}})),insights.chrome.appObjectId(t),function(){return insights.chrome.appObjectId(void 0)}}),[]);var z=(0,i.useHistory)();(0,r.useEffect)((function(){n({limit:20,offset:0,addFields:["groups_in"],username:t}),N=O()((function(e,t,r,a,i){return n({limit:e,offset:t,name:r,addFields:a,username:i})}),500)}),[]);var G=function(){return[{title:"Users",to:"/users"},{title:H?t:"Invalid user",isActive:!0}]};return a().createElement(r.Fragment,null,H?a().createElement(s.K,null,a().createElement(c.v,null,a().createElement(o.Q,{paddingBottm:!1,breadcrumbs:G()},a().createElement(o.y,{title:t,renderTitleTag:function(){return E&&!f?a().createElement(k._,{color:(null==E?void 0:E.is_active)&&"green"},(null==E?void 0:E.is_active)?"Active":"Inactive"):a().createElement(T.Z,{size:"xs",className:"ins-c-rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a().createElement(c.v,null,a().createElement(l.Z,{type:"content",id:"user-detail"},a().createElement(w.M,{columns:B,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,r,a){r?W(L(L({},V),{},b()({},a.uuid,-1))):(W(L(L({},V),{},b()({},a.uuid,n))),2===n&&u(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,n){var r=t.uuid,s=t.name,c=t.groups_in,o=void 0===c?[]:c,l=t.modified,u=t.accessCount;return[].concat(m()(e),[{uuid:r,cells:[{title:s,props:{component:"th",isOpen:!1}},{title:"".concat(o.length),props:{isOpen:1===V[r]}},{title:u,props:{isOpen:2===V[r]}},{title:a().createElement(x.Z,{type:"exact",date:l})}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a().createElement(Z.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:Z.TableVariant.compact,cells:["Name","Description"],rows:o.map((function(e){return{cells:[{title:a().createElement(i.Link,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a().createElement(Z.TableHeader,null),a().createElement(Z.TableBody,null))}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:h&&h[r]?a().createElement(Z.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:Z.TableVariant.compact,cells:["Application","Resource type","Operation"],rows:h[r].access.map((function(e){return{cells:e.permission.split(":")}}))},a().createElement(Z.TableHeader,null),a().createElement(Z.TableBody,null)):a().createElement(S.Wi,null)}]}])}),[]):[]},data:d.data,filterValue:P,ouiaId:"user-details-table",fetchData:function(e){var n=e.limit,r=e.offset,a=e.name;N(n,r,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return R(t)},isLoading:f,pagination:d.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"user"})))):a().createElement(r.Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb pf-u-pb-md"},a().createElement(I.Z,G())),a().createElement(A.Z,{title:"User not found",description:["User with username ".concat(t," does not exist.")],actions:[a().createElement(j.zx,{key:"back-button",className:"pf-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:function(){return z.goBack()}},"Back to previous page")]})))};D.propTypes={match:v().object,fetchRoles:v().func,fetchRoleForUser:v().func,fetchUsers:v().func,roles:v().object,isLoading:v().bool,rolesWithAccess:v().object,user:v().object};const V=(0,i.withRouter)((0,y.connect)((function(e,t){var n=e.roleReducer,r=n.roles,a=n.isLoading,i=n.rolesWithAccess,s=e.userReducer.users.data,c=t.match.params.username;return{roles:r,isLoading:a,rolesWithAccess:i,user:s&&s.filter((function(e){return e.username===c}))[0]}}),(function(e){return{fetchRoles:function(t){return e((0,P.vd)(t))},fetchRoleForUser:function(t){return e((0,P.sv)(t))},fetchUsers:function(t){return e((0,R.u)(t))}}}))(D));var W=n(60306),H=n(93327),z=function(){var e=a().createElement(p.Z,{description:"These are all of the users in your Red Hat organization. To add new users or manage existing users, go to your"});return(0,r.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]),a().createElement(i.Switch,null,a().createElement(H.Z,{pageAction:"user-detail",exact:!0,path:W._j.tG,render:function(e){return a().createElement(V,e)}}),a().createElement(H.Z,{pageAction:"users-list",path:[W._j.rC,W._j.Sy],render:function(){return a().createElement(s.K,null,a().createElement(c.v,null,a().createElement(o.Q,{paddingBottm:!1},a().createElement(o.y,{title:"Users",description:e}))),a().createElement(c.v,null,a().createElement(l.Z,{type:"content",id:"users"},a().createElement(u.Z,{userLinks:!0,props:{isSelectable:!1,isCompact:!1}}))))}}))};z.propTypes={},z.defaultProps={};const G=z},32085:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,'.rbac .ins-c-rbac__user-label-skeleton,.my-user-access .ins-c-rbac__user-label-skeleton{width:50px}@media only screen and (min-width: 769px){.rbac input#filter-by-username.ins-c-conditional-filter[type="text"],.my-user-access input#filter-by-username.ins-c-conditional-filter[type="text"]{width:230px}}\n',""]),e.exports=t},50664:(e,t,n)=>{var r=n(93379),a=n(32085);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);var i=r(a,{insert:"head",singleton:!1});if(!a.locals||e.hot.invalidate){var s=a.locals;e.hot.accept(32085,(function(){"string"==typeof(a=(a=n(32085)).__esModule?a.default:a)&&(a=[[e.id,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(s,a.locals)?(s=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}}}]);
//# sourceMappingURL=../sourcemaps/1791.40ffd1c6076c729461ca.js.map