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

/***/ "./pages/planets/[pid]/index.js":
/*!**************************************!*\
  !*** ./pages/planets/[pid]/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Planet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/main */ \"./components/main/index.js\");\n/* harmony import */ var _components_main_pages_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/main/pages/internal */ \"./components/main/pages/internal.js\");\n/* harmony import */ var _components_main_pages_geology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/main/pages/geology */ \"./components/main/pages/geology.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Planet(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var page = router.query.page;\n    var planet = props.planet, planetData = props.planetData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        planetData: planetData,\n        planet: planet,\n        children: [\n            page === \"internal\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_pages_internal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                planet: planet\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\pages\\\\planets\\\\[pid]\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 31\n            }, this),\n            page === \"geography\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_pages_geology__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                planet: planet\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\pages\\\\planets\\\\[pid]\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 32\n            }, this),\n            !page && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                planet: planet\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\planets\\\\pages\\\\planets\\\\[pid]\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\planets\\\\pages\\\\planets\\\\[pid]\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n};\n_s(Planet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Planet;\nvar _c;\n$RefreshReg$(_c, \"Planet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGFuZXRzL1twaWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUUyQztBQUNtQjtBQUNBO0FBQ2Y7QUFDUjs7O0FBRXhCLFNBQVNLLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFOztJQUNwQyxJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBTUksSUFBSSxHQUFHRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0QsSUFBSTtJQUM5QixJQUFRRSxNQUFNLEdBQWlCSixLQUFLLENBQTVCSSxNQUFNLEVBQUVDLFVBQVUsR0FBS0wsS0FBSyxDQUFwQkssVUFBVTtJQUUxQixxQkFDRSw4REFBQ1IsMERBQU07UUFBQ1EsVUFBVSxFQUFFQSxVQUFVO1FBQUVELE1BQU0sRUFBRUEsTUFBTTs7WUFDM0NGLElBQUksS0FBSyxVQUFVLGtCQUFJLDhEQUFDUCx1RUFBUTtnQkFBQ1MsTUFBTSxFQUFFQSxNQUFNOzs7OztvQkFBSTtZQUNuREYsSUFBSSxLQUFLLFdBQVcsa0JBQUksOERBQUNOLHNFQUFTO2dCQUFDUSxNQUFNLEVBQUVBLE1BQU07Ozs7O29CQUFJO1lBQ3JELENBQUNGLElBQUksa0JBQUksOERBQUNSLHdEQUFJO2dCQUFDVSxNQUFNLEVBQUVBLE1BQU07Ozs7O29CQUFJOzs7Ozs7WUFDM0IsQ0FDVjtDQUNGO0dBWnVCTCxNQUFNOztRQUNiRCxrREFBUzs7O0FBREZDLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxhbmV0cy9bcGlkXS9pbmRleC5qcz9jYmFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXREYXRhIGZyb20gJy4uLy4uLy4uL2pzb24vc3RhdGljZGF0YSdcclxuXHJcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWFpbidcclxuaW1wb3J0IEludGVybmFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWFpbi9wYWdlcy9pbnRlcm5hbCdcclxuaW1wb3J0IEdlb2dyYXBoeSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21haW4vcGFnZXMvZ2VvbG9neSdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGFuZXQocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhZ2UgPSByb3V0ZXIucXVlcnkucGFnZVxyXG4gIGNvbnN0IHsgcGxhbmV0LCBwbGFuZXREYXRhIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBwbGFuZXREYXRhPXtwbGFuZXREYXRhfSBwbGFuZXQ9e3BsYW5ldH0+XHJcbiAgICAgIHtwYWdlID09PSAnaW50ZXJuYWwnICYmIDxJbnRlcm5hbCBwbGFuZXQ9e3BsYW5ldH0gLz59XHJcbiAgICAgIHtwYWdlID09PSAnZ2VvZ3JhcGh5JyAmJiA8R2VvZ3JhcGh5IHBsYW5ldD17cGxhbmV0fSAvPn1cclxuICAgICAgeyFwYWdlICYmIDxNYWluIHBsYW5ldD17cGxhbmV0fSAvPn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xyXG4gIGNvbnN0IHsgcGlkIH0gPSBjdHgucGFyYW1zXHJcbiAgY29uc3QgY2FwUGlkID0gcGlkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGlkLnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcclxuICBjb25zdCBwbGFuZXREYXRhID0gYXdhaXQgZ2V0RGF0YSgpXHJcbiAgY29uc3QgcGxhbmV0ID0gcGxhbmV0RGF0YS5maW5kKChwbGFuZXQpID0+IHBsYW5ldC5uYW1lID09PSBjYXBQaWQpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBsYW5ldCxcclxuICAgICAgcGxhbmV0RGF0YSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGxhbmV0RGF0YSA9IGF3YWl0IGdldERhdGEoKVxyXG4gIGNvbnN0IHBhdGhzID0gcGxhbmV0RGF0YS5tYXAoKHBsYW5ldCkgPT4gKHtcclxuICAgIHBhcmFtczogeyBwaWQ6IHBsYW5ldC5uYW1lIH0sXHJcbiAgfSkpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNYWluIiwiSW50ZXJuYWwiLCJHZW9ncmFwaHkiLCJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJQbGFuZXQiLCJwcm9wcyIsInJvdXRlciIsInBhZ2UiLCJxdWVyeSIsInBsYW5ldCIsInBsYW5ldERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/planets/[pid]/index.js\n"));

/***/ })

});