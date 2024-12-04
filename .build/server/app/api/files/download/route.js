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
exports.id = "app/api/files/download/route";
exports.ids = ["app/api/files/download/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Fdownload%2Froute&page=%2Fapi%2Ffiles%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fdownload%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Fdownload%2Froute&page=%2Fapi%2Ffiles%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fdownload%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var O_innercircle_indexer_app_api_files_download_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/files/download/route.ts */ \"(rsc)/./app/api/files/download/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/files/download/route\",\n        pathname: \"/api/files/download\",\n        filename: \"route\",\n        bundlePath: \"app/api/files/download/route\"\n    },\n    resolvedPagePath: \"O:\\\\innercircle-indexer\\\\app\\\\api\\\\files\\\\download\\\\route.ts\",\n    nextConfigOutput,\n    userland: O_innercircle_indexer_app_api_files_download_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmaWxlcyUyRmRvd25sb2FkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZmaWxlcyUyRmRvd25sb2FkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZmlsZXMlMkZkb3dubG9hZCUyRnJvdXRlLnRzJmFwcERpcj1PJTNBJTVDaW5uZXJjaXJjbGUtaW5kZXhlciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9TyUzQSU1Q2lubmVyY2lyY2xlLWluZGV4ZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIk86XFxcXGlubmVyY2lyY2xlLWluZGV4ZXJcXFxcYXBwXFxcXGFwaVxcXFxmaWxlc1xcXFxkb3dubG9hZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmlsZXMvZG93bmxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9maWxlcy9kb3dubG9hZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZmlsZXMvZG93bmxvYWQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJPOlxcXFxpbm5lcmNpcmNsZS1pbmRleGVyXFxcXGFwcFxcXFxhcGlcXFxcZmlsZXNcXFxcZG93bmxvYWRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Fdownload%2Froute&page=%2Fapi%2Ffiles%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fdownload%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/files/download/route.ts":
/*!*****************************************!*\
  !*** ./app/api/files/download/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const filePath = searchParams.get('file');\n    if (!filePath) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'No file specified'\n        }, {\n            status: 400\n        });\n    }\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'innercircle', filePath);\n    // Ensure the requested file is within the allowed directory\n    if (!fullPath.startsWith(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'innercircle'))) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Access denied'\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const stat = await fs__WEBPACK_IMPORTED_MODULE_1___default().promises.stat(fullPath);\n        const fileName = path__WEBPACK_IMPORTED_MODULE_2___default().basename(fullPath);\n        // Determine the MIME type based on the file extension\n        const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(fileName).toLowerCase();\n        const mimeType = getMimeType(ext);\n        // Set appropriate headers for file download\n        const headers = new Headers();\n        headers.set('Content-Disposition', `attachment; filename=\"${fileName}\"`);\n        headers.set('Content-Type', mimeType);\n        headers.set('Content-Length', stat.size.toString());\n        // Create a readable stream\n        const stream = fs__WEBPACK_IMPORTED_MODULE_1___default().createReadStream(fullPath);\n        // Return a streaming response\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(stream, {\n            status: 200,\n            headers\n        });\n    } catch (error) {\n        console.error('Error reading file:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'File not found'\n        }, {\n            status: 404\n        });\n    }\n}\nfunction getMimeType(extension) {\n    const mimeTypes = {\n        '.txt': 'text/plain',\n        '.pdf': 'application/pdf',\n        '.doc': 'application/msword',\n        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',\n        '.xls': 'application/vnd.ms-excel',\n        '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',\n        '.png': 'image/png',\n        '.jpg': 'image/jpeg',\n        '.jpeg': 'image/jpeg',\n        '.gif': 'image/gif',\n        '.csv': 'text/csv',\n        '.mp3': 'audio/mpeg',\n        '.mp4': 'video/mp4',\n        '.zip': 'application/zip',\n        '.rar': 'application/x-rar-compressed',\n        '.7z': 'application/x-7z-compressed',\n        '.tar': 'application/x-tar',\n        '.gz': 'application/gzip'\n    };\n    return mimeTypes[extension] || 'application/octet-stream';\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZpbGVzL2Rvd25sb2FkL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNwQztBQUNJO0FBSWpCLGVBQWVHLElBQUlDLE9BQW9CO0lBQzVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsUUFBUUcsR0FBRztJQUM1QyxNQUFNQyxXQUFXSCxhQUFhSSxHQUFHLENBQUM7SUFFbEMsSUFBSSxDQUFDRCxVQUFVO1FBQ2IsT0FBT1IscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0lBRUEsTUFBTUMsV0FBV1gsZ0RBQVMsQ0FBQ2EsUUFBUUMsR0FBRyxJQUFJLGVBQWVSO0lBRXpELDREQUE0RDtJQUM1RCxJQUFJLENBQUNLLFNBQVNJLFVBQVUsQ0FBQ2YsZ0RBQVMsQ0FBQ2EsUUFBUUMsR0FBRyxJQUFJLGlCQUFpQjtRQUNqRSxPQUFPaEIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JFO0lBRUEsSUFBSTtRQUNGLE1BQU1NLE9BQU8sTUFBTWpCLGtEQUFXLENBQUNpQixJQUFJLENBQUNMO1FBQ3BDLE1BQU1PLFdBQVdsQixvREFBYSxDQUFDVztRQUUvQixzREFBc0Q7UUFDdEQsTUFBTVMsTUFBTXBCLG1EQUFZLENBQUNrQixVQUFVSSxXQUFXO1FBQzlDLE1BQU1DLFdBQVdDLFlBQVlKO1FBRTdCLDRDQUE0QztRQUM1QyxNQUFNSyxVQUFVLElBQUlDO1FBQ3BCRCxRQUFRRSxHQUFHLENBQUMsdUJBQXVCLENBQUMsc0JBQXNCLEVBQUVULFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFTyxRQUFRRSxHQUFHLENBQUMsZ0JBQWdCSjtRQUM1QkUsUUFBUUUsR0FBRyxDQUFDLGtCQUFrQlgsS0FBS1ksSUFBSSxDQUFDQyxRQUFRO1FBRWhELDJCQUEyQjtRQUMzQixNQUFNQyxTQUFTL0IsMERBQW1CLENBQUNZO1FBRW5DLDhCQUE4QjtRQUM5QixPQUFPLElBQUliLHFEQUFZQSxDQUFDZ0MsUUFBZTtZQUNyQ3BCLFFBQVE7WUFDUmU7UUFDRjtJQUNGLEVBQUUsT0FBT2hCLE9BQU87UUFDZHVCLFFBQVF2QixLQUFLLENBQUMsdUJBQXVCQTtRQUNyQyxPQUFPWCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEU7QUFDRjtBQUVBLFNBQVNjLFlBQVlTLFNBQWlCO0lBQ3BDLE1BQU1DLFlBQXVDO1FBQzNDLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFNBQVM7UUFDVCxRQUFRO1FBQ1IsU0FBUztRQUNULFFBQVE7UUFDUixRQUFRO1FBQ1IsU0FBUztRQUNULFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLE9BQU87UUFDUCxRQUFRO1FBQ1IsT0FBTztJQUNUO0lBRUEsT0FBT0EsU0FBUyxDQUFDRCxVQUFVLElBQUk7QUFDakMiLCJzb3VyY2VzIjpbIk86XFxpbm5lcmNpcmNsZS1pbmRleGVyXFxhcHBcXGFwaVxcZmlsZXNcXGRvd25sb2FkXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tICdzdHJlYW0nXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCBmaWxlUGF0aCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2ZpbGUnKTtcclxuXHJcbiAgaWYgKCFmaWxlUGF0aCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBmaWxlIHNwZWNpZmllZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdpbm5lcmNpcmNsZScsIGZpbGVQYXRoKTtcclxuXHJcbiAgLy8gRW5zdXJlIHRoZSByZXF1ZXN0ZWQgZmlsZSBpcyB3aXRoaW4gdGhlIGFsbG93ZWQgZGlyZWN0b3J5XHJcbiAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnaW5uZXJjaXJjbGUnKSkpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWNjZXNzIGRlbmllZCcgfSwgeyBzdGF0dXM6IDQwMyB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGF0ID0gYXdhaXQgZnMucHJvbWlzZXMuc3RhdChmdWxsUGF0aCk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUoZnVsbFBhdGgpO1xyXG5cclxuICAgIC8vIERldGVybWluZSB0aGUgTUlNRSB0eXBlIGJhc2VkIG9uIHRoZSBmaWxlIGV4dGVuc2lvblxyXG4gICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGVOYW1lKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgbWltZVR5cGUgPSBnZXRNaW1lVHlwZShleHQpO1xyXG5cclxuICAgIC8vIFNldCBhcHByb3ByaWF0ZSBoZWFkZXJzIGZvciBmaWxlIGRvd25sb2FkXHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuc2V0KCdDb250ZW50LURpc3Bvc2l0aW9uJywgYGF0dGFjaG1lbnQ7IGZpbGVuYW1lPVwiJHtmaWxlTmFtZX1cImApO1xyXG4gICAgaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIG1pbWVUeXBlKTtcclxuICAgIGhlYWRlcnMuc2V0KCdDb250ZW50LUxlbmd0aCcsIHN0YXQuc2l6ZS50b1N0cmluZygpKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSByZWFkYWJsZSBzdHJlYW1cclxuICAgIGNvbnN0IHN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZnVsbFBhdGgpO1xyXG5cclxuICAgIC8vIFJldHVybiBhIHN0cmVhbWluZyByZXNwb25zZVxyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2Uoc3RyZWFtIGFzIGFueSwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgaGVhZGVycyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGZpbGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGaWxlIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1pbWVUeXBlKGV4dGVuc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBtaW1lVHlwZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAnLnR4dCc6ICd0ZXh0L3BsYWluJyxcclxuICAgICcucGRmJzogJ2FwcGxpY2F0aW9uL3BkZicsXHJcbiAgICAnLmRvYyc6ICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxyXG4gICAgJy5kb2N4JzogJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcclxuICAgICcueGxzJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXHJcbiAgICAnLnhsc3gnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxyXG4gICAgJy5wbmcnOiAnaW1hZ2UvcG5nJyxcclxuICAgICcuanBnJzogJ2ltYWdlL2pwZWcnLFxyXG4gICAgJy5qcGVnJzogJ2ltYWdlL2pwZWcnLFxyXG4gICAgJy5naWYnOiAnaW1hZ2UvZ2lmJyxcclxuICAgICcuY3N2JzogJ3RleHQvY3N2JyxcclxuICAgICcubXAzJzogJ2F1ZGlvL21wZWcnLFxyXG4gICAgJy5tcDQnOiAndmlkZW8vbXA0JyxcclxuICAgICcuemlwJzogJ2FwcGxpY2F0aW9uL3ppcCcsXHJcbiAgICAnLnJhcic6ICdhcHBsaWNhdGlvbi94LXJhci1jb21wcmVzc2VkJyxcclxuICAgICcuN3onOiAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcclxuICAgICcudGFyJzogJ2FwcGxpY2F0aW9uL3gtdGFyJyxcclxuICAgICcuZ3onOiAnYXBwbGljYXRpb24vZ3ppcCcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG1pbWVUeXBlc1tleHRlbnNpb25dIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImZzIiwicGF0aCIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJmaWxlUGF0aCIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImZ1bGxQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJzdGFydHNXaXRoIiwic3RhdCIsInByb21pc2VzIiwiZmlsZU5hbWUiLCJiYXNlbmFtZSIsImV4dCIsImV4dG5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm1pbWVUeXBlIiwiZ2V0TWltZVR5cGUiLCJoZWFkZXJzIiwiSGVhZGVycyIsInNldCIsInNpemUiLCJ0b1N0cmluZyIsInN0cmVhbSIsImNyZWF0ZVJlYWRTdHJlYW0iLCJjb25zb2xlIiwiZXh0ZW5zaW9uIiwibWltZVR5cGVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/files/download/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Fdownload%2Froute&page=%2Fapi%2Ffiles%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fdownload%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();