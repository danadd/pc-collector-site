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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"members\": function() { return /* binding */ members; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// move this to an API or json later\nconst members = [\n    {\n        name: \"Keeho\",\n        group: \"P1Harmony\",\n        id: 1,\n        url: \"/Keeho\",\n        img: \"keeho.png\"\n    },\n    {\n        name: \"Theo\",\n        group: \"P1Harmony\",\n        id: 2,\n        url: \"\"\n    },\n    {\n        name: \"Jiung\",\n        group: \"P1Harmony\",\n        id: 3,\n        url: \"\"\n    },\n    {\n        name: \"Intak\",\n        group: \"P1Harmony\",\n        id: 4,\n        url: \"\"\n    },\n    {\n        name: \"Soul\",\n        group: \"P1Harmony\",\n        id: 5,\n        url: \"\"\n    },\n    {\n        name: \"Jongseob\",\n        group: \"P1Harmony\",\n        id: 6,\n        url: \"\"\n    }\n];\nconst SearchBar = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setSearchInput(e.target.value);\n    };\n    const filteredMemberAndGroupList = members.filter((memberGroup)=>memberGroup.name.toLowerCase().startsWith(searchInput.toLowerCase()) || memberGroup.group.toLowerCase().includes(searchInput.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"searchbar-container container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search by group or member\",\n                onChange: handleChange,\n                value: searchInput\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"member_card_list \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: filteredMemberAndGroupList.length > 0 ? filteredMemberAndGroupList.map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col col-md-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: member.img,\n                                    className: \"member_image row\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row\",\n                                    children: [\n                                        member.name,\n                                        member.group,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"row\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: member.url,\n                                                children: \"Go to my PC List\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, member.id, true, {\n                            fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, undefined)) : searchInput.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"No results found! Try another search.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                        lineNumber: 62,\n                        columnNumber: 41\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\drape\\\\Documents\\\\practice code\\\\PC Filter Collection Website\\\\pc-collector-site\\\\pages\\\\SearchBar.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"7jaUvtQT89vZZF+Gjg+8PUuVm+0=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TZWFyY2hCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVqQyxvQ0FBb0M7QUFDN0IsTUFBTUMsVUFBVTtJQUNyQjtRQUNFQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLEtBQUs7SUFDUDtJQUNBO1FBQ0VKLE1BQU07UUFDTkMsT0FBTztRQUNQQyxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQUVILE1BQU07UUFBU0MsT0FBTztRQUFhQyxJQUFJO1FBQUdDLEtBQUs7SUFBRztJQUNwRDtRQUFFSCxNQUFNO1FBQVNDLE9BQU87UUFBYUMsSUFBSTtRQUFHQyxLQUFLO0lBQUc7SUFDcEQ7UUFBRUgsTUFBTTtRQUFRQyxPQUFPO1FBQWFDLElBQUk7UUFBR0MsS0FBSztJQUFHO0lBQ25EO1FBQUVILE1BQU07UUFBWUMsT0FBTztRQUFhQyxJQUFJO1FBQUdDLEtBQUs7SUFBRztDQUN4RCxDQUFDO0FBRUYsTUFBTUUsWUFBWSxJQUFNOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVUsZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSCxlQUFlRSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxNQUFNQyw2QkFBNkJkLFFBQVFlLE1BQU0sQ0FDL0MsQ0FBQ0MsY0FDQ0EsWUFBWWYsSUFBSSxDQUFDZ0IsV0FBVyxHQUFHQyxVQUFVLENBQUNYLFlBQVlVLFdBQVcsT0FDakVELFlBQVlkLEtBQUssQ0FBQ2UsV0FBVyxHQUFHRSxRQUFRLENBQUNaLFlBQVlVLFdBQVc7SUFHcEUscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsVUFBVWhCO2dCQUNWSSxPQUFPTjs7Ozs7OzBCQUVULDhEQUFDYTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pQLDJCQUEyQlksTUFBTSxHQUFHLElBQ2pDWiwyQkFBMkJhLEdBQUcsQ0FBQyxDQUFDQyx1QkFDOUIsOERBQUNSOzRCQUFvQkMsV0FBVTs7OENBQzdCLDhEQUFDaEI7b0NBQUl3QixLQUFLRCxPQUFPdkIsR0FBRztvQ0FBRWdCLFdBQVU7Ozs7Ozs4Q0FDaEMsOERBQUNEO29DQUFJQyxXQUFVOzt3Q0FDWk8sT0FBTzNCLElBQUk7d0NBRVgyQixPQUFPMUIsS0FBSztzREFDYiw4REFBQ2tCOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDUztnREFBRUMsTUFBTUgsT0FBT3hCLEdBQUc7MERBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFQakJ3QixPQUFPekIsRUFBRTs7Ozt5Q0FZckJJLFlBQVltQixNQUFNLEdBQUcsbUJBQUssOERBQUNNO2tDQUFHOzs7OztpQ0FBMEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RGO0dBM0NNMUI7S0FBQUE7QUE0Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VhcmNoQmFyLmpzPzEzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIG1vdmUgdGhpcyB0byBhbiBBUEkgb3IganNvbiBsYXRlclxyXG5leHBvcnQgY29uc3QgbWVtYmVycyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIktlZWhvXCIsXHJcbiAgICBncm91cDogXCJQMUhhcm1vbnlcIixcclxuICAgIGlkOiAxLFxyXG4gICAgdXJsOiBcIi9LZWVob1wiLFxyXG4gICAgaW1nOiBcImtlZWhvLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaGVvXCIsXHJcbiAgICBncm91cDogXCJQMUhhcm1vbnlcIixcclxuICAgIGlkOiAyLFxyXG4gICAgdXJsOiBcIlwiLFxyXG4gIH0sXHJcbiAgeyBuYW1lOiBcIkppdW5nXCIsIGdyb3VwOiBcIlAxSGFybW9ueVwiLCBpZDogMywgdXJsOiBcIlwiIH0sXHJcbiAgeyBuYW1lOiBcIkludGFrXCIsIGdyb3VwOiBcIlAxSGFybW9ueVwiLCBpZDogNCwgdXJsOiBcIlwiIH0sXHJcbiAgeyBuYW1lOiBcIlNvdWxcIiwgZ3JvdXA6IFwiUDFIYXJtb255XCIsIGlkOiA1LCB1cmw6IFwiXCIgfSxcclxuICB7IG5hbWU6IFwiSm9uZ3Nlb2JcIiwgZ3JvdXA6IFwiUDFIYXJtb255XCIsIGlkOiA2LCB1cmw6IFwiXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkTWVtYmVyQW5kR3JvdXBMaXN0ID0gbWVtYmVycy5maWx0ZXIoXHJcbiAgICAobWVtYmVyR3JvdXApID0+XHJcbiAgICAgIG1lbWJlckdyb3VwLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHNlYXJjaElucHV0LnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgIG1lbWJlckdyb3VwLmdyb3VwLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXItY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgZ3JvdXAgb3IgbWVtYmVyXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXJfY2FyZF9saXN0IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7ZmlsdGVyZWRNZW1iZXJBbmRHcm91cExpc3QubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IGZpbHRlcmVkTWVtYmVyQW5kR3JvdXBMaXN0Lm1hcCgobWVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVtYmVyLmlkfSBjbGFzc05hbWU9XCJjb2wgY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21lbWJlci5pbWd9IGNsYXNzTmFtZT1cIm1lbWJlcl9pbWFnZSByb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZW1iZXIubmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge21lbWJlci5ncm91cH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnVybH0+R28gdG8gbXkgUEMgTGlzdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IHNlYXJjaElucHV0Lmxlbmd0aCA+IDAgJiYgPGgxPk5vIHJlc3VsdHMgZm91bmQhIFRyeSBhbm90aGVyIHNlYXJjaC48L2gxPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1lbWJlcnMiLCJuYW1lIiwiZ3JvdXAiLCJpZCIsInVybCIsImltZyIsIlNlYXJjaEJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkTWVtYmVyQW5kR3JvdXBMaXN0IiwiZmlsdGVyIiwibWVtYmVyR3JvdXAiLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJsZW5ndGgiLCJtYXAiLCJtZW1iZXIiLCJzcmMiLCJhIiwiaHJlZiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/SearchBar.js\n"));

/***/ })

});