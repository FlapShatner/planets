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

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.module.css */ \"./components/footer/footer.module.css\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ \"./hooks/useMediaQuery.js\");\n\n\n\nfunction Footer(props) {\n    var planet = props.planet;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                    title: \"ROTATION TIME\",\n                    stat: planet.rotation\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                    title: \"REVOLUTION TIME\",\n                    stat: planet.revolution\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                    title: \"RADIUS\",\n                    stat: planet.radius\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                    title: \"AVERAGE TEMP\",\n                    stat: planet.temperature\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = Footer;\nfunction Box(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: props.stat\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\footer\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Box;\nvar _c, _c1;\n$RefreshReg$(_c, \"Footer\");\n$RefreshReg$(_c1, \"Box\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNhO0FBRXRDLFNBQVNFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO0lBQ3BDLElBQU0sTUFBUSxHQUFLQSxLQUFLLENBQWhCQyxNQUFNO0lBRWQscUJBQ0UsOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFFTixrRUFBYTtrQkFDOUIsNEVBQUNPLEtBQUc7WUFBQ0QsU0FBUyxFQUFFTixxRUFBZ0I7OzhCQUM5Qiw4REFBQ1MsR0FBRztvQkFBQ0MsS0FBSyxFQUFFLGVBQWU7b0JBQUVDLElBQUksRUFBRVAsTUFBTSxDQUFDUSxRQUFROzs7Ozt3QkFBSTs4QkFDdEQsOERBQUNILEdBQUc7b0JBQUNDLEtBQUssRUFBRSxpQkFBaUI7b0JBQUVDLElBQUksRUFBRVAsTUFBTSxDQUFDUyxVQUFVOzs7Ozt3QkFBSTs4QkFDMUQsOERBQUNKLEdBQUc7b0JBQUNDLEtBQUssRUFBRSxRQUFRO29CQUFFQyxJQUFJLEVBQUVQLE1BQU0sQ0FBQ1UsTUFBTTs7Ozs7d0JBQUk7OEJBQzdDLDhEQUFDTCxHQUFHO29CQUFDQyxLQUFLLEVBQUUsY0FBYztvQkFBRUMsSUFBSSxFQUFFUCxNQUFNLENBQUNXLFdBQVc7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ3BEOzs7OztZQUNDLENBQ1Y7Q0FDRjtBQWJ1QmIsS0FBQUEsTUFBTTtBQWU5QixTQUFTTyxHQUFHLENBQUNOLEtBQUssRUFBRTtJQUNsQixxQkFDRSw4REFBQ0ksS0FBRztRQUFDRCxTQUFTLEVBQUVOLCtEQUFVOzswQkFDeEIsOERBQUNpQixHQUFDOzBCQUFFZCxLQUFLLENBQUNPLEtBQUs7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ1EsSUFBRTswQkFBRWYsS0FBSyxDQUFDUSxJQUFJOzs7OztvQkFBTTs7Ozs7O1lBQ2pCLENBQ1A7Q0FDRjtBQVBRRixNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzPzBhZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuLi8uLi9ob29rcy91c2VNZWRpYVF1ZXJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBwbGFuZXQgfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8Qm94IHRpdGxlPXsnUk9UQVRJT04gVElNRSd9IHN0YXQ9e3BsYW5ldC5yb3RhdGlvbn0gLz5cclxuICAgICAgICA8Qm94IHRpdGxlPXsnUkVWT0xVVElPTiBUSU1FJ30gc3RhdD17cGxhbmV0LnJldm9sdXRpb259IC8+XHJcbiAgICAgICAgPEJveCB0aXRsZT17J1JBRElVUyd9IHN0YXQ9e3BsYW5ldC5yYWRpdXN9IC8+XHJcbiAgICAgICAgPEJveCB0aXRsZT17J0FWRVJBR0UgVEVNUCd9IHN0YXQ9e3BsYW5ldC50ZW1wZXJhdHVyZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJveChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgIDxwPntwcm9wcy50aXRsZX08L3A+XHJcbiAgICAgIDxoMj57cHJvcHMuc3RhdH08L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiRm9vdGVyIiwicHJvcHMiLCJwbGFuZXQiLCJmb290ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJjb250YWluZXIiLCJCb3giLCJ0aXRsZSIsInN0YXQiLCJyb3RhdGlvbiIsInJldm9sdXRpb24iLCJyYWRpdXMiLCJ0ZW1wZXJhdHVyZSIsImJveCIsInAiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer/index.js\n"));

/***/ })

});