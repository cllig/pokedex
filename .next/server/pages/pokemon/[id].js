"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/pokemon/[id]";
exports.ids = ["pages/pokemon/[id]"];
exports.modules = {

/***/ "./pages/pokemon/[id].jsx":
/*!********************************!*\
  !*** ./pages/pokemon/[id].jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pokemon),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Pokemon({ pokemon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    pokemon.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: pokemon.id\n            }, void 0, false, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: pokemon.stats.HP\n            }, void 0, false, {\n                fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subclic/Documents/code/pokedex/pages/pokemon/[id].jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps({ params  }) {\n    const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${params.id}`);\n    const pokemon = await res.json();\n    return {\n        props: {\n            pokemon\n        }\n    };\n}\nasync function getStaticPaths() {\n    const res = await fetch(\"https://pokebuildapi.fr/api/v1/pokemon\");\n    const pokemons = await res.json();\n    return {\n        paths: pokemons.map((pokemon)=>({\n                params: {\n                    id: pokemon.id.toString()\n                }\n            })),\n        fallback: false\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxRQUFRLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBQzNDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOztvQkFBSUYsUUFBUUcsSUFBSTtvQkFBQzs7Ozs7OzswQkFDbEIsOERBQUNDOzBCQUFHSixRQUFRSyxFQUFFOzs7Ozs7MEJBQ2QsOERBQUNEOzBCQUFHSixRQUFRTSxLQUFLLENBQUNDLEVBQUU7Ozs7Ozs7Ozs7OztBQUcxQixDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUMvQyxNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLENBQUMsdUNBQXVDLEVBQUVGLE9BQU9KLEVBQUUsQ0FBQyxDQUFDO0lBRXZELE1BQU1MLFVBQVUsTUFBTVUsSUFBSUUsSUFBSTtJQUU5QixPQUFPO1FBQ0xDLE9BQU87WUFDTGI7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVNLGVBQWVjLGlCQUFpQjtJQUNyQyxNQUFNSixNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTUksV0FBVyxNQUFNTCxJQUFJRSxJQUFJO0lBRS9CLE9BQU87UUFDTEksT0FBT0QsU0FBU0UsR0FBRyxDQUFDLENBQUNqQixVQUFhO2dCQUNoQ1MsUUFBUTtvQkFBRUosSUFBSUwsUUFBUUssRUFBRSxDQUFDYSxRQUFRO2dCQUFHO1lBQ3RDO1FBQ0FDLFVBQVUsS0FBSztJQUNqQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlZGV4Ly4vcGFnZXMvcG9rZW1vbi9baWRdLmpzeD9lMzJiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb24oeyBwb2tlbW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntwb2tlbW9uLm5hbWV9IDwvaDE+XG4gICAgICA8cD57cG9rZW1vbi5pZH08L3A+XG4gICAgICA8cD57cG9rZW1vbi5zdGF0cy5IUH08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3Bva2VidWlsZGFwaS5mci9hcGkvdjEvcG9rZW1vbi8ke3BhcmFtcy5pZH1gXG4gICk7XG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBva2Vtb24sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG9rZWJ1aWxkYXBpLmZyL2FwaS92MS9wb2tlbW9uXCIpO1xuICBjb25zdCBwb2tlbW9ucyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IGlkOiBwb2tlbW9uLmlkLnRvU3RyaW5nKCkgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvL3NpIGlkIHVua25vdyA6IDQwNFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwiZGl2IiwiaDEiLCJuYW1lIiwicCIsImlkIiwic3RhdHMiLCJIUCIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBva2Vtb25zIiwicGF0aHMiLCJtYXAiLCJ0b1N0cmluZyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon/[id].jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[id].jsx"));
module.exports = __webpack_exports__;

})();