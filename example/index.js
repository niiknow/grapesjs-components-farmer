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
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./example/init.js");
/* harmony import */ var _bootstrap4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap4 */ "./example/bootstrap4.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./example/foundation.js");
/* harmony import */ var _googlemd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googlemd */ "./example/googlemd.js");





if (window.location.href.indexOf('css=foundation') > 0) {
  console.log('Foundation CSS');
  Object(_init__WEBPACK_IMPORTED_MODULE_0__["default"])(_foundation__WEBPACK_IMPORTED_MODULE_2__["default"]);
} else if (window.location.href.indexOf('css=materialize') > 0) {
  console.log('Google Materialize CSS');
  Object(_init__WEBPACK_IMPORTED_MODULE_0__["default"])(_googlemd__WEBPACK_IMPORTED_MODULE_3__["default"]);
} else {
  console.log('Bootstrap 4 CSS');
  Object(_init__WEBPACK_IMPORTED_MODULE_0__["default"])(_bootstrap4__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./example/bootstrap4.js":
/*!*******************************!*\
  !*** ./example/bootstrap4.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  canvas: {
    styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./example/custom-blocks.js":
/*!**********************************!*\
  !*** ./example/custom-blocks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bm = editor.BlockManager;
  bm.add('contact', {
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"gjs-block-svg-path\" d=\"M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z\" fill-rule=\"nonzero\"></path>\n        <path class=\"gjs-block-svg-path\" d=\"M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z\" fill-rule=\"nonzero\"></path>\n        <rect class=\"gjs-block-svg-path\" x=\"2\" y=\"15\" width=\"10\" height=\"3\" rx=\"0.5\"></rect>\n      </svg>\n      <div class=\"gjs-block-label\">Contact</div></div>",
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [{
        type: 'comp_input',
        label_attr: 'Name',
        name_attr: 'name',
        placeholder_attr: 'Name'
      }, {
        type: 'comp_input',
        label_attr: 'Email',
        name_attr: 'email',
        placeholder_attr: 'Email',
        type_attr: 'email'
      }, {
        type: 'comp_textarea',
        name_attr: 'message',
        placeholder_attr: 'Message',
        label_attr: 'Message'
      }, {
        type: 'comp_submit'
      }]
    }
  });
  bm.add('address', {
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"gjs-block-svg-path\" d=\"M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z\" fill-rule=\"nonzero\"></path>\n        <path class=\"gjs-block-svg-path\" d=\"M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z\" fill-rule=\"nonzero\"></path>\n        <rect class=\"gjs-block-svg-path\" x=\"2\" y=\"15\" width=\"10\" height=\"3\" rx=\"0.5\"></rect>\n      </svg>\n      <div class=\"gjs-block-label\">Address</div></div>",
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [{
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            type_attr: 'email',
            label_attr: 'Email',
            name_attr: 'email',
            placeholder_attr: 'Email'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'First name',
            name_attr: 'first_name',
            placeholder_attr: 'First name'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Last name',
            name_attr: 'last_name',
            placeholder_attr: 'Last name'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Street address',
            name_attr: 'address1',
            placeholder_attr: 'Street address'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Address line 2',
            name_attr: 'address2',
            placeholder_attr: 'Address line 2'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'City',
            name_attr: 'city',
            placeholder_attr: 'City'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'State / Province / Region',
            name_attr: 'state',
            placeholder_attr: 'State / Province / Region'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Postal / Zip Code',
            name_attr: 'postal',
            placeholder_attr: 'Postal / Zip Code'
          }]
        }]
      }]
    }
  });
  bm.add('donation', {
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"gjs-block-svg-path\" d=\"M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z\" fill-rule=\"nonzero\"></path>\n        <path class=\"gjs-block-svg-path\" d=\"M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z\" fill-rule=\"nonzero\"></path>\n        <rect class=\"gjs-block-svg-path\" x=\"2\" y=\"15\" width=\"10\" height=\"3\" rx=\"0.5\"></rect>\n      </svg>\n      <div class=\"gjs-block-label\">Donation</div></div>",
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [{
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            type_attr: 'email',
            label_attr: 'Email',
            name_attr: 'email',
            placeholder_attr: 'Email'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'First name',
            name_attr: 'first_name',
            placeholder_attr: 'First name'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Last name',
            name_attr: 'last_name',
            placeholder_attr: 'Last name'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Street address',
            name_attr: 'address1',
            placeholder_attr: 'Street address'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Address line 2',
            name_attr: 'address2',
            placeholder_attr: 'Address line 2'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'City',
            name_attr: 'city',
            placeholder_attr: 'City'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'State / Province / Region',
            name_attr: 'state',
            placeholder_attr: 'State / Province / Region'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Postal / Zip Code',
            name_attr: 'postal',
            placeholder_attr: 'Postal / Zip Code'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            type_attr: 'phone',
            label_attr: 'Phone #000-000-000',
            name_attr: 'phone',
            placeholder_attr: '000-000-000',
            pattern_attr: '000-000-000'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_checkbox',
            label_attr: 'I\'m retired or unemployed.',
            name_attr: 'is_retired_or_unemployed'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Occupation',
            name_attr: 'occupation',
            placeholder_attr: 'Occupation'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Employer',
            name_attr: 'employer',
            placeholder_attr: 'Employer'
          }]
        }]
      }]
    }
  });
});

/***/ }),

