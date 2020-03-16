(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var groupApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_4__["getGroupApi"])();
function fetchGroups(_x) {
  return _fetchGroups.apply(this, arguments);
}

function _fetchGroups() {
  _fetchGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var limit, offset, name, orderBy, _ref2, _ref3, groups, auth;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = _ref.limit, offset = _ref.offset, name = _ref.name, orderBy = _ref.orderBy;
            _context.next = 3;
            return Promise.all([groupApi.listGroups(limit, offset, name, undefined, undefined, orderBy), insights.chrome.auth.getUser()]);

          case 3:
            _ref2 = _context.sent;
            _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, 2);
            groups = _ref3[0];
            auth = _ref3[1];
            return _context.abrupt("return", _objectSpread({}, groups, {}, auth));

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
  _fetchGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(uuid) {
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
  _updateGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
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
  _addGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
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
  _removeGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(uuids) {
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
  _deletePrincipalsFromGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(groupId, users) {
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
  _addPrincipalsToGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(groupId, users) {
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
  _fetchRolesForGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(groupId, excluded, _ref4) {
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
            limit = _ref4.limit, offset = _ref4.offset, name = _ref4.name, description = _ref4.description;
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
  _deleteRolesFromGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(groupId, roles) {
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
  _addRolesToGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(groupId, roles) {
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
  _fetchPrincipalsForGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(groupId, usernames, pagination) {
    var options,
        _args11 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            options = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : {};
            _context11.next = 3;
            return groupApi.getPrincipalsFromGroup(groupId, usernames, _objectSpread({}, options, {
              query: _objectSpread({}, options.query, {}, pagination)
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var roleApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__["getRoleApi"])();
function createRole(_x) {
  return _createRole.apply(this, arguments);
}

function _createRole() {
  _createRole = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
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
  _fetchRolesWithPolicies = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
    var limit, offset, name, orderBy;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            limit = _ref2.limit, offset = _ref2.offset, name = _ref2.name, orderBy = _ref2.orderBy;
            _context2.t0 = _objectSpread;
            _context2.t1 = {};
            _context2.next = 5;
            return roleApi.listRoles(limit, offset, name, 'account', orderBy, ['groups_in_count']);

          case 5:
            _context2.t2 = _context2.sent;
            _context2.t3 = {};
            _context2.next = 9;
            return insights.chrome.auth.getUser();

          case 9:
            _context2.t4 = _context2.sent;
            return _context2.abrupt("return", (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3, _context2.t4));

          case 11:
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
  _fetchRole = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(uuid) {
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
  _removeRole = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(roleId) {
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








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
    setConfig(_objectSpread({}, config, {
      pagination: _objectSpread({}, config.pagination, {
        count: role.access ? role.access.length : 0
      })
    }));
  }, [role]);
  var filteredRows = role && role.access ? (role.access || []).filter(function (_ref) {
    var permission = _ref.permission;
    return permission === '*' || filter ? permission.includes(filter) : true;
  }).map(function (acc) {
    return _objectSpread({}, acc, {
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
      return setConfig(_objectSpread({}, config, {
        filter: name,
        pagination: _objectSpread({}, config.pagination, {
          limit: limit,
          offset: offset
        })
      }));
    },
    setFilterValue: function setFilterValue(_ref3) {
      var name = _ref3.name;
      return setConfig(_objectSpread({}, config, {
        filter: name
      }));
    },
    isLoading: isRecordLoading,
    pagination: _objectSpread({}, pagination, {
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_role_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/role-actions */ "./src/redux/actions/role-actions.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _role_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role-permissions */ "./src/smart-components/role/role-permissions.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Role = function Role() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      uuid = _useParams.uuid,
      groupUuid = _useParams.groupUuid;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return _objectSpread({
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

/***/ })

}]);
//# sourceMappingURL=1.js.map