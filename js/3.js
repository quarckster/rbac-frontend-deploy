(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/smart-components/role/add-role/add-role-wizard.js":
/*!***************************************************************!*\
  !*** ./src/smart-components/role/add-role/add-role-wizard.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _summary_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./summary-content */ "./src/smart-components/role/add-role/summary-content.js");
/* harmony import */ var _resource_definitions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resource-definitions */ "./src/smart-components/role/add-role/resource-definitions.js");
/* harmony import */ var _role_information__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./role-information */ "./src/smart-components/role/add-role/role-information.js");
/* harmony import */ var _permission_information__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./permission-information */ "./src/smart-components/role/add-role/permission-information.js");
/* harmony import */ var _common_warningModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/warningModal */ "./src/smart-components/common/warningModal.js");
/* harmony import */ var _common_hideWizard_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/hideWizard.scss */ "./src/smart-components/common/hideWizard.scss");
/* harmony import */ var _common_hideWizard_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_hideWizard_scss__WEBPACK_IMPORTED_MODULE_17__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var AddRoleWizard = function AddRoleWizard(_ref) {
  var addNotification = _ref.addNotification,
      createRole = _ref.createRole,
      push = _ref.history.push,
      pagination = _ref.pagination;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      formData = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      isRoleFormValid = _useState4[0],
      setIsRoleFormValid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      isPermissionFormValid = _useState6[0],
      setIsPermissionFormValid = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      stepIdReached = _useState8[0],
      setStepIdReached = _useState8[1];

  var handleChange = function handleChange(data) {
    setValues(_objectSpread({}, formData, {}, data));
  };

  var handleRoleChange = function handleRoleChange(data, isValid) {
    handleChange(data);
    setIsRoleFormValid(isValid);
  };

  var handlePermissionChange = function handlePermissionChange(data, isValid) {
    handleChange(data);
    setIsPermissionFormValid(isValid);
  };

  var steps = [{
    id: 1,
    name: 'Name and Description',
    canJumpTo: stepIdReached >= 1,
    component: new _role_information__WEBPACK_IMPORTED_MODULE_14__["default"](formData, handleRoleChange),
    enableNext: isRoleFormValid
  }, {
    id: 2,
    name: 'Permission',
    canJumpTo: stepIdReached >= 2 && isRoleFormValid,
    component: new _permission_information__WEBPACK_IMPORTED_MODULE_15__["default"](formData, handlePermissionChange),
    enableNext: isPermissionFormValid
  }, {
    id: 3,
    name: 'Resource definitions',
    canJumpTo: stepIdReached >= 3 && isRoleFormValid && isPermissionFormValid,
    component: new _resource_definitions__WEBPACK_IMPORTED_MODULE_13__["default"](formData, handleChange)
  }, {
    id: 4,
    name: 'Review',
    canJumpTo: stepIdReached >= 4 && isRoleFormValid && isPermissionFormValid,
    component: new _summary_content__WEBPACK_IMPORTED_MODULE_12__["default"](formData),
    nextButtonText: 'Confirm'
  }];

  var onNext = function onNext(_ref2) {
    var id = _ref2.id;
    var step = stepIdReached < id ? id : stepIdReached;
    setStepIdReached(step);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var roleData, role;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              roleData = {
                applications: [formData.application],
                description: formData.description,
                name: formData.name,
                access: [{
                  // Permission must be in the format "application:resource_type:operation"
                  permission: "".concat(formData.application, ":").concat(formData.resourceType, ":").concat(formData.permission),
                  resourceDefinitions: formData.resourceDefinitions.map(function (definition) {
                    return {
                      attributeFilter: {
                        key: definition.key,
                        operation: definition.operation,
                        value: definition.value
                      }
                    };
                  })
                }]
              };
              _context.next = 3;
              return createRole(roleData);

            case 3:
              role = _context.sent;
              Object(_redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_11__["fetchRoles"])(pagination).then(push('/roles'));
              return _context.abrupt("return", role);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  var onCancel = function onCancel() {
    addNotification({
      variant: 'warning',
      title: 'Creating role was canceled by the user',
      dismissDelay: 8000,
      dismissable: false
    });
    push('/roles');
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      cancelWarningVisible = _useState10[0],
      setcancelWarningVisible = _useState10[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Wizard"], {
    className: cancelWarningVisible && 'ins-m-wizard__hidden',
    isLarge: true,
    title: "Add role",
    isOpen: true,
    onClose: function onClose() {
      return setcancelWarningVisible(true);
    },
    onNext: onNext,
    onSave: onSubmit,
    steps: steps
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_warningModal__WEBPACK_IMPORTED_MODULE_16__["WarningModal"], {
    type: "role",
    isOpen: cancelWarningVisible,
    onModalCancel: function onModalCancel() {
      return setcancelWarningVisible(false);
    },
    onConfirmCancel: onCancel
  }));
};

AddRoleWizard.defaultProps = {
  users: [],
  inputValue: '',
  selectedGroup: undefined,
  selectedUsers: [],
  selectedRoles: []
};
AddRoleWizard.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
  }).isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  createRole: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  fetchRoles: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
  })
};

