(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("doT"), require("grapesjs"));
	else if(typeof define === 'function' && define.amd)
		define("grapesjs-components-farmer", ["jQuery", "doT", "grapesjs"], factory);
	else if(typeof exports === 'object')
		exports["grapesjs-components-farmer"] = factory(require("jQuery"), require("doT"), require("grapesjs"));
	else
		root["grapesjs-components-farmer"] = factory(root["jQuery"], root["doT"], root["grapesjs"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_dot__, __WEBPACK_EXTERNAL_MODULE_grapesjs__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/app.js":
/*!************************!*\
  !*** ./example/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src */ "./src/index.js");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);


 // only for debugging purpose as pluginFarmer is reference from source
// when you import directly as 'grapesjs-components-farmer' then you don't need to do this

window['grapesjs-components-farmer'] = _src__WEBPACK_IMPORTED_MODULE_0__["default"];
var opts = {
  container: '#gjs',
  height: '100%',
  noticeOnUnload: 0,
  showOffsets: 1,
  autorender: 1,
  allowScripts: 1,
  storageManager: {
    type: 'none'
  },
  forceClass: 0,
  avoidInlineStyle: 1,
  styleManager: {
    clearProperties: 1
  },
  fromElement: 1,
  canvas: {
    styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js']
  },
  script: function script() {
    // initialize next id
    window.nextNameIndex = 1;
  },
  plugins: ['grapesjs-components-farmer', 'gjs-plugin-ckeditor'],
  pluginsOpts: {
    'grapesjs-components-farmer': {
      formNextId: 1,
      panel: 1,
      summernote: {
        airMode: true
      }
    },
    'gjs-plugin-ckeditor': {
      position: 'center',
      options: {
        startupFocus: true,
        // Allows any class and any inline style
        extraAllowedContent: '*(*);*{*}',
        // Disable auto-formatting, class removing, etc.
        allowedContent: true,
        enterMode: CKEDITOR.ENTER_BR,
        extraPlugins: 'sharedspace,justify,colorbutton,panelbutton,font',
        toolbar: [{
          name: 'styles',
          items: ['Font', 'FontSize']
        }, ['Bold', 'Italic', 'Underline', 'Strike'], {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList']
        }, {
          name: 'links',
          items: ['Link', 'Unlink']
        }, {
          name: 'colors',
          items: ['TextColor', 'BGColor']
        }]
      }
    }
  }
};
var editor = grapesjs__WEBPACK_IMPORTED_MODULE_1___default.a.init(opts);
var pfx = editor.getConfig().stylePrefix;
var modal = editor.Modal;
var cmdm = editor.Commands;
var codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
var pnm = editor.Panels;
var container = document.createElement('div');
codeViewer.set({
  codeName: 'htmlmixed',
  readOnly: 0,
  theme: 'hopscotch',
  autoBeautify: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  lineWrapping: true,
  styleActiveLine: true,
  smartIndent: true,
  indentWithTabs: true
});
cmdm.add('html-export-usable', {
  run: function run(editor, sender) {
    sender && sender.set('active', 0);
    var viewer = codeViewer.editor;
    modal.setTitle('Usable HTML');

    if (!viewer) {
      var txtarea = document.createElement('textarea');
      container.appendChild(txtarea);
      codeViewer.init(txtarea);
      viewer = codeViewer.editor;
    }

    modal.setContent('');
    modal.setContent(container);
    codeViewer.setContent(editor.runCommand('get-usable-html'));
    modal.open();
    viewer.refresh();
  }
});
pnm.addButton('options', [{
  id: 'export',
  className: 'fa fa-download',
  command: 'html-export-usable',
  attributes: {
    title: 'Export usable HTML'
  }
}]);

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
  runtime.wrap = wrap;

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

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
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
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
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
        return new Promise(function(resolve, reject) {
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
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
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
        if (delegate.iterator.return) {
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

  runtime.keys = function(object) {
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
  runtime.values = values;

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
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bm = editor.BlockManager;
  var c = opts.comps;
  var blocks = c.blocks;
  var cats = c.blockCategories;

  if (opts.resetBlocks) {
    bm.getAll().reset();
  }

  var allBlocks = {
    category: opts.categoryLabel // CORE BLOCKS

  };
  bm.add('comp_col1').set(_objectSpread({
    label: c.comp_col1.label,
    attributes: {
      class: 'gjs-fonts gjs-f-b1'
    },
    content: {
      type: 'comp_row',
      components: [{
        type: 'comp_col'
      }]
    }
  }, allBlocks));
  bm.add('comp_col2').set(_objectSpread({
    label: c.comp_col2.label,
    attributes: {
      class: 'gjs-fonts gjs-f-b2'
    },
    content: {
      type: 'comp_row',
      components: [{
        type: 'comp_col'
      }, {
        type: 'comp_col'
      }]
    }
  }, allBlocks));
  bm.add('comp_col3').set(_objectSpread({
    label: c.comp_col3.label,
    attributes: {
      class: 'gjs-fonts gjs-f-b3'
    },
    content: {
      type: 'comp_row',
      components: [{
        type: 'comp_col'
      }, {
        type: 'comp_col'
      }, {
        type: 'comp_col'
      }]
    }
  }, allBlocks));
  bm.add('comp_submit', _objectSpread({
    label: "\n      <div style=\"color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    display: inline-block;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    border: 1px solid transparent;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    margin-top: 12px;\n    margin-bottom: 16px;\n    width: 50px;\">&nbsp;</div>\n      <div class=\"gjs-block-label\">".concat(c.comp_submit.label, "</div>\n    "),
    content: {
      type: 'comp_submit'
    }
  }, allBlocks));
  bm.add('comp_input', _objectSpread({
    label: "\n    <svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z\"></path>\n      <polygon class=\"gjs-block-svg-path\" points=\"4 10 5 10 5 14 4 14\"></polygon>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_input.label, "</div>"),
    content: {
      type: 'comp_input'
    }
  }, allBlocks));
  bm.add('comp_textarea', _objectSpread({
    label: "\n    <svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z\"></path>\n      <polygon class=\"gjs-block-svg-path\" points=\"4 8 5 8 5 12 4 12\"></polygon>\n      <polygon class=\"gjs-block-svg-path\" points=\"19 7 20 7 20 17 19 17\"></polygon>\n      <polygon class=\"gjs-block-svg-path\" points=\"20 8 21 8 21 9 20 9\"></polygon>\n      <polygon class=\"gjs-block-svg-path\" points=\"20 15 21 15 21 16 20 16\"></polygon>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_textarea.label, "</div>"),
    content: {
      type: 'comp_textarea'
    }
  }, allBlocks));
  bm.add('comp_select', _objectSpread({
    label: "\n    <svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z\" fill-rule=\"nonzero\"></path>\n      <polygon class=\"gjs-block-svg-path\" transform=\"translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) \" points=\"18.5 11 20 13 17 13\"></polygon>\n      <rect class=\"gjs-block-svg-path\" x=\"4\" y=\"11.5\" width=\"11\" height=\"1\"></rect>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_select.label, "</div>"),
    content: {
      type: 'comp_select'
    }
  }, allBlocks));
  bm.add('comp_checkbox', _objectSpread({
    label: c.comp_checkbox.label,
    attributes: {
      class: 'fa fa-check-square'
    },
    content: {
      type: 'comp_checkbox'
    }
  }, allBlocks));
  bm.add('comp_hidden', _objectSpread({
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z\"></path>\n      <polygon class=\"gjs-block-svg-path\" points=\"4 10 5 10 5 14 4 14\"></polygon>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_hidden.label, "</div>"),
    content: {
      type: 'comp_hidden'
    }
  }, allBlocks));
  bm.add('comp_text', _objectSpread({
    label: c.comp_text.label,
    attributes: {
      class: 'gjs-fonts gjs-f-text'
    },
    content: {
      type: 'comp_text',
      content: '<div class="note-editor"></div>',
      style: {
        padding: '10px'
      },
      activeOnRender: 1
    }
  }, allBlocks));
  bm.add('comp_image', _objectSpread({
    label: c.comp_image.labelImage,
    attributes: {
      class: 'gjs-fonts gjs-f-image'
    },
    content: {
      style: {
        color: 'black'
      },
      type: 'image',
      activeOnRender: 1
    }
  }, allBlocks));
  bm.add('comp_map', _objectSpread({
    label: c.comp_map.label,
    attributes: {
      class: 'fa fa-map-o'
    },
    content: {
      type: 'map',
      style: {
        height: '350px'
      }
    }
  }, allBlocks));
});

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: cmdDeviceDesktop, cmdDeviceTablet, cmdDeviceMobile, cmdClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmdDeviceDesktop", function() { return cmdDeviceDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmdDeviceTablet", function() { return cmdDeviceTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmdDeviceMobile", function() { return cmdDeviceMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmdClear", function() { return cmdClear; });
var cmdDeviceDesktop = 'set-device-desktop',
    cmdDeviceTablet = 'set-device-tablet',
    cmdDeviceMobile = 'set-device-mobile',
    cmdClear = 'canvas-clear';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var commands = editor.Commands;
  var pn = editor.Panels;
  var opts_comps = opts.comps || {};
  var default_comps = {
    'comp_input': {
      label: 'Input',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"{{=it.name_attr}}\">{{=it.label_attr}}</label>\n        <input {{= it.required_attr ? 'required ' : '' }}type=\"{{=it.type_attr}}\" class=\"form-control\" name=\"{{=it.name_attr}}\" placeholder=\"{{=it.placeholder_attr || ''}}\" {{= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' }}/>\n      "
    },
    'comp_select': {
      label: 'Select',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"{{=it.name_attr}}\">{{=it.label_attr}}</label>\n        <select {{= it.multiple_attr ? 'multiple ' : '' }}{{= it.required_attr ? 'required ' : '' }}class=\"form-control\" name=\"{{=it.name_attr}}\">\n          <option selected>-- Please select an option -- </option>\n          {{~ (it.option_attr + \"\").trim().split(\"\\n\") :option }}\n          {{ var msgProps = option.split('::');\n          }} <option value=\"{{= msgProps[0]}}\">{{= msgProps[1] || msgProps[0] }}</option>{{~}}\n        </select>\n      "
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"{{=it.name_attr}}\">{{=it.label_attr}}</label>\n        <textarea {{= it.required_attr ? 'required ' : '' }}{{= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' }}{{= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' }}class=\"form-control\" name=\"{{=it.name_attr}}\" placeholder=\"{{=it.placeholder_attr || ''}}\">{{= it.value_attr || '' }}</textarea>\n      "
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'form-check',
      useTag: 'div',
      template: "\n        <label for=\"{{=it.name_attr}}\" class=\"form-check-label\">\n          <input {{= it.required_attr ? 'required ' : '' }}type=\"checkbox\" name=\"{{=it.name_attr}}\" class=\"form-check-input\" {{= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' }}/>\n          {{=it.label_attr}}\n        </label>\n      "
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: "\n        <input {{= it.required_attr ? 'required ' : '' }}type=\"hidden\" name=\"{{=it.name_attr}}\" {{= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' }}/>\n      "
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn btn-primary btn-block',
      useTag: 'button',
      template: '{{= it.label_attr }}'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'row'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div',
      classes: 'col'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div'
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_link': {
      label: 'Link'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_video': {
      label: 'Video'
    },
    'comp_map': {
      label: 'Map'
    } // provide defaults

  };

  for (var k in default_comps) {
    var x = default_comps[k];
    var y = opts_comps[k];

    if (y) {
      for (var j in y) {
        y[j] = y[j] || x[j];
      }
    } else {
      opts_comps[k] = x;
    }
  }

  var options = _objectSpread({
    formNextId: 1,
    categoryLabel: 'Basic',
    formFieldsPrefix: 'Field',
    showStylesOnChange: 1,
    addResource: function addResource(url) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'script';
      var doc = editor.Canvas.getDocument();
      var head = doc.head || doc.getElementsByTagName('head')[0];
      var res = document.createElement(type);

      if (type === 'script') {
        res.src = url;
      } else if (type === 'link') {
        res.rel = 'stylesheet';
        res.href = url;
      }

      head.appendChild(res);
    }
  }, opts);

  options.comps = options.comps || opts_comps;

  var compileTemplates = function compileTemplates() {
    var doT = null;
    Object.keys(options.comps).forEach(function (k) {
      var t = options.comps[k];

      if (t && typeof t.template === 'string') {
        if (!doT) {
          doT = __webpack_require__(/*! dot */ "dot");
        }

        t.template = doT.template(t.template);
      }
    });
  };

  commands.add('get-usable-html', {
    run: function run() {
      // get the builder xml
      var html = editor.getHtml(); // convert into html

      for (var _k in options.comps) {
        // default tag as div unless realTag value is provided
        var tag = options.comps[_k].realTag || 'div';
        html = html.replace(new RegExp('<' + _k, 'g'), '<' + tag);
        html = html.replace(new RegExp('</' + _k + '>', 'g'), '</' + tag + '>');
      }

      return html;
    }
  }); // Add plugins

  __webpack_require__(/*! ./traits */ "./src/traits.js").default(editor, options);

  __webpack_require__(/*! ./blocks */ "./src/blocks.js").default(editor, options);

  if (opts.panel) {
    __webpack_require__(/*! ./panels */ "./src/panels.js").default(editor, options);
  }

  if (opts.trumbowyg) {
    __webpack_require__(/*! ./trumbowyg */ "./src/trumbowyg.js").default(editor, options);
  }

  if (opts.summernote) {
    __webpack_require__(/*! ./summernote */ "./src/summernote.js").default(editor, options);
  }

  editor.on('load', function () {
    compileTemplates();
    setTimeout(function () {
      var doc = editor.Canvas.getDocument();
      var head = doc.head || doc.getElementsByTagName('head')[0];
      var css = "\nbody {\n  padding: 10px;\n}\n\ncomp_row,\ncomp_col {\n  min-height: 2rem !important;\n}\n\ncomp_row {\n  display: block;\n  width: 100%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\ncomp_col {\n  min-width: 100px;\n}\n";
      var style = doc.createElement('style');
      style.type = 'text/css';

      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }, 10);
  });
});

