(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{714:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var r=n(134),i=n.n(r),o=n(12),a=n.n(o),c=n(713),s=n.n(c),l=n(0),u=n.n(l),f=n(31),p=n.n(f),d=n(62),b=n(375),h=n(373),g=n(666),m=n(80),v=n(320),y=n(665),O=n(160),j=n(667),w=n.n(j),P=n(716),D=n(316),E=n.n(D),k=n(750),R=n.n(k),S=n(664),F=n(426),C=n(61);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return A(A({},e),{},{itemCount:e.count,perPage:e.limit,page:Object(P.d)(e.limit,e.offset),onSetPage:function(i,o){t(A(A({},e),{},{offset:(o-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(A(A({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},A({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n(Object(P.f)(r,!0))}}:{})],checked:Object(P.a)(r,t),onSelect:function(t){!e&&n(Object(P.f)(r,t))}}},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,l=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,b=arguments.length>13?arguments[13]:void 0,h=arguments.length>14?arguments[14]:void 0,g=arguments.length>15?arguments[15]:void 0;return{onChange:b,value:h,items:[].concat(E()(l&&l.length>0?l.map((function(o){var c=o.key,s=o.value,b=o.selected,h=o.placeholder,m=o.type,v=void 0===m?"text":m,y=o.groups,O=o.items;return{label:Object(P.c)(c),type:v,filterValues:{id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:h||"Filter by ".concat(c),value:s,selected:b,isFilterable:u,groups:y,items:O,onChange:function(e,o){var s="string"==typeof o||Array.isArray(o)?o:Object.keys(R()(o[0],(function(e){return e})));t(A(A(A({},r),i),{},a()({offset:0},c,s))),Object(P.b)((function(){return n(A(A(A({},i),{},{offset:0,orderBy:g},l.reduce((function(e,t){return A(A({},e),{},a()({},t.key,t.value))}),{})),{},a()({},c,s)))}))},isDisabled:e,onShowMore:f,showMoreTitle:p,onFilter:d}}})):[{label:Object(P.c)(c||o),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||o),value:r,onChange:function(e,r){t(A(A({},i),{},{offset:0,name:r})),Object(P.b)((function(){return n(A(A({},i),{},{offset:0,name:r,orderBy:g}))}))},isDisabled:e}}]),E()(s||[]))}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return 0!==n.length&&{category:Object(P.c)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,l){var u=s()(c,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return A(A({},e),{},a()({},n,function(e,t,n){return l?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):""}(r,i,n)))}),{});r(A(A({},n),{},{offset:0,name:""},f)),i(A(A({},n),{},{offset:0,orderBy:o,name:""},f))}}},M=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,o=e.isLoading,a=e.data,c=e.titleSingular,s=e.filterValue,l=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,b=e.toolbarButtons,h=e.filterPlaceholder,g=e.filterItems,m=e.filters,v=e.isFilterable,y=e.onShowMore,O=e.showMoreTitle,j=e.onFilter,w=e.onChange,P=e.value,D=e.hideFilterChips;return u.a.createElement(S.PrimaryToolbar,i()({},t&&{bulkSelect:B(o,n,r,a)},{filterConfig:V(o,l,p,s,f,c,h,g,m,v,y,O,j,w,P,d),actionsConfig:{actions:b()}},!o&&{pagination:T(f,p,s,d)},(s.length>0||m&&m.length>0)&&!D&&{activeFiltersConfig:q(s,m,f,l,p,d)}))};M.propTypes={isSelectable:p.a.bool,checkedRows:p.a.array,setCheckedItems:p.a.func,isLoading:p.a.bool,data:p.a.array,titleSingular:p.a.string,filterValue:p.a.oneOfType([p.a.array,p.a.string]),setFilterValue:p.a.func,filters:p.a.arrayOf(p.a.shape({value:p.a.oneOfType([p.a.string,p.a.number,p.a.array]),key:p.a.string,placeholder:p.a.string})),isFilterable:p.a.bool,onShowMore:p.a.func,showMoreTitle:p.a.string,onFilter:p.a.func,onChange:p.a.func,value:p.a.any,pagination:p.a.shape({limit:p.a.number,offset:p.a.number,count:p.a.number}),sortBy:p.a.string,filterItems:F.ConditionalFilter.propTypes.items,filterPlaceholder:p.a.string,isCollapsible:p.a.bool,fetchData:p.a.func,toolbarButtons:p.a.func,hideFilterChips:p.a.bool},M.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:C.b,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};var L=M,I=n(159),_=n.n(I),W=n(162),N=n(161),U=n(319),z=n(318),J=n(317),G=n.n(J),H=function(e){var t=e.title,n=e.icon,r=e.description,o=e.actions,a=_()(e,["title","icon","description","actions"]);return u.a.createElement(W.EmptyState,i()({variant:W.EmptyStateVariant.full},a),u.a.createElement(z.EmptyStateIcon,{icon:n||G.a}),u.a.createElement(N.Title,{headingLevel:"h5",size:"lg"},t),u.a.createElement(U.EmptyStateBody,null,r.map((function(e,t){return u.a.createElement(u.a.Fragment,{key:t},e," ",u.a.createElement("br",null))}))),o)};H.propTypes={icon:p.a.func,title:p.a.node,description:p.a.node,actions:p.a.arrayOf(p.a.node),className:p.a.string};var Y=H;n(728);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,o=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,j=e.areActionsDisabled,D=e.routes,E=e.titlePlural,k=e.titleSingular,R=e.pagination,S=e.filterValue,F=e.isLoading,C=e.setFilterValue,x=e.checkedRows,A=e.isSelectable,B=e.fetchData,V=e.setCheckedItems,q=e.isCollapsible,M=e.emptyProps,I=e.filterPlaceholder,_=e.rowWrapper,W=e.filters,N=e.isFilterable,U=e.onShowMore,z=e.showMoreTitle,J=e.onFilter,G=e.onChange,H=e.value,K=e.sortBy,X=e.isExpandable,Z=e.onExpand,$=e.hideFilterChips,ee=e.noData,te=e.noDataDescription,ne=Object(l.useState)({}),re=s()(ne,2),ie=re[0],oe=re[1],ae=Object(l.useState)({index:void 0,direction:void 0}),ce=s()(ae,2),se=ce[0],le=ce[1];Object(l.useEffect)((function(){le(Q(Q({},K),void 0!==se.index&&se))}),[K]);var ue=n(f,ie,x),fe=function(e,t,n,r){var i=r.uuid;return oe((function(e){return Q(Q({},e),{},a()({},i,n))}))};return u.a.createElement(l.Fragment,null,D(),!F&&0===ue.length&&0===S.length&&W.every((function(e){return!e.value}))?u.a.createElement(Y,i()({title:"Configure ".concat(E),icon:w.a,description:["To configure user access to applications","create at least one ".concat(k)],actions:c()[0]},M)):u.a.createElement(l.Fragment,null,u.a.createElement(L,{isSelectable:A,checkedRows:x,setCheckedItems:V,isLoading:F||ee,data:f,titleSingular:k,filterValue:S,setFilterValue:C,sortBy:void 0!==se.index&&se.index-A>=0&&"".concat("desc"===se.direction?"-":"").concat(o[se.index-A].key)||void 0,pagination:R,fetchData:B,toolbarButtons:c,filterPlaceholder:I,filters:W,isFilterable:N,onShowMore:U,showMoreTitle:z,onFilter:J,onChange:G,value:H,hideFilterChips:$}),F?u.a.createElement(O.d,null):u.a.createElement(d.b,i()({canSelectAll:!1,"aria-label":"".concat(E," table"),variant:t?d.e.compact:null,borders:r},q&&{onCollapse:fe},A&&ue.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,o=s()(r.cells,1)[0];return V(Object(P.f)([{uuid:i,name:o}],t))}},X&&{onExpand:Z},{rows:ue.length>0?ue:[{fullWidth:!0,cells:[{title:u.a.createElement(Y,{title:"No matching ".concat(E," found"),description:ee&&te?te:["This filter criteria matches no ".concat(E,"."),"Try changing your filter settings."],actions:ee&&te?void 0:[u.a.createElement(y.EmptyStatePrimary,{key:"clear-filters"},u.a.createElement(m.Button,{variant:"link",onClick:function(){C(Q(Q({},R),{},{offset:0,name:""})),B(Q(Q({},R),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:o.length+Boolean(fe)}}]}],cells:o},ue.length>0&&{actionResolver:p},{areActionsDisabled:j,rowWrapper:_,sortBy:se,onSort:function(e,t,n){le({index:t,direction:n}),B(Q(Q({},R),{},{offset:0,name:S,orderBy:"".concat("desc"===n?"-":"").concat(o[t-A].key)}))}}),u.a.createElement(b.a,null),u.a.createElement(h.a,null)),!R.noBottom&&u.a.createElement(g.TableToolbar,null,!F&&u.a.createElement(v.Pagination,i()({},T(R,B,S),{variant:"bottom",dropDirection:"up"})))))};X.propTypes=Q(Q({},L.propTypes),{},{rowWrapper:p.a.any,isCompact:p.a.bool,borders:p.a.bool,createRows:p.a.func.isRequired,columns:p.a.array.isRequired,titlePlural:p.a.string,routes:p.a.func,actionResolver:p.a.func,areActionsDisabled:p.a.func,pagination:p.a.shape({noBottom:p.a.bool}),isExpandable:p.a.bool,onExpand:p.a.func,hideFilterChips:p.a.bool,noDataDescription:p.a.arrayOf(p.a.node)}),X.defaultProps=Q(Q({},L.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1})},715:function(e,t,n){(t=n(4)(!1)).push([e.i,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},716:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return m}));var r=n(316),i=n.n(r),o=n(12),a=n.n(o),c=n(713),s=n.n(c),l=n(663);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=s()(t,2),r=n[0],i=n[1];return f(f({},e),i&&a()({},r,i))}),{})},b=n.n(l)()((function(e){return e()})),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return 0!==e.length&&e.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||!(0===e.length||!e.some((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))})))&&null},g=function(e,t){return function(n){return t?[].concat(i()(n),i()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},m=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},717:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return p}));var r=n(17),i=n(724),o=function(e){return{type:r.k,payload:i.b(e)}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:i.d(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:i.e(e)}},s=function(e){return{type:r.w,payload:i.f(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."}}}}},l=function(e){return{type:r.p,payload:i.b(e)}},u=function(e){return{type:r.o,payload:i.c(e)}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.n,payload:i.d(e)}},p=function(e,t){return{type:r.A,payload:i.g(e,t)}}},719:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h}));var r=n(662),i=n.n(r),o=n(661),a=new o.PrincipalApi(void 0,"/api/rbac/v1",i.a),c=new o.GroupApi(void 0,"/api/rbac/v1",i.a),s=new o.RoleApi(void 0,"/api/rbac/v1",i.a),l=(new o.PolicyApi(void 0,"/api/rbac/v1",i.a),new o.AccessApi(void 0,"/api/rbac/v1",i.a)),u=new o.PermissionApi(void 0,"/api/rbac/v1",i.a);function f(){return a}function p(){return c}function d(){return s}function b(){return l}function h(){return u}},724:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return D}));var r=n(722),i=n.n(r),o=n(12),a=n.n(o),c=n(723),s=n.n(c),l=n(719);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Object(l.e)();function d(e){return b.apply(this,arguments)}function b(){return(b=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=e.limit,n=e.offset,r=e.name,i=e.nameMatch,o=e.scope,a=e.orderBy,c=e.addFields,s=e.username,l=e.application,u=e.options;return p.listRoles(t,n,r,i,o,a,c,s,l,u)}function g(e){return m.apply(this,arguments)}function m(){return(m=s()(i.a.mark((function e(t){var n,r,o,a,c,s,l,u,d,b,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,o=t.name,a=t.nameMatch,c=t.scope,s=void 0===c?"account":c,l=t.orderBy,u=t.addFields,d=void 0===u?["groups_in_count"]:u,b=t.username,h=t.options,e.t0=f,e.t1=f,e.t2={},e.next=6,p.listRoles(n,r,o,a,s,l,d,b,h);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return(P=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=s()(i.a.mark((function e(t,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRoleAccess(t);case 2:return r=e.sent,o=r.data,e.abrupt("return",p.updateRole(t,f(f({},n),{},{access:o})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},728:function(e,t,n){var r=n(5),i=n(715);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=r(i,o);if(!i.locals||e.hot.invalidate){var c=i.locals;e.hot.accept(715,(function(){"string"==typeof(i=(i=n(715)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,i.locals)?(c=i.locals,a(i)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=i.locals||{}},730:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(31),a=n.n(o),c=n(80),s=function(e){var t=e.onClick,n=e.access;return i.a.createElement(c.Button,{onClick:t,variant:"link",isDisabled:0===n.resourceDefinitions.length},n.resourceDefinitions.length||"N/A")};s.propTypes={onClick:a.a.func.isRequired,access:a.a.shape({resourceDefinitions:a.a.array.isRequired}).isRequired},t.a=s},731:function(e,t,n){"use strict";n.r(t);var r=n(12),i=n.n(r),o=n(713),a=n.n(o),c=n(80),s=n(425),l=n(0),u=n.n(l),f=n(31),p=n.n(f),d=n(714),b=n(61);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.isOpen,n=e.handleClose,r=e.permission,i=e.resourceDefinitions,o=Object(l.useState)((function(){return{filterValue:"",rows:i.map((function(e){return e.attributeFilter.value})).slice(0,b.b.limit),pagination:g(g({},b.b),{},{count:i.length})}})),f=a()(o,2),p=f[0],h=p.rows,m=p.pagination,v=p.filterValue,y=f[1],O=function(e){var t=e.name,n=void 0===t?"":t,r=e.limit,o=e.offset,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return y((function(e){var t=e.pagination,c=e.filterValue,s=i.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(n)})).slice(o,r);return{rows:s,filterValue:a?n:c,pagination:g(g({},t),{},{offset:a?0:o,limit:r,count:s.length})}}))};return u.a.createElement(s.Modal,{actions:[u.a.createElement(c.Button,{key:"close-action",variant:"primary",onClick:n},"Close")],variant:"large",isOpen:t,onClose:n,title:"Resource definitions",description:u.a.createElement("p",null,"View resource definitions for the ",u.a.createElement("strong",null,r)," permission")},u.a.createElement(d.a,{columns:[""],data:h,filterValue:v,setFilterValue:function(e){return O(e,!0)},pagination:m,noData:0===i.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(r," permission")],fetchData:O}))};m.propTypes={isOpen:p.a.bool,handleClose:p.a.func.isRequired,permission:p.a.string.isRequired,resourceDefinitions:p.a.arrayOf(p.a.shape({attributeFilter:p.a.shape({value:p.a.string.isRequired}).isRequired})).isRequired},t.default=m},747:function(e,t,n){"use strict";var r=n(12),i=n.n(r),o=n(316),a=n.n(o),c=n(713),s=n.n(c),l=n(0),u=n.n(l),f=n(31),p=n.n(f),d=n(122),b=n(39),h=n(762),g=n.n(h),m=n(714),v=n(717),y=n(160),O=n(362),j=n(361),w=n(62),P=n(375),D=n(373),E=n(730);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=Object(l.lazy)((function(){return Promise.resolve().then(n.bind(null,731))})),F=["Roles","Description",{title:"Permissions",cellTransforms:[O.a,Object(j.a)(20)]}],C=function(e){var t=e.fetchRoles,n=e.fetchRoleForPrincipal,r=e.roles,o=e.isLoading,c=e.rolesWithAccess,f=e.filters,p=e.setFilters,d=e.apps,b=e.showResourceDefinitions,h=Object(l.useState)({}),v=s()(h,2),O=v[0],j=v[1],k=Object(l.useState)({rdOpen:!1}),C=s()(k,2),x=C[0],A=x.rdOpen,T=x.rdPermission,B=x.resourceDefinitions,V=C[1];Object(l.useEffect)((function(){t({limit:20,offset:0,scope:"principal",application:d.join(",")})}),[]);var q=Object(l.useCallback)(g()((function(e,n,r,i,o){var a=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:n,name:r,application:a.join(","),addFields:o})}),800),[]);return u.a.createElement(l.Fragment,null,u.a.createElement(m.a,{filters:f,columns:F,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,o,a){o?j((function(e){return R(R({},e),{},i()({},a.uuid,-1))})):(j((function(e){return R(R({},e),{},i()({},a.uuid,r))})),2===r&&n(a.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,n){var r=t.uuid,i=t.name,o=t.description,s=t.accessCount;return[].concat(a()(e),[{uuid:r,cells:[{title:i,props:{component:"th",isOpen:!1}},{title:o,props:{isOpen:!1}},{title:s,props:{isOpen:2===O[r]}}]},{uuid:"".concat(r,"-groups"),parent:2*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:(null==c?void 0:c[r])?u.a.createElement(w.b,{"aria-label":"Simple Table",borders:!1,variant:w.e.compact,cells:["Application","Resource type","Operation"].concat(a()(b?["Resource definitions"]:[])),rows:c[r].access.map((function(e){return{cells:[].concat(a()(e.permission.split(":")),a()(b?[u.a.createElement(l.Fragment,{key:"rd"},u.a.createElement(E.a,{onClick:function(){return V({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},u.a.createElement(P.a,null),u.a.createElement(D.a,null)):u.a.createElement(y.d,null)}]}])}),[])},data:r.data,fetchData:function(e){var t=e.limit,n=e.offset,r=e.name,i=e.application;q(t,n,r,i)},setFilterValue:p,isLoading:o,pagination:r.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}),u.a.createElement(l.Suspense,{fallback:u.a.createElement(l.Fragment,null)},A&&u.a.createElement(S,{resourceDefinitions:B,isOpen:A,handleClose:function(){return V({rdOpen:!1})},permission:T})))};C.propTypes={fetchRoles:p.a.func,fetchRoleForPrincipal:p.a.func,fetchUsers:p.a.func,roles:p.a.object,isLoading:p.a.bool,rolesWithAccess:p.a.object,filters:p.a.arrayOf(p.a.object).isRequired,setFilters:p.a.func.isRequired,apps:p.a.arrayOf(p.a.string).isRequired,showResourceDefinitions:p.a.bool};t.a=Object(b.k)(Object(d.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e(Object(v.d)(t))},fetchRoleForPrincipal:function(t){return e(Object(v.b)(t))}}}))(C))},748:function(e,t,n){"use strict";var r=n(12),i=n.n(r),o=n(159),a=n.n(o),c=n(316),s=n.n(c),l=n(713),u=n.n(l),f=n(0),p=n.n(f),d=n(31),b=n.n(d),h=n(122),g=n(17),m=n(722),v=n.n(m),y=n(723),O=n.n(y),j=n(719),w=Object(j.a)();function P(e){return D.apply(this,arguments)}function D(){return(D=O()(v.a.mark((function e(t){var n,r,i,o,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.username,o=t.application,a=void 0===o?"":o,e.next=3,w.getPrincipalAccess(a,i,n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(61),k=n(714),R=n(730),S=n(731);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=function(e){var t=e.filters,n=e.setFilters,r=e.apps,o=e.hasActiveFilters,c=e.showResourceDefinitions,l=Object(f.useState)({rdOpen:!1}),d=u()(l,2),b=d[0],m=b.rdOpen,v=b.rdPermission,y=b.resourceDefinitions,O=d[1],j=Object(f.useRef)([{title:"Application"},{title:"Resource type"},{title:"Operation"}].concat(s()(c?[{title:"Resource definitions"}]:[]))).current,w=Object(h.useDispatch)(),D=Object(h.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),h.shallowEqual),C=D.permissions,x=D.isLoading,A=function(e){var t=e.application,n=a()(e,["application"]),o=(null==t?void 0:t.length)>0?t:r;w(function(e){return{type:g.s,payload:P(e)}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:o.join(",")},n)))},T=function(e){return O({rdOpen:!0,rdPermission:C.data[e].permission,resourceDefinitions:C.data[e].resourceDefinitions})};Object(f.useEffect)((function(){A(E.b)}),[]);var B=(null==C?void 0:C.data)||[];return p.a.createElement(f.Fragment,null,p.a.createElement(k.a,{columns:j,createRows:function(e){return function(e,t,n){return e.reduce((function(e,r,i){var o=r.permission,c=a()(r,["permission"]),l=o.split(":"),d=u()(l,3),b=d[0],h=d[1],g=d[2];return[].concat(s()(e),[{cells:[b,h,g].concat(s()(t?[p.a.createElement(f.Fragment,{key:"rd"},p.a.createElement(R.a,{onClick:function(){return n(i)},access:c}))]:[]))}])}),[])}(e,c,T)},data:B,fetchData:A,filters:t,setFilterValue:n,isLoading:x,pagination:null==C?void 0:C.meta,titlePlural:"permissions",titleSingular:"permission",noData:!x&&!o&&0===B.length,noDataDescription:["You do not have individual permissions for Red Hat Insights.","Contact your Org. Administrator for more information."]}),p.a.createElement(f.Suspense,{fallback:p.a.createElement(f.Fragment,null)},m&&p.a.createElement(S.default,{resourceDefinitions:y,isOpen:m,handleClose:function(){return O({rdOpen:!1})},permission:v})))};C.propTypes={filters:b.a.arrayOf(b.a.object).isRequired,setFilters:b.a.func.isRequired,apps:b.a.arrayOf(b.a.string).isRequired,hasActiveFilters:b.a.bool,showResourceDefinitions:b.a.bool};t.a=C},848:function(e,t,n){"use strict";n.r(t);var r=n(713),i=n.n(r),o=n(316),a=n.n(o),c=n(0),s=n.n(c),l=n(31),u=n.n(l),f=n(763),p=n(748),d=n(747),b=function(e){var t=e.apps,n=Object(c.useContext)(f.a),r=Object(c.useState)(""),o=i()(r,2),l=o[0],u=o[1],b=Object(c.useState)([]),h=i()(b,2),g=h[0],m=h[1],v=function(e){var t=e.name,n=e.application;"string"==typeof t&&u(t),n&&m("string"==typeof n?[]:n)},y=function(e){var t=e.apps,n=e.isOrgAdmin,r=e.name,i=void 0===r?"":r,o=e.application;return[{key:"application",value:void 0===o?[]:o,placeholder:"Filter by application",type:"checkbox",items:t.map((function(e){return{label:e,value:e}}))}].concat(a()(n?[{key:"name",type:"text",value:i}]:[]))}({apps:t,isOrgAdmin:n,name:l,application:g});return n?s.a.createElement(d.a,{setFilters:v,filters:y,apps:t,showResourceDefinitions:!0}):s.a.createElement(p.a,{setFilters:v,filters:y,apps:t,hasActiveFilters:l.length>0||g.length>0,showResourceDefinitions:!0})};b.propTypes={apps:u.a.arrayOf(u.a.string).isRequired},t.default=b}}]);
//# sourceMappingURL=9.js.map