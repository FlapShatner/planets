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

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.css */ \"./components/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Logo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"THE PLANETS\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Logo;\nfunction Header(props) {\n    var _this = this;\n    var planet = props.planet, planetData = props.planetData;\n    var names = [];\n    var colors = [];\n    planetData.map(function(planet) {\n        return names.push(planet.name.toUpperCase());\n    });\n    names.map(function(colorName) {\n        return colors.push(\"var(--color-\".concat(colorName.toLowerCase(), \")\"));\n    });\n    console.log(names);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"jsx-b3e1b6a7c9b96113\" + \" \" + ((_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"jsx-b3e1b6a7c9b96113\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"jsx-b3e1b6a7c9b96113\",\n                    children: names.map(function(planet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"jsx-b3e1b6a7c9b96113\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/planets/\".concat(planet.toLowerCase()),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"jsx-b3e1b6a7c9b96113\" + \" \" + (planet.toLowerCase() || \"\"),\n                                    children: planet\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, _this)\n                        }, planet, false, {\n                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b3e1b6a7c9b96113\",\n                children: \"\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}; // ${names.map(\n //   (name) => `a.${name.toLowerCase()}:hover{\n //   border-top: 2px solid var(--color-${name.toLowerCase()})\n // }`\n // )}\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDWTtBQUV4QyxTQUFTRSxJQUFJLEdBQUc7SUFDZCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVILGdFQUFXO2tCQUN6Qiw0RUFBQ0ssSUFBRTtzQkFBQyxhQUFXOzs7OztnQkFBSzs7Ozs7WUFDaEIsQ0FDUDtDQUNGO0FBTlFKLEtBQUFBLElBQUk7QUFRRSxTQUFTSyxNQUFNLENBQUNDLEtBQUssRUFBRTs7SUFDcEMsSUFBUUMsTUFBTSxHQUFpQkQsS0FBSyxDQUE1QkMsTUFBTSxFQUFFQyxVQUFVLEdBQUtGLEtBQUssQ0FBcEJFLFVBQVU7SUFDMUIsSUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsSUFBTUMsTUFBTSxHQUFHLEVBQUU7SUFDakJGLFVBQVUsQ0FBQ0csR0FBRyxDQUFDLFNBQUNKLE1BQU07ZUFBS0UsS0FBSyxDQUFDRyxJQUFJLENBQUNMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDQyxXQUFXLEVBQUUsQ0FBQztLQUFBLENBQUM7SUFDakVMLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFNBQUNJLFNBQVM7ZUFBS0wsTUFBTSxDQUFDRSxJQUFJLENBQUMsY0FBYSxDQUEwQixNQUFDLENBQXpCRyxTQUFTLENBQUNDLFdBQVcsRUFBRSxFQUFDLEdBQUMsQ0FBQyxDQUFDO0tBQUEsQ0FBQztJQUNoRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULEtBQUssQ0FBQztJQUVsQixxQkFDRSw4REFBQ1UsUUFBTTttREFBWXBCLGtFQUFhOzswQkFDOUIsOERBQUNDLElBQUk7Ozs7b0JBQUc7MEJBQ1IsOERBQUNvQixLQUFHOzswQkFDRiw0RUFBQ0MsSUFBRTs7OEJBQ0FaLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFNBQUNKLE1BQU07NkNBQ2hCLDhEQUFDZSxJQUFFOztzQ0FDRCw0RUFBQ3hCLGtEQUFJO2dDQUFDeUIsSUFBSSxFQUFFLFdBQVUsQ0FBdUIsT0FBckJoQixNQUFNLENBQUNTLFdBQVcsRUFBRSxDQUFFOzBDQUM1Qyw0RUFBQ1EsR0FBQzsrRUFBWWpCLE1BQU0sQ0FBQ1MsV0FBVyxFQUFFOzhDQUFHVCxNQUFNOzs7Ozt5Q0FBSzs7Ozs7cUNBQzNDOzJCQUhBQSxNQUFNOzs7O2lDQUlWO3FCQUNOLENBQUM7Ozs7O3dCQUNDOzs7OztvQkFDRDs7Ozs7Ozs7OztZQUVDLENBQ1Y7Q0FDRixFQUVELGVBQWU7Q0FDZiw4Q0FBOEM7Q0FDOUMsNkRBQTZEO0NBQzdELEtBQUs7Q0FDTCxLQUFLO0FBL0JtQkYsTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcz9lMGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTG9nbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgPGgyPlRIRSBQTEFORVRTPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBwbGFuZXQsIHBsYW5ldERhdGEgfSA9IHByb3BzXHJcbiAgY29uc3QgbmFtZXMgPSBbXVxyXG4gIGNvbnN0IGNvbG9ycyA9IFtdXHJcbiAgcGxhbmV0RGF0YS5tYXAoKHBsYW5ldCkgPT4gbmFtZXMucHVzaChwbGFuZXQubmFtZS50b1VwcGVyQ2FzZSgpKSlcclxuICBuYW1lcy5tYXAoKGNvbG9yTmFtZSkgPT4gY29sb3JzLnB1c2goYHZhcigtLWNvbG9yLSR7Y29sb3JOYW1lLnRvTG93ZXJDYXNlKCl9KWApKVxyXG4gIGNvbnNvbGUubG9nKG5hbWVzKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtuYW1lcy5tYXAoKHBsYW5ldCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtwbGFuZXR9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGxhbmV0cy8ke3BsYW5ldC50b0xvd2VyQ2FzZSgpfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwbGFuZXQudG9Mb3dlckNhc2UoKX0+e3BsYW5ldH08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbi8vICR7bmFtZXMubWFwKFxyXG4vLyAgIChuYW1lKSA9PiBgYS4ke25hbWUudG9Mb3dlckNhc2UoKX06aG92ZXJ7XHJcbi8vICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLSR7bmFtZS50b0xvd2VyQ2FzZSgpfSlcclxuLy8gfWBcclxuLy8gKX1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJMb2dvIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9nbyIsImgyIiwiSGVhZGVyIiwicHJvcHMiLCJwbGFuZXQiLCJwbGFuZXREYXRhIiwibmFtZXMiLCJjb2xvcnMiLCJtYXAiLCJwdXNoIiwibmFtZSIsInRvVXBwZXJDYXNlIiwiY29sb3JOYW1lIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwibmF2IiwidWwiLCJsaSIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/index.js\n"));

/***/ })

});