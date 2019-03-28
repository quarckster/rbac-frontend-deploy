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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SmartComponents_AppTabs_AppTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SmartComponents/AppTabs/AppTabs */ "./src/SmartComponents/AppTabs/AppTabs.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications.css */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.css");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PresentationalComponents/Shared/LoaderPlaceholders */ "./src/PresentationalComponents/Shared/LoaderPlaceholders.js");




















var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
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

      try {
        insights.chrome.identifyApp('rbac');
      } catch (error) {
        this.setState({
          chromeNavAvailable: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.chromeNavAvailable) {
        this.appNav();
        this.buildNav();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.state.auth;

      if (!auth) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_18__["AppPlaceholder"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Title"], {
        size: 'xl',
        style: {
          margin: 12,
          padding: 12
        }
      }, "Role Based Access Control")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__["Main"], {
        style: {
          backgroundColor: 'd3d3d3',
          margin: '0',
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SmartComponents_AppTabs_AppTabs__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_11__["Routes"], {
        childProps: this.props
      }))));
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

/***/ "./src/Helpers/Group/GroupHelper.js":
/*!******************************************!*\
  !*** ./src/Helpers/Group/GroupHelper.js ***!
  \******************************************/
/*! exports provided: fetchGroups, updateGroup, addGroup, removeGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroup", function() { return removeGroup; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_userLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/userLogin */ "./src/Helpers/Shared/userLogin.js");




var groupApi = Object(_Shared_userLogin__WEBPACK_IMPORTED_MODULE_3__["getGroupApi"])();
function fetchGroups() {
  return _fetchGroups.apply(this, arguments);
}

function _fetchGroups() {
  _fetchGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var groupsData, groups;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return groupApi.listGroups();

          case 2:
            groupsData = _context2.sent;
            groups = groupsData.data;
            return _context2.abrupt("return", Promise.all(groups.map(
            /*#__PURE__*/
            function () {
              var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
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
                }, _callee, this);
              }));

              return function (_x4) {
                return _ref.apply(this, arguments);
              };
            }())));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _fetchGroups.apply(this, arguments);
}

function updateGroup(_x) {
  return _updateGroup.apply(this, arguments);
}

function _updateGroup() {
  _updateGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
    var members_list, addUsers, removeUsers;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return groupApi.updateGroup(data.uuid, data);

          case 2:
            members_list = data.members.map(function (user) {
              return user.username;
            }); //update the user members here - adding users and removing users from the group should be a separate action in the UI

            addUsers = data.user_list.filter(function (item) {
              return !members_list.includes(item.username);
            });
            removeUsers = members_list.filter(function (item) {
              return !data.user_list.map(function (user) {
                return user.username;
              }).includes(item);
            });

            if (!(addUsers.length > 0)) {
              _context3.next = 8;
              break;
            }

            _context3.next = 8;
            return groupApi.addPrincipalToGroup(data.uuid, {
              principals: addUsers
            });

          case 8:
            if (!(removeUsers.length > 0)) {
              _context3.next = 11;
              break;
            }

            _context3.next = 11;
            return groupApi.deletePrincipalFromGroup(data.uuid, removeUsers.join(','));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _updateGroup.apply(this, arguments);
}

function addGroup(_x2) {
  return _addGroup.apply(this, arguments);
}

function _addGroup() {
  _addGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
    var newGroup;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return groupApi.createGroup(data);

          case 2:
            newGroup = _context4.sent;

            if (data.user_list && data.user_list.length > 0) {
              groupApi.addPrincipalToGroup(newGroup.uuid, {
                principals: data.user_list
              });
            }

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _addGroup.apply(this, arguments);
}

function removeGroup(_x3) {
  return _removeGroup.apply(this, arguments);
}

function _removeGroup() {
  _removeGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(groupId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return groupApi.deleteGroup(groupId);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _removeGroup.apply(this, arguments);
}

/***/ }),

/***/ "./src/Helpers/Shared/helpers.js":
/*!***************************************!*\
  !*** ./src/Helpers/Shared/helpers.js ***!
  \***************************************/
/*! exports provided: scrollToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
var scrollToTop = function scrollToTop() {
  return document.getElementById('root').scrollTo({
    behavior: 'smooth',
    top: 0,
    left: 0
  });
};

/***/ }),

/***/ "./src/Helpers/Shared/userLogin.js":
/*!*****************************************!*\
  !*** ./src/Helpers/Shared/userLogin.js ***!
  \*****************************************/
/*! exports provided: getRbacApi, getPrincipalApi, getGroupApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacApi", function() { return getRbacApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrincipalApi", function() { return getPrincipalApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupApi", function() { return getGroupApi; });
/* harmony import */ var _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/Constants */ "./src/Utilities/Constants.js");
/* harmony import */ var rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rbac_api_jsclient */ "./node_modules/rbac_api_jsclient/dist/main.js");
/* harmony import */ var rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_1__);


var defaultRbacClient = rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_1__["ApiClient"].instance;
defaultRbacClient.basePath = _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["RBAC_API_BASE"];
var rbac_basic_auth = defaultRbacClient.authentications.basic_auth;

if (_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["RBAC_USER"] && _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["RBAC_PWD"]) {
  rbac_basic_auth.username = _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["RBAC_USER"];
  rbac_basic_auth.password = _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["RBAC_PWD"];
}

var rbacApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_1__["AccessApi"]();
var principalApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_1__["PrincipalApi"]();
var groupApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_1__["GroupApi"]();
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

