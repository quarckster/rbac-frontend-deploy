(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{715:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var r=n(134),i=n.n(r),o=n(8),a=n.n(o),c=n(714),s=n.n(c),u=n(0),l=n.n(u),f=n(31),p=n.n(f),d=n(62),b=n(373),h=n(372),m=n(668),g=n(80),v=n(320),y=n(667),O=n(160),j=n(669),w=n.n(j),P=n(717),D=n(316),E=n.n(D),R=n(751),k=n.n(R),S=n(666),F=n(426),C=n(53);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return A(A({},e),{},{itemCount:e.count,perPage:e.limit,page:Object(P.d)(e.limit,e.offset),onSetPage:function(i,o){t(A(A({},e),{},{offset:(o-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(A(A({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},A({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n(Object(P.f)(r,!0))}}:{})],checked:Object(P.a)(r,t),onSelect:function(t){!e&&n(Object(P.f)(r,t))}}},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,u=arguments.length>8?arguments[8]:void 0,l=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,b=arguments.length>13?arguments[13]:void 0,h=arguments.length>14?arguments[14]:void 0,m=arguments.length>15?arguments[15]:void 0;return{onChange:b,value:h,items:[].concat(E()(u&&u.length>0?u.map((function(o){var c=o.key,s=o.value,b=o.selected,h=o.placeholder,g=o.type,v=void 0===g?"text":g,y=o.groups,O=o.items;return{label:Object(P.c)(c),type:v,filterValues:{id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:h||"Filter by ".concat(c),value:s,selected:b,isFilterable:l,groups:y,items:O,onChange:function(e,o){var s="string"==typeof o||Array.isArray(o)?o:Object.keys(k()(o[0],(function(e){return e})));t(A(A(A({},r),i),{},a()({offset:0},c,s))),Object(P.b)((function(){return n(A(A(A({},i),{},{offset:0,orderBy:m},u.reduce((function(e,t){return A(A({},e),{},a()({},t.key,t.value))}),{})),{},a()({},c,s)))}))},isDisabled:e,onShowMore:f,showMoreTitle:p,onFilter:d}}})):[{label:Object(P.c)(c||o),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||o),value:r,onChange:function(e,r){t(A(A({},i),{},{offset:0,name:r})),Object(P.b)((function(){return n(A(A({},i),{},{offset:0,name:r,orderBy:m}))}))},isDisabled:e}}]),E()(s||[]))}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:Object(P.c)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,u){var l=s()(c,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return A(A({},e),{},a()({},n,function(e,t,n){return u?"group"===t||"checkbox"===t?[]:"":n!==l.type?e:"checkbox"===t?e.filter((function(e){var t;return e!==(null===(t=l.chips[0])||void 0===t?void 0:t.name)})):""}(r,i,n)))}),{});r(A(A({},n),{},{offset:0,name:""},f)),i(A(A({},n),{},{offset:0,orderBy:o,name:""},f))}}},q=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,o=e.isLoading,a=e.data,c=e.titleSingular,s=e.filterValue,u=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,b=e.toolbarButtons,h=e.filterPlaceholder,m=e.filterItems,g=e.filters,v=e.isFilterable,y=e.onShowMore,O=e.showMoreTitle,j=e.onFilter,w=e.onChange,P=e.value,D=e.hideFilterChips;return l.a.createElement(S.PrimaryToolbar,i()({},t&&{bulkSelect:T(o,n,r,a)},{filterConfig:V(o,u,p,s,f,c,h,m,g,v,y,O,j,w,P,d),actionsConfig:{actions:b()}},!o&&{pagination:B(f,p,s,d)},(s.length>0||g&&g.length>0)&&!D&&{activeFiltersConfig:I(s,g,f,u,p,d)}))};q.propTypes={isSelectable:p.a.bool,checkedRows:p.a.array,setCheckedItems:p.a.func,isLoading:p.a.bool,data:p.a.array,titleSingular:p.a.string,filterValue:p.a.oneOfType([p.a.array,p.a.string]),setFilterValue:p.a.func,filters:p.a.arrayOf(p.a.shape({value:p.a.oneOfType([p.a.string,p.a.number,p.a.array]),key:p.a.string,placeholder:p.a.string})),isFilterable:p.a.bool,onShowMore:p.a.func,showMoreTitle:p.a.string,onFilter:p.a.func,onChange:p.a.func,value:p.a.any,pagination:p.a.shape({limit:p.a.number,offset:p.a.number,count:p.a.number}),sortBy:p.a.string,filterItems:F.ConditionalFilter.propTypes.items,filterPlaceholder:p.a.string,isCollapsible:p.a.bool,fetchData:p.a.func,toolbarButtons:p.a.func,hideFilterChips:p.a.bool},q.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:C.b,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};var M=q,L=n(159),_=n.n(L),W=n(162),N=n(319),U=n(318),J=n(161),z=n(317),G=n.n(z),H=function(e){var t=e.title,n=e.icon,r=e.description,o=e.actions,a=_()(e,["title","icon","description","actions"]);return l.a.createElement(W.EmptyState,i()({variant:W.EmptyStateVariant.full},a),l.a.createElement(U.EmptyStateIcon,{icon:n||G.a}),l.a.createElement(J.Title,{headingLevel:"h4"},t),l.a.createElement(N.EmptyStateBody,null,r.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},e," ",l.a.createElement("br",null))}))),o)};H.propTypes={icon:p.a.func,title:p.a.node,description:p.a.node,actions:p.a.arrayOf(p.a.node),className:p.a.string};var Y=H;n(729);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,o=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,j=e.areActionsDisabled,D=e.routes,E=e.titlePlural,R=e.titleSingular,k=e.pagination,S=e.filterValue,F=e.isLoading,C=e.setFilterValue,x=e.checkedRows,A=e.isSelectable,T=e.fetchData,V=e.setCheckedItems,I=e.isCollapsible,q=e.emptyProps,L=e.filterPlaceholder,_=e.rowWrapper,W=e.filters,N=e.isFilterable,U=e.onShowMore,J=e.showMoreTitle,z=e.onFilter,G=e.onChange,H=e.value,K=e.sortBy,X=e.isExpandable,Z=e.onExpand,$=e.hideFilterChips,ee=e.noData,te=e.noDataDescription,ne=e.ouiaId,re=Object(u.useState)({}),ie=s()(re,2),oe=ie[0],ae=ie[1],ce=Object(u.useState)({index:void 0,direction:void 0}),se=s()(ce,2),ue=se[0],le=se[1];Object(u.useEffect)((function(){le(Q(Q({},K),void 0!==ue.index&&ue))}),[K]);var fe=n(f,oe,x),pe=function(e,t,n,r){var i=r.uuid;return ae((function(e){return Q(Q({},e),{},a()({},i,n))}))};return l.a.createElement(u.Fragment,null,D(),!F&&0===fe.length&&0===S.length&&W.every((function(e){return!e.value}))?l.a.createElement(Y,i()({title:"Configure ".concat(E),icon:w.a,description:["To configure user access to applications","create at least one ".concat(R)],actions:c()[0]},q)):l.a.createElement(u.Fragment,null,l.a.createElement(M,{isSelectable:A,checkedRows:x,setCheckedItems:V,isLoading:F||ee,data:f,titleSingular:R,filterValue:S,setFilterValue:C,sortBy:void 0!==ue.index&&ue.index-A>=0&&"".concat("desc"===ue.direction?"-":"").concat(o[ue.index-A].key)||void 0,pagination:k,fetchData:T,toolbarButtons:c,filterPlaceholder:L,filters:W,isFilterable:N,onShowMore:U,showMoreTitle:J,onFilter:z,onChange:G,value:H,hideFilterChips:$}),F?l.a.createElement(O.d,null):l.a.createElement(d.b,i()({canSelectAll:!1,"aria-label":"".concat(E," table"),variant:t?d.e.compact:null,borders:r},I&&{onCollapse:pe},A&&fe.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,o=s()(r.cells,1)[0];return V(Object(P.f)([{uuid:i,name:o}],t))}},X&&{onExpand:Z},{rows:fe.length>0?fe:[{fullWidth:!0,cells:[{title:l.a.createElement(Y,{title:"No matching ".concat(E," found"),description:ee&&te?te:["This filter criteria matches no ".concat(E,"."),"Try changing your filter settings."],actions:ee&&te?void 0:[l.a.createElement(y.EmptyStatePrimary,{key:"clear-filters"},l.a.createElement(g.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){C(Q(Q({},k),{},{offset:0,name:""})),T(Q(Q({},k),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:o.length+Boolean(pe)}}]}],cells:o},fe.length>0&&{actionResolver:p},{areActionsDisabled:j,rowWrapper:_,sortBy:ue,ouiaId:ne,onSort:function(e,t,n){le({index:t,direction:n}),T(Q(Q({},k),{},{offset:0,name:S,orderBy:"".concat("desc"===n?"-":"").concat(o[t-A].key)}))}}),l.a.createElement(b.a,null),l.a.createElement(h.a,null)),!k.noBottom&&l.a.createElement(m.TableToolbar,null,!F&&l.a.createElement(v.Pagination,i()({},B(k,T,S),{variant:"bottom",dropDirection:"up"})))))};X.propTypes=Q(Q({},M.propTypes),{},{rowWrapper:p.a.any,isCompact:p.a.bool,borders:p.a.bool,createRows:p.a.func.isRequired,columns:p.a.array.isRequired,titlePlural:p.a.string,routes:p.a.func,actionResolver:p.a.func,areActionsDisabled:p.a.func,pagination:p.a.shape({noBottom:p.a.bool}),isExpandable:p.a.bool,onExpand:p.a.func,hideFilterChips:p.a.bool,noDataDescription:p.a.arrayOf(p.a.node)}),X.defaultProps=Q(Q({},M.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1})},716:function(e,t,n){(t=n(4)(!1)).push([e.i,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},717:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return g}));var r=n(316),i=n.n(r),o=n(8),a=n.n(o),c=n(714),s=n.n(c),u=n(663);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=s()(t,2),r=n[0],i=n[1];return f(f({},e),i&&a()({},r,i))}),{})},b=n.n(u)()((function(e){return e()})),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return 0!==e.length&&e.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||!(0===e.length||!e.some((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))})))&&null},m=function(e,t){return function(n){return t?[].concat(i()(n),i()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},718:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"h",(function(){return d}));var r=n(12),i=n(725),o=function(e){return{type:r.k,payload:i.b(e)}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:i.d(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:i.e(e)}},s=function(e){return{type:r.B,payload:i.f(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."}}}}},u=function(e){return{type:r.p,payload:i.b(e)}},l=function(e){return{type:r.o,payload:i.c(e)}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.n,payload:i.d(e)}},p=function(e,t){return{type:r.F,payload:i.h(e,t)}},d=function(e,t){return{type:r.F,payload:i.g(e,t)}}},719:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return v}));var r=n(665),i=n.n(r),o=n(664),a=n(425),c=new o.PrincipalApi(void 0,"/api/rbac/v1",i.a),s=new o.GroupApi(void 0,"/api/rbac/v1",i.a),u=new o.RoleApi(void 0,"/api/rbac/v1",i.a),l=(new o.PolicyApi(void 0,"/api/rbac/v1",i.a),new o.AccessApi(void 0,"/api/rbac/v1",i.a)),f=new o.PermissionApi(void 0,"/api/rbac/v1",i.a),p=new a.BaseAPI(void 0,"/api/cost-management/v1",i.a);function d(){return c}function b(){return s}function h(){return u}function m(){return l}function g(){return f}function v(){return{getResourceTypes:function(){return p.axios.get("".concat("/api/cost-management/v1","/resource-types/"))},getResource:function(e){return p.axios.get("".concat(e))}}}},725:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return w})),n.d(t,"h",(function(){return D})),n.d(t,"g",(function(){return E}));var r=n(723),i=n.n(r),o=n(8),a=n.n(o),c=n(724),s=n.n(c),u=n(719);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Object(u.f)();function d(e){return b.apply(this,arguments)}function b(){return(b=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=e.limit,n=e.offset,r=e.name,i=e.nameMatch,o=e.scope,a=e.orderBy,c=e.addFields,s=e.username,u=e.application,l=e.permission,f=e.options;return p.listRoles(t,n,r,i,o,a,c,s,u,l,f)}function m(e){return g.apply(this,arguments)}function g(){return(g=s()(i.a.mark((function e(t){var n,r,o,a,c,s,u,l,d,b,h,m,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,o=t.name,a=t.nameMatch,c=t.scope,s=void 0===c?"account":c,u=t.orderBy,l=t.addFields,d=void 0===l?["groups_in_count"]:l,b=t.username,h=t.options,m=t.permission,g=t.application,e.t0=f,e.t1=f,e.t2={},e.next=6,p.listRoles(n,r,o,a,s,u,d,b,g,m,h);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return(P=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=s()(i.a.mark((function e(t,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRoleAccess(t);case 2:return r=e.sent,o=r.data,e.abrupt("return",p.updateRole(t,f(f({},n),{},{access:o})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=s()(i.a.mark((function e(t,n){var r,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRoleAccess(t.uuid);case 2:return r=e.sent,o=r.data,a=f(f({},t),{},{access:o.filter((function(e){return!n.includes(e.permission)}))}),e.abrupt("return",p.updateRole(t.uuid,f({},a)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},729:function(e,t,n){var r=n(5),i=n(716);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=r(i,o);if(!i.locals||e.hot.invalidate){var c=i.locals;e.hot.accept(716,(function(){"string"==typeof(i=(i=n(716)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,i.locals)?(c=i.locals,a(i)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=i.locals||{}},731:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(31),a=n.n(o),c=n(80),s=function(e){var t=e.onClick,n=e.access;return i.a.createElement(c.Button,{onClick:t,variant:"link",isDisabled:0===n.resourceDefinitions.length},n.resourceDefinitions.length||"N/A")};s.propTypes={onClick:a.a.func.isRequired,access:a.a.shape({resourceDefinitions:a.a.array.isRequired}).isRequired},t.a=s},732:function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r),o=n(714),a=n.n(o),c=n(80),s=n(424),u=n(0),l=n.n(u),f=n(31),p=n.n(f),d=n(715),b=n(53);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.isOpen,n=e.handleClose,r=e.permission,i=e.resourceDefinitions,o=Object(u.useState)((function(){return{filterValue:"",rows:i.map((function(e){return e.attributeFilter.value})).slice(0,b.b.limit),pagination:m(m({},b.b),{},{count:i.length})}})),f=a()(o,2),p=f[0],h=p.rows,g=p.pagination,v=p.filterValue,y=f[1],O=function(e){var t=e.name,n=void 0===t?"":t,r=e.limit,o=e.offset,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return y((function(e){var t=e.pagination,c=e.filterValue,s=i.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(n)})).slice(o,r);return{rows:s,filterValue:a?n:c,pagination:m(m({},t),{},{offset:a?0:o,limit:r,count:s.length})}}))};return l.a.createElement(s.Modal,{actions:[l.a.createElement(c.Button,{key:"close-action",variant:"primary",onClick:n},"Close")],variant:"large",isOpen:t,onClose:n,title:"Resource definitions",description:l.a.createElement("p",null,"View resource definitions for the ",l.a.createElement("strong",null,r)," permission")},l.a.createElement(d.a,{columns:[""],data:h,filterValue:v,setFilterValue:function(e){return O(e,!0)},pagination:g,ouiaId:"resource-definition-table",noData:0===i.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(r," permission")],fetchData:O}))};g.propTypes={isOpen:p.a.bool,handleClose:p.a.func.isRequired,permission:p.a.string.isRequired,resourceDefinitions:p.a.arrayOf(p.a.shape({attributeFilter:p.a.shape({value:p.a.string.isRequired}).isRequired})).isRequired},t.default=g},748:function(e,t,n){"use strict";var r=n(8),i=n.n(r),o=n(316),a=n.n(o),c=n(714),s=n.n(c),u=n(0),l=n.n(u),f=n(31),p=n.n(f),d=n(123),b=n(39),h=n(761),m=n.n(h),g=n(715),v=n(718),y=n(160),O=n(361),j=n(360),w=n(62),P=n(373),D=n(372),E=n(731);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=Object(u.lazy)((function(){return Promise.resolve().then(n.bind(null,732))})),F=["Roles","Description",{title:"Permissions",cellTransforms:[O.a,Object(j.a)(20)]}],C=function(e){var t=e.fetchRoles,n=e.fetchRoleForPrincipal,r=e.roles,o=e.isLoading,c=e.rolesWithAccess,f=e.filters,p=e.setFilters,d=e.apps,b=e.showResourceDefinitions,h=Object(u.useState)({}),v=s()(h,2),O=v[0],j=v[1],R=Object(u.useState)({rdOpen:!1}),C=s()(R,2),x=C[0],A=x.rdOpen,B=x.rdPermission,T=x.resourceDefinitions,V=C[1];Object(u.useEffect)((function(){t({limit:20,offset:0,scope:"principal",application:d.join(",")})}),[]);var I=Object(u.useCallback)(m()((function(e,n,r,i,o){var a=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:n,name:r,application:a.join(","),permission:o})}),800),[]);return l.a.createElement(u.Fragment,null,l.a.createElement(g.a,{filters:f,columns:F,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,o,a){o?j((function(e){return k(k({},e),{},i()({},a.uuid,-1))})):(j((function(e){return k(k({},e),{},i()({},a.uuid,r))})),2===r&&n(a.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,n){var r=t.uuid,i=t.name,o=t.description,s=t.accessCount;return[].concat(a()(e),[{uuid:r,cells:[{title:i,props:{component:"th",isOpen:!1}},{title:o,props:{isOpen:!1}},{title:s,props:{isOpen:2===O[r]}}]},{uuid:"".concat(r,"-groups"),parent:2*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:(null==c?void 0:c[r])?l.a.createElement(w.b,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:w.e.compact,cells:["Application","Resource type","Operation"].concat(a()(b?["Resource definitions"]:[])),rows:c[r].access.map((function(e){return{cells:[].concat(a()(e.permission.split(":")),a()(b?[l.a.createElement(u.Fragment,{key:"rd"},l.a.createElement(E.a,{onClick:function(){return V({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},l.a.createElement(P.a,null),l.a.createElement(D.a,null)):l.a.createElement(y.d,null)}]}])}),[])},ouiaId:"roles-table",data:r.data,fetchData:function(e){var t=e.limit,n=e.offset,r=e.name,i=e.application,o=e.permission;I(t,n,r,i,o)},setFilterValue:p,isLoading:o,pagination:r.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}),l.a.createElement(u.Suspense,{fallback:l.a.createElement(u.Fragment,null)},A&&l.a.createElement(S,{resourceDefinitions:T,isOpen:A,handleClose:function(){return V({rdOpen:!1})},permission:B})))};C.propTypes={fetchRoles:p.a.func,fetchRoleForPrincipal:p.a.func,fetchUsers:p.a.func,roles:p.a.object,isLoading:p.a.bool,rolesWithAccess:p.a.object,filters:p.a.arrayOf(p.a.object).isRequired,setFilters:p.a.func.isRequired,apps:p.a.arrayOf(p.a.string).isRequired,showResourceDefinitions:p.a.bool};t.a=Object(b.k)(Object(d.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e(Object(v.d)(t))},fetchRoleForPrincipal:function(t){return e(Object(v.b)(t))}}}))(C))},749:function(e,t,n){"use strict";var r=n(8),i=n.n(r),o=n(159),a=n.n(o),c=n(316),s=n.n(c),u=n(714),l=n.n(u),f=n(0),p=n.n(f),d=n(31),b=n.n(d),h=n(123),m=n(12),g=n(723),v=n.n(g),y=n(724),O=n.n(y),j=n(719),w=Object(j.a)();function P(e){return D.apply(this,arguments)}function D(){return(D=O()(v.a.mark((function e(t){var n,r,i,o,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.username,o=t.application,a=void 0===o?"":o,e.next=3,w.getPrincipalAccess(a,i,n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(53),R=n(715),k=n(731),S=n(732);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=function(e){var t=e.filters,n=e.setFilters,r=e.apps,o=e.hasActiveFilters,c=e.showResourceDefinitions,u=Object(f.useState)({rdOpen:!1}),d=l()(u,2),b=d[0],g=b.rdOpen,v=b.rdPermission,y=b.resourceDefinitions,O=d[1],j=Object(f.useRef)([{title:"Application"},{title:"Resource type"},{title:"Operation"}].concat(s()(c?[{title:"Resource definitions"}]:[]))).current,w=Object(h.useDispatch)(),D=Object(h.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),h.shallowEqual),C=D.permissions,x=D.isLoading,A=function(e){var t=e.application,n=a()(e,["application"]),o=(null==t?void 0:t.length)>0?t:r;w(function(e){return{type:m.s,payload:P(e)}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:o.join(",")},n)))},B=function(e){return O({rdOpen:!0,rdPermission:C.data[e].permission,resourceDefinitions:C.data[e].resourceDefinitions})};Object(f.useEffect)((function(){A(E.b)}),[]);var T=(null==C?void 0:C.data)||[];return p.a.createElement(f.Fragment,null,p.a.createElement(R.a,{columns:j,createRows:function(e){return function(e,t,n){return e.reduce((function(e,r,i){var o=r.permission,c=a()(r,["permission"]),u=o.split(":"),d=l()(u,3),b=d[0],h=d[1],m=d[2];return[].concat(s()(e),[{cells:[b,h,m].concat(s()(t?[p.a.createElement(f.Fragment,{key:"rd"},p.a.createElement(k.a,{onClick:function(){return n(i)},access:c}))]:[]))}])}),[])}(e,c,B)},data:T,fetchData:A,filters:t,setFilterValue:n,isLoading:x,pagination:null==C?void 0:C.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!x&&!o&&0===T.length,noDataDescription:["You do not have individual permissions for Red Hat Insights.","Contact your Org. Administrator for more information."]}),p.a.createElement(f.Suspense,{fallback:p.a.createElement(f.Fragment,null)},g&&p.a.createElement(S.default,{resourceDefinitions:y,isOpen:g,handleClose:function(){return O({rdOpen:!1})},permission:v})))};C.propTypes={filters:b.a.arrayOf(b.a.object).isRequired,setFilters:b.a.func.isRequired,apps:b.a.arrayOf(b.a.string).isRequired,hasActiveFilters:b.a.bool,showResourceDefinitions:b.a.bool};t.a=C},853:function(e,t,n){"use strict";n.r(t);var r=n(714),i=n.n(r),o=n(316),a=n.n(o),c=n(0),s=n.n(c),u=n(31),l=n.n(u),f=n(766),p=n(749),d=n(748),b=function(e){var t=e.apps,n=Object(c.useContext)(f.a),r=Object(c.useState)(""),o=i()(r,2),u=o[0],l=o[1],b=Object(c.useState)([]),h=i()(b,2),m=h[0],g=h[1],v=function(e){var t=e.name,n=e.application;"string"==typeof t&&l(t),n&&g("string"==typeof n?[]:n)},y=function(e){var t=e.apps,n=e.isOrgAdmin,r=e.name,i=void 0===r?"":r,o=e.application;return[{key:"application",value:void 0===o?[]:o,placeholder:"Filter by application",type:"checkbox",items:t.map((function(e){return{label:e,value:e}}))}].concat(a()(n?[{key:"name",type:"text",value:i}]:[]))}({apps:t,isOrgAdmin:n,name:u,application:m});return n?s.a.createElement(d.a,{setFilters:v,filters:y,apps:t,showResourceDefinitions:!0}):s.a.createElement(p.a,{setFilters:v,filters:y,apps:t,hasActiveFilters:u.length>0||m.length>0,showResourceDefinitions:!0})};b.propTypes={apps:l.a.arrayOf(l.a.string).isRequired},t.default=b}}]);
//# sourceMappingURL=8.js.map