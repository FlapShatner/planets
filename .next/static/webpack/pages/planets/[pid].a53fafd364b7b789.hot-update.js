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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.css */ \"./components/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ \"./hooks/useMediaQuery.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Logo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"THE PLANETS\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Logo;\nfunction Header(props) {\n    _s();\n    var planetData = props.planetData, planet = props.planet;\n    var names = [];\n    planetData.map(function(planet) {\n        return names.push(planet.name.toUpperCase());\n    });\n    var isMobile = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(max-width: 600px)\");\n    if (isMobile) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"jsx-52760e537013bce1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-52760e537013bce1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-52760e537013bce1\",\n                        children: \"THE PLANETS\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-52760e537013bce1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/assets/icon-hamburger.svg\",\n                        alt: \"menu icon\",\n                        width: 23,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"52760e537013bce1\",\n                    children: \"header.jsx-52760e537013bce1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}h2.jsx-52760e537013bce1{font-size:30px;margin:5px 0}div.jsx-52760e537013bce1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px}\"\n                }, void 0, false, void 0, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this);\n    } else {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                [\n                    \"92426ec018e127ca\",\n                    [\n                        planet.name.toLowerCase()\n                    ]\n                ]\n            ]) + \" \" + ((_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header) || \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                        [\n                            \"92426ec018e127ca\",\n                            [\n                                planet.name.toLowerCase()\n                            ]\n                        ]\n                    ]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"92426ec018e127ca\",\n                                [\n                                    planet.name.toLowerCase()\n                                ]\n                            ]\n                        ]),\n                        children: names.map(function(planet1) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"92426ec018e127ca\",\n                                        [\n                                            planet.name.toLowerCase()\n                                        ]\n                                    ]\n                                ]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/planets/\".concat(planet1.toLowerCase()),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                            [\n                                                \"92426ec018e127ca\",\n                                                [\n                                                    planet.name.toLowerCase()\n                                                ]\n                                            ]\n                                        ]),\n                                        children: planet1\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, _this)\n                            }, planet1, false, {\n                                fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"92426ec018e127ca\",\n                    dynamic: [\n                        planet.name.toLowerCase()\n                    ],\n                    children: \"a.__jsx-style-dynamic-selector:hover{border-top:2px solid var(--color-\".concat(planet.name.toLowerCase(), \")}\")\n                }, void 0, false, void 0, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Dev\\\\planets\\\\components\\\\header\\\\index.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this);\n    }\n}; // ${names.map(\n //   (name) => `a.${name.toLowerCase()}:hover{\n //   border-top: 2px solid var(--color-${name.toLowerCase()})\n // }`\n // )}\n_s(Header, \"7khsyUHgctuHIPa2/KlDS6LcnT0=\", false, function() {\n    return [\n        _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDWTtBQUNhO0FBQ3ZCOztBQUU5QixTQUFTSSxJQUFJLEdBQUc7SUFDZCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVMLGdFQUFXO2tCQUN6Qiw0RUFBQ08sSUFBRTtzQkFBQyxhQUFXOzs7OztnQkFBSzs7Ozs7WUFDaEIsQ0FDUDtDQUNGO0FBTlFKLEtBQUFBLElBQUk7QUFRRSxTQUFTSyxNQUFNLENBQUNDLEtBQUssRUFBRTs7SUFDcEMsSUFBUUMsVUFBVSxHQUFhRCxLQUFLLENBQTVCQyxVQUFVLEVBQUVDLE1BQU0sR0FBS0YsS0FBSyxDQUFoQkUsTUFBTTtJQUMxQixJQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNoQkYsVUFBVSxDQUFDRyxHQUFHLENBQUMsU0FBQ0YsTUFBTTtlQUFLQyxLQUFLLENBQUNFLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxJQUFJLENBQUNDLFdBQVcsRUFBRSxDQUFDO0tBQUEsQ0FBQztJQUNqRSxJQUFNQyxRQUFRLEdBQUdoQixnRUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBRXBELElBQUlnQixRQUFRLEVBQUU7UUFDWixxQkFDRSw4REFBQ0MsUUFBTTs7OzhCQUNMLDhEQUFDZCxLQUFHOzs4QkFDRiw0RUFBQ0csSUFBRTs7a0NBQUMsYUFBVzs7Ozs7NEJBQUs7Ozs7O3dCQUNoQjs4QkFDTiw4REFBQ0gsS0FBRzs7OEJBQ0YsNEVBQUNGLG1EQUFLO3dCQUFDaUIsR0FBRyxFQUFFLDRCQUE0Qjt3QkFBRUMsR0FBRyxFQUFDLFdBQVc7d0JBQUNDLEtBQUssRUFBRSxFQUFFO3dCQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7NEJBQUk7Ozs7O3dCQUMvRTs7Ozs7Ozs7OztnQkFrQkMsQ0FDVjtLQUNGLE1BQU07O1FBQ0wscUJBQ0UsOERBQUNKLFFBQU07Ozs7O3dCQWVtQ1AsTUFBTSxDQUFDSSxJQUFJLENBQUNRLFdBQVcsRUFBRTs7O3dCQWZoRHZCLGtFQUFhOzs4QkFDOUIsOERBQUNHLElBQUk7Ozs7d0JBQUc7OEJBQ1IsOERBQUNxQixLQUFHOzs7OztnQ0Fhb0NiLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDUSxXQUFXLEVBQUU7Ozs7OEJBWi9ELDRFQUFDRSxJQUFFOzs7OztvQ0FZbUNkLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDUSxXQUFXLEVBQUU7Ozs7a0NBWDVEWCxLQUFLLENBQUNDLEdBQUcsQ0FBQyxTQUFDRixPQUFNO2lEQUNoQiw4REFBQ2UsSUFBRTs7Ozs7NENBVStCZixNQUFNLENBQUNJLElBQUksQ0FBQ1EsV0FBVyxFQUFFOzs7OzBDQVR6RCw0RUFBQ3hCLGtEQUFJO29DQUFDNEIsSUFBSSxFQUFFLFdBQVUsQ0FBdUIsT0FBckJoQixPQUFNLENBQUNZLFdBQVcsRUFBRSxDQUFFOzhDQUM1Qyw0RUFBQ0ssR0FBQzs7Ozs7b0RBUTRCakIsTUFBTSxDQUFDSSxJQUFJLENBQUNRLFdBQVcsRUFBRTs7OztrREFSbkRaLE9BQU07Ozs7OzZDQUFLOzs7Ozt5Q0FDVjsrQkFIQUEsT0FBTTs7OztxQ0FJVjt5QkFDTixDQUFDOzs7Ozs0QkFDQzs7Ozs7d0JBQ0Q7Ozs7d0JBR2tDQSxNQUFNLENBQUNJLElBQUksQ0FBQ1EsV0FBVyxFQUFFOzs4R0FBekJaLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDUSxXQUFXLEVBQUUsT0FoRXpFOzs7Ozs7O2dCQW1FZSxDQUNWO0tBQ0Y7Q0FDRixFQUVELGVBQWU7Q0FDZiw4Q0FBOEM7Q0FDOUMsNkRBQTZEO0NBQzdELEtBQUs7Q0FDTCxLQUFLO0dBL0RtQmYsTUFBTTs7UUFJWFAsNERBQWE7OztBQUpSTyxNQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzP2UwZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1lZGlhUXVlcnknXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gTG9nbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgPGgyPlRIRSBQTEFORVRTPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBwbGFuZXREYXRhLCBwbGFuZXQgfSA9IHByb3BzXHJcbiAgY29uc3QgbmFtZXMgPSBbXVxyXG4gIHBsYW5ldERhdGEubWFwKChwbGFuZXQpID0+IG5hbWVzLnB1c2gocGxhbmV0Lm5hbWUudG9VcHBlckNhc2UoKSkpXHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA2MDBweCknKVxyXG5cclxuICBpZiAoaXNNb2JpbGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5USEUgUExBTkVUUzwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9eycvYXNzZXRzL2ljb24taGFtYnVyZ2VyLnN2Zyd9IGFsdD0nbWVudSBpY29uJyB3aWR0aD17MjN9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtuYW1lcy5tYXAoKHBsYW5ldCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3BsYW5ldH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BsYW5ldHMvJHtwbGFuZXQudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3BsYW5ldH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tY29sb3ItJHtwbGFuZXQubmFtZS50b0xvd2VyQ2FzZSgpfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vICR7bmFtZXMubWFwKFxyXG4vLyAgIChuYW1lKSA9PiBgYS4ke25hbWUudG9Mb3dlckNhc2UoKX06aG92ZXJ7XHJcbi8vICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLSR7bmFtZS50b0xvd2VyQ2FzZSgpfSlcclxuLy8gfWBcclxuLy8gKX1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiSW1hZ2UiLCJMb2dvIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9nbyIsImgyIiwiSGVhZGVyIiwicHJvcHMiLCJwbGFuZXREYXRhIiwicGxhbmV0IiwibmFtZXMiLCJtYXAiLCJwdXNoIiwibmFtZSIsInRvVXBwZXJDYXNlIiwiaXNNb2JpbGUiLCJoZWFkZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInRvTG93ZXJDYXNlIiwibmF2IiwidWwiLCJsaSIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/index.js\n"));

/***/ })

});