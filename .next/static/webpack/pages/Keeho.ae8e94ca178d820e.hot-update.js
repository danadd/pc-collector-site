"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Keeho",{

/***/ "./pages/Keeho.js":
/*!************************!*\
  !*** ./pages/Keeho.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"../../../../node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _KeehoAlbum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeehoAlbum */ \"./pages/KeehoAlbum.js\");\n/* harmony import */ var _KeehoNonAlbum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeehoNonAlbum */ \"./pages/KeehoNonAlbum.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n// Select from album PCs or non-album PCs here\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Keeho = ()=>{\n    _s();\n    const [albumClicked, setAlbumClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nonAlbumClicked, setNonAlbumClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = (e)=>{\n        e.preventDefault();\n        setAlbumClicked((value)=>!value);\n    };\n    const handleNonAlbumClick = (e)=>{\n        e.preventDefault();\n        setNonAlbumClicked((value)=>!value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pc-type-selection-container container col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                class: \"btn btn-primary\",\n                onClick: handleClick,\n                children: \"Keeho Album PCs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                class: \"btn btn-primary\",\n                onClick: handleNonAlbumClick,\n                children: \"Keeho Non-Album PCs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            albumClicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_KeehoAlbum__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 34,\n                columnNumber: 23\n            }, undefined) : null,\n            nonAlbumClicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_KeehoNonAlbum__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 36,\n                columnNumber: 26\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/Home\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    class: \"btn btn-primary\",\n                    children: \"Back To Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\Keeho.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Keeho, \"lI530M+QlFptza1ZdjEr8ERTs9E=\");\n_c = Keeho;\n// From this page the user can select which type of PCs they'd like to look at. Once they click then show the list of PCs on this page. I think that makes most sense instead of taking them to a whole nother page.\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keeho);\nvar _c;\n$RefreshReg$(_c, \"Keeho\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9LZWVoby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhDQUE4Qzs7O0FBRXBCO0FBQ087QUFDYTtBQUNSO0FBQ007QUFDZjtBQUU3QixNQUFNSyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVELE1BQU1TLGNBQWMsQ0FBQ0MsSUFBTTtRQUN6QkEsRUFBRUMsY0FBYztRQUNoQkwsZ0JBQWdCLENBQUNNLFFBQVUsQ0FBQ0E7SUFDOUI7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0gsSUFBTTtRQUNqQ0EsRUFBRUMsY0FBYztRQUNoQkgsbUJBQW1CLENBQUNJLFFBQVUsQ0FBQ0E7SUFDakM7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPQyxNQUFLO2dCQUFTQyxPQUFNO2dCQUFrQkMsU0FBU1Y7MEJBQWE7Ozs7OzswQkFJcEUsOERBQUNPO2dCQUFPQyxNQUFLO2dCQUFTQyxPQUFNO2dCQUFrQkMsU0FBU047MEJBQXFCOzs7Ozs7WUFJM0VSLDZCQUFlLDhEQUFDSixtREFBVUE7Ozs7NEJBQU0sSUFBSTtZQUVwQ00sZ0NBQWtCLDhEQUFDTCxzREFBYUE7Ozs7NEJBQU0sSUFBSTswQkFFM0MsOERBQUNDLGtEQUFJQTtnQkFBQ2lCLE1BQUs7MEJBQ1QsNEVBQUNKO29CQUFPQyxNQUFLO29CQUFTQyxPQUFNOzhCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQ7R0FuQ01kO0tBQUFBO0FBcUNOLG9OQUFvTjtBQUVwTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9LZWVoby5qcz84NzIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNlbGVjdCBmcm9tIGFsYnVtIFBDcyBvciBub24tYWxidW0gUENzIGhlcmVcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBLZWVob0FsYnVtIGZyb20gXCIuL0tlZWhvQWxidW1cIjtcclxuaW1wb3J0IEtlZWhvTm9uQWxidW0gZnJvbSBcIi4vS2VlaG9Ob25BbGJ1bVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBLZWVobyA9ICgpID0+IHtcclxuICBjb25zdCBbYWxidW1DbGlja2VkLCBzZXRBbGJ1bUNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtub25BbGJ1bUNsaWNrZWQsIHNldE5vbkFsYnVtQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEFsYnVtQ2xpY2tlZCgodmFsdWUpID0+ICF2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTm9uQWxidW1DbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXROb25BbGJ1bUNsaWNrZWQoKHZhbHVlKSA9PiAhdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBjLXR5cGUtc2VsZWN0aW9uLWNvbnRhaW5lciBjb250YWluZXIgY29sXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIEtlZWhvIEFsYnVtIFBDc1xyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTm9uQWxidW1DbGlja30+XHJcbiAgICAgICAgS2VlaG8gTm9uLUFsYnVtIFBDc1xyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHthbGJ1bUNsaWNrZWQgPyA8S2VlaG9BbGJ1bSAvPiA6IG51bGx9XHJcblxyXG4gICAgICB7bm9uQWxidW1DbGlja2VkID8gPEtlZWhvTm9uQWxidW0gLz4gOiBudWxsfVxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9Ib21lXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgIEJhY2sgVG8gSG9tZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRnJvbSB0aGlzIHBhZ2UgdGhlIHVzZXIgY2FuIHNlbGVjdCB3aGljaCB0eXBlIG9mIFBDcyB0aGV5J2QgbGlrZSB0byBsb29rIGF0LiBPbmNlIHRoZXkgY2xpY2sgdGhlbiBzaG93IHRoZSBsaXN0IG9mIFBDcyBvbiB0aGlzIHBhZ2UuIEkgdGhpbmsgdGhhdCBtYWtlcyBtb3N0IHNlbnNlIGluc3RlYWQgb2YgdGFraW5nIHRoZW0gdG8gYSB3aG9sZSBub3RoZXIgcGFnZS5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtlZWhvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIktlZWhvQWxidW0iLCJLZWVob05vbkFsYnVtIiwiTGluayIsIktlZWhvIiwiYWxidW1DbGlja2VkIiwic2V0QWxidW1DbGlja2VkIiwibm9uQWxidW1DbGlja2VkIiwic2V0Tm9uQWxidW1DbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImhhbmRsZU5vbkFsYnVtQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3MiLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Keeho.js\n"));

/***/ })

});