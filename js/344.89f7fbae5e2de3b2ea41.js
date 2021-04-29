(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[344],{70344:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AddRoleWizardContext:()=>ge,default:()=>Pe,mapperExtension:()=>Ce});var r=n(319),o=n.n(r),a=n(59713),i=n.n(a),c=n(63038),s=n.n(c),l=n(6479),u=n.n(l),m=n(67154),p=n.n(m),d=n(80150),f=n.n(d),y=n(45697),h=n.n(y),b=n(12167),v=n(71355),E=n(98917),g=n(81554),x=n(86106),w=n(77583),C=n(24154),O=n(94852),P=n(52643),_=n(2372),R=n(68340),k=n(68774),j=n(60485),S=n(87757),D=n.n(S),Z=n(48926),N=n.n(Z),q=n(43115),F=n(57666),z=n(58860),T=function(){var e=N()(D().mark((function e(t){var n,r;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,(0,q.vd)({limit:10,offset:0,name:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 4:if(!((null==(r=e.sent)||null===(n=r.data)||void 0===n?void 0:n.length)>0)){e.next=7;break}throw"Name has already been taken";case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=(0,F.Z)(T),M=function(e){var t=e.name,n=(0,z.Z)();return(0,d.useEffect)((function(){return setTimeout((function(){return n.change(t,"1")})),function(){return n.change(t,"")}}),[]),null},L=(n(50486),n(65731));function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t,n=e.formFields,r=(0,d.useContext)(ge),o=r.submitting,a=r.error,i=r.setWizardError,c=(0,z.Z)().getState;return(0,d.useEffect)((function(){i(void 0),T(c().values["role-name"]).then((function(){return i(!1)})).catch((function(){return i(!0)}))}),[]),void 0===a||o?f().createElement(P.b,null,f().createElement(_.$,{size:"xl"})):!0===a?f().createElement(L.Z,{context:ge,title:"Role name already taken",text:"Please return to Step 1: Create role and choose a unique role name for your custom role."}):f().createElement("div",{className:"rbac"},f().createElement(j.D,{headingLevel:"h1",size:"xl",className:"ins-c-rbac__gutter-sm"},"Review details"),f().createElement(k.D,{className:"ins-c-rbac__gutter-md"},f().createElement(R.x,null,"Review and confirm the details for your role, or click Back to revise.")),[[W({},null==n||null===(t=n[0])||void 0===t?void 0:t[0])]])};B.propTypes={formFields:h().array};const Y=B;var H=n(46441),Q=n(28090),U=n(73943),G=n(47173),V=n(9947),J=n(38424),K=n(75106),X=n(35293),$=n(68778),ee=n(334),te=function(e){var t=e.onClose,n=(0,d.useContext)(ge).setHideForm;return f().createElement(V.u,{variant:V.I.large},f().createElement(J.k,{color:"green",icon:$.ZP}),f().createElement(j.D,{headingLevel:"h4",size:"lg"},"You have successfully created a new role"),f().createElement(K.B,null),f().createElement(G.zx,{onClick:t,variant:"primary"},"Exit"),f().createElement(X.i,null,f().createElement(G.zx,{onClick:function(){n(!1)},variant:"link"},"Create another role"),f().createElement(G.zx,{component:function(e){return f().createElement(ee.Link,p()({to:"/groups"},e))},variant:"link"},"Add role to group")))};te.propTypes={onClose:h().func.isRequired};const ne=te;var re=n(92504),oe=n(43547),ae=n(41800),ie=n(11107),ce=n(8785),se=["",{title:"Name",key:"display_name",transforms:[n(43349).sortable]},"Description"],le=function(e){var t=e.roleReducer,n=t.rolesForWizard,r=t.isLoading;return{roles:n.data,pagination:n.meta,isLoading:r}};var ue=n(94487),me=n(49739),pe=n(83826),de=n(50693),fe=n(16475),ye=function(e,t){return f().createElement("div",{className:"ins-c-rbac__sticky"},f().createElement(de.r,{className:"ins-c-rbac__sticky--title"},e.map((function(t){return f().createElement(fe.P,{span:12/e.length,key:t},t)}))),f().createElement(de.r,{className:"ins-c-rbac__sticky--data"},t.map((function(t){return t.cells.map((function(t){return f().createElement(fe.P,{span:12/e.length,key:t},t)}))}))))};var he=n(64105);var be=n(60306);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(12236);var ge=(0,d.createContext)({success:!1,submitting:!1,error:void 0}),xe=function(e){return f().createElement(g.ZP,p()({},e,{showFormControls:!1}))},we=function(e){var t=e.Content,n=u()(e,["Content"]);return f().createElement(t,n)};we.propTypes={Content:h().elementType.isRequired};var Ce={"base-role-table":function(e){var t=(0,b.useDispatch)(),n=function(e){return t((0,Q.hs)(e))},r=(0,d.useState)(""),o=s()(r,2),a=o[0],i=o[1],c=(0,b.useSelector)(le,b.shallowEqual),l=c.roles,u=c.pagination,m=(0,ce.Z)(e).input,p=(0,z.Z)();return(0,d.useEffect)((function(){n({limit:50,offset:0,itemCount:0,orderBy:"display_name"})}),[]),f().createElement("div",null,f().createElement(oe.b,{variant:"info",isInline:!0,title:"Only granular permissions will be copied into a custom role         (for example, approval:requests:read). Wildcard permissions will not         be copied into a custom role (for example, approval:*:read).\n        "}),f().createElement(ae.M,{columns:se,createRows:function(e){return e.map((function(e){return{cells:[{title:f().createElement(re.Y,{id:"".concat(e.uuid,"-radio"),name:"".concat(e.name,"-radio"),"aria-label":"".concat(e.name,"-radio"),ouiaId:"".concat(e.name,"-radio"),value:e.uuid,isChecked:m.value.uuid===e.uuid,onChange:function(){p.batch((function(){m.onChange(e),p.change("role-copy-name","Copy of ".concat(e.display_name||e.name)),p.change("role-copy-description",e.description),p.change("add-permissions-table",[]),p.change("base-permissions-loaded",!1)}))}}),props:{className:"pf-c-table__check"}},e.display_name||e.name,e.description]}}))},data:l,fetchData:function(e){return n((0,ie.jl)(e))},filterValue:a,setFilterValue:function(e){var t=e.name;return i(t)},isLoading:!1,pagination:u,titlePlural:"roles",titleSingular:"role",filterPlaceholder:"role name",ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":ue.Z,"cost-resources":he.Z,review:function(){var e=(0,z.Z)().getState().values,t=e["role-name"],n=e["role-description"],r=e["role-copy-name"],o=e["role-copy-description"],a=e["add-permissions-table"],i=e["resource-definitions"],c=e["has-cost-resources"],s=e["role-type"],l=a.map((function(e){return{cells:e.uuid.split(":")}})),u=(i||[]).map((function(e){return{cells:[e.permission,e.resources.join(", ")]}}));return f().createElement(f().Fragment,null,f().createElement(me.K,null,f().createElement(pe.v,{className:"ins-c-rbac__summary"},f().createElement(de.r,null,f().createElement(fe.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Name")),f().createElement(fe.P,{sm:12,md:10},f().createElement(R.x,{component:R.q.p},"create"===s?t:r))),f().createElement(de.r,null,f().createElement(fe.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Description")),f().createElement(fe.P,{sm:12,md:10},f().createElement(R.x,{component:R.q.p},"create"===s?n:o))),f().createElement(de.r,null,f().createElement(fe.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Permissions")),f().createElement(fe.P,{sm:12,md:10},ye(["Application","Resource type","Operation"],l))),c&&f().createElement(de.r,null,f().createElement(fe.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Resource definitions")),f().createElement(fe.P,{sm:12,md:10},ye(["Permission","Resource definitions"],u))))))},description:we,"type-selector":function(e){var t=(0,ce.Z)(e).input,n=(0,z.Z)(),r=(0,d.useState)(n.getState().values["role-type"]),o=s()(r,2),a=o[0],i=o[1],c=function(e){i(e),t.onChange(e),n.change("add-permissions-table",[]),n.change("base-permissions-loaded",!1)};return f().createElement("div",null,f().createElement(re.Y,{isChecked:"create"===a,className:"pf-u-mb-sm",name:"role-type-create",onChange:function(){return c("create")},label:"Create a role from scratch",id:"role-type-create",value:"create"}),f().createElement(re.Y,{isChecked:"copy"===a,name:"role-type-copy",onChange:function(){return c("copy")},label:"Copy an existing role",id:"role-type-copy",value:"copy"}))}},Oe=function(e){var t=e.pagination,n=e.filters,r=(0,b.useDispatch)(),a=(0,ee.useHistory)().push,i=(0,d.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),c=s()(i,2),l=c[0],u=c[1],m=(0,d.useState)(!1),y=s()(m,2),h=y[0],g=y[1],P=(0,d.useRef)(document.createElement("div")),_=(0,d.useState)({}),R=s()(_,2),k=R[0],j=R[1];(0,d.useEffect)((function(){j(function(e){return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:"Create role",container:e,fields:[{title:"Create role",name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:C.Z.REQUIRED}]},{component:"text-field",name:"role-name",type:"text",label:"Role name",isRequired:!0,condition:{when:"role-type",is:"create"},validate:[I,{type:C.Z.REQUIRED},{type:C.Z.MAX_LENGTH,threshold:150}]},{component:"text-field",name:"role-description",type:"text",label:"Role description",condition:{when:"role-type",is:"create"},validate:[{type:"max-length",threshold:150}]},{component:"base-role-table",name:"copy-base-role",label:"Base role",isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:C.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:M},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:M}]},{title:"Name and description",name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:"Role name",isRequired:!0,validate:[I,{type:C.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:"Role description",validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:"Add permissions",StepTemplate:O.Z,nextStep:function(e){var t=e.values;return t&&t["add-permissions-table"]&&t["add-permissions-table"].some((function(e){return e.uuid.split(":")[0].includes("cost-management")}))?"cost-resources-definition":"review"},fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{name:"cost-resources-definition",title:"Define Cost Management resources",nextStep:"review",fields:[{component:"plain-text",name:"text-description",label:f().createElement("p",null,"Specify where you would like to apply each cost permission selected in the previous step, using the dropdown below.")},{component:"cost-resources",name:"cost-resources",validate:[function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).every((function(e){return e.resources.length>0}))?void 0:"You need to assign at least one resource to each permission."}]}]},{name:"review",title:"Review details",buttons:function(e){return f().createElement(H.Z,p()({},e,{context:ge}))},StepTemplate:Y,fields:[{component:"review",name:"review"}]}]}]}}(P.current))}),[]),(0,d.useEffect)((function(){P.current.hidden=h}),[h]);var S=function(){return a({pathname:be._j.uJ,search:(0,ie.GT)({page:1,per_page:t.limit})})},D=function(){l.success||r((0,v.wN)({variant:"warning",title:"Creating role was canceled by the user",dismissDelay:8e3,dismissable:!1})),a({pathname:be._j.uJ,search:(0,ie.GT)(Ee({page:1,per_page:t.limit},n))})};return f().createElement(ge.Provider,{value:Ee(Ee({},l),{},{setWizardError:function(e){return u((function(t){return Ee(Ee({},t),{},{error:e})}))},setWizardSuccess:function(e){return u((function(t){return Ee(Ee({},t),{},{success:e})}))},setHideForm:function(e){return u((function(t){return Ee(Ee({},t),{},{hideForm:e})}))}})},f().createElement(U.R,{type:"role",isOpen:h,onModalCancel:function(){return g(!1)},onConfirmCancel:D}),l.hideForm?f().createElement(w.e,{title:"Create role",isOpen:!0,onClose:S,steps:[{name:"success",component:f().createElement(ne,{onClose:S}),isFinishedStep:!0}]}):f().createElement(E.Z,{schema:k,container:P,subscription:{values:!0},FormTemplate:xe,initialValues:{"role-type":"create"},componentMapper:Ee(Ee({},x.ZP),Ce),onSubmit:function(e){var n=e["role-name"],a=e["role-description"],i=e["role-copy-name"],c=e["role-copy-description"],s=e["add-permissions-table"],l=e["cost-resources"],m=e["role-type"];u((function(e){return Ee(Ee({},e),{},{submitting:!0})}));var p={applications:o()(new Set(s.map((function(e){return e.uuid.split(":")[0]})))),description:("create"===m?a:c)||null,name:"create"===m?n:i,access:s.map((function(e){var t=e.uuid;return{permission:t,resourceDefinitions:(null==l?void 0:l.find((function(e){return e.permission===t})))?[{attributeFilter:{key:"cost-management.".concat(t.split(":")[1]),operation:"in",value:null==l?void 0:l.find((function(e){return e.permission===t})).resources}}]:[]}}))};return r((0,Q.fA)(p)).then((function(){u((function(e){return Ee(Ee({},e),{},{submitting:!1,success:!0,hideForm:!0})})),r((0,Q.Kt)({limit:t.limit,inModal:!1}))}))},onCancel:function(e){Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?g(!0):D()}}))};Oe.propTypes={pagination:h().shape({limit:h().number.isRequired}).isRequired,filters:h().shape({name:h().string}).isRequired};const Pe=Oe}}]);
//# sourceMappingURL=../sourcemaps/344.9b69e67a96d06ede8e21.js.map