/***/ "./src/Helpers/User/UserHelper.js":
/*!****************************************!*\
  !*** ./src/Helpers/User/UserHelper.js ***!
  \****************************************/
/*! exports provided: fetchUsers, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_userLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/userLogin */ "./src/Helpers/Shared/userLogin.js");



var principalApi = Object(_Shared_userLogin__WEBPACK_IMPORTED_MODULE_2__["getPrincipalApi"])();
function fetchUsers() {
  return _fetchUsers.apply(this, arguments);
}

function _fetchUsers() {
  _fetchUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var usersData, users;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return principalApi.listPrincipals();

          case 2:
            usersData = _context.sent;
            users = usersData.data;
            return _context.abrupt("return", users);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _fetchUsers.apply(this, arguments);
}

function updateUser(_x) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return principalApi.updateUser(data.id, data);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _updateUser.apply(this, arguments);
}

/***/ }),

/***/ "./src/PresentationalComponents/Group/GroupsFilterToolbar.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/Group/GroupsFilterToolbar.js ***!
  \*******************************************************************/
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
/* harmony import */ var _Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/FilterToolbarItem */ "./src/PresentationalComponents/Shared/FilterToolbarItem.js");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/toolbarschema.scss */ "./src/PresentationalComponents/Shared/toolbarschema.scss");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__);







var GroupsFilterToolbar = function GroupsFilterToolbar(_ref) {
  var onFilterChange = _ref.onFilterChange,
      filterValue = _ref.filterValue,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["onFilterChange", "filterValue"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
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

/***/ "./src/PresentationalComponents/Shared/FilterToolbarItem.js":
/*!******************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/FilterToolbarItem.js ***!
  \******************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], {
    className: "searchToolbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ "./src/PresentationalComponents/Shared/LoaderPlaceholders.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/LoaderPlaceholders.js ***!
  \*******************************************************************/
/*! exports provided: CardLoader, GroupLoader, NavLoader, AppPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLoader", function() { return CardLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupLoader", function() { return GroupLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLoader", function() { return NavLoader; });
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
var GroupLoader = function GroupLoader(_ref2) {
  var items = _ref2.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["items"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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
    height: "16"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    sm: 12,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardLoader, {
    items: items
  })));
};
GroupLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
GroupLoader.defaultProps = {
  items: 1
};
var NavLoader = function NavLoader(_ref3) {
  var items = _ref3.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, ["items"]);

  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Array(items)).map(function (_item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
      key: "loader-placeholder-".concat(index),
      style: {
        cursor: 'pointer'
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      height: 16,
      width: 300,
      speed: 2,
      primaryColor: "#f3f3f3",
      secondaryColor: "#ecebeb"
    }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "0",
      y: "0",
      rx: "0",
      ry: "0",
      width: "420",
      height: "20"
    }))));
  });
};
NavLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
NavLoader.defaultProps = {
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

/***/ "./src/PresentationalComponents/Shared/pf4-select-wrapper.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/pf4-select-wrapper.js ***!
  \*******************************************************************/
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

/***/ "./src/PresentationalComponents/Shared/toolbarschema.scss":
/*!****************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/toolbarschema.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/PresentationalComponents/User/UsersFilterToolbar.js":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/User/UsersFilterToolbar.js ***!
  \*****************************************************************/
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
/* harmony import */ var _Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/FilterToolbarItem */ "./src/PresentationalComponents/Shared/FilterToolbarItem.js");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/toolbarschema.scss */ "./src/PresentationalComponents/Shared/toolbarschema.scss");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__);







var UsersFilterToolbar = function UsersFilterToolbar(_ref) {
  var onFilterChange = _ref.onFilterChange,
      filterValue = _ref.filterValue,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["onFilterChange", "filterValue"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    searchValue: filterValue,
    onFilterChange: onFilterChange,
    placeholder: 'Find a User'
  }));
};

UsersFilterToolbar.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (UsersFilterToolbar);

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PresentationalComponents/Shared/LoaderPlaceholders */ "./src/PresentationalComponents/Shared/LoaderPlaceholders.js");







/**
 * Aysnc imports of components
 *
 * https://webpack.js.org/guides/code-splitting/
 * https://reactjs.org/docs/code-splitting.html
 *
 * pros:
 *      1) code splitting
 *      2) can be used in server-side rendering
 * cons:
 *      1) naming chunk names adds unnecessary docs to code,
 *         see the difference with DashboardMap and InventoryDeployments.
 *
 */

var Users = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/User/Users */ "./src/SmartComponents/User/Users.js"));
  });
});
var User = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/User/User */ "./src/SmartComponents/User/User.js"));
  });
});
var Groups = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/Group/Groups */ "./src/SmartComponents/Group/Groups.js"));
  });
});
var Group = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/Group/Group */ "./src/SmartComponents/Group/Group.js"));
  });
});
var paths = {
  rbac: '/',
  users: '/users',
  user: '/user/:id',
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
/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */

var Routes = function Routes(props) {
  var path = props.childProps.location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_6__["AppPlaceholder"], null)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.users,
    component: Users,
    rootClass: "users"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.user,
    component: User,
    rootClass: "user"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.groups,
    component: Groups,
    rootClass: "groups"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.group,
    component: Group,
    rootClass: "group"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: function render() {
      return lodash_some__WEBPACK_IMPORTED_MODULE_5___default()(paths, function (p) {
        return p === path;
      }) ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: paths.users
      });
    }
  })));
};
Routes.propTypes = {
  childProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

/***/ }),