/***/ }),

/***/ "./src/panels.js":
/*!***********************!*\
  !*** ./src/panels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (editor, opts) {
  var cmds = editor.Commands;
  var pn = editor.Panels;
  var eConfig = editor.getConfig();
  var crc = 'create-comp';
  var mvc = 'move-comp';
  var swv = 'sw-visibility';
  var expt = 'export-template';
  var osm = 'open-sm';
  var otm = 'open-tm';
  var ola = 'open-layers';
  var obl = 'open-blocks';
  var ful = 'fullscreen';
  var prv = 'preview';
  eConfig.showDevices = 0;
  var txtConfirm = opts.textCleanCanvas || 'Are you sure to clean the canvas?';
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceDesktop"], function (e) {
    return e.setDevice('Desktop');
  });
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceTablet"], function (e) {
    return e.setDevice('Tablet');
  });
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceMobile"], function (e) {
    return e.setDevice('Mobile portrait');
  });
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__["cmdClear"], function (e) {
    return confirm(txtConfirm) && e.runCommand('core:canvas-clear');
  });
  pn.getPanels().reset([{
    id: 'commands',
    buttons: [{}]
  }, {
    id: 'options',
    buttons: [{
      id: swv,
      command: swv,
      context: swv,
      active: 1,
      className: 'fa fa-square-o',
      attributes: {
        title: 'Show Borders'
      }
    }, {
      id: prv,
      context: prv,
      command: function command(e) {
        return e.runCommand(prv);
      },
      className: 'fa fa-eye',
      attributes: {
        title: 'Preview'
      }
    }, {
      id: ful,
      command: ful,
      context: ful,
      className: 'fa fa-arrows-alt',
      attributes: {
        title: 'Fullscreen'
      }
    }, {
      id: expt,
      className: 'fa fa-code',
      command: function command(e) {
        return e.runCommand(expt);
      },
      attributes: {
        title: 'Show code'
      }
    }, {
      id: 'undo',
      className: 'fa fa-undo',
      command: function command(e) {
        return e.runCommand('core:undo');
      },
      attributes: {
        title: 'Undo'
      }
    }, {
      id: 'redo',
      className: 'fa fa-repeat',
      command: function command(e) {
        return e.runCommand('core:redo');
      },
      attributes: {
        title: 'Redo'
      }
    }, {
      id: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdClear"],
      className: 'fa fa-trash',
      command: function command(e) {
        return e.runCommand(_consts__WEBPACK_IMPORTED_MODULE_0__["cmdClear"]);
      },
      attributes: {
        title: 'Clear canvas'
      }
    }]
  }, {
    id: 'views',
    buttons: [{
      id: osm,
      command: osm,
      className: 'fa fa-paint-brush',
      attributes: {
        title: 'Style Manager'
      }
    }, {
      id: otm,
      command: otm,
      className: 'fa fa-cog',
      attributes: {
        title: 'Settings'
      }
    }, {
      id: ola,
      command: ola,
      className: 'fa fa-bars',
      attributes: {
        title: 'Layers'
      }
    }, {
      id: obl,
      command: obl,
      className: 'fa fa-th-large',
      active: 1,
      attributes: {
        title: 'Blocks'
      }
    }]
  }]); // Add devices buttons

  var panelDevices = pn.addPanel({
    id: 'devices-c'
  });
  panelDevices.get('buttons').add([{
    id: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceDesktop"],
    command: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceDesktop"],
    className: 'fa fa-desktop',
    active: 1
  }, {
    id: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceTablet"],
    command: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceTablet"],
    className: 'fa fa-tablet'
  }, {
    id: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceMobile"],
    command: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceMobile"],
    className: 'fa fa-mobile'
  }]);
  editor.on('load', function () {
    var pn = editor.Panels;
    var editorEl = jquery__WEBPACK_IMPORTED_MODULE_1___default()(editor.getEl()); // Load and show settings and style manager

    var openTmBtn = pn.getButton('views', 'open-tm');
    openTmBtn && openTmBtn.set('active', 1);
    var openSm = pn.getButton('views', 'open-sm');
    openSm && openSm.set('active', 1); // Add Settings Sector

    var traitsSector = jquery__WEBPACK_IMPORTED_MODULE_1___default()("<div class=\"gjs-sm-sector no-select\">\n<div class=\"gjs-sm-title\"><span class=\"icon-settings fa fa-cog\"></span> Settings</div>\n<div class=\"gjs-sm-properties\"></div></div>");
    var traitsProps = traitsSector.find('.gjs-sm-properties'); // copy from settings tab into traits sector and then hide settings tab

    traitsProps.append(editorEl.find('.gjs-trt-traits'));
    editorEl.find('.gjs-pn-views .fa-cog').hide();
    editorEl.find('.gjs-sm-sectors').before(traitsSector);
    traitsSector.find('.gjs-sm-title').on('click', function () {
      var traitStyle = traitsProps.get(0).style;
      var hidden = traitStyle.display === 'none';

      if (hidden) {
        traitStyle.display = 'block';
      } else {
        traitStyle.display = 'none';
      }
    });
    var openBl = pn.getButton('views', obl);
    openBl && openBl.set('active', 1); // On component change show the Style Manager

    opts.showStylesOnChange && editor.on('component:selected', function () {
      var openSmBtn = pn.getButton('views', osm);
      var openLayersBtn = pn.getButton('views', ola); // Don't switch when the Layer Manager is on or
      // there is no selected component

      if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
        openSmBtn && openSmBtn.set('active', 1);
      }
    });
  });
});

/***/ }),

