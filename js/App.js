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
/* harmony import */ var _smart_components_app_tabs_app_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./smart-components/app-tabs/app-tabs */ "./src/smart-components/app-tabs/app-tabs.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_index_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/index.css */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.css");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_index_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications_index_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _presentational_components_shared_loader_place_holders__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./presentational-components/shared/loader-place-holders */ "./src/presentational-components/shared/loader-place-holders.js");




















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
      auth: false
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      insights.chrome.init();
      insights.chrome.auth.getUser().then(function () {
        return _this2.setState({
          auth: true
        });
      });
      insights.chrome.identifyApp('rbac');
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.state.auth;

      if (!auth) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_loader_place_holders__WEBPACK_IMPORTED_MODULE_18__["AppPlaceholder"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_16__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14__["PageHeader"], {
        style: {
          paddingBottom: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Title"], {
        size: "3xl"
      }, "Role Based Access Control"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_smart_components_app_tabs_app_tabs__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_14__["Main"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_11__["Routes"], {
        childProps: this.props
      })));
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






var pathName = window.location.pathname.split('/');
pathName.shift();
var release = '/';

if (pathName[0] === 'beta') {
  release = "/".concat(pathName.shift(), "/");
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _utilities_store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "".concat(release).concat(pathName[0], "/").concat(pathName[1], "/").concat(pathName[2])
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/helpers/group/group-helper.js":
/*!*******************************************!*\
  !*** ./src/helpers/group/group-helper.js ***!
  \*******************************************/
/*! exports provided: fetchGroups, fetchGroup, updateGroup, addGroup, removeGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroup", function() { return removeGroup; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");




var groupApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__["getGroupApi"])();
function fetchGroups(_x) {
  return _fetchGroups.apply(this, arguments);
}

function _fetchGroups() {
  _fetchGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
    var limit, offset, groupsData, groups;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            limit = _ref.limit, offset = _ref.offset;
            _context2.next = 3;
            return groupApi.listGroups(limit, offset);

          case 3:
            groupsData = _context2.sent;
            groups = groupsData.data;
            return _context2.abrupt("return", Promise.all(groups.map(
            /*#__PURE__*/
            function () {
              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(group) {
                var groupWithUsers;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return groupApi.getGroup(group.uuid);

                      case 2:
                        groupWithUsers = _context.sent;
                        return _context.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, group, {
                          members: groupWithUsers.principals
                        }));

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x6) {
                return _ref2.apply(this, arguments);
              };
            }())).then(function (data) {
              return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, groupsData, {
                data: data
              });
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchGroups.apply(this, arguments);
}

function fetchGroup(_x2) {
  return _fetchGroup.apply(this, arguments);
}

function _fetchGroup() {
  _fetchGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(uuid) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return groupApi.getGroup(uuid);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchGroup.apply(this, arguments);
}

function updateGroup(_x3) {
  return _updateGroup.apply(this, arguments);
}

function _updateGroup() {
  _updateGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
    var members_list, addUsers, removeUsers;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return groupApi.updateGroup(data.uuid, data);

          case 2:
            members_list = data.principals ? data.principals.map(function (user) {
              return user.username;
            }) : [];
            addUsers = data.user_list.filter(function (item) {
              return !members_list.includes(item.username);
            });
            removeUsers = members_list.filter(function (item) {
              return !data.user_list.map(function (user) {
                return user.username;
              }).includes(item);
            });

            if (!(addUsers.length > 0)) {
              _context4.next = 8;
              break;
            }

            _context4.next = 8;
            return groupApi.addPrincipalToGroup(data.uuid, {
              principals: addUsers
            });

          case 8:
            if (!(removeUsers.length > 0)) {
              _context4.next = 11;
              break;
            }

            _context4.next = 11;
            return groupApi.deletePrincipalFromGroup(data.uuid, removeUsers.join(','));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateGroup.apply(this, arguments);
}

function addGroup(_x4) {
  return _addGroup.apply(this, arguments);
}