var mapStateToProps = function mapStateToProps(_ref4) {
  var _ref4$roleReducer = _ref4.roleReducer,
      roles = _ref4$roleReducer.roles,
      filterValue = _ref4$roleReducer.filterValue,
      isLoading = _ref4$roleReducer.isLoading;
  return {
    roles: roles.data,
    pagination: roles.meta,
    isLoading: isLoading,
    searchFilter: filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__["addNotification"],
    createRole: _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_11__["createRole"],
    fetchRoles: _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_11__["fetchRoles"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddRoleWizard)));

/***/ }),

/***/ "./src/smart-components/role/add-role/permission-information.js":
/*!**********************************************************************!*\
  !*** ./src/smart-components/role/add-role/permission-information.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var PermissionInformation = function PermissionInformation(formData, onHandleChange) {
  var _formData$application = formData.application,
      application = _formData$application === void 0 ? '' : _formData$application,
      _formData$permission = formData.permission,
      permission = _formData$permission === void 0 ? '' : _formData$permission,
      _formData$resourceTyp = formData.resourceType,
      resourceType = _formData$resourceTyp === void 0 ? '' : _formData$resourceTyp;

  var getFormValues = function getFormValues(values) {
    return _objectSpread({
      application: application,
      permission: permission,
      resourceType: resourceType
    }, values);
  };

  var handleChange = function handleChange(values) {
    var data = getFormValues(values);
    var isFormValid = data.application.trim().length > 0 && data.permission.trim().length > 0 && data.resourceType.trim().length > 0;
    onHandleChange(data, isFormValid);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    size: "xl"
  }, "Permission")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].h6
  }, "The permission string is made up of the following inputs where it denotes which application and the resource type the permission will be allowed for."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    label: "Application",
    isRequired: true,
    fieldId: "application"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
    "aria-describedby": "application",
    id: "application",
    isRequired: true,
    name: "application",
    onChange: function onChange(_, event) {
      return handleChange({
        application: event.currentTarget.value
      });
    },
    type: "text",
    value: application
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    label: "Resource type",
    isRequired: true,
    fieldId: "resource-type"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
    "aria-describedby": "resource-type",
    id: "resource-type",
    isRequired: true,
    name: "resource-type",
    onChange: function onChange(_, event) {
      return handleChange({
        resourceType: event.currentTarget.value
      });
    },
    type: "text",
    value: resourceType
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    label: "Permission",
    isRequired: true,
    fieldId: "permission"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
    "aria-describedby": "permission",
    id: "permission",
    isRequired: true,
    name: "permission",
    onChange: function onChange(_, event) {
      return handleChange({
        permission: event.currentTarget.value
      });
    },
    type: "text",
    value: permission
  })))));
};

PermissionInformation.propTypes = {
  application: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  permission: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  resourceType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PermissionInformation);

/***/ }),

