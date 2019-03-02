(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("dot"), require("grapesjs"));
	else if(typeof define === 'function' && define.amd)
		define("grapesjs-components-farmer", ["jQuery", "dot", "grapesjs"], factory);
	else if(typeof exports === 'object')
		exports["grapesjs-components-farmer"] = factory(require("jQuery"), require("dot"), require("grapesjs"));
	else
		root["grapesjs-components-farmer"] = factory(root["jQuery"], root["dot"], root["grapesjs"]);
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
    styles: ['example/bootstrap4.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js']
  },
  script: function script() {
    // initialize next id
    window.nextNameIndex = 1;
  },
  plugins: ['grapesjs-components-farmer'],
  pluginsOpts: {
    'grapesjs-components-farmer': {
      formNextId: 1,
      panel: 1
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

/***/ "./sass/bootstrap4.scss":
/*!******************************!*\
  !*** ./sass/bootstrap4.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bm = editor.BlockManager;
  var c = opt.comps;
  var blocks = c.blocks;
  var cats = c.blockCategories;

  if (opt.resetBlocks) {
    bm.getAll().reset();
  }

  var allBlocks = {
    category: opt.categoryLabel // CORE BLOCKS

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
    showStylesOnChange: 1
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

  editor.on('load', function () {
    compileTemplates();
    setTimeout(function () {
      var body = editor.getWrapper().view.$el.parent('body');
      body.addClass('components-farmer');
    }, 1000);
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


/* harmony default export */ __webpack_exports__["default"] = (function (editor, config) {
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
  var txtConfirm = config.textCleanCanvas || 'Are you sure to clean the canvas?';
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
      active: 1,
      className: 'fa fa-paint-brush',
      attributes: {
        title: 'Style Manager'
      }
    }, {
      id: otm,
      command: otm,
      active: 1,
      className: 'fa fa-cog',
      attributes: {
        title: 'Settings'
      }
    }, {
      id: ola,
      command: ola,
      active: 1,
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
  }]); // On component change show the Style Manager

  config.showStylesOnChange && editor.on('component:selected', function () {
    var openSmBtn = pn.getButton('views', osm);
    var openLayersBtn = pn.getButton('views', ola); // Don't switch when the Layer Manager is on or
    // there is no selected component

    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn && openSmBtn.set('active', 1);
    }
  });
  editor.on('load', function () {
    var pn = editor.Panels;
    var editorEl = jquery__WEBPACK_IMPORTED_MODULE_1___default()(editor.getEl()); // Add Settings Sector

    var traitsSector = jquery__WEBPACK_IMPORTED_MODULE_1___default()("<div class=\"gjs-sm-sector no-select\">\n<div class=\"gjs-sm-title\"><span class=\"icon-settings fa fa-cog\"></span> Settings</div>\n<div class=\"gjs-sm-properties\" style=\"display: none;\"></div></div>");
    var traitsProps = traitsSector.find('.gjs-sm-properties'); // copy from settings tab into traits sector and then hide settings tab

    traitsProps.append(editorEl.find('.gjs-trt-traits'));
    editorEl.find('.gjs-sm-sectors').before(traitsSector);
    editorEl.find('.gjs-pn-views .fa-cog').hide();
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
    openBl && openBl.set('active', 1);
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
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var tm = editor.TraitManager;
  var dc = editor.DomComponents;
  var bm = editor.BlockManager;
  var defaultType = dc.getType('default');
  var selectType = dc.getType('select') || defaultType;
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  var fieldTraits = [{
    type: 'text',
    name: 'name_attr',
    label: 'Name',
    placeholder: 'Enter a field name..'
  }, {
    type: 'text',
    name: 'label_attr',
    label: 'Label',
    placeholder: 'Enter a field label..'
  }];
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
          name = "".concat(opt.formFieldsPrefix).concat(opt.formNextId++);
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

      if (opt && opt.comps && opt.comps[$k]) {
        var templateFn = opt.comps[$k].template;

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
        traits: defaultModel.prototype.defaults.traits.concat(inputTypeTrait).concat(inputTraits),
        classes: ('comp_input ' + (opt.comps.comp_input.classes || '')).split(' ')
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
        classes: ('comp_select ' + (opt.comps.comp_select.classes || '')).split(' ')
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
        classes: ('comp_textarea ' + (opt.comps.comp_textarea.classes || '')).split(' ')
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
        classes: ('comp_checkbox ' + (opt.comps.comp_checkbox.classes || '')).split(' ')
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
        classes: ('comp_hidden ' + (opt.comps.comp_hidden.classes || '')).split(' ')
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
        traits: [{
          type: 'text',
          name: 'label_attr',
          label: 'Label',
          placeholder: 'Enter a field label..'
        }],
        classes: ('comp_submit ' + (opt.comps.comp_submit.classes || '')).split(' ')
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
        classes: ('comp_row ' + (opt.comps.comp_row.classes || '')).split(' ')
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
        classes: ('comp_col ' + (opt.comps.comp_col.classes || '')).split(' ')
      })
    }),
    view: defaultView
  });
});

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./example/app.js ./sass/bootstrap4.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tomn/Desktop/work/brickinc/grapesjs-components-farmer/example/app.js */"./example/app.js");
module.exports = __webpack_require__(/*! /Users/tomn/Desktop/work/brickinc/grapesjs-components-farmer/sass/bootstrap4.scss */"./sass/bootstrap4.scss");


/***/ }),

/***/ "dot":
/*!**********************!*\
  !*** external "dot" ***!
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