function _addGroup() {
  _addGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
    var newGroup;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return groupApi.createGroup(data);

          case 2:
            newGroup = _context5.sent;

            if (!(data.user_list && data.user_list.length > 0)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", groupApi.addPrincipalToGroup(newGroup.uuid, {
              principals: data.user_list
            }));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _addGroup.apply(this, arguments);
}

function removeGroup(_x5) {
  return _removeGroup.apply(this, arguments);
}

function _removeGroup() {
  _removeGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(groupId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return groupApi.deleteGroup(groupId);

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _removeGroup.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/shared/helpers.js":
/*!***************************************!*\
  !*** ./src/helpers/shared/helpers.js ***!
  \***************************************/
/*! exports provided: scrollToTop, getCurrentPage, getNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPage", function() { return getNewPage; });
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

/***/ }),

/***/ "./src/helpers/shared/user-login.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/user-login.js ***!
  \******************************************/
/*! exports provided: getRbacApi, getPrincipalApi, getGroupApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacApi", function() { return getRbacApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrincipalApi", function() { return getPrincipalApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupApi", function() { return getGroupApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/rbac-client */ "./node_modules/@redhat-cloud-services/rbac-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");



var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
instance.interceptors.response.use(function (response) {
  return response.data || response;
});
var rbacApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__["AccessApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["RBAC_API_BASE"], instance);
var principalApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__["PrincipalApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["RBAC_API_BASE"], instance);
var groupApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__["GroupApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["RBAC_API_BASE"], instance);
function getRbacApi() {
  return rbacApi;
}
function getPrincipalApi() {
  return principalApi;
}
function getGroupApi() {
  return groupApi;
}

/***/ }),

/***/ "./src/presentational-components/group/groups-filter-toolbar.js":
/*!**********************************************************************!*\
  !*** ./src/presentational-components/group/groups-filter-toolbar.js ***!
  \**********************************************************************/
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
/* harmony import */ var _shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");






var GroupsFilterToolbar = function GroupsFilterToolbar(_ref) {
  var onFilterChange = _ref.onFilterChange,
      filterValue = _ref.filterValue,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["onFilterChange", "filterValue"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    searchValue: filterValue,
    onFilterChange: onFilterChange,
    placeholder: 'Find a Group'
  }));
};

GroupsFilterToolbar.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GroupsFilterToolbar);

/***/ }),

/***/ "./src/presentational-components/shared/filter-toolbar-item.js":
/*!*********************************************************************!*\
  !*** ./src/presentational-components/shared/filter-toolbar-item.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var FilterToolbarItem = function FilterToolbarItem(_ref) {
  var searchValue = _ref.searchValue,
      onFilterChange = _ref.onFilterChange,
      placeholder = _ref.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pf-c-input-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    placeholder: placeholder,
    value: searchValue,
    type: "text",
    onChange: onFilterChange,
    "aria-label": "Find product button"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "tertiary",
    id: "searchProductButton",
    onClick: function onClick() {
      return onFilterChange(searchValue);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search",
    "aria-hidden": "true"
  })))));
};

FilterToolbarItem.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
FilterToolbarItem.defaultProps = {
  searchValue: ''
};
/* harmony default export */ __webpack_exports__["default"] = (FilterToolbarItem);

/***/ }),

/***/ "./src/presentational-components/shared/loader-place-holders.js":
/*!**********************************************************************!*\
  !*** ./src/presentational-components/shared/loader-place-holders.js ***!
  \**********************************************************************/
/*! exports provided: CardLoader, AppPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLoader", function() { return CardLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlaceholder", function() { return AppPlaceholder; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");







var CardLoader = function CardLoader(_ref) {
  var items = _ref.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["items"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    sm: 12,
    style: {
      padding: 24
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    gutter: "md"
  }, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Array(items)).map(function (_item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
      sm: 12,
      md: 6,
      lg: 3,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Card"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      height: 160,
      width: 300,
      speed: 2,
      primaryColor: "#f3f3f3",
      secondaryColor: "#ecebeb"
    }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "2",
      y: "99",
      rx: "3",
      ry: "3",
      width: "300",
      height: "6.4"
    })))));
  }))));
};
CardLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
CardLoader.defaultProps = {
  items: 1
};
var AppPlaceholder = function AppPlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardLoader, null));
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

/***/ "./src/redux/action-types.js":
/*!***********************************!*\
  !*** ./src/redux/action-types.js ***!
  \***********************************/
