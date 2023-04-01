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
exports.id = "pages/api/getPageInfo";
exports.ids = ["pages/api/getPageInfo"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getPageInfo.ts":
/*!**********************************!*\
  !*** ./pages/api/getPageInfo.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\n*[_type == 'pageInfo'][0]\n`;\nasync function handler(req, res) {\n    let pageInfo;\n    try {\n        pageInfo = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    } catch (error) {\n        res.status(500).json({\n            pageInfo\n        });\n    }\n    res.status(200).json({\n        pageInfo\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UGFnZUluZm8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1DO0FBQ1M7QUFFNUMsTUFBTUUsUUFBUUYsNkNBQUksQ0FBQzs7QUFFbkIsQ0FBQztBQU1jLGVBQWVHLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxJQUFJQztJQUNKLElBQUk7UUFDRkEsV0FBVyxNQUFNTCx1REFBa0IsQ0FBQ0M7SUFDdEMsRUFBRSxPQUFPTSxPQUFPO1FBQ2RILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUo7UUFBUztJQUNsQztJQUNBRCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVKO0lBQVM7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0UGFnZUluZm8udHM/MTQ5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlSW5mbyB9IGZyb20gXCIuLi8uLi90eXBpbmdzXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ3JvcSB9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xuaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiO1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgXG4qW190eXBlID09ICdwYWdlSW5mbyddWzBdXG5gO1xuXG50eXBlIERhdGEgPSB7XG4gIHBhZ2VJbmZvOiBQYWdlSW5mbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgbGV0IHBhZ2VJbmZvO1xuICB0cnkge1xuICAgIHBhZ2VJbmZvID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHBhZ2VJbmZvIH0pO1xuICB9XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcGFnZUluZm8gfSk7XG59XG4iXSwibmFtZXMiOlsiZ3JvcSIsInNhbml0eUNsaWVudCIsInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBhZ2VJbmZvIiwiZmV0Y2giLCJlcnJvciIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getPageInfo.ts\n");

/***/ }),

/***/ "(api)/./sanity.ts":
/*!*******************!*\
  !*** ./sanity.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"iokvwaxj\",\n    apiVersion: \"2023-03-31\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\nconst urlFor = (source)=>{\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1c7QUFFL0MsTUFBTUUsU0FBUztJQUNwQkMsU0FBU0MsWUFBc0MsSUFBSSxDQUFZO0lBQy9ERyxXQUFXSCxVQUF5QztJQUNwREssWUFBWTtJQUNaQyxRQUFRTixrQkFBeUI7QUFDbkMsRUFBRTtBQUVLLE1BQU1PLGVBQWVYLHlEQUFZQSxDQUFDRSxRQUFRO0FBRTFDLE1BQU1VLFNBQVMsQ0FBQ0MsU0FBZ0I7SUFDckMsT0FBT1osd0RBQXFCQSxDQUFDQyxRQUFRWSxLQUFLLENBQUNEO0FBQzdDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcG9ydGZvbGlvLy4vc2FuaXR5LnRzPzEwM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XG5pbXBvcnQgY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCBcInByb2R1Y3Rpb25cIixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCEsXG4gIGFwaVZlcnNpb246IFwiMjAyMy0wMy0zMVwiLFxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbn07XG5cbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoY29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IHVybEZvciA9IChzb3VyY2U6IGFueSkgPT4ge1xuICByZXR1cm4gY3JlYXRlSW1hZ2VVcmxCdWlsZGVyKGNvbmZpZykuaW1hZ2Uoc291cmNlKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIiwiY29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInNhbml0eUNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./sanity.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getPageInfo.ts"));
module.exports = __webpack_exports__;

})();