/***/ "./src/SmartComponents/AppTabs/AppTabs.js":
/*!************************************************!*\
  !*** ./src/SmartComponents/AppTabs/AppTabs.js ***!
  \************************************************/
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _apptabs_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apptabs.scss */ "./src/SmartComponents/AppTabs/apptabs.scss");
/* harmony import */ var _apptabs_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apptabs_scss__WEBPACK_IMPORTED_MODULE_10__);











var tabItems = [{
  eventKey: 0,
  title: 'Principals',
  name: '/users'
}, {
  eventKey: 1,
  title: 'Groups',
  name: '/groups'
}];

var AppTabs =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AppTabs, _Component);

  function AppTabs() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AppTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AppTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      activeTabKey: 0
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "handleTabClick", function (event, tabIndex) {
      _this.setState({
        activeTabKey: tabIndex
      });

      _this.props.children.props.childProps.history.push(tabItems[tabIndex].name);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AppTabs, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
        className: "ins-tabs",
        activeKey: this.state.activeTabKey,
        onSelect: this.handleTabClick
      }, tabItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
          title: item.title,
          key: item.eventKey,
          eventKey: item.eventKey,
          name: item.name
        });
      })), this.props.children);
    }
  }]);

  return AppTabs;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

AppTabs.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  location: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (AppTabs);

/***/ }),

/***/ "./src/SmartComponents/AppTabs/apptabs.scss":
/*!**************************************************!*\
  !*** ./src/SmartComponents/AppTabs/apptabs.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/Common/FormRenderer.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Common/FormRenderer.js ***!
  \****************************************************/
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
/* harmony import */ var _PresentationalComponents_Shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PresentationalComponents/Shared/pf4-select-wrapper */ "./src/PresentationalComponents/Shared/pf4-select-wrapper.js");









var buttonPositioning = {
  default: {},
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
    }, _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__["componentTypes"].SELECT, _PresentationalComponents_Shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"])),
    layoutMapper: _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["layoutMapper"]
  }, buttonPositioning[formContainer], rest)));
};

FormRenderer.propTypes = {
  componentMapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  formContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf('default', 'modal')
};
FormRenderer.defaultProps = {
  componentMapper: {},
  formContainer: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (FormRenderer);

/***/ }),

/***/ "./src/SmartComponents/Group/Group.js":
/*!********************************************!*\
  !*** ./src/SmartComponents/Group/Group.js ***!
  \********************************************/
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");












var Group =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Group, _Component);

  function Group() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Group);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Group)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      isKebabOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabToggle", function (isOpen) {
      _this.setState({
        isKebabOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabSelect", function () {
      _this.setState({
        isKebabOpen: !_this.state.isKebabOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "buildGroupActionKebab", function (group) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "fetchUserListForGroup", function (group) {
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
        class: "pf-c-data-list__action",
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

/***/ "./src/SmartComponents/Group/GroupList.js":
/*!************************************************!*\
  !*** ./src/SmartComponents/Group/GroupList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Group */ "./src/SmartComponents/Group/Group.js");














var GroupList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GroupList, _Component);

  function GroupList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GroupList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GroupList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      expanded: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "toggleExpand", function (id) {
      var expanded = _this.state.expanded;
      var index = expanded.indexOf(id);
      var newExpanded = index >= 0 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(index + 1, expanded.length))) : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded), [id]);

      _this.setState(function () {
        return {
          expanded: newExpanded
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "isExpanded", function (key) {
      return _this.state.expanded.includes(key);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GroupList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitle"], {
          title: this.props.noItems
        }));
      } // <GroupDetail isExpanded={ expandedList.includes(item.name) } toggle={ toggle }/>) }


      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.props.isLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        color: '#00b9e4'
      }, " Loading...")), this.props.items && this.props.items.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["DataList"], {
        "aria-label": "Expandable data list"
      }, this.props.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Group__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: item.uuid,
          item: item,
          isExpanded: _this2.isExpanded,
          toggleExpand: _this2.toggleExpand
        });
      })));
    }
  }]);

  return GroupList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

GroupList.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GroupList);

/***/ }),

/***/ "./src/SmartComponents/Group/Groups.js":
/*!*********************************************!*\
  !*** ./src/SmartComponents/Group/Groups.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _PresentationalComponents_Group_GroupsFilterToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../PresentationalComponents/Group/GroupsFilterToolbar */ "./src/PresentationalComponents/Group/GroupsFilterToolbar.js");
/* harmony import */ var _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/Actions/GroupActions */ "./src/redux/Actions/GroupActions.js");
/* harmony import */ var _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/Actions/UserActions */ "./src/redux/Actions/UserActions.js");
/* harmony import */ var _add_group_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-group-modal */ "./src/SmartComponents/Group/add-group-modal.js");
/* harmony import */ var _remove_group_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./remove-group-modal */ "./src/SmartComponents/Group/remove-group-modal.js");
/* harmony import */ var _GroupList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./GroupList */ "./src/SmartComponents/Group/GroupList.js");
/* harmony import */ var _group_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./group.scss */ "./src/SmartComponents/Group/group.scss");
/* harmony import */ var _group_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_group_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Helpers/Shared/helpers */ "./src/Helpers/Shared/helpers.js");
