/***/ "./src/smart-components/role/add-role/resource-definitions-table.js":
/*!**************************************************************************!*\
  !*** ./src/smart-components/role/add-role/resource-definitions-table.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");





var ResourceDefinitionsTable = function ResourceDefinitionsTable(formData, handleChange) {
  var editable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var _formData$resourceDef = formData.resourceDefinitions,
      resourceDefinitions = _formData$resourceDef === void 0 ? [] : _formData$resourceDef; // Resource definition table columns

  var columns = [{
    title: 'Key'
  }, {
    title: 'Operation'
  }, {
    title: 'value'
  }, ''];
  var rows = resourceDefinitions.map(function (definition) {
    return {
      cells: [{
        title: definition.key
      }, {
        title: definition.operation
      }, {
        title: definition.value
      }, {
        title: editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "link",
          isInline: true,
          onClick: function onClick() {
            return handleChange(definition);
          }
        }, "Remove") : null
      }]
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    "aria-label": "Resource definitions",
    cells: columns,
    rows: rows,
    variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["TableVariant"].compact
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["TableBody"], null));
};

ResourceDefinitionsTable.propTypes = {
  resourceDefinitions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    operation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (ResourceDefinitionsTable);

/***/ }),

/***/ "./src/smart-components/role/add-role/resource-definitions.js":
/*!********************************************************************!*\
  !*** ./src/smart-components/role/add-role/resource-definitions.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _resource_definitions_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource-definitions-table */ "./src/smart-components/role/add-role/resource-definitions-table.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ResourceDefinitions = function ResourceDefinitions(formData, handleChange) {
  // The current resource definition defined in the page
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    key: '',
    operation: '',
    value: ''
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      resourceDefinition = _useState2[0],
      setResourceDefinition = _useState2[1];

  var _formData$resourceDef = formData.resourceDefinitions,
      resourceDefinitions = _formData$resourceDef === void 0 ? [] : _formData$resourceDef;

  var hasDuplicates = function hasDuplicates() {
    var result = false;

    for (var i = 0; i < resourceDefinitions.length; i++) {
      var definition = resourceDefinitions[i];

      if (definition.key === resourceDefinition.key && definition.operation === resourceDefinition.operation && definition.value === resourceDefinition.value) {
        result = true;
        break;
      }
    }

    return result;
  }; // Disable "Add to definitions" button if any field is empty


  var isFormValid = !hasDuplicates() && resourceDefinition.key.trim().length > 0 && resourceDefinition.operation.trim().length > 0 && resourceDefinition.value.trim().length > 0; // Add the current resource definition

  var addDefinition = function addDefinition() {
    // Omit duplicates
    if (hasDuplicates()) {
      return;
    }

    var definitions = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(resourceDefinitions), [resourceDefinition]);
    handleChange({
      resourceDefinitions: definitions
    });
  };

  var removeDefinition = function removeDefinition(resourceDefinition) {
    var definitions = [];

    for (var i = 0; i < resourceDefinitions.length; i++) {
      var definition = resourceDefinitions[i];

      if (definition.key === resourceDefinition.key && definition.operation === resourceDefinition.operation && definition.value === resourceDefinition.value) {
        continue;
      }

      definitions.push(definition);
    }

    handleChange({
      resourceDefinitions: definitions
    });
  };

  var updateDefinition = function updateDefinition(values) {
    setResourceDefinition(_objectSpread({}, resourceDefinition, {}, values));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    size: "xl"
  }, "Resource definitions")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h6
  }, "If there needs to be more details on the resources the permission is to be used for, it would be detailed here."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Form"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    label: "Key",
    fieldId: "resource-key"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextInput"], {
    "aria-describedby": "resource-key",
    id: "resource-key",
    name: "resource-key",
    onChange: function onChange(_, event) {
      return updateDefinition({
        key: event.currentTarget.value
      });
    },
    type: "text",
    value: resourceDefinition.key
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    label: "Operation",
    fieldId: "resource-operation"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextInput"], {
    "aria-describedby": "resource-operation",
    id: "resource-operation",
    name: "resource-operation",
    onChange: function onChange(_, event) {
      return updateDefinition({
        operation: event.currentTarget.value
      });
    },
    type: "text",
    value: resourceDefinition.operation
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    label: "Value",
    fieldId: "resource-value"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextInput"], {
    "aria-describedby": "resource-value",
    id: "resource-value",
    name: "resource-value",
    onChange: function onChange(_, event) {
      return updateDefinition({
        value: event.currentTarget.value
      });
    },
    type: "text",
    value: resourceDefinition.value
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "primary",
    isDisabled: !isFormValid,
    onClick: addDefinition
  }, "Add to definitions")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["StackItem"], null, new _resource_definitions_table__WEBPACK_IMPORTED_MODULE_6__["default"](formData, removeDefinition, true)));
};

