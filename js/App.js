/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/apps/rbac/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry-dev.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_index_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/index.css */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.css");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_index_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications_index_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _presentational_components_states_DeniedState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./presentational-components/states/DeniedState */ "./src/presentational-components/states/DeniedState.js");





















var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      chromeNavAvailable: true,
      userReady: false,
      isAdmin: undefined
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var history = this.props.history;
      insights.chrome.init();
      insights.chrome.auth.getUser().then(function (user) {
        return _this2.setState({
          userReady: true,
          isAdmin: user.identity.user.is_org_admin
        });
      });
      insights.chrome.identifyApp('rbac');
      this.unregister = insights.chrome.on('APP_NAVIGATION', function (event) {
        if (event.domEvent) {
          history.push("/".concat(event.navId));
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unregister && this.unregister();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          userReady = _this$state.userReady,
          isAdmin = _this$state.isAdmin;

      if (!userReady) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_15__["AppPlaceholder"], null);
      }

      if (!isAdmin) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_states_DeniedState__WEBPACK_IMPORTED_MODULE_18__["default"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["IntlProvider"], {
        locale: "en"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__["Main"], {
        style: {
          marginLeft: 0,
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_11__["Routes"], null))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])()(App)));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/entry-dev.js":
/*!**************************!*\
  !*** ./src/entry-dev.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilities_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/store */ "./src/utilities/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/helpers */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/helpers.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_helpers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_helpers__WEBPACK_IMPORTED_MODULE_6__);







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _utilities_store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: Object(_redhat_cloud_services_frontend_components_utilities_files_helpers__WEBPACK_IMPORTED_MODULE_6__["getBaseName"])(location.pathname)
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/helpers/group/group-helper.js":
/*!*******************************************!*\
  !*** ./src/helpers/group/group-helper.js ***!
  \*******************************************/
/*! exports provided: fetchGroups, fetchGroup, updateGroup, addGroup, removeGroups, deletePrincipalsFromGroup, addPrincipalsToGroup, fetchRolesForGroup, deleteRolesFromGroup, addRolesToGroup, fetchPrincipalsForGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroups", function() { return removeGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePrincipalsFromGroup", function() { return deletePrincipalsFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPrincipalsToGroup", function() { return addPrincipalsToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRolesForGroup", function() { return fetchRolesForGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRolesFromGroup", function() { return deleteRolesFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRolesToGroup", function() { return addRolesToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPrincipalsForGroup", function() { return fetchPrincipalsForGroup; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");





var groupApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_4__["getGroupApi"])();
function fetchGroups(_x) {
  return _fetchGroups.apply(this, arguments);
}

function _fetchGroups() {
  _fetchGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var limit, offset, name, orderBy, _ref3, _ref4, groups, auth;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = _ref.limit, offset = _ref.offset, name = _ref.name, orderBy = _ref.orderBy;
            _context.next = 3;
            return Promise.all([groupApi.listGroups(limit, offset, name, undefined, undefined, orderBy), insights.chrome.auth.getUser()]);

          case 3:
            _ref3 = _context.sent;
            _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, 2);
            groups = _ref4[0];
            auth = _ref4[1];
            return _context.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, groups, auth));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchGroups.apply(this, arguments);
}

function fetchGroup(_x2) {
  return _fetchGroup.apply(this, arguments);
}

function _fetchGroup() {
  _fetchGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(uuid) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return groupApi.getGroup(uuid);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchGroup.apply(this, arguments);
}

function updateGroup(_x3) {
  return _updateGroup.apply(this, arguments);
}

function _updateGroup() {
  _updateGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return groupApi.updateGroup(data.uuid, data);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateGroup.apply(this, arguments);
}

function addGroup(_x4) {
  return _addGroup.apply(this, arguments);
}

function _addGroup() {
  _addGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
    var newGroup, ret;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return groupApi.createGroup(data);

          case 2:
            newGroup = _context4.sent;
            ret = newGroup;

            if (data.user_list && data.user_list.length > 0) {
              ret = groupApi.addPrincipalToGroup(newGroup.uuid, {
                principals: data.user_list
              });
            }

            if (data.roles_list && data.roles_list.length > 0) {
              ret = groupApi.addRoleToGroup(newGroup.uuid, {
                roles: data.roles_list
              });
            }

            return _context4.abrupt("return", ret);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addGroup.apply(this, arguments);
}

function removeGroups(_x5) {
  return _removeGroups.apply(this, arguments);
}

function _removeGroups() {
  _removeGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(uuids) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Promise.all(uuids.map(function (uuid) {
              return groupApi.deleteGroup(uuid);
            }));

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _removeGroups.apply(this, arguments);
}

function deletePrincipalsFromGroup(_x6, _x7) {
  return _deletePrincipalsFromGroup.apply(this, arguments);
}

function _deletePrincipalsFromGroup() {
  _deletePrincipalsFromGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(groupId, users) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return groupApi.deletePrincipalFromGroup(groupId, users.join(','));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _deletePrincipalsFromGroup.apply(this, arguments);
}

function addPrincipalsToGroup(_x8, _x9) {
  return _addPrincipalsToGroup.apply(this, arguments);
}

function _addPrincipalsToGroup() {
  _addPrincipalsToGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(groupId, users) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return groupApi.addPrincipalToGroup(groupId, {
              principals: users
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _addPrincipalsToGroup.apply(this, arguments);
}

function fetchRolesForGroup(_x10, _x11, _x12) {
  return _fetchRolesForGroup.apply(this, arguments);
}

function _fetchRolesForGroup() {
  _fetchRolesForGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(groupId, excluded, _ref2) {
    var limit,
        offset,
        name,
        description,
        options,
        _args8 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            limit = _ref2.limit, offset = _ref2.offset, name = _ref2.name, description = _ref2.description;
            options = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : {};
            _context8.next = 4;
            return groupApi.listRolesForGroup(groupId, excluded, name, description, limit, offset, options);

          case 4:
            return _context8.abrupt("return", _context8.sent);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _fetchRolesForGroup.apply(this, arguments);
}

function deleteRolesFromGroup(_x13, _x14) {
  return _deleteRolesFromGroup.apply(this, arguments);
}

function _deleteRolesFromGroup() {
  _deleteRolesFromGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(groupId, roles) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return groupApi.deleteRoleFromGroup(groupId, roles.join(','));

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _deleteRolesFromGroup.apply(this, arguments);
}

function addRolesToGroup(_x15, _x16) {
  return _addRolesToGroup.apply(this, arguments);
}

function _addRolesToGroup() {
  _addRolesToGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(groupId, roles) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return groupApi.addRoleToGroup(groupId, {
              roles: roles
            });

          case 2:
            return _context10.abrupt("return", _context10.sent);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _addRolesToGroup.apply(this, arguments);
}

function fetchPrincipalsForGroup(_x17, _x18, _x19) {
  return _fetchPrincipalsForGroup.apply(this, arguments);
}

function _fetchPrincipalsForGroup() {
  _fetchPrincipalsForGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(groupId, usernames, pagination) {
    var options,
        _args11 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            options = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : {};
            _context11.next = 3;
            return groupApi.getPrincipalsFromGroup(groupId, usernames, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, options, {
              query: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, options.query, pagination)
            }));

          case 3:
            return _context11.abrupt("return", _context11.sent);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _fetchPrincipalsForGroup.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/role/role-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/role/role-helper.js ***!
  \*****************************************/
/*! exports provided: createRole, fetchRoles, fetchRolesWithPolicies, fetchRole, removeRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRole", function() { return createRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRoles", function() { return fetchRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRolesWithPolicies", function() { return fetchRolesWithPolicies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRole", function() { return fetchRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRole", function() { return removeRole; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");




var roleApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__["getRoleApi"])();
function createRole(_x) {
  return _createRole.apply(this, arguments);
}

function _createRole() {
  _createRole = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return roleApi.createRoles(data);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createRole.apply(this, arguments);
}

function fetchRoles(_ref) {
  var limit = _ref.limit,
      offset = _ref.offset;
  return roleApi.listRoles(limit, offset);
}
function fetchRolesWithPolicies(_x2) {
  return _fetchRolesWithPolicies.apply(this, arguments);
}

function _fetchRolesWithPolicies() {
  _fetchRolesWithPolicies = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
    var limit, offset, name, orderBy;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            limit = _ref2.limit, offset = _ref2.offset, name = _ref2.name, orderBy = _ref2.orderBy;
            _context2.t0 = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default.a;
            _context2.t1 = {};
            _context2.next = 5;
            return roleApi.listRoles(limit, offset, name, 'account', orderBy, ['groups_in_count']);

          case 5:
            _context2.t2 = _context2.sent;
            _context2.next = 8;
            return insights.chrome.auth.getUser();

          case 8:
            _context2.t3 = _context2.sent;
            return _context2.abrupt("return", (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchRolesWithPolicies.apply(this, arguments);
}

function fetchRole(_x3) {
  return _fetchRole.apply(this, arguments);
}

function _fetchRole() {
  _fetchRole = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(uuid) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return roleApi.getRole(uuid);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchRole.apply(this, arguments);
}

function removeRole(_x4) {
  return _removeRole.apply(this, arguments);
}

function _removeRole() {
  _removeRole = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(roleId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return roleApi.deleteRole(roleId);

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _removeRole.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/shared/helpers.js":
/*!***************************************!*\
  !*** ./src/helpers/shared/helpers.js ***!
  \***************************************/
/*! exports provided: scrollToTop, getCurrentPage, getNewPage, mappedProps, debouncedFetch, calculateChecked, selectedRows, firstUpperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPage", function() { return getNewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mappedProps", function() { return mappedProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debouncedFetch", function() { return debouncedFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateChecked", function() { return calculateChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedRows", function() { return selectedRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstUpperCase", function() { return firstUpperCase; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/debounce */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/debounce.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_debounce__WEBPACK_IMPORTED_MODULE_4__);





var scrollToTop = function scrollToTop() {
  return document.getElementById('root').scrollTo({
    behavior: 'smooth',
    top: 0,
    left: 0
  });
};
var getCurrentPage = function getCurrentPage() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(offset / limit) + 1;
};
var getNewPage = function getNewPage() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 ? arguments[1] : undefined;
  return (page - 1) * offset;
};
var mappedProps = function mappedProps(apiProps) {
  return Object.entries(apiProps).reduce(function (acc, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, acc, value && _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, key, value));
  }, {});
};
var debouncedFetch = _redhat_cloud_services_frontend_components_utilities_files_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function (callback) {
  return callback();
});
var calculateChecked = function calculateChecked() {
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var selected = arguments.length > 1 ? arguments[1] : undefined;
  return rows.length !== 0 && rows.every(function (_ref4) {
    var uuid = _ref4.uuid;
    return selected.find(function (row) {
      return row.uuid === uuid;
    });
  }) || (rows.length !== 0 && rows.some(function (_ref5) {
    var uuid = _ref5.uuid;
    return selected.find(function (row) {
      return row.uuid === uuid;
    });
  }) ? null : false);
};
var selectedRows = function selectedRows(newSelection, isSelected) {
  return function (selected) {
    if (!isSelected) {
      return selected.filter(function (row) {
        return !newSelection.find(function (_ref6) {
          var uuid = _ref6.uuid;
          return uuid === row.uuid;
        });
      });
    }

    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(selected), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newSelection)).filter(function (row, key, arr) {
      return arr.findIndex(function (_ref7) {
        var uuid = _ref7.uuid;
        return row.uuid === uuid;
      }) === key;
    });
  };
};
var firstUpperCase = function firstUpperCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/***/ }),

/***/ "./src/helpers/shared/pagination.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/pagination.js ***!
  \******************************************/
/*! exports provided: defaultSettings, defaultCompactSettings, getCurrentPage, getNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCompactSettings", function() { return defaultCompactSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPage", function() { return getNewPage; });
var defaultSettings = {
  limit: 50,
  offset: 0,
  itemCount: 1,
  count: 1,
  numberOfItems: 50
};
var defaultCompactSettings = {
  limit: 5,
  offset: 0,
  itemCount: 1,
  numberOfItems: 5
};
var getCurrentPage = function getCurrentPage() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(offset / limit) + 1;
};
var getNewPage = function getNewPage() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 ? arguments[1] : undefined;
  return (page - 1) * offset;
};

/***/ }),

/***/ "./src/helpers/shared/user-login.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/user-login.js ***!
  \******************************************/
/*! exports provided: getPrincipalApi, getGroupApi, getRoleApi, getPolicyApi, getAxiosInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrincipalApi", function() { return getPrincipalApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupApi", function() { return getGroupApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoleApi", function() { return getRoleApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPolicyApi", function() { return getPolicyApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxiosInstance", function() { return getAxiosInstance; });
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/interceptors.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/rbac-client */ "./node_modules/@redhat-cloud-services/rbac-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");



var principalApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__["PrincipalApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["RBAC_API_BASE"], _redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0___default.a);
var groupApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__["GroupApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["RBAC_API_BASE"], _redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0___default.a);
var roleApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__["RoleApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["RBAC_API_BASE"], _redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0___default.a);
var policyApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__["PolicyApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["RBAC_API_BASE"], _redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0___default.a);
function getPrincipalApi() {
  return principalApi;
}
function getGroupApi() {
  return groupApi;
}
function getRoleApi() {
  return roleApi;
}
function getPolicyApi() {
  return policyApi;
}
function getAxiosInstance() {
  return _redhat_cloud_services_frontend_components_utilities_files_interceptors__WEBPACK_IMPORTED_MODULE_0___default.a;
}

/***/ }),

/***/ "./src/helpers/user/user-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/user/user-helper.js ***!
  \*****************************************/
/*! exports provided: fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");


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
      meta: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, meta, {
        offset: offset,
        limit: limit,
        count: meta.count === null ? !isLast ? Infinity : (offset || 0) + currData.length : meta.count
      })
    };
  });
}

/***/ }),

/***/ "./src/presentational-components/shared/RemoveModal.js":
/*!*************************************************************!*\
  !*** ./src/presentational-components/shared/RemoveModal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");






var RemoveModal = function RemoveModal(_ref) {
  var title = _ref.title,
      text = _ref.text,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit,
      isOpen = _ref.isOpen,
      confirmButtonLabel = _ref.confirmButtonLabel,
      withCheckbox = _ref.withCheckbox;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    className: "ins-c-rbac__dialog--warning",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationTriangleIcon"], {
      className: "ins-m-alert ins-c-rbac__delete-icon"
    }), " ", title, " "),
    isOpen: isOpen,
    isSmall: true,
    onClose: onClose,
    actions: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      key: "confirm",
      isDisabled: withCheckbox && !checked,
      variant: "danger",
      onClick: onSubmit
    }, confirmButtonLabel), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      key: "cancel",
      variant: "link",
      onClick: onClose
    }, "Cancel")],
    isFooterLeftAligned: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Split"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["SplitItem"], {
    isFilled: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextContent"], null, text)))), withCheckbox ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    isChecked: checked,
    onChange: function onChange() {
      return setChecked(!checked);
    },
    label: "I understand, and I want to continue.",
    id: "remove-modal-check",
    className: "pf-u-mt-lg"
  }) : null);
};

RemoveModal.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  confirmButtonLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  withCheckbox: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
RemoveModal.defaultProps = {
  withCheckbox: false
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveModal);

/***/ }),

