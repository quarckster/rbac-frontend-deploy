(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/helpers/user/user-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/user/user-helper.js ***!
  \*****************************************/
/*! exports provided: fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var principalApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_1__["getPrincipalApi"])();
function fetchUsers(_ref) {
  var limit = _ref.limit,
      offset = _ref.offset,
      name = _ref.name;
  return principalApi.listPrincipals(limit + 1, offset, name).then(function (_ref2) {
    var data = _ref2.data,
        meta = _ref2.meta;
    var isLast = !data || data.length <= limit;
    var currData = data.slice(0, limit);
    return {
      data: currData,
      meta: _objectSpread({}, meta, {
        offset: offset,
        limit: limit,
        count: meta.count === null ? !isLast ? Infinity : (offset || 0) + currData.length : meta.count
      })
    };
  });
}

/***/ }),

/***/ "./src/redux/actions/user-actions.js":
/*!*******************************************!*\
  !*** ./src/redux/actions/user-actions.js ***!
  \*******************************************/
/*! exports provided: fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_user_user_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/user/user-helper */ "./src/helpers/user/user-helper.js");


var fetchUsers = function fetchUsers(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS"],
    payload: _helpers_user_user_helper__WEBPACK_IMPORTED_MODULE_1__["fetchUsers"](apiProps)
  };
};

/***/ }),

/***/ "./src/smart-components/group/add-group/users-list.js":
/*!************************************************************!*\
  !*** ./src/smart-components/group/add-group/users-list.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../presentational-components/shared/table-toolbar-view */ "./src/presentational-components/shared/table-toolbar-view.js");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../redux/actions/user-actions */ "./src/redux/actions/user-actions.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var columns = [{
  title: 'Username',
  orderBy: 'name'
}, {
  title: 'Email'
}, {
  title: 'First name'
}, {
  title: 'Last name'
}];

var createRows = function createRows(data, expanded) {
  var checkedRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return data ? data.reduce(function (acc, _ref) {
    var username = _ref.username,
        email = _ref.email,
        first_name = _ref.first_name,
        last_name = _ref.last_name;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(acc), [{
      uuid: username,
      cells: [username, email, first_name, last_name],
      selected: Boolean(checkedRows && checkedRows.find(function (row) {
        return row.uuid === username;
      }))
    }]);
  }, []) : [];
};

var UsersList = function UsersList(_ref2) {
  var users = _ref2.users,
      fetchUsers = _ref2.fetchUsers,
      isLoading = _ref2.isLoading,
      pagination = _ref2.pagination,
      selectedUsers = _ref2.selectedUsers,
      setSelectedUsers = _ref2.setSelectedUsers,
      props = _ref2.props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      filterValue = _useState2[0],
      _setFilterValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchUsers();
  }, []);

  var setCheckedItems = function setCheckedItems(newSelection) {
    setSelectedUsers(function (users) {
      return newSelection(users).map(function (_ref3) {
        var uuid = _ref3.uuid,
            name = _ref3.name,
            username = _ref3.username,
            label = _ref3.label;
        return {
          uuid: uuid,
          label: label || name || username
        };
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_9__["TableToolbarView"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    columns: columns,
    isSelectable: true,
    isCompact: true,
    borders: false,
    createRows: createRows,
    data: users,
    filterValue: filterValue,
    fetchData: function fetchData(config) {
      return fetchUsers(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_7__["mappedProps"])(config));
    },
    setFilterValue: function setFilterValue(_ref4) {
      var name = _ref4.name;
      return _setFilterValue(name);
    },
    isLoading: isLoading,
    pagination: _objectSpread({}, pagination, {
      noBottom: true,
      // eslint-disable-next-line react/display-name, react/prop-types
      toggleTemplate: function toggleTemplate(_ref5) {
        var firstIndex = _ref5.firstIndex,
            lastIndex = _ref5.lastIndex;
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "".concat(firstIndex, " - ").concat(lastIndex));
      }
    }),
    checkedRows: selectedUsers,
    setCheckedItems: setCheckedItems,
    filterPlaceholder: "username",
    titlePlural: "users",
    titleSingular: "user"
  }, props));
};

var mapStateToProps = function mapStateToProps(_ref6) {
  var _ref6$userReducer = _ref6.userReducer,
      users = _ref6$userReducer.users,
      isUserDataLoading = _ref6$userReducer.isUserDataLoading;
  return {
    users: users.data && users.data.map(function (data) {
      return _objectSpread({}, data, {
        uuid: data.username
      });
    }),
    pagination: users.meta,
    isLoading: isUserDataLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers() {
      var apiProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        limit: 10,
        offset: 0
      };
      dispatch(Object(_redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__["fetchUsers"])(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_7__["mappedProps"])(apiProps)));
    },
    addNotification: function addNotification() {
      return dispatch(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11__["addNotification"].apply(void 0, arguments));
    }
  };
};

UsersList.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  }),
  users: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  setSelectedUsers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  selectedUsers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
  }),
  props: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
UsersList.defaultProps = {
  users: [],
  pagination: _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_8__["defaultCompactSettings"],
  selectedUsers: [],
  setSelectedUsers: function setSelectedUsers() {
    return undefined;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(UsersList));

/***/ }),

/***/ "./src/smart-components/user/users.js":
/*!********************************************!*\
  !*** ./src/smart-components/user/users.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _group_add_group_users_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group/add-group/users-list */ "./src/smart-components/group/add-group/users-list.js");






var Users = function Users() {
  var isProd = window.insights.chrome.isProd;
  var description = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "These are the users in your organization. To add new users to your organization, go to", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].a,
    href: "https://www.".concat(isProd ? '' : 'qa.', "redhat.com/wapps/ugc/protected/usermgt/userList.html")
  }, "user management list.")));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_2__["TopToolbar"], {
    paddingBottm: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_2__["TopToolbarTitle"], {
    title: "Users",
    description: description
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    type: "content",
    id: 'users'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_group_add_group_users_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    props: {
      isSelectable: false,
      isCompact: false
    }
  }))));
};

Users.propTypes = {};
Users.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ })

}]);
//# sourceMappingURL=4.js.map