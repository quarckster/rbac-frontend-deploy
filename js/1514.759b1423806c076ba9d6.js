(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1514],{61514:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Re});var n=r(59713),i=r.n(n),o=r(63038),a=r.n(o),c=r(80150),l=r.n(c),s=r(12167),u=r(334),d=r(43349),p=r(47173),f=r(49739),m=r(83826),b=r(319),g=r.n(b),v=r(62410),y=function(e){return e.reduce((function(e,t){var r=t.uuid,n=t.display_name,i=t.name,o=t.description,a=t.system,s=t.accessCount,d=t.groups_in_count,p=t.modified;return[].concat(g()(e),[{uuid:r,system:a,cells:[l().createElement(c.Fragment,{key:"".concat(r,"-name")},l().createElement(u.Link,{to:"/roles/detail/".concat(r)},n||i)),o,l().createElement(c.Fragment,{key:"".concat(r,"-accessCount")},l().createElement(u.Link,{to:"/roles/detail/".concat(r)},s)),d,l().createElement(c.Fragment,{key:"".concat(r,"-modified")},l().createElement(v.Z,{date:p,type:"relative"}))]}])}),[])},E=r(11107),h=r(28090),O=r(38376),j=r(41800),R=r(13063),P=r(54213),w=r(95311),_=r(60306),D=r(88040),S=r(93327),k=r(68774),L=r(68340),C=r(48140),M=r(86050),F=function(e){return e.reduce((function(e,t){return[].concat(g()(e),[{cells:[t]}])}),[])},V=r(39173),I=r(19571),T=r(61338),Z=r(67154),x=r.n(Z),A=r(45697),N=r.n(A),q=r(87242),W=r(36457),z=r(29215),B=r(86106),H=r(73943),J=r(2372),G=r(80236),K=r(6479),Q=r.n(K),U=r(40483),$=r(43547),X=r(58860);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(36337);var te=function(e){var t=e.ModalProps,r=Q()(e,["ModalProps"]),n=(0,X.Z)().getState().values;return l().createElement(U.Z,x()({},r,{ModalProps:ee(ee({},t),{},{onClose:function(){return t.onClose(n)}}),alert:n["dual-list-select"]?void 0:function(){return l().createElement("div",{className:"ins-m-resource-definitions"},l().createElement($.b,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:"At least one resource must be defined for this permission"}))}}))};te.propTypes={ModalProps:N().object};const re=te;var ne=r(42348),ie=r.n(ne);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function le(e,t){switch(t.type){case"update":return ae(ae({},e),t.payload);default:throw new Error}}var se=function(e,t,r){return{fields:[{component:q.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:"Resources available for the permission",rightTitle:"Resources defined for the permission",filterOptionsTitle:"Filter by resource...",filterValueTitle:"Filter by resource...",options:g()(t&&e?r:[]),validate:[{type:"validate-resources"}]}]}},ue={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},de=function(e){var t=e.cancelRoute,r=(0,u.useRouteMatch)(_._j.nu),n=(0,u.useRouteMatch)(r).params,i=n.permissionId,o=n.roleId,d=(0,u.useHistory)(),p=d.replace,f=d.push,m=(0,s.useDispatch)(),b=(0,c.useReducer)(le,ce),v=a()(b,2),y=v[0],E=v[1],O=(0,s.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:(null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access)?ie()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===i})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),s.shallowEqual),j=O.definedResources,R=O.role,P=(0,s.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,i=r.isLoading,o=r.loadingResources,a=r.resources;return{resourceTypes:n.data,resources:a[t]?{resourcesPath:a[t]}:a,isLoading:i,isLoadingResources:o>0}}(e,y.resourcesPath)}),s.shallowEqual),w=P.resourceTypes,D=P.isLoading,S=P.isLoadingResources,k=P.resources;(0,c.useEffect)((function(){m((0,z.A)())}),[i]),(0,c.useEffect)((function(){if(!D){var e,t=null===(e=w.find((function(e){var t;return e.value===(null===(t=i.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(E({type:"update",payload:{resourcesPath:t.split("/")[5]}}),m((0,z.R)(t)))}}),[w]);var L=function(){return p(t)},C=function(e){e["dual-list-select"]===j?L():E({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},M=function(e){return Object.entries(e).reduce((function(e,t){var r=a()(t,2),n=r[0],i=r[1];return[].concat(g()(e),g()(i.map((function(e){return{value:e.value,path:n,label:e.value}}))))}),[])}(k);return l().createElement(l().Fragment,null,l().createElement(H.R,{customTitle:"Exit edit resource definitions?",customDescription:"All changes will be lost.",isOpen:y.cancelWarningVisible,onModalCancel:function(){return E({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:L}),(D||S)&&y.loadingStateVisible?l().createElement(G.u,{className:"ins-m-resource-definitions",isOpen:!0,title:"Edit resource definitions",onClose:function(){E({type:"update",payload:{loadingStateVisible:!1}}),L()}},l().createElement(J.$,null)):l().createElement(W.Z,{schema:se(k,y.resourcesPath,M),componentMapper:B.ZP,initialValues:{"dual-list-select":y.changedResources||j||[]},onSubmit:function(e){var r;E({type:"update",payload:{changedResources:e["dual-list-select"]}});var n={permission:i,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=i.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};m((0,h.ul)(o,ae(ae({},R),{},{access:[].concat(g()(R.access.filter((function(e){return e.permission!==i}))),[n])})),!0).then((function(){m((0,h.fp)(o)),f(t)}))},onCancel:function(e){return C(e)},validatorMapper:ue,FormTemplate:function(e){return l().createElement(re,x()({},e,{ModalProps:{onClose:C,isOpen:!y.cancelWarningVisible,variant:"large",title:"Edit resource definitions",description:"Give or remove permissions to specific resources using the arrows below."}}))}}))};de.propTypes={routeMatch:N().string.isRequired,cancelRoute:N().string.isRequired,resources:N().array,resourcesPath:N().string};const pe=de;var fe=r(85564),me=r.n(fe);function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ve=function(){var e=(0,c.useState)({pagination:ge(ge({},T.he),{},{filter:""})}),t=a()(e,2),r=t[0],n=t[1],i=r.pagination,o=r.filter,d=(0,s.useDispatch)(),f=(0,u.useParams)(),m=f.roleId,b=f.permissionId,g=(0,s.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?ge({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===b}))):{},isRecordLoading:e.roleReducer.isRecordLoading}}),s.shallowEqual),v=g.role,y=g.permission,E=g.isRecordLoading;(0,c.useEffect)((function(){d((0,h.fp)(m))}),[m]),(0,c.useEffect)((function(){n(ge(ge({},r),{},{pagination:ge(ge({},r.pagination),{},{count:v.access?v.access.length:0})}))}),[v]);var R=y.resourceDefinitions?me()(y.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!o||e.includes(o)})):[];return l().createElement(c.Fragment,null,l().createElement(O.Q,{breadcrumbs:[{title:"Roles",to:"/roles"},{title:E?void 0:v&&(v.display_name||v.name),to:"/roles/detail/".concat(m)},{title:b,isActive:!0}]},l().createElement(C.a,null,l().createElement(M.Z,null,l().createElement(V.Z,{title:b||l().createElement(I.h2,null),className:"ins-rbac-page-header__title"})))),l().createElement("section",{className:"pf-c-page__main-section ins-c-role__permissions"},l().createElement(k.D,null,l().createElement(L.x,{component:L.q.h1},"Defined resources")),l().createElement(j.M,{columns:[{}],createRows:F,data:R.slice(i.offset,i.offset+i.limit),filterValue:o,fetchData:function(e){var t=e.limit,i=e.offset,o=e.name;return n(ge(ge({},r),{},{filter:o,pagination:ge(ge({},r.pagination),{},{limit:t,offset:i})}))},isCompact:!0,routes:function(){return l().createElement(c.Fragment,null,l().createElement(u.Route,{exact:!0,path:_._j.nu},l().createElement(pe,{cancelRoute:_._j.T0.replace(":roleId",m).replace(":permissionId",b)})))},setFilterValue:function(e){var t=e.name;return n(ge(ge({},r),{},{filter:t}))},toolbarButtons:function(){return v.system?[]:[l().createElement(c.Fragment,{key:"edit-resource-definitions"},l().createElement(u.Link,{to:"/roles/detail/".concat(m,"/permission/").concat(b,"/edit")},l().createElement(p.zx,{variant:"primary","aria-label":"Edit"},"Edit")))]},isLoading:E,pagination:ge(ge({},i),{},{count:R.length}),titlePlural:"resources",titleSingular:"resource",hideHeader:!0,tableId:"role-resource-definitions"})))};function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=(0,c.lazy)((function(){return Promise.all([r.e(6410),r.e(2705),r.e(344)]).then(r.bind(r,70344))})),Oe=[{title:"Name",key:"display_name",transforms:[(0,d.cellWidth)(20),d.sortable]},{title:"Description"},{title:"Permissions",transforms:[d.nowrap]},{title:"Groups",transforms:[d.nowrap]},{title:"Last modified",key:"modified",transforms:[d.nowrap,d.sortable]}],je=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,pagination:r.meta,userIdentity:r.identity,isLoading:n}};const Re=function(){var e=(0,c.useState)(""),t=a()(e,2),r=t[0],n=t[1],i=(0,s.useDispatch)(),o=(0,u.useHistory)().push,d=(0,s.useSelector)(je,s.shallowEqual),b=d.roles,g=d.isLoading,v=d.pagination,k=d.userIdentity,L=function(e){return i((0,h.Kt)(e))};(0,c.useEffect)((function(){insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),L(Ee(Ee({},v),{},{name:r}))}),[]);var C=function(){return l().createElement(c.Suspense,{fallback:l().createElement(c.Fragment,null)},l().createElement(u.Route,{exact:!0,path:_._j.EM},l().createElement(he,{pagination:v})),l().createElement(u.Route,{exact:!0,path:_._j.fV},!g&&l().createElement(R.Z,{routeMatch:_._j.fV,cancelRoute:_._j.uJ,afterSubmit:function(){return L(Ee(Ee({},v),{},{name:r}))}})),l().createElement(u.Route,{exact:!0,path:_._j.ld},!g&&l().createElement(D.Z,{afterSubmit:function(){return L(Ee(Ee({},v),{},{name:r}))},routeMatch:_._j.ld,cancelRoute:_._j.uJ})))},M=function(e){return e.system?[]:[{title:"Edit",onClick:function(e,t,r){return o("/roles/edit/".concat(r.uuid))}},{title:"Delete",onClick:function(e,t,r){return o("/roles/remove/".concat(r.uuid))}}]},F=function(){var e;return(null==k||null===(e=k.user)||void 0===e?void 0:e.is_org_admin)?[l().createElement(u.Link,{to:_._j.EM,key:"add-role",className:"pf-m-visible-on-md"},l().createElement(p.zx,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},"Create role"))]:[]};return l().createElement(u.Switch,null,l().createElement(S.Z,{pageAction:"role-detail-permission",path:_._j.T0},l().createElement(ve,null)),l().createElement(S.Z,{pageAction:"role-detail",path:_._j.Fh},l().createElement(w.Z,{onDelete:function(){return n("")}})),l().createElement(S.Z,{pageAction:"roles-list",path:_._j.uJ,render:function(){return l().createElement(f.K,null,l().createElement(m.v,null,l().createElement(O.Q,null,l().createElement(O.y,{title:"Roles"}))),l().createElement(m.v,null,l().createElement(P.Z,{type:"content",id:"tab-roles"},l().createElement(j.M,{dedicatedAction:(null==k||null===(e=k.user)||void 0===e?void 0:e.is_org_admin)?l().createElement(u.Link,{to:_._j.EM},l().createElement(p.zx,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role",className:"pf-m-visible-on-md"},"Create role")):void 0,actionResolver:M,sortBy:{index:0,direction:"asc"},columns:Oe,createRows:y,data:b,filterValue:r,fetchData:function(e){return L((0,E.jl)(e))},setFilterValue:function(e){var t=e.name;return n(t)},isLoading:g,pagination:v,routes:C,ouiaId:"roles-table",titlePlural:"roles",titleSingular:"role",toolbarButtons:F,filterPlaceholder:"name",tableId:"roles"}))));var e}}))}}}]);
//# sourceMappingURL=../sourcemaps/1514.86af1bf78d085d74960f.js.map