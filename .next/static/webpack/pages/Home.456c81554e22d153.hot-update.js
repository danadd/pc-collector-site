"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Home",{

/***/ "./pages/SearchBar.js":
/*!****************************!*\
  !*** ./pages/SearchBar.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"members\": function() { return /* binding */ members; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// move this to an API or json later\nconst members = [\n    {\n        name: \"Keeho\",\n        group: \"P1Harmony\",\n        id: 1,\n        url: \"/Keeho\",\n        img: \"keeho.png\"\n    },\n    {\n        name: \"Theo\",\n        group: \"P1Harmony\",\n        id: 2,\n        url: \"\"\n    },\n    {\n        name: \"Jiung\",\n        group: \"P1Harmony\",\n        id: 3,\n        url: \"\"\n    },\n    {\n        name: \"Intak\",\n        group: \"P1Harmony\",\n        id: 4,\n        url: \"\"\n    },\n    {\n        name: \"Soul\",\n        group: \"P1Harmony\",\n        id: 5,\n        url: \"\"\n    },\n    {\n        name: \"Jongseob\",\n        group: \"P1Harmony\",\n        id: 6,\n        url: \"\"\n    }\n];\nconst SearchBar = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setSearchInput(e.target.value);\n    };\n    const filteredMemberAndGroupList = members.filter((memberGroup)=>memberGroup.name.toLowerCase().startsWith(searchInput.toLowerCase()) || memberGroup.group.toLowerCase().includes(searchInput.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"searchbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search by group or member\",\n                onChange: handleChange,\n                value: searchInput\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"member-card-list\",\n                children: searchInput > 0 ? filteredMemberAndGroupList.map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: member.img,\n                                className: \"pc_image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: member.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: member.group\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: member.url,\n                                    children: \"Go to my PC List\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, member.id, true, {\n                        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)) : // needs to display ONLY if they have typed in the bar\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"No results found! Try another search.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"7jaUvtQT89vZZF+Gjg+8PUuVm+0=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TZWFyY2hCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVqQyxvQ0FBb0M7QUFDN0IsTUFBTUMsVUFBVTtJQUNyQjtRQUNFQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLEtBQUs7SUFDUDtJQUNBO1FBQ0VKLE1BQU07UUFDTkMsT0FBTztRQUNQQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQUVILE1BQU07UUFBU0MsT0FBTztRQUFhQyxJQUFJO1FBQUdDLEtBQUs7SUFBRztJQUNwRDtRQUFFSCxNQUFNO1FBQVNDLE9BQU87UUFBYUMsSUFBSTtRQUFHQyxLQUFLO0lBQUc7SUFDcEQ7UUFBRUgsTUFBTTtRQUFRQyxPQUFPO1FBQWFDLElBQUk7UUFBR0MsS0FBSztJQUFHO0lBQ25EO1FBQUVILE1BQU07UUFBWUMsT0FBTztRQUFhQyxJQUFJO1FBQUdDLEtBQUs7SUFBRztDQUN4RCxDQUFDO0FBRUYsTUFBTUUsWUFBWSxJQUFNOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVUsZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSCxlQUFlRSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxNQUFNQyw2QkFBNkJkLFFBQVFlLE1BQU0sQ0FDL0MsQ0FBQ0MsY0FDQ0EsWUFBWWYsSUFBSSxDQUFDZ0IsV0FBVyxHQUFHQyxVQUFVLENBQUNYLFlBQVlVLFdBQVcsT0FDakVELFlBQVlkLEtBQUssQ0FBQ2UsV0FBVyxHQUFHRSxRQUFRLENBQUNaLFlBQVlVLFdBQVc7SUFHcEUscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsVUFBVWhCO2dCQUNWSSxPQUFPTjs7Ozs7OzBCQUVULDhEQUFDYTtnQkFBSUMsV0FBVTswQkFDWmQsY0FBYyxJQUNiTywyQkFBMkJZLEdBQUcsQ0FBQyxDQUFDQyx1QkFDOUIsOERBQUNQOzswQ0FDQyw4REFBQ2Y7Z0NBQUl1QixLQUFLRCxPQUFPdEIsR0FBRztnQ0FBRWdCLFdBQVU7Ozs7OzswQ0FDaEMsOERBQUNROzBDQUFNRixPQUFPMUIsSUFBSTs7Ozs7OzBDQUNsQiw4REFBQzRCOzBDQUFNRixPQUFPekIsS0FBSzs7Ozs7OzBDQUNuQiw4REFBQzJCOzs7OzswQ0FDRCw4REFBQ0E7MENBQ0MsNEVBQUNDO29DQUFFQyxNQUFNSixPQUFPdkIsR0FBRzs4Q0FBRTs7Ozs7Ozs7Ozs7O3VCQU5mdUIsT0FBT3hCLEVBQUU7Ozs7cUNBYXJCLHNEQUFzRDs4QkFDdEQsOERBQUM2Qjs4QkFBRzs7Ozs7NkJBQ0w7Ozs7Ozs7Ozs7OztBQUlUO0dBNUNNMUI7S0FBQUE7QUE2Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VhcmNoQmFyLmpzPzEzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIG1vdmUgdGhpcyB0byBhbiBBUEkgb3IganNvbiBsYXRlclxyXG5leHBvcnQgY29uc3QgbWVtYmVycyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIktlZWhvXCIsXHJcbiAgICBncm91cDogXCJQMUhhcm1vbnlcIixcclxuICAgIGlkOiAxLFxyXG4gICAgdXJsOiBcIi9LZWVob1wiLFxyXG4gICAgaW1nOiBcImtlZWhvLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaGVvXCIsXHJcbiAgICBncm91cDogXCJQMUhhcm1vbnlcIixcclxuICAgIGlkOiAyLFxyXG4gICAgdXJsOiBcIlwiLFxyXG4gIH0sXHJcbiAgeyBuYW1lOiBcIkppdW5nXCIsIGdyb3VwOiBcIlAxSGFybW9ueVwiLCBpZDogMywgdXJsOiBcIlwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGFrXCIsIGdyb3VwOiBcIlAxSGFybW9ueVwiLCBpZDogNCwgdXJsOiBcIlwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdWxcIiwgZ3JvdXA6IFwiUDFIYXJtb255XCIsIGlkOiA1LCB1cmw6IFwiXCIgfSxcclxuICB7IG5hbWU6IFwiSm9uZ3Nlb2JcIiwgZ3JvdXA6IFwiUDFIYXJtb255XCIsIGlkOiA2LCB1cmw6IFwiXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkTWVtYmVyQW5kR3JvdXBMaXN0ID0gbWVtYmVycy5maWx0ZXIoXHJcbiAgICAobWVtYmVyR3JvdXApID0+XHJcbiAgICAgIG1lbWJlckdyb3VwLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgIG1lbWJlckdyb3VwLmdyb3VwLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBncm91cCBvciBtZW1iZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1jYXJkLWxpc3RcIj5cclxuICAgICAgICB7c2VhcmNoSW5wdXQgPiAwID8gKFxyXG4gICAgICAgICAgZmlsdGVyZWRNZW1iZXJBbmRHcm91cExpc3QubWFwKChtZW1iZXIpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e21lbWJlci5pZH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e21lbWJlci5pbWd9IGNsYXNzTmFtZT1cInBjX2ltYWdlXCIgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj57bWVtYmVyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnttZW1iZXIuZ3JvdXB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lbWJlci51cmx9PkdvIHRvIG15IFBDIExpc3Q8L2E+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHsvKiB3b3VsZCBiZSBoZWxwZnVsIHRvIGhhdmUgYSBwaWN0dXJlIG9mIHRoZSBtZW1iZXIgZm9yIG5ldyBmYW5zL3Blb3BsZS4gKi99XHJcbiAgICAgICAgICAgICAgey8qIFdvdWxkIGl0IG1ha2Ugc2Vuc2UgZm9yIGEgdXNlciB0byBjbGljayBvbiBub24tYWxidW0gb3IgYWxidW0gUEMgZnJvbSBoZXJlPyBJdCB3b3VsZCBzYXZlIG9uIHNvbWUgY29kZSBmb3Igbm93ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIC8vIG5lZWRzIHRvIGRpc3BsYXkgT05MWSBpZiB0aGV5IGhhdmUgdHlwZWQgaW4gdGhlIGJhclxyXG4gICAgICAgICAgPGgxPk5vIHJlc3VsdHMgZm91bmQhIFRyeSBhbm90aGVyIHNlYXJjaC48L2gxPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtZW1iZXJzIiwibmFtZSIsImdyb3VwIiwiaWQiLCJ1cmwiLCJpbWciLCJTZWFyY2hCYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZE1lbWJlckFuZEdyb3VwTGlzdCIsImZpbHRlciIsIm1lbWJlckdyb3VwIiwidG9Mb3dlckNhc2UiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibWFwIiwibWVtYmVyIiwic3JjIiwic3BhbiIsImEiLCJocmVmIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/SearchBar.js\n"));

/***/ })

});