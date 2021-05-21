/*! For license information please see 4170.c44ea6412445fb9cb438.js.LICENSE.txt */
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[4170],{23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,a=e[1]||"",i=e[3];if(!i)return a;if(t&&"function"==typeof btoa){var c=(n=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),u=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([c]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},44291:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createFocusTrap:()=>w});var r,o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],a=o.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},l=function(e){return"INPUT"===e.tagName},s=function(e){return!(e.disabled||function(e){return l(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;var t=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(t,"details:not([open]) *"))return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(e))},f=function(e){return!(!s(e)||function(e){return function(e){return l(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(e)||c(e)<0)},d=o.concat("iframe").join(","),p=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,d)&&s(e)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var y,h=(y=[],{activateTrap:function(e){if(y.length>0){var t=y[y.length-1];t!==e&&t.pause()}var n=y.indexOf(e);-1===n||y.splice(n,1),y.push(e)},deactivateTrap:function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1),y.length>0&&y[y.length-1].unpause()}}),m=function(e){return setTimeout(e,0)},w=function(e,t){var n,o=document,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),s={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d=function(e){return s.containers.some((function(t){return t.contains(e)}))},y=function(e){var t=l[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=o.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},w=function(){var e;if(null!==y("initialFocus"))e=y("initialFocus");else if(d(o.activeElement))e=o.activeElement;else{var t=s.tabbableGroups[0];e=t&&t.firstTabbableNode||y("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},g=function(){if(s.tabbableGroups=s.containers.map((function(e){var t,n,r,o,l,s,d,p=(n=[],r=[],(o=e,l=(t=t||{}).includeContainer,s=f,d=Array.prototype.slice.apply(o.querySelectorAll(a)),l&&i.call(o,a)&&d.unshift(o),d.filter(s)).forEach((function(e,t){var o=c(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(u).map((function(e){return e.node})).concat(n));if(p.length>0)return{firstTabbableNode:p[0],lastTabbableNode:p[p.length-1]}})).filter((function(e){return!!e})),s.tabbableGroups.length<=0&&!y("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},O=function e(t){t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!l.preventScroll}),s.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(w()))},_=function(e){d(e.target)||(l.clickOutsideDeactivates?n.deactivate({returnFocus:l.returnFocusOnDeactivate&&!p(e.target)}):l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||e.preventDefault())},S=function(e){var t=d(e.target);t||e.target instanceof Document?t&&(s.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),O(s.mostRecentlyFocusedNode||w()))},E=function(e){if(!1!==l.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){g();var t=null;if(s.tabbableGroups.length>0)if(e.shiftKey){var n=s.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?s.tabbableGroups.length-1:n-1;t=s.tabbableGroups[r].lastTabbableNode}}else{var o=s.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(o>=0){var a=o===s.tabbableGroups.length-1?0:o+1;t=s.tabbableGroups[a].firstTabbableNode}}else t=y("fallbackFocus");t&&(e.preventDefault(),O(t))}(e)},k=function(e){l.clickOutsideDeactivates||d(e.target)||l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},j=function(){if(s.active)return h.activateTrap(n),r=l.delayInitialFocus?m((function(){O(w())})):O(w()),o.addEventListener("focusin",S,!0),o.addEventListener("mousedown",_,{capture:!0,passive:!1}),o.addEventListener("touchstart",_,{capture:!0,passive:!1}),o.addEventListener("click",k,{capture:!0,passive:!1}),o.addEventListener("keydown",E,{capture:!0,passive:!1}),n},x=function(){if(s.active)return o.removeEventListener("focusin",S,!0),o.removeEventListener("mousedown",_,!0),o.removeEventListener("touchstart",_,!0),o.removeEventListener("click",k,!0),o.removeEventListener("keydown",E,!0),n};return(n={activate:function(e){if(s.active)return this;g(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=o.activeElement;var t=e&&e.onActivate?e.onActivate:l.onActivate;return t&&t(),j(),this},deactivate:function(e){if(!s.active)return this;clearTimeout(r),x(),s.active=!1,s.paused=!1,h.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:l.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:l.returnFocusOnDeactivate)&&m((function(){var e;O((e=s.nodeFocusedBeforeActivation,y("setReturnFocus")||e))})),this},pause:function(){return s.paused||!s.active||(s.paused=!0,x()),this},unpause:function(){return s.paused&&s.active?(s.paused=!1,g(),j(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return s.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),s.active&&g(),this}}).updateContainerElements(e),n}},93379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=i(s),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:b(d,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function b(e,t){var n,r,o;if(t.singleton){var a=v++;n=p||(p=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var u=c(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=u}}}},70655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>c,__param:()=>u,__metadata:()=>l,__awaiter:()=>s,__generator:()=>f,__exportStar:()=>d,__values:()=>p,__read:()=>v,__spread:()=>b,__await:()=>y,__asyncGenerator:()=>h,__asyncDelegator:()=>m,__asyncValues:()=>w,__makeTemplateObject:()=>g,__importStar:()=>O,__importDefault:()=>_});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function u(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(i,c)}u((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function h(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(u,l):s(a[0][2],n)}catch(e){s(a[0][3],e)}var n}function u(e){c("next",e)}function l(e){c("throw",e)}function s(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function m(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function g(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=../sourcemaps/4170.a166376ed2c4e8d24ad6.js.map