ResourceDefinitions.propTypes = {
  resourceDefinitions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    operation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (ResourceDefinitions);

/***/ }),

/***/ "./src/smart-components/role/add-role/role-information.js":
/*!****************************************************************!*\
  !*** ./src/smart-components/role/add-role/role-information.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var RoleInformation = function RoleInformation(formData, onHandleChange) {
  var _formData$description = formData.description,
      description = _formData$description === void 0 ? '' : _formData$description,
      _formData$name = formData.name,
      name = _formData$name === void 0 ? '' : _formData$name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: "xl"
  }, "Name and description")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    label: "Name",
    isRequired: true,
    fieldId: "name"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    isRequired: true,
    type: "text",
    id: "name",
    name: "name",
    "aria-describedby": "name",
    value: name,
    onChange: function onChange(_, event) {
      return onHandleChange({
        name: event.currentTarget.value
      }, event.currentTarget.value.trim().length > 0);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    label: "Description",
    fieldId: "description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextArea"], {
    type: "text",
    id: "description",
    name: "description",
    value: description,
    onChange: function onChange(_, event) {
      return onHandleChange({
        description: event.currentTarget.value
      }, true);
    }
  })))));
};

RoleInformation.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RoleInformation);

/***/ }),

/***/ "./src/smart-components/role/add-role/summary-content.js":
/*!***************************************************************!*\
  !*** ./src/smart-components/role/add-role/summary-content.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _resource_definitions_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-definitions-table */ "./src/smart-components/role/add-role/resource-definitions-table.js");





var SummaryContent = function SummaryContent(formData) {
  var _formData$application = formData.application,
      application = _formData$application === void 0 ? '' : _formData$application,
      _formData$description = formData.description,
      description = _formData$description === void 0 ? '' : _formData$description,
      _formData$name = formData.name,
      name = _formData$name === void 0 ? '' : _formData$name,
      _formData$permission = formData.permission,
      permission = _formData$permission === void 0 ? '' : _formData$permission,
      _formData$resourceTyp = formData.resourceType,
      resourceType = _formData$resourceTyp === void 0 ? '' : _formData$resourceTyp;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: "xl"
  }, "Confirm details")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, "Confirm the details for your source, or click Back to revise"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextList"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListVariants"].dl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dt
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dd
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dt
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dd
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dt
  }, "Application"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dd
  }, application), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dt
  }, "Resource type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dd
  }, resourceType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dt
  }, "Operation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dd
  }, permission), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dt
  }, "Resource definition"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItem"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextListItemVariants"].dd
  }, new _resource_definitions_table__WEBPACK_IMPORTED_MODULE_3__["default"](formData))))))));
};