/*! exports provided: FETCH_USERS, FETCH_GROUP, FETCH_GROUPS, ADD_GROUP, UPDATE_GROUP, REMOVE_GROUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUP", function() { return FETCH_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUPS", function() { return FETCH_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_GROUP", function() { return ADD_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GROUP", function() { return UPDATE_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_GROUP", function() { return REMOVE_GROUP; });
var FETCH_USERS = 'FETCH_USERS';
var FETCH_GROUP = 'FETCH_GROUP';
var FETCH_GROUPS = 'FETCH_GROUPS';
var ADD_GROUP = 'ADD_GROUP';
var UPDATE_GROUP = 'UPDATE_GROUP';
var REMOVE_GROUP = 'REMOVE_GROUP';

/***/ }),

/***/ "./src/redux/actions/group-actions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/group-actions.js ***!
  \********************************************/
/*! exports provided: fetchGroups, fetchGroup, addGroup, updateGroup, removeGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroup", function() { return removeGroup; });
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
          description: 'The group was added successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed adding group',
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
          description: 'The group was updated successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed updating group',
          description: 'The group was not updated successfuly.'
        }
      }
    }
  };
};
var removeGroup = function removeGroup(group) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_GROUP"],
    payload: _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_1__["removeGroup"](group),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success removing group',
          description: 'The group was removed successfully.'
        }
      }
    }
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
  group: {},
  isLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setGroups = function setGroups(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    groups: payload,
    isLoading: false
  });
};

var selectGroup = function selectGroup(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedGroup: payload,
    isLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUPS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUPS"], "_FULFILLED"), setGroups), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP"], "_FULFILLED"), selectGroup), _$concat$$concat$$con);

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
  isUserDataLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isUserDataLoading: true
  });
};

var setUser = function setUser(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedUser: payload,
    isUserDataLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_USER"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_USER"], "_FULFILLED"), setUser), _$concat$$concat);

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
/* harmony import */ var _presentational_components_shared_loader_place_holders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentational-components/shared/loader-place-holders */ "./src/presentational-components/shared/loader-place-holders.js");






var Groups = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/group/groups */ "./src/smart-components/group/groups.js"));
  });
});
var Group = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/group/group */ "./src/smart-components/group/group.js"));
  });
});
var paths = {
  rbac: '/',
  groups: '/groups',
  group: '/group/:id'
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
    fallback: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_loader_place_holders__WEBPACK_IMPORTED_MODULE_5__["AppPlaceholder"], null)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.groups,
    component: Groups,
    rootClass: "groups"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.group,
    component: Group,
    rootClass: "group"
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




var tabItems = [{
  eventKey: 0,
  title: 'Groups',
  name: '/groups'
}];

var AppTabs = function AppTabs(_ref) {
  var push = _ref.history.push,
      pathname = _ref.location.pathname;
  var activeTab = tabItems.find(function (_ref2) {
    var name = _ref2.name;
    return pathname.includes(name);
  });

  var handleTabClick = function handleTabClick(_event, tabIndex) {
    return push(tabItems[tabIndex].name);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    className: "pf-u-mt-md",
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
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AppTabs));

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

