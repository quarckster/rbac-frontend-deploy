(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[4250],{21167:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(59713),i=n.n(r),o=n(63038),s=n.n(o),a=n(47173),c=n(80236),l=n(80150),u=n.n(l),p=n(45697),f=n.n(p),d=n(41800),m=n(61338);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.isOpen,n=e.handleClose,r=e.permission,i=e.resourceDefinitions,o=(0,l.useState)((function(){return{filterValue:"",rows:i.map((function(e){return e.attributeFilter.value})).slice(0,m.he.limit),pagination:O(O({},m.he),{},{count:i.length})}})),p=s()(o,2),f=p[0],b=f.rows,y=f.pagination,g=f.filterValue,h=p[1],v=function(e){var t=e.name,n=void 0===t?"":t,r=e.limit,o=e.offset,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return h((function(e){var t=e.pagination,a=e.filterValue,c=i.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(n)})).slice(o,r);return{rows:c,filterValue:s?n:a,pagination:O(O({},t),{},{offset:s?0:o,limit:r,count:c.length})}}))};return u().createElement(c.u,{actions:[u().createElement(a.zx,{key:"close-action",variant:"primary",onClick:n},"Close")],variant:"large",isOpen:t,onClose:n,title:"Resource definitions",description:u().createElement("p",null,"View resource definitions for the ",u().createElement("strong",null,r)," permission")},u().createElement(d.M,{columns:[""],data:b,filterValue:g,setFilterValue:function(e){return v(e,!0)},pagination:y,ouiaId:"resource-definition-table",noData:0===i.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(r," permission")],fetchData:v,tableId:"resource-definitions-modal"}))};y.propTypes={isOpen:f().bool,handleClose:f().func.isRequired,permission:f().string.isRequired,resourceDefinitions:f().arrayOf(f().shape({attributeFilter:f().shape({value:f().string.isRequired}).isRequired})).isRequired};const g=y},54250:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var r=n(80150),i=n.n(r),o=n(45697),s=n.n(o),a=n(63038),c=n.n(a),l=n(319),u=n.n(l),p=n(63053),f=n(59713),d=n.n(f),m=n(6479),b=n.n(m),O=n(12167),y=n(36580),g=n(87757),h=n.n(g),v=n(48926),R=n.n(v),D=(0,n(89400).TR)();function j(e){return E.apply(this,arguments)}function E(){return(E=R()(h().mark((function e(t){var n,r,i,o,s;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.username,o=t.application,s=void 0===o?"":o,e.next=3,D.getPrincipalAccess(s,i,n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=n(61338),w=n(41800),F=function(e){var t=e.onClick,n=e.access;return 0===n.resourceDefinitions.length?i().createElement("span",null,"N/A"):i().createElement("a",{onClick:function(){return t(),!1}},n.resourceDefinitions.length)};F.propTypes={onClick:s().func.isRequired,access:s().shape({resourceDefinitions:s().array.isRequired}).isRequired};const k=F;var S=n(21167);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var q=function(e){var t=e.filters,n=e.setFilters,o=e.apps,s=e.hasActiveFilters,a=e.showResourceDefinitions,l=(0,r.useState)({rdOpen:!1}),p=c()(l,2),f=p[0],m=f.rdOpen,g=f.rdPermission,h=f.resourceDefinitions,v=p[1],R=(0,r.useRef)([{title:"Application"},{title:"Resource type"},{title:"Operation"}].concat(u()(a?[{title:"Resource definitions"}]:[]))).current,D=(0,O.useDispatch)(),E=(0,O.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),O.shallowEqual),F=E.permissions,q=E.isLoading,A=function(e){var t=e.application,n=b()(e,["application"]),r=(null==t?void 0:t.length)>0?t:o;D(function(e){return{type:y.ft,payload:j(e)}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:r.join(",")},n)))},T=function(e){return v({rdOpen:!0,rdPermission:F.data[e].permission,resourceDefinitions:F.data[e].resourceDefinitions})};(0,r.useEffect)((function(){A(P.he)}),[]);var V=(null==F?void 0:F.data)||[];return i().createElement(r.Fragment,null,i().createElement(w.M,{columns:R,createRows:function(e){return function(e,t,n){return e.reduce((function(e,o,s){var a=o.permission,l=b()(o,["permission"]),p=a.split(":"),f=c()(p,3),d=f[0],m=f[1],O=f[2];return[].concat(u()(e),[{cells:[d,m,O].concat(u()(t?[i().createElement(r.Fragment,{key:"rd"},i().createElement(k,{onClick:function(){return n(s)},access:l}))]:[]))}])}),[])}(e,a,T)},data:V,fetchData:A,filters:t,setFilterValue:n,isLoading:q,pagination:null==F?void 0:F.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!q&&!s&&0===V.length,noDataDescription:["You do not have individual permissions for Insights.","Contact your Org. Administrator for more information."],tableId:"mua-access"}),i().createElement(r.Suspense,{fallback:i().createElement(r.Fragment,null)},m&&i().createElement(S.default,{resourceDefinitions:h,isOpen:m,handleClose:function(){return v({rdOpen:!1})},permission:g})))};q.propTypes={filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,hasActiveFilters:s().bool,showResourceDefinitions:s().bool};const A=q;var T=n(334),V=n(23279),x=n.n(V),L=n(28090),I=n(19571),_=n(43349);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=(0,r.lazy)((function(){return Promise.resolve().then(n.bind(n,21167))})),z=[{title:"Roles",key:"display_name",transforms:[_.sortable]},"Description",{title:"Permissions",cellTransforms:[_.compoundExpand,(0,_.cellWidth)(20)]}],N=function(e){var t=e.fetchRoles,n=e.fetchRoleForPrincipal,o=e.roles,s=e.isLoading,a=e.rolesWithAccess,l=e.filters,p=e.setFilters,f=e.apps,m=e.showResourceDefinitions,b=(0,r.useState)({}),O=c()(b,2),y=O[0],g=O[1],h=(0,r.useState)({rdOpen:!1}),v=c()(h,2),R=v[0],D=R.rdOpen,j=R.rdPermission,E=R.resourceDefinitions,P=v[1];(0,r.useEffect)((function(){t({limit:20,offset:0,orderBy:"display_name",scope:"principal",application:f.join(",")})}),[]);var F=(0,r.useCallback)(x()((function(e,n,r,i,o,s){var a=(null==i?void 0:i.length)>0?i:f;return t({limit:e,offset:n,scope:"principal",orderBy:s,name:r,application:a.join(","),permission:o})}),800),[]);return i().createElement(r.Fragment,null,i().createElement(w.M,{filters:l,columns:z,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,i,o){i?g((function(e){return B(B({},e),{},d()({},o.uuid,-1))})):(g((function(e){return B(B({},e),{},d()({},o.uuid,r))})),2===r&&n(o.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,n){var o=t.uuid,s=t.display_name,c=t.name,l=t.description,p=t.accessCount;return[].concat(u()(e),[{uuid:o,cells:[{title:s||c,props:{component:"th",isOpen:!1}},{title:l,props:{isOpen:!1}},{title:p,props:{isOpen:2===y[o]}}]},{uuid:"".concat(o,"-groups"),parent:2*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:(null==a?void 0:a[o])?i().createElement(_.Table,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:_.TableVariant.compact,cells:["Application","Resource type","Operation"].concat(u()(m?["Resource definitions"]:[])),rows:a[o].access.map((function(e){return{cells:[].concat(u()(e.permission.split(":")),u()(m?[i().createElement(r.Fragment,{key:"rd"},i().createElement(k,{onClick:function(){return P({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},i().createElement(_.TableHeader,null),i().createElement(_.TableBody,null)):i().createElement(I.Wi,null)}]}])}),[])},ouiaId:"roles-table",data:o.data,fetchData:function(e){var t=e.limit,n=e.offset,r=e.name,i=e.application,o=e.permission,s=e.orderBy;F(t,n,r,i,o,void 0===s?"display_name":s)},sortBy:{index:0,direction:"asc"},setFilterValue:p,isLoading:s,pagination:o.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"mua-roles"}),i().createElement(r.Suspense,{fallback:i().createElement(r.Fragment,null)},D&&i().createElement(M,{resourceDefinitions:E,isOpen:D,handleClose:function(){return P({rdOpen:!1})},permission:j})))};N.propTypes={fetchRoles:s().func,fetchRoleForPrincipal:s().func,fetchUsers:s().func,roles:s().object,isLoading:s().bool,rolesWithAccess:s().object,filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,showResourceDefinitions:s().bool};const H=(0,T.withRouter)((0,O.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e((0,L.vd)(t))},fetchRoleForPrincipal:function(t){return e((0,L.DV)(t))}}}))(N));var U=function(e){var t=e.apps,n=(0,r.useContext)(p.Z),o=(0,r.useState)(""),s=c()(o,2),a=s[0],l=s[1],f=(0,r.useState)(""),d=c()(f,2),m=d[0],b=d[1],O=(0,r.useState)([]),y=c()(O,2),g=y[0],h=y[1],v=function(e){var t=e.name,n=e.application,r=e.permission;"string"==typeof t&&l(t),"string"==typeof r&&b(r),n&&h("string"==typeof n?[]:n)},R=function(e){var t=e.isOrgAdmin,n=e.name,r=void 0===n?"":n,i=e.application;return[{key:"application",value:void 0===i?[]:i,placeholder:"Filter by application",type:"checkbox",items:e.apps.map((function(e){return{label:e,value:e}}))}].concat(u()(t?[{key:"name",type:"text",value:r,label:"Role name",placeholder:"Filter by role name"}]:[]))}({apps:t,isOrgAdmin:n,name:a,application:g,permission:m});return n?i().createElement(H,{setFilters:v,filters:R,apps:t}):i().createElement(A,{setFilters:v,filters:R,apps:t,hasActiveFilters:a.length>0||g.length>0})};U.propTypes={apps:s().arrayOf(s().string).isRequired};const Y=U;var Z=function(e){var t=e.apps;return i().createElement(Y,{apps:t})};Z.propTypes={apps:s().arrayOf(s().string).isRequired};const G=Z}}]);
//# sourceMappingURL=../sourcemaps/4250.a166376ed2c4e8d24ad6.js.map