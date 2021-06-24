(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[287],{13287:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AddRoleWizardContext:()=>te,default:()=>oe,mapperExtension:()=>ae});var r=n(85061),a=n(96156),i=n(28481),o=n(81253),c=n(22122),s=n(92950),l=n.n(s),u=n(45697),m=n.n(u),p=n(45237),d=n(71355),f=n(46980),y=n(67850),h=n(76349),v=n(489),b=n(64124),E=n(94852),g=n(92137),x=n(87757),w=n.n(x),C=n(43115),O=n(57666),R=n(48880),S=function(){var e=(0,g.Z)(w().mark((function e(t){var n,r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,(0,C.vd)({limit:10,offset:0,name:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 4:if(!((null==(r=e.sent)||null===(n=r.data)||void 0===n?void 0:n.length)>0)){e.next=7;break}throw"Name has already been taken";case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(0,O.Z)(S),k=function(e){var t=e.name,n=(0,R.default)();return(0,s.useEffect)((function(){return setTimeout((function(){return n.change(t,"1")})),function(){return n.change(t,"")}}),[]),null},T=n(65731);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t,n=e.formFields,r=(0,s.useContext)(te),a=r.submitting,i=r.error,o=r.setWizardError,c=(0,R.default)().getState;return(0,s.useEffect)((function(){o(void 0),S(c().values["role-name"]).then((function(){return o(!1)})).catch((function(){return o(!0)}))}),[]),void 0===i||a?l().createElement(v.Bullseye,null,l().createElement(v.Spinner,{size:"xl"})):!0===i?l().createElement(T.Z,{context:te,title:"Role name already taken",text:"Please return to Step 1: Create role and choose a unique role name for your custom role."}):l().createElement("div",{className:"rbac"},l().createElement(v.Title,{headingLevel:"h1",size:"xl",className:"ins-c-rbac__gutter-sm"},"Review details"),l().createElement(v.TextContent,{className:"ins-c-rbac__gutter-md"},l().createElement(v.Text,null,"Review and confirm the details for your role, or click Back to revise.")),[[j({},null==n||null===(t=n[0])||void 0===t?void 0:t[0])]])};P.propTypes={formFields:m().array};const D=P;var N=function(e){var t=e.formFields;return l().createElement("div",{className:"rbac"},l().createElement(v.Title,{headingLevel:"h1",size:"xl",className:"pf-u-mb-lg"},"Review details"),t)};N.propTypes={formFields:m().array};const I=N;var G=n(46441),F=n(28090),q=n(73943),z=n(68778),V=n(334),B=function(e){var t=e.onClose,n=(0,s.useContext)(te).setHideForm;return l().createElement(v.EmptyState,{variant:v.EmptyStateVariant.large},l().createElement(v.EmptyStateIcon,{color:"green",icon:z.ZP}),l().createElement(v.Title,{headingLevel:"h4",size:"lg"},"You have successfully created a new role"),l().createElement(v.EmptyStateBody,null),l().createElement(v.Button,{onClick:t,variant:"primary"},"Exit"),l().createElement(v.EmptyStateSecondaryActions,null,l().createElement(v.Button,{onClick:function(){n(!1)},variant:"link"},"Create another role"),l().createElement(v.Button,{component:function(e){return l().createElement(V.Link,(0,c.Z)({to:"/groups"},e))},variant:"link"},"Add role to group")))};B.propTypes={onClose:m().func.isRequired};const M=B;var A=n(41800),L=n(11107),W=n(41693),H=["",{title:"Name",key:"display_name",transforms:[n(62691).sortable]},"Description"],Q=function(e){var t=e.roleReducer,n=t.rolesForWizard,r=t.isLoading;return{roles:n.data,pagination:n.meta,isLoading:r}};var U=n(94487),J=function(e,t){return l().createElement("div",{className:"ins-c-rbac__sticky"},l().createElement(v.Grid,{className:"ins-c-rbac__sticky--title"},e.map((function(t){return l().createElement(v.GridItem,{span:12/e.length,key:t},t)}))),l().createElement(v.Grid,{className:"ins-c-rbac__sticky--data"},t.map((function(t){return t.cells.map((function(t){return l().createElement(v.GridItem,{span:12/e.length,key:t},t)}))}))))};var Y=n(64105);var K=n(60306),X=["Content"];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=(0,s.createContext)({success:!1,submitting:!1,error:void 0}),ne=function(e){return l().createElement(y.ZP,(0,c.Z)({},e,{showFormControls:!1}))},re=function(e){var t=e.Content,n=(0,o.Z)(e,X);return l().createElement(t,n)};re.propTypes={Content:m().elementType.isRequired};var ae={"base-role-table":function(e){var t=(0,p.useDispatch)(),n=function(e){return t((0,F.hs)(e))},r=(0,s.useState)(""),a=(0,i.Z)(r,2),o=a[0],c=a[1],u=(0,p.useSelector)(Q,p.shallowEqual),m=u.roles,d=u.pagination,f=(0,W.Z)(e).input,y=(0,R.default)();return(0,s.useEffect)((function(){n({limit:50,offset:0,itemCount:0,orderBy:"display_name"})}),[]),l().createElement("div",null,l().createElement(v.Alert,{variant:"info",isInline:!0,title:"Only granular permissions will be copied into a custom role         (for example, approval:requests:read). Wildcard permissions will not         be copied into a custom role (for example, approval:*:read).\n        "}),l().createElement(A.M,{columns:H,createRows:function(e){return e.map((function(e){return{cells:[{title:l().createElement(v.Radio,{id:"".concat(e.uuid,"-radio"),name:"".concat(e.name,"-radio"),"aria-label":"".concat(e.name,"-radio"),ouiaId:"".concat(e.name,"-radio"),value:e.uuid,isChecked:f.value.uuid===e.uuid,onChange:function(){y.batch((function(){f.onChange(e),y.change("role-copy-name","Copy of ".concat(e.display_name||e.name)),y.change("role-copy-description",e.description),y.change("add-permissions-table",[]),y.change("base-permissions-loaded",!1)}))}}),props:{className:"pf-c-table__check"}},e.display_name||e.name,e.description]}}))},data:m,fetchData:function(e){return n((0,L.jl)(e))},filterValue:o,setFilterValue:function(e){var t=e.name;return c(t)},isLoading:!1,pagination:d,titlePlural:"roles",titleSingular:"role",filterPlaceholder:"role name",ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":U.Z,"cost-resources":Y.Z,review:function(){var e=(0,R.default)().getState().values,t=e["role-name"],n=e["role-description"],r=e["role-copy-name"],a=e["role-copy-description"],i=e["add-permissions-table"],o=e["resource-definitions"],c=e["has-cost-resources"],s=e["role-type"],u=i.map((function(e){return{cells:e.uuid.split(":")}})),m=(o||[]).map((function(e){return{cells:[e.permission,e.resources.join(", ")]}}));return l().createElement(l().Fragment,null,l().createElement(v.Stack,null,l().createElement(v.StackItem,{className:"ins-c-rbac__summary"},l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"ins-c-rbac__bold-text"},"Name")),l().createElement(v.GridItem,{sm:12,md:10},l().createElement(v.Text,{component:v.TextVariants.p},"create"===s?t:r))),l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"ins-c-rbac__bold-text"},"Description")),l().createElement(v.GridItem,{sm:12,md:10},l().createElement(v.Text,{component:v.TextVariants.p},"create"===s?n:a))),l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"ins-c-rbac__bold-text"},"Permissions")),l().createElement(v.GridItem,{sm:12,md:10},J(["Application","Resource type","Operation"],u))),c&&l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"ins-c-rbac__bold-text"},"Resource definitions")),l().createElement(v.GridItem,{sm:12,md:10},J(["Permission","Resource definitions"],m))))))},description:re,"type-selector":function(e){var t=(0,W.Z)(e).input,n=(0,R.default)(),r=(0,s.useState)(n.getState().values["role-type"]),a=(0,i.Z)(r,2),o=a[0],c=a[1],u=function(e){c(e),t.onChange(e),n.change("add-permissions-table",[]),n.change("base-permissions-loaded",!1)};return l().createElement("div",null,l().createElement(v.Radio,{isChecked:"create"===o,className:"pf-u-mb-sm",name:"role-type-create",onChange:function(){return u("create")},label:"Create a role from scratch",id:"role-type-create",value:"create"}),l().createElement(v.Radio,{isChecked:"copy"===o,name:"role-type-copy",onChange:function(){return u("copy")},label:"Copy an existing role",id:"role-type-copy",value:"copy"}))}},ie=function(e){var t=e.pagination,n=e.filters,a=(0,p.useDispatch)(),o=(0,V.useHistory)().push,u=(0,s.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),m=(0,i.Z)(u,2),y=m[0],g=m[1],x=(0,s.useState)(!1),w=(0,i.Z)(x,2),C=w[0],O=w[1],R=(0,s.useRef)(document.createElement("div")),S=(0,s.useState)(),T=(0,i.Z)(S,2),Z=T[0],j=T[1];(0,s.useEffect)((function(){j(function(e){return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:"Create role",container:e,fields:[{title:"Create role",name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:b.Z.REQUIRED}]},{component:"text-field",name:"role-name",type:"text",label:"Role name",isRequired:!0,condition:{when:"role-type",is:"create"},validate:[_,{type:b.Z.REQUIRED},{type:b.Z.MAX_LENGTH,threshold:150}]},{component:"text-field",name:"role-description",type:"text",label:"Role description",condition:{when:"role-type",is:"create"},validate:[{type:"max-length",threshold:150}]},{component:"base-role-table",name:"copy-base-role",label:"Base role",isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:b.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:k},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:k}]},{title:"Name and description",name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:"Role name",isRequired:!0,validate:[_,{type:b.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:"Role description",validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:"Add permissions",StepTemplate:E.Z,nextStep:function(e){var t=e.values;return t&&t["add-permissions-table"]&&t["add-permissions-table"].some((function(e){return e.uuid.split(":")[0].includes("cost-management")}))?"cost-resources-definition":"review"},fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{name:"cost-resources-definition",title:"Define Cost Management resources",nextStep:"review",StepTemplate:I,fields:[{component:"plain-text",name:"text-description",label:l().createElement("p",null,"Specify where you would like to apply each cost permission selected in the previous step, using the dropdown below.")},{component:"cost-resources",name:"cost-resources",validate:[function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).every((function(e){return e.resources.length>0}))?void 0:"You need to assign at least one resource to each permission."}]}]},{name:"review",title:"Review details",buttons:function(e){return l().createElement(G.Z,(0,c.Z)({},e,{context:te}))},StepTemplate:D,fields:[{component:"review",name:"review"}]}]}]}}(R.current))}),[]),(0,s.useEffect)((function(){R.current.hidden=C}),[C]);var P=function(){return o({pathname:K._j.uJ,search:(0,L.GT)({page:1,per_page:t.limit})})},N=function(){y.success||a((0,d.wN)({variant:"warning",title:"Creating role was canceled by the user",dismissDelay:8e3,dismissable:!1})),o({pathname:K._j.uJ,search:(0,L.GT)(ee({page:1,per_page:t.limit},n))})};return Z?l().createElement(te.Provider,{value:ee(ee({},y),{},{setWizardError:function(e){return g((function(t){return ee(ee({},t),{},{error:e})}))},setWizardSuccess:function(e){return g((function(t){return ee(ee({},t),{},{success:e})}))},setHideForm:function(e){return g((function(t){return ee(ee({},t),{},{hideForm:e})}))}})},l().createElement(q.R,{type:"role",isOpen:C,onModalCancel:function(){return O(!1)},onConfirmCancel:N}),y.hideForm?l().createElement(v.Wizard,{title:"Create role",isOpen:!0,onClose:P,steps:[{name:"success",component:l().createElement(M,{onClose:P}),isFinishedStep:!0}]}):l().createElement(f.Z,{schema:Z,container:R,subscription:{values:!0},FormTemplate:ne,initialValues:{"role-type":"create"},componentMapper:ee(ee({},h.ZP),ae),onSubmit:function(e){var n=e["role-name"],i=e["role-description"],o=e["role-copy-name"],c=e["role-copy-description"],s=e["add-permissions-table"],l=e["cost-resources"],u=e["role-type"];g((function(e){return ee(ee({},e),{},{submitting:!0})}));var m={applications:(0,r.Z)(new Set(s.map((function(e){return e.uuid.split(":")[0]})))),description:("create"===u?i:c)||null,name:"create"===u?n:o,access:s.map((function(e){var t=e.uuid;return{permission:t,resourceDefinitions:null!=l&&l.find((function(e){return e.permission===t}))?[{attributeFilter:{key:"cost-management.".concat(t.split(":")[1]),operation:"in",value:null==l?void 0:l.find((function(e){return e.permission===t})).resources}}]:[]}}))};return a((0,F.fA)(m)).then((function(){g((function(e){return ee(ee({},e),{},{submitting:!1,success:!0,hideForm:!0})})),a((0,F.Kt)({limit:t.limit,inModal:!1}))}))},onCancel:function(e){Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?O(!0):N()}})):null};ie.propTypes={pagination:m().shape({limit:m().number.isRequired}).isRequired,filters:m().shape({name:m().string}).isRequired};const oe=ie}}]);
//# sourceMappingURL=../sourcemaps/287.ea0d98edf9cea3a9ff6a.js.map