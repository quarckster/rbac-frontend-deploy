(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[514],{61514:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ue});var n=r(28481),o=r(96156),i=r(92950),a=r.n(i),l=r(45237),c=r(334),s=r(24985),u=r(30586),d=r(85061),f=r(64107),p=function(e){return e.reduce((function(e,t){var r=t.uuid,n=t.display_name,o=t.name,l=t.description,s=t.system,u=t.accessCount,p=t.groups_in_count,m=t.modified;return[].concat((0,d.Z)(e),[{uuid:r,system:s,cells:[a().createElement(i.Fragment,{key:"".concat(r,"-name")},a().createElement(c.Link,{to:"/roles/detail/".concat(r)},n||o)),l,a().createElement(i.Fragment,{key:"".concat(r,"-accessCount")},a().createElement(c.Link,{to:"/roles/detail/".concat(r)},u)),p,a().createElement(i.Fragment,{key:"".concat(r,"-modified")},a().createElement(f.Z,{date:m,type:"relative"}))]}])}),[])},m=r(11107),b=r(28090),g=r(38376),v=r(41800),y=r(13063),E=r(54213),h=r(95311),O=r(60306),j=r(88040),R=r(93327),P=function(e){return e.reduce((function(e,t){return[].concat((0,d.Z)(e),[{cells:[t]}])}),[])},w=r(39173),_=r(19571),k=r(61338),S=r(22122),D=r(45697),Z=r.n(D),L=r(96354),C=r(36457),M=r(29215),F=r(76349),I=r(73943),T=r(81253),V=r(40483),A=r(48880);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){var t=e.ModalProps,r=(0,T.Z)(e,["ModalProps"]),n=(0,A.default)().getState().values;return a().createElement(V.Z,(0,S.Z)({},r,{ModalProps:x(x({},t),{},{onClose:function(){return t.onClose(n)}}),alert:n["dual-list-select"]?void 0:function(){return a().createElement("div",{className:"ins-m-resource-definitions"},a().createElement(u.Alert,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:"At least one resource must be defined for this permission"}))}}))};B.propTypes={ModalProps:Z().object};const q=B;var z=r(42348),W=r.n(z);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function Q(e,t){switch(t.type){case"update":return H(H({},e),t.payload);default:throw new Error}}var K=function(e,t,r){return{fields:[{component:L.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:"Resources available for the permission",rightTitle:"Resources defined for the permission",filterOptionsTitle:"Filter by resource...",filterValueTitle:"Filter by resource...",options:(0,d.Z)(t&&e?r:[]),validate:[{type:"validate-resources"}]}]}},U={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},X=function(e){var t=e.cancelRoute,r=(0,c.useRouteMatch)(O._j.nu),o=(0,c.useRouteMatch)(r).params,s=o.permissionId,f=o.roleId,p=(0,c.useHistory)(),m=p.replace,g=p.push,v=(0,l.useDispatch)(),y=(0,i.useReducer)(Q,G),E=(0,n.Z)(y,2),h=E[0],j=E[1],R=(0,l.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:null!==(t=e.roleReducer.selectedRole)&&void 0!==t&&t.access?W()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===s})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),l.shallowEqual),P=R.definedResources,w=R.role,_=(0,l.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,o=r.isLoading,i=r.loadingResources,a=r.resources;return{resourceTypes:n.data,resources:a[t]?{resourcesPath:a[t]}:a,isLoading:o,isLoadingResources:i>0}}(e,h.resourcesPath)}),l.shallowEqual),k=_.resourceTypes,D=_.isLoading,Z=_.isLoadingResources,L=_.resources;(0,i.useEffect)((function(){v((0,M.A)())}),[s]),(0,i.useEffect)((function(){if(!D){var e,t=null===(e=k.find((function(e){var t;return e.value===(null===(t=s.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(j({type:"update",payload:{resourcesPath:t.split("/")[5]}}),v((0,M.R)(t)))}}),[k]);var T=function(){return m(t)},V=function(e){e["dual-list-select"]===P?T():j({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},A=function(e){return Object.entries(e).reduce((function(e,t){var r=(0,n.Z)(t,2),o=r[0],i=r[1];return[].concat((0,d.Z)(e),(0,d.Z)(i.map((function(e){return{value:e.value,path:o,label:e.value}}))))}),[])}(L);return a().createElement(a().Fragment,null,a().createElement(I.R,{customTitle:"Exit edit resource definitions?",customDescription:"All changes will be lost.",isOpen:h.cancelWarningVisible,onModalCancel:function(){return j({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:T}),(D||Z)&&h.loadingStateVisible?a().createElement(u.Modal,{className:"ins-m-resource-definitions",isOpen:!0,title:"Edit resource definitions",onClose:function(){j({type:"update",payload:{loadingStateVisible:!1}}),T()}},a().createElement(u.Spinner,null)):a().createElement(C.Z,{schema:K(L,h.resourcesPath,A),componentMapper:F.ZP,initialValues:{"dual-list-select":h.changedResources||P||[]},onSubmit:function(e){var r;j({type:"update",payload:{changedResources:e["dual-list-select"]}});var n={permission:s,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=s.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};v((0,b.ul)(f,H(H({},w),{},{access:[].concat((0,d.Z)(w.access.filter((function(e){return e.permission!==s}))),[n])})),!0).then((function(){v((0,b.fp)(f)),g(t)}))},onCancel:function(e){return V(e)},validatorMapper:U,FormTemplate:function(e){return a().createElement(q,(0,S.Z)({},e,{ModalProps:{onClose:V,isOpen:!h.cancelWarningVisible,variant:"large",title:"Edit resource definitions",description:"Give or remove permissions to specific resources using the arrows below."}}))}}))};X.propTypes={routeMatch:Z().string.isRequired,cancelRoute:Z().string.isRequired,resources:Z().array,resourcesPath:Z().string};const Y=X;var $=r(85564),ee=r.n($);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ne=function(){var e=(0,i.useState)({pagination:re(re({},k.he),{},{filter:""})}),t=(0,n.Z)(e,2),r=t[0],o=t[1],s=r.pagination,d=r.filter,f=(0,l.useDispatch)(),p=(0,c.useParams)(),y=p.roleId,E=p.permissionId,h=(0,l.useSelector)((function(e){var t,r,n,o,i;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?re({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===E}))):{},isRecordLoading:e.roleReducer.isRecordLoading,rolesPagination:(null===(r=e.roleReducer)||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.pagination)||k.he,rolesFilters:(null===(o=e.roleReducer)||void 0===o||null===(i=o.roles)||void 0===i?void 0:i.filters)||{}}}),l.shallowEqual),j=h.role,R=h.permission,S=h.isRecordLoading,D=h.rolesPagination,Z=h.rolesFilters;(0,i.useEffect)((function(){f((0,b.fp)(y))}),[y]),(0,i.useEffect)((function(){o(re(re({},r),{},{pagination:re(re({},r.pagination),{},{count:j.access?j.access.length:0})}))}),[j]);var L=R.resourceDefinitions?ee()(R.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!d||e.includes(d)})):[],C=function(){return a().createElement(i.Fragment,null,a().createElement(c.Route,{exact:!0,path:O._j.nu},a().createElement(Y,{cancelRoute:O._j.T0.replace(":roleId",y).replace(":permissionId",E)})))};return a().createElement(i.Fragment,null,a().createElement(g.Q,{breadcrumbs:[{title:"Roles",to:(0,m.zk)(C.roles,D,Z)},{title:S?void 0:j&&(j.display_name||j.name),to:"/roles/detail/".concat(y)},{title:E,isActive:!0}]},a().createElement(u.Level,null,a().createElement(u.LevelItem,null,a().createElement(w.Z,{title:E||a().createElement(_.h2,null),className:"ins-rbac-page-header__title"})))),a().createElement("section",{className:"pf-c-page__main-section ins-c-role__permissions"},a().createElement(u.TextContent,null,a().createElement(u.Text,{component:u.TextVariants.h1},"Defined resources")),a().createElement(v.M,{columns:[{}],createRows:P,data:L.slice(s.offset,s.offset+s.limit),filterValue:d,fetchData:function(e){var t=e.limit,n=e.offset,i=e.name;return o(re(re({},r),{},{filter:i,pagination:re(re({},r.pagination),{},{limit:t,offset:n})}))},isCompact:!0,routes:C,setFilterValue:function(e){var t=e.name;return o(re(re({},r),{},{filter:t}))},toolbarButtons:function(){return j.system?[]:[a().createElement(i.Fragment,{key:"edit-resource-definitions"},a().createElement(c.Link,{to:"/roles/detail/".concat(y,"/permission/").concat(E,"/edit")},a().createElement(u.Button,{variant:"primary","aria-label":"Edit"},"Edit")))]},isLoading:S,pagination:re(re({},s),{},{count:L.length}),titlePlural:"resources",titleSingular:"resource",hideHeader:!0,tableId:"role-resource-definitions"})))};var oe=r(92758);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=(0,i.lazy)((function(){return Promise.all([r.e(705),r.e(287)]).then(r.bind(r,13287))})),ce=[{title:"Name",key:"display_name",transforms:[(0,s.cellWidth)(20),s.sortable]},{title:"Description"},{title:"Permissions",transforms:[s.nowrap]},{title:"Groups",transforms:[s.nowrap]},{title:"Last modified",key:"modified",transforms:[s.nowrap,s.sortable]}],se=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,filters:r.filters,meta:r.pagination,userIdentity:r.identity,isLoading:n}};const ue=function(){var e=(0,l.useDispatch)(),t=(0,c.useHistory)().push,r=(0,l.useSelector)(se,l.shallowEqual),o=r.roles,s=r.isLoading,d=r.filters,f=r.meta,P=r.userIdentity,w=function(t){return e((0,b.Kt)(ae(ae({},t),{},{inModal:!1})))},_=(0,c.useHistory)(),S=(0,i.useState)(f),D=(0,n.Z)(S,2),Z=D[0],L=D[1],C=(0,i.useState)(d.name||""),M=(0,n.Z)(C,2),F=M[0],I=M[1];(0,i.useEffect)((function(){var e=(0,k.rj)(_,Z);L(e);var t=(0,oe.a)(_,["name"],{name:F}).name;I(t),insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),w(ae(ae({},e),{},{filters:{name:t}}))}),[]),(0,i.useEffect)((function(){I(d.name),L(f)}),[d,f]);var T=function(){return a().createElement(i.Suspense,{fallback:a().createElement(i.Fragment,null)},a().createElement(c.Route,{exact:!0,path:O._j.EM},a().createElement(le,{pagination:Z,filters:{name:F}})),a().createElement(c.Route,{exact:!0,path:O._j.fV},!s&&a().createElement(y.Z,{afterSubmit:function(){return w(ae(ae({},Z),{},{offset:0,filters:{name:F}}))},routeMatch:O._j.fV,cancelRoute:(0,m.zk)(O._j.uJ,Z,d),submitRoute:(0,m.zk)(O._j.uJ,ae(ae({},Z),{},{offset:0}),d)})),a().createElement(c.Route,{exact:!0,path:O._j.ld},!s&&a().createElement(j.Z,{afterSubmit:function(){return w(ae(ae({},Z),{},{offset:0,filters:{name:F}}))},routeMatch:O._j.ld,cancelRoute:(0,m.zk)(O._j.uJ,Z,d),submitRoute:(0,m.zk)(O._j.uJ,ae(ae({},Z),{},{offset:0}),d)})))},V=function(e){return e.system?[]:[{title:"Edit",onClick:function(e,r,n){return t("/roles/edit/".concat(n.uuid))}},{title:"Delete",onClick:function(e,r,n){return t("/roles/remove/".concat(n.uuid))}}]},A=function(){var e;return null!=P&&null!==(e=P.user)&&void 0!==e&&e.is_org_admin?[a().createElement(c.Link,{to:O._j.EM,key:"add-role",className:"pf-m-visible-on-md"},a().createElement(u.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},"Create role"))]:[]};return a().createElement(c.Switch,null,a().createElement(R.Z,{pageAction:"role-detail-permission",path:O._j.T0},a().createElement(ne,null)),a().createElement(R.Z,{pageAction:"role-detail",path:O._j.Fh},a().createElement(h.Z,{onDelete:function(){return I("")}})),a().createElement(R.Z,{pageAction:"roles-list",path:O._j.uJ,render:function(){return a().createElement(u.Stack,null,a().createElement(u.StackItem,null,a().createElement(g.Q,null,a().createElement(g.y,{title:"Roles"}))),a().createElement(u.StackItem,null,a().createElement(E.Z,{type:"content",id:"tab-roles"},a().createElement(v.M,{dedicatedAction:null!=P&&null!==(e=P.user)&&void 0!==e&&e.is_org_admin?a().createElement(c.Link,{to:O._j.EM},a().createElement(u.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role",className:"pf-m-visible-on-md"},"Create role")):void 0,actionResolver:V,sortBy:{index:0,direction:"asc"},columns:ce,createRows:p,data:o,filterValue:F,fetchData:function(e){var t=e.name,r=e.count,n=e.limit,o=e.offset,i=e.orderBy;return(0,k.oG)(_,e.limit,e.offset),(0,oe.M)(_,{name:t}),w((0,m.jl)({count:r,limit:n,offset:o,orderBy:i,filters:{name:t}}))},setFilterValue:function(e){var t=e.name;return I(t)},isLoading:s,pagination:Z,routes:T,ouiaId:"roles-table",titlePlural:"roles",titleSingular:"role",toolbarButtons:A,filterPlaceholder:"name",tableId:"roles"}))));var e}}))}}}]);
//# sourceMappingURL=../sourcemaps/514.b0134c2d255020c7494b.js.map