var Groups =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Groups, _Component);

  function Groups() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Groups);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Groups)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      filteredItems: [],
      isOpen: false,
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "fetchData", function () {
      _this.props.fetchGroups();

      _this.props.fetchUsers();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Groups, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_21__["scrollToTop"])();
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
        className: "searchToolbar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Group_GroupsFilterToolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onFilterChange: this.onFilterChange,
        filterValue: this.state.filterValue
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        to: "/groups/add-group"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        variant: "primary",
        "aria-label": "Create Group"
      }, "Create Group")))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filteredItems = {
        items: this.props.groups.filter(function (_ref) {
          var name = _ref.name;
          return name.toLowerCase().includes(_this2.state.filterValue.trim().toLowerCase());
        }),
        isLoading: this.props.isLoading && this.props.groups.length === 0
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/groups/add-group",
        component: _add_group_modal__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/groups/edit/:id",
        component: _add_group_modal__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/groups/remove/:id",
        component: _remove_group_modal__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__["Section"], {
        type: "content"
      }, this.renderToolbar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_GroupList__WEBPACK_IMPORTED_MODULE_19__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, filteredItems, {
        noItems: 'No Groups',
        fetchUsersBYGroupId: this.props.fetchUsersByGroupId
      }))));
    }
  }]);

  return Groups;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    groups: state.groupReducer.groups,
    users: state.userReducer.users,
    isLoading: state.groupReducer.isLoading,
    searchFilter: state.userReducer.filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchGroups: function fetchGroups(apiProps) {
      return dispatch(Object(_redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_15__["fetchGroups"])(apiProps));
    },
    fetchUsersByGroupId: function fetchUsersByGroupId(apiProps) {
      return dispatch(Object(_redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_15__["fetchUsersByGroupId"])(apiProps));
    },
    fetchUsers: function fetchUsers(apiProps) {
      return dispatch(Object(_redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_16__["fetchUsers"])(apiProps));
    }
  };
};

Groups.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  groups: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  fetchGroups: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  fetchUsersByGroupId: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
Groups.defaultProps = {
  groups: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Groups));

/***/ }),

/***/ "./src/SmartComponents/Group/add-group-modal.js":
/*!******************************************************!*\
  !*** ./src/SmartComponents/Group/add-group-modal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Common_FormRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/FormRenderer */ "./src/SmartComponents/Common/FormRenderer.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/Actions/GroupActions */ "./src/redux/Actions/GroupActions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");













var AddGroupModal = function AddGroupModal(_ref) {
  var goBack = _ref.history.goBack,
      addGroup = _ref.addGroup,
      addNotification = _ref.addNotification,
      fetchGroups = _ref.fetchGroups,
      initialValues = _ref.initialValues,
      users = _ref.users,
      updateGroup = _ref.updateGroup;

  var onSubmit = function onSubmit(data) {
    var user_data = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {
      user_list: selectedUsers.map(function (user) {
        return {
          username: user
        };
      })
    });

    initialValues ? updateGroup(user_data).then(function () {
      return fetchGroups();
    }).then(goBack) : addGroup(user_data).then(function () {
      return fetchGroups();
    }).then(goBack);
  };

  var onCancel = function onCancel() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["pipe"])(addNotification({
      variant: 'warning',
      title: initialValues ? 'Editing group' : 'Adding group',
      description: initialValues ? 'Edit group was cancelled by the user.' : 'Adding group was cancelled by the user.'
    }), goBack());
  };

  var selectedUsers = [];

  var onOptionSelect = function onOptionSelect() {
    var selectedValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    selectedUsers = selectedValues.map(function (val) {
      return val.value;
    });
  };

  var dropdownItems = users.map(function (user) {
    return {
      value: user.username,
      label: user.username,
      id: user.username
    };
  });
  var schema = {
    type: 'object',
    properties: {
      name: {
        title: initialValues ? 'Group Name' : 'New Group Name',
        type: 'string'
      },
      description: {
        title: 'Description',
        type: 'string'
      }
    },
    required: ['name']
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    isLarge: true,
    title: initialValues ? 'Edit group' : 'Add group',
    isOpen: true,
    onClose: onCancel
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    gutter: "md",
    style: {
      minWidth: '800px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_FormRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    schema: schema,
    schemaType: "mozilla",
    onSubmit: onSubmit,
    onCancel: onCancel,
    formContainer: "modal",
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialValues)
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextVariants"].h6
  }, "Select Members for this group.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isMulti: true,
    placeholders: 'Select Members',
    options: dropdownItems,
    defaultValue: initialValues && initialValues.members ? initialValues.members.map(function (user) {
      return {
        value: user.username,
        label: "".concat(user.username),
        id: user.username
      };
    }) : [],
    onChange: onOptionSelect,
    closeMenuOnSelect: false
  }))));
};

AddGroupModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired,
  addGroup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  fetchGroups: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  users: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  updateGroup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  var groups = state.groupReducer.groups;
  return {
    users: state.userReducer.users,
    initialValues: id && groups.find(function (item) {
      return item.uuid === id;
    }),
    groupId: id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__["addNotification"],
    addGroup: _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_10__["addGroup"],
    updateGroup: _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_10__["updateGroup"],
    fetchGroups: _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_10__["fetchGroups"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AddGroupModal)));

/***/ }),

/***/ "./src/SmartComponents/Group/group.scss":
/*!**********************************************!*\
  !*** ./src/SmartComponents/Group/group.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/Group/remove-group-modal.js":
/*!*********************************************************!*\
  !*** ./src/SmartComponents/Group/remove-group-modal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/Actions/GroupActions */ "./src/redux/Actions/GroupActions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _group_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group.scss */ "./src/SmartComponents/Group/group.scss");
