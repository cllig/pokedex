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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pokemon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSG = true;\nfunction Pokemon(param) {\n    var pokemon = param.pokemon;\n    var _this = this;\n    // const [evolution, seTevolution] = useState();\n    console.log(pokemon.apiEvolutions[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: pokemon.name\n            }, void 0, false, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pokemon.image,\n                        alt: pokemon.name,\n                        className: \"bg-slate-200 rounded-lg mx-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-slate-500 text-start\",\n                                children: [\n                                    \"N\\xb0\",\n                                    pokemon.pokedexId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"G\\xe9n\\xe9ration : \",\n                                    pokemon.apiGeneration\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: pokemon.apiTypes.map(function(type) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: type.image,\n                                                alt: type.name,\n                                                className: \"w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                                lineNumber: 22,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: type.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-500 p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"PV : \",\n                                            pokemon.stats.HP\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Attaque : \",\n                                            pokemon.stats.attack\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"D\\xe9fense : \",\n                                            pokemon.stats.defense\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Attaque sp\\xe9ciale : \",\n                                            pokemon.stats.special_attack\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"D\\xe9fense sp\\xe9ciale : \",\n                                            pokemon.stats.special_defense\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Vitesse : \",\n                                            pokemon.stats.speed\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Pokemon;\nvar _c;\n$RefreshReg$(_c, \"Pokemon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBZSxTQUFTQSxRQUFRLEtBQVcsRUFBRTtRQUFiLGdCQUFFQzs7SUFDaEMsZ0RBQWdEO0lBRWhEQyxRQUFRQyxHQUFHLENBQUNGLFFBQVFHLGFBQWEsQ0FBQyxFQUFFO0lBRXBDLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7MEJBQUlOLFFBQVFPLElBQUk7Ozs7OzswQkFDakIsOERBQUNDO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQ0NDLEtBQUtWLFFBQVFXLEtBQUs7d0JBQ2xCQyxLQUFLWixRQUFRTyxJQUFJO3dCQUNqQkYsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRzt3QkFBSUgsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFFUixXQUFVOztvQ0FBNEI7b0NBQUdMLFFBQVFjLFNBQVM7Ozs7Ozs7MENBQzdELDhEQUFDRDs7b0NBQUU7b0NBQWNiLFFBQVFlLGFBQWE7Ozs7Ozs7MENBRXRDLDhEQUFDUDtnQ0FBSUgsV0FBVTswQ0FDWkwsUUFBUWdCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDO3lEQUNyQiw4REFBQ1Y7OzBEQUNDLDhEQUFDQztnREFBSUMsS0FBS1EsS0FBS1AsS0FBSztnREFBRUMsS0FBS00sS0FBS1gsSUFBSTtnREFBRUYsV0FBVTs7Ozs7OzBEQUNoRCw4REFBQ1E7MERBQUdLLEtBQUtYLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJbkIsOERBQUNDO2dDQUFJSCxXQUFVOztrREFDYiw4REFBQ1E7OzRDQUFFOzRDQUFNYixRQUFRbUIsS0FBSyxDQUFDQyxFQUFFOzs7Ozs7O2tEQUN6Qiw4REFBQ1A7OzRDQUFFOzRDQUFXYixRQUFRbUIsS0FBSyxDQUFDRSxNQUFNOzs7Ozs7O2tEQUNsQyw4REFBQ1I7OzRDQUFFOzRDQUFXYixRQUFRbUIsS0FBSyxDQUFDRyxPQUFPOzs7Ozs7O2tEQUNuQyw4REFBQ1Q7OzRDQUFFOzRDQUFvQmIsUUFBUW1CLEtBQUssQ0FBQ0ksY0FBYzs7Ozs7OztrREFDbkQsOERBQUNWOzs0Q0FBRTs0Q0FBb0JiLFFBQVFtQixLQUFLLENBQUNLLGVBQWU7Ozs7Ozs7a0RBQ3BELDhEQUFDWDs7NENBQUU7NENBQVdiLFFBQVFtQixLQUFLLENBQUNNLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0MsQ0FBQztLQXRDdUIxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb2tlbW9uL1tpZF0uanN4P2UzMmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vbih7IHBva2Vtb24gfSkge1xuICAvLyBjb25zdCBbZXZvbHV0aW9uLCBzZVRldm9sdXRpb25dID0gdXNlU3RhdGUoKTtcblxuICBjb25zb2xlLmxvZyhwb2tlbW9uLmFwaUV2b2x1dGlvbnNbMF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICA8aDE+e3Bva2Vtb24ubmFtZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LThcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cG9rZW1vbi5pbWFnZX1cbiAgICAgICAgICBhbHQ9e3Bva2Vtb24ubmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgcm91bmRlZC1sZyBteC04XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgdGV4dC1zdGFydFwiPk7CsHtwb2tlbW9uLnBva2VkZXhJZH08L3A+XG4gICAgICAgICAgPHA+R8OpbsOpcmF0aW9uIDoge3Bva2Vtb24uYXBpR2VuZXJhdGlvbn08L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIHtwb2tlbW9uLmFwaVR5cGVzLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0eXBlLmltYWdlfSBhbHQ9e3R5cGUubmFtZX0gY2xhc3NOYW1lPVwidy00XCIgLz5cbiAgICAgICAgICAgICAgICA8cD57dHlwZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwMCBwLTRcIj5cbiAgICAgICAgICAgIDxwPlBWIDoge3Bva2Vtb24uc3RhdHMuSFB9PC9wPlxuICAgICAgICAgICAgPHA+QXR0YXF1ZSA6IHtwb2tlbW9uLnN0YXRzLmF0dGFja308L3A+XG4gICAgICAgICAgICA8cD5Ew6lmZW5zZSA6IHtwb2tlbW9uLnN0YXRzLmRlZmVuc2V9PC9wPlxuICAgICAgICAgICAgPHA+QXR0YXF1ZSBzcMOpY2lhbGUgOiB7cG9rZW1vbi5zdGF0cy5zcGVjaWFsX2F0dGFja308L3A+XG4gICAgICAgICAgICA8cD5Ew6lmZW5zZSBzcMOpY2lhbGUgOiB7cG9rZW1vbi5zdGF0cy5zcGVjaWFsX2RlZmVuc2V9PC9wPlxuICAgICAgICAgICAgPHA+Vml0ZXNzZSA6IHtwb2tlbW9uLnN0YXRzLnNwZWVkfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3Bva2VidWlsZGFwaS5mci9hcGkvdjEvcG9rZW1vbi8ke3BhcmFtcy5pZH1gXG4gICk7XG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBva2Vtb24sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG9rZWJ1aWxkYXBpLmZyL2FwaS92MS9wb2tlbW9uXCIpO1xuICBjb25zdCBwb2tlbW9ucyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IGlkOiBwb2tlbW9uLmlkLnRvU3RyaW5nKCkgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvL3NpIHJvdXRlIHVua25vdyA6IDQwNFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyIsImFwaUV2b2x1dGlvbnMiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwIiwicG9rZWRleElkIiwiYXBpR2VuZXJhdGlvbiIsImFwaVR5cGVzIiwibWFwIiwidHlwZSIsInN0YXRzIiwiSFAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlY2lhbF9hdHRhY2siLCJzcGVjaWFsX2RlZmVuc2UiLCJzcGVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon/[id].jsx\n"));

/***/ })

});