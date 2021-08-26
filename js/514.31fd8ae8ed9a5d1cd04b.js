(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[514],{61514:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>de});var n=r(28481),i=r(96156),o=r(92950),a=r.n(o),l=r(45237),c=r(334),s=r(6877),u=r(97066),d=r(85061),f=r(64107),p=function(e){return e.reduce((function(e,t){var r=t.uuid,n=t.display_name,i=t.name,l=t.description,s=t.system,u=t.accessCount,p=t.groups_in_count,m=t.modified;return[].concat((0,d.Z)(e),[{uuid:r,system:s,cells:[a().createElement(o.Fragment,{key:"".concat(r,"-name")},a().createElement(c.Link,{to:"/roles/detail/".concat(r)},n||i)),l,a().createElement(o.Fragment,{key:"".concat(r,"-accessCount")},a().createElement(c.Link,{to:"/roles/detail/".concat(r)},u)),p,a().createElement(o.Fragment,{key:"".concat(r,"-modified")},a().createElement(f.Z,{date:m,type:"relative"}))]}])}),[])},m=r(11107),b=r(28090),y=r(38376),g=r(41800),v=r(13063),h=r(54213),E=r(95311),O=r(60306),j=r(88040),R=r(93327),P=function(e){return e.reduce((function(e,t){return[].concat((0,d.Z)(e),[{cells:[t]}])}),[])},_=r(39173),w=r(19571),k=r(61338),S=r(22122),D=r(45697),Z=r.n(D),L=r(96354),C=r(36457),M=r(29215),F=r(76349),I=r(73943),T=r(81253),V=r(40483),A=r(48880),N=["ModalProps"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.ModalProps,r=(0,T.Z)(e,N),n=(0,A.default)().getState().values;return a().createElement(V.Z,(0,S.Z)({},r,{ModalProps:B(B({},t),{},{onClose:function(){return t.onClose(n)}}),alert:n["dual-list-select"]?void 0:function(){return a().createElement("div",{className:"rbac-m-resource-definitions"},a().createElement(u.Alert,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:"At least one resource must be defined for this permission"}))}}))};q.propTypes={ModalProps:Z().object};const z=q;var W=r(42348),J=r.n(W);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function K(e,t){switch(t.type){case"update":return H(H({},e),t.payload);default:throw new Error}}var U=function(e,t,r){return{fields:[{component:L.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:"Resources available for the permission",rightTitle:"Resources defined for the permission",filterOptionsTitle:"Filter by resource...",filterValueTitle:"Filter by resource...",options:(0,d.Z)(t&&e?r:[]),validate:[{type:"validate-resources"}]}]}},X={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},Y=function(e){var t=e.cancelRoute,r=(0,c.useRouteMatch)(O._j.nu),i=(0,c.useRouteMatch)(r).params,s=i.permissionId,f=i.roleId,p=(0,c.useHistory)(),m=p.replace,y=p.push,g=(0,l.useDispatch)(),v=(0,o.useReducer)(K,Q),h=(0,n.Z)(v,2),E=h[0],j=h[1],R=(0,l.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:null!==(t=e.roleReducer.selectedRole)&&void 0!==t&&t.access?J()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===s})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),l.shallowEqual),P=R.definedResources,_=R.role,w=(0,l.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,i=r.isLoading,o=r.loadingResources,a=r.resources;return{resourceTypes:n.data,resources:a[t]?{resourcesPath:a[t]}:a,isLoading:i,isLoadingResources:o>0}}(e,E.resourcesPath)}),l.shallowEqual),k=w.resourceTypes,D=w.isLoading,Z=w.isLoadingResources,L=w.resources;(0,o.useEffect)((function(){g((0,M.A)())}),[s]),(0,o.useEffect)((function(){if(!D){var e,t=null===(e=k.find((function(e){var t;return e.value===(null===(t=s.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(j({type:"update",payload:{resourcesPath:t.split("/")[5]}}),g((0,M.R)(t)))}}),[k]);var T=function(){return m(t)},V=function(e){e["dual-list-select"]===P?T():j({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},A=function(e){return Object.entries(e).reduce((function(e,t){var r=(0,n.Z)(t,2),i=r[0],o=r[1];return[].concat((0,d.Z)(e),(0,d.Z)(o.map((function(e){return{value:e.value,path:i,label:e.value}}))))}),[])}(L);return a().createElement(a().Fragment,null,a().createElement(I.R,{customTitle:"Exit edit resource definitions?",customDescription:"All changes will be lost.",isOpen:E.cancelWarningVisible,onModalCancel:function(){return j({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:T}),(D||Z)&&E.loadingStateVisible?a().createElement(u.Modal,{className:"rbac-m-resource-definitions",isOpen:!0,title:"Edit resource definitions",onClose:function(){j({type:"update",payload:{loadingStateVisible:!1}}),T()}},a().createElement(u.Spinner,null)):a().createElement(C.Z,{schema:U(L,E.resourcesPath,A),componentMapper:F.ZP,initialValues:{"dual-list-select":E.changedResources||P||[]},onSubmit:function(e){var r;j({type:"update",payload:{changedResources:e["dual-list-select"]}});var n={permission:s,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=s.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};g((0,b.ul)(f,H(H({},_),{},{access:[].concat((0,d.Z)(_.access.filter((function(e){return e.permission!==s}))),[n])})),!0).then((function(){g((0,b.fp)(f)),y(t)}))},onCancel:function(e){return V(e)},validatorMapper:X,FormTemplate:function(e){return a().createElement(z,(0,S.Z)({},e,{ModalProps:{onClose:V,isOpen:!E.cancelWarningVisible,variant:"large",title:"Edit resource definitions",description:"Give or remove permissions to specific resources using the arrows below."}}))}}))};Y.propTypes={routeMatch:Z().string.isRequired,cancelRoute:Z().string.isRequired,resources:Z().array,resourcesPath:Z().string};const $=Y;var ee=r(85564),te=r.n(ee);function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ie=function(){var e=(0,o.useState)({pagination:ne(ne({},k.he),{},{filter:""})}),t=(0,n.Z)(e,2),r=t[0],i=t[1],s=r.pagination,d=r.filter,f=(0,l.useDispatch)(),p=(0,c.useParams)(),v=p.roleId,h=p.permissionId,E=(0,l.useSelector)((function(e){var t,r,n,i,o;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?ne({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===h}))):{},isRecordLoading:e.roleReducer.isRecordLoading,rolesPagination:(null===(r=e.roleReducer)||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.pagination)||k.he,rolesFilters:(null===(i=e.roleReducer)||void 0===i||null===(o=i.roles)||void 0===o?void 0:o.filters)||{}}}),l.shallowEqual),j=E.role,R=E.permission,S=E.isRecordLoading,D=E.rolesPagination,Z=E.rolesFilters;(0,o.useEffect)((function(){f((0,b.fp)(v))}),[v]),(0,o.useEffect)((function(){i(ne(ne({},r),{},{pagination:ne(ne({},r.pagination),{},{count:j.access?j.access.length:0})}))}),[j]);var L=R.resourceDefinitions?te()(R.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!d||e.includes(d)})):[],C=function(){return a().createElement(o.Fragment,null,a().createElement(c.Route,{exact:!0,path:O._j.nu},a().createElement($,{cancelRoute:O._j.T0.replace(":roleId",v).replace(":permissionId",h)})))};return a().createElement(o.Fragment,null,a().createElement(y.Q,{breadcrumbs:[{title:"Roles",to:(0,m.zk)(C.roles,D,Z)},{title:S?void 0:j&&(j.display_name||j.name),to:"/roles/detail/".concat(v)},{title:h,isActive:!0}]},a().createElement(u.Level,null,a().createElement(u.LevelItem,null,a().createElement(_.Z,{title:h||a().createElement(w.h2,null),className:"rbac-page-header__title"})))),a().createElement("section",{className:"pf-c-page__main-section rbac-c-role__permissions"},a().createElement(u.TextContent,null,a().createElement(u.Text,{component:u.TextVariants.h1},"Defined resources")),a().createElement(g.M,{columns:[{}],createRows:P,data:L.slice(s.offset,s.offset+s.limit),filterValue:d,fetchData:function(e){var t=e.limit,n=e.offset,o=e.name;return i(ne(ne({},r),{},{filter:o,pagination:ne(ne({},r.pagination),{},{limit:t,offset:n})}))},isCompact:!0,routes:C,setFilterValue:function(e){var t=e.name;return i(ne(ne({},r),{},{filter:t}))},toolbarButtons:function(){return j.system?[]:[a().createElement(o.Fragment,{key:"edit-resource-definitions"},a().createElement(c.Link,{to:"/roles/detail/".concat(v,"/permission/").concat(h,"/edit")},a().createElement(u.Button,{variant:"primary","aria-label":"Edit"},"Edit")))]},isLoading:S,pagination:ne(ne({},s),{},{count:L.length}),titlePlural:"resources",titleSingular:"resource",hideHeader:!0,tableId:"role-resource-definitions"})))};var oe=r(92758);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=(0,o.lazy)((function(){return Promise.all([r.e(705),r.e(287)]).then(r.bind(r,13287))})),se=[{title:"Name",key:"display_name",transforms:[(0,s.cellWidth)(20),s.sortable]},{title:"Description"},{title:"Permissions",transforms:[s.nowrap]},{title:"Groups",transforms:[s.nowrap]},{title:"Last modified",key:"modified",transforms:[s.nowrap,s.sortable]}],ue=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,filters:r.filters,meta:r.pagination,userIdentity:r.identity,isLoading:n}};const de=function(){var e=(0,l.useDispatch)(),t=(0,c.useHistory)().push,r=(0,l.useSelector)(ue,l.shallowEqual),i=r.roles,s=r.isLoading,d=r.filters,f=r.meta,P=r.userIdentity,_=function(t){return e((0,b.Kt)(le(le({},t),{},{inModal:!1})))},w=(0,c.useHistory)(),S=(0,o.useState)(f),D=(0,n.Z)(S,2),Z=D[0],L=D[1],C=(0,o.useState)(d.display_name||""),M=(0,n.Z)(C,2),F=M[0],I=M[1];(0,o.useEffect)((function(){var e=(0,k.rj)(w,Z);L(e);var t=(0,oe.a)(w,["display_name"],{display_name:F}).display_name;I(t),insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),_(le(le({},e),{},{filters:{display_name:t}}))}),[]),(0,o.useEffect)((function(){I(d.display_name),L(f)}),[d,f]),(0,o.useEffect)((function(){f.redirected&&(0,k.oG)(w,f.limit,f.offset)}),[f.redirected]);var T=function(){return a().createElement(o.Suspense,{fallback:a().createElement(o.Fragment,null)},a().createElement(c.Route,{exact:!0,path:O._j.EM},a().createElement(ce,{pagination:Z,filters:{display_name:F}})),a().createElement(c.Route,{exact:!0,path:O._j.fV},!s&&a().createElement(v.Z,{afterSubmit:function(){return _(le(le({},Z),{},{offset:0,filters:{display_name:F}}))},routeMatch:O._j.fV,cancelRoute:(0,m.zk)(O._j.uJ,Z,d),submitRoute:(0,m.zk)(O._j.uJ,le(le({},Z),{},{offset:0}),d)})),a().createElement(c.Route,{exact:!0,path:O._j.ld},!s&&a().createElement(j.Z,{afterSubmit:function(){return _(le(le({},Z),{},{offset:0,filters:{display_name:F}}))},routeMatch:O._j.ld,cancelRoute:(0,m.zk)(O._j.uJ,Z,d),submitRoute:(0,m.zk)(O._j.uJ,le(le({},Z),{},{offset:0}),d)})))},V=function(e){return e.system?[]:[{title:"Edit",onClick:function(e,r,n){return t("/roles/edit/".concat(n.uuid))}},{title:"Delete",onClick:function(e,r,n){return t("/roles/remove/".concat(n.uuid))}}]},A=function(){var e;return null!=P&&null!==(e=P.user)&&void 0!==e&&e.is_org_admin?[a().createElement(c.Link,{to:O._j.EM,key:"add-role",className:"pf-m-visible-on-md"},a().createElement(u.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},"Create role"))]:[]};return a().createElement(c.Switch,null,a().createElement(R.Z,{pageAction:"role-detail-permission",path:O._j.T0},a().createElement(ie,null)),a().createElement(R.Z,{pageAction:"role-detail",path:O._j.Fh},a().createElement(E.Z,{onDelete:function(){return I("")}})),a().createElement(R.Z,{pageAction:"roles-list",path:O._j.uJ,render:function(){return a().createElement(u.Stack,{className:"rbac-c-roles"},a().createElement(u.StackItem,null,a().createElement(y.Q,null,a().createElement(y.y,{title:"Roles"}))),a().createElement(u.StackItem,null,a().createElement(h.Z,{type:"content",id:"tab-roles"},a().createElement(g.M,{dedicatedAction:null!=P&&null!==(e=P.user)&&void 0!==e&&e.is_org_admin?a().createElement(c.Link,{to:O._j.EM},a().createElement(u.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role",className:"pf-m-visible-on-md"},"Create role")):void 0,actionResolver:V,sortBy:{index:0,direction:"asc"},columns:se,createRows:p,data:i,filterValue:F,fetchData:function(e){var t=e.name,r=e.count,n=e.limit,i=e.offset,o=e.orderBy;return(0,k.oG)(w,n,i),(0,oe.M)(w,{display_name:t}),_((0,m.jl)({count:r,limit:n,offset:i,orderBy:o,filters:{display_name:t}}))},setFilterValue:function(e){var t=e.name;return I(t)},isLoading:!s&&0===(null==i?void 0:i.length)&&0===(null==F?void 0:F.length)||s,pagination:Z,routes:T,ouiaId:"roles-table",titlePlural:"roles",titleSingular:"role",toolbarButtons:A,filterPlaceholder:"name",tableId:"roles"}))));var e}}))}}}]);
//# sourceMappingURL=../sourcemaps/514.13fd4192599c77142334.js.map