/* harmony import */ var _group_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_group_scss__WEBPACK_IMPORTED_MODULE_9__);











var RemoveGroupModal = function RemoveGroupModal(_ref) {
  var _ref$history = _ref.history,
      goBack = _ref$history.goBack,
      push = _ref$history.push,
      removeGroup = _ref.removeGroup,
      addNotification = _ref.addNotification,
      fetchGroups = _ref.fetchGroups,
      groupId = _ref.groupId,
      groupName = _ref.groupName;

  var onSubmit = function onSubmit() {
    return removeGroup(groupId).then(function () {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(fetchGroups(), push('/groups'));
    });
  };

  var onCancel = function onCancel() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(addNotification({
      variant: 'warning',
      title: 'Removing group',
      description: 'Removing group was cancelled by the user.'
    }), goBack());
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    isOpen: true,
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center_message"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    size: 'xl'
  }, "Removing Group:  ", groupName))));
};

RemoveGroupModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  removeGroup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchGroups: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  groupId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  groupName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var groupDetailsFromState = function groupDetailsFromState(state, id) {
  return state.groupReducer.groups.find(function (group) {
    return group.uuid === id;
  });
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  var group = groupDetailsFromState(state, id);
  return {
    groupId: group.uuid,
    groupName: group.name
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__["addNotification"],
    fetchGroups: _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_7__["fetchGroups"],
    removeGroup: _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_7__["removeGroup"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(RemoveGroupModal)));

/***/ }),

/***/ "./src/SmartComponents/User/User.js":
/*!******************************************!*\
  !*** ./src/SmartComponents/User/User.js ***!
  \******************************************/
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");












var User =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(User, _Component);

  function User() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(User)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      isKebabOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabToggle", function (isOpen) {
      _this.setState({
        isKebabOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabSelect", function () {
      _this.setState({
        isKebabOpen: !_this.state.isKebabOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "buildUserActionKebab", function (user) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownPosition"].right,
        onSelect: _this.onKebabSelect,
        toggle: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["KebabToggle"], {
          onToggle: _this.onKebabToggle
        }),
        isOpen: _this.state.isKebabOpen,
        dropdownItems: [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          "aria-label": "Edit User",
          key: "edit-user"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/users/edit/".concat(user.id)
        }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          component: "link",
          "aria-label": "Remove User",
          key: "remove-user"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/users/remove/".concat(user.id)
        }, "Delete"))],
        isPlain: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "fetchGroupListForUser", function (user) {
      if (!user.groups) {
        return '';
      }

      return user.groups.map(function (group) {
        return group.name;
      }).join(', ');
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(User, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListItem"], {
        key: "user-".concat(item.id),
        "aria-labelledby": "check-user-".concat(item.id),
        isExpanded: this.props.isExpanded("user-".concat(item.id))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListToggle"], {
        onClick: function onClick() {
          return _this2.props.toggleExpand("user-".concat(item.id));
        },
        isExpanded: this.props.isExpanded("user-".concat(item.id)),
        id: "user-".concat(item.id),
        "aria-labelledby": "user-".concat(item.id, " user-").concat(item.id),
        "aria-label": "Toggle details for"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCheck"], {
        "aria-labelledby": "check-user-".concat(item.id),
        name: "check-user-".concat(item.id)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: item.id
      }, "".concat(item.username), " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: item.email
      }, "".concat(item.email), " "))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, this.fetchGroupListForUser(item)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListContent"], {
        "aria-label": "User Content Details",
        isHidden: !this.props.isExpanded("user-".concat(item.id))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Title"], {
        size: "md"
      }, "Groups")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], {
        component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h6
      }, this.fetchGroupListForUser(item))))));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

User.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  item: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  toggleExpand: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/SmartComponents/User/UserList.js":
/*!**********************************************!*\
  !*** ./src/SmartComponents/User/UserList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./User */ "./src/SmartComponents/User/User.js");














var UserList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UserList, _Component);

  function UserList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(UserList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      expanded: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "toggleExpand", function (id) {
      var expanded = _this.state.expanded;
      var index = expanded.indexOf(id);
      var newExpanded = index >= 0 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(index + 1, expanded.length))) : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded), [id]);

      _this.setState(function () {
        return {
          expanded: newExpanded
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "isExpanded", function (key) {
      return _this.state.expanded.includes(key);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitle"], {
          title: this.props.noItems
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.props.isLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        color: '#00b9e4'
      }, " Loading...")), this.props.items && this.props.items.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["DataList"], {
        "aria-label": "Expandable data list"
      }, this.props.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: item.id,
          item: item,
          isExpanded: _this2.isExpanded,
          toggleExpand: _this2.toggleExpand
        });
      })));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

UserList.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./src/SmartComponents/User/Users.js":
/*!*******************************************!*\
  !*** ./src/SmartComponents/User/Users.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UserList */ "./src/SmartComponents/User/UserList.js");
