"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[791],{11791:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(92950),a=r.n(n),c=r(334),s=r(97066),i=r(38376),l=r(80229),o=r(98033),u=r(82916),p=r(93433),m=r(4942),d=r(29439),f=r(45697),b=r.n(f),g=r(45237),E=r(23279),h=r.n(E),v=r(41800),y=r(54213),O=r(64107),k=r(56455),S=r(28090),T=r(90944),Z=r(19571),j=r(61338),w=r(6877),P=r(67643),R=r(16796),_=r(11107);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,m.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x,A=["Roles",{title:"Groups",cellTransforms:[w.compoundExpand]},{title:"Permissions",cellTransforms:[w.compoundExpand]},{title:"Last modified"}],L=function(e){var t=e.match.params.username,r=e.fetchRoles,l=e.fetchRoleForUser,o=e.fetchUsers,u=e.roles,f=e.isLoading,b=e.rolesWithAccess,E=e.user,S=(0,n.useState)(""),T=(0,d.Z)(S,2),I=T[0],L=T[1],N=(0,n.useState)({}),B=(0,d.Z)(N,2),F=B[0],C=B[1],D=(0,g.useSelector)((function(e){return e.roleReducer.error!==_.VG}));(0,n.useEffect)((function(){return o(U(U({},j.he),{},{limit:0,filters:{username:t},inModal:!0})),insights.chrome.appObjectId(t),function(){return insights.chrome.appObjectId(void 0)}}),[]);var V=(0,c.useHistory)();(0,n.useEffect)((function(){r({limit:20,offset:0,addFields:["groups_in"],username:t}),x=h()((function(e,t,n,a,c){return r({limit:e,offset:t,displayName:n,addFields:a,username:c})}),500)}),[]);var W=function(){return[{title:"Users",to:"/users"},{title:D?t:"Invalid user",isActive:!0}]};return a().createElement(n.Fragment,null,D?a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(i.Q,{paddingBottm:!1,breadcrumbs:W()},a().createElement(i.y,{title:t,renderTitleTag:function(){return E&&!f?a().createElement(s.Label,{color:(null==E?void 0:E.is_active)&&"green"},null!=E&&E.is_active?"Active":"Inactive"):a().createElement(k.Z,{size:"xs",className:"rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a().createElement(s.StackItem,null,a().createElement(y.Z,{type:"content",id:"user-detail"},a().createElement(v.M,{columns:A,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,n,a){n?C(U(U({},F),{},(0,m.Z)({},a.uuid,-1))):(C(U(U({},F),{},(0,m.Z)({},a.uuid,r))),2===r&&l(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,r){var n=t.uuid,s=t.display_name,i=t.groups_in,l=void 0===i?[]:i,o=t.modified,u=t.accessCount;return[].concat((0,p.Z)(e),[{uuid:n,cells:[{title:s,props:{component:"th",isOpen:!1}},{title:"".concat(l.length),props:{isOpen:1===F[n]}},{title:u,props:{isOpen:2===F[n]}},{title:a().createElement(O.Z,{type:(0,_.mh)(o),date:o})}]},{uuid:"".concat(n,"-groups"),parent:3*r,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a().createElement(w.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:w.TableVariant.compact,cells:["Name","Description"],rows:l.map((function(e){return{cells:[{title:a().createElement(c.Link,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a().createElement(w.TableHeader,null),a().createElement(w.TableBody,null))}]},{uuid:"".concat(n,"-groups"),parent:3*r,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:b&&b[n]?a().createElement(w.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:w.TableVariant.compact,cells:["Application","Resource type","Operation"],rows:b[n].access.map((function(e){return{cells:e.permission.split(":")}}))},a().createElement(w.TableHeader,null),a().createElement(w.TableBody,null)):a().createElement(Z.Wi,null)}]}])}),[]):[]},data:u.data,filterValue:I,ouiaId:"user-details-table",fetchData:function(e){var r=e.limit,n=e.offset,a=e.name;x(r,n,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return L(t)},isLoading:f,pagination:u.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"user"})))):a().createElement(n.Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb pf-u-pb-md"},a().createElement(R.Z,W())),a().createElement(P.Z,{title:"User not found",description:["User with username ".concat(t," does not exist.")],actions:[a().createElement(s.Button,{key:"back-button",className:"pf-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:function(){return V.goBack()}},"Back to previous page")]})))};L.propTypes={match:b().object,fetchRoles:b().func,fetchRoleForUser:b().func,fetchUsers:b().func,roles:b().object,isLoading:b().bool,rolesWithAccess:b().object,user:b().object};const N=(0,c.withRouter)((0,g.connect)((function(e,t){var r=e.roleReducer,n=r.roles,a=r.isLoading,c=r.rolesWithAccess,s=e.userReducer.users.data,i=t.match.params.username;return{roles:n,isLoading:a,rolesWithAccess:c,user:s&&s.filter((function(e){return e.username===i}))[0]}}),(function(e){return{fetchRoles:function(t){return e((0,S.vd)(t))},fetchRoleForUser:function(t){return e((0,S.sv)(t))},fetchUsers:function(t){return e((0,T.u)(t))}}}))(L));var B=r(4682),F=r(93327),C=function(){var e=a().createElement(u.Z,{description:"These are all of the users in your Red Hat organization. To add new users or manage existing users, go to your"});return(0,n.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]),a().createElement(c.Switch,null,a().createElement(F.Z,{pageAction:"user-detail",exact:!0,path:B.Z["user-detail"],render:function(e){return a().createElement(N,e)}}),a().createElement(F.Z,{pageAction:"users-list",path:[B.Z.users,B.Z.rbac],render:function(){return a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(i.Q,{paddingBottm:!1},a().createElement(i.y,{title:"Users",description:e}))),a().createElement(s.StackItem,null,a().createElement(l.Section,{type:"content",id:"users"},a().createElement(o.Z,{userLinks:!0,props:{isSelectable:!1,isCompact:!1}}))))}}))};C.propTypes={},C.defaultProps={};const D=C}}]);
//# sourceMappingURL=../sourcemaps/791.0724e5638d0eea7d2077f8d40d0a9a07.js.map