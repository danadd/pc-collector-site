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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"members\": function() { return /* binding */ members; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// move this to an API or json later\nconst members = [\n    {\n        name: \"Keeho\",\n        group: \"P1Harmony\",\n        id: 1,\n        url: \"/Keeho\",\n        img: \"keeho.png\"\n    },\n    {\n        name: \"Theo\",\n        group: \"P1Harmony\",\n        id: 2,\n        url: \"\"\n    },\n    {\n        name: \"Jiung\",\n        group: \"P1Harmony\",\n        id: 3,\n        url: \"\"\n    },\n    {\n        name: \"Intak\",\n        group: \"P1Harmony\",\n        id: 4,\n        url: \"\"\n    },\n    {\n        name: \"Soul\",\n        group: \"P1Harmony\",\n        id: 5,\n        url: \"\"\n    },\n    {\n        name: \"Jongseob\",\n        group: \"P1Harmony\",\n        id: 6,\n        url: \"\"\n    }\n];\nconst SearchBar = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setSearchInput(e.target.value);\n    };\n    const filteredMemberAndGroupList = members.filter((memberGroup)=>memberGroup.name.toLowerCase().startsWith(searchInput.toLowerCase()) || memberGroup.group.toLowerCase().includes(searchInput.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"searchbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search by group or member\",\n                onChange: handleChange,\n                value: searchInput\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"member_card_list container\",\n                children: filteredMemberAndGroupList.length > 0 ? filteredMemberAndGroupList.map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: member.img,\n                                className: \"member_image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: member.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: member.group\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: member.url,\n                                    children: \"Go to my PC List\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, member.id, true, {\n                        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, undefined)) : searchInput.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"No results found! Try another search.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                    lineNumber: 59,\n                    columnNumber: 39\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"7jaUvtQT89vZZF+Gjg+8PUuVm+0=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TZWFyY2hCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVqQyxvQ0FBb0M7QUFDN0IsTUFBTUMsVUFBVTtJQUNyQjtRQUNFQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLEtBQUs7SUFDUDtJQUNBO1FBQ0VKLE1BQU07UUFDTkMsT0FBTztRQUNQQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQUVILE1BQU07UUFBU0MsT0FBTztRQUFhQyxJQUFJO1FBQUdDLEtBQUs7SUFBRztJQUNwRDtRQUFFSCxNQUFNO1FBQVNDLE9BQU87UUFBYUMsSUFBSTtRQUFHQyxLQUFLO0lBQUc7SUFDcEQ7UUFBRUgsTUFBTTtRQUFRQyxPQUFPO1FBQWFDLElBQUk7UUFBR0MsS0FBSztJQUFHO0lBQ25EO1FBQUVILE1BQU07UUFBWUMsT0FBTztRQUFhQyxJQUFJO1FBQUdDLEtBQUs7SUFBRztDQUN4RCxDQUFDO0FBRUYsTUFBTUUsWUFBWSxJQUFNOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVUsZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSCxlQUFlRSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxNQUFNQyw2QkFBNkJkLFFBQVFlLE1BQU0sQ0FDL0MsQ0FBQ0MsY0FDQ0EsWUFBWWYsSUFBSSxDQUFDZ0IsV0FBVyxHQUFHQyxVQUFVLENBQUNYLFlBQVlVLFdBQVcsT0FDakVELFlBQVlkLEtBQUssQ0FBQ2UsV0FBVyxHQUFHRSxRQUFRLENBQUNaLFlBQVlVLFdBQVc7SUFHcEUscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsVUFBVWhCO2dCQUNWSSxPQUFPTjs7Ozs7OzBCQUVULDhEQUFDYTtnQkFBSUMsV0FBVTswQkFDWlAsMkJBQTJCWSxNQUFNLEdBQUcsSUFDakNaLDJCQUEyQmEsR0FBRyxDQUFDLENBQUNDLHVCQUM5Qiw4REFBQ1I7OzBDQUNDLDhEQUFDZjtnQ0FBSXdCLEtBQUtELE9BQU92QixHQUFHO2dDQUFFZ0IsV0FBVTs7Ozs7OzBDQUNoQyw4REFBQ1M7MENBQU1GLE9BQU8zQixJQUFJOzs7Ozs7MENBQ2xCLDhEQUFDNkI7MENBQU1GLE9BQU8xQixLQUFLOzs7Ozs7MENBQ25CLDhEQUFDNEI7Ozs7OzBDQUNELDhEQUFDQTswQ0FDQyw0RUFBQ0M7b0NBQUVDLE1BQU1KLE9BQU94QixHQUFHOzhDQUFFOzs7Ozs7Ozs7Ozs7dUJBTmZ3QixPQUFPekIsRUFBRTs7OztxQ0FVckJJLFlBQVltQixNQUFNLEdBQUcsbUJBQUssOERBQUNPOzhCQUFHOzs7Ozs2QkFBMEM7Ozs7Ozs7Ozs7OztBQUlwRjtHQXZDTTNCO0tBQUFBO0FBd0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1NlYXJjaEJhci5qcz8xM2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBtb3ZlIHRoaXMgdG8gYW4gQVBJIG9yIGpzb24gbGF0ZXJcclxuZXhwb3J0IGNvbnN0IG1lbWJlcnMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJLZWVob1wiLFxyXG4gICAgZ3JvdXA6IFwiUDFIYXJtb255XCIsXHJcbiAgICBpZDogMSxcclxuICAgIHVybDogXCIvS2VlaG9cIixcclxuICAgIGltZzogXCJrZWVoby5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGhlb1wiLFxyXG4gICAgZ3JvdXA6IFwiUDFIYXJtb255XCIsXHJcbiAgICBpZDogMixcclxuICAgIHVybDogXCJcIixcclxuICB9LFxyXG4gIHsgbmFtZTogXCJKaXVuZ1wiLCBncm91cDogXCJQMUhhcm1vbnlcIiwgaWQ6IDMsIHVybDogXCJcIiB9LFxyXG4gIHsgbmFtZTogXCJJbnRha1wiLCBncm91cDogXCJQMUhhcm1vbnlcIiwgaWQ6IDQsIHVybDogXCJcIiB9LFxyXG4gIHsgbmFtZTogXCJTb3VsXCIsIGdyb3VwOiBcIlAxSGFybW9ueVwiLCBpZDogNSwgdXJsOiBcIlwiIH0sXHJcbiAgeyBuYW1lOiBcIkpvbmdzZW9iXCIsIGdyb3VwOiBcIlAxSGFybW9ueVwiLCBpZDogNiwgdXJsOiBcIlwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZE1lbWJlckFuZEdyb3VwTGlzdCA9IG1lbWJlcnMuZmlsdGVyKFxyXG4gICAgKG1lbWJlckdyb3VwKSA9PlxyXG4gICAgICBtZW1iZXJHcm91cC5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChzZWFyY2hJbnB1dC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICBtZW1iZXJHcm91cC5ncm91cC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgZ3JvdXAgb3IgbWVtYmVyXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXJfY2FyZF9saXN0IGNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZE1lbWJlckFuZEdyb3VwTGlzdC5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IGZpbHRlcmVkTWVtYmVyQW5kR3JvdXBMaXN0Lm1hcCgobWVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbWJlci5pZH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVtYmVyLmltZ30gY2xhc3NOYW1lPVwibWVtYmVyX2ltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnttZW1iZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57bWVtYmVyLmdyb3VwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXttZW1iZXIudXJsfT5HbyB0byBteSBQQyBMaXN0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBzZWFyY2hJbnB1dC5sZW5ndGggPiAwICYmIDxoMT5ObyByZXN1bHRzIGZvdW5kISBUcnkgYW5vdGhlciBzZWFyY2guPC9oMT59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtZW1iZXJzIiwibmFtZSIsImdyb3VwIiwiaWQiLCJ1cmwiLCJpbWciLCJTZWFyY2hCYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZE1lbWJlckFuZEdyb3VwTGlzdCIsImZpbHRlciIsIm1lbWJlckdyb3VwIiwidG9Mb3dlckNhc2UiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGVuZ3RoIiwibWFwIiwibWVtYmVyIiwic3JjIiwic3BhbiIsImEiLCJocmVmIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/SearchBar.js\n"));

/***/ })

});