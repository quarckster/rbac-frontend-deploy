(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{567:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return h}));var r=n(199),a=n.n(r),i=n(7),o=n.n(i),c=n(561),l=n.n(c),u=n(526);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=l()(t,2),r=n[0],a=n[1];return f(f({},e),a&&o()({},r,a))}),{})},m=n.n(u)()((function(e){return e()})),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return 0!==e.length&&e.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||!(0===e.length||!e.some((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))})))&&null},v=function(e,t){return function(n){return t?[].concat(a()(n),a()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},h=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var r=n(71),a=n.n(r),i=n(7),o=n.n(i),c=n(561),l=n.n(c),u=n(0),s=n.n(u),f=n(12),p=n.n(f),d=n(27),m=n(265),b=n(264),v=n(529),h=n(34),g=n(205),y=n(528),O=n(88),j=n(530),E=n.n(j),w=n(567),P=n(199),k=n.n(P),S=n(527),x=n(299),T=n(25);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return D(D({},e),{},{itemCount:e.count,perPage:e.limit,page:Object(w.d)(e.limit,e.offset),onSetPage:function(a,i){t(D(D({},e),{},{offset:(i-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(a,i){t(D(D({},e),{},{offset:0,limit:i,name:n,orderBy:r}))}})},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},D({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n(Object(w.f)(r,!0))}}:{})],checked:Object(w.a)(r,t),onSelect:function(t){!e&&n(Object(w.f)(r,t))}}},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,u=arguments.length>8?arguments[8]:void 0,s=arguments.length>9?arguments[9]:void 0;return{items:[].concat(k()(u&&u.length>0?u.map((function(r){var i=r.key,c=r.value,l=r.placeholder,f=r.type,p=void 0===f?"text":f,d=r.items;return{label:Object(w.c)(i),type:p,filterValues:{id:"filter-by-".concat(i),key:"filter-by-".concat(i),placeholder:l||"Filter by ".concat(i),value:c,items:d,onChange:function(e,r){t(D(D({},a),{},o()({offset:0},i,r))),Object(w.b)((function(){return n(D(D(D({},a),{},{offset:0,orderBy:s},u.reduce((function(e,t){return D(D({},e),{},o()({},t.key,t.value))}),{})),{},o()({},i,r)))}))},isDisabled:e}}})):[{label:Object(w.c)(c||i),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||i),value:r,onChange:function(e,r){t(D(D({},a),{},{offset:0,name:r})),Object(w.b)((function(){return n(D(D({},a),{},{offset:0,name:r,orderBy:s}))}))},isDisabled:e}}]),k()(l||[]))}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return 0!==n.length&&{category:Object(w.c)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,u){var s=l()(c,1)[0];r(D(D({},n),{},{offset:0,name:""},t?t.reduce((function(e,t){var n=t.key,r=t.value,a=t.type;return D(D({},e),{},o()({},n,function(e,t){return u?"checkbox"===t?[]:"":"checkbox"===t?e.filter((function(e){return e!==s.chips[0].name})):""}(r,a)))}),{}):{name:""})),a(D(D({},n),{},{offset:0,orderBy:i},t?t.reduce((function(e,t){var n=t.key,r=t.value;return D(D({},e),{},o()({},n,s.type===n||u?"":r))}),{}):{name:""}))}}},A=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,i=e.isLoading,o=e.data,c=e.titleSingular,l=e.filterValue,u=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,m=e.toolbarButtons,b=e.filterPlaceholder,v=e.filterItems,h=e.filters,g=e.hideFilterChips;return s.a.createElement(S.PrimaryToolbar,a()({},t&&{bulkSelect:F(i,n,r,o)},{filterConfig:R(i,u,p,l,f,c,b,v,h,d),actionsConfig:{actions:m()}},!i&&{pagination:C(f,p,l,d)},(l.length>0||h&&h.length>0)&&!g&&{activeFiltersConfig:B(l,h,f,u,p,d)}))};A.propTypes={isSelectable:p.a.bool,checkedRows:p.a.array,setCheckedItems:p.a.func,isLoading:p.a.bool,data:p.a.array,titleSingular:p.a.string,filterValue:p.a.oneOfType([p.a.array,p.a.string]),setFilterValue:p.a.func,filters:p.a.arrayOf(p.a.shape({value:p.a.oneOfType([p.a.string,p.a.number,p.a.array]),key:p.a.string,placeholder:p.a.string})),pagination:p.a.shape({limit:p.a.number,offset:p.a.number,count:p.a.number}),sortBy:p.a.string,filterItems:x.ConditionalFilter.propTypes.items,filterPlaceholder:p.a.string,isCollapsible:p.a.bool,fetchData:p.a.func,toolbarButtons:p.a.func,hideFilterChips:p.a.bool},A.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:T.b,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],hideFilterChips:!1};var L=A,N=n(89),U=n.n(N),I=n(90),V=n(72),M=n(207),W=n(206),q=n(202),z=n.n(q),H=function(e){var t=e.title,n=e.icon,r=e.description,i=e.actions,o=U()(e,["title","icon","description","actions"]);return s.a.createElement(I.EmptyState,a()({variant:I.EmptyStateVariant.full},o),s.a.createElement(W.EmptyStateIcon,{icon:n||z.a}),s.a.createElement(V.Title,{headingLevel:"h5",size:"lg"},t),s.a.createElement(M.EmptyStateBody,null,r.map((function(e,t){return s.a.createElement(s.a.Fragment,{key:t},e," ",s.a.createElement("br",null))}))),i)};H.propTypes={icon:p.a.func,title:p.a.node,description:p.a.node,actions:p.a.arrayOf(p.a.node),className:p.a.string};var G=H;n(599);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,i=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,j=e.areActionsDisabled,P=e.routes,k=e.titlePlural,S=e.titleSingular,x=e.pagination,T=e.filterValue,_=e.isLoading,D=e.setFilterValue,F=e.checkedRows,R=e.isSelectable,B=e.fetchData,A=e.setCheckedItems,N=e.isCollapsible,U=e.emptyProps,I=e.filterPlaceholder,V=e.rowWrapper,M=e.filters,W=e.sortBy,q=e.isExpandable,z=e.onExpand,H=e.hideFilterChips,J=Object(u.useState)({}),K=l()(J,2),Q=K[0],X=K[1],Z=Object(u.useState)({index:void 0,direction:void 0}),$=l()(Z,2),ee=$[0],te=$[1];Object(u.useEffect)((function(){te(Y(Y({},W),void 0!==ee.index&&ee))}),[W]);var ne=n(f,Q,F),re=function(e,t,n,r){var a=r.uuid;return X((function(e){return Y(Y({},e),{},o()({},a,n))}))};return s.a.createElement(u.Fragment,null,P(),!_&&0===ne.length&&0===T.length&&M.every((function(e){return!e.value}))?s.a.createElement(G,a()({title:"Configure ".concat(k),icon:E.a,description:["To configure user access to applications","create at least one ".concat(S)],actions:c()[0]},U)):s.a.createElement(u.Fragment,null,s.a.createElement(L,{isSelectable:R,checkedRows:F,setCheckedItems:A,isLoading:_,data:f,titleSingular:S,filterValue:T,setFilterValue:D,sortBy:void 0!==ee.index&&ee.index-R>=0&&"".concat("desc"===ee.direction?"-":"").concat(i[ee.index-R].key)||void 0,pagination:x,fetchData:B,toolbarButtons:c,filterPlaceholder:I,filters:M,hideFilterChips:H}),_?s.a.createElement(O.d,null):s.a.createElement(d.b,a()({canSelectAll:!1,"aria-label":"".concat(k," table"),variant:t?d.e.compact:null,borders:r},N&&{onCollapse:re},R&&ne.length>0&&{onSelect:function(e,t,n,r){var a=r.uuid,i=l()(r.cells,1)[0];return A(Object(w.f)([{uuid:a,name:i}],t))}},q&&{onExpand:z},{rows:ne.length>0?ne:[{fullWidth:!0,cells:[{title:s.a.createElement(G,{title:"No matching ".concat(k," found"),description:["This filter criteria matches no ".concat(k,"."),"Try changing your filter settings."],actions:[s.a.createElement(y.EmptyStatePrimary,{key:"clear-filters"},s.a.createElement(h.Button,{variant:"link",onClick:function(){D(Y(Y({},x),{},{offset:0,name:""})),B(Y(Y({},x),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:i.length+Boolean(re)}}]}],cells:i},ne.length>0&&{actionResolver:p},{areActionsDisabled:j,rowWrapper:V,sortBy:ee,onSort:function(e,t,n){te({index:t,direction:n}),B(Y(Y({},x),{},{offset:0,name:T,orderBy:"".concat("desc"===n?"-":"").concat(i[t-R].key)}))}}),s.a.createElement(m.a,null),s.a.createElement(b.a,null)),!x.noBottom&&s.a.createElement(v.TableToolbar,null,!_&&s.a.createElement(g.Pagination,a()({},C(x,B,T),{variant:"bottom",dropDirection:"up"})))))};K.propTypes=Y(Y({},L.propTypes),{},{rowWrapper:p.a.any,isCompact:p.a.bool,borders:p.a.bool,createRows:p.a.func.isRequired,columns:p.a.array.isRequired,titlePlural:p.a.string,routes:p.a.func,actionResolver:p.a.func,areActionsDisabled:p.a.func,pagination:p.a.shape({noBottom:p.a.bool}),isExpandable:p.a.bool,onExpand:p.a.func,hideFilterChips:p.a.bool}),K.defaultProps=Y(Y({},L.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1})},574:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s}));var r=n(9),a=n(595),i=function(e){return{type:r.k,payload:a.b(e)}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:a.c(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:a.d(e)}},l=function(e){return{type:r.u,payload:a.e(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."}}}}},u=function(e){return{type:r.o,payload:a.b(e)}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.n,payload:a.c(e)}}},575:function(e,t,n){(t=n(5)(!1)).push([e.i,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},576:function(e,t,n){(t=n(5)(!1)).push([e.i,".ins-rbac-page-header__title{display:block}.ins-rbac-page-header__title+.ins-rbac-page-header__description{margin-top:8px}\n",""]),e.exports=t},581:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(525),a=n.n(r),i=n(524),o=new i.PrincipalApi(void 0,"/api/rbac/v1",a.a),c=new i.GroupApi(void 0,"/api/rbac/v1",a.a),l=new i.RoleApi(void 0,"/api/rbac/v1",a.a),u=(new i.PolicyApi(void 0,"/api/rbac/v1",a.a),new i.AccessApi(void 0,"/api/rbac/v1",a.a),new i.PermissionApi(void 0,"/api/rbac/v1",a.a));function s(){return o}function f(){return c}function p(){return l}function d(){return u}},585:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=n(290),l=n(291),u=n(537),s=n(538),f=n(88),p=n(87),d=n(534),m=n(535),b=function(e){return e?a.a.createElement(d.Breadcrumb,null,Object.values(e).map((function(e){return e.title?a.a.createElement(m.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a.a.createElement(p.c,{exact:!0,to:e.to},e.title)||e.title):a.a.createElement(f.b,null)}))):null};b.propTypes={breadcrumbs:o.a.object};var v=b,h=n(536),g=(n(602),function(e){var t=e.children,n=e.breadcrumbs;return a.a.createElement(r.Fragment,null,n&&a.a.createElement("section",{className:"pf-c-page__main-breadcrumb"},a.a.createElement(v,n)),a.a.createElement(h.PageHeader,{className:"ins-rbac-page-header"},t))});g.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool},g.defaultProps={paddingBottom:!1};var y=function(e){var t=e.title,n=e.renderTitleTag,i=e.description,o=e.children;return a.a.createElement(r.Fragment,null,a.a.createElement(u.Flex,null,a.a.createElement(s.FlexItem,{className:"pf-u-mb-sm",spaceItems:{modifier:"spaceItemsSm"}},a.a.createElement(h.PageHeaderTitle,{title:t||a.a.createElement(f.e,null),className:"ins-rbac-page-header__title"})),a.a.createElement(s.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},n&&n())),i&&a.a.createElement(l.TextContent,{className:"ins-rbac-page-header__description"},a.a.createElement(c.Text,{component:c.TextVariants.p},i)),o)};y.propTypes={title:o.a.string,renderTitleTag:o.a.func,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},595:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(7),a=n.n(r),i=n(577),o=n.n(i),c=n(578),l=n.n(c),u=n(581);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Object(u.d)();function d(e){return m.apply(this,arguments)}function m(){return(m=l()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t=e.limit,n=e.offset,r=e.name,a=e.nameMatch,i=e.scope,o=e.orderBy,c=e.addFields,l=e.username,u=e.options;return p.listRoles(t,n,r,a,i,o,c,l,u)}function v(e){return h.apply(this,arguments)}function h(){return(h=l()(o.a.mark((function e(t){var n,r,a,i,c,l,u,s,d,m,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,a=t.name,i=t.nameMatch,c=t.scope,l=void 0===c?"account":c,u=t.orderBy,s=t.addFields,d=void 0===s?["groups_in_count"]:s,m=t.username,b=t.options,e.t0=f,e.t1=f,e.t2={},e.next=6,p.listRoles(n,r,a,i,l,u,d,m,b);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=l()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=l()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},599:function(e,t,n){var r=n(6),a=n(575);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(575,(function(){"string"==typeof(a=(a=n(575)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},602:function(e,t,n){var r=n(6),a=n(576);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(576,(function(){"string"==typeof(a=(a=n(576)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},604:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),a=n(7),i=n.n(a),o=n(581);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(o.c)();var s=function(e){return{type:r.p,payload:(t=e,n=t.limit,a=t.offset,i=t.username,o=t.orderBy,c=t.email,s="-username"===o?"desc":"asc",u.listPrincipals(n,a,i,s,c).then((function(e){return{data:e.data,meta:l(l({},e.meta),{},{offset:a,limit:n})}})))};var t,n,a,i,o,c,s}},607:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=n(7),a=n.n(r),i=n(71),o=n.n(i),c=n(561),l=n.n(c),u=n(199),s=n.n(u),f=n(0),p=n.n(f),d=n(58),m=n(12),b=n.n(m),v=n(87),h=n(567),g=n(570),y=n(604),O=n(200),j=n(520),E=n(249),w=n(250),P=n(608),k=n(25),S=n(40),x=n.n(S),T=n(48),_=n.n(T),D=n(295),C=n.n(D);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=[{title:"Org. Administrator",key:"org-admin"},{title:"Username",key:"username",transforms:[E.a]},{title:"Email"},{title:"First name"},{title:"Last name"},{title:"Status",transforms:[Object(w.a)(10),function(){return{className:"ins-m-width-5"}}]}],A=function(e){return function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,n){var a=n.username,i=n.is_active,o=n.email,c=n.first_name,l=n.last_name,u=n.is_org_admin;return[].concat(s()(t),[{uuid:a,cells:[u?p.a.createElement(f.Fragment,null,p.a.createElement(_.a,{className:"pf-u-mr-sm"}),"Yes"):p.a.createElement(f.Fragment,null,p.a.createElement(C.a,{className:"pf-u-mr-sm"}),"No"),{title:e?p.a.createElement(v.b,{to:"/users/detail/".concat(a)},a):a},o,c,l,{title:p.a.createElement(j.Label,{isCompact:!0,color:i&&"green",className:x()("ins-c-rbac__user-label",{"ins-m-inactive":!i})},i?"Active":"Inactive"),props:{"data-is-active":i}}],selected:Boolean(r&&r.find((function(e){return e.uuid===a})))}])}),[]):[]}},L=function(e){var t=e.users,n=e.fetchUsers,r=e.isLoading,a=e.pagination,i=e.selectedUsers,c=e.setSelectedUsers,u=e.userLinks,s=e.props,d=Object(f.useState)(""),m=l()(d,2),b=m[0],v=m[1],y=Object(f.useState)(""),O=l()(y,2),j=O[0],E=O[1];Object(f.useEffect)((function(){n()}),[]);return p.a.createElement(g.a,o()({columns:B,isSelectable:!0,isCompact:!0,borders:!1,createRows:A(u),data:t,filterValue:b,fetchData:function(e){n(Object(h.e)(e))},setFilterValue:function(e){var t=e.username,n=e.email;void 0!==t&&v(t),void 0!==n&&E(n)},isLoading:r,pagination:a,checkedRows:i,setCheckedItems:function(e){c((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:P.a,titlePlural:"users",titleSingular:"user",filters:[{key:"username",value:b,placeholder:"Filter by exact username"},{key:"email",value:j,placeholder:"Filter by exact email"}]},s))},N=function(e){var t=e.userReducer,n=t.users,r=t.isUserDataLoading;return{users:n.data&&n.data.map((function(e){return R(R({},e),{},{uuid:e.username})})),pagination:n.meta,isLoading:r}},U=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.b;e(Object(y.a)(Object(h.e)(t)))},addNotification:function(){return e(O.addNotification.apply(void 0,arguments))}}};L.propTypes={history:b.a.shape({goBack:b.a.func.isRequired,push:b.a.func.isRequired}),users:b.a.array,isLoading:b.a.bool,searchFilter:b.a.string,fetchUsers:b.a.func.isRequired,setSelectedUsers:b.a.func.isRequired,selectedUsers:b.a.array,pagination:b.a.shape({limit:b.a.number.isRequired,offset:b.a.number,count:b.a.number}),userLinks:b.a.bool,props:b.a.object},L.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1},t.b=Object(d.connect)(N,U)(L);var I=Object(d.connect)(N,U,(function(e,t,n){return R(R(R(R({},n),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||k.a)}})}))(L)},608:function(e,t,n){"use strict";var r=n(71),a=n.n(r),i=n(89),o=n.n(i),c=n(0),l=n.n(c),u=n(116),s=n(12),f=n.n(s),p=n(40),d=n.n(p),m=function(e){var t=e.row,n=o()(e,["row"]),r=t.status,i=(null==r?void 0:r.props)["data-is-active"];return l.a.createElement(u.a,a()({className:d()("ins-c-rbac__user-row",{"ins-m-inactive":!i}),row:t},n))};m.propTypes={row:f.a.shape({status:f.a.shape({props:f.a.shape({data:f.a.shape({isActive:f.a.bool})})})})},t.a=m},609:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=n(291),l=n(290),u=function(e){var t=e.description,n=e.linkTitle;return a.a.createElement(c.TextContent,null,a.a.createElement(l.Text,{className:"pf-u-mt-0",component:l.TextVariants.h7},t," ",a.a.createElement(l.Text,{component:l.TextVariants.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},n)))};u.propTypes={description:o.a.node,linkTitle:o.a.node},u.defaultProps={description:"",linkTitle:"user management list."},t.a=u},616:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},636:function(e,t,n){(t=n(5)(!1)).push([e.i,'.ins-c-rbac__user-label-skeleton{width:50px}input#filter-by-username.ins-c-conditional-filter[type="text"]{width:230px}\n',""]),e.exports=t},713:function(e,t,n){var r=n(616),a=n(714),i=n(715),o=Math.max,c=Math.min;e.exports=function(e,t,n){var l,u,s,f,p,d,m=0,b=!1,v=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=l,r=u;return l=u=void 0,m=t,f=e.apply(r,n)}function y(e){return m=e,p=setTimeout(j,t),b?g(e):f}function O(e){var n=e-d;return void 0===d||n>=t||n<0||v&&e-m>=s}function j(){var e=a();if(O(e))return E(e);p=setTimeout(j,function(e){var n=t-(e-d);return v?c(n,s-(e-m)):n}(e))}function E(e){return p=void 0,h&&l?g(e):(l=u=void 0,f)}function w(){var e=a(),n=O(e);if(l=arguments,u=this,d=e,n){if(void 0===p)return y(d);if(v)return clearTimeout(p),p=setTimeout(j,t),g(d)}return void 0===p&&(p=setTimeout(j,t)),f}return t=i(t)||0,r(n)&&(b=!!n.leading,s=(v="maxWait"in n)?o(i(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=d=u=p=void 0},w.flush=function(){return void 0===p?f:E(a())},w}},714:function(e,t,n){var r=n(315);e.exports=function(){return r.Date.now()}},715:function(e,t){e.exports=function(e){return e}},716:function(e,t,n){var r=n(6),a=n(636);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(636,(function(){"string"==typeof(a=(a=n(636)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},723:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(15),o=n(516),c=n(517),l=n(585),u=n(522),s=n(607),f=n(609),p=n(199),d=n.n(p),m=n(561),b=n.n(m),v=n(7),h=n.n(v),g=n(12),y=n.n(g),O=n(58),j=n(87),E=n(713),w=n.n(E),P=n(520),k=n(570),S=n(521),x=n(100),T=n(574),_=n(604),D=n(88),C=n(40),F=n.n(C),R=n(25),B=(n(716),n(251)),A=n(27),L=n(265),N=n(264);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V,M=["Roles",{title:"Groups",cellTransforms:[B.a]},{title:"Permissions",cellTransforms:[B.a]},{title:"Last commit"}],W=function(e){var t=e.match.params.username,n=e.fetchRoles,i=e.fetchRoleForUser,s=e.fetchUsers,f=e.roles,p=e.isLoading,m=e.rolesWithAccess,v=e.user;Object(r.useEffect)((function(){s(I(I({},R.b),{},{limit:0,username:t}))}),[]);var g=Object(r.useState)(""),y=b()(g,2),O=y[0],E=y[1],T=Object(r.useState)({}),_=b()(T,2),C=_[0],B=_[1];Object(r.useEffect)((function(){n({limit:20,offset:0,addFields:["groups_in"],username:t}),V=w()((function(e,t,r,a,i){return n({limit:e,offset:t,name:r,addFields:a,username:i})}),500)}),[]);return a.a.createElement(o.Stack,null,a.a.createElement(c.StackItem,null,a.a.createElement(l.a,{paddingBottm:!1,breadcrumbs:[{title:"Users",to:"/users"},{title:t,isActive:!0}]},a.a.createElement(l.b,{title:t,renderTitleTag:function(){return v&&!p?a.a.createElement(P.Label,{color:(null==v?void 0:v.is_active)&&"green",isCompact:!0,className:F()("ins-c-rbac__user-label",{"ins-m-inactive":!(null==v?void 0:v.is_active)})},(null==v?void 0:v.is_active)?"Active":"Inactive"):a.a.createElement(x.Skeleton,{size:"xs",className:"ins-c-rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a.a.createElement(c.StackItem,null,a.a.createElement(u.Section,{type:"content",id:"user-detail"},a.a.createElement(k.a,{columns:M,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,r,a){r?B(I(I({},C),{},h()({},a.uuid,-1))):(B(I(I({},C),{},h()({},a.uuid,n))),2===n&&i(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,n){var r=t.uuid,i=t.name,o=t.groups_in,c=void 0===o?[]:o,l=t.modified,u=t.accessCount;return[].concat(d()(e),[{uuid:r,cells:[{title:i,props:{component:"th",isOpen:!1}},{title:"".concat(c.length),props:{isOpen:1===C[r]}},{title:u,props:{isOpen:2===C[r]}},{title:a.a.createElement(S.DateFormat,{type:"exact",date:l})}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a.a.createElement(A.b,{"aria-label":"Simple Table",variant:A.e.compact,cells:["Name","Description"],rows:c.map((function(e){return{cells:[{title:a.a.createElement(j.b,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a.a.createElement(L.a,null),a.a.createElement(N.a,null))}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:m&&m[r]?a.a.createElement(A.b,{"aria-label":"Simple Table",variant:A.e.compact,cells:["Application","Resource type","Operation"],rows:m[r].access.map((function(e){return{cells:e.permission.split(":")}}))},a.a.createElement(L.a,null),a.a.createElement(N.a,null)):a.a.createElement(D.d,null)}]}])}),[]):[]},data:f.data,filterValue:O,fetchData:function(e){var n=e.limit,r=e.offset,a=e.name;V(n,r,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return E(t)},isLoading:p,pagination:f.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}))))};W.propTypes={match:y.a.object,fetchRoles:y.a.func,fetchRoleForUser:y.a.func,fetchUsers:y.a.func,roles:y.a.object,isLoading:y.a.bool,rolesWithAccess:y.a.object,user:y.a.object};var q=Object(i.j)(Object(O.connect)((function(e,t){var n=e.roleReducer,r=n.roles,a=n.isLoading,i=n.rolesWithAccess,o=e.userReducer.users.data,c=t.match.params.username;return{roles:r,isLoading:a,rolesWithAccess:i,user:o&&o.filter((function(e){return e.username===c}))[0]}}),(function(e){return{fetchRoles:function(t){return e(Object(T.c)(t))},fetchRoleForUser:function(t){return e(Object(T.b)(t))},fetchUsers:function(t){return e(Object(_.a)(t))}}}))(W)),z=n(59),H=function(){var e=a.a.createElement(f.a,{description:"These are all of the users in your Red Hat organization. To add new users or manage existing users, go to your"});Object(r.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]);return a.a.createElement(i.d,null,a.a.createElement(i.b,{exact:!0,path:z.a["user-detail"],render:function(e){return a.a.createElement(q,e)}}),a.a.createElement(i.b,{path:z.a.users,render:function(){return a.a.createElement(o.Stack,null,a.a.createElement(c.StackItem,null,a.a.createElement(l.a,{paddingBottm:!1},a.a.createElement(l.b,{title:"Users",description:e}))),a.a.createElement(c.StackItem,null,a.a.createElement(u.Section,{type:"content",id:"users"},a.a.createElement(s.b,{userLinks:!0,props:{isSelectable:!1,isCompact:!1}}))))}}))};H.propTypes={},H.defaultProps={};t.default=H}}]);
//# sourceMappingURL=9.js.map