/***/ "./src/presentational-components/shared/breadcrubms.js":
/*!*************************************************************!*\
  !*** ./src/presentational-components/shared/breadcrubms.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _loader_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");






var RbacBreadcrumbs = function RbacBreadcrumbs(breadcrumbs) {
  return breadcrumbs ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"], null, Object.values(breadcrumbs).map(function (item) {
    return item.title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbItem"], {
      key: item.title,
      isActive: item.isActive
    }, item.to && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: item.to
    }, item.title) || item.title) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loader_placeholders__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbPlaceholder"], null);
  })) : null;
};

RbacBreadcrumbs.propTypes = {
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (RbacBreadcrumbs);

/***/ }),

/***/ "./src/presentational-components/shared/empty-filter.js":
/*!**************************************************************!*\
  !*** ./src/presentational-components/shared/empty-filter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");







var EmptyWithFilter = function EmptyWithFilter(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      description = _ref.description,
      actions = _ref.actions,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["title", "icon", "description", "actions"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["EmptyState"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["EmptyStateVariant"].full
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["EmptyStateIcon"], {
    icon: icon || _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["SearchIcon"]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    headingLevel: "h5",
    size: "lg"
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], null, description.map(function (text, key) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: key
    }, text, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null));
  })), actions);
};

EmptyWithFilter.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (EmptyWithFilter);

/***/ }),

/***/ "./src/presentational-components/shared/loader-placeholders.js":
/*!*********************************************************************!*\
  !*** ./src/presentational-components/shared/loader-placeholders.js ***!
  \*********************************************************************/
/*! exports provided: ListLoader, AppPlaceholder, ToolbarTitlePlaceholder, BreadcrumbPlaceholder, FormItemLoader, PolicyRolesLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLoader", function() { return ListLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlaceholder", function() { return AppPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitlePlaceholder", function() { return ToolbarTitlePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbPlaceholder", function() { return BreadcrumbPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormItemLoader", function() { return FormItemLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyRolesLoader", function() { return PolicyRolesLoader; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__);








var ListLoader = function ListLoader(_ref) {
  var items = _ref.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["items"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["DataList"], {
    "aria-label": "datalist-placeholder"
  }, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Array(items)).map(function (_item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["DataListItem"], {
      key: index,
      "aria-labelledby": "datalist-item-placeholder"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["DataListItemRow"], {
      "aria-label": "datalist-item-placeholder-row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["DataListItemCells"], {
      dataListCells: [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["DataListCell"], {
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        size: _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__["SkeletonSize"].lg
      }, props)))]
    })));
  })));
};
ListLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};
ListLoader.defaultProps = {
  items: 5
};
var AppPlaceholder = function AppPlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 16,
    width: 300,
    speed: 2,
    primaryColor: "#FFFFFF",
    secondaryColor: "#FFFFFF"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "420",
    height: "10"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ListLoader, null));
};
var ToolbarTitlePlaceholder = function ToolbarTitlePlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      width: '200px',
      height: '21px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 21,
    width: 200,
    speed: 2,
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "200",
    height: "21"
  })));
};
var BreadcrumbPlaceholder = function BreadcrumbPlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      width: '200px',
      height: '18px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 18,
    width: 200,
    speed: 2,
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "200",
    height: "18"
  })));
};
var FormItemLoader = function FormItemLoader() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: 32,
    width: 160,
    speed: 2,
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "160",
    height: "32"
  }));
};
var PolicyRolesLoader = function PolicyRolesLoader() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Form"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    fieldId: "1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FormItemLoader, null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    fieldId: "2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FormItemLoader, null)));
};

/***/ }),

/***/ "./src/presentational-components/shared/pf4-select-wrapper.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/shared/pf4-select-wrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");







var createOptions = function createOptions(options, inputValue, isRequired) {
  if (inputValue && isRequired) {
    return options;
  }

  var selectOptions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(options);

  return selectOptions.find(function (_ref) {
    var value = _ref.value;
    return value === undefined;
  }) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions) : [{
    label: isRequired ? 'Please choose' : 'None'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions));
};

var Select = function Select(_ref2) {
  var input = _ref2.input,
      options = _ref2.options,
      isReadOnly = _ref2.isReadOnly,
      isDisabled = _ref2.isDisabled,
      FieldProvider = _ref2.FieldProvider,
      isRequired = _ref2.isRequired,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["input", "options", "isReadOnly", "isDisabled", "FieldProvider", "isRequired"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormSelect"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input, rest, {
    isDisabled: isDisabled || isReadOnly
  }), createOptions(options, input.value, isRequired).map(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormSelectOption"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: props.value || props.label
    }, props, {
      label: props.label.toString()
    })) // eslint-disable-line react/prop-types
    ;
  }));
};

Select.propTypes = {
  input: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  })).isRequired,
  isReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  FieldProvider: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

var Pf4SelectWrapper = function Pf4SelectWrapper(_ref3) {
  var componentType = _ref3.componentType,
      label = _ref3.label,
      isRequired = _ref3.isRequired,
      helperText = _ref3.helperText,
      meta = _ref3.meta,
      description = _ref3.description,
      hideLabel = _ref3.hideLabel,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["componentType", "label", "isRequired", "helperText", "meta", "description", "hideLabel"]);

  var error = meta.error,
      touched = meta.touched;
  var showError = touched && error;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    isRequired: isRequired,
    label: !hideLabel && label,
    fieldId: rest.id,
    isValid: !showError,
    helperText: helperText,
    helperTextInvalid: meta.error
  }, description && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].small
  }, description)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: label,
    isValid: !showError,
    isRequired: isRequired
  }, rest)));
};

Pf4SelectWrapper.propTypes = {
  componentType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  hideLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Pf4SelectWrapper);

/***/ }),

/***/ "./src/presentational-components/shared/table-toolbar-view.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/shared/table-toolbar-view.js ***!
  \********************************************************************/
/*! exports provided: TableToolbarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableToolbarView", function() { return TableToolbarView; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _loader_placeholders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toolbar */ "./src/presentational-components/shared/toolbar.js");
/* harmony import */ var _empty_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./empty-filter */ "./src/presentational-components/shared/empty-filter.js");
/* harmony import */ var _table_toolbar_view_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table-toolbar-view.scss */ "./src/presentational-components/shared/table-toolbar-view.scss");
/* harmony import */ var _table_toolbar_view_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_table_toolbar_view_scss__WEBPACK_IMPORTED_MODULE_14__);















var TableToolbarView = function TableToolbarView(_ref) {
  var isCompact = _ref.isCompact,
      createRows = _ref.createRows,
      borders = _ref.borders,
      columns = _ref.columns,
      toolbarButtons = _ref.toolbarButtons,
      data = _ref.data,
      actionResolver = _ref.actionResolver,
      areActionsDisabled = _ref.areActionsDisabled,
      routes = _ref.routes,
      titlePlural = _ref.titlePlural,
      titleSingular = _ref.titleSingular,
      pagination = _ref.pagination,
      filterValue = _ref.filterValue,
      isLoading = _ref.isLoading,
      setFilterValue = _ref.setFilterValue,
      checkedRows = _ref.checkedRows,
      isSelectable = _ref.isSelectable,
      fetchData = _ref.fetchData,
      setCheckedItems = _ref.setCheckedItems,
      isCollapsible = _ref.isCollapsible,
      emptyProps = _ref.emptyProps,
      filterPlaceholder = _ref.filterPlaceholder,
      rowWrapper = _ref.rowWrapper,
      textFilters = _ref.textFilters,
      sortBy = _ref.sortBy;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      opened = _useState2[0],
      openRow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    index: undefined,
    direction: undefined
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      sortByState = _useState4[0],
      setSortByState = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setSortByState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, sortByState, sortBy));
  }, [sortBy]);
  var rows = createRows(data, opened, checkedRows);

  var onCollapse = function onCollapse(_event, _index, isOpen, _ref2) {
    var uuid = _ref2.uuid;
    return openRow(function (opened) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, opened, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, uuid, isOpen));
    });
  };

  var renderEmpty = function renderEmpty() {
    return {
      title: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_empty_filter__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "No matching ".concat(titlePlural, " found"),
        description: ["This filter criteria matches no ".concat(titlePlural, "."), "Try changing your filter settings."],
        actions: [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["EmptyStatePrimary"], {
          key: "clear-filters"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "link",
          onClick: function onClick() {
            setFilterValue(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, {
              offset: 0,
              name: ''
            }));
            fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, {
              offset: 0,
              name: ''
            }));
          }
        }, "Clear all filters"))]
      }),
      props: {
        colSpan: columns.length + Boolean(onCollapse)
      }
    };
  };

  var renderTable = function renderTable() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      isSelectable: isSelectable,
      checkedRows: checkedRows,
      setCheckedItems: setCheckedItems,
      isLoading: isLoading,
      data: data,
      titleSingular: titleSingular,
      filterValue: filterValue,
      setFilterValue: setFilterValue,
      pagination: pagination,
      fetchData: fetchData,
      toolbarButtons: toolbarButtons,
      filterPlaceholder: filterPlaceholder,
      textFilters: textFilters
    }), isLoading ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_loader_placeholders__WEBPACK_IMPORTED_MODULE_9__["ListLoader"], null) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["Table"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      canSelectAll: false,
      "aria-label": "".concat(titlePlural, " table"),
      variant: isCompact ? _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableVariant"].compact : null,
      borders: borders
    }, isCollapsible && {
      onCollapse: onCollapse
    }, isSelectable && rows.length > 0 && {
      onSelect: function onSelect(_e, isSelected, _idx, _ref3) {
        var uuid = _ref3.uuid,
            _ref3$cells = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref3.cells, 1),
            name = _ref3$cells[0];

        return setCheckedItems(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_11__["selectedRows"])([{
          uuid: uuid,
          name: name
        }], isSelected));
      }
    }, {
      rows: rows.length > 0 ? rows : [{
        fullWidth: true,
        cells: [renderEmpty()]
      }],
      cells: columns
    }, rows.length > 0 && {
      actionResolver: actionResolver
    }, {
      areActionsDisabled: areActionsDisabled,
      rowWrapper: rowWrapper,
      sortBy: sortByState,
      onSort: function onSort(e, index, direction) {
        setSortByState({
          index: index,
          direction: direction
        });
        fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, {
          offset: 0,
          name: '',
          orderBy: "".concat(direction === 'desc' ? '-' : '').concat(columns[index - isSelectable].key)
        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableBody"], null)), !pagination.noBottom && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__["TableToolbar"], null, !isLoading && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Pagination"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_toolbar__WEBPACK_IMPORTED_MODULE_12__["paginationBuilder"])(pagination, fetchData, filterValue), {
      variant: "bottom",
      dropDirection: "up"
    }))));
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, routes(), !isLoading && rows.length === 0 && filterValue.length === 0 && textFilters.every(function (_ref4) {
    var value = _ref4.value;
    return !value;
  }) ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_empty_filter__WEBPACK_IMPORTED_MODULE_13__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Configure ".concat(titlePlural),
    icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_10__["PlusCircleIcon"],
    description: ["To configure user access to applicastions", "create at least one ".concat(titleSingular)],
    actions: toolbarButtons()[0]
  }, emptyProps)) : renderTable());
};
TableToolbarView.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _toolbar__WEBPACK_IMPORTED_MODULE_12__["default"].propTypes, {
  rowWrapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  isCompact: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  borders: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  createRows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  titlePlural: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  actionResolver: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  areActionsDisabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
});
TableToolbarView.defaultProps = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _toolbar__WEBPACK_IMPORTED_MODULE_12__["default"].defaultProps, {
  isCompact: false,
  borders: true,
  routes: function routes() {
    return null;
  }
});

/***/ }),

/***/ "./src/presentational-components/shared/table-toolbar-view.scss":
/*!**********************************************************************!*\
  !*** ./src/presentational-components/shared/table-toolbar-view.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/presentational-components/shared/toolbar.js":
/*!*********************************************************!*\
  !*** ./src/presentational-components/shared/toolbar.js ***!
  \*********************************************************/