SummaryContent.propTypes = {
  application: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  permission: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  resourceType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SummaryContent);

/***/ }),

/***/ "./src/smart-components/role/remove-role-modal.js":
/*!********************************************************!*\
  !*** ./src/smart-components/role/remove-role-modal.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");










var RemoveRoleModal = function RemoveRoleModal(_ref) {
  var _ref$history = _ref.history,
      goBack = _ref$history.goBack,
      push = _ref$history.push,
      id = _ref.match.params.id,
      removeRole = _ref.removeRole,
      role = _ref.role,
      isLoading = _ref.isLoading,
      fetchRole = _ref.fetchRole,
      fetchRoles = _ref.fetchRoles;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchRole(id);
  }, []);

  var onSubmit = function onSubmit() {
    return removeRole(id).then(function () {
      fetchRoles();
      push('/roles');
    });
  };

  var onCancel = function onCancel() {
    return goBack();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    isOpen: true,
    isSmall: true,
    title: '',
    onClose: onCancel,
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "cancel",
      variant: "secondary",
      type: "button",
      onClick: onCancel
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "submit",
      isDisabled: isLoading,
      variant: "primary",
      type: "button",
      onClick: onSubmit
    }, "Confirm")]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    gutter: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["GridItem"], {
    span: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h1
  }, "Removing Role:"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["GridItem"], {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h1
  }, role.name)), isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_8__["FormItemLoader"], null))));
};

RemoveRoleModal.defaultProps = {
  role: {},
  isLoading: true
};
RemoveRoleModal.propTypes = {
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchRole: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchRoles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }).isRequired
  }).isRequired,
  removeRole: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$roleReducer = _ref2.roleReducer,
      roles = _ref2$roleReducer.roles,
      selectedRole = _ref2$roleReducer.selectedRole,
      isRecordLoading = _ref2$roleReducer.isRecordLoading;
  return {
    role: selectedRole,
    isLoading: isRecordLoading,
    pagination: roles.meta
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_6__["addNotification"],
    fetchRole: _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_7__["fetchRole"],
    fetchRoles: _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_7__["fetchRoles"],
    removeRole: _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_7__["removeRole"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(RemoveRoleModal)));

/***/ }),

/***/ "./src/smart-components/role/role-table-helpers.js":
/*!*********************************************************!*\
  !*** ./src/smart-components/role/role-table-helpers.js ***!
  \*********************************************************/
/*! exports provided: createRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRows", function() { return createRows; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var createRows = function createRows(data) {
  return data.reduce(function (acc, _ref) {
    var uuid = _ref.uuid,
        name = _ref.name,
        description = _ref.description,
        system = _ref.system,
        accessCount = _ref.accessCount,
        groupsCount = _ref.groups_in_count,
        modified = _ref.modified;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [{
      uuid: uuid,
      system: system,
      cells: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: "".concat(uuid, "-name")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/roles/detail/".concat(uuid)
      }, name)), description, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: "".concat(uuid, "-accessCount")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/roles/detail/".concat(uuid)
      }, accessCount)), groupsCount, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: "".concat(uuid, "-modified")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_2__["DateFormat"], {
        date: modified,
        type: "relative"
      }))]
    }]);
  }, []);
};

/***/ }),

/***/ "./src/smart-components/role/roles.js":
/*!********************************************!*\
  !*** ./src/smart-components/role/roles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _role_table_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-table-helpers */ "./src/smart-components/role/role-table-helpers.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../presentational-components/shared/table-toolbar-view */ "./src/presentational-components/shared/table-toolbar-view.js");