/***/ "./src/smart-components/group/add-group-modal.js":
/*!*******************************************************!*\
  !*** ./src/smart-components/group/add-group-modal.js ***!
  \*******************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");













var components = {
  DropdownIndicator: null
};

var AddGroupModal = function AddGroupModal(_ref) {
  var push = _ref.history.push,
      id = _ref.match.params.id,
      addNotification = _ref.addNotification,
      addGroup = _ref.addGroup,
      updateGroup = _ref.updateGroup;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      selectedGroup = _useState2[0],
      setSelectedGroup = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      selectedUsers = _useState6[0],
      setSelectedUsers = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      optionIdx = _useState8[0],
      setOptionIdx = _useState8[1];

  var createOption = function createOption(label) {
    var idx = optionIdx;
    setOptionIdx(optionIdx + 1);
    return {
      label: label,
      value: "".concat(label, "_").concat(idx)
    };
  };

  var setGroupData = function setGroupData(groupData) {
    setSelectedGroup(groupData);

    if (groupData) {
      setSelectedUsers(groupData.principals.map(function (user) {
        return createOption(user.username);
      }));
    }
  };

  var fetchData = function fetchData() {
    Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroup"])(id).payload.then(function (data) {
      return setGroupData(data);
    })["catch"](function () {
      return setGroupData(undefined);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchData();
  }, []);

  var onSubmit = function onSubmit(data) {
    var user_data = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, data, {
      user_list: selectedUsers.map(function (user) {
        return {
          username: user.label
        };
      })
    });

    id ? updateGroup(user_data).then(function () {
      return Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroups"])();
    }).then(push('/groups')) : addGroup(user_data).then(function () {
      return Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroups"])();
    }).then(push('/groups'));
  };

  var onCancel = function onCancel() {
    addNotification({
      variant: 'warning',
      title: selectedGroup ? 'Editing group' : 'Adding group',
      description: selectedGroup ? 'Edit group was cancelled by the user.' : 'Adding group was cancelled by the user.'
    });
    push('/groups');
  };

  var schema = {
    type: 'object',
    properties: {
      name: {
        title: selectedGroup ? 'Group Name' : 'New Group Name',
        type: 'string'
      },
      description: {
        title: 'Description',
        type: 'string'
      }
    },
    required: ['name']
  };

  var handleChange = function handleChange(value) {
    setSelectedUsers(value);
  };

  var handleInputChange = function handleInputChange(val) {
    setInputValue(val);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!inputValue) {
      return;
    }

    switch (event.key) {
      case 'Enter':
      case 'Tab':
        if (selectedUsers) {
          if (!selectedUsers.find(function (user) {
            return user.label === inputValue;
          })) {
            setSelectedUsers([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(selectedUsers), [createOption(inputValue)]));
          }
        } else {
          setSelectedUsers([createOption(inputValue)]);
        }

        setInputValue('');
        event.preventDefault();
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    isLarge: true,
    title: selectedGroup ? 'Edit group' : 'Add group',
    isOpen: true,
    onClose: onCancel
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    gutter: "md",
    style: {
      minWidth: '800px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    schema: schema,
    schemaType: "mozilla",
    onSubmit: onSubmit,
    onCancel: onCancel,
    formContainer: "modal",
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, selectedGroup)
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h6
  }, "Select Members for this group.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_creatable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    components: components,
    inputValue: inputValue,
    defaultValue: selectedUsers,
    isClearable: true,
    isMulti: true,
    menuIsOpen: false,
    onChange: handleChange,
    onInputChange: handleInputChange,
    onKeyDown: handleKeyDown,
    placeholder: "Type the exact user name and press enter...",
    value: selectedUsers
  }))));
};

AddGroupModal.defaultProps = {
  users: [],
  inputValue: '',
  selectedGroup: undefined,
  selectedUsers: []
};
AddGroupModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
  }).isRequired,
  addGroup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  fetchGroups: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  selectedGroup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  users: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  selectedUsers: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  match: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  updateGroup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var isLoading = _ref2.groupReducer.isLoading;
  return {
    isLoading: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_11__["addNotification"],
    addGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["addGroup"],
    updateGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["updateGroup"],
    fetchGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroup"],
    fetchGroups: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroups"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(AddGroupModal)));

/***/ }),

/***/ "./src/smart-components/group/expandable-description.js":
/*!**************************************************************!*\
  !*** ./src/smart-components/group/expandable-description.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var ExpandableDescription = function ExpandableDescription(_ref) {
  var description = _ref.description,
      members = _ref.members;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "groups-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "groups-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "groups-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small
  }, "members"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "groups-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, "".concat(members.map(function (_ref2, index) {
    var first_name = _ref2.first_name,
        last_name = _ref2.last_name;
    return "".concat(index !== 0 ? ' ' : '').concat(first_name, " ").concat(last_name);
  })))));
};

ExpandableDescription.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  members: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    first_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    last_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ExpandableDescription);

/***/ }),