/*! exports provided: paginationBuilder, bulkSelectBuilder, filterConfigBuilder, activeFiltersConfigBuilder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginationBuilder", function() { return paginationBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulkSelectBuilder", function() { return bulkSelectBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterConfigBuilder", function() { return filterConfigBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeFiltersConfigBuilder", function() { return activeFiltersConfigBuilder; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/components/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/components/ConditionalFilter.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");











var paginationBuilder = function paginationBuilder() {
  var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fetchData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return undefined;
  };
  var filterValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
    itemCount: pagination.count,
    perPage: pagination.limit,
    page: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["getCurrentPage"])(pagination.limit, pagination.offset),
    onSetPage: function onSetPage(_event, page) {
      fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
        offset: (page - 1) * pagination.limit,
        name: filterValue
      }));
    },
    perPageOptions: [{
      title: '5',
      value: 5
    }, {
      title: '10',
      value: 10
    }, {
      title: '20',
      value: 20
    }, {
      title: '50',
      value: 50
    }],
    onPerPageSelect: function onPerPageSelect(_event, perPage) {
      fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
        offset: 0,
        limit: perPage,
        name: filterValue
      }));
    }
  });
};
var bulkSelectBuilder = function bulkSelectBuilder(isLoading) {
  var checkedRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var setCheckedItems = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return undefined;
  };
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  return {
    count: checkedRows.length,
    items: [{
      title: 'Select none (0)',
      onClick: function onClick() {
        setCheckedItems(function () {
          return [];
        });
      }
    }, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, !isLoading && data && data.length > 0 ? {
      title: "Select page (".concat(data.length, ")"),
      onClick: function onClick() {
        setCheckedItems(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["selectedRows"])(data, true));
      }
    } : {})],
    checked: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["calculateChecked"])(data, checkedRows),
    onSelect: function onSelect(value) {
      !isLoading && setCheckedItems(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["selectedRows"])(data, value));
    }
  };
};
var filterConfigBuilder = function filterConfigBuilder(isLoading) {
  var setFilterValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return undefined;
  };
  var fetchData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return undefined;
  };
  var filterValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var pagination = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var titleSingular = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var filterPlaceholder = arguments.length > 6 ? arguments[6] : undefined;
  var filterItems = arguments.length > 7 ? arguments[7] : undefined;
  var textFilters = arguments.length > 8 ? arguments[8] : undefined;
  return {
    items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(textFilters && textFilters.length > 0 ? textFilters.map(function (_ref) {
      var key = _ref.key,
          value = _ref.value;
      return {
        label: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["firstUpperCase"])(key),
        type: 'text',
        filterValues: {
          id: "filter-by-".concat(key),
          key: "filter-by-".concat(key),
          placeholder: "Filter by ".concat(key),
          value: value,
          onChange: function onChange(_e, filterBy) {
            setFilterValue(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({
              offset: 0
            }, key, filterBy)));
            Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["debouncedFetch"])(function () {
              return fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
                offset: 0
              }, textFilters.reduce(function (acc, curr) {
                return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, curr.key, curr.value));
              }, {}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, filterBy)));
            });
          },
          isDisabled: isLoading
        }
      };
    }) : [{
      label: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["firstUpperCase"])(filterPlaceholder || titleSingular),
      type: 'text',
      filterValues: {
        id: 'filter-by-string',
        key: 'filter-by-string',
        placeholder: "Filter by ".concat(filterPlaceholder || titleSingular),
        value: filterValue,
        onChange: function onChange(_e, value) {
          setFilterValue(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
            offset: 0,
            name: value
          }));
          Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["debouncedFetch"])(function () {
            return fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
              offset: 0,
              name: value
            }));
          });
        },
        isDisabled: isLoading
      }
    }]), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(filterItems || []))
  };
};
var activeFiltersConfigBuilder = function activeFiltersConfigBuilder() {
  var filterValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var textFilters = arguments.length > 1 ? arguments[1] : undefined;
  var pagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var setFilterValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return undefined;
  };
  var fetchData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
    return undefined;
  };
  return {
    filters: textFilters && textFilters.length > 0 ? textFilters.map(function (_ref2) {
      var key = _ref2.key,
          value = _ref2.value;
      return value && {
        category: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_9__["firstUpperCase"])(key),
        type: key,
        chips: [{
          name: value
        }]
      };
    }).filter(Boolean) : [{
      name: filterValue
    }],
    onDelete: function onDelete(_e, _ref3, isAll) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 1),
          deleted = _ref4[0];

      setFilterValue(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
        offset: 0,
        name: ''
      }, textFilters ? textFilters.reduce(function (acc, _ref5) {
        var key = _ref5.key,
            value = _ref5.value;
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, deleted.type === key || isAll ? '' : value));
      }, {}) : {
        name: 'sf'
      }));
      fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, pagination, {
        offset: 0
      }, textFilters ? textFilters.reduce(function (acc, _ref6) {
        var key = _ref6.key,
            value = _ref6.value;
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, key, deleted.type === key || isAll ? '' : value));
      }, {}) : {
        name: ''
      }));
    }
  };
};

var Toolbar = function Toolbar(_ref7) {
  var isSelectable = _ref7.isSelectable,
      checkedRows = _ref7.checkedRows,
      setCheckedItems = _ref7.setCheckedItems,
      isLoading = _ref7.isLoading,
      data = _ref7.data,
      titleSingular = _ref7.titleSingular,
      filterValue = _ref7.filterValue,
      setFilterValue = _ref7.setFilterValue,
      pagination = _ref7.pagination,
      fetchData = _ref7.fetchData,
      toolbarButtons = _ref7.toolbarButtons,
      filterPlaceholder = _ref7.filterPlaceholder,
      filterItems = _ref7.filterItems,
      textFilters = _ref7.textFilters;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_6__["PrimaryToolbar"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, isSelectable && {
    bulkSelect: bulkSelectBuilder(isLoading, checkedRows, setCheckedItems, data)
  }, {
    filterConfig: filterConfigBuilder(isLoading, setFilterValue, fetchData, filterValue, pagination, titleSingular, filterPlaceholder, filterItems, textFilters),
    actionsConfig: {
      actions: toolbarButtons()
    }
  }, !isLoading && {
    pagination: paginationBuilder(pagination, fetchData, filterValue)
  }, (filterValue.length > 0 || textFilters && textFilters.length > 0) && {
    activeFiltersConfig: activeFiltersConfigBuilder(filterValue, textFilters, pagination, setFilterValue, fetchData)
  }));
};

Toolbar.propTypes = {
  isSelectable: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  checkedRows: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  setCheckedItems: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  titleSingular: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  setFilterValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  textFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]),
    key: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  })),
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
    count: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
  }),
  filterItems: _redhat_cloud_services_frontend_components_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_7__["ConditionalFilter"].propTypes.items,
  filterPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  isCollapsible: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  fetchData: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  toolbarButtons: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
Toolbar.defaultProps = {
  isCollapsible: false,
  isSelectable: false,
  isLoading: false,
  data: [],
  titleSingular: '',
  filterValue: [],
  pagination: _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_10__["defaultSettings"],
  setCheckedItems: function setCheckedItems() {
    return undefined;
  },
  setFilterValue: function setFilterValue() {
    return undefined;
  },
  fetchData: function fetchData() {
    return undefined;
  },
  toolbarButtons: function toolbarButtons() {
    return [];
  },
  filterItems: [],
  textFilters: []
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/presentational-components/shared/top-toolbar.js":
/*!*************************************************************!*\
  !*** ./src/presentational-components/shared/top-toolbar.js ***!
  \*************************************************************/
/*! exports provided: TopToolbar, TopToolbarTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToolbar", function() { return TopToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToolbarTitle", function() { return TopToolbarTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _loader_placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _breadcrubms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrubms */ "./src/presentational-components/shared/breadcrubms.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/components/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _top_toolbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-toolbar.scss */ "./src/presentational-components/shared/top-toolbar.scss");
/* harmony import */ var _top_toolbar_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_top_toolbar_scss__WEBPACK_IMPORTED_MODULE_6__);







var TopToolbar = function TopToolbar(_ref) {
  var children = _ref.children,
      breadcrumbs = _ref.breadcrumbs;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, breadcrumbs && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "pf-c-page__main-breadcrumb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_breadcrubms__WEBPACK_IMPORTED_MODULE_4__["default"], breadcrumbs)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    className: "ins-rbac-page-header"
  }, children));
};
TopToolbar.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  paddingBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
TopToolbar.defaultProps = {
  paddingBottom: false
};
var TopToolbarTitle = function TopToolbarTitle(_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["PageHeaderTitle"], {
    title: title || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loader_placeholders__WEBPACK_IMPORTED_MODULE_3__["ToolbarTitlePlaceholder"], null),
    className: "ins-rbac-page-header__title"
  }), description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], {
    className: "ins-rbac-page-header__description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, description)), children);
};
TopToolbarTitle.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node)])
};

/***/ }),

/***/ "./src/presentational-components/shared/top-toolbar.scss":
/*!***************************************************************!*\
  !*** ./src/presentational-components/shared/top-toolbar.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/presentational-components/states/DeniedState.js":
/*!*************************************************************!*\
  !*** ./src/presentational-components/states/DeniedState.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DeniedState_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeniedState.scss */ "./src/presentational-components/states/DeniedState.scss");
/* harmony import */ var _DeniedState_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DeniedState_scss__WEBPACK_IMPORTED_MODULE_4__);






var DeniedState = function DeniedState() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__["PageHeaderTitle"], {
    title: "User access"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__["Main"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateVariant"].full,
    className: "ins-c-rbac-denied-state"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateIcon"], {
    icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["LockIcon"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    headingLevel: "h5",
    size: "lg"
  }, " You do not have permissions to view or manage User access "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, "Contact your organization administrator(s) for more information."), document.referrer ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: function onClick() {
      return history.back();
    }
  }, "Return to previous page") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    component: "a",
    href: "."
  }, "Go to landing page"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DeniedState);

/***/ }),

/***/ "./src/presentational-components/states/DeniedState.scss":
/*!***************************************************************!*\
  !*** ./src/presentational-components/states/DeniedState.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/redux/action-types.js":
/*!***********************************!*\
  !*** ./src/redux/action-types.js ***!
  \***********************************/
/*! exports provided: FETCH_GROUP, FETCH_GROUPS, ADD_GROUP, UPDATE_GROUP, REMOVE_GROUPS, FETCH_USERS, ADD_ROLE, FETCH_ROLE, FETCH_ROLES, REMOVE_ROLE, RESET_SELECTED_ROLE, FETCH_GROUP_POLICIES, FETCH_POLICY, ADD_POLICY, UPDATE_POLICY, REMOVE_POLICY, RESET_SELECTED_GROUP, REMOVE_MEMBERS_FROM_GROUP, ADD_MEMBERS_TO_GROUP, REMOVE_ROLES_FROM_GROUP, ADD_ROLES_TO_GROUP, FETCH_ROLES_FOR_GROUP, FETCH_MEMBERS_FOR_GROUP, FETCH_ADD_ROLES_FOR_GROUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUP", function() { return FETCH_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUPS", function() { return FETCH_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_GROUP", function() { return ADD_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GROUP", function() { return UPDATE_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_GROUPS", function() { return REMOVE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ROLE", function() { return ADD_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ROLE", function() { return FETCH_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ROLES", function() { return FETCH_ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ROLE", function() { return REMOVE_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_SELECTED_ROLE", function() { return RESET_SELECTED_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUP_POLICIES", function() { return FETCH_GROUP_POLICIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POLICY", function() { return FETCH_POLICY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POLICY", function() { return ADD_POLICY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POLICY", function() { return UPDATE_POLICY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POLICY", function() { return REMOVE_POLICY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_SELECTED_GROUP", function() { return RESET_SELECTED_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_MEMBERS_FROM_GROUP", function() { return REMOVE_MEMBERS_FROM_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEMBERS_TO_GROUP", function() { return ADD_MEMBERS_TO_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ROLES_FROM_GROUP", function() { return REMOVE_ROLES_FROM_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ROLES_TO_GROUP", function() { return ADD_ROLES_TO_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ROLES_FOR_GROUP", function() { return FETCH_ROLES_FOR_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MEMBERS_FOR_GROUP", function() { return FETCH_MEMBERS_FOR_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADD_ROLES_FOR_GROUP", function() { return FETCH_ADD_ROLES_FOR_GROUP; });
var FETCH_GROUP = 'FETCH_GROUP';
var FETCH_GROUPS = 'FETCH_GROUPS';
var ADD_GROUP = 'ADD_GROUP';
var UPDATE_GROUP = 'UPDATE_GROUP';
var REMOVE_GROUPS = 'REMOVE_GROUPS';
var FETCH_USERS = 'FETCH_USERS';
var ADD_ROLE = 'ADD_ROLE';
var FETCH_ROLE = 'FETCH_ROLE';
var FETCH_ROLES = 'FETCH_ROLES';
var REMOVE_ROLE = 'REMOVE_ROLE';
var RESET_SELECTED_ROLE = 'RESET_SELECTED_ROLE';
var FETCH_GROUP_POLICIES = 'FETCH_GROUP_POLICIES';
var FETCH_POLICY = 'FETCH_POLICY';
var ADD_POLICY = 'ADD_POLICY';
var UPDATE_POLICY = 'UPDATE_POLICY';
var REMOVE_POLICY = 'REMOVE_POLICY';
var RESET_SELECTED_GROUP = 'RESET_SELECTED_GROUP';
var REMOVE_MEMBERS_FROM_GROUP = 'REMOVE_MEMBERS_FROM_GROUP';
var ADD_MEMBERS_TO_GROUP = 'ADD_MEMBERS_TO_GROUP';
var REMOVE_ROLES_FROM_GROUP = 'REMOVE_ROLES_FROM_GROUP';
var ADD_ROLES_TO_GROUP = 'ADD_ROLES_TO_GROUP';
var FETCH_ROLES_FOR_GROUP = 'FETCH_ROLES_FOR_GROUP';
var FETCH_MEMBERS_FOR_GROUP = 'FETCH_MEMBERS_FOR_GROUP';
var FETCH_ADD_ROLES_FOR_GROUP = 'FETCH_ADD_ROLES_FOR_GROUP';

/***/ }),

/***/ "./src/redux/actions/group-actions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/group-actions.js ***!
  \********************************************/
/*! exports provided: fetchGroups, fetchGroup, addGroup, updateGroup, removeGroups, resetSelectedGroup, addMembersToGroup, removeMembersFromGroup, fetchRolesForGroup, fetchMembersForGroup, fetchAddRolesForGroup, addRolesToGroup, removeRolesFromGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroups", function() { return removeGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSelectedGroup", function() { return resetSelectedGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMembersToGroup", function() { return addMembersToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMembersFromGroup", function() { return removeMembersFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRolesForGroup", function() { return fetchRolesForGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMembersForGroup", function() { return fetchMembersForGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddRolesForGroup", function() { return fetchAddRolesForGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRolesToGroup", function() { return addRolesToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRolesFromGroup", function() { return removeRolesFromGroup; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/group/group-helper */ "./src/helpers/group/group-helper.js");


var fetchGroups = function fetchGroups() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_GROUPS"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["fetchGroups"](options)
  };
};
var fetchGroup = function fetchGroup(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["fetchGroup"](apiProps)
  };
};
var addGroup = function addGroup(groupData) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["addGroup"](groupData),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The group was added successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed adding group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The group was not added successfuly.'
        }
      }
    }
  };
};
var updateGroup = function updateGroup(groupData) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["updateGroup"](groupData),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success updating group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The group was updated successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed updating group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The group was not updated successfuly.'
        }
      }
    }
  };
};
var removeGroups = function removeGroups(uuids) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_GROUPS"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["removeGroups"](uuids),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          dismissDelay: 8000,
          dismissable: false,
          title: uuids.length > 1 ? 'Groups deleted successfully' : 'Group deleted successfully'
        },
        rejected: {
          variant: 'danger',
          dismissDelay: 8000,
          dismissable: false,
          title: uuids.length > 1 ? 'There was an error deleting the groups. Please try again.' : 'There was an error deleting the group. Please try again.'
        }
      }
    }
  };
};
var resetSelectedGroup = function resetSelectedGroup() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_SELECTED_GROUP"]
  };
};
var addMembersToGroup = function addMembersToGroup(groupId, members) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_MEMBERS_TO_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["addPrincipalsToGroup"](groupId, members),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding members to group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The members were successfully added to the group.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed adding members to group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The members were not added successfully.'
        }
      }
    }
  };
};
var removeMembersFromGroup = function removeMembersFromGroup(groupId, members) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_MEMBERS_FROM_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["deletePrincipalsFromGroup"](groupId, members),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success removing members from group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The members were successfully removed from the group.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed removing members to group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The members were not removed successfully.'
        }
      }
    }
  };
};
var fetchRolesForGroup = function fetchRolesForGroup(groupId, pagination, options) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_ROLES_FOR_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["fetchRolesForGroup"](groupId, false, pagination, options)
  };
};
var fetchMembersForGroup = function fetchMembersForGroup(groupId, usernames, options) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_MEMBERS_FOR_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["fetchPrincipalsForGroup"](groupId, usernames, options)
  };
};
var fetchAddRolesForGroup = function fetchAddRolesForGroup(groupId, pagination, options) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_ADD_ROLES_FOR_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["fetchRolesForGroup"](groupId, true, pagination, options)
  };
};
var addRolesToGroup = function addRolesToGroup(groupId, roles) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_ROLES_TO_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["addRolesToGroup"](groupId, roles),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding roles to group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The roles were successfully added to the group.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed adding roles to group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The roles were not added successfully.'
        }
      }
    }
  };
};
var removeRolesFromGroup = function removeRolesFromGroup(groupId, roles) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ROLES_FROM_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["deleteRolesFromGroup"](groupId, roles),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success removing roles from group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The roles were successfully removed from the group.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed removing roles to group',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The roles were not removed successfully.'
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/redux/actions/role-actions.js":
/*!*******************************************!*\
  !*** ./src/redux/actions/role-actions.js ***!
  \*******************************************/
/*! exports provided: createRole, fetchRole, fetchRoles, fetchRolesWithPolicies, removeRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRole", function() { return createRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRole", function() { return fetchRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRoles", function() { return fetchRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRolesWithPolicies", function() { return fetchRolesWithPolicies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRole", function() { return removeRole; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_role_role_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/role/role-helper */ "./src/helpers/role/role-helper.js");


