(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[661],{82916:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(92950),s=r.n(n),a=r(45697),i=r.n(a),o=r(489),u=r(15265),c=function(e){var t=e.description,r=e.linkTitle;return s().createElement(o.Text,{className:"pf-u-mt-0",component:o.TextVariants.h7},t,s().createElement(o.Text,{component:o.TextVariants.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r,s().createElement(u.ZP,null)),".")};c.propTypes={description:i().node,linkTitle:i().node},c.defaultProps={description:"",linkTitle:" user management list "};const l=c},88093:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(22122),s=r(81253),a=r(92950),i=r.n(a),o=r(62691),u=r(45697),c=r.n(u),l=r(94184),p=r.n(l),f=["row"],d=function(e){var t,r=e.row,a=(0,s.Z)(e,f),u=r.status,c=null==u||null===(t=u.props)||void 0===t?void 0:t["data-is-active"];return i().createElement(o.RowWrapper,(0,n.Z)({className:p()("ins-c-rbac__user-row",{"ins-m-inactive":!c}),row:r},a))};d.propTypes={row:c().shape({status:c().shape({props:c().shape({"data-is-active":c().bool,data:c().shape({isActive:c().bool})})})})};const m=d},90944:(e,t,r)=>{"use strict";r.d(t,{u:()=>v,a:()=>b});var n=r(36580),s=r(96156),a=r(92137),i=r(87757),o=r.n(i),u=r(61338);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=(0,r(89400).bn)(),f={Active:"enabled",Inactive:"disabled"};function d(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(o().mark((function e(t){var r,n,s,a,i,c,d,m,v,b,y,h,g,w,O,k,j,P,E;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,s=t.offset,a=void 0===s?0:s,i=t.orderBy,c=t.filters,d=void 0===c?{}:c,m=t.inModal,v=d.username,b=d.email,y=d.status,g="-username"===i?"desc":"asc",w=2===(h=void 0===y?[]:y).length?"all":f[h[0]]||"all",e.next=6,p.listPrincipals(n,a,void 0,v,g,b,w);case 6:if(O=e.sent,k=(0,u._V)(a,null==O||null===(r=O.meta)||void 0===r?void 0:r.count),a=k?a:(0,u.Vh)(O.meta.count,n),!k){e.next=13;break}e.t0=O,e.next=16;break;case 13:return e.next=15,p.listPrincipals(n,a,void 0,v,g,b,w);case 15:e.t0=e.sent;case 16:return j=e.t0,P=j.data,E=j.meta,e.abrupt("return",l({data:P,meta:l(l({},E),{},{offset:a,limit:n})},m?{}:{filters:d,pagination:l(l({},E),{},{offset:a,limit:n,redirected:!k})}));case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){return{type:n.WH,payload:d(e)}},b=function(e){return{type:n.xD,payload:e}}},98033:(e,t,r)=>{"use strict";r.d(t,{Z:()=>L,i:()=>R});var n=r(22122),s=r(96156),a=r(28481),i=r(85061),o=r(92950),u=r.n(o),c=r(45237),l=r(45697),p=r.n(l),f=r(334),d=r(11107),m=r(41800),v=r(90944),b=r(71355),y=r(489),h=r(62691),g=r(88093),w=r(61338),O=r(92758),k=r(98614),j=r(36438);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=[{title:"Org. Administrator",key:"org-admin",transforms:[h.nowrap]},{title:"Username",key:"username",transforms:[h.sortable]},{title:"Email"},{title:"First name",transforms:[h.nowrap]},{title:"Last name",transforms:[h.nowrap]},{title:"Status",transforms:[h.nowrap]}],Z=function(e){return function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,r){var s=r.username,a=r.is_active,c=r.email,l=r.first_name,p=r.last_name,d=r.is_org_admin;return[].concat((0,i.Z)(t),[{uuid:s,cells:[d?u().createElement(o.Fragment,null,u().createElement(k.ZP,{key:"yes-icon",className:"pf-u-mr-sm"}),u().createElement("span",{key:"yes"},"Yes")):u().createElement(o.Fragment,null,u().createElement(j.ZP,{key:"no-icon",className:"pf-u-mr-sm"}),u().createElement("span",{key:"no"},"No")),{title:e?u().createElement(f.Link,{to:"/users/detail/".concat(s)},s):s},c,l,p,{title:u().createElement(y.Label,{key:"status",color:a&&"green"},a?"Active":"Inactive"),props:{"data-is-active":a}}],selected:Boolean(n&&n.find((function(e){return e.uuid===s})))}])}),[]):[]}},x=function(e){var t=e.users,r=e.fetchUsers,s=e.updateUsersFilters,i=e.isLoading,l=e.pagination,p=e.selectedUsers,v=e.setSelectedUsers,b=e.userLinks,y=e.inModal,h=e.props,k=(0,c.useSelector)((function(e){var t=e.userReducer.users;return{limit:y?t.meta.limit:t.pagination.limit||w.he.limit,offset:y?t.meta.offset:t.pagination.offset||w.he.offset,count:y?t.meta.count:t.pagination.count,redirected:!y&&t.pagination.redirected}})),j=(0,f.useHistory)(),P=(0,c.useSelector)((function(e){return e.userReducer.users.filters})),x=(0,o.useState)(y?{username:"",email:"",status:["Active"]}:P),S=(0,a.Z)(x,2),_=S[0],L=S[1];return(0,o.useEffect)((function(){y||k.redirected&&(0,w.oG)(j,k.limit,k.offset)}),[k.redirected]),(0,o.useEffect)((function(){var e=y?w.he:(0,w.rj)(j,k),t=y?{status:_.status}:(0,O.a)(j,["username","email","status"],_);L(t),r(E(E({},(0,d.jl)(E(E({},e),{},{filters:t}))),{},{inModal:y}))}),[]),u().createElement(m.M,(0,n.Z)({columns:U,isSelectable:!0,isCompact:!0,borders:!1,createRows:Z(b),data:t,ouiaId:"users-table",fetchData:function(e){var t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:_.status,n=e.username,s=e.email,a=e.count,i=e.limit,o=e.offset,u=e.orderBy;r(E(E({},(0,d.jl)({count:a,limit:i,offset:o,orderBy:u,filters:{username:n,email:s,status:t}})),{},{inModal:y})),y||(0,w.oG)(j,i,o),y||(0,O.M)(j,{username:n,email:s,status:t})},setFilterValue:function(e){var t,r=e.username,n=e.email,a=e.status;t={username:void 0===r?_.username:r,email:void 0===n?_.email:n,status:void 0===a||a===_.status?_.status:a},y||s(t),L(E({username:""},t))},isLoading:i,pagination:l,checkedRows:p,setCheckedItems:function(e){v((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:g.Z,titlePlural:"users",titleSingular:"user",filters:[{key:"username",value:_.username,placeholder:"Filter by exact username"},{key:"email",value:_.email,placeholder:"Filter by exact email"},{key:"status",value:_.status,label:"Status",type:"checkbox",items:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]}],tableId:"users-list"},h))},S=function(e){var t=e.userReducer,r=t.users,n=t.isUserDataLoading;return{users:r.data&&r.data.map((function(e){return E(E({},e),{},{uuid:e.username})})),pagination:r.meta,isLoading:n}},_=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w.he;e((0,v.u)(t))},updateUsersFilters:function(t){e((0,v.a)(t))},addNotification:function(){return e(b.wN.apply(void 0,arguments))}}};x.propTypes={history:p().shape({goBack:p().func.isRequired,push:p().func.isRequired}),users:p().array,isLoading:p().bool,searchFilter:p().string,fetchUsers:p().func.isRequired,updateUsersFilters:p().func.isRequired,setSelectedUsers:p().func.isRequired,selectedUsers:p().array,pagination:p().shape({limit:p().number.isRequired,offset:p().number,count:p().number}),userLinks:p().bool,props:p().object,inModal:p().bool},x.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1,inModal:!1};const L=(0,c.connect)(S,_)(x);var R=(0,c.connect)(S,_,(function(e,t,r){return E(E(E(E({},r),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||w.eX)}})}))(x)}}]);
//# sourceMappingURL=../sourcemaps/661.58289ba1f5cedb6fb9a5.js.map