/***/ "./src/summernote.js":
/*!***************************!*\
  !*** ./src/summernote.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var c = opts.summernote;
  editor.setCustomRte({
    enable: function () {
      var _enable = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(el, rte) {
        var doc, win, jq;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // detect summernote
                doc = el.ownerDocument;
                win = doc.defaultView || doc.parentWindow;
                jq = win.jQuery;

                if (jq.fn.summernote) {
                  _context.next = 6;
                  break;
                }

                console.error('Summernote script is required.');
                return _context.abrupt("return");

              case 6:
                rte = jq(el).find('.note-editor');

                if (rte.length > 0) {
                  rte.summernote('enable');
                } else {
                  rte = jq(el).html('<div class="note-editor" contenteditable="true"></div>').find('.note-editor').summernote(c);
                }

                return _context.abrupt("return", rte);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function enable(_x, _x2) {
        return _enable.apply(this, arguments);
      }

      return enable;
    }(),
    disable: function disable(el, rte) {
      var doc = el.ownerDocument;
      var win = doc.defaultView || doc.parentWindow;
      var jq = win.jQuery;
      jq(el).find('.note-editor').remove();
    }
  });
  editor.on('load', function () {
    opts.addResource('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');
    opts.addResource('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js');
    opts.addResource(c.css || 'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote.css', 'link');
    opts.addResource(c.js || 'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote.min.js');
  });
});

/***/ }),