var createRole = function createRole(roleData) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_ROLE"],
    payload: _helpers_role_role_helper__WEBPACK_IMPORTED_MODULE_1__["createRole"](roleData),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding role',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The role was added successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed adding role',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The role was not added successfuly.'
        }
      }
    }
  };
};
var fetchRole = function fetchRole(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_ROLE"],
    payload: _helpers_role_role_helper__WEBPACK_IMPORTED_MODULE_1__["fetchRole"](apiProps)
  };
};
var fetchRoles = function fetchRoles() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_ROLES"],
    payload: _helpers_role_role_helper__WEBPACK_IMPORTED_MODULE_1__["fetchRoles"](options)
  };
};
var fetchRolesWithPolicies = function fetchRolesWithPolicies() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_ROLES"],
    payload: _helpers_role_role_helper__WEBPACK_IMPORTED_MODULE_1__["fetchRolesWithPolicies"](options)
  };
};
var removeRole = function removeRole(role) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ROLE"],
    payload: _helpers_role_role_helper__WEBPACK_IMPORTED_MODULE_1__["removeRole"](role),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success removing role',
          dismissDelay: 8000,
          dismissable: false,
          description: 'The role was removed successfully.'
        }
      }
    }
  };
};

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

/***/ "./src/redux/reducers/group-reducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/group-reducer.js ***!
  \*********************************************/
/*! exports provided: groupsInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsInitialState", function() { return groupsInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/action-types */ "./src/redux/action-types.js");



var _$concat$$concat$$con;

 // Initial State

var groupsInitialState = {
  groups: {
    data: [],
    meta: {
      count: 0,
      limit: 10,
      offset: 0
    }
  },
  selectedGroup: {
    addRoles: {},
    members: {}
  },
  isLoading: false,
  isRecordLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setRecordLoadingState = function setRecordLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isRecordLoading: true,
    selectedGroup: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup, {
      loaded: false
    })
  });
};

var setGroups = function setGroups(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    groups: payload,
    isLoading: false
  });
};

var setGroup = function setGroup(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    groups: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.groups, {
      data: state.groups.data.map(function (group) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, group, payload.uuid === group.uuid && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, payload, {
          loaded: true
        }));
      })
    }),
    selectedGroup: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup, {
      members: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup.members, {
        data: payload.principals
      })
    }, payload, {
      loaded: true
    })
  });
};

var resetSelectedGroup = function resetSelectedGroup(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedGroup: undefined
  });
};

var setRolesForGroup = function setRolesForGroup(state, _ref3) {
  var payload = _ref3.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isRecordLoading: false,
    selectedGroup: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup, {
      roles: payload.data,
      pagination: payload.meta,
      loaded: true
    })
  });
};

var setMembersForGroupLoading = function setMembersForGroupLoading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedGroup: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup || {}, {
      members: {
        isLoading: true
      }
    })
  });
};

var setMembersForGroup = function setMembersForGroup(state, _ref4) {
  var payload = _ref4.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedGroup: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup || {}, {
      members: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
        isLoading: false
      }, payload)
    })
  });
};

var setAddRolesLoading = function setAddRolesLoading(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedGroup: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup, {
      addRoles: {
        loaded: false
      }
    })
  });
};

var setAddRolesForGroup = function setAddRolesForGroup(state, _ref5) {
  var payload = _ref5.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedGroup: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.selectedGroup, {
      addRoles: {
        roles: payload.data,
        pagination: payload.meta,
        loaded: true
      }
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUPS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUPS"], "_FULFILLED"), setGroups), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP"], "_PENDING"), setRecordLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP"], "_FULFILLED"), setGroup), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ROLES_FOR_GROUP"], "_PENDING"), setRecordLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ROLES_FOR_GROUP"], "_FULFILLED"), setRolesForGroup), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_MEMBERS_FOR_GROUP"], "_PENDING"), setMembersForGroupLoading), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_MEMBERS_FOR_GROUP"], "_FULFILLED"), setMembersForGroup), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ADD_ROLES_FOR_GROUP"], "_PENDING"), setAddRolesLoading), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ADD_ROLES_FOR_GROUP"], "_FULFILLED"), setAddRolesForGroup), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, _redux_action_types__WEBPACK_IMPORTED_MODULE_2__["RESET_SELECTED_GROUP"], resetSelectedGroup), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/policy-reducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/policy-reducer.js ***!
  \**********************************************/
/*! exports provided: policiesInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "policiesInitialState", function() { return policiesInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/action-types */ "./src/redux/action-types.js");



var _$concat$$concat$$con;

 // Initial State

var policiesInitialState = {
  policies: {
    data: [],
    meta: {
      count: 0,
      limit: 10,
      offset: 0
    }
  },
  policy: {},
  isLoading: false,
  isRecordLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setPolicies = function setPolicies(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    policies: payload,
    isLoading: false
  });
};

var setRecordLoadingState = function setRecordLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isRecordLoading: true
  });
};

var selectPolicy = function selectPolicy(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedPolicy: payload,
    isRecordLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP_POLICIES"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP_POLICIES"], "_FULFILLED"), setPolicies), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_POLICY"], "_PENDING"), setRecordLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_POLICY"], "_FULFILLED"), selectPolicy), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/role-reducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/role-reducer.js ***!
  \********************************************/
/*! exports provided: rolesInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rolesInitialState", function() { return rolesInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/action-types */ "./src/redux/action-types.js");



var _$concat$$concat$$con;

 // Initial State

var rolesInitialState = {
  isLoading: false,
  isRecordLoading: false,
  roles: {
    data: [],
    meta: {
      count: 0,
      limit: 5,
      offset: 0
    }
  },
  selectedRole: {}
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setRecordLoadingState = function setRecordLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isRecordLoading: true
  });
};

var setRole = function setRole(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedRole: payload,
    isRecordLoading: false
  });
};

var setRoles = function setRoles(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    roles: payload,
    isLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ROLE"], "_FULFILLED"), setRole), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ROLE"], "_PENDING"), setRecordLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ROLES"], "_FULFILLED"), setRoles), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ROLES"], "_PENDING"), setLoadingState), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/user-reducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/user-reducer.js ***!
  \********************************************/
/*! exports provided: usersInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersInitialState", function() { return usersInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/action-types */ "./src/redux/action-types.js");



var _$concat$$concat;

 // Initial State

var usersInitialState = {
  selectedUser: {},
  isUserDataLoading: false,
  users: []
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isUserDataLoading: true
  });
};

var setUsers = function setUsers(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    users: payload,
    isUserDataLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_USERS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_USERS"], "_FULFILLED"), setUsers), _$concat$$concat);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");






var Groups = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/group/groups */ "./src/smart-components/group/groups.js"));
  });
});
var Roles = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/role/roles */ "./src/smart-components/role/roles.js"));
  });
});
var Users = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/user/users */ "./src/smart-components/user/users.js"));
  });
});
var paths = {
  rbac: '/',
  groups: '/groups',
  roles: '/roles',
  users: '/users'
};

var InsightsRoute = function InsightsRoute(_ref) {
  var rootClass = _ref.rootClass,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["rootClass"]);

  var root = document.getElementById('root');
  root.removeAttribute('class');
  root.classList.add("page__".concat(rootClass), 'pf-l-page__main', 'pf-c-page__main');
  root.setAttribute('role', 'main');
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], rest);
};

InsightsRoute.propTypes = {
  rootClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
var Routes = function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_5__["AppPlaceholder"], null)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.groups,
    component: Groups,
    rootClass: "groups"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.roles,
    component: Roles,
    rootClass: "roles"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.users,
    component: Users,
    rootClass: "roles"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: paths.groups
      });
    }
  })));
};
Routes.propTypes = {
  childProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

/***/ }),

/***/ "./src/smart-components/app-tabs/app-tabs.js":
/*!***************************************************!*\
  !*** ./src/smart-components/app-tabs/app-tabs.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _app_tabs_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-tabs.scss */ "./src/smart-components/app-tabs/app-tabs.scss");
/* harmony import */ var _app_tabs_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_tabs_scss__WEBPACK_IMPORTED_MODULE_4__);






var AppTabs = function AppTabs(_ref) {
  var push = _ref.history.push,
      pathname = _ref.location.pathname,
      tabItems = _ref.tabItems,
      isHeader = _ref.isHeader;
  var activeTab = tabItems.find(function (_ref2) {
    var name = _ref2.name;
    return pathname.includes(name);
  });

  var handleTabClick = function handleTabClick(_event, tabIndex) {
    return push(tabItems[tabIndex].name);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    className: isHeader ? "ins-rbac-page-header__tabs" : '',
    activeKey: activeTab ? activeTab.eventKey : 0,
    onSelect: handleTabClick
  }, tabItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      title: item.title,
      key: item.eventKey,
      eventKey: item.eventKey,
      name: item.name
    });
  }));
};

AppTabs.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }),
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }),
  tabItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  isHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AppTabs));

/***/ }),

/***/ "./src/smart-components/app-tabs/app-tabs.scss":
/*!*****************************************************!*\
  !*** ./src/smart-components/app-tabs/app-tabs.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/smart-components/common/form-renderer.js":
/*!******************************************************!*\
  !*** ./src/smart-components/common/form-renderer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/index.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../presentational-components/shared/pf4-select-wrapper */ "./src/presentational-components/shared/pf4-select-wrapper.js");









var buttonPositioning = {
  "default": {},
  modal: {
    buttonOrder: ['cancel', 'reset', 'save'],
    buttonClassName: 'modal-form-right-align'
  }
};

var FormRenderer = function FormRenderer(_ref) {
  var componentMapper = _ref.componentMapper,
      formContainer = _ref.formContainer,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["componentMapper", "formContainer"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: buttonPositioning[formContainer].buttonClassName
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    formFieldsMapper: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["formFieldsMapper"], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      componentMapper: componentMapper
    }, _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__["componentTypes"].SELECT, _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"])),
    layoutMapper: _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["layoutMapper"]
  }, buttonPositioning[formContainer], rest)));
};

FormRenderer.propTypes = {
  componentMapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  formContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['default', 'modal'])
};
FormRenderer.defaultProps = {
  componentMapper: {},
  formContainer: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (FormRenderer);

/***/ }),

/***/ "./src/smart-components/common/hideWizard.scss":
/*!*****************************************************!*\
  !*** ./src/smart-components/common/hideWizard.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/smart-components/common/warningModal.js":
/*!*****************************************************!*\
  !*** ./src/smart-components/common/warningModal.js ***!
  \*****************************************************/
/*! exports provided: WarningModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningModal", function() { return WarningModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _warningModal_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warningModal.scss */ "./src/smart-components/common/warningModal.scss");
/* harmony import */ var _warningModal_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_warningModal_scss__WEBPACK_IMPORTED_MODULE_4__);





var WarningModal = function WarningModal(_ref) {
  var type = _ref.type,
      isOpen = _ref.isOpen,
      onModalCancel = _ref.onModalCancel,
      onConfirmCancel = _ref.onConfirmCancel;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ins-c-wizard__cancel-warning-header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationTriangleIcon"], {
      size: "md",
      className: "ins-c-wizard__cancel-warning-header--icon"
    }), "Exit ", type, " creation"),
    isSmall: true,
    className: "ins-c-wizard__cancel-warning",
    isOpen: isOpen,
    onClose: onModalCancel,
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "confirm",
      variant: "danger",
      onClick: onConfirmCancel
    }, "Yes, I want to exit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "cancel",
      variant: "link",
      onClick: onModalCancel
    }, "No, I want to continue")],
    isFooterLeftAligned: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Are you sure you want to stop creating a ", type, " in user access? "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " All inputs will be discarded."));
};
WarningModal.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onModalCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onConfirmCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/smart-components/common/warningModal.scss":
/*!*******************************************************!*\
  !*** ./src/smart-components/common/warningModal.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/smart-components/group/add-group/add-group-wizard.js":
/*!******************************************************************!*\
  !*** ./src/smart-components/group/add-group/add-group-wizard.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux/actions/user-actions */ "./src/redux/actions/user-actions.js");
/* harmony import */ var _summary_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./summary-content */ "./src/smart-components/group/add-group/summary-content.js");
/* harmony import */ var _group_information__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./group-information */ "./src/smart-components/group/add-group/group-information.js");
/* harmony import */ var _set_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./set-users */ "./src/smart-components/group/add-group/set-users.js");
/* harmony import */ var _set_roles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./set-roles */ "./src/smart-components/group/add-group/set-roles.js");
/* harmony import */ var _common_warningModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/warningModal */ "./src/smart-components/common/warningModal.js");
/* harmony import */ var _common_hideWizard_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/hideWizard.scss */ "./src/smart-components/common/hideWizard.scss");
/* harmony import */ var _common_hideWizard_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_common_hideWizard_scss__WEBPACK_IMPORTED_MODULE_19__);





















var AddGroupWizard = function AddGroupWizard(_ref) {
  var addNotification = _ref.addNotification,
      addGroup = _ref.addGroup,
      postMethod = _ref.postMethod,
      closeUrl = _ref.closeUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      selectedUsers = _useState2[0],
      setSelectedUsers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      selectedRoles = _useState4[0],
      setSelectedRoles = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      formData = _useState6[0],
      setValues = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      isGroupInfoValid = _useState8[0],
      setIsGroupInfoValid = _useState8[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  var handleChange = function handleChange(data) {
    setValues(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, formData, data));
  };

  var steps = [{
    name: 'General information',
    component: new _group_information__WEBPACK_IMPORTED_MODULE_15__["default"](formData, handleChange, setIsGroupInfoValid),
    enableNext: isGroupInfoValid
  }, {
    name: 'Add members',
    component: new _set_users__WEBPACK_IMPORTED_MODULE_16__["default"]({
      formData: formData,
      selectedUsers: selectedUsers,
      setSelectedUsers: setSelectedUsers
    })
  }, {
    name: 'Assign roles',
    component: new _set_roles__WEBPACK_IMPORTED_MODULE_17__["default"]({
      formData: formData,
      selectedRoles: selectedRoles,
      setSelectedRoles: setSelectedRoles
    })
  }, {
    name: 'Review',
    component: new _summary_content__WEBPACK_IMPORTED_MODULE_14__["default"]({
      values: formData,
      selectedUsers: selectedUsers,
      selectedRoles: selectedRoles
    }),
    nextButtonText: 'Confirm',
    enableNext: isGroupInfoValid
  }];

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var user_data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user_data = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, formData, {
                user_list: selectedUsers ? selectedUsers.map(function (user) {
                  return {
                    username: user.label
                  };
                }) : undefined,
                roles_list: selectedRoles ? selectedRoles.map(function (role) {
                  return role.uuid;
                }) : undefined
              });
              _context.next = 3;
              return addGroup(user_data);

            case 3:
              postMethod();
              history.push(closeUrl);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onCancel = function onCancel() {
    addNotification({
      variant: 'warning',
      title: 'Adding group',
      dismissDelay: 8000,
      dismissable: false,
      description: 'Adding group was canceled by the user.'
    });
    history.push('/groups');
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      cancelWarningVisible = _useState10[0],
      setcancelWarningVisible = _useState10[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Wizard"], {
    className: cancelWarningVisible && 'ins-m-wizard__hidden',
    isLarge: true,
    isCompactNav: true,
    title: "Create and configure a group",
    description: "To give users access permissions, create a group and assign roles to it.",
    isOpen: true,
    onClose: function onClose() {
      return setcancelWarningVisible(true);
    },
    onSave: onSubmit,
    steps: steps
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_warningModal__WEBPACK_IMPORTED_MODULE_18__["WarningModal"], {
    type: "group",
    isOpen: cancelWarningVisible,
    onModalCancel: function onModalCancel() {
      return setcancelWarningVisible(false);
    },
    onConfirmCancel: onCancel
  }));
};