/***/ "./src/smart-components/group/group-table-helpers.js":
/*!***********************************************************!*\
  !*** ./src/smart-components/group/group-table-helpers.js ***!
  \***********************************************************/
/*! exports provided: createInitialRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialRows", function() { return createInitialRows; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _expandable_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandable-description */ "./src/smart-components/group/expandable-description.js");



var createInitialRows = function createInitialRows(data) {
  return data.reduce(function (acc, _ref, key) {
    var uuid = _ref.uuid,
        name = _ref.name,
        description = _ref.description,
        members = _ref.members;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [{
      uuid: uuid,
      isOpen: false,
      cells: [name, description, members.length]
    }, {
      parent: key * 2,
      cells: [{
        title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_expandable_description__WEBPACK_IMPORTED_MODULE_2__["default"], {
          description: description,
          members: members
        })
      }]
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");












var Group =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Group, _Component);

  function Group() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Group);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Group)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      isKebabOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onKebabToggle", function (isOpen) {
      _this.setState({
        isKebabOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onKebabSelect", function () {
      _this.setState({
        isKebabOpen: !_this.state.isKebabOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "buildGroupActionKebab", function (group) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownPosition"].right,
        onSelect: _this.onKebabSelect,
        toggle: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["KebabToggle"], {
          onToggle: _this.onKebabToggle
        }),
        isOpen: _this.state.isKebabOpen,
        dropdownItems: [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          "aria-label": "Edit Group",
          key: "edit-group"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/groups/edit/".concat(group.uuid)
        }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          component: "link",
          "aria-label": "Remove Group",
          key: "remove-group"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/groups/remove/".concat(group.uuid)
        }, "Delete"))],
        isPlain: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "fetchUserListForGroup", function (group) {
      if (!group.members) {
        return '';
      }

      return group.members.map(function (user) {
        return " ".concat(user.username);
      }).join(', ');
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Group, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListItem"], {
        key: "group-".concat(item.uuid),
        "aria-labelledby": "check-group-".concat(item.uuid),
        isExpanded: this.props.isExpanded("group-".concat(item.uuid))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListToggle"], {
        onClick: function onClick() {
          return _this2.props.toggleExpand("group-".concat(item.uuid));
        },
        isExpanded: this.props.isExpanded("group-".concat(item.uuid)),
        id: "group-".concat(item.uuid),
        "aria-labelledby": "group-".concat(item.uuid, " group-").concat(item.uuid),
        "aria-label": "Toggle details for"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCheck"], {
        "aria-labelledby": "check-group-".concat(item.uuid),
        name: "check-group-".concat(item.uuid)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: item.uuid
      }, item.name, " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, this.fetchUserListForGroup(item)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], {
        "class": "pf-c-data-list__action",
        "aria-labelledby": "group-".concat(item.uuid, " check-group-action").concat(item.uuid),
        id: "group-".concat(item.uuid),
        "aria-label": "Actions"
      }, this.buildGroupActionKebab(item)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListContent"], {
        "aria-label": "Group Content Details",
        isHidden: !this.props.isExpanded("group-".concat(item.uuid))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Title"], {
        size: "md"
      }, "Description")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], {
        component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h6
      }, item.description)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Title"], {
        size: "md"
      }, "Members")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], {
        component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h6
      }, this.fetchUserListForGroup(item))))));
    }
  }]);

  return Group;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Group.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  item: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  toggleExpand: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Group);

/***/ }),

/***/ "./src/smart-components/group/groups-toolbar.js":
/*!******************************************************!*\
  !*** ./src/smart-components/group/groups-toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/Pagination */ "./node_modules/@redhat-cloud-services/frontend-components/components/Pagination.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/TableToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/components/TableToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _presentational_components_group_groups_filter_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../presentational-components/group/groups-filter-toolbar */ "./src/presentational-components/group/groups-filter-toolbar.js");









