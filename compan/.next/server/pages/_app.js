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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_apolloClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apolloClient */ \"./services/apolloClient.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_apolloClient__WEBPACK_IMPORTED_MODULE_8__]);\n_services_apolloClient__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.config.autoAddCss = false;\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_5__.createGlobalStyle`\n  *{\n    margin: 0;\n  }\n  body {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    background: ${(props)=>props.theme.colors.background\n};\n    font-family: 'Rajdhani', sans-serif;\n    min-height: 100vh;\n  }\n\n  #__next{\n    padding-bottom: 72px;\n  }\n`;\nfunction Theme({ children  }) {\n    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        light_mode: true,\n        assets: {\n            logo: '/logo.png',\n            light_logo: '/light-logo.svg',\n            dark_logo: '/dark-logo.svg'\n        },\n        colors: {\n            background: '#fff',\n            primary: '#7d68ab',\n            secondary: '#000',\n            alert: '#ee4899'\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n        theme: theme,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Trabalho\\\\Compan\\\\compan\\\\pages\\\\_app.tsx\",\n        lineNumber: 52,\n        columnNumber: 7\n    }, this));\n}\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {\n        client: _services_apolloClient__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Theme, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                    fileName: \"D:\\\\Trabalho\\\\Compan\\\\compan\\\\pages\\\\_app.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {\n                    position: \"top-right\",\n                    hideProgressBar: false,\n                    pauseOnFocusLoss: false,\n                    pauseOnHover: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\Trabalho\\\\Compan\\\\compan\\\\pages\\\\_app.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\Trabalho\\\\Compan\\\\compan\\\\pages\\\\_app.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Trabalho\\\\Compan\\\\compan\\\\pages\\\\_app.tsx\",\n            lineNumber: 62,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Trabalho\\\\Compan\\\\compan\\\\pages\\\\_app.tsx\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1E7QUFDTDtBQUNQO0FBQ3NCO0FBQ3JCO0FBQ0E7QUFDRjtBQUNNO0FBSW5ERSxnRkFBaUIsR0FBRyxLQUFLO0FBR3pCLEtBQUssQ0FBQ08sV0FBVyxHQUFHTCxnRUFBaUIsQ0FBQzs7Ozs7Ozs7Z0JBUXRCLEdBQUVNLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVTtDQUFDOzs7Ozs7OztBQVF6RDtTQUdTQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDM0IsS0FBSyxNQUFFSixLQUFLLE1BQUVLLFFBQVEsTUFBSWYsK0NBQVEsQ0FBQyxDQUFDO1FBQ2xDZ0IsVUFBVSxFQUFFLElBQUk7UUFDaEJDLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLElBQUksRUFBRSxDQUFXO1lBQ2pCQyxVQUFVLEVBQUUsQ0FBaUI7WUFDN0JDLFNBQVMsRUFBRSxDQUFnQjtRQUM3QixDQUFDO1FBQ0RULE1BQU0sRUFBRSxDQUFDO1lBQ1BDLFVBQVUsRUFBRSxDQUFNO1lBQ2xCUyxPQUFPLEVBQUUsQ0FBUztZQUNsQkMsU0FBUyxFQUFFLENBQU07WUFDakJDLEtBQUssRUFBRSxDQUFTO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDRHJCLDREQUFhO1FBQUNRLEtBQUssRUFBRUEsS0FBSztrQkFDeEJJLFFBQVE7Ozs7OztBQUdqQixDQUFDO1NBR1FVLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0R0QiwwREFBYztRQUFDRSxNQUFNLEVBQUVBLDhEQUFNOzhGQUN6Qk8sS0FBSzs7NEZBQ0hMLFdBQVc7Ozs7OzRGQUNYSCwwREFBYztvQkFDWHNCLFFBQVEsRUFBQyxDQUFXO29CQUNwQkMsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCQyxnQkFBZ0IsRUFBRSxLQUFLO29CQUN2QkMsWUFBWTs7Ozs7OzRGQUVmTCxTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9zZXJ2aWNlcy9hcG9sbG9DbGllbnQnO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcGFuZW50cy9uYXZiYXIvTmF2YmFyLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlO1xyXG5cclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgKntcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XHJcbiAgICBmb250LWZhbWlseTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgI19fbmV4dHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MnB4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5mdW5jdGlvbiBUaGVtZSh7IGNoaWxkcmVuIH0pe1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoe1xyXG4gICAgbGlnaHRfbW9kZTogdHJ1ZSxcclxuICAgIGFzc2V0czoge1xyXG4gICAgICBsb2dvOiAnL2xvZ28ucG5nJyxcclxuICAgICAgbGlnaHRfbG9nbzogJy9saWdodC1sb2dvLnN2ZycsXHJcbiAgICAgIGRhcmtfbG9nbzogJy9kYXJrLWxvZ28uc3ZnJyxcclxuICAgIH0sXHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICBwcmltYXJ5OiAnIzdkNjhhYicsXHJcbiAgICAgIHNlY29uZGFyeTogJyMwMDAnLFxyXG4gICAgICBhbGVydDogJyNlZTQ4OTknLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICAgIDxUaGVtZT5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlLz5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj0ndG9wLXJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvVGhlbWU+XHJcbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29uZmlnIiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBvbGxvUHJvdmlkZXIiLCJUb2FzdENvbnRhaW5lciIsImNsaWVudCIsImF1dG9BZGRDc3MiLCJHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwiVGhlbWUiLCJjaGlsZHJlbiIsInNldFRoZW1lIiwibGlnaHRfbW9kZSIsImFzc2V0cyIsImxvZ28iLCJsaWdodF9sb2dvIiwiZGFya19sb2dvIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImFsZXJ0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiIsImhpZGVQcm9ncmVzc0JhciIsInBhdXNlT25Gb2N1c0xvc3MiLCJwYXVzZU9uSG92ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/apolloClient.js":
/*!**********************************!*\
  !*** ./services/apolloClient.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserToken\": () => (/* binding */ getUserToken),\n/* harmony export */   \"getPersonToken\": () => (/* binding */ getPersonToken),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-upload-client */ \"apollo-upload-client\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__]);\napollo_upload_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nasync function getUserToken() {\n    const user = JSON.parse(localStorage.getItem('@user'));\n    if (!user) {\n        return;\n    }\n    if (new Date(user.sessionExpiresIn) < new Date()) {\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get('/api/refresh-session', {\n                headers: {\n                    Authorization: `Bearer ${localStorage.getItem('@apiToken')}`\n                }\n            });\n            if (!data) {\n                localStorage.removeItem('@user');\n                localStorage.removeItem('@apiToken');\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().reload(window.location.pathname);\n                return;\n            }\n            localStorage.setItem('@user', JSON.stringify(data.user));\n            localStorage.setItem('@apiToken', data.token);\n            user.sessionExpiresIn = data.user.sessionExpiresIn;\n            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_6__.isEqual)(user, data.user)) {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().reload(window.location.pathname);\n            }\n        } catch (error) {\n            localStorage.removeItem('@user');\n            localStorage.removeItem('@apiToken');\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().reload(window.location.pathname);\n        }\n    }\n    return localStorage.getItem('@apiToken');\n}\nasync function getPersonToken() {\n    const person = JSON.parse(localStorage.getItem('@publicToolsPerson'));\n    if (!person) {\n        return;\n    }\n    if (new Date(person.sessionExpiresIn) < new Date()) {\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get('/api/refresh-session', {\n                headers: {\n                    'X-Public-Tools-Token': `Bearer ${localStorage.getItem('@personApiToken')}`\n                }\n            });\n            if (!data) {\n                localStorage.removeItem('@publicToolsPerson');\n                localStorage.removeItem('@personApiToken');\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().reload(window.location.pathname);\n                return;\n            }\n            localStorage.setItem('@publicToolsPerson', JSON.stringify(data.person));\n            localStorage.setItem('@personApiToken', data.token);\n            person.sessionExpiresIn = data.person.sessionExpiresIn;\n            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_6__.isEqual)(person, data.person)) {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().reload(window.location.pathname);\n            }\n        } catch (error) {\n            localStorage.removeItem('@publicToolsPerson');\n            localStorage.removeItem('@personApiToken');\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().reload(window.location.pathname);\n        }\n    }\n    return localStorage.getItem('@personApiToken');\n}\nconst errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(({ graphQLErrors , networkError  })=>{\n    if (graphQLErrors) {\n        graphQLErrors.forEach(({ extensions  })=>{\n            if ([\n                'UNAUTHENTICATED',\n                'FORBIDDEN'\n            ].includes(extensions.code)) {\n                localStorage.removeItem('@user');\n                localStorage.removeItem('@apiToken');\n                localStorage.removeItem('@publicToolsPerson');\n                localStorage.removeItem('@personApiToken');\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().reload(window.location.pathname);\n            }\n        });\n    }\n});\nconst httpLink = (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__.createUploadLink)({\n    uri: '/api/graphql'\n});\nconst authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__.setContext)(async (_, { headers  })=>{\n    const token = await getUserToken();\n    const personToken = await getPersonToken();\n    return {\n        headers: {\n            ...headers,\n            Authorization: token ? `Bearer ${token}` : '',\n            'X-Public-Tools-Token': personToken ? `Bearer ${personToken}` : '',\n            credentials: 'same-origin'\n        }\n    };\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: errorLink.concat(authLink.concat(httpLink)),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxpRUFBZTJDLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9zZXJ2aWNlcy9hcG9sbG9DbGllbnQuanM/NTA4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCc7XHJcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yJztcclxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclRva2VuKCl7XHJcblx0Y29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0B1c2VyJykpO1xyXG5cclxuXHRpZiAoIXVzZXIpe1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKG5ldyBEYXRlKHVzZXIuc2Vzc2lvbkV4cGlyZXNJbikgPCBuZXcgRGF0ZSgpKXtcclxuXHRcdHRyeXtcclxuXHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcmVmcmVzaC1zZXNzaW9uJywge1xyXG5cdFx0XHRcdGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdAYXBpVG9rZW4nKX1gIH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoIWRhdGEpe1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAdXNlcicpO1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAYXBpVG9rZW4nKTtcclxuXHRcdFx0XHRSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQHVzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLnVzZXIpKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BhcGlUb2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdFx0XHR1c2VyLnNlc3Npb25FeHBpcmVzSW4gPSBkYXRhLnVzZXIuc2Vzc2lvbkV4cGlyZXNJbjtcclxuXHJcblx0XHRcdGlmICghaXNFcXVhbCh1c2VyLCBkYXRhLnVzZXIpKXtcclxuXHRcdFx0XHRSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2goZXJyb3Ipe1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQHVzZXInKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0BhcGlUb2tlbicpO1xyXG5cdFx0XHRSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BhcGlUb2tlbicpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBlcnNvblRva2VuKCl7XHJcblx0Y29uc3QgcGVyc29uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQHB1YmxpY1Rvb2xzUGVyc29uJykpO1xyXG5cclxuXHRpZiAoIXBlcnNvbil7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAobmV3IERhdGUocGVyc29uLnNlc3Npb25FeHBpcmVzSW4pIDwgbmV3IERhdGUoKSl7XHJcblx0XHR0cnl7XHJcblx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3JlZnJlc2gtc2Vzc2lvbicsIHtcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnWC1QdWJsaWMtVG9vbHMtVG9rZW4nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BwZXJzb25BcGlUb2tlbicpfWAsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICghZGF0YSl7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0BwdWJsaWNUb29sc1BlcnNvbicpO1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAcGVyc29uQXBpVG9rZW4nKTtcclxuXHRcdFx0XHRSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQHB1YmxpY1Rvb2xzUGVyc29uJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5wZXJzb24pKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BwZXJzb25BcGlUb2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdFx0XHRwZXJzb24uc2Vzc2lvbkV4cGlyZXNJbiA9IGRhdGEucGVyc29uLnNlc3Npb25FeHBpcmVzSW47XHJcblxyXG5cdFx0XHRpZiAoIWlzRXF1YWwocGVyc29uLCBkYXRhLnBlcnNvbikpe1xyXG5cdFx0XHRcdFJvdXRlci5yZWxvYWQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaChlcnJvcil7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAcHVibGljVG9vbHNQZXJzb24nKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0BwZXJzb25BcGlUb2tlbicpO1xyXG5cdFx0XHRSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BwZXJzb25BcGlUb2tlbicpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xyXG5cdGlmIChncmFwaFFMRXJyb3JzKXtcclxuXHRcdGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBleHRlbnNpb25zIH0pID0+IHtcclxuXHRcdFx0aWYgKFsnVU5BVVRIRU5USUNBVEVEJywgJ0ZPUkJJRERFTiddLmluY2x1ZGVzKGV4dGVuc2lvbnMuY29kZSkpe1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAdXNlcicpO1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAYXBpVG9rZW4nKTtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQHB1YmxpY1Rvb2xzUGVyc29uJyk7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0BwZXJzb25BcGlUb2tlbicpO1xyXG5cdFx0XHRcdFJvdXRlci5yZWxvYWQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZVVwbG9hZExpbmsoe1xyXG5cdHVyaTogJy9hcGkvZ3JhcGhxbCcsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dChhc3luYyAoXywgeyBoZWFkZXJzIH0pID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbigpO1xyXG5cdGNvbnN0IHBlcnNvblRva2VuID0gYXdhaXQgZ2V0UGVyc29uVG9rZW4oKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0Li4uaGVhZGVycyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnLFxyXG5cdFx0XHQnWC1QdWJsaWMtVG9vbHMtVG9rZW4nOiBwZXJzb25Ub2tlbiA/IGBCZWFyZXIgJHtwZXJzb25Ub2tlbn1gIDogJycsXHJcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcblx0bGluazogZXJyb3JMaW5rLmNvbmNhdChhdXRoTGluay5jb25jYXQoaHR0cExpbmspKSxcclxuXHRjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNyZWF0ZVVwbG9hZExpbmsiLCJvbkVycm9yIiwic2V0Q29udGV4dCIsIlJvdXRlciIsImF4aW9zIiwiaXNFcXVhbCIsImdldFVzZXJUb2tlbiIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiRGF0ZSIsInNlc3Npb25FeHBpcmVzSW4iLCJkYXRhIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZW1vdmVJdGVtIiwicmVsb2FkIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImVycm9yIiwiZ2V0UGVyc29uVG9rZW4iLCJwZXJzb24iLCJlcnJvckxpbmsiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsImV4dGVuc2lvbnMiLCJpbmNsdWRlcyIsImNvZGUiLCJodHRwTGluayIsInVyaSIsImF1dGhMaW5rIiwiXyIsInBlcnNvblRva2VuIiwiY3JlZGVudGlhbHMiLCJjbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/apolloClient.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("apollo-upload-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();