(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[694],{99961:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},45139:(e,t,n)=>{"use strict";n.d(t,{fA:()=>p,vd:()=>h,Kt:()=>v,fp:()=>g,DV:()=>m,l5:()=>O,ul:()=>j,lq:()=>k,sZ:()=>D});var r=n(87757),i=n.n(r),o=n(59713),a=n.n(o),c=n(48926),l=n.n(c);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=(0,n(63717).ix)();function p(e){return d.apply(this,arguments)}function d(){return(d=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=e.limit,n=e.offset,r=e.name,i=e.nameMatch,o=e.scope,a=e.orderBy,c=void 0===a?"display_name":a,l=e.addFields,s=e.username,u=e.application,p=e.permission,d=e.options;return f.listRoles(t,n,void 0,r,i,o,c,l,s,u,p,d)}function v(e){return y.apply(this,arguments)}function y(){return(y=l()(i().mark((function e(t){var n,r,o,a,c,l,s,p,d,h,v,y,g,b;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,o=t.name,a=t.nameMatch,c=t.scope,l=void 0===c?"account":c,s=t.orderBy,p=void 0===s?"display_name":s,d=t.addFields,h=void 0===d?["groups_in_count"]:d,v=t.username,y=t.options,g=t.permission,b=t.application,e.t0=u,e.t1=u,e.t2={},e.next=6,f.listRoles(n,r,void 0,o,a,l,p,h,v,b,g,y);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return P.apply(this,arguments)}function P(){return(P=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){var e=l()(i().mark((function e(t,n,r){var o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRoleAccess(t);case 2:return o=e.sent,a=o.data,e.abrupt("return",f.updateRole(t,r?u(u({},n),{},{access:a}):n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),k=function(){var e=l()(i().mark((function e(t,n){var r,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRoleAccess(t.uuid);case 2:return r=e.sent,o=r.data,a=u(u({},t),{},{access:o.filter((function(e){return!n.includes(e.permission)}))}),e.abrupt("return",f.updateRole(t.uuid,u({},a)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=l()(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.patchRole(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},12830:(e,t,n)=>{"use strict";n.d(t,{FZ:()=>p,jl:()=>d,Aq:()=>h,um:()=>v,ZQ:()=>y,RI:()=>g});var r=n(319),i=n.n(r),o=n(59713),a=n.n(o),c=n(63038),l=n.n(c),s=n(48623);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=l()(t,2),r=n[0],i=n[1];return f(f({},e),i&&a()({},r,i))}),{})},h=(0,s.Z)((function(e){return e()})),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.filter((function(e){return!e.platform_default}));return 0!==n.length&&n.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||t.length>0&&null},y=function(e,t){return function(n){return t?[].concat(i()(n),i()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},63717:(e,t,n)=>{"use strict";n.d(t,{TR:()=>g,i$:()=>m,tP:()=>v,Y3:()=>b,bn:()=>h,ix:()=>y});var r=n(77460),i=n(72548),o=n(17951),a="/api/rbac/v1",c="/api/cost-management/v1",l=new i.PrincipalApi(void 0,a,r.ZP),s=new i.GroupApi(void 0,a,r.ZP),u=new i.RoleApi(void 0,a,r.ZP),f=(new i.PolicyApi(void 0,a,r.ZP),new i.AccessApi(void 0,a,r.ZP)),p=new i.PermissionApi(void 0,a,r.ZP),d=new o.BaseAPI(void 0,c,r.ZP);function h(){return l}function v(){return s}function y(){return u}function g(){return f}function b(){return p}function m(){return{getResourceTypes:function(){return d.axios.get("".concat(c,"/resource-types/"))},getResource:function(e){return d.axios.get("".concat(e,"?limit=1000"))}}}},17721:(e,t,n)=>{"use strict";n.d(t,{M:()=>z});var r=n(67154),i=n.n(r),o=n(59713),a=n.n(o),c=n(63038),l=n.n(c),s=n(80150),u=n.n(s),f=n(45697),p=n.n(f),d=n(12460),h=n(35585),v=n(47173),y=n(71070),g=n(1417),b=n(55917),m=n(7081),w=n(12830),O=n(319),P=n.n(O),j=n(35937),k=n.n(j),D=n(6279),x=n(80712),S=n(71410);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return F(F({},e),{},{itemCount:e.count,perPage:e.limit,page:(0,w.FZ)(e.limit,e.offset),onSetPage:function(i,o){t(F(F({},e),{},{offset:(o-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(F(F({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},F({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n((0,w.ZQ)(r,!0))}}:{})],checked:(0,w.um)(r,t),onSelect:function(t){!e&&n((0,w.ZQ)(r,t))}}},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,h=arguments.length>13?arguments[13]:void 0,v=arguments.length>14?arguments[14]:void 0,y=arguments.length>15?arguments[15]:void 0;return{onChange:h,value:v,items:[].concat(P()(s&&s.length>0?s.map((function(o){var c=o.key,l=o.label,h=o.value,v=o.selected,g=o.placeholder,b=o.type,m=void 0===b?"text":b,O=o.groups,P=o.items;return{label:l||(0,w.RI)(c),type:m,filterValues:F(F({id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:g||"Filter by ".concat(c),value:h,selected:v},"text"!==m?{isFilterable:u,onShowMore:f,showMoreTitle:p,onFilter:d}:{}),{},{groups:O,items:P,onChange:function(e,o){var l="string"==typeof o||Array.isArray(o)?o:Object.keys(k()(o[0],(function(e){return e})));t(F(F(F({},r),i),{},a()({offset:0},c,l))),(0,w.Aq)((function(){return n(F(F(F({},i),{},{offset:0,orderBy:y},s.reduce((function(e,t){return F(F({},e),{},a()({},t.key,t.value))}),{})),{},a()({},c,l)))}))},isDisabled:e})}})):[{label:(0,w.RI)(c||o),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||o),value:r,onChange:function(e,r){t(F(F({},i),{},{offset:0,name:r})),(0,w.Aq)((function(){return n(F(F({},i),{},{offset:0,name:r,orderBy:y}))}))},isDisabled:e}}]),P()(l||[]))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:(0,w.RI)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,s){var u=l()(c,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return F(F({},e),{},a()({},n,function(e,t,n){return s?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t||"group"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,i,n)))}),{});r(F(F({},n),{},{offset:0,name:""},f)),i(F(F({},n),{},{offset:0,orderBy:o,name:""},f))}}},A=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,o=e.isLoading,a=e.data,c=e.titleSingular,l=e.filterValue,s=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,h=e.toolbarButtons,v=e.filterPlaceholder,y=e.filterItems,g=e.filters,b=e.isFilterable,m=e.onShowMore,w=e.showMoreTitle,O=e.onFilter,P=e.onChange,j=e.value,k=e.hideFilterChips;return u().createElement(D.U,i()({},t&&{bulkSelect:R(o,n,r,a)},{filterConfig:B(o,s,p,l,f,c,v,y,g,b,m,w,O,P,j,d),actionsConfig:{actions:h()}},!o&&{pagination:E(f,p,l,d)},(l.length>0||g&&g.length>0)&&!k&&{activeFiltersConfig:T(l,g,f,s,p,d)}))};A.propTypes={isSelectable:p().bool,checkedRows:p().array,setCheckedItems:p().func,isLoading:p().bool,data:p().array,titleSingular:p().string,filterValue:p().oneOfType([p().array,p().string]),setFilterValue:p().func,filters:p().arrayOf(p().shape({value:p().oneOfType([p().string,p().number,p().array]),key:p().string,placeholder:p().string})),isFilterable:p().bool,onShowMore:p().func,showMoreTitle:p().string,onFilter:p().func,onChange:p().func,value:p().any,pagination:p().shape({limit:p().number,offset:p().number,count:p().number}),sortBy:p().string,filterItems:x.BU.propTypes.items,filterPlaceholder:p().string,isCollapsible:p().bool,fetchData:p().func,toolbarButtons:p().func,hideFilterChips:p().bool},A.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:S.he,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const Z=A;var I=n(6479),M=n.n(I),V=n(9947),_=n(75106),q=n(38424),L=n(60485),W=n(80810),H=function(e){var t=e.title,n=e.icon,r=e.description,o=e.actions,a=M()(e,["title","icon","description","actions"]);return u().createElement(V.u,i()({variant:V.I.full},a),u().createElement(q.k,{icon:n||W.ZP}),u().createElement(L.D,{headingLevel:"h4"},t),u().createElement(_.B,null,r.map((function(e,t){return u().createElement(u().Fragment,{key:t},e," ",u().createElement("br",null))}))),o)};H.propTypes={icon:p().func,title:p().node,description:p().node,actions:p().oneOfType([p().node,p().arrayOf(p().node)]),className:p().string};const Q=H;function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(21277);var z=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,o=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,O=e.areActionsDisabled,P=e.routes,j=e.titlePlural,k=e.titleSingular,D=e.pagination,x=e.filterValue,S=e.isLoading,C=e.setFilterValue,F=e.checkedRows,R=e.isSelectable,B=e.fetchData,T=e.setCheckedItems,A=e.isCollapsible,I=e.emptyProps,M=e.filterPlaceholder,V=e.rowWrapper,_=e.filters,q=e.isFilterable,L=e.onShowMore,W=e.showMoreTitle,H=e.onFilter,U=e.onChange,z=e.value,N=e.sortBy,Y=e.isExpandable,G=e.onExpand,J=e.hideFilterChips,$=e.hideHeader,X=e.noData,ee=e.noDataDescription,te=e.ouiaId,ne=(0,s.useState)({}),re=l()(ne,2),ie=re[0],oe=re[1],ae=(0,s.useState)({index:void 0,direction:void 0}),ce=l()(ae,2),le=ce[0],se=ce[1];(0,s.useEffect)((function(){se(K(K({},N),void 0!==le.index&&le))}),[N]);var ue=n(f,ie,F),fe=function(e,t,n,r){var i=r.uuid;return oe((function(e){return K(K({},e),{},a()({},i,n))}))};return u().createElement(s.Fragment,null,P(),!S&&0===ue.length&&0===x.length&&_.every((function(e){return!e.value}))?u().createElement(Q,i()({title:"Configure ".concat(j),icon:m.ZP,description:["To configure user access to applications","create at least one ".concat(k)],actions:c()[0]},I)):u().createElement(s.Fragment,null,u().createElement(Z,{isSelectable:R,checkedRows:F,setCheckedItems:T,isLoading:S||X,data:f,titleSingular:k,filterValue:x,setFilterValue:C,sortBy:void 0!==le.index&&le.index-R>=0&&"".concat("desc"===le.direction?"-":"").concat(o[le.index-R].key)||void 0,pagination:D,fetchData:B,toolbarButtons:c,filterPlaceholder:M,filters:_,isFilterable:q,onShowMore:L,showMoreTitle:W,onFilter:H,onChange:U,value:z,hideFilterChips:J}),S?u().createElement(b.Wi,null):u().createElement(d.Table,i()({canSelectAll:!1,"aria-label":"".concat(j," table"),variant:t?d.TableVariant.compact:null,borders:r},A&&{onCollapse:fe},R&&ue.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,o=l()(r.cells,1)[0];return T((0,w.ZQ)([{uuid:i,name:o}],t))}},Y&&{onExpand:G},{rows:ue.length>0?ue:[{fullWidth:!0,cells:[{title:u().createElement(Q,{title:"No matching ".concat(j," found"),description:X&&ee?ee:["This filter criteria matches no ".concat(j,"."),"Try changing your filter settings."],actions:X&&ee?void 0:[u().createElement(g.V,{key:"clear-filters"},u().createElement(v.zx,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){C(K(K({},D),{},{offset:0,name:""})),B(K(K({},D),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:o.length+Boolean(fe)}}]}],cells:o},ue.length>0&&{actionResolver:p},{areActionsDisabled:O,rowWrapper:V,sortBy:le,ouiaId:te,onSort:function(e,t,n){se({index:t,direction:n}),B(K(K({},D),{},{offset:0,name:x,orderBy:"".concat("desc"===n?"-":"").concat(o[t-R].key)}))}}),!$&&u().createElement(d.TableHeader,null),u().createElement(d.TableBody,null)),!D.noBottom&&u().createElement(h.f,null,!S&&u().createElement(y.t,i()({},E(D,B,x),{variant:"bottom",dropDirection:"up"})))))};z.propTypes=K(K({},Z.propTypes),{},{sortBy:p().shape({directions:p().string,index:p().number}),rowWrapper:p().any,isCompact:p().bool,borders:p().bool,checkedRows:p().array,createRows:p().func.isRequired,columns:p().array.isRequired,titlePlural:p().string,routes:p().func,actionResolver:p().func,areActionsDisabled:p().func,pagination:p().shape({noBottom:p().bool}),isExpandable:p().bool,onExpand:p().func,hideFilterChips:p().bool,hideHeader:p().bool,noDataDescription:p().arrayOf(p().node)}),z.defaultProps=K(K({},Z.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,checkedRows:[],hideHeader:!1})},89531:(e,t,n)=>{"use strict";n.d(t,{fA:()=>o,fp:()=>a,vd:()=>c,Kt:()=>l,l5:()=>s,sv:()=>u,DV:()=>f,hs:()=>p,ul:()=>d,sZ:()=>h,lq:()=>v});var r=n(84887),i=n(45139),o=function(e){return{type:r.MF,payload:i.fA(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed adding role",dismissDelay:8e3,dismissable:!1,description:"The role was not added successfuly."}}}}},a=function(e){return{type:r.rz,payload:i.fp(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.vd(e)}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.Kt(e)}},s=function(e){return{type:r.W2,payload:i.l5(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."},rejected:{variant:"danger",title:"Failed removing role",dismissDelay:8e3,dismissable:!1,description:"The role was not removed successfuly."}}}}},u=function(e){return{type:r.qj,payload:i.fp(e)}},f=function(e){return{type:r.Y2,payload:i.DV(e)}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.eJ,payload:i.vd(e)}},d=function(e,t,n){return{type:r.Sw,payload:i.ul(e,t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating role",dismissDelay:8e3,dismissable:!1,description:"The role was updated successfully."},rejected:{variant:"danger",title:"Failed updating role",dismissDelay:8e3,dismissable:!1,description:"The role was not updated successfuly."}}}}},h=function(e,t){return{type:r.kg,payload:i.sZ(e,t),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating role",dismissDelay:8e3,dismissable:!1,description:"The role was updated successfully."}}}}},v=function(e,t){return{type:r.Sw,payload:i.lq(e,t)}}},21277:(e,t,n)=>{var r=n(93379),i=n(99961);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);var o=r(i,{insert:"head",singleton:!1});if(!i.locals||e.hot.invalidate){var a=i.locals;e.hot.accept(99961,(function(){"string"==typeof(i=(i=n(99961)).__esModule?i.default:i)&&(i=[[e.id,i,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(a,i.locals)?(a=i.locals,o(i)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=i.locals||{}}}]);
//# sourceMappingURL=694.7f18d7540017512f90bc.js.map