/***/ "./src/traits.js":
/*!***********************!*\
  !*** ./src/traits.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var tm = editor.TraitManager;
  var dc = editor.DomComponents;
  var bm = editor.BlockManager;
  var defaultType = dc.getType('default');
  var selectType = dc.getType('select') || defaultType;
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  var textType = dc.getType('text');
  var fieldTraits = defaultModel.prototype.defaults.traits.concat([{
    type: 'text',
    name: 'name_attr',
    label: 'Name',
    placeholder: 'Enter a field name..'
  }, {
    type: 'text',
    name: 'label_attr',
    label: 'Label',
    placeholder: 'Enter a field label..'
  }]);
  var inputTraits = fieldTraits.concat([{
    type: 'text',
    name: 'value_attr',
    label: 'Value',
    changeProp: 1,
    placeholder: 'Enter a default value..'
  }, {
    type: 'text',
    name: 'placeholder_attr',
    label: 'Placeholder',
    changeProp: 1,
    placeholder: 'Enter placeholder text..'
  }, {
    type: 'checkbox',
    name: 'required_attr',
    changeProp: 1,
    label: 'Required'
  }, {
    type: 'text',
    name: 'pattern_attr',
    changeProp: 1,
    label: 'Pattern'
  }, {
    type: 'number',
    name: 'min_attr',
    changeProp: 1,
    label: 'Min'
  }, {
    type: 'number',
    name: 'max_attr',
    changeProp: 1,
    label: 'Max'
  }]); // text, password, email, number, url, tel, search, date, datetime,
  // datetime-local, month, week, time, range, or color
  // exclude: file

  var inputTypeTrait = {
    type: 'select',
    name: 'type_attr',
    label: 'Type',
    options: [{
      name: 'Text',
      value: 'text'
    }, {
      name: 'Password',
      value: 'password'
    }, {
      name: 'Email',
      value: 'email'
    }, {
      name: 'Number',
      value: 'number'
    }, {
      name: 'URL',
      value: 'url'
    }, {
      name: 'Phone',
      value: 'tel'
    }, // { name: 'Search', value: 'tel' },
    {
      name: 'Date',
      value: 'date'
    }, {
      name: 'Date Time',
      value: 'datetime-local'
    }, // { name: 'Month', value: 'month' },
    // { name: 'Week', value: 'week' },
    {
      name: 'Range',
      value: 'range'
    }, // { name: 'Time', value: 'time' },
    {
      name: 'Color Picker',
      value: 'color'
    }] // advanced traits

  };
  tm.addType('option_attr', {
    events: {
      'onchange': 'onChange'
    },

    /**
    * Returns the input element
    * @return {HTMLElement}
    */
    getInputEl: function getInputEl() {
      if (!this.inputEl) {
        var input = document.createElement('textarea');
        input.value = this.target.get('option_attr');
        this.inputEl = input;
      }

      return this.inputEl;
    },

    /**
     * Triggered when the value of the model is changed
     */
    onValueChange: function onValueChange() {
      this.target.set('option_attr', this.model.get('value'));
    }
  });
  var myDefaultModel = defaultModel.extend({
    defaults: _objectSpread({}, defaultModel.prototype.defaults, {
      draggable: true,
      droppable: true,
      copyable: false,
      label_attr: 'Label'
    }),
    // force regenerate of HTML
    toHTML: function toHTML() {
      var html = '';

      if (!this.view.el) {
        var el = document.createElement(this.attributes.tagName);
        html = this.generateHtml(el)[0].outerHTML;
      }

      html = this.generateHtml()[0].outerHTML;
      return html;
    },
    getTraitValues: function getTraitValues() {
      var values = _objectSpread({}, this.attributes);

      this.get('traits').each(function (trait) {
        var k = trait.get('name');
        values[k] = trait.get('value') || values[k];
      });
      return values;
    },
    ensureNameAttr: function ensureNameAttr(attrs) {
      var model = this;
      var nameTrait = model.get('traits').where({
        name: 'name_attr'
      })[0];

      if (nameTrait) {
        var name = attrs.name_attr;

        if (!name) {
          name = "".concat(opts.formFieldsPrefix).concat(opts.formNextId++);
          nameTrait.set('value', name);
          model.setAttributes({
            name_attr: name
          });
        } // this ensure name value exists and is correct on the UI


        attrs.name_attr = name;
      }
    },
    generateHtml: function generateHtml() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.view.el;
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.attributes.tagName;
      var model = this;
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el || this.view.el);
      var attrs = this.getTraitValues();
      var $k = $k || model.get('tagName');

      if (opts && opts.comps && opts.comps[$k]) {
        var templateFn = opts.comps[$k].template;

        if (typeof templateFn === 'function') {
          model.ensureNameAttr(attrs);
          $el.empty();
          $el.append(templateFn(attrs));
        }
      }

      return $el;
    }
  }); // override default view to generate html

  var myDefaultView = defaultView.extend({
    onRender: function onRender() {
      if (this.model.generateHtml) {
        this.model.generateHtml();
      }

      return this;
    }
  }); // BEGIN: components

  dc.addType('comp_input', {
    model: myDefaultModel.extend({
      defaults: _objectSpread({}, myDefaultModel.prototype.defaults, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_input',
        type_attr: 'text',
        traits: inputTraits.concat(inputTypeTrait),
        classes: ('comp_input ' + (opts.comps.comp_input.classes || '')).split(' ')
      }),
      init: function init() {
        var that = this;
        that.listenTo(that, 'change:label_attr', that.generateHtml);
        that.listenTo(that, 'change:name_attr', that.generateHtml);
        that.listenTo(that, 'change:placeholder_attr', that.generateHtml);
      }
    }),
    view: myDefaultView
  }); // Select Box

  dc.addType('comp_select', {
    model: myDefaultModel.extend({
      defaults: _objectSpread({}, myDefaultModel.prototype.defaults, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_select',
        option_attr: 'MN::Minnesota\nTX::Texas',
        label_attr: 'Select',
        traits: [{
          type: 'option_attr'
        }, {
          type: 'checkbox',
          name: 'required_attr',
          changeProp: 1,
          label: 'Required'
        }, {
          type: 'checkbox',
          name: 'multiple_attr',
          changeProp: 1,
          label: 'Multiple'
        }].concat(fieldTraits),
        classes: ('comp_select ' + (opts.comps.comp_select.classes || '')).split(' ')
      }),
      init: function init() {
        var that = this;
        that.listenTo(that, 'change:label_attr', that.generateHtml);
        that.listenTo(that, 'change:name_attr', that.generateHtml);
        that.listenTo(that, 'change:multiple_attr', that.generateHtml);
        that.listenTo(that, 'change:option_attr', that.generateHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_textarea', {
    model: myDefaultModel.extend({
      defaults: _objectSpread({}, defaultModel.prototype.defaults, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_textarea',
        label_attr: 'Message',
        traits: [{
          type: 'checkbox',
          name: 'required_attr',
          changeProp: 1,
          label: 'Required'
        }, {
          type: 'text',
          name: 'placeholder_attr',
          label: 'Placeholder',
          changeProp: 1,
          placeholder: 'Enter placeholder text..'
        }, {
          type: 'number',
          name: 'rows_attr',
          label: 'Rows',
          changeProp: 1,
          placeholder: 'Enter field rows/line-height..'
        }, {
          type: 'number',
          name: 'cols_attr',
          label: 'Columns',
          changeProp: 1,
          placeholder: 'Enter field columns/width..'
        }].concat(fieldTraits),
        classes: ('comp_textarea ' + (opts.comps.comp_textarea.classes || '')).split(' ')
      }),
      init: function init() {
        var that = this;
        that.listenTo(that, 'change:label_attr', that.generateHtml);
        that.listenTo(that, 'change:name_attr', that.generateHtml);
        that.listenTo(that, 'change:placeholder_attr', that.generateHtml);
        that.listenTo(that, 'change:cols_attr', that.generateHtml);
        that.listenTo(that, 'change:rows_attr', that.generateHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_checkbox', {
    model: myDefaultModel.extend({
      defaults: _objectSpread({}, myDefaultModel.prototype.defaults, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_checkbox',
        label_attr: 'I accept the terms and use',
        traits: [{
          type: 'checkbox',
          name: 'required_attr',
          changeProp: 1,
          label: 'Required'
        }].concat(fieldTraits),
        classes: ('comp_checkbox ' + (opts.comps.comp_checkbox.classes || '')).split(' ')
      }),
      init: function init() {
        var that = this;
        that.listenTo(that, 'change:label_attr', that.generateHtml);
        that.listenTo(that, 'change:name_attr', that.generateHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_hidden', {
    model: myDefaultModel.extend({
      defaults: _objectSpread({}, myDefaultModel.prototype.defaults, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_hidden',
        traits: [{
          type: 'text',
          name: 'name_attr',
          label: 'Name',
          changeProp: 1,
          placeholder: 'Enter a field name...'
        }],
        classes: ('comp_hidden ' + (opts.comps.comp_hidden.classes || '')).split(' ')
      }),
      init: function init() {
        var that = this;
        that.listenTo(that, 'change:name_attr', that.generateHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_submit', {
    model: myDefaultModel.extend({
      defaults: _objectSpread({}, myDefaultModel.prototype.defaults, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_submit',
        label_attr: 'Send',
        traits: defaultModel.prototype.defaults.traits.concat([{
          type: 'text',
          name: 'label_attr',
          label: 'Label',
          placeholder: 'Enter a field label..'
        }]),
        classes: ('comp_submit ' + (opts.comps.comp_submit.classes || '')).split(' ')
      }),
      init: function init() {
        var that = this;
        that.listenTo(that, 'change:label_attr', that.generateHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_row', {
    model: defaultModel.extend({
      defaults: _objectSpread({}, defaultModel.prototype.defaults, {
        tagName: 'comp_row',
        // Can be dropped inside other elements
        draggable: true,
        copyable: false,
        // Can drop other elements inside it
        droppable: 'comp_col',
        classes: ('comp_row ' + (opts.comps.comp_row.classes || '')).split(' ')
      })
    }),
    view: defaultView
  });
  dc.addType('comp_col', {
    model: defaultModel.extend({
      defaults: _objectSpread({}, defaultModel.prototype.defaults, {
        tagName: 'comp_col',
        // Can be dropped only inside `row` elements
        draggable: 'comp_row',
        // Can drop other elements inside it
        droppable: true,
        copyable: false,
        classes: ('comp_col ' + (opts.comps.comp_col.classes || '')).split(' ')
      })
    }),
    view: defaultView
  }); // override default view to generate html

  var myTextView = textType.view.extend({
    getChildrenSelector: function getChildrenSelector() {
      var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.el).find('.note-editor');

      if (container.length <= 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.el).html('<div class="note-editor" contenteditable="true"></div>');
      }

      return '.note-editor';
    }
  });
  dc.addType('comp_text', {
    model: textType.model,
    view: myTextView
  });
});

/***/ }),

/***/ "./src/trumbowyg.js":
/*!**************************!*\
  !*** ./src/trumbowyg.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var c = opts.trumbowyg;
  editor.setCustomRte({
    enable: function () {
      var _enable = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(el, rte) {
        var doc, win, jq;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // detect summernote
                doc = el.ownerDocument;
                win = doc.defaultView || doc.parentWindow;
                jq = win.jQuery;

                if (jq.fn.trumbowyg) {
                  _context.next = 6;
                  break;
                }

                console.error('Trumbowyg script is required.');
                return _context.abrupt("return");

              case 6:
                if (rte) {
                  jq(el).trumbowyg('enable');
                } else {
                  rte = jq(el).trumbowyg(c);
                }

                return _context.abrupt("return", rte);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function enable(_x, _x2) {
        return _enable.apply(this, arguments);
      }

      return enable;
    }(),
    disable: function disable(el, rte) {
      var doc = el.ownerDocument;
      var win = doc.defaultView || doc.parentWindow;
      var jq = win.jQuery;
      jq(el).trumbowyg('disable');
    }
  });
  editor.on('load', function () {
    var doc = editor.Canvas.getDocument();
    var head = doc.head || doc.getElementsByTagName('head')[0];
    var script = doc.createElement('script');
    script.src = c.js || 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/trumbowyg.min.js';
    head.appendChild(script);
    var style = doc.createElement('link');
    style.rel = 'stylesheet';
    style.href = c.css || 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/ui/trumbowyg.min.css';
    head.appendChild(style);
  });
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./example/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomn/Desktop/work/brickinc/grapesjs-components-farmer/example/app.js */"./example/app.js");


/***/ }),

/***/ "dot":
/*!**********************!*\
  !*** external "doT" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dot__;

/***/ }),

/***/ "grapesjs":
/*!***************************!*\
  !*** external "grapesjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grapesjs__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map