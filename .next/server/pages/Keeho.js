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
exports.id = "pages/Keeho";
exports.ids = ["pages/Keeho"];
exports.modules = {

/***/ "./pages/Keeho.js":
/*!************************!*\
  !*** ./pages/Keeho.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"../../../../node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _KeehoAlbum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeehoAlbum */ \"./pages/KeehoAlbum.js\");\n/* harmony import */ var _KeehoNonAlbum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeehoNonAlbum */ \"./pages/KeehoNonAlbum.js\");\n// Select from album PCs or non-album PCs here\n\n\n\n\n\n\nconst Keeho = ()=>{\n    const [albumClicked, setAlbumClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nonAlbumClicked, setNonAlbumClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = (e)=>{\n        e.preventDefault();\n        setAlbumClicked((value)=>!value);\n    };\n    const handleNonAlbumClick = (e)=>{\n        e.preventDefault();\n        setNonAlbumClicked((value)=>!value);\n    };\n    console.log(albumClicked);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pc-type-selection-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                class: \"btn btn-primary\",\n                onClick: handleClick,\n                children: \"Keeho Album PCs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            albumClicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_KeehoAlbum__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 29,\n                columnNumber: 23\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                class: \"btn btn-primary\",\n                onClick: handleNonAlbumClick,\n                children: \"Keeho Album PCs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            nonAlbumClicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_KeehoNonAlbum__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 34,\n                columnNumber: 26\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n// From this page the user can select which type of PCs they'd like to look at. Once they click then show the list of PCs on this page. I think that makes most sense instead of taking them to a whole nother page.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keeho);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9LZWVoby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBOEM7O0FBRXBCO0FBQ087QUFDYTtBQUNSO0FBQ007QUFFNUMsTUFBTUksUUFBUSxJQUFNO0lBQ2xCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDTSxpQkFBaUJDLG1CQUFtQixHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVELE1BQU1RLGNBQWMsQ0FBQ0MsSUFBTTtRQUN6QkEsRUFBRUMsY0FBYztRQUNoQkwsZ0JBQWdCLENBQUNNLFFBQVUsQ0FBQ0E7SUFDOUI7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0gsSUFBTTtRQUNqQ0EsRUFBRUMsY0FBYztRQUNoQkgsbUJBQW1CLENBQUNJLFFBQVUsQ0FBQ0E7SUFDakM7SUFFQUUsUUFBUUMsR0FBRyxDQUFDVjtJQUNaLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9DLE1BQUs7Z0JBQVNDLE9BQU07Z0JBQWtCQyxTQUFTWjswQkFBYTs7Ozs7O1lBR25FSiw2QkFBZSw4REFBQ0gsbURBQVVBOzs7OzRCQUFNLElBQUk7MEJBRXJDLDhEQUFDZ0I7Z0JBQU9DLE1BQUs7Z0JBQVNDLE9BQU07Z0JBQWtCQyxTQUFTUjswQkFBcUI7Ozs7OztZQUczRU4sZ0NBQWtCLDhEQUFDSixzREFBYUE7Ozs7NEJBQU0sSUFBSTs7Ozs7OztBQUdqRDtBQUVBLG9OQUFvTjtBQUVwTixpRUFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BjLWNvbGxlY3Rvci1zaXRlLy4vcGFnZXMvS2VlaG8uanM/ODcyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWxlY3QgZnJvbSBhbGJ1bSBQQ3Mgb3Igbm9uLWFsYnVtIFBDcyBoZXJlXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgS2VlaG9BbGJ1bSBmcm9tIFwiLi9LZWVob0FsYnVtXCI7XHJcbmltcG9ydCBLZWVob05vbkFsYnVtIGZyb20gXCIuL0tlZWhvTm9uQWxidW1cIjtcclxuXHJcbmNvbnN0IEtlZWhvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthbGJ1bUNsaWNrZWQsIHNldEFsYnVtQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25vbkFsYnVtQ2xpY2tlZCwgc2V0Tm9uQWxidW1DbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0QWxidW1DbGlja2VkKCh2YWx1ZSkgPT4gIXZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVOb25BbGJ1bUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldE5vbkFsYnVtQ2xpY2tlZCgodmFsdWUpID0+ICF2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coYWxidW1DbGlja2VkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYy10eXBlLXNlbGVjdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgS2VlaG8gQWxidW0gUENzXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7YWxidW1DbGlja2VkID8gPEtlZWhvQWxidW0gLz4gOiBudWxsfVxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVOb25BbGJ1bUNsaWNrfT5cclxuICAgICAgICBLZWVobyBBbGJ1bSBQQ3NcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtub25BbGJ1bUNsaWNrZWQgPyA8S2VlaG9Ob25BbGJ1bSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRnJvbSB0aGlzIHBhZ2UgdGhlIHVzZXIgY2FuIHNlbGVjdCB3aGljaCB0eXBlIG9mIFBDcyB0aGV5J2QgbGlrZSB0byBsb29rIGF0LiBPbmNlIHRoZXkgY2xpY2sgdGhlbiBzaG93IHRoZSBsaXN0IG9mIFBDcyBvbiB0aGlzIHBhZ2UuIEkgdGhpbmsgdGhhdCBtYWtlcyBtb3N0IHNlbnNlIGluc3RlYWQgb2YgdGFraW5nIHRoZW0gdG8gYSB3aG9sZSBub3RoZXIgcGFnZS5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtlZWhvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIktlZWhvQWxidW0iLCJLZWVob05vbkFsYnVtIiwiS2VlaG8iLCJhbGJ1bUNsaWNrZWQiLCJzZXRBbGJ1bUNsaWNrZWQiLCJub25BbGJ1bUNsaWNrZWQiLCJzZXROb25BbGJ1bUNsaWNrZWQiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiaGFuZGxlTm9uQWxidW1DbGljayIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3MiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Keeho.js\n");

