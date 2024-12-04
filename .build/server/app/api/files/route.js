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
exports.id = "app/api/files/route";
exports.ids = ["app/api/files/route"];
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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var O_innercircle_indexer_app_api_files_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/files/route.ts */ \"(rsc)/./app/api/files/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/files/route\",\n        pathname: \"/api/files\",\n        filename: \"route\",\n        bundlePath: \"app/api/files/route\"\n    },\n    resolvedPagePath: \"O:\\\\innercircle-indexer\\\\app\\\\api\\\\files\\\\route.ts\",\n    nextConfigOutput,\n    userland: O_innercircle_indexer_app_api_files_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmaWxlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmlsZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmaWxlcyUyRnJvdXRlLnRzJmFwcERpcj1PJTNBJTVDaW5uZXJjaXJjbGUtaW5kZXhlciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9TyUzQSU1Q2lubmVyY2lyY2xlLWluZGV4ZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIk86XFxcXGlubmVyY2lyY2xlLWluZGV4ZXJcXFxcYXBwXFxcXGFwaVxcXFxmaWxlc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmlsZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9maWxlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZmlsZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJPOlxcXFxpbm5lcmNpcmNsZS1pbmRleGVyXFxcXGFwcFxcXFxhcGlcXFxcZmlsZXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/files/route.ts":
/*!********************************!*\
  !*** ./app/api/files/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   calculateHash: () => (/* binding */ calculateHash)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst BASE_PATH = 'O:/innercircle-indexer/innercircle/';\nconst PAGE_SIZE = 100 // Number of items per page\n;\nasync function GET(request) {\n    const searchParams = request.nextUrl.searchParams;\n    const subdir = searchParams.get('subdir') || '';\n    const search = subdir ? searchParams.get('search') || '' : '';\n    const page = parseInt(searchParams.get('page') || '1', 10);\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(BASE_PATH, subdir);\n    try {\n        const { files, totalCount } = await getFiles(fullPath, search, page);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            files,\n            totalCount,\n            currentPage: page\n        });\n    } catch (error) {\n        console.error('Error fetching files:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch files'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function getFiles(dir, search, page) {\n    const allEntries = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(dir, {\n        withFileTypes: true\n    });\n    const searchLower = search.toLowerCase();\n    const filteredEntries = allEntries.filter((entry)=>entry.name.toLowerCase().includes(searchLower));\n    const totalCount = filteredEntries.length;\n    const startIndex = (page - 1) * PAGE_SIZE;\n    const endIndex = startIndex + PAGE_SIZE;\n    const paginatedEntries = filteredEntries.slice(startIndex, endIndex);\n    const files = await Promise.all(paginatedEntries.map(async (entry)=>{\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(dir, entry.name);\n        if (entry.isDirectory()) {\n            return {\n                name: entry.name,\n                isDirectory: true,\n                size: 0,\n                lastModified: new Date().toISOString(),\n                path: path__WEBPACK_IMPORTED_MODULE_2___default().relative(BASE_PATH, fullPath)\n            };\n        } else {\n            try {\n                const stats = fs__WEBPACK_IMPORTED_MODULE_1___default().statSync(fullPath);\n                return {\n                    name: entry.name,\n                    isDirectory: false,\n                    size: stats.size,\n                    lastModified: stats.mtime.toISOString(),\n                    path: path__WEBPACK_IMPORTED_MODULE_2___default().relative(BASE_PATH, fullPath)\n                };\n            } catch (error) {\n                console.error(`Error processing file ${fullPath}:`, error);\n                return null;\n            }\n        }\n    }));\n    return {\n        files: files.filter(Boolean),\n        totalCount\n    };\n}\nasync function calculateHash(filePath) {\n    return new Promise((resolve, reject)=>{\n        const hash = crypto__WEBPACK_IMPORTED_MODULE_3___default().createHash('sha256');\n        const stream = fs__WEBPACK_IMPORTED_MODULE_1___default().createReadStream(filePath);\n        stream.on('data', (data)=>{\n            hash.update(data);\n        });\n        stream.on('end', ()=>{\n            resolve(hash.digest('hex'));\n        });\n        stream.on('error', (error)=>{\n            reject(error);\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsUUFBUSxDQUFDQztZQUNqQkwsS0FBS00sTUFBTSxDQUFDRDtRQUNkO1FBRUFILE9BQU9FLEVBQUUsQ0FBQyxPQUFPO1lBQ2ZOLFFBQVFFLEtBQUtPLE1BQU0sQ0FBQztRQUN0QjtRQUVBTCxPQUFPRSxFQUFFLENBQUMsU0FBUyxDQUFDeEM7WUFDbEJtQyxPQUFPbkM7UUFDVDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIk86XFxpbm5lcmNpcmNsZS1pbmRleGVyXFxhcHBcXGFwaVxcZmlsZXNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcclxuXHJcbmNvbnN0IEJBU0VfUEFUSCA9ICdPOi9pbm5lcmNpcmNsZS1pbmRleGVyL2lubmVyY2lyY2xlLydcclxuY29uc3QgUEFHRV9TSVpFID0gMTAwIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXNcclxuICBjb25zdCBzdWJkaXIgPSBzZWFyY2hQYXJhbXMuZ2V0KCdzdWJkaXInKSB8fCAnJ1xyXG4gIGNvbnN0IHNlYXJjaCA9IHN1YmRpciA/IChzZWFyY2hQYXJhbXMuZ2V0KCdzZWFyY2gnKSB8fCAnJykgOiAnJ1xyXG4gIGNvbnN0IHBhZ2UgPSBwYXJzZUludChzZWFyY2hQYXJhbXMuZ2V0KCdwYWdlJykgfHwgJzEnLCAxMClcclxuXHJcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCBzdWJkaXIpXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGZpbGVzLCB0b3RhbENvdW50IH0gPSBhd2FpdCBnZXRGaWxlcyhmdWxsUGF0aCwgc2VhcmNoLCBwYWdlKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZmlsZXMsIHRvdGFsQ291bnQsIGN1cnJlbnRQYWdlOiBwYWdlIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGZpbGVzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggZmlsZXMnIH0sIHsgc3RhdHVzOiA1MDAgfSlcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZpbGVzKGRpcjogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgcGFnZTogbnVtYmVyKTogUHJvbWlzZTx7IGZpbGVzOiBhbnlbXSwgdG90YWxDb3VudDogbnVtYmVyIH0+IHtcclxuICBjb25zdCBhbGxFbnRyaWVzID0gZnMucmVhZGRpclN5bmMoZGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcclxuICBjb25zdCBzZWFyY2hMb3dlciA9IHNlYXJjaC50b0xvd2VyQ2FzZSgpXHJcbiAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0gYWxsRW50cmllcy5maWx0ZXIoZW50cnkgPT4gZW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaExvd2VyKSlcclxuXHJcbiAgY29uc3QgdG90YWxDb3VudCA9IGZpbHRlcmVkRW50cmllcy5sZW5ndGhcclxuICBjb25zdCBzdGFydEluZGV4ID0gKHBhZ2UgLSAxKSAqIFBBR0VfU0laRVxyXG4gIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIFBBR0VfU0laRVxyXG5cclxuICBjb25zdCBwYWdpbmF0ZWRFbnRyaWVzID0gZmlsdGVyZWRFbnRyaWVzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxyXG5cclxuICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKHBhZ2luYXRlZEVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xyXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oZGlyLCBlbnRyeS5uYW1lKVxyXG5cclxuICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogZW50cnkubmFtZSxcclxuICAgICAgICBpc0RpcmVjdG9yeTogdHJ1ZSxcclxuICAgICAgICBzaXplOiAwLFxyXG4gICAgICAgIGxhc3RNb2RpZmllZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHBhdGg6IHBhdGgucmVsYXRpdmUoQkFTRV9QQVRILCBmdWxsUGF0aCksXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBmcy5zdGF0U3luYyhmdWxsUGF0aClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogZW50cnkubmFtZSxcclxuICAgICAgICAgIGlzRGlyZWN0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIHNpemU6IHN0YXRzLnNpemUsXHJcbiAgICAgICAgICBsYXN0TW9kaWZpZWQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlbGF0aXZlKEJBU0VfUEFUSCwgZnVsbFBhdGgpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwcm9jZXNzaW5nIGZpbGUgJHtmdWxsUGF0aH06YCwgZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pKVxyXG5cclxuICByZXR1cm4geyBmaWxlczogZmlsZXMuZmlsdGVyKEJvb2xlYW4pLCB0b3RhbENvdW50IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUhhc2goZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2Jyk7XHJcbiAgICBjb25zdCBzdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGVQYXRoKTtcclxuXHJcbiAgICBzdHJlYW0ub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBoYXNoLnVwZGF0ZShkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKGhhc2guZGlnZXN0KCdoZXgnKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdHJlYW0ub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XHJcbiAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImZzIiwicGF0aCIsImNyeXB0byIsIkJBU0VfUEFUSCIsIlBBR0VfU0laRSIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJuZXh0VXJsIiwic3ViZGlyIiwiZ2V0Iiwic2VhcmNoIiwicGFnZSIsInBhcnNlSW50IiwiZnVsbFBhdGgiLCJqb2luIiwiZmlsZXMiLCJ0b3RhbENvdW50IiwiZ2V0RmlsZXMiLCJqc29uIiwiY3VycmVudFBhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJkaXIiLCJhbGxFbnRyaWVzIiwicmVhZGRpclN5bmMiLCJ3aXRoRmlsZVR5cGVzIiwic2VhcmNoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlcmVkRW50cmllcyIsImZpbHRlciIsImVudHJ5IiwibmFtZSIsImluY2x1ZGVzIiwibGVuZ3RoIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwicGFnaW5hdGVkRW50cmllcyIsInNsaWNlIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImlzRGlyZWN0b3J5Iiwic2l6ZSIsImxhc3RNb2RpZmllZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInJlbGF0aXZlIiwic3RhdHMiLCJzdGF0U3luYyIsIm10aW1lIiwiQm9vbGVhbiIsImNhbGN1bGF0ZUhhc2giLCJmaWxlUGF0aCIsInJlc29sdmUiLCJyZWplY3QiLCJoYXNoIiwiY3JlYXRlSGFzaCIsInN0cmVhbSIsImNyZWF0ZVJlYWRTdHJlYW0iLCJvbiIsImRhdGEiLCJ1cGRhdGUiLCJkaWdlc3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/files/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=O%3A%5Cinnercircle-indexer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=O%3A%5Cinnercircle-indexer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();