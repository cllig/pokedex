"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokemon/[id]",{

/***/ "./pages/pokemon/[id].jsx":
/*!********************************!*\
  !*** ./pages/pokemon/[id].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pokemon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSG = true;\nfunction Pokemon(param) {\n    var pokemon = param.pokemon;\n    var _this = this;\n    // const [evolution, seTevolution] = useState();\n    console.log(pokemon.apiEvolutions[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: pokemon.name\n            }, void 0, false, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 8,\n                columnNumber: 15\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pokemon.image,\n                        alt: pokemon.name,\n                        className: \"bg-slate-200 rounded-lg mx-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-slate-500 text-start\",\n                                children: [\n                                    \"N\\xb0\",\n                                    pokemon.pokedexId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"G\\xe9n\\xe9ration : \",\n                                    pokemon.apiGeneration\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: pokemon.apiTypes.map(function(type) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: type.image,\n                                                alt: type.name,\n                                                className: \"w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                                lineNumber: 22,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: type.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-500 p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"PV : \",\n                                            pokemon.stats.HP\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Attaque : \",\n                                            pokemon.stats.attack\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"D\\xe9fense : \",\n                                            pokemon.stats.defense\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Attaque sp\\xe9ciale : \",\n                                            pokemon.stats.special_attack\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"D\\xe9fense sp\\xe9ciale : \",\n                                            pokemon.stats.special_defense\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Vitesse : \",\n                                            pokemon.stats.speed\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Pokemon;\nvar _c;\n$RefreshReg$(_c, \"Pokemon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBZSxTQUFTQSxRQUFRLEtBQVcsRUFBRTtRQUFiLGdCQUFFQzs7SUFDaEMsZ0RBQWdEO0lBRWhEQyxRQUFRQyxHQUFHLENBQUNGLFFBQVFHLGFBQWEsQ0FBQyxFQUFFO0lBRXBDLHFCQUNFOzswQkFDVSw4REFBQ0M7MEJBQUlKLFFBQVFLLElBQUk7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLEtBQUtULFFBQVFVLEtBQUs7d0JBQ2xCQyxLQUFLWCxRQUFRSyxJQUFJO3dCQUNqQkUsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFFTCxXQUFVOztvQ0FBNEI7b0NBQUdQLFFBQVFhLFNBQVM7Ozs7Ozs7MENBQzdELDhEQUFDRDs7b0NBQUU7b0NBQWNaLFFBQVFjLGFBQWE7Ozs7Ozs7MENBRXRDLDhEQUFDUjtnQ0FBSUMsV0FBVTswQ0FDWlAsUUFBUWUsUUFBUSxDQUFDQyxHQUFHLENBQUMsU0FBQ0M7eURBQ3JCLDhEQUFDWDs7MERBQ0MsOERBQUNFO2dEQUFJQyxLQUFLUSxLQUFLUCxLQUFLO2dEQUFFQyxLQUFLTSxLQUFLWixJQUFJO2dEQUFFRSxXQUFVOzs7Ozs7MERBQ2hELDhEQUFDSzswREFBR0ssS0FBS1osSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUluQiw4REFBQ0M7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSzs7NENBQUU7NENBQU1aLFFBQVFrQixLQUFLLENBQUNDLEVBQUU7Ozs7Ozs7a0RBQ3pCLDhEQUFDUDs7NENBQUU7NENBQVdaLFFBQVFrQixLQUFLLENBQUNFLE1BQU07Ozs7Ozs7a0RBQ2xDLDhEQUFDUjs7NENBQUU7NENBQVdaLFFBQVFrQixLQUFLLENBQUNHLE9BQU87Ozs7Ozs7a0RBQ25DLDhEQUFDVDs7NENBQUU7NENBQW9CWixRQUFRa0IsS0FBSyxDQUFDSSxjQUFjOzs7Ozs7O2tEQUNuRCw4REFBQ1Y7OzRDQUFFOzRDQUFvQlosUUFBUWtCLEtBQUssQ0FBQ0ssZUFBZTs7Ozs7OztrREFDcEQsOERBQUNYOzs0Q0FBRTs0Q0FBV1osUUFBUWtCLEtBQUssQ0FBQ00sS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdDLENBQUM7S0F0Q3VCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzeD9lMzJiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oeyBwb2tlbW9uIH0pIHtcbiAgLy8gY29uc3QgW2V2b2x1dGlvbiwgc2VUZXZvbHV0aW9uXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc29sZS5sb2cocG9rZW1vbi5hcGlFdm9sdXRpb25zWzBdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgICAgICAgIDxoMT57cG9rZW1vbi5uYW1lfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktOFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwb2tlbW9uLmltYWdlfVxuICAgICAgICAgIGFsdD17cG9rZW1vbi5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTIwMCByb3VuZGVkLWxnIG14LThcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LXN0YXJ0XCI+TsKwe3Bva2Vtb24ucG9rZWRleElkfTwvcD5cbiAgICAgICAgICA8cD5Hw6luw6lyYXRpb24gOiB7cG9rZW1vbi5hcGlHZW5lcmF0aW9ufTwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAge3Bva2Vtb24uYXBpVHlwZXMubWFwKCh0eXBlKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3R5cGUuaW1hZ2V9IGFsdD17dHlwZS5uYW1lfSBjbGFzc05hbWU9XCJ3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDxwPnt0eXBlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAwIHAtNFwiPlxuICAgICAgICAgICAgPHA+UFYgOiB7cG9rZW1vbi5zdGF0cy5IUH08L3A+XG4gICAgICAgICAgICA8cD5BdHRhcXVlIDoge3Bva2Vtb24uc3RhdHMuYXR0YWNrfTwvcD5cbiAgICAgICAgICAgIDxwPkTDqWZlbnNlIDoge3Bva2Vtb24uc3RhdHMuZGVmZW5zZX08L3A+XG4gICAgICAgICAgICA8cD5BdHRhcXVlIHNww6ljaWFsZSA6IHtwb2tlbW9uLnN0YXRzLnNwZWNpYWxfYXR0YWNrfTwvcD5cbiAgICAgICAgICAgIDxwPkTDqWZlbnNlIHNww6ljaWFsZSA6IHtwb2tlbW9uLnN0YXRzLnNwZWNpYWxfZGVmZW5zZX08L3A+XG4gICAgICAgICAgICA8cD5WaXRlc3NlIDoge3Bva2Vtb24uc3RhdHMuc3BlZWR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9wb2tlYnVpbGRhcGkuZnIvYXBpL3YxL3Bva2Vtb24vJHtwYXJhbXMuaWR9YFxuICApO1xuICBjb25zdCBwb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb2tlbW9uLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bva2VidWlsZGFwaS5mci9hcGkvdjEvcG9rZW1vblwiKTtcbiAgY29uc3QgcG9rZW1vbnMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBva2Vtb25zLm1hcCgocG9rZW1vbikgPT4gKHtcbiAgICAgIHBhcmFtczogeyBpZDogcG9rZW1vbi5pZC50b1N0cmluZygpIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy9zaSByb3V0ZSB1bmtub3cgOiA0MDRcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJQb2tlbW9uIiwicG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciLCJhcGlFdm9sdXRpb25zIiwiaDEiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwIiwicG9rZWRleElkIiwiYXBpR2VuZXJhdGlvbiIsImFwaVR5cGVzIiwibWFwIiwidHlwZSIsInN0YXRzIiwiSFAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlY2lhbF9hdHRhY2siLCJzcGVjaWFsX2RlZmVuc2UiLCJzcGVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon/[id].jsx\n"));

/***/ })

});