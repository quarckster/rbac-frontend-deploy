(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1514],{61514:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Pe});var n=r(63038),o=r.n(n),i=r(59713),a=r.n(i),l=r(80150),c=r.n(l),s=r(12167),u=r(334),d=r(43349),f=r(47173),p=r(49739),m=r(83826),b=r(319),v=r.n(b),g=r(62410),y=function(e){return e.reduce((function(e,t){var r=t.uuid,n=t.display_name,o=t.name,i=t.description,a=t.system,s=t.accessCount,d=t.groups_in_count,f=t.modified;return[].concat(v()(e),[{uuid:r,system:a,cells:[c().createElement(l.Fragment,{key:"".concat(r,"-name")},c().createElement(u.Link,{to:"/roles/detail/".concat(r)},n||o)),i,c().createElement(l.Fragment,{key:"".concat(r,"-accessCount")},c().createElement(u.Link,{to:"/roles/detail/".concat(r)},s)),d,c().createElement(l.Fragment,{key:"".concat(r,"-modified")},c().createElement(g.Z,{date:f,type:"relative"}))]}])}),[])},E=r(11107),h=r(28090),O=r(38376),j=r(41800),R=r(13063),P=r(54213),w=r(95311),_=r(60306),D=r(88040),k=r(93327),S=r(68774),L=r(68340),C=r(48140),M=r(86050),F=function(e){return e.reduce((function(e,t){return[].concat(v()(e),[{cells:[t]}])}),[])},V=r(39173),I=r(19571),T=r(61338),Z=r(67154),x=r.n(Z),A=r(45697),N=r.n(A),z=r(87242),q=r(36457),W=r(29215),B=r(86106),J=r(73943),H=r(2372),G=r(80236),K=r(6479),Q=r.n(K),U=r(40483),$=r(43547),X=r(58860);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(36337);var te=function(e){var t=e.ModalProps,r=Q()(e,["ModalProps"]),n=(0,X.Z)().getState().values;return c().createElement(U.Z,x()({},r,{ModalProps:ee(ee({},t),{},{onClose:function(){return t.onClose(n)}}),alert:n["dual-list-select"]?void 0:function(){return c().createElement("div",{className:"ins-m-resource-definitions"},c().createElement($.b,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:"At least one resource must be defined for this permission"}))}}))};te.propTypes={ModalProps:N().object};const re=te;var ne=r(42348),oe=r.n(ne);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function ce(e,t){switch(t.type){case"update":return ae(ae({},e),t.payload);default:throw new Error}}var se=function(e,t,r){return{fields:[{component:z.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:"Resources available for the permission",rightTitle:"Resources defined for the permission",filterOptionsTitle:"Filter by resource...",filterValueTitle:"Filter by resource...",options:v()(t&&e?r:[]),validate:[{type:"validate-resources"}]}]}},ue={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},de=function(e){var t=e.cancelRoute,r=(0,u.useRouteMatch)(_._j.nu),n=(0,u.useRouteMatch)(r).params,i=n.permissionId,a=n.roleId,d=(0,u.useHistory)(),f=d.replace,p=d.push,m=(0,s.useDispatch)(),b=(0,l.useReducer)(ce,le),g=o()(b,2),y=g[0],E=g[1],O=(0,s.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:(null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access)?oe()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===i})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),s.shallowEqual),j=O.definedResources,R=O.role,P=(0,s.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,o=r.isLoading,i=r.loadingResources,a=r.resources;return{resourceTypes:n.data,resources:a[t]?{resourcesPath:a[t]}:a,isLoading:o,isLoadingResources:i>0}}(e,y.resourcesPath)}),s.shallowEqual),w=P.resourceTypes,D=P.isLoading,k=P.isLoadingResources,S=P.resources;(0,l.useEffect)((function(){m((0,W.A)())}),[i]),(0,l.useEffect)((function(){if(!D){var e,t=null===(e=w.find((function(e){var t;return e.value===(null===(t=i.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(E({type:"update",payload:{resourcesPath:t.split("/")[5]}}),m((0,W.R)(t)))}}),[w]);var L=function(){return f(t)},C=function(e){e["dual-list-select"]===j?L():E({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},M=function(e){return Object.entries(e).reduce((function(e,t){var r=o()(t,2),n=r[0],i=r[1];return[].concat(v()(e),v()(i.map((function(e){return{value:e.value,path:n,label:e.value}}))))}),[])}(S);return c().createElement(c().Fragment,null,c().createElement(J.R,{customTitle:"Exit edit resource definitions?",customDescription:"All changes will be lost.",isOpen:y.cancelWarningVisible,onModalCancel:function(){return E({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:L}),(D||k)&&y.loadingStateVisible?c().createElement(G.u,{className:"ins-m-resource-definitions",isOpen:!0,title:"Edit resource definitions",onClose:function(){E({type:"update",payload:{loadingStateVisible:!1}}),L()}},c().createElement(H.$,null)):c().createElement(q.Z,{schema:se(S,y.resourcesPath,M),componentMapper:B.ZP,initialValues:{"dual-list-select":y.changedResources||j||[]},onSubmit:function(e){var r;E({type:"update",payload:{changedResources:e["dual-list-select"]}});var n={permission:i,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=i.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};m((0,h.ul)(a,ae(ae({},R),{},{access:[].concat(v()(R.access.filter((function(e){return e.permission!==i}))),[n])})),!0).then((function(){m((0,h.fp)(a)),p(t)}))},onCancel:function(e){return C(e)},validatorMapper:ue,FormTemplate:function(e){return c().createElement(re,x()({},e,{ModalProps:{onClose:C,isOpen:!y.cancelWarningVisible,variant:"large",title:"Edit resource definitions",description:"Give or remove permissions to specific resources using the arrows below."}}))}}))};de.propTypes={routeMatch:N().string.isRequired,cancelRoute:N().string.isRequired,resources:N().array,resourcesPath:N().string};const fe=de;var pe=r(85564),me=r.n(pe);function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ge=function(){var e=(0,l.useState)({pagination:ve(ve({},T.he),{},{filter:""})}),t=o()(e,2),r=t[0],n=t[1],i=r.pagination,a=r.filter,d=(0,s.useDispatch)(),p=(0,u.useParams)(),m=p.roleId,b=p.permissionId,v=(0,s.useSelector)((function(e){var t,r,n,o,i;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?ve({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===b}))):{},isRecordLoading:e.roleReducer.isRecordLoading,rolesPagination:(null===(r=e.roleReducer)||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.pagination)||T.he,rolesFilters:(null===(o=e.roleReducer)||void 0===o||null===(i=o.roles)||void 0===i?void 0:i.filters)||{}}}),s.shallowEqual),g=v.role,y=v.permission,R=v.isRecordLoading,P=v.rolesPagination,w=v.rolesFilters;(0,l.useEffect)((function(){d((0,h.fp)(m))}),[m]),(0,l.useEffect)((function(){n(ve(ve({},r),{},{pagination:ve(ve({},r.pagination),{},{count:g.access?g.access.length:0})}))}),[g]);var D=y.resourceDefinitions?me()(y.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!a||e.includes(a)})):[],k=function(){return c().createElement(l.Fragment,null,c().createElement(u.Route,{exact:!0,path:_._j.nu},c().createElement(fe,{cancelRoute:_._j.T0.replace(":roleId",m).replace(":permissionId",b)})))};return c().createElement(l.Fragment,null,c().createElement(O.Q,{breadcrumbs:[{title:"Roles",to:(0,E.zk)(k.roles,P,w)},{title:R?void 0:g&&(g.display_name||g.name),to:"/roles/detail/".concat(m)},{title:b,isActive:!0}]},c().createElement(C.a,null,c().createElement(M.Z,null,c().createElement(V.Z,{title:b||c().createElement(I.h2,null),className:"ins-rbac-page-header__title"})))),c().createElement("section",{className:"pf-c-page__main-section ins-c-role__permissions"},c().createElement(S.D,null,c().createElement(L.x,{component:L.q.h1},"Defined resources")),c().createElement(j.M,{columns:[{}],createRows:F,data:D.slice(i.offset,i.offset+i.limit),filterValue:a,fetchData:function(e){var t=e.limit,o=e.offset,i=e.name;return n(ve(ve({},r),{},{filter:i,pagination:ve(ve({},r.pagination),{},{limit:t,offset:o})}))},isCompact:!0,routes:k,setFilterValue:function(e){var t=e.name;return n(ve(ve({},r),{},{filter:t}))},toolbarButtons:function(){return g.system?[]:[c().createElement(l.Fragment,{key:"edit-resource-definitions"},c().createElement(u.Link,{to:"/roles/detail/".concat(m,"/permission/").concat(b,"/edit")},c().createElement(f.zx,{variant:"primary","aria-label":"Edit"},"Edit")))]},isLoading:R,pagination:ve(ve({},i),{},{count:D.length}),titlePlural:"resources",titleSingular:"resource",hideHeader:!0,tableId:"role-resource-definitions"})))};var ye=r(92758);function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Oe=(0,l.lazy)((function(){return Promise.all([r.e(6410),r.e(2705),r.e(3287)]).then(r.bind(r,13287))})),je=[{title:"Name",key:"display_name",transforms:[(0,d.cellWidth)(20),d.sortable]},{title:"Description"},{title:"Permissions",transforms:[d.nowrap]},{title:"Groups",transforms:[d.nowrap]},{title:"Last modified",key:"modified",transforms:[d.nowrap,d.sortable]}],Re=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,filters:r.filters,meta:r.pagination,userIdentity:r.identity,isLoading:n}};const Pe=function(){var e=(0,s.useDispatch)(),t=(0,u.useHistory)().push,r=(0,s.useSelector)(Re,s.shallowEqual),n=r.roles,i=r.isLoading,a=r.filters,d=r.meta,b=r.userIdentity,v=function(t){return e((0,h.Kt)(he(he({},t),{},{inModal:!1})))},g=(0,u.useHistory)(),S=(0,l.useState)(d),L=o()(S,2),C=L[0],M=L[1],F=(0,l.useState)(a.name||""),V=o()(F,2),I=V[0],Z=V[1];(0,l.useEffect)((function(){var e=(0,T.rj)(g,C);M(e);var t=(0,ye.a)(g,["name"],{name:I}).name;Z(t),insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),v(he(he({},e),{},{filters:{name:t}}))}),[]),(0,l.useEffect)((function(){Z(a.name),M(d)}),[a,d]);var x=function(){return c().createElement(l.Suspense,{fallback:c().createElement(l.Fragment,null)},c().createElement(u.Route,{exact:!0,path:_._j.EM},c().createElement(Oe,{pagination:C,filters:{name:I}})),c().createElement(u.Route,{exact:!0,path:_._j.fV},!i&&c().createElement(R.Z,{afterSubmit:function(){return v(he(he({},C),{},{offset:0,filters:{name:I}}))},routeMatch:_._j.fV,cancelRoute:(0,E.zk)(_._j.uJ,C,a),submitRoute:(0,E.zk)(_._j.uJ,he(he({},C),{},{offset:0}),a)})),c().createElement(u.Route,{exact:!0,path:_._j.ld},!i&&c().createElement(D.Z,{afterSubmit:function(){return v(he(he({},C),{},{offset:0,filters:{name:I}}))},routeMatch:_._j.ld,cancelRoute:(0,E.zk)(_._j.uJ,C,a),submitRoute:(0,E.zk)(_._j.uJ,he(he({},C),{},{offset:0}),a)})))},A=function(e){return e.system?[]:[{title:"Edit",onClick:function(e,r,n){return t("/roles/edit/".concat(n.uuid))}},{title:"Delete",onClick:function(e,r,n){return t("/roles/remove/".concat(n.uuid))}}]},N=function(){var e;return(null==b||null===(e=b.user)||void 0===e?void 0:e.is_org_admin)?[c().createElement(u.Link,{to:_._j.EM,key:"add-role",className:"pf-m-visible-on-md"},c().createElement(f.zx,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},"Create role"))]:[]};return c().createElement(u.Switch,null,c().createElement(k.Z,{pageAction:"role-detail-permission",path:_._j.T0},c().createElement(ge,null)),c().createElement(k.Z,{pageAction:"role-detail",path:_._j.Fh},c().createElement(w.Z,{onDelete:function(){return Z("")}})),c().createElement(k.Z,{pageAction:"roles-list",path:_._j.uJ,render:function(){return c().createElement(p.K,null,c().createElement(m.v,null,c().createElement(O.Q,null,c().createElement(O.y,{title:"Roles"}))),c().createElement(m.v,null,c().createElement(P.Z,{type:"content",id:"tab-roles"},c().createElement(j.M,{dedicatedAction:(null==b||null===(e=b.user)||void 0===e?void 0:e.is_org_admin)?c().createElement(u.Link,{to:_._j.EM},c().createElement(f.zx,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role",className:"pf-m-visible-on-md"},"Create role")):void 0,actionResolver:A,sortBy:{index:0,direction:"asc"},columns:je,createRows:y,data:n,filterValue:I,fetchData:function(e){var t=e.name,r=e.count,n=e.limit,o=e.offset,i=e.orderBy;return(0,T.oG)(g,e.limit,e.offset),(0,ye.M)(g,{name:t}),v((0,E.jl)({count:r,limit:n,offset:o,orderBy:i,filters:{name:t}}))},setFilterValue:function(e){var t=e.name;return Z(t)},isLoading:i,pagination:C,routes:x,ouiaId:"roles-table",titlePlural:"roles",titleSingular:"role",toolbarButtons:N,filterPlaceholder:"name",tableId:"roles"}))));var e}}))}}}]);
//# sourceMappingURL=../sourcemaps/1514.15c3d42987cc826a1614.js.map