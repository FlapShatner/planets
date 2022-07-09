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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.module.css */ \"./components/main/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ \"./components/button.js\");\n\n\n\n\nfunction Main(props) {\n    var planet = props.planet;\n    var name = planet.name.toUpperCase();\n    var imagePath = planet.images.planet.substring(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().planetData),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: imagePath,\n                        alt: \"image\",\n                        width: 290,\n                        height: 290\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().overview),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: planet.overview.content\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Source:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: planet.overview.source,\n                                        children: \"Wikipedia\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"01\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"OVERVIEW\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"02\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"INTERNAL STRUCTURE\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"03\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"SURFACE GEOLOGY\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\main\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n};\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNRO0FBQ1I7QUFFZixTQUFTRyxJQUFJLENBQUNDLEtBQUssRUFBRTtJQUNsQyxJQUFNLE1BQVEsR0FBS0EsS0FBSyxDQUFoQkMsTUFBTTtJQUNkLElBQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUN0QyxJQUFNQyxTQUFTLEdBQUdILE1BQU0sQ0FBQ0ksTUFBTSxDQUFDSixNQUFNLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFbkQscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFWCxvRUFBaUI7OzBCQUNuQyw4REFBQ2EsS0FBRztnQkFBQ0YsU0FBUyxFQUFFWCx3RUFBcUI7MEJBQ25DLDRFQUFDYSxLQUFHO29CQUFDRixTQUFTLEVBQUVYLCtEQUFZOzhCQUMxQiw0RUFBQ0QsbURBQUs7d0JBQUNpQixHQUFHLEVBQUVULFNBQVM7d0JBQUVVLEdBQUcsRUFBQyxPQUFPO3dCQUFDQyxLQUFLLEVBQUUsR0FBRzt3QkFBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7OzRCQUFJOzs7Ozt3QkFDMUQ7Ozs7O29CQUNGOzBCQUNOLDhEQUFDTixLQUFHO2dCQUFDRixTQUFTLEVBQUVYLGtFQUFlOztrQ0FDN0IsOERBQUNhLEtBQUc7d0JBQUNGLFNBQVMsRUFBRVgscUVBQWtCOzswQ0FDaEMsOERBQUNzQixJQUFFOzBDQUFFakIsSUFBSTs7Ozs7b0NBQU07MENBQ2YsOERBQUNrQixHQUFDOzBDQUFFbkIsTUFBTSxDQUFDZ0IsUUFBUSxDQUFDSSxPQUFPOzs7OztvQ0FBSzswQ0FDaEMsOERBQUNYLEtBQUc7O2tEQUNGLDhEQUFDWSxNQUFJO2tEQUFDLFNBQU87Ozs7OzRDQUFPO2tEQUNwQiw4REFBQ0MsR0FBQzt3Q0FBQ0MsSUFBSSxFQUFFdkIsTUFBTSxDQUFDZ0IsUUFBUSxDQUFDUSxNQUFNO2tEQUFFLFdBQVM7Ozs7OzRDQUFJOzs7Ozs7b0NBQzFDOzs7Ozs7NEJBQ0Y7a0NBRU4sOERBQUNmLEtBQUc7d0JBQUNGLFNBQVMsRUFBRVgsaUVBQWM7OzBDQUM1Qiw4REFBQ0MsK0NBQU07MENBQ0wsNEVBQUNZLEtBQUc7O3NEQUNGLDhEQUFDWSxNQUFJO3NEQUFDLElBQUU7Ozs7O2dEQUFPO3NEQUNmLDhEQUFDRixHQUFDO3NEQUFDLFVBQVE7Ozs7O2dEQUFJOzs7Ozs7d0NBQ1g7Ozs7O29DQUNDOzBDQUNULDhEQUFDdEIsK0NBQU07MENBQ0wsNEVBQUNZLEtBQUc7O3NEQUNGLDhEQUFDWSxNQUFJO3NEQUFDLElBQUU7Ozs7O2dEQUFPO3NEQUNmLDhEQUFDRixHQUFDO3NEQUFDLG9CQUFrQjs7Ozs7Z0RBQUk7Ozs7Ozt3Q0FDckI7Ozs7O29DQUNDOzBDQUNULDhEQUFDdEIsK0NBQU07MENBQ0wsNEVBQUNZLEtBQUc7O3NEQUNGLDhEQUFDWSxNQUFJO3NEQUFDLElBQUU7Ozs7O2dEQUFPO3NEQUNmLDhEQUFDRixHQUFDO3NEQUFDLGlCQUFlOzs7OztnREFBSTs7Ozs7O3dDQUNsQjs7Ozs7b0NBQ0M7MENBQ1QsOERBQUN0QiwrQ0FBTTs7OztvQ0FBVTs7Ozs7OzRCQUNiOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNFLENBQ1g7Q0FDRjtBQTlDdUJDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LmpzP2Q0ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYWluLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbihwcm9wcykge1xyXG4gIGNvbnN0IHsgcGxhbmV0IH0gPSBwcm9wc1xyXG4gIGNvbnN0IG5hbWUgPSBwbGFuZXQubmFtZS50b1VwcGVyQ2FzZSgpXHJcbiAgY29uc3QgaW1hZ2VQYXRoID0gcGxhbmV0LmltYWdlcy5wbGFuZXQuc3Vic3RyaW5nKDEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuZXREYXRhfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZVBhdGh9IGFsdD0naW1hZ2UnIHdpZHRoPXsyOTB9IGhlaWdodD17MjkwfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDxwPntwbGFuZXQub3ZlcnZpZXcuY29udGVudH08L3A+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5Tb3VyY2U6PC9zcGFuPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtwbGFuZXQub3ZlcnZpZXcuc291cmNlfT5XaWtpcGVkaWE8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+MDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHA+T1ZFUlZJRVc8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPjAyPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwPklOVEVSTkFMIFNUUlVDVFVSRTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+MDM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHA+U1VSRkFDRSBHRU9MT0dZPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbj48L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIkJ1dHRvbiIsIk1haW4iLCJwcm9wcyIsInBsYW5ldCIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImltYWdlUGF0aCIsImltYWdlcyIsInN1YnN0cmluZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwbGFuZXREYXRhIiwiZGl2IiwiaW1hZ2VDb250YWluZXIiLCJpbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcnZpZXciLCJkZXNjcmlwdGlvbiIsImgxIiwicCIsImNvbnRlbnQiLCJzcGFuIiwiYSIsImhyZWYiLCJzb3VyY2UiLCJidXR0b25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main/index.js\n"));

/***/ })

});