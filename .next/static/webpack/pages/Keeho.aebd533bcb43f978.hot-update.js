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

/***/ "./pages/WishlistMenu.js":
/*!*******************************!*\
  !*** ./pages/WishlistMenu.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"../../../../node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"../../../../node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\n\nconst WishlistMenu = ({ onFavoriteClick , onCollectedClick  })=>{\n    const handleFavoriteClick = ()=>{\n        onFavoriteClick();\n    };\n    const handleCollectedClick = ()=>{\n        onCollectedClick();\n    };\n    const handleOTWClick = ()=>{\n        onOTWClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pc-option-menu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                className: \"icon\",\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                onClick: handleFavoriteClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\WishlistMenu.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faHeartCirclePlus,\n                onClick: handleCollectedClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\WishlistMenu.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlane,\n                onClick: handleOTWClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\WishlistMenu.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\WishlistMenu.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WishlistMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WishlistMenu);\nvar _c;\n$RefreshReg$(_c, \"WishlistMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XaXNobGlzdE1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDVTtBQUNzQjtBQUV2RixNQUFNSSxlQUFlLENBQUMsRUFBRUMsZ0JBQWUsRUFBRUMsaUJBQWdCLEVBQUUsR0FBSztJQUM5RCxNQUFNQyxzQkFBc0IsSUFBTTtRQUNoQ0Y7SUFDRjtJQUVBLE1BQU1HLHVCQUF1QixJQUFNO1FBQ2pDRjtJQUNGO0lBRUEsTUFBTUcsaUJBQWlCLElBQU07UUFDM0JDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNaLDJFQUFlQTtnQkFBQ1ksV0FBVTtnQkFBT0MsTUFBTVoscUVBQU1BO2dCQUFFYSxTQUFTUDs7Ozs7OzBCQUV6RCw4REFBQ1AsMkVBQWVBO2dCQUFDYSxNQUFNWCxnRkFBaUJBO2dCQUFFWSxTQUFTTjs7Ozs7OzBCQUNuRCw4REFBQ1IsMkVBQWVBO2dCQUFDYSxNQUFNVixzRUFBT0E7Z0JBQUVXLFNBQVNMOzs7Ozs7Ozs7Ozs7QUFHL0M7S0FyQk1MO0FBdUJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1dpc2hsaXN0TWVudS5qcz9jMjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU3RhciwgZmFIZWFydENpcmNsZVBsdXMsIGZhUGxhbmUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBXaXNobGlzdE1lbnUgPSAoeyBvbkZhdm9yaXRlQ2xpY2ssIG9uQ29sbGVjdGVkQ2xpY2sgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUZhdm9yaXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvbkZhdm9yaXRlQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xsZWN0ZWRDbGljayA9ICgpID0+IHtcclxuICAgIG9uQ29sbGVjdGVkQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPVFdDbGljayA9ICgpID0+IHtcclxuICAgIG9uT1RXQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYy1vcHRpb24tbWVudVwiPlxyXG4gICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImljb25cIiBpY29uPXtmYVN0YXJ9IG9uQ2xpY2s9e2hhbmRsZUZhdm9yaXRlQ2xpY2t9IC8+XHJcbiAgICAgIHsvKiBvbiBjbGljayBzYXZlIHRvIHRoZSBhcHByb3ByaWF0ZSBsaXN0ICovfVxyXG4gICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnRDaXJjbGVQbHVzfSBvbkNsaWNrPXtoYW5kbGVDb2xsZWN0ZWRDbGlja30gLz5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsYW5lfSBvbkNsaWNrPXtoYW5kbGVPVFdDbGlja30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXNobGlzdE1lbnU7XHJcbiJdLCJuYW1lcyI6WyJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJmYUhlYXJ0Q2lyY2xlUGx1cyIsImZhUGxhbmUiLCJXaXNobGlzdE1lbnUiLCJvbkZhdm9yaXRlQ2xpY2siLCJvbkNvbGxlY3RlZENsaWNrIiwiaGFuZGxlRmF2b3JpdGVDbGljayIsImhhbmRsZUNvbGxlY3RlZENsaWNrIiwiaGFuZGxlT1RXQ2xpY2siLCJvbk9UV0NsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/WishlistMenu.js\n"));

/***/ })

});