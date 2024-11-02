"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/estree-util-is-identifier-name";
exports.ids = ["vendor-chunks/estree-util-is-identifier-name"];
exports.modules = {

/***/ "(rsc)/./node_modules/estree-util-is-identifier-name/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/estree-util-is-identifier-name/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cont: () => (/* binding */ cont),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/**\n * @typedef Options\n *   Configuration.\n * @property {boolean | null | undefined} [jsx=false]\n *   Support JSX identifiers (default: `false`).\n */\n\nconst startRe = /[$_\\p{ID_Start}]/u\nconst contRe = /[$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u\nconst contReJsx = /[-$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u\nconst nameRe = /^[$_\\p{ID_Start}][$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u\nconst nameReJsx = /^[$_\\p{ID_Start}][-$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u\n\n/** @type {Options} */\nconst emptyOptions = {}\n\n/**\n * Checks if the given code point can start an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @returns {boolean}\n *   Whether `code` can start an identifier.\n */\n// Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction start(code) {\n  return code ? startRe.test(String.fromCodePoint(code)) : false\n}\n\n/**\n * Checks if the given code point can continue an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `code` can continue an identifier.\n */\n// Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction cont(code, options) {\n  const settings = options || emptyOptions\n  const re = settings.jsx ? contReJsx : contRe\n  return code ? re.test(String.fromCodePoint(code)) : false\n}\n\n/**\n * Checks if the given value is a valid identifier name.\n *\n * @param {string} name\n *   Identifier to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `name` can be an identifier.\n */\nfunction name(name, options) {\n  const settings = options || emptyOptions\n  const re = settings.jsx ? nameReJsx : nameRe\n  return re.test(name)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXN0cmVlLXV0aWwtaXMtaWRlbnRpZmllci1uYW1lL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUVBLHVCQUF1QixTQUFTO0FBQ2hDLHNCQUFzQixLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVk7QUFDbEQsMEJBQTBCLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWTtBQUN0RCx1QkFBdUIsU0FBUyxPQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWTtBQUNuRSwwQkFBMEIsU0FBUyxRQUFRLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWTs7QUFFdkUsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFkY24tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2VzdHJlZS11dGlsLWlzLWlkZW50aWZpZXItbmFtZS9saWIvaW5kZXguanM/MGNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtqc3g9ZmFsc2VdXG4gKiAgIFN1cHBvcnQgSlNYIGlkZW50aWZpZXJzIChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5jb25zdCBzdGFydFJlID0gL1skX1xccHtJRF9TdGFydH1dL3VcbmNvbnN0IGNvbnRSZSA9IC9bJF9cXHV7MjAwQ31cXHV7MjAwRH1cXHB7SURfQ29udGludWV9XS91XG5jb25zdCBjb250UmVKc3ggPSAvWy0kX1xcdXsyMDBDfVxcdXsyMDBEfVxccHtJRF9Db250aW51ZX1dL3VcbmNvbnN0IG5hbWVSZSA9IC9eWyRfXFxwe0lEX1N0YXJ0fV1bJF9cXHV7MjAwQ31cXHV7MjAwRH1cXHB7SURfQ29udGludWV9XSokL3VcbmNvbnN0IG5hbWVSZUpzeCA9IC9eWyRfXFxwe0lEX1N0YXJ0fV1bLSRfXFx1ezIwMEN9XFx1ezIwMER9XFxwe0lEX0NvbnRpbnVlfV0qJC91XG5cbi8qKiBAdHlwZSB7T3B0aW9uc30gKi9cbmNvbnN0IGVtcHR5T3B0aW9ucyA9IHt9XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBjb2RlIHBvaW50IGNhbiBzdGFydCBhbiBpZGVudGlmaWVyLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBjb2RlXG4gKiAgIENvZGUgcG9pbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgY29kZWAgY2FuIHN0YXJ0IGFuIGlkZW50aWZpZXIuXG4gKi9cbi8vIE5vdGU6IGB1bmRlZmluZWRgIGlzIHN1cHBvcnRlZCBzbyB5b3UgY2FuIHBhc3MgdGhlIHJlc3VsdCBmcm9tIGAnJy5jb2RlUG9pbnRBdGAuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICByZXR1cm4gY29kZSA/IHN0YXJ0UmUudGVzdChTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlKSkgOiBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gY29kZSBwb2ludCBjYW4gY29udGludWUgYW4gaWRlbnRpZmllci5cbiAqXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gY29kZVxuICogICBDb2RlIHBvaW50IHRvIGNoZWNrLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGBjb2RlYCBjYW4gY29udGludWUgYW4gaWRlbnRpZmllci5cbiAqL1xuLy8gTm90ZTogYHVuZGVmaW5lZGAgaXMgc3VwcG9ydGVkIHNvIHlvdSBjYW4gcGFzcyB0aGUgcmVzdWx0IGZyb20gYCcnLmNvZGVQb2ludEF0YC5cbmV4cG9ydCBmdW5jdGlvbiBjb250KGNvZGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IGVtcHR5T3B0aW9uc1xuICBjb25zdCByZSA9IHNldHRpbmdzLmpzeCA/IGNvbnRSZUpzeCA6IGNvbnRSZVxuICByZXR1cm4gY29kZSA/IHJlLnRlc3QoU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZSkpIDogZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgdmFsaWQgaWRlbnRpZmllciBuYW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiAgIElkZW50aWZpZXIgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYG5hbWVgIGNhbiBiZSBhbiBpZGVudGlmaWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZShuYW1lLCBvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCBlbXB0eU9wdGlvbnNcbiAgY29uc3QgcmUgPSBzZXR0aW5ncy5qc3ggPyBuYW1lUmVKc3ggOiBuYW1lUmVcbiAgcmV0dXJuIHJlLnRlc3QobmFtZSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/estree-util-is-identifier-name/lib/index.js\n");

/***/ })

};
;