/***/ }),

/***/ "./pages/KeehoAlbum.js":
/*!*****************************!*\
  !*** ./pages/KeehoAlbum.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst KeehoAlbum = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pc-list-container\",\n        children: [\n            \"I am keeho album PC List\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\KeehoAlbum.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\KeehoAlbum.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeehoAlbum);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9LZWVob0FsYnVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxhQUFhLElBQU07SUFDdkIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQW9COzBCQUVqQyw4REFBQ0Q7Ozs7Ozs7Ozs7O0FBR1A7QUFFQSxpRUFBZUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BjLWNvbGxlY3Rvci1zaXRlLy4vcGFnZXMvS2VlaG9BbGJ1bS5qcz84NzZmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEtlZWhvQWxidW0gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGMtbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgSSBhbSBrZWVobyBhbGJ1bSBQQyBMaXN0XHJcbiAgICAgIDxkaXY+ey8qIENvbHVtbnMgb2YgMy01IGNhcmRzIHBlciByb3cgb24gYSBtZWRpdW0gbGFwdG9wIHNjcmVlbiAqL308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZWVob0FsYnVtO1xyXG4iXSwibmFtZXMiOlsiS2VlaG9BbGJ1bSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/KeehoAlbum.js\n");

/***/ }),

/***/ "./pages/KeehoNonAlbum.js":
/*!********************************!*\
  !*** ./pages/KeehoNonAlbum.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst KeehoNonAlbum = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pc-list-container\",\n        children: [\n            \"I am keeho non-album PC List\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\KeehoNonAlbum.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\KeehoNonAlbum.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeehoNonAlbum);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9LZWVob05vbkFsYnVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxnQkFBZ0IsSUFBTTtJQUMxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFBb0I7MEJBRWpDLDhEQUFDRDs7Ozs7Ozs7Ozs7QUFHUDtBQUVBLGlFQUFlRCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGMtY29sbGVjdG9yLXNpdGUvLi9wYWdlcy9LZWVob05vbkFsYnVtLmpzPzU4MzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgS2VlaG9Ob25BbGJ1bSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYy1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICBJIGFtIGtlZWhvIG5vbi1hbGJ1bSBQQyBMaXN0XHJcbiAgICAgIDxkaXY+ey8qIENvbHVtbnMgb2YgMy01IGNhcmRzIHBlciByb3cgb24gYSBtZWRpdW0gbGFwdG9wIHNjcmVlbiAqL308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZWVob05vbkFsYnVtO1xyXG4iXSwibmFtZXMiOlsiS2VlaG9Ob25BbGJ1bSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/KeehoNonAlbum.js\n");

/***/ }),

/***/ "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!*********************************************************************!*\
  !*** ../../../../node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \*********************************************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Keeho.js"));
module.exports = __webpack_exports__;

})();