AddGroupWizard.defaultProps = {
  users: [],
  inputValue: '',
  selectedUsers: [],
  selectedRoles: [],
  closeUrl: '/groups',
  postMethod: function postMethod() {
    return undefined;
  }
};
AddGroupWizard.propTypes = {
  addGroup: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  selectedUsers: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  match: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  postMethod: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var _ref3$roleReducer = _ref3.roleReducer,
      meta = _ref3$roleReducer.roles.meta,
      filterValue = _ref3$roleReducer.filterValue,
      isLoading = _ref3$roleReducer.isLoading;
  return {
    pagination: meta,
    isLoading: isLoading,
    searchFilter: filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__["addNotification"],
    addGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_11__["addGroup"],
    fetchGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_11__["fetchGroup"],
    fetchRoles: _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_12__["fetchRoles"],
    fetchUsers: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_13__["fetchUsers"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddGroupWizard));

/***/ }),

/***/ "./src/smart-components/group/add-group/group-information.js":
/*!*******************************************************************!*\
  !*** ./src/smart-components/group/add-group/group-information.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var GroupInformation = function GroupInformation(formValue, onHandleChange, setIsGroupInfoValid) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: "xl"
  }, " Enter group details ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    label: "Group name",
    isRequired: true,
    fieldId: "group-name"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    isRequired: true,
    type: "text",
    id: "group-name",
    name: "group-name",
    "aria-describedby": "group-name",
    value: formValue.name,
    onChange: function onChange(_, event) {
      setIsGroupInfoValid(event.currentTarget.value.trim().length > 0);
      onHandleChange({
        name: event.currentTarget.value
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    label: "Group description",
    fieldId: "group-description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextArea"], {
    type: "text",
    id: "group-description",
    name: "group-description",
    value: formValue.description,
    onChange: function onChange(_, event) {
      return onHandleChange({
        description: event.currentTarget.value
      });
    }
  }))))));
};

GroupInformation.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GroupInformation);

/***/ }),

/***/ "./src/smart-components/group/add-group/roles-list.js":
/*!************************************************************!*\
  !*** ./src/smart-components/group/add-group/roles-list.js ***!
  \************************************************************/
/*! exports provided: default, ExcludedRolesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcludedRolesList", function() { return ExcludedRolesList; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../presentational-components/shared/table-toolbar-view */ "./src/presentational-components/shared/table-toolbar-view.js");
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");













var columns = [{
  title: 'Name',
  orderBy: 'name'
}, {
  title: 'Description'
}];

var createRows = function createRows(data, expanded) {
  var checkedRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return data ? data.reduce(function (acc, _ref) {
    var uuid = _ref.uuid,
        name = _ref.name,
        description = _ref.description;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(acc), [{
      uuid: uuid,
      cells: [name, description],
      selected: Boolean(checkedRows && checkedRows.find(function (row) {
        return row.uuid === uuid;
      }))
    }]);
  }, []) : [];
};

var RolesList = function RolesList(_ref2) {
  var roles = _ref2.roles,
      fetchRoles = _ref2.fetchRoles,
      isLoading = _ref2.isLoading,
      pagination = _ref2.pagination,
      selectedRoles = _ref2.selectedRoles,
      setSelectedRoles = _ref2.setSelectedRoles;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      filterValue = _useState2[0],
      _setFilterValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchRoles({});
  }, []);

  var setCheckedItems = function setCheckedItems(newSelection) {
    setSelectedRoles(function (roles) {
      return newSelection(roles).map(function (_ref3) {
        var uuid = _ref3.uuid,
            name = _ref3.name,
            label = _ref3.label;
        return {
          uuid: uuid,
          label: label || name
        };
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_8__["TableToolbarView"], {
    columns: columns,
    isSelectable: true,
    isCompact: true,
    borders: false,
    createRows: createRows,
    data: roles,
    filterValue: filterValue,
    fetchData: function fetchData(config) {
      return fetchRoles(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["mappedProps"])(config));
    },
    setFilterValue: function setFilterValue(_ref4) {
      var name = _ref4.name;
      return _setFilterValue(name);
    },
    isLoading: isLoading,
    pagination: pagination,
    checkedRows: selectedRoles,
    setCheckedItems: setCheckedItems,
    titlePlural: "roles",
    titleSingular: "role"
  });
};

var mapStateToProps = function mapStateToProps(_ref5) {
  var _ref5$roleReducer = _ref5.roleReducer,
      roles = _ref5$roleReducer.roles,
      isLoading = _ref5$roleReducer.isLoading;
  return {
    roles: roles.data,
    pagination: roles.meta,
    isLoading: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRoles: function fetchRoles(apiProps) {
      dispatch(Object(_redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_9__["fetchRolesWithPolicies"])(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["mappedProps"])(apiProps)));
    },
    addNotification: function addNotification() {
      return dispatch(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__["addNotification"].apply(void 0, arguments));
    }
  };
};

RolesList.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }),
  roles: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  fetchRoles: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  setSelectedRoles: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  selectedRoles: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  })
};
RolesList.defaultProps = {
  roles: [],
  pagination: _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_7__["defaultCompactSettings"]
};

var mapStateToPropsGroup = function mapStateToPropsGroup(_ref6) {
  var selectedGroup = _ref6.groupReducer.selectedGroup;
  var roles = selectedGroup.addRoles.roles;
  return {
    roles: roles,
    pagination: selectedGroup.addRoles.pagination || _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_7__["defaultSettings"], {
      count: roles && roles.length
    }),
    isLoading: !selectedGroup.addRoles.loaded,
    groupId: selectedGroup.uuid
  };
};

var mapDispatchToPropsGroup = function mapDispatchToPropsGroup(dispatch) {
  return {
    fetchRoles: function fetchRoles(groupId, apiProps) {
      dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_11__["fetchAddRolesForGroup"])(groupId, apiProps));
    },
    addNotification: function addNotification() {
      return dispatch(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__["addNotification"].apply(void 0, arguments));
    }
  };
};

var mergeProps = function mergeProps(propsFromState, propsFromDispatch, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, ownProps, propsFromState, propsFromDispatch, {
    fetchRoles: function fetchRoles(apiProps) {
      return propsFromDispatch.fetchRoles(propsFromState.groupId, apiProps);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(RolesList));
var ExcludedRolesList = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToPropsGroup, mapDispatchToPropsGroup, mergeProps)(RolesList);

/***/ }),

/***/ "./src/smart-components/group/add-group/set-roles.js":
/*!***********************************************************!*\
  !*** ./src/smart-components/group/add-group/set-roles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _roles_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles-list */ "./src/smart-components/group/add-group/roles-list.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_4__);






var SetRoles = function SetRoles(_ref) {
  var selectedRoles = _ref.selectedRoles,
      setSelectedRoles = _ref.setSelectedRoles,
      title = _ref.title,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: "xl"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    headingLevel: "h4",
    size: "xl"
  }, " Assign roles to the group "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "pf-u-mt-0",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, description || 'Select one or more roles to add to this group.'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    fieldId: "select-role"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_roles_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedRoles: selectedRoles,
    setSelectedRoles: setSelectedRoles
  })))))));
};

SetRoles.propTypes = {
  selectedRoles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  setSelectedRoles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SetRoles);

/***/ }),

/***/ "./src/smart-components/group/add-group/set-users.js":
/*!***********************************************************!*\
  !*** ./src/smart-components/group/add-group/set-users.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _users_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-list */ "./src/smart-components/group/add-group/users-list.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_4__);






var SetUsers = function SetUsers(_ref) {
  var selectedUsers = _ref.selectedUsers,
      setSelectedUsers = _ref.setSelectedUsers,
      title = _ref.title,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    size: "xl"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    headingLevel: "h4",
    size: "xl"
  }, " Add members to the group "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "pf-u-mt-0",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, description || 'Select users from your organization to add to this group.'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    fieldId: "select-user"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUsers: selectedUsers,
    setSelectedUsers: setSelectedUsers
  })))))));
};

SetUsers.propTypes = {
  selectedUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  setSelectedUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SetUsers);

/***/ }),

/***/ "./src/smart-components/group/add-group/summary-content.js":
/*!*****************************************************************!*\
  !*** ./src/smart-components/group/add-group/summary-content.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");





var SummaryContent = function SummaryContent(formData) {
  var _ref = formData.values ? formData.values : {
    name: '',
    description: ''
  },
      name = _ref.name,
      description = _ref.description;

  var selectedUsers = formData.selectedUsers ? formData.selectedUsers : [];
  var selectedRoles = formData.selectedRoles ? formData.selectedRoles : [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    headingLevel: "h4",
    size: "xl"
  }, " Add members to the group "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "pf-u-mt-0",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, "Confirm the details for this group, or click Back to revise."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    className: "ins-c-rbac__summary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail heading content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, "Group name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 10
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail content content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail heading content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, "Group description")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 10
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail content content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail heading content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, "Member(s)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 10
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "groups-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, selectedUsers.map(function (role, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: "pf-u-mb-0",
      key: index
    }, role.label);
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail heading content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, "Role(s)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    span: 10
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "groups-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, selectedRoles.map(function (role, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: "pf-u-mb-0",
      key: index
    }, role.label);
  })))))))));
};

SummaryContent.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  groups: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (SummaryContent);

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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
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
    pagination: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, pagination, {
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
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, data, {
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

/***/ "./src/smart-components/group/edit-group-modal.js":
/*!********************************************************!*\
  !*** ./src/smart-components/group/edit-group-modal.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");














var EditGroupModal = function EditGroupModal(_ref) {
  var addNotification = _ref.addNotification,
      updateGroup = _ref.updateGroup,
      postMethod = _ref.postMethod,
      closeUrl = _ref.closeUrl,
      isOpen = _ref.isOpen,
      group = _ref.group,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      selectedGroup = _useState2[0],
      setSelectedGroup = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useRouteMatch"])('/groups/edit/:id');

  var setGroupData = function setGroupData(groupData) {
    setSelectedGroup(groupData);
  };

  var fetchData = function fetchData() {
    match && Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroup"])(match.params.id).payload.then(function (data) {
      return setGroupData(data);
    })["catch"](function () {
      return setGroupData(undefined);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSelectedGroup(group);
  }, [group]);

  var onSubmit = function onSubmit(data) {
    var user_data = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, data);

    postMethod ? updateGroup(user_data).then(function () {
      return postMethod();
    }).then(history.push(closeUrl)) : updateGroup(user_data).then(function () {
      return history.push(closeUrl);
    });
  };

  var onCancel = function onCancel() {
    addNotification({
      variant: 'warning',
      dismissDelay: 8000,
      dismissable: false,
      title: selectedGroup ? 'Editing group' : 'Adding group',
      description: selectedGroup ? 'Edit group was canceled by the user.' : 'Adding group was canceled by the user.'
    });
    onClose();
    history.push(closeUrl);
  };

  var schema = {
    fields: [{
      name: 'name',
      label: 'Name',
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_7__["componentTypes"].TEXT_FIELD,
      validate: [{
        type: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_7__["validatorTypes"].REQUIRED
      }]
    }, {
      name: 'description',
      label: 'Description',
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_7__["componentTypes"].TEXTAREA_FIELD
    }]
  }; // eslint-disable-next-line react/prop-types

  var formButtons = function formButtons(_ref2) {
    var pristine = _ref2.pristine,
        valid = _ref2.valid,
        submit = _ref2.form.submit;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      isDisabled: pristine || !valid,
      onClick: submit,
      variant: "primary"
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      variant: "link",
      onClick: onCancel
    }, "Cancel"));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    isLarge: true,
    width: '50%',
    title: 'Edit group\'s information',
    isOpen: isOpen,
    onClose: onCancel
  }, " ", selectedGroup ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "Make any changes to ".concat(selectedGroup.name, " group."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["GridItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schema: schema,
    schemaType: "mozilla",
    onSubmit: onSubmit,
    formContainer: "modal",
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, selectedGroup),
    renderFormButtons: formButtons
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Skeleton"], null));
};

EditGroupModal.defaultProps = {
  closeUrl: '/groups',
  onClose: function onClose() {
    return null;
  },
  onSubmit: function onSubmit() {
    return null;
  }
};
EditGroupModal.propTypes = {
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  updateGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  postMethod: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  group: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var isLoading = _ref3.groupReducer.isLoading;
  return {
    isLoading: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_10__["addNotification"],
    updateGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["updateGroup"],
    fetchGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroup"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(EditGroupModal));

/***/ }),

/***/ "./src/smart-components/group/group-row-wrapper.js":
/*!*********************************************************!*\
  !*** ./src/smart-components/group/group-row-wrapper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");







var GroupRowWrapper = function GroupRowWrapper(_ref) {
  var className = _ref.className,
      row = _ref.row,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className", "row"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["RowWrapper"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(className, {
      'ins-c-rbac__group-default': row.isPlatformDefault
    }),
    row: row
  }, props));
};

GroupRowWrapper.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    isPlatformDefault: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  }),
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GroupRowWrapper);

/***/ }),

/***/ "./src/smart-components/group/group-table-helpers.js":
/*!***********************************************************!*\
  !*** ./src/smart-components/group/group-table-helpers.js ***!
  \***********************************************************/
/*! exports provided: createRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRows", function() { return createRows; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__);




var createRows = function createRows(data, opened) {
  var selectedRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return data.reduce(function (acc, _ref) {
    var uuid = _ref.uuid,
        name = _ref.name,
        roleCount = _ref.roleCount,
        principalCount = _ref.principalCount,
        modified = _ref.modified,
        isPlatformDefault = _ref.platform_default;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [{
      uuid: uuid,
      isPlatformDefault: isPlatformDefault,
      cells: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: uuid
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/groups/detail/".concat(uuid)
      }, name)), roleCount, principalCount, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: "".concat(uuid, "-modified")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__["DateFormat"], {
        date: modified,
        type: "relative"
      }))],
      selected: Boolean(selectedRows && selectedRows.find(function (row) {
        return row.uuid === uuid;
      }))
    }]);
  }, []);
};

/***/ }),

/***/ "./src/smart-components/group/group.js":
/*!*********************************************!*\
  !*** ./src/smart-components/group/group.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _app_tabs_app_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-tabs/app-tabs */ "./src/smart-components/app-tabs/app-tabs.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _principal_principals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./principal/principals */ "./src/smart-components/group/principal/principals.js");
/* harmony import */ var _role_group_roles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role/group-roles */ "./src/smart-components/group/role/group-roles.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _group_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./group.scss */ "./src/smart-components/group/group.scss");
/* harmony import */ var _group_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_group_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _edit_group_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-group-modal */ "./src/smart-components/group/edit-group-modal.js");


