/* harmony import */ var _PresentationalComponents_User_UsersFilterToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../PresentationalComponents/User/UsersFilterToolbar */ "./src/PresentationalComponents/User/UsersFilterToolbar.js");
/* harmony import */ var _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/Actions/UserActions */ "./src/redux/Actions/UserActions.js");
/* harmony import */ var _redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/Actions/GroupActions */ "./src/redux/Actions/GroupActions.js");
/* harmony import */ var _add_user_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-user-modal */ "./src/SmartComponents/User/add-user-modal.js");
/* harmony import */ var _remove_user_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./remove-user-modal */ "./src/SmartComponents/User/remove-user-modal.js");
/* harmony import */ var _user_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user.scss */ "./src/SmartComponents/User/user.scss");
/* harmony import */ var _user_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_user_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Helpers/Shared/helpers */ "./src/Helpers/Shared/helpers.js");
























var Users =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Users, _Component);

  function Users() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Users)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      filteredItems: [],
      isOpen: false,
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "fetchData", function () {
      _this.props.fetchUsers();

      _this.props.fetchGroups();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_21__["scrollToTop"])();
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
        className: "searchToolbar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_User_UsersFilterToolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onFilterChange: this.onFilterChange,
        filterValue: this.state.filterValue
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filteredItems = {
        items: this.props.users.filter(function (_ref) {
          var email = _ref.email;
          return email.toLowerCase().includes(_this2.state.filterValue.trim().toLowerCase());
        }),
        isLoading: this.props.isLoading && this.props.users.length === 0
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/users/add-user",
        component: _add_user_modal__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/users/edit/:id",
        component: _add_user_modal__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/users/remove/:id",
        component: _remove_user_modal__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__["Section"], {
        type: "content"
      }, this.renderToolbar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_UserList__WEBPACK_IMPORTED_MODULE_14__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, filteredItems, {
        noItems: 'No Principals',
        fetchGroupsByUserId: this.props.fetchGroupsByUserId
      }))));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.userReducer.users,
    isLoading: state.userReducer.isUserDataLoading,
    groups: state.groupReducer.groups,
    searchFilter: state.userReducer.filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers(apiProps) {
      return dispatch(Object(_redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_16__["fetchUsers"])(apiProps));
    },
    fetchGroupsByUserId: function fetchGroupsByUserId(apiProps) {
      return dispatch(Object(_redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_16__["fetchGroupsByUserId"])(apiProps));
    },
    fetchGroups: function fetchGroups(apiProps) {
      return dispatch(Object(_redux_Actions_GroupActions__WEBPACK_IMPORTED_MODULE_17__["fetchGroups"])(apiProps));
    }
  };
};

Users.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  users: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  fetchGroups: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  fetchGroupsByUserId: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
Users.defaultProps = {
  users: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Users));

/***/ }),

/***/ "./src/SmartComponents/User/add-user-modal.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/User/add-user-modal.js ***!
  \****************************************************/
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Common_FormRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/FormRenderer */ "./src/SmartComponents/Common/FormRenderer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/Actions/UserActions */ "./src/redux/Actions/UserActions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");













var AddUserModal = function AddUserModal(_ref) {
  var goBack = _ref.history.goBack,
      addUser = _ref.addUser,
      addNotification = _ref.addNotification,
      fetchUsers = _ref.fetchUsers,
      initialValues = _ref.initialValues,
      groups = _ref.groups,
      updateUser = _ref.updateUser;

  var onSubmit = function onSubmit(data) {
    data.group_ids = selectedGroups;
    initialValues ? updateUser(data).then(function () {
      return fetchUsers();
    }).then(goBack) : addUser(data).then(function () {
      return fetchUsers();
    }).then(goBack);
  };

  var onCancel = function onCancel() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["pipe"])(addNotification({
      variant: 'warning',
      title: initialValues ? 'Editing approver' : 'Adding approver',
      description: initialValues ? 'Edit approver was cancelled by the user.' : 'Adding approver was cancelled by the user.'
    }), goBack());
  };

  var selectedGroups = [];

  var onOptionSelect = function onOptionSelect() {
    var selectedValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    selectedGroups = selectedValues.map(function (val) {
      return val.value;
    });
  };

  var dropdownItems = groups.map(function (group) {
    return {
      value: group.id,
      label: group.name,
      id: group.id
    };
  });
  var schema = {
    type: 'object',
    properties: {
      email: {
        title: initialValues ? 'Email' : 'New Email',
        type: 'string'
      },
      first_name: {
        title: 'First Name',
        type: 'string'
      },
      last_name: {
        title: 'Last Name',
        type: 'string'
      }
    },
    required: ['email']
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    isLarge: true,
    title: initialValues ? 'Update approver' : 'Create approver',
    isOpen: true,
    onClose: onCancel
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    gutter: "md",
    style: {
      minWidth: '800px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_FormRenderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    schema: schema,
    schemaType: "mozilla",
    onSubmit: onSubmit,
    onCancel: onCancel,
    formContainer: "modal",
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialValues)
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextVariants"].h6
  }, "Select the groups for this user.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isMulti: true,
    placeholders: 'Select groups',
    options: dropdownItems,
    onChange: onOptionSelect,
    closeMenuOnSelect: false
  }))));
};

AddUserModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired,
  addUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  groups: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  updateUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  var users = state.userReducer.users;
  return {
    groups: state.groupReducer.groups,
    initialValues: id && users.find(function (item) {
      return item.id === id;
    }),
    userId: id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__["addNotification"],
    addUser: _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_10__["addUser"],
    updateUser: _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_10__["updateUser"],
    fetchUsers: _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_10__["fetchUsers"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddUserModal)));

/***/ }),

/***/ "./src/SmartComponents/User/remove-user-modal.js":
/*!*******************************************************!*\
  !*** ./src/SmartComponents/User/remove-user-modal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/Actions/UserActions */ "./src/redux/Actions/UserActions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.scss */ "./src/SmartComponents/User/user.scss");
