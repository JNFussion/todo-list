/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sytlesheets/scss/main.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sytlesheets/scss/main.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*, ::before, ::after {\n  box-sizing: border-box;\n}\n\n/* GENERAL */\nbody {\n  font-family: \"Roboto\";\n  line-height: 1.5;\n  background-color: #E9ECEF;\n}\n\n.btn {\n  padding: 0.75em 1em;\n  border-radius: 5px;\n  color: #FAFAFA;\n  background-color: #1D3557;\n  box-shadow: 1px 1px 5px rgba(29, 53, 87, 0.2);\n}\n\n.fa-circle {\n  border-radius: 100%;\n}\n.fa-circle.hight {\n  color: red;\n  background-color: rgba(255, 0, 0, 0.1);\n}\n.fa-circle.medium {\n  color: orange;\n  background-color: rgba(255, 165, 0, 0.1);\n}\n.fa-circle.low {\n  color: green;\n  background-color: rgba(0, 128, 0, 0.1);\n}\n\n.main-header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 1em 0;\n  background-image: linear-gradient(#A8DADC, #84cbcd);\n  box-shadow: 0 1px 15px #0C1D1D;\n}\n.main-header h1 {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  font-size: 36px;\n}\n.main-header .new-project {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  height: 820px;\n}\n\n/* Navbar */\n.navbar {\n  width: 360px;\n  max-width: 360px;\n  padding: 1em 0;\n  background-color: #F8F9FA;\n  border-right: 1px solid #dae0e5;\n}\n.navbar .navbar-list li {\n  margin: 0 2em;\n  padding: 0.75em 0.25em;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.navbar .navbar-list li i {\n  color: #457B9D;\n}\n.navbar .projects-list-wrapper {\n  padding: 1em 1.5em;\n}\n.navbar .projects-list-wrapper h2 {\n  margin: 1em 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n.navbar .projects-list-wrapper .projects-list li {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  padding: 0.25em 0;\n  margin: 0.25em 0;\n}\n.navbar .projects-list-wrapper .projects-list ul li {\n  padding-left: 6em;\n}\n.navbar .projects-list-wrapper .projects-list .fa-stack {\n  margin: 0 0.75em;\n  font-size: 0.8em;\n}\n.navbar .projects-list-wrapper .projects-list .fa-stack .fa-circle {\n  opacity: 0;\n  transition: all 0.2s;\n}\n.navbar .projects-list-wrapper .projects-list .fa-stack:hover .fa-circle {\n  opacity: 0.1;\n}\n.navbar .projects-list-wrapper .default-btn {\n  width: max-content;\n  margin: 2em auto;\n}\n.navbar .projects-list-wrapper::before {\n  position: relative;\n  content: \"\";\n  display: block;\n  left: 50%;\n  width: 80%;\n  height: 1px;\n  background-color: #dae0e5;\n  transform: translateX(-50%);\n}\n\n.project {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2em;\n}\n.project .project-header {\n  display: flex;\n  align-items: center;\n  padding: 1em 0;\n}\n.project .project-header span {\n  margin-left: auto;\n}\n.project .project-header .project-title {\n  font-size: 32px;\n  font-weight: bold;\n}\n.project .project-content {\n  padding: 0 2em;\n}\n.project .project-description {\n  padding: 1em 0;\n  margin-bottom: 1em;\n}\n\n.settings-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0em 1em;\n  color: #FDFDFD;\n  background-color: #457B9D;\n}\n.settings-bar ul {\n  display: flex;\n  align-items: center;\n}\n.settings-bar ul .sort-label {\n  margin-right: 1.75em;\n  font-weight: 500;\n}\n.settings-bar ul li {\n  padding: 0.5em 1em;\n  border-right: 1px solid #355f7a;\n}\n.settings-bar ul li:first-of-type {\n  border-left: 1px solid #355f7a;\n}\n.settings-bar .icon-group {\n  display: flex;\n  gap: 0.5em;\n}\n.settings-bar .icon-group i {\n  padding: 0.4em;\n}\n\n.todo-list {\n  display: grid;\n  justify-content: center;\n  margin: 1em 2.5em;\n}\n.todo-list .todo {\n  width: 900px;\n  margin: 0.5em 0;\n  border-bottom: 1px solid rgba(29, 53, 87, 0.2);\n}\n.todo-list .todo header {\n  display: flex;\n  align-items: center;\n  gap: 2em;\n  padding: 1em;\n}\n.todo-list .todo header .todo-title {\n  font-size: 20px;\n}\n.todo-list .todo header .due-date {\n  margin-left: auto;\n  font-size: 14px;\n}\n.todo-list .todo .description-wrapper {\n  display: none;\n}\n.todo-list .todo .description-wrapper .description {\n  padding: 1em 4em;\n}\n\n/* .tree {\n  position: relative;\n  margin-top: 20px;\n  padding: 30px;\n  border: 1px solid yellowgreen;\n  font-family: 'Roboto Mono', monospace;\n  font-size: .85rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n\n  span {\n    font-size: 13px;\n    font-style: italic;\n    letter-spacing: .4px;\n    color: #a8a8a8;\n  }\n\n  .fa-folder-open, .fa-folder {\n    color: #007bff;\n  }\n\n  .fa-html5 {\n    color: #f21f10;\n  }\n\n  ul {\n    padding-left: 5px;\n    list-style: none;\n\n    li {\n      position: relative;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      padding-left: 15px;\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n\n      &:before {\n        position: absolute;\n        top: 15px;\n        left: 0;\n        width: 10px;\n        height: 1px;\n        margin: auto;\n        content: '';\n        background-color: #666;\n      }\n\n      &:after {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 1px;\n        height: 100%;\n        content: '';\n        background-color: #666;\n      }\n\n      &:last-child:after {\n        height: 15px;\n      }\n    }\n\n    a {\n      cursor: pointer;\n\n      &:hover {\n        text-decoration: none;\n      }\n    }\n  }\n} */", "",{"version":3,"sources":["webpack://./src/sytlesheets/scss/_reset.scss","webpack://./src/sytlesheets/scss/main.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n*, ::before, ::after {\n  box-sizing: border-box;\n}","@import 'reset';\n@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\n\n$black: #151515;\n$purple: #301B3F;\n$blue: #3C415C;\n$red-grey: #B4A5A5;\n\n/* GENERAL */\n\nbody {\n  font-family: 'Roboto';\n  line-height: 1.5;\n  background-color: #E9ECEF;\n}\n\n.btn {\n  padding: 0.75em 1em;\n  border-radius: 5px;\n  color: #FAFAFA;\n  background-color: #1D3557;\n  box-shadow: 1px 1px 5px rgba(29, 53, 87, .2);\n}\n\n.fa-circle{\n  border-radius: 100%;\n  &.hight {\n    color: red;\n    background-color: rgba(255, 0, 0, .1);\n  }\n  &.medium {\n    color: orange;\n    background-color: rgba(255, 165, 0, .1);\n  }\n  &.low {\n    color: green;\n    background-color: rgba(0, 128, 0, .1);\n  }\n  \n}\n\n.main-header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 1em 0;\n  background-image: linear-gradient(#A8DADC, darken($color: #A8DADC, $amount: 10%));\n  box-shadow: 0 1px 15px #0C1D1D;\n  h1 {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    font-size: 36px;\n  }\n  .new-project {\n    display: flex;\n    align-items: center;\n    gap: 1em;\n  }\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  height: 820px;\n}\n\n/* Navbar */\n\n.navbar {\n  width: 360px;\n  max-width: 360px;\n  padding: 1em 0;\n  background-color: #F8F9FA;\n  border-right: 1px solid darken($color: #F8F9FA, $amount: 10%);\n  .navbar-list li {\n    margin: 0 2em;\n    padding: .75em .25em;\n    font-size: 18px;\n    font-weight: 500;\n    text-transform: capitalize;\n    i {\n      color: #457B9D;\n    }\n  }\n  .projects-list-wrapper {\n    padding: 1em 1.5em;\n    h2 {\n      margin: 1em 0;\n      font-size: 18px;\n      font-weight: bold;\n    }\n    .projects-list{\n      li {\n        display: flex;\n        align-items: center;\n        gap: 1em;\n        padding: .25em 0;\n        margin: .25em 0;\n      }\n      ul li{\n        padding-left: 6em;\n      }\n      .fa-stack{\n        margin: 0 .75em;\n        font-size: .8em;\n        \n        .fa-circle {\n          opacity: 0;\n          transition: all .2s;\n        }\n        &:hover {\n          .fa-circle {\n          opacity: .1;\n        }\n        }\n\n      }\n    }\n    .default-btn {\n      width: max-content;\n      margin: 2em auto;\n    }\n    &::before {\n      position: relative;\n      content: '';\n      display: block;\n      left: 50%;\n      width: 80%;\n      height: 1px;\n      background-color: darken($color: #F8F9FA, $amount: 10%);\n      transform: translateX(-50%);\n    }\n  }\n  \n}\n\n.project {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2em;\n  .project-header {\n    display: flex;\n    align-items: center;\n    padding: 1em 0;\n    span {\n      margin-left: auto;\n    }\n    .project-title {\n      font-size: 32px;\n      font-weight: bold;\n    }\n  }\n  .project-content {\n    padding: 0 2em;\n  };\n  .project-description {\n    padding: 1em 0;\n    margin-bottom: 1em;\n  }\n}\n\n.settings-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0em 1em;\n  color: #FDFDFD;\n  background-color: #457B9D;\n  ul {\n    display: flex;\n    align-items: center;\n    .sort-label {\n      margin-right: 1.75em;\n      font-weight: 500;\n    }\n    li {\n      padding: .5em 1em;\n      border-right: 1px solid darken($color: #457B9D, $amount: 10%);\n    }\n    li:first-of-type {\n      border-left: 1px solid darken($color: #457B9D, $amount: 10%);\n    }\n\n  }\n  .icon-group {\n    display: flex;\n    gap: .5em;\n    i {\n      padding: .4em;\n    }\n  }\n}\n\n.todo-list {\n  display: grid;\n  justify-content: center;\n  margin: 1em 2.5em;\n  .todo {\n  width: 900px;\n  margin: .5em 0;\n  border-bottom: 1px solid rgba(29, 53, 87, .2);\n  header {\n    display: flex;\n    align-items: center;\n    gap: 2em;\n    padding: 1em;\n    .todo-title {\n      font-size: 20px;\n    }\n    .due-date {\n      margin-left: auto;\n      font-size: 14px;\n    }\n  }\n  .description-wrapper {\n    display: none;\n    .description {\n      padding: 1em 4em;\n    }\n  }\n}\n}\n\n\n\n\n/* .tree {\n  position: relative;\n  margin-top: 20px;\n  padding: 30px;\n  border: 1px solid yellowgreen;\n  font-family: 'Roboto Mono', monospace;\n  font-size: .85rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  \n  span {\n    font-size: 13px;\n    font-style: italic;\n    letter-spacing: .4px;\n    color: #a8a8a8;\n  }\n  \n  .fa-folder-open, .fa-folder {\n    color: #007bff;\n  }\n  \n  .fa-html5 {\n    color: #f21f10;\n  }\n  \n  ul {\n    padding-left: 5px;\n    list-style: none;\n    \n    li {\n      position: relative;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      padding-left: 15px;\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      \n      &:before {\n        position: absolute;\n        top: 15px;\n        left: 0;\n        width: 10px;\n        height: 1px;\n        margin: auto;\n        content: '';\n        background-color: #666;\n      }\n      \n      &:after {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: 1px;\n        height: 100%;\n        content: '';\n        background-color: #666;\n      }\n      \n      &:last-child:after {\n        height: 15px;\n      }\n    }\n    \n    a {\n      cursor: pointer;\n      \n      &:hover {\n        text-decoration: none;\n      }\n    }\n  }\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sytlesheets/scss/main.scss":
/*!****************************************!*\
  !*** ./src/sytlesheets/scss/main.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sytlesheets/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const todoFactory = (title, description, dueDate, priority) => {
  return {title: title, description: description, dueDate: dueDate, priority: priority, checked: false, created_at, updated_at};
}

const projectFactory = (title, description, priority) => {
  let todoList = [];

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
  }

  const isCheck = () => {
    todoList.every( item => item.checked);
  }
  return {title: title, description: description, priority: priority, created_at, updated_at, isCheck, addTodoItem};
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _sytlesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sytlesheets/scss/main.scss */ "./src/sytlesheets/scss/main.scss");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3l0bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3l0bGVzaGVldHMvc2Nzcy9tYWluLnNjc3M/NzRkMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEdFTkVSQUwgKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDAuNzVlbSAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI0ZBRkFGQTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDM1NTc7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDI5LCA1MywgODcsIDAuMik7XFxufVxcblxcbi5mYS1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuLmZhLWNpcmNsZS5oaWdodCB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XFxufVxcbi5mYS1jaXJjbGUubWVkaXVtIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY1LCAwLCAwLjEpO1xcbn1cXG4uZmEtY2lyY2xlLmxvdyB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC4xKTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjQThEQURDLCAjODRjYmNkKTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggIzBDMUQxRDtcXG59XFxuLm1haW4taGVhZGVyIGgxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4ubWFpbi1oZWFkZXIgLm5ldy1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2MHB4IDFmcjtcXG4gIGhlaWdodDogODIwcHg7XFxufVxcblxcbi8qIE5hdmJhciAqL1xcbi5uYXZiYXIge1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgbWF4LXdpZHRoOiAzNjBweDtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGQTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYWUwZTU7XFxufVxcbi5uYXZiYXIgLm5hdmJhci1saXN0IGxpIHtcXG4gIG1hcmdpbjogMCAyZW07XFxuICBwYWRkaW5nOiAwLjc1ZW0gMC4yNWVtO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4ubmF2YmFyIC5uYXZiYXItbGlzdCBsaSBpIHtcXG4gIGNvbG9yOiAjNDU3QjlEO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0cy1saXN0LXdyYXBwZXIge1xcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0cy1saXN0LXdyYXBwZXIgaDIge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0cy1saXN0LXdyYXBwZXIgLnByb2plY3RzLWxpc3QgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgbWFyZ2luOiAwLjI1ZW0gMDtcXG59XFxuLm5hdmJhciAucHJvamVjdHMtbGlzdC13cmFwcGVyIC5wcm9qZWN0cy1saXN0IHVsIGxpIHtcXG4gIHBhZGRpbmctbGVmdDogNmVtO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0cy1saXN0LXdyYXBwZXIgLnByb2plY3RzLWxpc3QgLmZhLXN0YWNrIHtcXG4gIG1hcmdpbjogMCAwLjc1ZW07XFxuICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0cy1saXN0LXdyYXBwZXIgLnByb2plY3RzLWxpc3QgLmZhLXN0YWNrIC5mYS1jaXJjbGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0cy1saXN0LXdyYXBwZXIgLnByb2plY3RzLWxpc3QgLmZhLXN0YWNrOmhvdmVyIC5mYS1jaXJjbGUge1xcbiAgb3BhY2l0eTogMC4xO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0cy1saXN0LXdyYXBwZXIgLmRlZmF1bHQtYnRuIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMmVtIGF1dG87XFxufVxcbi5uYXZiYXIgLnByb2plY3RzLWxpc3Qtd3JhcHBlcjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyZW07XFxufVxcbi5wcm9qZWN0IC5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG4ucHJvamVjdCAucHJvamVjdC1oZWFkZXIgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnByb2plY3QgLnByb2plY3QtaGVhZGVyIC5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucHJvamVjdCAucHJvamVjdC1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgMmVtO1xcbn1cXG4ucHJvamVjdCAucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnNldHRpbmdzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDBlbSAxZW07XFxuICBjb2xvcjogI0ZERkRGRDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTdCOUQ7XFxufVxcbi5zZXR0aW5ncy1iYXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zZXR0aW5ncy1iYXIgdWwgLnNvcnQtbGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjc1ZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uc2V0dGluZ3MtYmFyIHVsIGxpIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNTVmN2E7XFxufVxcbi5zZXR0aW5ncy1iYXIgdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzNTVmN2E7XFxufVxcbi5zZXR0aW5ncy1iYXIgLmljb24tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41ZW07XFxufVxcbi5zZXR0aW5ncy1iYXIgLmljb24tZ3JvdXAgaSB7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDFlbSAyLjVlbTtcXG59XFxuLnRvZG8tbGlzdCAudG9kbyB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IDAuNWVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyOSwgNTMsIDg3LCAwLjIpO1xcbn1cXG4udG9kby1saXN0IC50b2RvIGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4udG9kby1saXN0IC50b2RvIGhlYWRlciAudG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi50b2RvLWxpc3QgLnRvZG8gaGVhZGVyIC5kdWUtZGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRvZG8tbGlzdCAudG9kbyAuZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udG9kby1saXN0IC50b2RvIC5kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAxZW0gNGVtO1xcbn1cXG5cXG4vKiAudHJlZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogLjg1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzIxMjUyOTtcXG5cXG4gIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XFxuICAgIGNvbG9yOiAjYThhOGE4O1xcbiAgfVxcblxcbiAgLmZhLWZvbGRlci1vcGVuLCAuZmEtZm9sZGVyIHtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICB9XFxuXFxuICAuZmEtaHRtbDUge1xcbiAgICBjb2xvcjogI2YyMWYxMDtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIGxpIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxuICAgICAgfVxcblxcbiAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxuICAgICAgfVxcblxcbiAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N5dGxlc2hlZXRzL3Njc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zeXRsZXNoZWV0cy9zY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURDQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QUNFRDs7QURBQTtFQUNDLGNBQUE7QUNHRDs7QUREQTtFQUNDLGdCQUFBO0FDSUQ7O0FERkE7RUFDQyxZQUFBO0FDS0Q7O0FESEE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QUNNRDs7QURKQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNPRDs7QURKQTtFQUNFLHNCQUFBO0FDT0Y7O0FBakRBLFlBQUE7QUFFQTtFQUNF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Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsXCJAaW1wb3J0ICdyZXNldCc7XFxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XFxuXFxuJGJsYWNrOiAjMTUxNTE1O1xcbiRwdXJwbGU6ICMzMDFCM0Y7XFxuJGJsdWU6ICMzQzQxNUM7XFxuJHJlZC1ncmV5OiAjQjRBNUE1O1xcblxcbi8qIEdFTkVSQUwgKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDAuNzVlbSAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI0ZBRkFGQTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDM1NTc7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDI5LCA1MywgODcsIC4yKTtcXG59XFxuXFxuLmZhLWNpcmNsZXtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAmLmhpZ2h0IHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIC4xKTtcXG4gIH1cXG4gICYubWVkaXVtIHtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NSwgMCwgLjEpO1xcbiAgfVxcbiAgJi5sb3cge1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAuMSk7XFxuICB9XFxuICBcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjQThEQURDLCBkYXJrZW4oJGNvbG9yOiAjQThEQURDLCAkYW1vdW50OiAxMCUpKTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggIzBDMUQxRDtcXG4gIGgxIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICB9XFxuICAubmV3LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG4gIH1cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzYwcHggMWZyO1xcbiAgaGVpZ2h0OiA4MjBweDtcXG59XFxuXFxuLyogTmF2YmFyICovXFxuXFxuLm5hdmJhciB7XFxuICB3aWR0aDogMzYwcHg7XFxuICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZBO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZGFya2VuKCRjb2xvcjogI0Y4RjlGQSwgJGFtb3VudDogMTAlKTtcXG4gIC5uYXZiYXItbGlzdCBsaSB7XFxuICAgIG1hcmdpbjogMCAyZW07XFxuICAgIHBhZGRpbmc6IC43NWVtIC4yNWVtO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBpIHtcXG4gICAgICBjb2xvcjogIzQ1N0I5RDtcXG4gICAgfVxcbiAgfVxcbiAgLnByb2plY3RzLWxpc3Qtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcXG4gICAgaDIge1xcbiAgICAgIG1hcmdpbjogMWVtIDA7XFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1saXN0e1xcbiAgICAgIGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxZW07XFxuICAgICAgICBwYWRkaW5nOiAuMjVlbSAwO1xcbiAgICAgICAgbWFyZ2luOiAuMjVlbSAwO1xcbiAgICAgIH1cXG4gICAgICB1bCBsaXtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNmVtO1xcbiAgICAgIH1cXG4gICAgICAuZmEtc3RhY2t7XFxuICAgICAgICBtYXJnaW46IDAgLjc1ZW07XFxuICAgICAgICBmb250LXNpemU6IC44ZW07XFxuICAgICAgICBcXG4gICAgICAgIC5mYS1jaXJjbGUge1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIC5mYS1jaXJjbGUge1xcbiAgICAgICAgICBvcGFjaXR5OiAuMTtcXG4gICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmRlZmF1bHQtYnRuIHtcXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgbWFyZ2luOiAyZW0gYXV0bztcXG4gICAgfVxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjRjhGOUZBLCAkYW1vdW50OiAxMCUpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDJlbTtcXG4gIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBzcGFuIHtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcbiAgICAucHJvamVjdC10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICB9XFxuICAucHJvamVjdC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAyZW07XFxuICB9O1xcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMGVtIDFlbTtcXG4gIGNvbG9yOiAjRkRGREZEO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1N0I5RDtcXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLnNvcnQtbGFiZWwge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMS43NWVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG4gICAgbGkge1xcbiAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtlbigkY29sb3I6ICM0NTdCOUQsICRhbW91bnQ6IDEwJSk7XFxuICAgIH1cXG4gICAgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZW4oJGNvbG9yOiAjNDU3QjlELCAkYW1vdW50OiAxMCUpO1xcbiAgICB9XFxuXFxuICB9XFxuICAuaWNvbi1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjVlbTtcXG4gICAgaSB7XFxuICAgICAgcGFkZGluZzogLjRlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMWVtIDIuNWVtO1xcbiAgLnRvZG8ge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiAuNWVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyOSwgNTMsIDg3LCAuMik7XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICAudG9kby10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5kdWUtZGF0ZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICB9XFxuICAuZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgcGFkZGluZzogMWVtIDRlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG59XFxuXFxuXFxuXFxuXFxuLyogLnRyZWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3dncmVlbjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IC44NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBcXG4gIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XFxuICAgIGNvbG9yOiAjYThhOGE4O1xcbiAgfVxcbiAgXFxuICAuZmEtZm9sZGVyLW9wZW4sIC5mYS1mb2xkZXIge1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG4gIH1cXG4gIFxcbiAgLmZhLWh0bWw1IHtcXG4gICAgY29sb3I6ICNmMjFmMTA7XFxuICB9XFxuICBcXG4gIHVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIFxcbiAgICBsaSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIFxcbiAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTVweDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAmOmFmdGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4gICAgYSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIFxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIHJldHVybiB7dGl0bGU6IHRpdGxlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGR1ZURhdGU6IGR1ZURhdGUsIHByaW9yaXR5OiBwcmlvcml0eSwgY2hlY2tlZDogZmFsc2UsIGNyZWF0ZWRfYXQsIHVwZGF0ZWRfYXR9O1xufVxuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSA9PiB7XG4gIGxldCB0b2RvTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG9JdGVtID0gKHRvZG9JdGVtKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvSXRlbSk7XG4gIH1cblxuICBjb25zdCBpc0NoZWNrID0gKCkgPT4ge1xuICAgIHRvZG9MaXN0LmV2ZXJ5KCBpdGVtID0+IGl0ZW0uY2hlY2tlZCk7XG4gIH1cbiAgcmV0dXJuIHt0aXRsZTogdGl0bGUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgcHJpb3JpdHk6IHByaW9yaXR5LCBjcmVhdGVkX2F0LCB1cGRhdGVkX2F0LCBpc0NoZWNrLCBhZGRUb2RvSXRlbX07XG59XG5cbmV4cG9ydCB7dG9kb0ZhY3RvcnksIHByb2plY3RGYWN0b3J5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwcm9qZWN0RmFjdG9yeX0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAnLi9zeXRsZXNoZWV0cy9zY3NzL21haW4uc2Nzcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9