/***/ "./example/foundation.js":
/*!*******************************!*\
  !*** ./example/foundation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  canvas: {
    styles: ['https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/js/foundation.min.js']
  },
  comps: {
    'comp_input': {
      label: 'Input',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%>\n          <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        </label>\n      "
    },
    'comp_select': {
      label: 'Select',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%>\n          <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>name=\"<%=it.name_attr%>\">\n            <option selected>-- Please select an option -- </option>\n            <%~ (it.option_attr + \"\").trim().split(\"\\n\") :option %>\n            <% var msgProps = option.split('::');\n            %> <option value=\"<%= msgProps[0]%>\"><%= msgProps[1] || msgProps[0] %></option><%~%>\n          </select>\n        </label>\n      "
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%>\n          <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n        </label>\n      "
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\">\n          <input <%= it.required_attr ? 'required ' : '' %>type=\"checkbox\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n          <%=it.label_attr%>\n        </label>\n      "
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'button',
      useTag: 'button',
      template: '<%= it.label_attr %>'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'grid-x'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div',
      classes: 'cell'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div',
      classes: 'large-12'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div',
      classes: 'large-6'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div',
      classes: 'large-4'
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_map': {
      label: 'Map'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./example/googlemd.js":
/*!*****************************!*\
  !*** ./example/googlemd.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  canvas: {
    styles: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js']
  },
  comps: {
    'comp_input': {
      label: 'Input',
      classes: 'input-field col s12',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n      "
    },
    'comp_select': {
      label: 'Select',
      classes: 'input-field col s12',
      useTag: 'div',
      template: "\n        <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>name=\"<%=it.name_attr%>\">\n          <option selected>-- Please select an option -- </option>\n          <%~ (it.option_attr + \"\").trim().split(\"\\n\") :option %>\n          <% var msgProps = option.split('::');\n          %> <option value=\"<%= msgProps[0]%>\"><%= msgProps[1] || msgProps[0] %></option><%~%>\n        </select>\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n      "
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'input-field col s12',
      useTag: 'div',
      template: "\n        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n      "
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'row',
      useTag: 'div',
      template: "\n        <div class=\"input-field col s12\">\n          <label for=\"<%=it.name_attr%>\">\n            <input <%= it.required_attr ? 'required ' : '' %>type=\"checkbox\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n            <span><%=it.label_attr%></span>\n          </label>\n        </div>\n      "
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn waves-effect waves-light',
      useTag: 'button',
      template: '<%= it.label_attr %>'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'row'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div',
      classes: 'col s12'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div',
      classes: 'col s6'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div',
      classes: 'col s4'
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_map': {
      label: 'Map'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./example/init.js":
/*!*************************!*\
  !*** ./example/init.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src */ "./src/index.js");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_blocks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-blocks.js */ "./example/custom-blocks.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
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
    canvas: opts.canvas,
    plugins: ['grapesjs-components-farmer', 'gjs-plugin-ckeditor'],
    pluginsOpts: {
      'grapesjs-components-farmer': {
        formNextId: 1,
        panel: 1,
        comps: opts.comps
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
  var editor = grapesjs__WEBPACK_IMPORTED_MODULE_1___default.a.init(config);
  Object(_custom_blocks_js__WEBPACK_IMPORTED_MODULE_3__["default"])(editor, {
    categoryLabel: 'Templates'
  });
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
});

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
        type: 'comp_col',
        classes: c.comp_col1.classes.concat(c.comp_col.classes)
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
        type: 'comp_col',
        classes: c.comp_col2.classes.concat(c.comp_col.classes)
      }, {
        type: 'comp_col',
        classes: c.comp_col2.classes.concat(c.comp_col.classes)
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
        type: 'comp_col',
        classes: c.comp_col3.classes.concat(c.comp_col.classes)
      }, {
        type: 'comp_col',
        classes: c.comp_col3.classes.concat(c.comp_col.classes)
      }, {
        type: 'comp_col',
        classes: c.comp_col3.classes.concat(c.comp_col.classes)
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
  bm.add('comp_file', _objectSpread({
    label: c.comp_file.label,
    attributes: {
      class: 'fa fa-file'
    },
    content: {
      type: 'comp_file'
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
      type: 'text',
      content: 'Insert your text here',
      style: {
        padding: '10px'
      },
      activeOnRender: 1
    }
  }, allBlocks));
  bm.add('comp_image', _objectSpread({
    label: c.comp_image.label,
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
/* harmony import */ var _templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templating */ "./src/templating.js");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (grapesjs__WEBPACK_IMPORTED_MODULE_2___default.a.plugins.add('grapesjs-components-farmer', function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var commands = editor.Commands;
  var pn = editor.Panels;
  var opts_comps = opts.comps || {};
  var default_comps = {
    'comp_input': {
      label: 'Input',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" class=\"form-control\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_select': {
      label: 'Select',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>class=\"form-control\" name=\"<%=it.name_attr%>\">\n          <option selected>-- Please select an option -- </option>\n          <%~ (it.option_attr + \"\").trim().split(\"\\n\") :option %>\n          <% var msgProps = option.split('::');\n          %> <option value=\"<%= msgProps[0]%>\"><%= msgProps[1] || msgProps[0] %></option><%~%>\n        </select>\n      "
    },
    'comp_file': {
      label: 'File',
      classes: 'custom-file',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"file\" class=\"custom-file-input\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.accept_attr ? 'accept=\"' + it.accept_attr + '\"' : '' %> <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        <label for=\"<%=it.name_attr%>\" class=\"custom-file-label\"><%=it.label_attr%></label>\n      "
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>class=\"form-control\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n      "
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'form-check',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\" class=\"form-check-label\">\n          <input <%= it.required_attr ? 'required ' : '' %>type=\"checkbox\" name=\"<%=it.name_attr%>\" class=\"form-check-input\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n          <%=it.label_attr%>\n        </label>\n      "
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn btn-primary btn-block',
      useTag: 'button',
      template: '<%= it.label_attr %>'
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
    'comp_image': {
      label: 'Image'
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

      opts_comps[k] = y;
    } else {
      opts_comps[k] = x;
    }

    opts_comps[k]['classes'] = (opts_comps[k]['classes'] || '').split(' ');
  }

  var options = _objectSpread({
    formNextId: 1,
    categoryLabel: 'Basic',
    formFieldsPrefix: 'field',
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
          doT = Object(_templating__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }

        t.template = doT.template(t.template);
      }
    });
  };
  /** Prevent Input Default Actions **/


  var preventInputDefaults = function preventInputDefaults() {
    var el = editor.Canvas.getBody();
    var win = el.ownerWindow;
    var body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    body.click(function (e) {
      var event = e || win.event;
      var target = event.target || event.srcElement;
      var tagName = (target.tagName + '').toLowerCase();

      if (tagName === 'input') {
        event.preventDefault();
        return false;
      }
    });
  };

  editor.runCommand('prevent-default');
  commands.add('get-usable-html', {
    run: function run() {
      // get the builder xml
      var html = editor.getHtml(); // convert into html

      for (var _k in options.comps) {
        // default tag as div unless realTag value is provided
        var tag = options.comps[_k].realTag || 'div';
        html = html.replace(new RegExp('<' + _k, 'g'), '<' + tag);
        html = html.replace(new RegExp('</' + _k + '>', 'g'), '</' + tag + '>');
        html = html.replace(new RegExp(" data-gjs-type=\"".concat(_k, "\" "), 'g'), ' ');
        html = html.replace(new RegExp(' data\-highlightable\=\"1\" ', 'g'), ' ');
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
      preventInputDefaults();
    }, 10);
  });
}));

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
    active: 1,
    attributes: {
      title: 'Desktop'
    }
  }, {
    id: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceTablet"],
    command: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceTablet"],
    className: 'fa fa-tablet',
    attributes: {
      title: 'Tablet'
    }
  }, {
    id: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceMobile"],
    command: _consts__WEBPACK_IMPORTED_MODULE_0__["cmdDeviceMobile"],
    className: 'fa fa-mobile',
    attributes: {
      title: 'Mobile'
    }
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

/***/ "./src/templating.js":
/*!***************************!*\
  !*** ./src/templating.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var doT = __webpack_require__(/*! dot */ "dot");

  doT.templateSettings = {
    evaluate: /\<\%([\s\S]+?)\%\>/g,
    interpolate: /\<\%=([\s\S]+?)\%\>/g,
    encode: /\<\%!([\s\S]+?)\%\>/g,
    use: /\<\%#([\s\S]+?)\%\>/g,
    define: /\<\%##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\%\>/g,
    conditional: /\<\%\?(\?)?\s*([\s\S]*?)\s*\%\>/g,
    iterate: /\<\%~\s*(?:\%\>|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\%\>)/g,
    varname: 'it',
    strip: true,
    append: true,
    selfcontained: false
  };
  return doT;
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
      return this.genHtml()[0].outerHTML;
    },
    getTraitValues: function getTraitValues() {
      var values = _objectSpread({}, this.attributes);

      this.get('traits').each(function (trait) {
        var k = trait.get('name');
        values[k] = trait.get('value') || values[k];
      });
      return values;
    },
    myInitDefaults: function myInitDefaults() {
      var that = this;

      var values = _objectSpread({}, that.attributes);

      that.get('traits').each(function (trait) {
        var k = trait.get('name'); // set defaults

        if (k.indexOf('_attr') > 0) {
          trait.set('value', values[k]);
        }
      });
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
          model.set('name_attr', name);
          return true;
        }
      }

      return false;
    },
    // function to use with listener
    genHtml: function genHtml() {
      if (!this.view || !this.view.el) {
        var el = document.createElement(this.attributes.tagName);
        return this.generateHtml(el, this.attributes.tagName);
      }

      return this.generateHtml(this.view.el, this.attributes.tagName);
    },
    generateHtml: function generateHtml(el, k) {
      var model = this;
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el || model.view.el);
      var attrs = model.getTraitValues();
      var $k = $k || model.get('tagName');

      if (opts && opts.comps && opts.comps[$k]) {
        var templateFn = opts.comps[$k].template;

        if (typeof templateFn === 'function') {
          if (!model.ensureNameAttr(attrs)) {
            $el.empty();
            $el.html(templateFn(attrs || {}));
          }
        }
      }

      return $el;
    }
  }); // override default view to generate html

  var myDefaultView = defaultView.extend({
    onRender: function onRender() {
      if (this.model.genHtml) {
        this.model.genHtml();
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
        classes: ['comp_input'].concat(opts.comps.comp_input.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:placeholder_attr', that.genHtml);
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
        classes: ['comp_select'].concat(opts.comps.comp_select.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:multiple_attr', that.genHtml);
        that.listenTo(that, 'change:option_attr', that.genHtml);
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
        classes: ['comp_textarea'].concat(opts.comps.comp_textarea.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:placeholder_attr', that.genHtml);
        that.listenTo(that, 'change:cols_attr', that.genHtml);
        that.listenTo(that, 'change:rows_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_file', {
    model: myDefaultModel.extend({
      defaults: _objectSpread({}, defaultModel.prototype.defaults, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_file',
        label_attr: 'Choose file...',
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
          type: 'string',
          name: 'accept_attr',
          label: 'Accept',
          changeProp: 1,
          placeholder: 'image/jpeg, image/png, image/gif'
        }].concat(fieldTraits),
        classes: ['comp_file'].concat(opts.comps.comp_file.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:placeholder_attr', that.genHtml);
        that.listenTo(that, 'change:accept_attr', that.genHtml);
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
        classes: ['comp_checkbox'].concat(opts.comps.comp_checkbox.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
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
        classes: ['comp_hidden'].concat(opts.comps.comp_hidden.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:name_attr', that.genHtml);
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
        classes: ['comp_submit'].concat(opts.comps.comp_submit.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
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
        classes: ['comp_row'].concat(opts.comps.comp_row.classes)
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
        classes: ['comp_col'].concat(opts.comps.comp_col.classes)
      })
    }),
    view: defaultView
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