var Group = function Group(_ref) {
  var uuid = _ref.match.params.uuid,
      group = _ref.group,
      fetchGroup = _ref.fetchGroup,
      isFetching = _ref.isFetching;

  var breadcrumbsList = function breadcrumbsList() {
    return [{
      title: 'Groups',
      to: '/groups'
    }, {
      title: group.name,
      isActive: true
    }];
  };

  var tabItems = [{
    eventKey: 0,
    title: 'Roles',
    name: "/groups/detail/".concat(uuid, "/roles")
  }, {
    eventKey: 1,
    title: 'Members',
    name: "/groups/detail/".concat(uuid, "/members")
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      showEdit = _useState2[0],
      setShowEdit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      showDefaultGroupChangedInfo = _useState4[0],
      setShowDefaultGroupChangedInfo = _useState4[1];

  var fetchData = function fetchData(apiProps) {
    fetchGroup(apiProps);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchData(uuid);
  }, []);

  var defaultGroupChangedIcon = function defaultGroupChangedIcon(name) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        display: 'inline-flex'
      }
    }, name, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "pf-u-ml-sm"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Popover"], {
      "aria-label": "default-group-icon",
      bodyContent: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Now that you have edited the ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Default user access"), " group, the system will no longer update it with new default access roles. The group name has changed to ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Custom default user access"), ".")
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__["InfoCircleIcon"], {
      className: "ins-c-rbac__default-group-info-icon"
    }))));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_8__["TopToolbar"], {
    breadcrumbs: breadcrumbsList()
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Split"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["SplitItem"], {
    isFilled: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_8__["TopToolbarTitle"], {
    title: !isFetching && group ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, group.platform_default && !group.system ? defaultGroupChangedIcon(group.name) : group.name) : undefined,
    description: !isFetching && group ? group.description : undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["SplitItem"], null, group.platform_default ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    onClick: function onClick() {
      return setShowEdit(true);
    },
    variant: "secondary"
  }, "Edit group")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_edit_group_modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    isOpen: showEdit,
    group: group,
    closeUrl: "group/detail/".concat(uuid),
    onClose: function onClose() {
      return setShowEdit(false);
    },
    postMethod: function postMethod() {
      fetchData(uuid);
      setShowEdit(false);
    }
  })), showDefaultGroupChangedInfo ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Alert"], {
    variant: "info",
    isInline: true,
    title: "Default user access group has changed",
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["AlertActionCloseButton"], {
      onClose: function onClose() {
        return setShowDefaultGroupChangedInfo(false);
      }
    }),
    className: "pf-u-mb-lg pf-u-mt-sm"
  }, "Now that you have edited the ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Default user access"), " group, the system will no longer update it with new default access roles. The group name has changed to ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Custom default user access"), ".") : null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_app_tabs_app_tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isHeader: true,
    tabItems: tabItems
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/groups/detail/:uuid/roles",
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_role_group_roles__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        onDefaultGroupChanged: setShowDefaultGroupChangedInfo
      }));
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/groups/detail/:uuid/members",
    component: _principal_principals__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/groups/detail/".concat(uuid, "/roles")
      });
    }
  })), !group && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_12__["ListLoader"], null));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$groupReducer = _ref2.groupReducer,
      selectedGroup = _ref2$groupReducer.selectedGroup,
      isLoading = _ref2$groupReducer.isLoading;
  return {
    group: selectedGroup,
    isFetching: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])({
    fetchGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_11__["fetchGroup"]
  }, dispatch);
};

Group.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
  }),
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }),
  match: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  group: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    uuid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  }),
  isFetching: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Group.defaultProps = {
  isFetching: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Group));

/***/ }),

/***/ "./src/smart-components/group/group.scss":
/*!***********************************************!*\
  !*** ./src/smart-components/group/group.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/smart-components/group/groups.js":
/*!**********************************************!*\
  !*** ./src/smart-components/group/groups.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _add_group_add_group_wizard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-group/add-group-wizard */ "./src/smart-components/group/add-group/add-group-wizard.js");
/* harmony import */ var _edit_group_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-group-modal */ "./src/smart-components/group/edit-group-modal.js");
/* harmony import */ var _remove_group_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove-group-modal */ "./src/smart-components/group/remove-group-modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../presentational-components/shared/table-toolbar-view */ "./src/presentational-components/shared/table-toolbar-view.js");
/* harmony import */ var _group_table_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./group-table-helpers */ "./src/smart-components/group/group-table-helpers.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./group */ "./src/smart-components/group/group.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _role_role__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../role/role */ "./src/smart-components/role/role.js");
/* harmony import */ var _group_row_wrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./group-row-wrapper */ "./src/smart-components/group/group-row-wrapper.js");
/* harmony import */ var _groups_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groups.scss */ "./src/smart-components/group/groups.scss");
/* harmony import */ var _groups_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_groups_scss__WEBPACK_IMPORTED_MODULE_19__);




















var columns = [{
  title: 'Name',
  key: 'name',
  transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]]
}, {
  title: 'Roles'
}, {
  title: 'Members'
}, {
  title: 'Last modified',
  key: 'modified',
  transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]]
}];

var Groups = function Groups() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      filterValue = _useState2[0],
      _setFilterValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      removeGroupsList = _useState6[0],
      setRemoveGroupsList = _useState6[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (_ref) {
    var _ref$groupReducer = _ref.groupReducer,
        groups = _ref$groupReducer.groups,
        isLoading = _ref$groupReducer.isLoading;
    return {
      groups: groups.data,
      pagination: groups.meta,
      userIdentity: groups.identity,
      isLoading: isLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_10__["shallowEqual"]),
      groups = _useSelector.groups,
      pagination = _useSelector.pagination,
      userIdentity = _useSelector.userIdentity,
      isLoading = _useSelector.isLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_13__["fetchGroups"])(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, pagination, {
      name: filterValue
    })));
  }, []);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();

  var setCheckedItems = function setCheckedItems(newSelection) {
    setSelectedRows(function (rows) {
      return newSelection(rows).filter(function (_ref2) {
        var isPlatformDefault = _ref2.platform_default;
        return !isPlatformDefault;
      }).map(function (_ref3) {
        var uuid = _ref3.uuid,
            name = _ref3.name;
        return {
          uuid: uuid,
          label: name
        };
      });
    });
  };

  var routes = function routes() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/groups/add-group"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_add_group_add_group_wizard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postMethod: function postMethod(config) {
        dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_13__["fetchGroups"])(config));

        _setFilterValue('');
      }
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/groups/edit/:id"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_edit_group_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postMethod: function postMethod(config) {
        dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_13__["fetchGroups"])(config));

        _setFilterValue('');
      },
      isOpen: true
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/groups/removegroups"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_remove_group_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      postMethod: function postMethod(ids) {
        dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_13__["fetchGroups"])());
        setSelectedRows(selectedRows.filter(function (row) {
          return !ids.includes(row.uuid);
        }));

        _setFilterValue('');
      },
      isModalOpen: true,
      groupsUuid: removeGroupsList
    })));
  };

  var actionResolver = function actionResolver(_ref4) {
    var isPlatformDefault = _ref4.isPlatformDefault;
    return isPlatformDefault || !(userIdentity && userIdentity.user && userIdentity.user.is_org_admin) ? null : [{
      title: 'Edit group',
      onClick: function onClick(_event, _rowId, group) {
        history.push("/groups/edit/".concat(group.uuid));
      }
    }, {
      title: 'Delete group',
      onClick: function onClick(_event, _rowId, group) {
        setRemoveGroupsList([group]);
        history.push("/groups/removegroups");
      }
    }];
  };

  var toolbarButtons = function toolbarButtons() {
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(userIdentity && userIdentity.user && userIdentity.user.is_org_admin ? [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/groups/add-group",
      key: "add-group"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "primary",
      "aria-label": "Create group"
    }, "Create group")), {
      label: 'Edit group',
      props: {
        isDisabled: !(selectedRows.length === 1)
      },
      onClick: function onClick() {
        return history.push("/groups/edit/".concat(selectedRows[0].uuid));
      }
    }, {
      label: 'Delete Group(s)',
      props: {
        isDisabled: !selectedRows.length > 0
      },
      onClick: function onClick() {
        setRemoveGroupsList(selectedRows);
        history.push("/groups/removegroups");
      }
    }] : []);
  };

  var renderGroupsList = function renderGroupsList() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_15__["TopToolbar"], {
      paddingBottom: true
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_15__["TopToolbarTitle"], {
      title: "Groups"
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_16__["Section"], {
      type: "content",
      id: 'tab-groups'
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_11__["TableToolbarView"], {
      data: groups.map(function (group) {
        return group.platform_default ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, group, {
          principalCount: 'All'
        }) : group;
      }),
      createRows: _group_table_helpers__WEBPACK_IMPORTED_MODULE_12__["createRows"],
      columns: columns,
      isSelectable: userIdentity && userIdentity.user && userIdentity.user.is_org_admin,
      checkedRows: selectedRows,
      setCheckedItems: setCheckedItems,
      routes: routes,
      actionResolver: actionResolver,
      titlePlural: "groups",
      titleSingular: "group",
      pagination: pagination,
      filterValue: filterValue,
      fetchData: function fetchData(config) {
        return dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_13__["fetchGroups"])(config));
      },
      setFilterValue: function setFilterValue(_ref5) {
        var name = _ref5.name;
        return _setFilterValue(name);
      },
      toolbarButtons: toolbarButtons,
      isLoading: isLoading,
      filterPlaceholder: "name",
      rowWrapper: _group_row_wrapper__WEBPACK_IMPORTED_MODULE_18__["default"]
    }))));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: '/groups/detail/:groupUuid/roles/detail/:uuid',
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_role_role__WEBPACK_IMPORTED_MODULE_17__["default"], props);
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: '/groups/detail/:uuid',
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_group__WEBPACK_IMPORTED_MODULE_14__["default"], props);
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: '/groups',
    render: function render() {
      return renderGroupsList();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Groups);

/***/ }),

/***/ "./src/smart-components/group/groups.scss":
/*!************************************************!*\
  !*** ./src/smart-components/group/groups.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/smart-components/group/principal/add-group-members.js":
/*!*******************************************************************!*\
  !*** ./src/smart-components/group/principal/add-group-members.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _add_group_users_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-group/users-list */ "./src/smart-components/group/add-group/users-list.js");











var AddGroupMembers = function AddGroupMembers(_ref) {
  var push = _ref.history.push,
      uuid = _ref.match.params.uuid,
      addNotification = _ref.addNotification,
      closeUrl = _ref.closeUrl,
      addMembersToGroup = _ref.addMembersToGroup,
      fetchGroup = _ref.fetchGroup;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selectedUsers = _useState2[0],
      setSelectedUsers = _useState2[1];

  var onSubmit = function onSubmit() {
    var userList = selectedUsers.map(function (user) {
      return {
        username: user.label
      };
    });

    if (userList.length > 0) {
      addNotification({
        variant: 'info',
        title: "Adding member".concat(userList.length > 1 ? 's' : '', " to group"),
        dismissDelay: 8000,
        dismissable: false,
        description: "Adding member".concat(userList.length > 1 ? 's' : '', " to group initiated.")
      });
      addMembersToGroup(uuid, userList).then(function () {
        return fetchGroup(uuid);
      });
    }

    push(closeUrl);
  };

  var onCancel = function onCancel() {
    addNotification({
      variant: 'warning',
      title: "Adding member".concat(selectedUsers.length > 1 ? 's' : '', " to group"),
      dismissDelay: 8000,
      dismissable: false,
      description: "Adding member".concat(selectedUsers.length > 1 ? 's' : '', " to group was canceled by the user.")
    });
    push(closeUrl);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "Add members to the group",
    width: '40%',
    isOpen: true,
    isFooterLeftAligned: true,
    actions: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: "confirm",
      isDisabled: selectedUsers.length === 0,
      variant: "primary",
      onClick: onSubmit
    }, "Add to group"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: "cancel",
      variant: "link",
      onClick: onCancel
    }, "Cancel")],
    onClose: onCancel
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_add_group_users_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectedUsers: selectedUsers,
    setSelectedUsers: setSelectedUsers
  }));
};

AddGroupMembers.defaultProps = {
  users: [],
  inputValue: '',
  closeUrl: '/groups',
  selectedUsers: []
};
AddGroupMembers.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired,
  addGroup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  fetchData: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  users: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  selectedUsers: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  match: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  addMembersToGroup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var isLoading = _ref2.groupReducer.isLoading;
  return {
    isLoading: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_7__["addNotification"],
    addGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_8__["addGroup"],
    addMembersToGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_8__["addMembersToGroup"],
    fetchGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_8__["fetchGroup"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AddGroupMembers)));

/***/ }),

/***/ "./src/smart-components/group/principal/principal-table-helpers.js":
/*!*************************************************************************!*\
  !*** ./src/smart-components/group/principal/principal-table-helpers.js ***!
  \*************************************************************************/
/*! exports provided: createRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRows", function() { return createRows; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var createRows = function createRows(data, _opened) {
  var checkedRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return data.reduce(function (acc, _ref) {
    var username = _ref.username,
        email = _ref.email,
        first_name = _ref.first_name,
        last_name = _ref.last_name;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [{
      uuid: username,
      username: username,
      cells: [username, email, last_name, first_name],
      selected: checkedRows.find(function (row) {
        return row.uuid === username;
      })
    }]);
  }, []);
};

/***/ }),

/***/ "./src/smart-components/group/principal/principals.js":
/*!************************************************************!*\
  !*** ./src/smart-components/group/principal/principals.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../presentational-components/shared/table-toolbar-view */ "./src/presentational-components/shared/table-toolbar-view.js");
/* harmony import */ var _principal_table_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./principal-table-helpers */ "./src/smart-components/group/principal/principal-table-helpers.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _add_group_members__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-group-members */ "./src/smart-components/group/principal/add-group-members.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _presentational_components_shared_RemoveModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../presentational-components/shared/RemoveModal */ "./src/presentational-components/shared/RemoveModal.js");





/* eslint-disable camelcase */











var columns = [{
  title: 'Username'
}, 'Email', 'Last name', 'First name'];

var selector = function selector(_ref) {
  var _ref$groupReducer = _ref.groupReducer,
      groups = _ref$groupReducer.groups,
      selectedGroup = _ref$groupReducer.selectedGroup;
  return {
    principals: selectedGroup.members.data,
    pagination: selectedGroup.members.meta,
    userIdentity: groups.identity,
    groupName: selectedGroup.name,
    platform_default: selectedGroup.platform_default,
    isLoading: selectedGroup.members.isLoading
  };
};

var removeModalText = function removeModalText(name, group, plural) {
  return plural ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "These ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, " ", "".concat(name)), " members will lose all the roles associated with the ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "".concat(group)), " group.") : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "".concat(name)), " will lose all the roles associated with the ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, " ", "".concat(group)), " group.");
};