/* harmony import */ var _user_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_user_scss__WEBPACK_IMPORTED_MODULE_9__);











var RemoveUserModal = function RemoveUserModal(_ref) {
  var _ref$history = _ref.history,
      goBack = _ref$history.goBack,
      push = _ref$history.push,
      removeUser = _ref.removeUser,
      addNotification = _ref.addNotification,
      fetchUsers = _ref.fetchUsers,
      userId = _ref.userId,
      userEmail = _ref.userEmail;

  var onSubmit = function onSubmit() {
    return removeUser(userId).then(function () {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(fetchUsers(), push('/users'));
    });
  };

  var onCancel = function onCancel() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(addNotification({
      variant: 'warning',
      title: 'Removing user',
      description: 'Removing user was cancelled by the user.'
    }), goBack());
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    isOpen: true,
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center_message"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    size: 'xl'
  }, "Removing User:  ", userEmail))));
};

RemoveUserModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  removeUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  userEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var userDetailsFromState = function userDetailsFromState(state, id) {
  return state.userReducer.users.find(function (user) {
    return user.id === id;
  });
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  var user = userDetailsFromState(state, id);
  return {
    userId: user.id,
    userEmail: user.email
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__["addNotification"],
    fetchUsers: _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_7__["fetchUsers"],
    removeUser: _redux_Actions_UserActions__WEBPACK_IMPORTED_MODULE_7__["removeUser"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(RemoveUserModal)));

/***/ }),

/***/ "./src/SmartComponents/User/user.scss":
/*!********************************************!*\
  !*** ./src/SmartComponents/User/user.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Utilities/Constants.js":
/*!************************************!*\
  !*** ./src/Utilities/Constants.js ***!
  \************************************/
/*! exports provided: RBAC_API_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBAC_API_BASE", function() { return RBAC_API_BASE; });
var RBAC_API_BASE = "".concat("/r/insights/platform", "/rbac/v1");

/***/ }),

/***/ "./src/Utilities/store.js":
/*!********************************!*\
  !*** ./src/Utilities/store.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/userReducer */ "./src/redux/reducers/userReducer.js");
/* harmony import */ var _redux_reducers_groupReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/groupReducer */ "./src/redux/reducers/groupReducer.js");







var registry = new _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["ReducerRegistry"]({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notificationsMiddleware"])({
  errorTitleKey: ['message'],
  errorDescriptionKey: ['errors', 'stack']
}), redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]);
registry.register({
  userReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__["userInitialState"]),
  groupReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_groupReducer__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_reducers_groupReducer__WEBPACK_IMPORTED_MODULE_6__["groupInitialState"]),
  notifications: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notifications"]
});
/* harmony default export */ __webpack_exports__["default"] = (registry.getStore());

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utilities_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilities/store */ "./src/Utilities/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");






var pathName = window.location.pathname.split('/');
pathName.shift();
var release = '/';

if (pathName[0] === 'beta') {
  release = "/".concat(pathName.shift(), "/");
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _Utilities_store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "".concat(release).concat(pathName[0], "/").concat(pathName[1], "/").concat(pathName[2])
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/redux/ActionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/ActionTypes.js ***!
  \**********************************/
/*! exports provided: FETCH_USER, FETCH_USERS, FILTER_USER_ITEMS, REMOVE_USER, FETCH_GROUP, FETCH_GROUPS, FETCH_GROUPS_BY_USER_ID, FETCH_USERS_BY_GROUP_ID, ADD_TO_GROUP, ADD_GROUP, UPDATE_GROUP, REMOVE_GROUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER", function() { return FETCH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_USER_ITEMS", function() { return FILTER_USER_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_USER", function() { return REMOVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUP", function() { return FETCH_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUPS", function() { return FETCH_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GROUPS_BY_USER_ID", function() { return FETCH_GROUPS_BY_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_BY_GROUP_ID", function() { return FETCH_USERS_BY_GROUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_GROUP", function() { return ADD_TO_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_GROUP", function() { return ADD_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GROUP", function() { return UPDATE_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_GROUP", function() { return REMOVE_GROUP; });
var FETCH_USER = 'FETCH_USER';
var FETCH_USERS = 'FETCH_USERS';
var FILTER_USER_ITEMS = 'FILTER_USER_ITEMS';
var REMOVE_USER = 'REMOVE_USER';
var FETCH_GROUP = 'FETCH_GROUP';
var FETCH_GROUPS = 'FETCH_GROUPS';
var FETCH_GROUPS_BY_USER_ID = 'FETCH_GROUPS_BY_USER_ID';
var FETCH_USERS_BY_GROUP_ID = 'FETCH_USERS_BY_GROUP_ID';
var ADD_TO_GROUP = 'ADD_TO_GROUP';
var ADD_GROUP = 'ADD_GROUP';
var UPDATE_GROUP = 'UPDATE_GROUP';
var REMOVE_GROUP = 'REMOVE_GROUP';

/***/ }),

/***/ "./src/redux/Actions/GroupActions.js":
/*!*******************************************!*\
  !*** ./src/redux/Actions/GroupActions.js ***!
  \*******************************************/
