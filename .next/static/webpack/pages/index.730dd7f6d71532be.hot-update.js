"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.jsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction HomePage(param) {\n    var pokemons = param.pokemons;\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(40), 2), count = ref1[0], setCount = ref1[1];\n    //récupération des 40 premiers pokemons\n    var firstPokemons = pokemons.slice(0, count);\n    //scroll load avec délais pour test\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (loading === true) {\n            setTimeout(function() {\n                setCount(count + 20);\n                setLoading(false);\n            }, \"1000\");\n        }\n        window.addEventListener(\"scroll\", loadMore);\n        return function() {\n            return window.removeEventListener(\"scroll\", loadMore);\n        };\n    }, [\n        count,\n        loading\n    ]);\n    var loadMore = function() {\n        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {\n            setLoading(true);\n        }\n    };\n    // console.log(pokemons);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pokedex\"\n                    }, void 0, false, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/images/pokeball.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-slate-100 w-screen min-h-screen flex flex-wrap justify-center p-4 relative\",\n                children: [\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        role: \"status\",\n                        className: \"absolute bottom-0 right-0 m-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-20\",\n                            src: \"./images/DD0.gif\",\n                            alt: \"Carapuce bg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    firstPokemons && firstPokemons.map(function(pokemon, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                            href: \"/pokemon/\".concat(id),\n                            className: \"flex flex-col items-center w-1/6 m-2 rounded-lg shadow transform transition duration-500 hover:scale-110\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                pokemon: pokemon\n                            }, pokemon.id, false, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"971ip8uCHyL5TpWrYBRZiqJQBCU=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE2QjtBQUNlO0FBQ047O0FBRXZCLFNBQVNJLFNBQVMsS0FBWSxFQUFFO1FBQWQsaUJBQUVDOzs7SUFDakMsSUFBOEJILE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQXJDSSxVQUF1QkosUUFBZEssYUFBY0w7SUFDOUIsSUFBMEJBLE9BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUE1Qk0sUUFBbUJOLFNBQVpPLFdBQVlQO0lBRTFCLHVDQUF1QztJQUN2QyxJQUFNUSxnQkFBZ0JMLFNBQVNNLEtBQUssQ0FBQyxHQUFHSDtJQUV4QyxtQ0FBbUM7SUFDbkNQLGdEQUFTQSxDQUFDLFdBQU07UUFDZCxJQUFJSyxZQUFZLElBQUksRUFBRTtZQUNwQk0sV0FBVyxXQUFNO2dCQUNmSCxTQUFTRCxRQUFRO2dCQUNqQkQsV0FBVyxLQUFLO1lBQ2xCLEdBQUc7UUFDTCxDQUFDO1FBQ0RNLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVDO1FBQ2xDLE9BQU87bUJBQU1GLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVEOztJQUNwRCxHQUFHO1FBQUNQO1FBQU9GO0tBQVE7SUFFbkIsSUFBTVMsV0FBVyxXQUFNO1FBQ3JCLElBQ0VGLE9BQU9JLFdBQVcsR0FBR0MsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLEdBQUcsSUFDMURGLFNBQVNHLGdCQUFnQixDQUFDQyxZQUFZLEVBQ3RDO1lBQ0FmLFdBQVcsSUFBSTtRQUNqQixDQUFDO0lBQ0g7SUFFQSx5QkFBeUI7SUFFekIscUJBQ0U7OzBCQUNFLDhEQUFDUCxrREFBSUE7O2tDQUNILDhEQUFDdUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBSUMsV0FBVTs7b0JBQ1p6Qix5QkFDQyw4REFBQ3dCO3dCQUFJRSxNQUFLO3dCQUFTRCxXQUFVO2tDQUMzQiw0RUFBQ0U7NEJBQUlGLFdBQVU7NEJBQU9HLEtBQUk7NEJBQW1CQyxLQUFJOzs7Ozs7Ozs7OztvQkFJcER6QixpQkFDQ0EsY0FBYzBCLEdBQUcsQ0FBQyxTQUFDQyxTQUFTQzs2Q0FDMUIsOERBQUNDOzRCQUNDVixNQUFNLFlBQWUsT0FBSFM7NEJBQ2xCUCxXQUFVO3NDQUdWLDRFQUFDNUIsd0RBQUlBO2dDQUFDa0MsU0FBU0E7K0JBQWNBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQsQ0FBQztHQTFEdUJsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBwb2tlbW9ucyB9KSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSg0MCk7XG5cbiAgLy9yw6ljdXDDqXJhdGlvbiBkZXMgNDAgcHJlbWllcnMgcG9rZW1vbnNcbiAgY29uc3QgZmlyc3RQb2tlbW9ucyA9IHBva2Vtb25zLnNsaWNlKDAsIGNvdW50KTtcblxuICAvL3Njcm9sbCBsb2FkIGF2ZWMgZMOpbGFpcyBwb3VyIHRlc3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KGNvdW50ICsgMjApO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0sIFwiMTAwMFwiKTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbG9hZE1vcmUpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsb2FkTW9yZSk7XG4gIH0sIFtjb3VudCwgbG9hZGluZ10pO1xuXG4gIGNvbnN0IGxvYWRNb3JlID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyAxID5cbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zb2xlLmxvZyhwb2tlbW9ucyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2tlZGV4PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWFnZXMvcG9rZWJhbGwucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgdy1zY3JlZW4gbWluLWgtc2NyZWVuIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHAtNCByZWxhdGl2ZVwiPlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiByb2xlPVwic3RhdHVzXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCBtLTRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0yMFwiIHNyYz1cIi4vaW1hZ2VzL0REMC5naWZcIiBhbHQ9XCJDYXJhcHVjZSBiZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2ZpcnN0UG9rZW1vbnMgJiZcbiAgICAgICAgICBmaXJzdFBva2Vtb25zLm1hcCgocG9rZW1vbiwgaWQpID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2AvcG9rZW1vbi8ke2lkfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctMS82IG0tMiByb3VuZGVkLWxnIHNoYWRvd1xuICAgICAgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJkIHBva2Vtb249e3Bva2Vtb259IGtleT17cG9rZW1vbi5pZH0gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYnVpbGRhcGkuZnIvYXBpL3YxL3Bva2Vtb25cIik7XG4gIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb2tlbW9ucyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJIb21lUGFnZSIsInBva2Vtb25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb3VudCIsInNldENvdW50IiwiZmlyc3RQb2tlbW9ucyIsInNsaWNlIiwic2V0VGltZW91dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkTW9yZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbEhlaWdodCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiaW1nIiwic3JjIiwiYWx0IiwibWFwIiwicG9rZW1vbiIsImlkIiwiTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});