var GroupPrincipals = function GroupPrincipals() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      filterValue = _useState2[0],
      _setFilterValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      selectedPrincipals = _useState4[0],
      setSelectedPrincipals = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      showRemoveModal = _useState6[0],
      setShowRemoveModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(function () {
    return null;
  }),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      confirmDelete = _useState8[0],
      setConfirmDelete = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      deleteInfo = _useState10[0],
      setDeleteInfo = _useState10[1];

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useParams"])(),
      uuid = _useParams.uuid;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(selector, react_redux__WEBPACK_IMPORTED_MODULE_5__["shallowEqual"]),
      principals = _useSelector.principals,
      pagination = _useSelector.pagination,
      groupName = _useSelector.groupName,
      userIdentity = _useSelector.userIdentity,
      isLoading = _useSelector.isLoading,
      platform_default = _useSelector.platform_default;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _fetchData = function fetchData(usernames, options) {
    dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_9__["fetchMembersForGroup"])(uuid, usernames, options));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _fetchData();
  }, []);

  var setCheckedPrincipals = function setCheckedPrincipals(newSelection) {
    setSelectedPrincipals(function (principals) {
      return newSelection(principals);
    });
  };

  var removeMembers = function removeMembers(userNames) {
    return dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_9__["removeMembersFromGroup"])(uuid, userNames)).then(function () {
      setSelectedPrincipals([]);

      _fetchData();
    });
  };

  var actionResolver = function actionResolver() {
    return !(userIdentity && userIdentity.user && userIdentity.user.is_org_admin) ? null : [{
      title: 'Remove',
      onClick: function onClick(_event, _rowId, principal) {
        setConfirmDelete(function () {
          return function () {
            return removeMembers([principal.username.title]);
          };
        });
        setDeleteInfo({
          title: 'Remove member?',
          text: removeModalText(principal.username.title, groupName, false),
          confirmButtonLabel: 'Remove member'
        });
        setShowRemoveModal(true);
      }
    }];
  };

  var routes = function routes() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/groups/detail/:uuid/members/add_members",
      render: function render(args) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_add_group_members__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
          fetchData: _fetchData,
          closeUrl: "/groups/detail/".concat(uuid, "/members")
        }, args));
      }
    }));
  };

  var toolbarButtons = function toolbarButtons() {
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(userIdentity && userIdentity.user && userIdentity.user.is_org_admin ? [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: "/groups/detail/".concat(uuid, "/members/add_members"),
      key: "remove-from-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      variant: "primary",
      "aria-label": "Add member"
    }, "Add member")), {
      label: 'Remove',
      props: {
        isDisabled: !selectedPrincipals || !selectedPrincipals.length > 0,
        variant: 'danger'
      },
      onClick: function onClick() {
        var multipleMembersSelected = selectedPrincipals.length > 1;
        setConfirmDelete(function () {
          return function () {
            return removeMembers(selectedPrincipals.map(function (user) {
              return user.name || user.username;
            }));
          };
        });
        setDeleteInfo({
          title: 'Remove members?',
          confirmButtonLabel: multipleMembersSelected ? 'Remove members' : 'Remove member',
          text: removeModalText(multipleMembersSelected ? selectedPrincipals.length : selectedPrincipals[0].name || selectedPrincipals[0].username, groupName, multipleMembersSelected)
        });
        setShowRemoveModal(true);
      }
    }] : []);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_RemoveModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    text: deleteInfo.text,
    title: deleteInfo.title,
    confirmButtonLabel: deleteInfo.confirmButtonLabel,
    isOpen: showRemoveModal,
    onClose: function onClose() {
      return setShowRemoveModal(false);
    },
    onSubmit: function onSubmit() {
      setShowRemoveModal(false);
      confirmDelete();
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Section"], {
    type: "content",
    id: 'tab-principals'
  }, platform_default ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Card"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h1
  }, "All users in this organization are members of this group."))))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_7__["TableToolbarView"], {
    data: (principals || []).map(function (user) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, user, {
        uuid: user.username
      });
    }),
    isSelectable: userIdentity && userIdentity.user && userIdentity.user.is_org_admin,
    createRows: _principal_table_helpers__WEBPACK_IMPORTED_MODULE_8__["createRows"],
    columns: columns,
    routes: routes,
    actionResolver: actionResolver,
    filterPlaceholder: "username",
    titlePlural: "members",
    titleSingular: "member",
    pagination: pagination,
    filterValue: filterValue,
    fetchData: function fetchData(_ref2) {
      var limit = _ref2.limit,
          offset = _ref2.offset,
          name = _ref2.name;
      return _fetchData(name, {
        limit: limit,
        offset: offset
      });
    },
    setFilterValue: function setFilterValue(_ref3) {
      var name = _ref3.name;
      return _setFilterValue(name);
    },
    checkedRows: selectedPrincipals,
    isLoading: isLoading,
    setCheckedItems: setCheckedPrincipals,
    toolbarButtons: toolbarButtons,
    emptyProps: {
      title: 'There are no members in this group',
      description: ['Add a user to configure user access.', '']
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GroupPrincipals);

/***/ }),

/***/ "./src/smart-components/group/remove-group-modal.js":
/*!**********************************************************!*\
  !*** ./src/smart-components/group/remove-group-modal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");











var RemoveGroupModal = function RemoveGroupModal(_ref) {
  var removeGroups = _ref.removeGroups,
      group = _ref.group,
      isLoading = _ref.isLoading,
      fetchGroup = _ref.fetchGroup,
      groupsUuid = _ref.groupsUuid,
      isModalOpen = _ref.isModalOpen,
      postMethod = _ref.postMethod,
      closeUrl = _ref.closeUrl;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (groupsUuid.length === 1) {
      fetchGroup(groupsUuid[0].uuid);
    }
  }, []);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var multipleGroups = groupsUuid.length > 1;

  var onSubmit = function onSubmit() {
    var uuids = groupsUuid.map(function (group) {
      return group.uuid;
    });
    removeGroups(uuids).then(function () {
      return postMethod(uuids);
    }).then(history.push(closeUrl));
  };

  var onCancel = function onCancel() {
    return history.goBack();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    isOpen: isModalOpen,
    isSmall: true,
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Text"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["ExclamationTriangleIcon"], {
      className: "delete-group-warning-icon"
    }), "\xA0 ", multipleGroups ? 'Delete groups?' : 'Delete group?'),
    onClose: onCancel,
    actions: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: "submit",
      isDisabled: !checked,
      variant: "danger",
      type: "button",
      onClick: onSubmit
    }, multipleGroups ? 'Delete groups' : 'Delete group'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: "cancel",
      variant: "link",
      type: "button",
      onClick: onCancel
    }, "Cancel")],
    isFooterLeftAligned: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, multipleGroups ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Deleting these ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, groupsUuid.length), " groups removes all roles from the members inside the group.") : isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_9__["FormItemLoader"], null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Deleting the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, group.name), " group removes all roles from the members inside the group.")), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
    isChecked: checked,
    onChange: function onChange() {
      return setChecked(!checked);
    },
    label: "I understand that this action cannot be undone.",
    id: "delete-group-check"
  }));
};

RemoveGroupModal.defaultProps = {
  isModalOpen: false,
  group: {},
  groupsUuid: [],
  isLoading: true,
  closeUrl: '/groups'
};
RemoveGroupModal.propTypes = {
  isModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  removeGroups: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  postMethod: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  group: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  groupsUuid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var selectedGroup = _ref2.groupReducer.selectedGroup;
  return {
    group: selectedGroup,
    isLoading: !selectedGroup.loaded
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
    fetchGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_8__["fetchGroup"],
    removeGroups: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_8__["removeGroups"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(RemoveGroupModal));

/***/ }),

/***/ "./src/smart-components/group/role/add-group-roles.js":
/*!************************************************************!*\
  !*** ./src/smart-components/group/role/add-group-roles.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _add_group_roles_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-group/roles-list */ "./src/smart-components/group/add-group/roles-list.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _default_group_change_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-group-change-modal */ "./src/smart-components/group/role/default-group-change-modal.js");








var AddGroupRoles = function AddGroupRoles(_ref) {
  var push = _ref.history.push,
      uuid = _ref.match.params.uuid,
      selectedRoles = _ref.selectedRoles,
      setSelectedRoles = _ref.setSelectedRoles,
      title = _ref.title,
      closeUrl = _ref.closeUrl,
      addRolesToGroup = _ref.addRolesToGroup,
      name = _ref.name,
      isDefault = _ref.isDefault,
      isChanged = _ref.isChanged,
      addNotification = _ref.addNotification,
      onDefaultGroupChanged = _ref.onDefaultGroupChanged,
      fetchGroup = _ref.fetchGroup;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      showConfirmModal = _useState2[0],
      setShowConfirmModal = _useState2[1];

  var onCancel = function onCancel() {
    addNotification({
      variant: 'warning',
      title: 'Adding roles to group',
      dismissDelay: 8000,
      dismissable: false,
      description: 'Adding roles to group was canceled by the user.'
    });
    push(closeUrl);
  };

  var onSubmit = function onSubmit() {
    var rolesList = selectedRoles.map(function (role) {
      return role.uuid;
    });
    addRolesToGroup(uuid, rolesList, function () {
      return fetchGroup(uuid);
    });

    if (isDefault && !isChanged) {
      onDefaultGroupChanged(true);
    }

    return push(closeUrl);
  };

  return isDefault && !isChanged && showConfirmModal ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_default_group_change_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: showConfirmModal,
    onClose: onCancel,
    onSubmit: function onSubmit() {
      return setShowConfirmModal(false);
    }
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "Add roles to group",
    width: '70%',
    isOpen: true,
    onClose: function onClose() {
      onCancel();
      setShowConfirmModal(true);
    },
    actions: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      "aria-label": "Save",
      variant: "primary",
      key: "confirm",
      isDisabled: selectedRoles.length === 0,
      onClick: onSubmit
    }, "Add to group"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      "aria-label": "Cancel",
      variant: "link",
      key: "cancel",
      onClick: onCancel
    }, "Cancel")],
    isFooterLeftAligned: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    gutter: "md"
  }, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    size: "xl"
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].h6
  }, "This role list has been ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, " filtered "), " to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, " only show roles "), " that are ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, " not currently "), " in ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, " ", name), "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_add_group_roles_list__WEBPACK_IMPORTED_MODULE_4__["ExcludedRolesList"], {
    selectedRoles: selectedRoles,
    setSelectedRoles: setSelectedRoles
  })))));
};

AddGroupRoles.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
  }).isRequired,
  selectedRoles: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  setSelectedRoles: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  addRolesToGroup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  isDefault: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isChanged: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onDefaultGroupChanged: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AddGroupRoles);

/***/ }),

/***/ "./src/smart-components/group/role/default-group-change-modal.js":
/*!***********************************************************************!*\
  !*** ./src/smart-components/group/role/default-group-change-modal.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _presentational_components_shared_RemoveModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../presentational-components/shared/RemoveModal */ "./src/presentational-components/shared/RemoveModal.js");





var DefaultGroupChange = function DefaultGroupChange(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_RemoveModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "Once you edit the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Default user access"), " group, the system will no longer update it with new default access roles. The group name will change to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Custom default user access"), ".")),
    title: 'Warning',
    withCheckbox: true,
    isOpen: isOpen,
    confirmButtonLabel: 'Continue',
    onClose: onClose,
    onSubmit: onSubmit
  });
};

DefaultGroupChange.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (DefaultGroupChange);

/***/ }),

/***/ "./src/smart-components/group/role/group-roles.js":
/*!********************************************************!*\
  !*** ./src/smart-components/group/role/group-roles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../presentational-components/shared/table-toolbar-view */ "./src/presentational-components/shared/table-toolbar-view.js");
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _add_group_roles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-group-roles */ "./src/smart-components/group/role/add-group-roles.js");
/* harmony import */ var _remove_role_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./remove-role-modal */ "./src/smart-components/group/role/remove-role-modal.js");



















var columns = [{
  title: 'Name',
  orderBy: 'name'
}, {
  title: 'Description'
}, {
  title: 'Last modified'
}];

var _createRows = function createRows(groupUuid, data, expanded) {
  var checkedRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  return data ? data.reduce(function (acc, _ref) {
    var uuid = _ref.uuid,
        name = _ref.name,
        description = _ref.description,
        modified = _ref.modified;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(acc), [{
      uuid: uuid,
      title: name,
      cells: [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        key: "".concat(uuid, "-name")
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/groups/detail/".concat(groupUuid, "/roles/detail/").concat(uuid)
      }, name)), description, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        key: "".concat(uuid, "-modified")
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__["DateFormat"], {
        date: modified,
        type: "relative"
      }))],
      selected: Boolean(checkedRows && checkedRows.find(function (row) {
        return row.uuid === uuid;
      }))
    }]);
  }, []) : [];
};

var addRoleButton = function addRoleButton(isDisabled) {
  return isDisabled ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
    content: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, "All available roles have already been added to the group")
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "primary",
    "aria-label": "Add role",
    isDisabled: isDisabled
  }, "Add role"))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "primary",
    "aria-label": "Add role"
  }, "Add role");
};

