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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pokemon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSG = true;\nfunction Pokemon(param) {\n    var pokemon = param.pokemon;\n    var _this = this;\n    // const [evolution, seTevolution] = useState();\n    console.log(pokemon.apiEvolutions[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: pokemon.name\n            }, void 0, false, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-slate-500\",\n                children: [\n                    \"N\\xb0\",\n                    pokemon.pokedexId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pokemon.image,\n                        alt: pokemon.name,\n                        className: \"bg-slate-200 rounded-lg mx-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"G\\xe9n\\xe9ration : \",\n                                    pokemon.apiGeneration\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: pokemon.apiTypes.map(function(type) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: type.image,\n                                                alt: type.name,\n                                                className: \"w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                                lineNumber: 22,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: type.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-400 p-4 rounded-lg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"PV : \",\n                                            pokemon.stats.HP\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Attaque : \",\n                                            pokemon.stats.attack\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"D\\xe9fense : \",\n                                            pokemon.stats.defense\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Attaque sp\\xe9ciale : \",\n                                            pokemon.stats.special_attack\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"D\\xe9fense sp\\xe9ciale : \",\n                                            pokemon.stats.special_defense\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Vitesse : \",\n                                            pokemon.stats.speed\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Pokemon;\nvar _c;\n$RefreshReg$(_c, \"Pokemon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBZSxTQUFTQSxRQUFRLEtBQVcsRUFBRTtRQUFiLGdCQUFFQzs7SUFDaEMsZ0RBQWdEO0lBRWhEQyxRQUFRQyxHQUFHLENBQUNGLFFBQVFHLGFBQWEsQ0FBQyxFQUFFO0lBRXBDLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7MEJBQUlOLFFBQVFPLElBQUk7Ozs7OzswQkFDakIsOERBQUNDO2dCQUFHSCxXQUFVOztvQkFBaUI7b0JBQUdMLFFBQVFTLFNBQVM7Ozs7Ozs7MEJBQ25ELDhEQUFDQztnQkFBSUwsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUNDQyxLQUFLWixRQUFRYSxLQUFLO3dCQUNsQkMsS0FBS2QsUUFBUU8sSUFBSTt3QkFDakJGLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0s7d0JBQUlMLFdBQVU7OzBDQUNiLDhEQUFDVTs7b0NBQUU7b0NBQWNmLFFBQVFnQixhQUFhOzs7Ozs7OzBDQUV0Qyw4REFBQ047Z0NBQUlMLFdBQVU7MENBQ1pMLFFBQVFpQixRQUFRLENBQUNDLEdBQUcsQ0FBQyxTQUFDQzt5REFDckIsOERBQUNUOzswREFDQyw4REFBQ0M7Z0RBQUlDLEtBQUtPLEtBQUtOLEtBQUs7Z0RBQUVDLEtBQUtLLEtBQUtaLElBQUk7Z0RBQUVGLFdBQVU7Ozs7OzswREFDaEQsOERBQUNVOzBEQUFHSSxLQUFLWixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSW5CLDhEQUFDRztnQ0FBSUwsV0FBVTs7a0RBQ2IsOERBQUNVOzs0Q0FBRTs0Q0FBTWYsUUFBUW9CLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7OztrREFDekIsOERBQUNOOzs0Q0FBRTs0Q0FBV2YsUUFBUW9CLEtBQUssQ0FBQ0UsTUFBTTs7Ozs7OztrREFDbEMsOERBQUNQOzs0Q0FBRTs0Q0FBV2YsUUFBUW9CLEtBQUssQ0FBQ0csT0FBTzs7Ozs7OztrREFDbkMsOERBQUNSOzs0Q0FBRTs0Q0FBb0JmLFFBQVFvQixLQUFLLENBQUNJLGNBQWM7Ozs7Ozs7a0RBQ25ELDhEQUFDVDs7NENBQUU7NENBQW9CZixRQUFRb0IsS0FBSyxDQUFDSyxlQUFlOzs7Ozs7O2tEQUNwRCw4REFBQ1Y7OzRDQUFFOzRDQUFXZixRQUFRb0IsS0FBSyxDQUFDTSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdDLENBQUM7S0F0Q3VCM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9baWRdLmpzeD9lMzJiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oeyBwb2tlbW9uIH0pIHtcbiAgLy8gY29uc3QgW2V2b2x1dGlvbiwgc2VUZXZvbHV0aW9uXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc29sZS5sb2cocG9rZW1vbi5hcGlFdm9sdXRpb25zWzBdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICA8aDE+e3Bva2Vtb24ubmFtZX08L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwXCI+TsKwe3Bva2Vtb24ucG9rZWRleElkfTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LThcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cG9rZW1vbi5pbWFnZX1cbiAgICAgICAgICBhbHQ9e3Bva2Vtb24ubmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgcm91bmRlZC1sZyBteC04XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPHA+R8OpbsOpcmF0aW9uIDoge3Bva2Vtb24uYXBpR2VuZXJhdGlvbn08L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIHtwb2tlbW9uLmFwaVR5cGVzLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0eXBlLmltYWdlfSBhbHQ9e3R5cGUubmFtZX0gY2xhc3NOYW1lPVwidy00XCIgLz5cbiAgICAgICAgICAgICAgICA8cD57dHlwZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTQwMCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPHA+UFYgOiB7cG9rZW1vbi5zdGF0cy5IUH08L3A+XG4gICAgICAgICAgICA8cD5BdHRhcXVlIDoge3Bva2Vtb24uc3RhdHMuYXR0YWNrfTwvcD5cbiAgICAgICAgICAgIDxwPkTDqWZlbnNlIDoge3Bva2Vtb24uc3RhdHMuZGVmZW5zZX08L3A+XG4gICAgICAgICAgICA8cD5BdHRhcXVlIHNww6ljaWFsZSA6IHtwb2tlbW9uLnN0YXRzLnNwZWNpYWxfYXR0YWNrfTwvcD5cbiAgICAgICAgICAgIDxwPkTDqWZlbnNlIHNww6ljaWFsZSA6IHtwb2tlbW9uLnN0YXRzLnNwZWNpYWxfZGVmZW5zZX08L3A+XG4gICAgICAgICAgICA8cD5WaXRlc3NlIDoge3Bva2Vtb24uc3RhdHMuc3BlZWR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcG9rZWJ1aWxkYXBpLmZyL2FwaS92MS9wb2tlbW9uLyR7cGFyYW1zLmlkfWBcbiAgKTtcbiAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9rZW1vbixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYnVpbGRhcGkuZnIvYXBpL3YxL3Bva2Vtb25cIik7XG4gIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb2tlbW9ucy5tYXAoKHBva2Vtb24pID0+ICh7XG4gICAgICBwYXJhbXM6IHsgaWQ6IHBva2Vtb24uaWQudG9TdHJpbmcoKSB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsIC8vc2kgcm91dGUgdW5rbm93IDogNDA0XG4gIH07XG59XG4iXSwibmFtZXMiOlsiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwiYXBpRXZvbHV0aW9ucyIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJoMiIsInBva2VkZXhJZCIsImRpdiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwicCIsImFwaUdlbmVyYXRpb24iLCJhcGlUeXBlcyIsIm1hcCIsInR5cGUiLCJzdGF0cyIsIkhQIiwiYXR0YWNrIiwiZGVmZW5zZSIsInNwZWNpYWxfYXR0YWNrIiwic3BlY2lhbF9kZWZlbnNlIiwic3BlZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/[id].jsx\n"));

/***/ })

});