/*! exports provided: doFetchGroups, fetchGroups, fetchUsersByGroupId, addGroup, addToGroup, updateGroup, removeGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchGroups", function() { return doFetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersByGroupId", function() { return fetchUsersByGroupId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToGroup", function() { return addToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroup", function() { return removeGroup; });
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionTypes */ "./src/redux/ActionTypes.js");
/* harmony import */ var _Helpers_Group_GroupHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers/Group/GroupHelper */ "./src/Helpers/Group/GroupHelper.js");


var doFetchGroups = function doFetchGroups(apiProps) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_GROUPS"],
    payload: new Promise(function (resolve) {
      resolve(_Helpers_Group_GroupHelper__WEBPACK_IMPORTED_MODULE_1__["fetchGroups"](apiProps));
    })
  };
};
var fetchGroups = function fetchGroups(apiProps) {
  return function (dispatch, getState) {
    var _getState = getState(),
        isLoading = _getState.groupReducer.isLoading;

    if (!isLoading) {
      return dispatch(doFetchGroups(apiProps));
    }
  };
};
var fetchUsersByGroupId = function fetchUsersByGroupId(apiProps) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS_BY_GROUP_ID"],
    payload: new Promise(function (resolve) {
      resolve(_Helpers_Group_GroupHelper__WEBPACK_IMPORTED_MODULE_1__["fetchUsersByGroupId"](apiProps));
    })
  };
};
var addGroup = function addGroup(groupData) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_GROUP"],
    payload: _Helpers_Group_GroupHelper__WEBPACK_IMPORTED_MODULE_1__["addGroup"](groupData),
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
var addToGroup = function addToGroup(groupId, items) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_GROUP"],
    payload: _Helpers_Group_GroupHelper__WEBPACK_IMPORTED_MODULE_1__["addToGroup"](groupId, items),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding users',
          description: 'Users were successfully added to group.'
        }
      }
    }
  };
};
var updateGroup = function updateGroup(groupData) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_GROUP"],
    payload: _Helpers_Group_GroupHelper__WEBPACK_IMPORTED_MODULE_1__["updateGroup"](groupData),
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
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["REMOVE_GROUP"],
    payload: _Helpers_Group_GroupHelper__WEBPACK_IMPORTED_MODULE_1__["removeGroup"](group),
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

/***/ "./src/redux/Actions/UserActions.js":
/*!******************************************!*\
  !*** ./src/redux/Actions/UserActions.js ***!
  \******************************************/
/*! exports provided: fetchUsers, fetchGroupsByUserId, addUser, updateUser, removeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroupsByUserId", function() { return fetchGroupsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return removeUser; });
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionTypes */ "./src/redux/ActionTypes.js");
/* harmony import */ var _Helpers_User_UserHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers/User/UserHelper */ "./src/Helpers/User/UserHelper.js");



var doFetchUsers = function doFetchUsers() {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS"],
    payload: new Promise(function (resolve) {
      resolve(_Helpers_User_UserHelper__WEBPACK_IMPORTED_MODULE_1__["fetchUsers"]());
    })
  };
};

var fetchUsers = function fetchUsers() {
  return function (dispatch, getState) {
    var _getState = getState(),
        isUserDataLoading = _getState.userReducer.isUserDataLoading;

    if (!isUserDataLoading) {
      return dispatch(doFetchUsers());
    }
  };
};
var fetchGroupsByUserId = function fetchGroupsByUserId(apiProps) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_GROUPS_BY_USER_ID"],
    payload: new Promise(function (resolve) {
      resolve(_Helpers_User_UserHelper__WEBPACK_IMPORTED_MODULE_1__["fetchGroupsByUserId"](apiProps));
    })
  };
};
var addUser = function addUser(userData) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_USER"],
    payload: _Helpers_User_UserHelper__WEBPACK_IMPORTED_MODULE_1__["addUser"](userData),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding approver',
          description: 'The approver was added successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed adding approver',
          description: 'The approver was not added successfuly.'
        }
      }
    }
  };
};
var updateUser = function updateUser(userData) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER"],
    payload: _Helpers_User_UserHelper__WEBPACK_IMPORTED_MODULE_1__["updateUser"](userData),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success updating approver',
          description: 'The approver was updated successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed updating approver',
          description: 'The approver was not updated successfuly.'
        }
      }
    }
  };
};
var removeUser = function removeUser(user) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["REMOVE_USER"],
    payload: _Helpers_User_UserHelper__WEBPACK_IMPORTED_MODULE_1__["removeUser"](user),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success removing user',
          description: 'The user was removed successfully.'
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/redux/reducers/groupReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/groupReducer.js ***!
  \********************************************/
/*! exports provided: groupsInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsInitialState", function() { return groupsInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/ActionTypes */ "./src/redux/ActionTypes.js");



var _$concat$$concat$$con;

 // Initial State

var groupsInitialState = {
  groups: [],
  group: {},
  filterValue: '',
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

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUPS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUPS"], "_FULFILLED"), setGroups), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_GROUP"], "_FULFILLED"), selectGroup), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/userReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/userReducer.js ***!
  \*******************************************/
/*! exports provided: usersInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersInitialState", function() { return usersInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/ActionTypes */ "./src/redux/ActionTypes.js");



var _$concat$$concat$$con;

 // Initial State

var usersInitialState = {
  users: [],
  user: {},
  filterValue: '',
  isUserDataLoading: false
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

var selectUser = function selectUser(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedUser: payload,
    isUserDataLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_USERS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_USERS"], "_FULFILLED"), setUsers), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_USER"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_USER"], "_FULFILLED"), selectUser), _$concat$$concat$$con);

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map