var GroupRoles = function GroupRoles(_ref2) {
  var roles = _ref2.roles,
      fetchRoles = _ref2.fetchRoles,
      removeRoles = _ref2.removeRoles,
      addRoles = _ref2.addRoles,
      fetchRolesForGroup = _ref2.fetchRolesForGroup,
      isLoading = _ref2.isLoading,
      pagination = _ref2.pagination,
      uuid = _ref2.match.params.uuid,
      userIdentity = _ref2.userIdentity,
      name = _ref2.name,
      isDefault = _ref2.isDefault,
      isChanged = _ref2.isChanged,
      onDefaultGroupChanged = _ref2.onDefaultGroupChanged,
      fetchAddRolesForGroup = _ref2.fetchAddRolesForGroup,
      disableAddRoles = _ref2.disableAddRoles,
      addNotification = _ref2.addNotification,
      fetchGroup = _ref2.fetchGroup;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      descriptionValue = _useState2[0],
      setDescriptionValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      filterValue = _useState4[0],
      _setFilterValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      selectedRoles = _useState6[0],
      setSelectedRoles = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      selectedAddRoles = _useState8[0],
      setSelectedAddRoles = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      showRemoveModal = _useState10[0],
      setShowRemoveModal = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(function () {
    return null;
  }),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState11, 2),
      confirmDelete = _useState12[0],
      setConfirmDelete = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState13, 2),
      deleteInfo = _useState14[0],
      setDeleteInfo = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchRolesForGroup(pagination)(uuid);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchAddRolesForGroup(uuid);
  }, [roles]);

  var setCheckedItems = function setCheckedItems(newSelection) {
    setSelectedRoles(function (roles) {
      return newSelection(roles).map(function (_ref3) {
        var uuid = _ref3.uuid,
            name = _ref3.name,
            label = _ref3.label;
        return {
          uuid: uuid,
          label: label || name
        };
      });
    });
  };

  var removeModalText = function removeModalText(name, role, plural) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Members in the ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, name), " group will lose the permissions in ", plural ? 'these' : 'the', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, " ", role), " role", plural ? "s" : '', ".");
  };

  var actionResolver = function actionResolver() {
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(userIdentity && userIdentity.user && userIdentity.user.is_org_admin ? [{
      title: 'Remove',
      onClick: function onClick(_event, _rowId, role) {
        setConfirmDelete(function () {
          return function () {
            return removeRoles(uuid, [role.uuid], function () {
              return fetchGroup(uuid);
            });
          };
        });
        setDeleteInfo({
          title: 'Remove role?',
          confirmButtonLabel: 'Remove role',
          text: removeModalText(name, role.title, false)
        });
        setShowRemoveModal(true);
      }
    }] : []);
  };

  var routes = function routes() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/groups/detail/:uuid/roles/add_roles",
      render: function render(args) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_add_group_roles__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          fetchData: fetchRoles,
          fetchGroup: fetchGroup,
          selectedRoles: selectedAddRoles,
          setSelectedRoles: setSelectedAddRoles,
          closeUrl: "/groups/detail/".concat(uuid, "/roles"),
          addRolesToGroup: addRoles,
          name: name,
          isDefault: isDefault,
          isChanged: isChanged,
          addNotification: addNotification,
          onDefaultGroupChanged: onDefaultGroupChanged
        }, args));
      }
    }));
  };

  var toolbarButtons = function toolbarButtons() {
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(userIdentity && userIdentity.user && userIdentity.user.is_org_admin ? [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/groups/detail/".concat(uuid, "/roles/add_roles"),
      key: "add-to-group"
    }, addRoleButton(disableAddRoles)), {
      label: 'Remove',
      props: {
        isDisabled: !selectedRoles || !selectedRoles.length > 0,
        variant: 'danger'
      },
      onClick: function onClick() {
        var multipleRolesSelected = selectedRoles.length > 1;
        setConfirmDelete(function () {
          return function () {
            return removeRoles(uuid, selectedRoles.map(function (role) {
              return role.uuid;
            }), function () {
              return fetchRolesForGroup(pagination)(uuid);
            });
          };
        });
        setDeleteInfo({
          title: multipleRolesSelected ? 'Remove roles?' : 'Remove role?',
          confirmButtonLabel: selectedRoles.length > 1 ? 'Remove roles' : 'Remove role',
          text: removeModalText(name, multipleRolesSelected ? selectedRoles.length : roles.find(function (role) {
            return role.uuid === selectedRoles[0].uuid;
          }).name, multipleRolesSelected)
        });
        setShowRemoveModal(true);
      }
    }] : []);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_remove_role_modal__WEBPACK_IMPORTED_MODULE_17__["default"], {
    text: deleteInfo.text,
    title: deleteInfo.title,
    isOpen: showRemoveModal,
    isChanged: isChanged,
    isDefault: isDefault,
    confirmButtonLabel: deleteInfo.confirmButtonLabel,
    onClose: function onClose() {
      return setShowRemoveModal(false);
    },
    onSubmit: function onSubmit() {
      setShowRemoveModal(false);
      confirmDelete();
      setSelectedRoles([]);
      onDefaultGroupChanged(isDefault);
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    type: "content",
    id: 'tab-roles'
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_13__["TableToolbarView"], {
    columns: columns,
    isSelectable: userIdentity && userIdentity.user && userIdentity.user.is_org_admin,
    createRows: function createRows() {
      for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return _createRows.apply(void 0, [uuid].concat(props));
    },
    data: roles,
    filterValue: filterValue,
    fetchData: function fetchData(config) {
      fetchRolesForGroup(config)(uuid);
    },
    setFilterValue: function setFilterValue(_ref4) {
      var name = _ref4.name,
          description = _ref4.description;
      typeof name !== 'undefined' && _setFilterValue(name);
      typeof description !== 'undefined' && setDescriptionValue(description);
    },
    isLoading: isLoading,
    pagination: pagination,
    checkedRows: selectedRoles,
    setCheckedItems: setCheckedItems,
    titlePlural: "roles",
    titleSingular: "role",
    toolbarButtons: toolbarButtons,
    actionResolver: actionResolver,
    routes: routes,
    emptyProps: {
      title: 'There are no roles in this group',
      description: ['Add a role to configure user access.', '']
    },
    textFilters: [{
      key: 'name',
      value: filterValue
    }, {
      key: 'description',
      value: descriptionValue
    }]
  })));
};

var reloadWrapper = function reloadWrapper(event, callback) {
  event.payload.then(callback);
  return event;
};

var mapStateToProps = function mapStateToProps(_ref5) {
  var _ref5$groupReducer = _ref5.groupReducer,
      selectedGroup = _ref5$groupReducer.selectedGroup,
      groups = _ref5$groupReducer.groups;
  var roles = selectedGroup.roles;
  return {
    roles: roles,
    pagination: selectedGroup.pagination || _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_12__["defaultSettings"], {
      count: roles && roles.length
    }),
    isLoading: !selectedGroup.loaded,
    userIdentity: groups.identity,
    name: selectedGroup.name,
    isDefault: selectedGroup.platform_default,
    isChanged: !selectedGroup.system,
    disableAddRoles: !(selectedGroup.addRoles.pagination && selectedGroup.addRoles.pagination.count > 0)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRoles: function fetchRoles(apiProps) {
      dispatch(Object(_redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_14__["fetchRoles"])(Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_11__["mappedProps"])(apiProps)));
    },
    addRoles: function addRoles(groupId, roles, callback) {
      return dispatch(reloadWrapper(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_15__["addRolesToGroup"])(groupId, roles), callback));
    },
    removeRoles: function removeRoles(groupId, roles, callback) {
      return dispatch(reloadWrapper(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_15__["removeRolesFromGroup"])(groupId, roles), callback));
    },
    fetchRolesForGroup: function fetchRolesForGroup(config) {
      return function (groupId, options) {
        return dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_15__["fetchRolesForGroup"])(groupId, config, options));
      };
    },
    fetchAddRolesForGroup: function fetchAddRolesForGroup(groupId) {
      return dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_15__["fetchAddRolesForGroup"])(groupId, {}, {}));
    },
    addNotification: function addNotification() {
      return dispatch(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__["addNotification"].apply(void 0, arguments));
    },
    fetchGroup: function fetchGroup(apiProps) {
      return dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_15__["fetchGroup"])(apiProps));
    }
  };
};

GroupRoles.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  }),
  roles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  fetchRoles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  fetchRolesForGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  fetchAddRolesForGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  selectedRoles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  addRoles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  removeRoles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
  }),
  match: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
  }).isRequired,
  userIdentity: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    user: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
      is_org_admin: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
    })
  }),
  isDefault: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  isChanged: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onDefaultGroupChanged: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  disableAddRoles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
GroupRoles.defaultProps = {
  roles: [],
  pagination: _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_12__["defaultCompactSettings"],
  selectedRoles: [],
  userIdentity: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(GroupRoles));

/***/ }),

/***/ "./src/smart-components/group/role/remove-role-modal.js":
/*!**************************************************************!*\
  !*** ./src/smart-components/group/role/remove-role-modal.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_group_change_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-group-change-modal */ "./src/smart-components/group/role/default-group-change-modal.js");
/* harmony import */ var _presentational_components_shared_RemoveModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../presentational-components/shared/RemoveModal */ "./src/presentational-components/shared/RemoveModal.js");






var RemoveRoles = function RemoveRoles(_ref) {
  var title = _ref.title,
      text = _ref.text,
      _onClose = _ref.onClose,
      _onSubmit = _ref.onSubmit,
      isOpen = _ref.isOpen,
      confirmButtonLabel = _ref.confirmButtonLabel,
      isDefault = _ref.isDefault,
      isChanged = _ref.isChanged;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      showConfirmModal = _useState2[0],
      setShowConfirmModal = _useState2[1];

  return isDefault && !isChanged && showConfirmModal ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_default_group_change_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: showConfirmModal && isOpen,
    onClose: function onClose() {
      _onClose();
    },
    onSubmit: function onSubmit() {
      setShowConfirmModal(false);
    }
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_presentational_components_shared_RemoveModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: text,
    title: title,
    isOpen: isOpen,
    confirmButtonLabel: confirmButtonLabel,
    onClose: function onClose() {
      _onClose();

      setShowConfirmModal(true);
    },
    onSubmit: function onSubmit() {
      _onSubmit();
    }
  });
};

RemoveRoles.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  confirmButtonLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isDefault: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isChanged: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
RemoveRoles.defaultProps = {
  isDefault: false,
  isChanged: false
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveRoles);

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
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
    setValues(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, formData, data));
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

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");





var PermissionInformation = function PermissionInformation(formData, onHandleChange) {
  var _formData$application = formData.application,
      application = _formData$application === void 0 ? '' : _formData$application,
      _formData$permission = formData.permission,
      permission = _formData$permission === void 0 ? '' : _formData$permission,
      _formData$resourceTyp = formData.resourceType,
      resourceType = _formData$resourceTyp === void 0 ? '' : _formData$resourceTyp;

  var getFormValues = function getFormValues(values) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
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
    setResourceDefinition(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, resourceDefinition, values));
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
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

/***/ "./src/smart-components/role/role-permissions-table-helpers.js":
/*!*********************************************************************!*\
  !*** ./src/smart-components/role/role-permissions-table-helpers.js ***!
  \*********************************************************************/
/*! exports provided: createRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRows", function() { return createRows; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__);




var createRows = function createRows(data) {
  return data.reduce(function (acc, _ref) {
    var permission = _ref.permission,
        modified = _ref.modified;

    var _permission$split = permission.split(':'),
        _permission$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_permission$split, 3),
        appName = _permission$split2[0],
        type = _permission$split2[1],
        operation = _permission$split2[2];

    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [{
      cells: [appName, type, operation, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
        key: "".concat(appName, "-modified")
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__["DateFormat"], {
        date: modified,
        type: "relative"
      }))]
    }]);
  }, []);
};

/***/ }),

/***/ "./src/smart-components/role/role-permissions.js":
/*!*******************************************************!*\
  !*** ./src/smart-components/role/role-permissions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../presentational-components/shared/table-toolbar-view */ "./src/presentational-components/shared/table-toolbar-view.js");
/* harmony import */ var _role_permissions_table_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role-permissions-table-helpers */ "./src/smart-components/role/role-permissions-table-helpers.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _role_permissions_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role-permissions.scss */ "./src/smart-components/role/role-permissions.scss");
/* harmony import */ var _role_permissions_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_role_permissions_scss__WEBPACK_IMPORTED_MODULE_8__);









var columns = [{
  title: 'Application'
}, {
  title: 'Resource type'
}, {
  title: 'Operation'
}, {
  title: 'Last commit',
  transforms: [Object(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__["cellWidth"])(15)]
}];

var Permissions = function Permissions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    pagination: {
      limit: 10,
      offset: 0,
      count: 0,
      filter: ''
    }
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      config = _useState2[0],
      setConfig = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return {
      role: state.roleReducer.selectedRole,
      isRecordLoading: state.roleReducer.isRecordLoading
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      role = _useSelector.role,
      isRecordLoading = _useSelector.isRecordLoading;

  var pagination = config.pagination,
      filter = config.filter;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setConfig(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
      pagination: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, config.pagination, {
        count: role.access ? role.access.length : 0
      })
    }));
  }, [role]);
  var filteredRows = role && role.access ? (role.access || []).filter(function (_ref) {
    var permission = _ref.permission;
    return permission === '*' || filter ? permission.includes(filter) : true;
  }).map(function (acc) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, acc, {
      modified: role.modified
    });
  }) : [];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "pf-c-page__main-section ins-c-role__permissions"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].h1
  }, "Permissions")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_table_toolbar_view__WEBPACK_IMPORTED_MODULE_5__["TableToolbarView"], {
    columns: columns,
    createRows: _role_permissions_table_helpers__WEBPACK_IMPORTED_MODULE_6__["createRows"],
    data: filteredRows.slice(pagination.offset, pagination.offset + pagination.limit),
    filterValue: filter,
    fetchData: function fetchData(_ref2) {
      var limit = _ref2.limit,
          offset = _ref2.offset,
          name = _ref2.name;
      return setConfig(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
        filter: name,
        pagination: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, config.pagination, {
          limit: limit,
          offset: offset
        })
      }));
    },
    setFilterValue: function setFilterValue(_ref3) {
      var name = _ref3.name;
      return setConfig(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
        filter: name
      }));
    },
    isLoading: isRecordLoading,
    pagination: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, pagination, {
      count: filteredRows.length
    }),
    titlePlural: "permissions",
    titleSingular: "permission"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Permissions);

/***/ }),

/***/ "./src/smart-components/role/role-permissions.scss":
/*!*********************************************************!*\
  !*** ./src/smart-components/role/role-permissions.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./src/smart-components/role/role.js":
/*!*******************************************!*\
  !*** ./src/smart-components/role/role.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _role_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role-permissions */ "./src/smart-components/role/role-permissions.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");











var Role = function Role() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      uuid = _useParams.uuid,
      groupUuid = _useParams.groupUuid;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
      role: state.roleReducer.selectedRole,
      isRecordLoading: state.roleReducer.isRecordLoading
    }, groupUuid && {
      group: state.groupReducer.selectedGroup
    });
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      role = _useSelector.role,
      group = _useSelector.group,
      isRecordLoading = _useSelector.isRecordLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_5__["fetchRole"])(uuid));
    groupUuid && dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_9__["fetchGroup"])(groupUuid));
  }, [uuid, groupUuid]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_6__["TopToolbar"], {
    breadcrumbs: [groupUuid ? {
      title: 'Groups',
      to: '/groups'
    } : {
      title: 'Roles',
      to: '/roles'
    }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(groupUuid ? [{
      title: group && group.name,
      to: "/groups/detail/".concat(groupUuid, "/roles"),
      isLoading: group && group.loaded
    }] : []), [{
      title: role && role.name,
      isActive: true
    }])
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_6__["TopToolbarTitle"], {
    title: !isRecordLoading && role ? role.name : undefined,
    description: !isRecordLoading && role ? role.description : undefined
  })), isRecordLoading || !role ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_7__["ListLoader"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_role_permissions__WEBPACK_IMPORTED_MODULE_8__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Role);

/***/ }),

/***/ "./src/smart-components/role/roles.js":
/*!********************************************!*\
  !*** ./src/smart-components/role/roles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
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
    _fetchData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, pagination, {
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

/***/ }),

/***/ "./src/utilities/constants.js":
/*!************************************!*\
  !*** ./src/utilities/constants.js ***!
  \************************************/
/*! exports provided: RBAC_API_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBAC_API_BASE", function() { return RBAC_API_BASE; });
var RBAC_API_BASE = "".concat("/api", "/rbac/v1");

/***/ }),

/***/ "./src/utilities/store.js":
/*!********************************!*\
  !*** ./src/utilities/store.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/ReducerRegistry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/user-reducer */ "./src/redux/reducers/user-reducer.js");
/* harmony import */ var _redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/group-reducer */ "./src/redux/reducers/group-reducer.js");
/* harmony import */ var _redux_reducers_policy_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/policy-reducer */ "./src/redux/reducers/policy-reducer.js");
/* harmony import */ var _redux_reducers_role_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/reducers/role-reducer */ "./src/redux/reducers/role-reducer.js");









var registry = new _redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1___default.a({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__["notificationsMiddleware"])({
  errorTitleKey: ['message'],
  errorDescriptionKey: ['errors', 'stack']
}), redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]);
registry.register({
  userReducer: Object(_redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["usersInitialState"]),
  groupReducer: Object(_redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_6__["groupsInitialState"]),
  policyReducer: Object(_redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_policy_reducer__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_reducers_policy_reducer__WEBPACK_IMPORTED_MODULE_7__["policiesInitialState"]),
  roleReducer: Object(_redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_role_reducer__WEBPACK_IMPORTED_MODULE_8__["default"], _redux_reducers_role_reducer__WEBPACK_IMPORTED_MODULE_8__["rolesInitialState"]),
  notifications: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__["notifications"]
});
/* harmony default export */ __webpack_exports__["default"] = (registry.getStore());

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map