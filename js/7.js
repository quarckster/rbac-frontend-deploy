(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10],{714:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var r=n(134),i=n.n(r),o=n(12),a=n.n(o),c=n(713),l=n.n(c),s=n(0),u=n.n(s),f=n(31),p=n.n(f),d=n(62),b=n(375),h=n(373),m=n(668),g=n(80),v=n(321),y=n(667),O=n(159),j=n(669),w=n.n(j),P=n(716),E=n(316),D=n.n(E),k=n(745),S=n.n(k),R=n(666),F=n(426),C=n(61);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return A(A({},e),{},{itemCount:e.count,perPage:e.limit,page:Object(P.d)(e.limit,e.offset),onSetPage:function(i,o){t(A(A({},e),{},{offset:(o-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(A(A({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},A({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n(Object(P.f)(r,!0))}}:{})],checked:Object(P.a)(r,t),onSelect:function(t){!e&&n(Object(P.f)(r,t))}}},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,b=arguments.length>13?arguments[13]:void 0,h=arguments.length>14?arguments[14]:void 0,m=arguments.length>15?arguments[15]:void 0;return{onChange:b,value:h,items:[].concat(D()(s&&s.length>0?s.map((function(o){var c=o.key,l=o.value,b=o.selected,h=o.placeholder,g=o.type,v=void 0===g?"text":g,y=o.groups,O=o.items;return{label:Object(P.c)(c),type:v,filterValues:{id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:h||"Filter by ".concat(c),value:l,selected:b,isFilterable:u,groups:y,items:O,onChange:function(e,o){var l="string"==typeof o||Array.isArray(o)?o:Object.keys(S()(o[0],(function(e){return e})));t(A(A(A({},r),i),{},a()({offset:0},c,l))),Object(P.b)((function(){return n(A(A(A({},i),{},{offset:0,orderBy:m},s.reduce((function(e,t){return A(A({},e),{},a()({},t.key,t.value))}),{})),{},a()({},c,l)))}))},isDisabled:e,onShowMore:f,showMoreTitle:p,onFilter:d}}})):[{label:Object(P.c)(c||o),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||o),value:r,onChange:function(e,r){t(A(A({},i),{},{offset:0,name:r})),Object(P.b)((function(){return n(A(A({},i),{},{offset:0,name:r,orderBy:m}))}))},isDisabled:e}}]),D()(l||[]))}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return 0!==n.length&&{category:Object(P.c)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,s){var u=l()(c,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return A(A({},e),{},a()({},n,function(e,t,n){return s?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):""}(r,i,n)))}),{});r(A(A({},n),{},{offset:0,name:""},f)),i(A(A({},n),{},{offset:0,orderBy:o,name:""},f))}}},M=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,o=e.isLoading,a=e.data,c=e.titleSingular,l=e.filterValue,s=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,b=e.toolbarButtons,h=e.filterPlaceholder,m=e.filterItems,g=e.filters,v=e.isFilterable,y=e.onShowMore,O=e.showMoreTitle,j=e.onFilter,w=e.onChange,P=e.value,E=e.hideFilterChips;return u.a.createElement(R.PrimaryToolbar,i()({},t&&{bulkSelect:B(o,n,r,a)},{filterConfig:V(o,s,p,l,f,c,h,m,g,v,y,O,j,w,P,d),actionsConfig:{actions:b()}},!o&&{pagination:T(f,p,l,d)},(l.length>0||g&&g.length>0)&&!E&&{activeFiltersConfig:q(l,g,f,s,p,d)}))};M.propTypes={isSelectable:p.a.bool,checkedRows:p.a.array,setCheckedItems:p.a.func,isLoading:p.a.bool,data:p.a.array,titleSingular:p.a.string,filterValue:p.a.oneOfType([p.a.array,p.a.string]),setFilterValue:p.a.func,filters:p.a.arrayOf(p.a.shape({value:p.a.oneOfType([p.a.string,p.a.number,p.a.array]),key:p.a.string,placeholder:p.a.string})),isFilterable:p.a.bool,onShowMore:p.a.func,showMoreTitle:p.a.string,onFilter:p.a.func,onChange:p.a.func,value:p.a.any,pagination:p.a.shape({limit:p.a.number,offset:p.a.number,count:p.a.number}),sortBy:p.a.string,filterItems:F.ConditionalFilter.propTypes.items,filterPlaceholder:p.a.string,isCollapsible:p.a.bool,fetchData:p.a.func,toolbarButtons:p.a.func,hideFilterChips:p.a.bool},M.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:C.b,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};var L=M,I=n(160),_=n.n(I),W=n(162),N=n(161),U=n(319),z=n(318),J=n(317),G=n.n(J),H=function(e){var t=e.title,n=e.icon,r=e.description,o=e.actions,a=_()(e,["title","icon","description","actions"]);return u.a.createElement(W.EmptyState,i()({variant:W.EmptyStateVariant.full},a),u.a.createElement(z.EmptyStateIcon,{icon:n||G.a}),u.a.createElement(N.Title,{headingLevel:"h5",size:"lg"},t),u.a.createElement(U.EmptyStateBody,null,r.map((function(e,t){return u.a.createElement(u.a.Fragment,{key:t},e," ",u.a.createElement("br",null))}))),o)};H.propTypes={icon:p.a.func,title:p.a.node,description:p.a.node,actions:p.a.arrayOf(p.a.node),className:p.a.string};var Y=H;n(726);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,o=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,j=e.areActionsDisabled,E=e.routes,D=e.titlePlural,k=e.titleSingular,S=e.pagination,R=e.filterValue,F=e.isLoading,C=e.setFilterValue,x=e.checkedRows,A=e.isSelectable,B=e.fetchData,V=e.setCheckedItems,q=e.isCollapsible,M=e.emptyProps,I=e.filterPlaceholder,_=e.rowWrapper,W=e.filters,N=e.isFilterable,U=e.onShowMore,z=e.showMoreTitle,J=e.onFilter,G=e.onChange,H=e.value,K=e.sortBy,X=e.isExpandable,Z=e.onExpand,$=e.hideFilterChips,ee=e.noData,te=e.noDataDescription,ne=Object(s.useState)({}),re=l()(ne,2),ie=re[0],oe=re[1],ae=Object(s.useState)({index:void 0,direction:void 0}),ce=l()(ae,2),le=ce[0],se=ce[1];Object(s.useEffect)((function(){se(Q(Q({},K),void 0!==le.index&&le))}),[K]);var ue=n(f,ie,x),fe=function(e,t,n,r){var i=r.uuid;return oe((function(e){return Q(Q({},e),{},a()({},i,n))}))};return u.a.createElement(s.Fragment,null,E(),!F&&0===ue.length&&0===R.length&&W.every((function(e){return!e.value}))?u.a.createElement(Y,i()({title:"Configure ".concat(D),icon:w.a,description:["To configure user access to applications","create at least one ".concat(k)],actions:c()[0]},M)):u.a.createElement(s.Fragment,null,u.a.createElement(L,{isSelectable:A,checkedRows:x,setCheckedItems:V,isLoading:F||ee,data:f,titleSingular:k,filterValue:R,setFilterValue:C,sortBy:void 0!==le.index&&le.index-A>=0&&"".concat("desc"===le.direction?"-":"").concat(o[le.index-A].key)||void 0,pagination:S,fetchData:B,toolbarButtons:c,filterPlaceholder:I,filters:W,isFilterable:N,onShowMore:U,showMoreTitle:z,onFilter:J,onChange:G,value:H,hideFilterChips:$}),F?u.a.createElement(O.d,null):u.a.createElement(d.b,i()({canSelectAll:!1,"aria-label":"".concat(D," table"),variant:t?d.e.compact:null,borders:r},q&&{onCollapse:fe},A&&ue.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,o=l()(r.cells,1)[0];return V(Object(P.f)([{uuid:i,name:o}],t))}},X&&{onExpand:Z},{rows:ue.length>0?ue:[{fullWidth:!0,cells:[{title:u.a.createElement(Y,{title:"No matching ".concat(D," found"),description:ee&&te?te:["This filter criteria matches no ".concat(D,"."),"Try changing your filter settings."],actions:ee&&te?void 0:[u.a.createElement(y.EmptyStatePrimary,{key:"clear-filters"},u.a.createElement(g.Button,{variant:"link",onClick:function(){C(Q(Q({},S),{},{offset:0,name:""})),B(Q(Q({},S),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:o.length+Boolean(fe)}}]}],cells:o},ue.length>0&&{actionResolver:p},{areActionsDisabled:j,rowWrapper:_,sortBy:le,onSort:function(e,t,n){se({index:t,direction:n}),B(Q(Q({},S),{},{offset:0,name:R,orderBy:"".concat("desc"===n?"-":"").concat(o[t-A].key)}))}}),u.a.createElement(b.a,null),u.a.createElement(h.a,null)),!S.noBottom&&u.a.createElement(m.TableToolbar,null,!F&&u.a.createElement(v.Pagination,i()({},T(S,B,R),{variant:"bottom",dropDirection:"up"})))))};X.propTypes=Q(Q({},L.propTypes),{},{rowWrapper:p.a.any,isCompact:p.a.bool,borders:p.a.bool,createRows:p.a.func.isRequired,columns:p.a.array.isRequired,titlePlural:p.a.string,routes:p.a.func,actionResolver:p.a.func,areActionsDisabled:p.a.func,pagination:p.a.shape({noBottom:p.a.bool}),isExpandable:p.a.bool,onExpand:p.a.func,hideFilterChips:p.a.bool,noDataDescription:p.a.arrayOf(p.a.node)}),X.defaultProps=Q(Q({},L.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1})},715:function(e,t,n){(t=n(4)(!1)).push([e.i,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},716:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return g}));var r=n(316),i=n.n(r),o=n(12),a=n.n(o),c=n(713),l=n.n(c),s=n(665);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=l()(t,2),r=n[0],i=n[1];return f(f({},e),i&&a()({},r,i))}),{})},b=n.n(s)()((function(e){return e()})),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return 0!==e.length&&e.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||!(0===e.length||!e.some((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))})))&&null},m=function(e,t){return function(n){return t?[].concat(i()(n),i()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},717:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h}));var r=n(662),i=n.n(r),o=n(661),a=new o.PrincipalApi(void 0,"/api/rbac/v1",i.a),c=new o.GroupApi(void 0,"/api/rbac/v1",i.a),l=new o.RoleApi(void 0,"/api/rbac/v1",i.a),s=(new o.PolicyApi(void 0,"/api/rbac/v1",i.a),new o.AccessApi(void 0,"/api/rbac/v1",i.a)),u=new o.PermissionApi(void 0,"/api/rbac/v1",i.a);function f(){return a}function p(){return c}function d(){return l}function b(){return s}function h(){return u}},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return f}));var r=n(17),i=n(725),o=function(e){return{type:r.k,payload:i.b(e)}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:i.d(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:i.e(e)}},l=function(e){return{type:r.w,payload:i.f(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."}}}}},s=function(e){return{type:r.p,payload:i.b(e)}},u=function(e){return{type:r.o,payload:i.c(e)}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.n,payload:i.d(e)}}},725:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return w}));var r=n(12),i=n.n(r),o=n(721),a=n.n(o),c=n(722),l=n.n(c),s=n(717);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Object(s.e)();function d(e){return b.apply(this,arguments)}function b(){return(b=l()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=e.limit,n=e.offset,r=e.name,i=e.nameMatch,o=e.scope,a=e.orderBy,c=e.addFields,l=e.username,s=e.application,u=e.options;return p.listRoles(t,n,r,i,o,a,c,l,s,u)}function m(e){return g.apply(this,arguments)}function g(){return(g=l()(a.a.mark((function e(t){var n,r,i,o,c,l,s,u,d,b,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.name,o=t.nameMatch,c=t.scope,l=void 0===c?"account":c,s=t.orderBy,u=t.addFields,d=void 0===u?["groups_in_count"]:u,b=t.username,h=t.options,e.t0=f,e.t1=f,e.t2={},e.next=6,p.listRoles(n,r,i,o,l,s,d,b,h);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=l()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=l()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return(P=l()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},726:function(e,t,n){var r=n(5),i=n(715);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=r(i,o);if(!i.locals||e.hot.invalidate){var c=i.locals;e.hot.accept(715,(function(){"string"==typeof(i=(i=n(715)).__esModule?i.default:i)&&(i=[[e.i,i,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,i.locals)?(c=i.locals,a(i)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=i.locals||{}},730:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(31),a=n.n(o),c=n(80),l=function(e){var t=e.onClick,n=e.access;return i.a.createElement(c.Button,{onClick:t,variant:"link",isDisabled:0===n.resourceDefinitions.length},n.resourceDefinitions.length||"N/A")};l.propTypes={onClick:a.a.func.isRequired,access:a.a.shape({resourceDefinitions:a.a.array.isRequired}).isRequired},t.a=l},731:function(e,t,n){"use strict";n.r(t);var r=n(12),i=n.n(r),o=n(713),a=n.n(o),c=n(80),l=n(425),s=n(0),u=n.n(s),f=n(31),p=n.n(f),d=n(714),b=n(61);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.isOpen,n=e.handleClose,r=e.permission,i=e.resourceDefinitions,o=Object(s.useState)((function(){return{filterValue:"",rows:i.map((function(e){return e.attributeFilter.value})).slice(0,b.b.limit),pagination:m(m({},b.b),{},{count:i.length})}})),f=a()(o,2),p=f[0],h=p.rows,g=p.pagination,v=p.filterValue,y=f[1],O=function(e){var t=e.name,n=void 0===t?"":t,r=e.limit,o=e.offset,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return y((function(e){var t=e.pagination,c=e.filterValue,l=i.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(n)})).slice(o,r);return{rows:l,filterValue:a?n:c,pagination:m(m({},t),{},{offset:a?0:o,limit:r,count:l.length})}}))};return u.a.createElement(l.Modal,{actions:[u.a.createElement(c.Button,{key:"close-action",variant:"primary",onClick:n},"Close")],variant:"large",isOpen:t,onClose:n,title:"Resource definitions",description:u.a.createElement("p",null,"View resource definitions for the ",u.a.createElement("strong",null,r)," permission")},u.a.createElement(d.a,{columns:[""],data:h,filterValue:v,setFilterValue:function(e){return O(e,!0)},pagination:g,noData:0===i.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(r," permission")],fetchData:O}))};g.propTypes={isOpen:p.a.bool,handleClose:p.a.func.isRequired,permission:p.a.string.isRequired,resourceDefinitions:p.a.arrayOf(p.a.shape({attributeFilter:p.a.shape({value:p.a.string.isRequired}).isRequired})).isRequired},t.default=g},736:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(31),a=n.n(o),c=n(713),l=n.n(c),s=n(316),u=n.n(s),f=n(757),p=n(743),d=n(742),b=function(e){var t=e.apps,n=Object(r.useContext)(f.a),o=Object(r.useState)(""),a=l()(o,2),c=a[0],s=a[1],b=Object(r.useState)([]),h=l()(b,2),m=h[0],g=h[1],v=function(e){var t=e.name,n=e.application;"string"==typeof t&&s(t),n&&g("string"==typeof n?[]:n)},y=function(e){var t=e.apps,n=e.isOrgAdmin,r=e.name,i=void 0===r?"":r,o=e.application;return[{key:"application",value:void 0===o?[]:o,placeholder:"Filter by application",type:"checkbox",items:t.map((function(e){return{label:e,value:e}}))}].concat(u()(n?[{key:"name",type:"text",value:i}]:[]))}({apps:t,isOrgAdmin:n,name:c,application:m});return n?i.a.createElement(d.a,{setFilters:v,filters:y,apps:t}):i.a.createElement(p.a,{setFilters:v,filters:y,apps:t,hasActiveFilters:c.length>0||m.length>0})};b.propTypes={apps:a.a.arrayOf(a.a.string).isRequired};var h=b,m=function(e){var t=e.apps;return i.a.createElement(h,{apps:t})};m.propTypes={apps:a.a.arrayOf(a.a.string).isRequired};t.default=m},742:function(e,t,n){"use strict";var r=n(12),i=n.n(r),o=n(316),a=n.n(o),c=n(713),l=n.n(c),s=n(0),u=n.n(s),f=n(31),p=n.n(f),d=n(122),b=n(39),h=n(756),m=n.n(h),g=n(714),v=n(720),y=n(159),O=n(362),j=n(361),w=n(62),P=n(375),E=n(373),D=n(730);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=Object(s.lazy)((function(){return Promise.resolve().then(n.bind(null,731))})),F=["Roles","Description",{title:"Permissions",cellTransforms:[O.a,Object(j.a)(20)]}],C=function(e){var t=e.fetchRoles,n=e.fetchRoleForPrincipal,r=e.roles,o=e.isLoading,c=e.rolesWithAccess,f=e.filters,p=e.setFilters,d=e.apps,b=e.showResourceDefinitions,h=Object(s.useState)({}),v=l()(h,2),O=v[0],j=v[1],k=Object(s.useState)({rdOpen:!1}),C=l()(k,2),x=C[0],A=x.rdOpen,T=x.rdPermission,B=x.resourceDefinitions,V=C[1];Object(s.useEffect)((function(){t({limit:20,offset:0,scope:"principal",application:d.join(",")})}),[]);var q=Object(s.useCallback)(m()((function(e,n,r,i,o){var a=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:n,name:r,application:a.join(","),addFields:o})}),800),[]);return u.a.createElement(s.Fragment,null,u.a.createElement(g.a,{filters:f,columns:F,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,o,a){o?j((function(e){return S(S({},e),{},i()({},a.uuid,-1))})):(j((function(e){return S(S({},e),{},i()({},a.uuid,r))})),2===r&&n(a.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,n){var r=t.uuid,i=t.name,o=t.description,l=t.accessCount;return[].concat(a()(e),[{uuid:r,cells:[{title:i,props:{component:"th",isOpen:!1}},{title:o,props:{isOpen:!1}},{title:l,props:{isOpen:2===O[r]}}]},{uuid:"".concat(r,"-groups"),parent:2*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:(null==c?void 0:c[r])?u.a.createElement(w.b,{"aria-label":"Simple Table",borders:!1,variant:w.e.compact,cells:["Application","Resource type","Operation"].concat(a()(b?["Resource definitions"]:[])),rows:c[r].access.map((function(e){return{cells:[].concat(a()(e.permission.split(":")),a()(b?[u.a.createElement(s.Fragment,{key:"rd"},u.a.createElement(D.a,{onClick:function(){return V({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},u.a.createElement(P.a,null),u.a.createElement(E.a,null)):u.a.createElement(y.d,null)}]}])}),[])},data:r.data,fetchData:function(e){var t=e.limit,n=e.offset,r=e.name,i=e.application;q(t,n,r,i)},setFilterValue:p,isLoading:o,pagination:r.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}),u.a.createElement(s.Suspense,{fallback:u.a.createElement(s.Fragment,null)},A&&u.a.createElement(R,{resourceDefinitions:B,isOpen:A,handleClose:function(){return V({rdOpen:!1})},permission:T})))};C.propTypes={fetchRoles:p.a.func,fetchRoleForPrincipal:p.a.func,fetchUsers:p.a.func,roles:p.a.object,isLoading:p.a.bool,rolesWithAccess:p.a.object,filters:p.a.arrayOf(p.a.object).isRequired,setFilters:p.a.func.isRequired,apps:p.a.arrayOf(p.a.string).isRequired,showResourceDefinitions:p.a.bool};t.a=Object(b.k)(Object(d.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e(Object(v.d)(t))},fetchRoleForPrincipal:function(t){return e(Object(v.b)(t))}}}))(C))},743:function(e,t,n){"use strict";var r=n(12),i=n.n(r),o=n(160),a=n.n(o),c=n(316),l=n.n(c),s=n(713),u=n.n(s),f=n(0),p=n.n(f),d=n(31),b=n.n(d),h=n(122),m=n(17),g=n(721),v=n.n(g),y=n(722),O=n.n(y),j=n(717),w=Object(j.a)();function P(e){return E.apply(this,arguments)}function E(){return(E=O()(v.a.mark((function e(t){var n,r,i,o,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.username,o=t.application,a=void 0===o?"":o,e.next=3,w.getPrincipalAccess(a,i,n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=n(61),k=n(714),S=n(730),R=n(731);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=function(e){var t=e.filters,n=e.setFilters,r=e.apps,o=e.hasActiveFilters,c=e.showResourceDefinitions,s=Object(f.useState)({rdOpen:!1}),d=u()(s,2),b=d[0],g=b.rdOpen,v=b.rdPermission,y=b.resourceDefinitions,O=d[1],j=Object(f.useRef)([{title:"Application"},{title:"Resource type"},{title:"Operation"}].concat(l()(c?[{title:"Resource definitions"}]:[]))).current,w=Object(h.useDispatch)(),E=Object(h.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),h.shallowEqual),C=E.permissions,x=E.isLoading,A=function(e){var t=e.application,n=a()(e,["application"]),o=(null==t?void 0:t.length)>0?t:r;w(function(e){return{type:m.s,payload:P(e)}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:o.join(",")},n)))},T=function(e){return O({rdOpen:!0,rdPermission:C.data[e].permission,resourceDefinitions:C.data[e].resourceDefinitions})};Object(f.useEffect)((function(){A(D.b)}),[]);var B=(null==C?void 0:C.data)||[];return p.a.createElement(f.Fragment,null,p.a.createElement(k.a,{columns:j,createRows:function(e){return function(e,t,n){return e.reduce((function(e,r,i){var o=r.permission,c=a()(r,["permission"]),s=o.split(":"),d=u()(s,3),b=d[0],h=d[1],m=d[2];return[].concat(l()(e),[{cells:[b,h,m].concat(l()(t?[p.a.createElement(f.Fragment,{key:"rd"},p.a.createElement(S.a,{onClick:function(){return n(i)},access:c}))]:[]))}])}),[])}(e,c,T)},data:B,fetchData:A,filters:t,setFilterValue:n,isLoading:x,pagination:null==C?void 0:C.meta,titlePlural:"permissions",titleSingular:"permission",noData:!x&&!o&&0===B.length,noDataDescription:["You do not have individual permissions for Red Hat Insights.","Contact your Org. Administrator for more information."]}),p.a.createElement(f.Suspense,{fallback:p.a.createElement(f.Fragment,null)},g&&p.a.createElement(R.default,{resourceDefinitions:y,isOpen:g,handleClose:function(){return O({rdOpen:!1})},permission:v})))};C.propTypes={filters:b.a.arrayOf(b.a.object).isRequired,setFilters:b.a.func.isRequired,apps:b.a.arrayOf(b.a.string).isRequired,hasActiveFilters:b.a.bool,showResourceDefinitions:b.a.bool};t.a=C},832:function(e,t,n){"use strict";n.r(t);var r=n(736);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=7.js.map