/* harmony import */ var _add_role_add_role_wizard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-role/add-role-wizard */ "./src/smart-components/role/add-role/add-role-wizard.js");
/* harmony import */ var _remove_role_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./remove-role-modal */ "./src/smart-components/role/remove-role-modal.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./role */ "./src/smart-components/role/role.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var columns = [{
  title: 'Name',
  key: 'name',
  transforms: [Object(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["cellWidth"])(20), _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]]
}, {
  title: 'Description'
}, {
  title: 'Permissions',
  transforms: [Object(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["cellWidth"])(5)]
}, {
  title: 'Groups',
  transforms: [Object(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["cellWidth"])(5)]
}, {
  title: 'Last modified',
  key: 'modified',
  transforms: [Object(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["cellWidth"])(10), _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]]
}];

var selector = function selector(_ref) {
  var _ref$roleReducer = _ref.roleReducer,
      roles = _ref$roleReducer.roles,
      isLoading = _ref$roleReducer.isLoading;
  return {
    roles: roles.data,
    pagination: roles.meta,
    userIdentity: roles.identity,
    userEntitlements: roles.entitlements,
    isLoading: isLoading
  };
};

var Roles = function Roles() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      filterValue = _useState2[0],
      _setFilterValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isCostAdmin = _useState4[0],
      setIsCostAdmin = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])(),
      push = _useHistory.push;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(selector, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]),
      roles = _useSelector.roles,
      isLoading = _useSelector.isLoading,
      pagination = _useSelector.pagination,
      userIdentity = _useSelector.userIdentity,
      userEntitlements = _useSelector.userEntitlements;

  var _fetchData = function fetchData(options) {
    return dispatch(Object(_redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_9__["fetchRolesWithPolicies"])(options));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _fetchData(_objectSpread({}, pagination, {
      name: filterValue
    }));

    window.insights.chrome.getUserPermissions('cost-management').then(function (allPermissions) {
      var permissionList = allPermissions.map(function (permissions) {
        return permissions.permission;
      });
      setIsCostAdmin(permissionList.includes('cost-management:*:*'));
    });
  }, []);

  var routes = function routes() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/roles/add-role",
      component: _add_role_add_role_wizard__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/roles/remove/:id",
      component: _remove_role_modal__WEBPACK_IMPORTED_MODULE_13__["default"]
    }));
  };

  var actionResolver = function actionResolver(_ref2) {
    var system = _ref2.system;
    var userAllowed = insights.chrome.isBeta() && userIdentity && userIdentity.user && userIdentity.user.is_org_admin;
    return system || !userAllowed ? [] : [{
      title: 'Delete',
      onClick: function onClick(_event, _rowId, role) {
        return push("/roles/remove/".concat(role.uuid));
      }
    }];
  };

  var toolbarButtons = function toolbarButtons() {
    return [react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      key: "add-role"
    }, userEntitlements && userEntitlements.cost_management && window.insights.chrome.isBeta() && isCostAdmin ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/roles/add-role"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "primary",
      "aria-label": "Create role"
    }, "Create role")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null))];
  };

  var renderRolesList = function renderRolesList() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_10__["TopToolbar"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_10__["TopToolbarTitle"], {
      title: "Roles"
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14__["Section"], {
      type: "content",
      id: 'tab-roles'
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_11__["TableToolbarView"], {
      actionResolver: actionResolver,
      columns: columns,
      createRows: _role_table_helpers__WEBPACK_IMPORTED_MODULE_7__["createRows"],
      data: roles,
      filterValue: filterValue,
      fetchData: function fetchData(config) {
        return _fetchData(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_8__["mappedProps"])(config));
      },
      setFilterValue: function setFilterValue(_ref3) {
        var name = _ref3.name;
        return _setFilterValue(name);
      },
      isLoading: isLoading,
      pagination: pagination,
      routes: routes,
      titlePlural: "roles",
      titleSingular: "role",
      toolbarButtons: toolbarButtons,
      filterPlaceholder: "name"
    }))));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: '/roles/detail/:uuid',
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_role__WEBPACK_IMPORTED_MODULE_15__["default"], props);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: '/roles',
    render: function render() {
      return renderRolesList();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Roles);

/***/ })

}]);
//# sourceMappingURL=3.js.map