(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{801:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var r=n(160),i=n.n(r),a=n(10),o=n.n(a),c=n(800),s=n.n(c),u=n(0),l=n.n(u),f=n(29),p=n.n(f),d=n(61),b=n(420),m=n(421),h=n(743),g=n(113),v=n(366),y=n(742),O=n(190),j=n(744),w=n.n(j),P=n(804),D=n(361),E=n.n(D),R=n(837),k=n.n(R),S=n(741),F=n(482),C=n(56);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return A(A({},e),{},{itemCount:e.count,perPage:e.limit,page:Object(P.d)(e.limit,e.offset),onSetPage:function(i,a){t(A(A({},e),{},{offset:(a-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,a){t(A(A({},e),{},{offset:0,limit:a,name:n,orderBy:r}))}})},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},A({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n(Object(P.f)(r,!0))}}:{})],checked:Object(P.a)(r,t),onSelect:function(t){!e&&n(Object(P.f)(r,t))}}},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,u=arguments.length>8?arguments[8]:void 0,l=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,b=arguments.length>13?arguments[13]:void 0,m=arguments.length>14?arguments[14]:void 0,h=arguments.length>15?arguments[15]:void 0;return{onChange:b,value:m,items:[].concat(E()(u&&u.length>0?u.map((function(a){var c=a.key,s=a.value,b=a.selected,m=a.placeholder,g=a.type,v=void 0===g?"text":g,y=a.groups,O=a.items;return{label:Object(P.c)(c),type:v,filterValues:A(A({id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:m||"Filter by ".concat(c),value:s,selected:b},"text"!==v?{isFilterable:l,onShowMore:f,showMoreTitle:p,onFilter:d}:{}),{},{groups:y,items:O,onChange:function(e,a){var s="string"==typeof a||Array.isArray(a)?a:Object.keys(k()(a[0],(function(e){return e})));t(A(A(A({},r),i),{},o()({offset:0},c,s))),Object(P.b)((function(){return n(A(A(A({},i),{},{offset:0,orderBy:h},u.reduce((function(e,t){return A(A({},e),{},o()({},t.key,t.value))}),{})),{},o()({},c,s)))}))},isDisabled:e})}})):[{label:Object(P.c)(c||a),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||a),value:r,onChange:function(e,r){t(A(A({},i),{},{offset:0,name:r})),Object(P.b)((function(){return n(A(A({},i),{},{offset:0,name:r,orderBy:h}))}))},isDisabled:e}}]),E()(s||[]))}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},a=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:Object(P.c)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,u){var l=s()(c,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return A(A({},e),{},o()({},n,function(e,t,n){return u?"group"===t||"checkbox"===t?[]:"":n!==l.type?e:"checkbox"===t?e.filter((function(e){var t;return e!==(null===(t=l.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,i,n)))}),{});r(A(A({},n),{},{offset:0,name:""},f)),i(A(A({},n),{},{offset:0,orderBy:a,name:""},f))}}},I=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,a=e.isLoading,o=e.data,c=e.titleSingular,s=e.filterValue,u=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,b=e.toolbarButtons,m=e.filterPlaceholder,h=e.filterItems,g=e.filters,v=e.isFilterable,y=e.onShowMore,O=e.showMoreTitle,j=e.onFilter,w=e.onChange,P=e.value,D=e.hideFilterChips;return l.a.createElement(S.PrimaryToolbar,i()({},t&&{bulkSelect:B(a,n,r,o)},{filterConfig:V(a,u,p,s,f,c,m,h,g,v,y,O,j,w,P,d),actionsConfig:{actions:b()}},!a&&{pagination:T(f,p,s,d)},(s.length>0||g&&g.length>0)&&!D&&{activeFiltersConfig:q(s,g,f,u,p,d)}))};I.propTypes={isSelectable:p.a.bool,checkedRows:p.a.array,setCheckedItems:p.a.func,isLoading:p.a.bool,data:p.a.array,titleSingular:p.a.string,filterValue:p.a.oneOfType([p.a.array,p.a.string]),setFilterValue:p.a.func,filters:p.a.arrayOf(p.a.shape({value:p.a.oneOfType([p.a.string,p.a.number,p.a.array]),key:p.a.string,placeholder:p.a.string})),isFilterable:p.a.bool,onShowMore:p.a.func,showMoreTitle:p.a.string,onFilter:p.a.func,onChange:p.a.func,value:p.a.any,pagination:p.a.shape({limit:p.a.number,offset:p.a.number,count:p.a.number}),sortBy:p.a.string,filterItems:F.ConditionalFilter.propTypes.items,filterPlaceholder:p.a.string,isCollapsible:p.a.bool,fetchData:p.a.func,toolbarButtons:p.a.func,hideFilterChips:p.a.bool},I.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:C.b,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};var M=I,L=n(161),_=n.n(L),W=n(192),H=n(365),N=n(364),U=n(191),J=n(362),z=n.n(J),G=function(e){var t=e.title,n=e.icon,r=e.description,a=e.actions,o=_()(e,["title","icon","description","actions"]);return l.a.createElement(W.EmptyState,i()({variant:W.EmptyStateVariant.full},o),l.a.createElement(N.EmptyStateIcon,{icon:n||z.a}),l.a.createElement(U.Title,{headingLevel:"h4"},t),l.a.createElement(H.EmptyStateBody,null,r.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},e," ",l.a.createElement("br",null))}))),a)};G.propTypes={icon:p.a.func,title:p.a.node,description:p.a.node,actions:p.a.oneOfType([p.a.node,p.a.arrayOf(p.a.node)]),className:p.a.string};var Y=G;n(813);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,a=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,j=e.areActionsDisabled,D=e.routes,E=e.titlePlural,R=e.titleSingular,k=e.pagination,S=e.filterValue,F=e.isLoading,C=e.setFilterValue,x=e.checkedRows,A=e.isSelectable,B=e.fetchData,V=e.setCheckedItems,q=e.isCollapsible,I=e.emptyProps,L=e.filterPlaceholder,_=e.rowWrapper,W=e.filters,H=e.isFilterable,N=e.onShowMore,U=e.showMoreTitle,J=e.onFilter,z=e.onChange,G=e.value,K=e.sortBy,X=e.isExpandable,Z=e.onExpand,$=e.hideFilterChips,ee=e.hideHeader,te=e.noData,ne=e.noDataDescription,re=e.ouiaId,ie=Object(u.useState)({}),ae=s()(ie,2),oe=ae[0],ce=ae[1],se=Object(u.useState)({index:void 0,direction:void 0}),ue=s()(se,2),le=ue[0],fe=ue[1];Object(u.useEffect)((function(){fe(Q(Q({},K),void 0!==le.index&&le))}),[K]);var pe=n(f,oe,x),de=function(e,t,n,r){var i=r.uuid;return ce((function(e){return Q(Q({},e),{},o()({},i,n))}))};return l.a.createElement(u.Fragment,null,D(),!F&&0===pe.length&&0===S.length&&W.every((function(e){return!e.value}))?l.a.createElement(Y,i()({title:"Configure ".concat(E),icon:w.a,description:["To configure user access to applications","create at least one ".concat(R)],actions:c()[0]},I)):l.a.createElement(u.Fragment,null,l.a.createElement(M,{isSelectable:A,checkedRows:x,setCheckedItems:V,isLoading:F||te,data:f,titleSingular:R,filterValue:S,setFilterValue:C,sortBy:void 0!==le.index&&le.index-A>=0&&"".concat("desc"===le.direction?"-":"").concat(a[le.index-A].key)||void 0,pagination:k,fetchData:B,toolbarButtons:c,filterPlaceholder:L,filters:W,isFilterable:H,onShowMore:N,showMoreTitle:U,onFilter:J,onChange:z,value:G,hideFilterChips:$}),F?l.a.createElement(O.d,null):l.a.createElement(d.c,i()({canSelectAll:!1,"aria-label":"".concat(E," table"),variant:t?d.f.compact:null,borders:r},q&&{onCollapse:de},A&&pe.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,a=s()(r.cells,1)[0];return V(Object(P.f)([{uuid:i,name:a}],t))}},X&&{onExpand:Z},{rows:pe.length>0?pe:[{fullWidth:!0,cells:[{title:l.a.createElement(Y,{title:"No matching ".concat(E," found"),description:te&&ne?ne:["This filter criteria matches no ".concat(E,"."),"Try changing your filter settings."],actions:te&&ne?void 0:[l.a.createElement(y.EmptyStatePrimary,{key:"clear-filters"},l.a.createElement(g.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){C(Q(Q({},k),{},{offset:0,name:""})),B(Q(Q({},k),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:a.length+Boolean(de)}}]}],cells:a},pe.length>0&&{actionResolver:p},{areActionsDisabled:j,rowWrapper:_,sortBy:le,ouiaId:re,onSort:function(e,t,n){fe({index:t,direction:n}),B(Q(Q({},k),{},{offset:0,name:S,orderBy:"".concat("desc"===n?"-":"").concat(a[t-A].key)}))}}),!ee&&l.a.createElement(b.a,null),l.a.createElement(m.a,null)),!k.noBottom&&l.a.createElement(h.TableToolbar,null,!F&&l.a.createElement(v.Pagination,i()({},T(k,B,S),{variant:"bottom",dropDirection:"up"})))))};X.propTypes=Q(Q({},M.propTypes),{},{sortBy:p.a.shape({directions:p.a.string,index:p.a.number}),rowWrapper:p.a.any,isCompact:p.a.bool,borders:p.a.bool,createRows:p.a.func.isRequired,columns:p.a.array.isRequired,titlePlural:p.a.string,routes:p.a.func,actionResolver:p.a.func,areActionsDisabled:p.a.func,pagination:p.a.shape({noBottom:p.a.bool}),isExpandable:p.a.bool,onExpand:p.a.func,hideFilterChips:p.a.bool,hideHeader:p.a.bool,noDataDescription:p.a.arrayOf(p.a.node)}),X.defaultProps=Q(Q({},M.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,hideHeader:!1})},802:function(e,t,n){(t=n(5)(!1)).push([e.i,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"h",(function(){return d}));var r=n(13),i=n(811),a=function(e){return{type:r.c,payload:i.a(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding role",dismissDelay:8e3,dismissable:!1,description:"The role was added successfully."},rejected:{variant:"danger",title:"Failed adding role",dismissDelay:8e3,dismissable:!1,description:"The role was not added successfuly."}}}}},o=function(e){return{type:r.l,payload:i.b(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.m,payload:i.d(e)}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.m,payload:i.e(e)}},u=function(e){return{type:r.C,payload:i.f(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."}}}}},l=function(e){return{type:r.q,payload:i.b(e)}},f=function(e){return{type:r.p,payload:i.c(e)}},p=function(e,t,n){return{type:r.H,payload:i.h(e,t,n)}},d=function(e,t){return{type:r.H,payload:i.g(e,t)}}},804:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return g}));var r=n(361),i=n.n(r),a=n(10),o=n.n(a),c=n(800),s=n.n(c),u=n(740);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=s()(t,2),r=n[0],i=n[1];return f(f({},e),i&&o()({},r,i))}),{})},b=n.n(u)()((function(e){return e()})),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return 0!==e.length&&e.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||!(0===e.length||!e.some((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))})))&&null},h=function(e,t){return function(n){return t?[].concat(i()(n),i()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},806:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var r=n(739),i=n.n(r),a=n(738),o=n(481),c=new a.PrincipalApi(void 0,"/api/rbac/v1",i.a),s=new a.GroupApi(void 0,"/api/rbac/v1",i.a),u=new a.RoleApi(void 0,"/api/rbac/v1",i.a),l=(new a.PolicyApi(void 0,"/api/rbac/v1",i.a),new a.AccessApi(void 0,"/api/rbac/v1",i.a)),f=(new a.PermissionApi(void 0,"/api/rbac/v1",i.a),new o.BaseAPI(void 0,"/api/cost-management/v1",i.a));function p(){return c}function d(){return s}function b(){return u}function m(){return l}function h(){return{getResourceTypes:function(){return f.axios.get("".concat("/api/cost-management/v1","/resource-types/"))},getResource:function(e){return f.axios.get("".concat(e))}}}},811:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return w})),n.d(t,"h",(function(){return D})),n.d(t,"g",(function(){return E}));var r=n(809),i=n.n(r),a=n(10),o=n.n(a),c=n(810),s=n.n(c),u=n(806);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Object(u.e)();function d(e){return b.apply(this,arguments)}function b(){return(b=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t=e.limit,n=e.offset,r=e.name,i=e.nameMatch,a=e.scope,o=e.orderBy,c=e.addFields,s=e.username,u=e.application,l=e.permission,f=e.options;return p.listRoles(t,n,r,i,a,o,c,s,u,l,f)}function h(e){return g.apply(this,arguments)}function g(){return(g=s()(i.a.mark((function e(t){var n,r,a,o,c,s,u,l,d,b,m,h,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,a=t.name,o=t.nameMatch,c=t.scope,s=void 0===c?"account":c,u=t.orderBy,l=t.addFields,d=void 0===l?["groups_in_count"]:l,b=t.username,m=t.options,h=t.permission,g=t.application,e.t0=f,e.t1=f,e.t2={},e.next=6,p.listRoles(n,r,a,o,s,u,d,b,g,h,m);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return(P=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=s()(i.a.mark((function e(t,n,r){var a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRoleAccess(t);case 2:return a=e.sent,o=a.data,e.abrupt("return",p.updateRole(t,r?f(f({},n),{},{access:o}):n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),E=function(){var e=s()(i.a.mark((function e(t,n){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRoleAccess(t.uuid);case 2:return r=e.sent,a=r.data,o=f(f({},t),{},{access:a.filter((function(e){return!n.includes(e.permission)}))}),e.abrupt("return",p.updateRole(t.uuid,f({},o)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},813:function(e,t,n){var r=n(6),i=n(802);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},o=r(i,a);if(!i.locals||e.hot.invalidate){var c=i.locals;e.hot.accept(802,(function(){"string"==typeof(i=(i=n(802)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,i.locals)?(c=i.locals,o(i)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=i.locals||{}},818:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(29),o=n.n(a),c=n(113),s=function(e){var t=e.onClick,n=e.access;return i.a.createElement(c.Button,{onClick:t,variant:"link",isDisabled:0===n.resourceDefinitions.length},n.resourceDefinitions.length||"N/A")};s.propTypes={onClick:o.a.func.isRequired,access:o.a.shape({resourceDefinitions:o.a.array.isRequired}).isRequired},t.a=s},819:function(e,t,n){"use strict";n.r(t);var r=n(10),i=n.n(r),a=n(800),o=n.n(a),c=n(113),s=n(479),u=n(0),l=n.n(u),f=n(29),p=n.n(f),d=n(801),b=n(56);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.isOpen,n=e.handleClose,r=e.permission,i=e.resourceDefinitions,a=Object(u.useState)((function(){return{filterValue:"",rows:i.map((function(e){return e.attributeFilter.value})).slice(0,b.b.limit),pagination:h(h({},b.b),{},{count:i.length})}})),f=o()(a,2),p=f[0],m=p.rows,g=p.pagination,v=p.filterValue,y=f[1],O=function(e){var t=e.name,n=void 0===t?"":t,r=e.limit,a=e.offset,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return y((function(e){var t=e.pagination,c=e.filterValue,s=i.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(n)})).slice(a,r);return{rows:s,filterValue:o?n:c,pagination:h(h({},t),{},{offset:o?0:a,limit:r,count:s.length})}}))};return l.a.createElement(s.Modal,{actions:[l.a.createElement(c.Button,{key:"close-action",variant:"primary",onClick:n},"Close")],variant:"large",isOpen:t,onClose:n,title:"Resource definitions",description:l.a.createElement("p",null,"View resource definitions for the ",l.a.createElement("strong",null,r)," permission")},l.a.createElement(d.a,{columns:[""],data:m,filterValue:v,setFilterValue:function(e){return O(e,!0)},pagination:g,ouiaId:"resource-definition-table",noData:0===i.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(r," permission")],fetchData:O}))};g.propTypes={isOpen:p.a.bool,handleClose:p.a.func.isRequired,permission:p.a.string.isRequired,resourceDefinitions:p.a.arrayOf(p.a.shape({attributeFilter:p.a.shape({value:p.a.string.isRequired}).isRequired})).isRequired},t.default=g},835:function(e,t,n){"use strict";var r=n(10),i=n.n(r),a=n(361),o=n.n(a),c=n(800),s=n.n(c),u=n(0),l=n.n(u),f=n(29),p=n.n(f),d=n(140),b=n(42),m=n(853),h=n.n(m),g=n(801),v=n(803),y=n(190),O=n(411),j=n(410),w=n(61),P=n(420),D=n(421),E=n(818);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=Object(u.lazy)((function(){return Promise.resolve().then(n.bind(null,819))})),F=["Roles","Description",{title:"Permissions",cellTransforms:[O.a,Object(j.a)(20)]}],C=function(e){var t=e.fetchRoles,n=e.fetchRoleForPrincipal,r=e.roles,a=e.isLoading,c=e.rolesWithAccess,f=e.filters,p=e.setFilters,d=e.apps,b=e.showResourceDefinitions,m=Object(u.useState)({}),v=s()(m,2),O=v[0],j=v[1],R=Object(u.useState)({rdOpen:!1}),C=s()(R,2),x=C[0],A=x.rdOpen,T=x.rdPermission,B=x.resourceDefinitions,V=C[1];Object(u.useEffect)((function(){t({limit:20,offset:0,scope:"principal",application:d.join(",")})}),[]);var q=Object(u.useCallback)(h()((function(e,n,r,i,a){var o=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:n,name:r,application:o.join(","),permission:a})}),800),[]);return l.a.createElement(u.Fragment,null,l.a.createElement(g.a,{filters:f,columns:F,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,a,o){a?j((function(e){return k(k({},e),{},i()({},o.uuid,-1))})):(j((function(e){return k(k({},e),{},i()({},o.uuid,r))})),2===r&&n(o.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,n){var r=t.uuid,i=t.name,a=t.description,s=t.accessCount;return[].concat(o()(e),[{uuid:r,cells:[{title:i,props:{component:"th",isOpen:!1}},{title:a,props:{isOpen:!1}},{title:s,props:{isOpen:2===O[r]}}]},{uuid:"".concat(r,"-groups"),parent:2*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:(null==c?void 0:c[r])?l.a.createElement(w.c,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:w.f.compact,cells:["Application","Resource type","Operation"].concat(o()(b?["Resource definitions"]:[])),rows:c[r].access.map((function(e){return{cells:[].concat(o()(e.permission.split(":")),o()(b?[l.a.createElement(u.Fragment,{key:"rd"},l.a.createElement(E.a,{onClick:function(){return V({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},l.a.createElement(P.a,null),l.a.createElement(D.a,null)):l.a.createElement(y.d,null)}]}])}),[])},ouiaId:"roles-table",data:r.data,fetchData:function(e){var t=e.limit,n=e.offset,r=e.name,i=e.application,a=e.permission;q(t,n,r,i,a)},setFilterValue:p,isLoading:a,pagination:r.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}),l.a.createElement(u.Suspense,{fallback:l.a.createElement(u.Fragment,null)},A&&l.a.createElement(S,{resourceDefinitions:B,isOpen:A,handleClose:function(){return V({rdOpen:!1})},permission:T})))};C.propTypes={fetchRoles:p.a.func,fetchRoleForPrincipal:p.a.func,fetchUsers:p.a.func,roles:p.a.object,isLoading:p.a.bool,rolesWithAccess:p.a.object,filters:p.a.arrayOf(p.a.object).isRequired,setFilters:p.a.func.isRequired,apps:p.a.arrayOf(p.a.string).isRequired,showResourceDefinitions:p.a.bool};t.a=Object(b.k)(Object(d.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e(Object(v.e)(t))},fetchRoleForPrincipal:function(t){return e(Object(v.c)(t))}}}))(C))},836:function(e,t,n){"use strict";var r=n(10),i=n.n(r),a=n(161),o=n.n(a),c=n(361),s=n.n(c),u=n(800),l=n.n(u),f=n(0),p=n.n(f),d=n(29),b=n.n(d),m=n(140),h=n(13),g=n(809),v=n.n(g),y=n(810),O=n.n(y),j=n(806),w=Object(j.a)();function P(e){return D.apply(this,arguments)}function D(){return(D=O()(v.a.mark((function e(t){var n,r,i,a,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.username,a=t.application,o=void 0===a?"":a,e.next=3,w.getPrincipalAccess(o,i,n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(56),R=n(801),k=n(818),S=n(819);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=function(e){var t=e.filters,n=e.setFilters,r=e.apps,a=e.hasActiveFilters,c=e.showResourceDefinitions,u=Object(f.useState)({rdOpen:!1}),d=l()(u,2),b=d[0],g=b.rdOpen,v=b.rdPermission,y=b.resourceDefinitions,O=d[1],j=Object(f.useRef)([{title:"Application"},{title:"Resource type"},{title:"Operation"}].concat(s()(c?[{title:"Resource definitions"}]:[]))).current,w=Object(m.useDispatch)(),D=Object(m.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),m.shallowEqual),C=D.permissions,x=D.isLoading,A=function(e){var t=e.application,n=o()(e,["application"]),a=(null==t?void 0:t.length)>0?t:r;w(function(e){return{type:h.t,payload:P(e)}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:a.join(",")},n)))},T=function(e){return O({rdOpen:!0,rdPermission:C.data[e].permission,resourceDefinitions:C.data[e].resourceDefinitions})};Object(f.useEffect)((function(){A(E.b)}),[]);var B=(null==C?void 0:C.data)||[];return p.a.createElement(f.Fragment,null,p.a.createElement(R.a,{columns:j,createRows:function(e){return function(e,t,n){return e.reduce((function(e,r,i){var a=r.permission,c=o()(r,["permission"]),u=a.split(":"),d=l()(u,3),b=d[0],m=d[1],h=d[2];return[].concat(s()(e),[{cells:[b,m,h].concat(s()(t?[p.a.createElement(f.Fragment,{key:"rd"},p.a.createElement(k.a,{onClick:function(){return n(i)},access:c}))]:[]))}])}),[])}(e,c,T)},data:B,fetchData:A,filters:t,setFilterValue:n,isLoading:x,pagination:null==C?void 0:C.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!x&&!a&&0===B.length,noDataDescription:["You do not have individual permissions for Red Hat Insights.","Contact your Org. Administrator for more information."]}),p.a.createElement(f.Suspense,{fallback:p.a.createElement(f.Fragment,null)},g&&p.a.createElement(S.default,{resourceDefinitions:y,isOpen:g,handleClose:function(){return O({rdOpen:!1})},permission:v})))};C.propTypes={filters:b.a.arrayOf(b.a.object).isRequired,setFilters:b.a.func.isRequired,apps:b.a.arrayOf(b.a.string).isRequired,hasActiveFilters:b.a.bool,showResourceDefinitions:b.a.bool};t.a=C},942:function(e,t,n){"use strict";n.r(t);var r=n(800),i=n.n(r),a=n(361),o=n.n(a),c=n(0),s=n.n(c),u=n(29),l=n.n(u),f=n(854),p=n(836),d=n(835),b=function(e){var t=e.apps,n=Object(c.useContext)(f.a),r=Object(c.useState)(""),a=i()(r,2),u=a[0],l=a[1],b=Object(c.useState)([]),m=i()(b,2),h=m[0],g=m[1],v=function(e){var t=e.name,n=e.application;"string"==typeof t&&l(t),n&&g("string"==typeof n?[]:n)},y=function(e){var t=e.apps,n=e.isOrgAdmin,r=e.name,i=void 0===r?"":r,a=e.application;return[{key:"application",value:void 0===a?[]:a,placeholder:"Filter by application",type:"checkbox",items:t.map((function(e){return{label:e,value:e}}))}].concat(o()(n?[{key:"name",type:"text",value:i}]:[]))}({apps:t,isOrgAdmin:n,name:u,application:h});return n?s.a.createElement(d.a,{setFilters:v,filters:y,apps:t,showResourceDefinitions:!0}):s.a.createElement(p.a,{setFilters:v,filters:y,apps:t,hasActiveFilters:u.length>0||h.length>0,showResourceDefinitions:!0})};b.propTypes={apps:l.a.arrayOf(l.a.string).isRequired},t.default=b}}]);
//# sourceMappingURL=9.js.map