var GroupsToolbar = function GroupsToolbar(_ref) {
  var setFilterValue = _ref.setFilterValue,
      filterValue = _ref.filterValue,
      pagination = _ref.pagination,
      handleOnPerPageSelect = _ref.handleOnPerPageSelect,
      handleSetPage = _ref.handleSetPage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_4__["TableToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Level"], {
    style: {
      flex: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_group_groups_filter_toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onFilterChange: function onFilterChange(value) {
      return setFilterValue(value);
    },
    filterValue: filterValue
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/groups/add-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "primary",
    "aria-label": "Create Group"
  }, "Create Group")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    itemsPerPage: pagination.limit,
    numberOfItems: pagination.count,
    onPerPageSelect: handleOnPerPageSelect,
    page: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["getCurrentPage"])(pagination.limit, pagination.offset),
    onSetPage: handleSetPage,
    direction: "down"
  }))));
};

GroupsToolbar.propTypes = {
  setFilterValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired,
  handleOnPerPageSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSetPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GroupsToolbar);

/***/ }),

/***/ "./src/smart-components/group/groups.js":
/*!**********************************************!*\
  !*** ./src/smart-components/group/groups.js ***!
  \**********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _add_group_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-group-modal */ "./src/smart-components/group/add-group-modal.js");
/* harmony import */ var _groups_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./groups-toolbar */ "./src/smart-components/group/groups-toolbar.js");
/* harmony import */ var _remove_group_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./remove-group-modal */ "./src/smart-components/group/remove-group-modal.js");
/* harmony import */ var _group_table_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./group-table-helpers */ "./src/smart-components/group/group-table-helpers.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");














var columns = [{
  title: 'Name',
  cellFormatters: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__["expandable"]]
}, 'Description', 'Members'];

var Groups = function Groups(_ref) {
  var fetchGroups = _ref.fetchGroups,
      pagination = _ref.pagination,
      push = _ref.history.push;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      filterValue = _useState2[0],
      setFilterValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchGroups().then(function (_ref2) {
      var data = _ref2.value.data;
      return setRows(Object(_group_table_helpers__WEBPACK_IMPORTED_MODULE_11__["createInitialRows"])(data));
    });
    Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_13__["scrollToTop"])();
  }, []);

  var handleOnPerPageSelect = function handleOnPerPageSelect(limit) {
    return fetchGroups({
      offset: pagination.offset,
      limit: limit
    }).then(function (_ref3) {
      var data = _ref3.value.data;
      return setRows(Object(_group_table_helpers__WEBPACK_IMPORTED_MODULE_11__["createInitialRows"])(data));
    });
  };

  var handleSetPage = function handleSetPage(number, debounce) {
    var options = {
      offset: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_13__["getNewPage"])(number, pagination.limit),
      limit: pagination.limit
    };

    var request = function request() {
      return fetchGroups(options);
    };

    if (debounce) {
      return Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_6__["default"])(request, 250)();
    }

    return request().then(function (_ref4) {
      var data = _ref4.value.data;
      return setRows(Object(_group_table_helpers__WEBPACK_IMPORTED_MODULE_11__["createInitialRows"])(data));
    });
  };

  var handleOpen = function handleOpen(data, uuid) {
    return data.map(function (row) {
      if (row.uuid === uuid) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row, {
          isOpen: !row.isOpen
        });
      }

      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row);
    });
  };

  var handleSelected = function handleSelected(data, uuid) {
    return data.map(function (row) {
      if (row.uuid === uuid) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row, {
          selected: !row.selected
        });
      }

      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row);
    });
  };

  var onCollapse = function onCollapse(_event, _index, _isOpen, _ref5) {
    var uuid = _ref5.uuid;
    return setRows(function (rows) {
      return handleOpen(rows, uuid);
    });
  };

  var selectRow = function selectRow(_event, selected, index) {
    var _ref6 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        uuid = _ref6.uuid;

    return index === -1 ? setRows(rows.map(function (row) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row, {
        selected: selected
      });
    })) : setRows(function (rows) {
      return handleSelected(rows, uuid);
    });
  };

  var actionResolver = function actionResolver(_groupData, _ref7) {
    var rowIndex = _ref7.rowIndex;
    return rowIndex % 2 === 1 ? null : [{
      title: 'Edit',
      onClick: function onClick(_event, _rowId, group) {
        return push("/groups/edit/".concat(group.uuid));
      }
    }, {
      title: 'Delete',
      style: {
        color: 'var(--pf-global--danger-color--100)'
      },
      onClick: function onClick(_event, _rowId, group) {
        return push("/groups/remove/".concat(group.uuid));
      }
    }];
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    exact: true,
    path: "/groups/add-group",
    component: _add_group_modal__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    exact: true,
    path: "/groups/edit/:id",
    component: _add_group_modal__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    exact: true,
    path: "/groups/remove/:id",
    component: _remove_group_modal__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_groups_toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    filterValue: filterValue,
    setFilterValue: setFilterValue,
    pagination: pagination,
    handleOnPerPageSelect: handleOnPerPageSelect,
    handleSetPage: handleSetPage
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__["Table"], {
    "aria-label": "Groups table",
    onCollapse: onCollapse,
    rows: rows,
    cells: columns,
    onSelect: selectRow,
    actionResolver: actionResolver
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__["TableBody"], null)));
};

