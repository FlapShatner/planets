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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.css */ \"./components/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Logo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"THE PLANETS\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Logo;\nfunction Header(props) {\n    var _this = this;\n    // const planetNames = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE']\n    var planet = props.planet, planetData = props.planetData;\n    var names = [];\n    planetData.map(function(name) {\n        return names.push(planetData[name]);\n    });\n    var name = planet.name.toLowerCase();\n    var color = \"var(--color-\".concat(name, \")\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n            [\n                \"359a22e543ca35a1\",\n                [\n                    name,\n                    color\n                ]\n            ]\n        ]) + \" \" + ((_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"359a22e543ca35a1\",\n                        [\n                            name,\n                            color\n                        ]\n                    ]\n                ]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                        [\n                            \"359a22e543ca35a1\",\n                            [\n                                name,\n                                color\n                            ]\n                        ]\n                    ]),\n                    children: planetNames.map(function(planet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"359a22e543ca35a1\",\n                                    [\n                                        name,\n                                        color\n                                    ]\n                                ]\n                            ]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/planets/\".concat(planet.toLowerCase()),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    id: planet,\n                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                        [\n                                            \"359a22e543ca35a1\",\n                                            [\n                                                name,\n                                                color\n                                            ]\n                                        ]\n                                    ]),\n                                    children: planet\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, _this)\n                        }, planet, false, {\n                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"359a22e543ca35a1\",\n                dynamic: [\n                    name,\n                    color\n                ],\n                children: \"a#\".concat(name, \".__jsx-style-dynamic-selector:hover{border-top:2px solid \").concat(color, \"}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDWTtBQUV4QyxTQUFTRSxJQUFJLEdBQUc7SUFDZCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVILGdFQUFXO2tCQUN6Qiw0RUFBQ0ssSUFBRTtzQkFBQyxhQUFXOzs7OztnQkFBSzs7Ozs7WUFDaEIsQ0FDUDtDQUNGO0FBTlFKLEtBQUFBLElBQUk7QUFRRSxTQUFTSyxNQUFNLENBQUNDLEtBQUssRUFBRTs7SUFDcEMsc0dBQXNHO0lBQ3RHLElBQVFDLE1BQU0sR0FBaUJELEtBQUssQ0FBNUJDLE1BQU0sRUFBRUMsVUFBVSxHQUFLRixLQUFLLENBQXBCRSxVQUFVO0lBQzFCLElBQU1DLEtBQUssR0FBRyxFQUFFO0lBRWhCRCxVQUFVLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO2VBQUtGLEtBQUssQ0FBQ0csSUFBSSxDQUFDSixVQUFVLENBQUNHLElBQUksQ0FBQyxDQUFDO0tBQUEsQ0FBQztJQUV0RCxJQUFNQSxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDRSxXQUFXLEVBQUU7SUFDdEMsSUFBTUMsS0FBSyxHQUFHLGNBQWEsQ0FBTyxNQUFDLENBQU5ILElBQUksRUFBQyxHQUFDLENBQUM7SUFFcEMscUJBQ0UsOERBQUNJLFFBQU07Ozs7O29CQWNDSixJQUFJO29CQUNrQkcsS0FBSzs7O29CQWZoQmYsa0VBQWE7OzBCQUM5Qiw4REFBQ0MsSUFBSTs7OztvQkFBRzswQkFDUiw4REFBQ2dCLEtBQUc7Ozs7OzRCQVlFTCxJQUFJOzRCQUNrQkcsS0FBSzs7OzswQkFaL0IsNEVBQUNHLElBQUU7Ozs7O2dDQVdDTixJQUFJO2dDQUNrQkcsS0FBSzs7Ozs4QkFYNUJJLFdBQVcsQ0FBQ1IsR0FBRyxDQUFDLFNBQUNILE1BQU07NkNBQ3RCLDhEQUFDWSxJQUFFOzs7Ozt3Q0FTSFIsSUFBSTt3Q0FDa0JHLEtBQUs7Ozs7c0NBVHpCLDRFQUFDaEIsa0RBQUk7Z0NBQUNzQixJQUFJLEVBQUUsV0FBVSxDQUF1QixPQUFyQmIsTUFBTSxDQUFDTSxXQUFXLEVBQUUsQ0FBRTswQ0FDNUMsNEVBQUNRLEdBQUM7b0NBQUNDLEVBQUUsRUFBRWYsTUFBTTs7Ozs7Z0RBT2pCSSxJQUFJO2dEQUNrQkcsS0FBSzs7Ozs4Q0FSUFAsTUFBTTs7Ozs7eUNBQUs7Ozs7O3FDQUN0QjsyQkFIQUEsTUFBTTs7OztpQ0FJVjtxQkFDTixDQUFDOzs7Ozt3QkFDQzs7Ozs7b0JBQ0Q7Ozs7b0JBRUFJLElBQUk7b0JBQ2tCRyxLQUFLOzsrQkFBTEEsTUFBSyxDQUQzQkgsSUFBSSw4REFDd0IsUUFBTkcsS0FBSyxNQXJDdkM7Ozs7Ozs7WUF3Q2EsQ0FDVjtDQUNGO0FBL0J1QlQsTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcz9lMGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTG9nbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgPGgyPlRIRSBQTEFORVRTPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgLy8gY29uc3QgcGxhbmV0TmFtZXMgPSBbJ01FUkNVUlknLCAnVkVOVVMnLCAnRUFSVEgnLCAnTUFSUycsICdKVVBJVEVSJywgJ1NBVFVSTicsICdVUkFOVVMnLCAnTkVQVFVORSddXHJcbiAgY29uc3QgeyBwbGFuZXQsIHBsYW5ldERhdGEgfSA9IHByb3BzXHJcbiAgY29uc3QgbmFtZXMgPSBbXVxyXG5cclxuICBwbGFuZXREYXRhLm1hcCgobmFtZSkgPT4gbmFtZXMucHVzaChwbGFuZXREYXRhW25hbWVdKSlcclxuXHJcbiAgY29uc3QgbmFtZSA9IHBsYW5ldC5uYW1lLnRvTG93ZXJDYXNlKClcclxuICBjb25zdCBjb2xvciA9IGB2YXIoLS1jb2xvci0ke25hbWV9KWBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgPExvZ28gLz5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7cGxhbmV0TmFtZXMubWFwKChwbGFuZXQpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17cGxhbmV0fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BsYW5ldHMvJHtwbGFuZXQudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGlkPXtwbGFuZXR9PntwbGFuZXR9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSMke25hbWV9OmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke2NvbG9yfTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIkxvZ28iLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dvIiwiaDIiLCJIZWFkZXIiLCJwcm9wcyIsInBsYW5ldCIsInBsYW5ldERhdGEiLCJuYW1lcyIsIm1hcCIsIm5hbWUiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJjb2xvciIsImhlYWRlciIsIm5hdiIsInVsIiwicGxhbmV0TmFtZXMiLCJsaSIsImhyZWYiLCJhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/index.js\n"));

/***/ })

});