"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/planets/[pid]",{

/***/ "./components/main/index.js":
/*!**********************************!*\
  !*** ./components/main/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Main(props) {\n    var planet = props.planet;\n    var name = planet.name.toUpperCase();\n    var imagePath = planet.images.planet.subtring(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: imagePath,\n                    alt: \"image\",\n                    width: 582,\n                    height: 582\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Planet Description\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Source here\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"01 OVERVIEW\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"02 INTERNAL STRUCTURE\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"03 SURFACE GEOLOGY\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVmLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxFQUFFO0lBQ2xDLElBQU0sTUFBUSxHQUFLQSxLQUFLLENBQWhCQyxNQUFNO0lBQ2QsSUFBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxFQUFFO0lBQ3RDLElBQU1DLFNBQVMsR0FBR0gsTUFBTSxDQUFDSSxNQUFNLENBQUNKLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVsRCxxQkFDRSw4REFBQ0MsU0FBTzs7MEJBQ04sOERBQUNDLEtBQUc7MEJBQ0YsNEVBQUNWLG1EQUFLO29CQUFDVyxHQUFHLEVBQUVMLFNBQVM7b0JBQUVNLEdBQUcsRUFBQyxPQUFPO29CQUFDQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7O3dCQUFJOzs7OztvQkFDMUQ7MEJBQ04sOERBQUNKLEtBQUc7O2tDQUNGLDhEQUFDSyxJQUFFO2tDQUFFWCxJQUFJOzs7Ozs0QkFBTTtrQ0FDZiw4REFBQ1ksR0FBQztrQ0FBQyxvQkFBa0I7Ozs7OzRCQUFJO2tDQUN6Qiw4REFBQ0EsR0FBQztrQ0FBQyxhQUFXOzs7Ozs0QkFBSTs7Ozs7O29CQUNkOzBCQUNOLDhEQUFDTixLQUFHOztrQ0FDRiw4REFBQ08sUUFBTTtrQ0FBQyxhQUFXOzs7Ozs0QkFBUztrQ0FDNUIsOERBQUNBLFFBQU07a0NBQUMsdUJBQXFCOzs7Ozs0QkFBUztrQ0FDdEMsOERBQUNBLFFBQU07a0NBQUMsb0JBQWtCOzs7Ozs0QkFBUzs7Ozs7O29CQUMvQjs7Ozs7O1lBQ0UsQ0FDWDtDQUNGO0FBdEJ1QmhCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LmpzP2Q0ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHByb3BzKSB7XHJcbiAgY29uc3QgeyBwbGFuZXQgfSA9IHByb3BzXHJcbiAgY29uc3QgbmFtZSA9IHBsYW5ldC5uYW1lLnRvVXBwZXJDYXNlKClcclxuICBjb25zdCBpbWFnZVBhdGggPSBwbGFuZXQuaW1hZ2VzLnBsYW5ldC5zdWJ0cmluZygxKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VQYXRofSBhbHQ9J2ltYWdlJyB3aWR0aD17NTgyfSBoZWlnaHQ9ezU4Mn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgPHA+UGxhbmV0IERlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgIDxwPlNvdXJjZSBoZXJlPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uPjAxIE9WRVJWSUVXPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj4wMiBJTlRFUk5BTCBTVFJVQ1RVUkU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPjAzIFNVUkZBQ0UgR0VPTE9HWTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTWFpbiIsInByb3BzIiwicGxhbmV0IiwibmFtZSIsInRvVXBwZXJDYXNlIiwiaW1hZ2VQYXRoIiwiaW1hZ2VzIiwic3VidHJpbmciLCJzZWN0aW9uIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main/index.js\n"));

/***/ })

});