var mapStateToProps = function mapStateToProps(_ref8) {
  var _ref8$groupReducer = _ref8.groupReducer,
      groups = _ref8$groupReducer.groups,
      filterValue = _ref8$groupReducer.filterValue,
      isLoading = _ref8$groupReducer.isLoading;
  return {
    groups: groups.data,
    pagination: groups.meta,
    isLoading: isLoading,
    searchFilter: filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchGroups: function fetchGroups(apiProps) {
      return dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_12__["fetchGroups"])(apiProps));
    }
  };
};

Groups.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }),
  groups: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  fetchGroups: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
  })
};
Groups.defaultProps = {
  groups: [],
  pagination: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Groups));

/***/ }),

/***/ "./src/smart-components/group/remove-group-modal.js":
/*!**********************************************************!*\
  !*** ./src/smart-components/group/remove-group-modal.js ***!
  \**********************************************************/
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
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");









var RemoveGroupModal = function RemoveGroupModal(_ref) {
  var _ref$history = _ref.history,
      goBack = _ref$history.goBack,
      push = _ref$history.push,
      removeGroup = _ref.removeGroup,
      fetchGroup = _ref.fetchGroup,
      fetchGroups = _ref.fetchGroups,
      groupId = _ref.groupId,
      group = _ref.group;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (groupId) {
      fetchGroup(groupId);
    }
  }, []);

  if (!group) {
    return null;
  }

  var onSubmit = function onSubmit() {
    return removeGroup(groupId).then(function () {
      fetchGroups();
      push('/groups');
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
      variant: "primary",
      type: "button",
      onClick: onSubmit
    }, "Confirm")]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h1
  }, "Removing Group:  ", group.name))));
};

RemoveGroupModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  removeGroup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchGroups: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchGroup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  groupId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var mapStateToProps = function mapStateToProps(_ref2, _ref3) {
  var _ref2$groupReducer = _ref2.groupReducer,
      selectedGroup = _ref2$groupReducer.selectedGroup,
      isLoading = _ref2$groupReducer.isLoading;
  var id = _ref3.match.params.id;
  return {
    groupId: id,
    group: selectedGroup,
    isLoading: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_6__["addNotification"],
    fetchGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_7__["fetchGroup"],
    fetchGroups: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_7__["fetchGroups"],
    removeGroup: _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_7__["removeGroup"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(RemoveGroupModal)));

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







var registry = new _redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1___default.a({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__["notificationsMiddleware"])({
  errorTitleKey: ['message'],
  errorDescriptionKey: ['errors', 'stack']
}), redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]);
registry.register({
  userReducer: Object(_redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["usersInitialState"]),
  groupReducer: Object(_redhat_cloud_services_frontend_components_utilities_files_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_6__["groupsInitialState"]),
  notifications: _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__["notifications"]
});
/* harmony default export */ __webpack_exports__["default"] = (registry.getStore());

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map