"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-chunked";
exports.ids = ["vendor-chunks/micromark-util-chunked"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-chunked/dev/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-chunked/dev/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   push: () => (/* binding */ push),\n/* harmony export */   splice: () => (/* binding */ splice)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n\n\n/**\n * Like `Array#splice`, but smarter for giant arrays.\n *\n * `Array#splice` takes all items to be inserted as individual argument which\n * causes a stack overflow in V8 when trying to insert 100k items for instance.\n *\n * Otherwise, this does not return the removed items, and takes `items` as an\n * array instead of rest parameters.\n *\n * @template {unknown} T\n *   Item type.\n * @param {Array<T>} list\n *   List to operate on.\n * @param {number} start\n *   Index to remove/insert at (can be negative).\n * @param {number} remove\n *   Number of items to remove.\n * @param {Array<T>} items\n *   Items to inject into `list`.\n * @returns {undefined}\n *   Nothing.\n */\nfunction splice(list, start, remove, items) {\n  const end = list.length\n  let chunkStart = 0\n  /** @type {Array<unknown>} */\n  let parameters\n\n  // Make start between zero and `end` (included).\n  if (start < 0) {\n    start = -start > end ? 0 : end + start\n  } else {\n    start = start > end ? end : start\n  }\n\n  remove = remove > 0 ? remove : 0\n\n  // No need to chunk the items if there’s only a couple (10k) items.\n  if (items.length < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize) {\n    parameters = Array.from(items)\n    parameters.unshift(start, remove)\n    // @ts-expect-error Hush, it’s fine.\n    list.splice(...parameters)\n  } else {\n    // Delete `remove` items starting from `start`\n    if (remove) list.splice(start, remove)\n\n    // Insert the items in chunks to not cause stack overflows.\n    while (chunkStart < items.length) {\n      parameters = items.slice(\n        chunkStart,\n        chunkStart + micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize\n      )\n      parameters.unshift(start, 0)\n      // @ts-expect-error Hush, it’s fine.\n      list.splice(...parameters)\n\n      chunkStart += micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize\n      start += micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize\n    }\n  }\n}\n\n/**\n * Append `items` (an array) at the end of `list` (another array).\n * When `list` was empty, returns `items` instead.\n *\n * This prevents a potentially expensive operation when `list` is empty,\n * and adds items in batches to prevent V8 from hanging.\n *\n * @template {unknown} T\n *   Item type.\n * @param {Array<T>} list\n *   List to operate on.\n * @param {Array<T>} items\n *   Items to add to `list`.\n * @returns {Array<T>}\n *   Either `list` or `items`.\n */\nfunction push(list, items) {\n  if (list.length > 0) {\n    splice(list, list.length, 0, items)\n    return list\n  }\n\n  return items\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2h1bmtlZC9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDREQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDREQUFTO0FBQzdCLGVBQWUsNERBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFkY24tcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWNodW5rZWQvZGV2L2luZGV4LmpzP2E1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBMaWtlIGBBcnJheSNzcGxpY2VgLCBidXQgc21hcnRlciBmb3IgZ2lhbnQgYXJyYXlzLlxuICpcbiAqIGBBcnJheSNzcGxpY2VgIHRha2VzIGFsbCBpdGVtcyB0byBiZSBpbnNlcnRlZCBhcyBpbmRpdmlkdWFsIGFyZ3VtZW50IHdoaWNoXG4gKiBjYXVzZXMgYSBzdGFjayBvdmVyZmxvdyBpbiBWOCB3aGVuIHRyeWluZyB0byBpbnNlcnQgMTAwayBpdGVtcyBmb3IgaW5zdGFuY2UuXG4gKlxuICogT3RoZXJ3aXNlLCB0aGlzIGRvZXMgbm90IHJldHVybiB0aGUgcmVtb3ZlZCBpdGVtcywgYW5kIHRha2VzIGBpdGVtc2AgYXMgYW5cbiAqIGFycmF5IGluc3RlYWQgb2YgcmVzdCBwYXJhbWV0ZXJzLlxuICpcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogICBJdGVtIHR5cGUuXG4gKiBAcGFyYW0ge0FycmF5PFQ+fSBsaXN0XG4gKiAgIExpc3QgdG8gb3BlcmF0ZSBvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFxuICogICBJbmRleCB0byByZW1vdmUvaW5zZXJ0IGF0IChjYW4gYmUgbmVnYXRpdmUpLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZVxuICogICBOdW1iZXIgb2YgaXRlbXMgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtBcnJheTxUPn0gaXRlbXNcbiAqICAgSXRlbXMgdG8gaW5qZWN0IGludG8gYGxpc3RgLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqICAgTm90aGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShsaXN0LCBzdGFydCwgcmVtb3ZlLCBpdGVtcykge1xuICBjb25zdCBlbmQgPSBsaXN0Lmxlbmd0aFxuICBsZXQgY2h1bmtTdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtBcnJheTx1bmtub3duPn0gKi9cbiAgbGV0IHBhcmFtZXRlcnNcblxuICAvLyBNYWtlIHN0YXJ0IGJldHdlZW4gemVybyBhbmQgYGVuZGAgKGluY2x1ZGVkKS5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gZW5kID8gMCA6IGVuZCArIHN0YXJ0XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBzdGFydCA+IGVuZCA/IGVuZCA6IHN0YXJ0XG4gIH1cblxuICByZW1vdmUgPSByZW1vdmUgPiAwID8gcmVtb3ZlIDogMFxuXG4gIC8vIE5vIG5lZWQgdG8gY2h1bmsgdGhlIGl0ZW1zIGlmIHRoZXJl4oCZcyBvbmx5IGEgY291cGxlICgxMGspIGl0ZW1zLlxuICBpZiAoaXRlbXMubGVuZ3RoIDwgY29uc3RhbnRzLnY4TWF4U2FmZUNodW5rU2l6ZSkge1xuICAgIHBhcmFtZXRlcnMgPSBBcnJheS5mcm9tKGl0ZW1zKVxuICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgcmVtb3ZlKVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgSHVzaCwgaXTigJlzIGZpbmUuXG4gICAgbGlzdC5zcGxpY2UoLi4ucGFyYW1ldGVycylcbiAgfSBlbHNlIHtcbiAgICAvLyBEZWxldGUgYHJlbW92ZWAgaXRlbXMgc3RhcnRpbmcgZnJvbSBgc3RhcnRgXG4gICAgaWYgKHJlbW92ZSkgbGlzdC5zcGxpY2Uoc3RhcnQsIHJlbW92ZSlcblxuICAgIC8vIEluc2VydCB0aGUgaXRlbXMgaW4gY2h1bmtzIHRvIG5vdCBjYXVzZSBzdGFjayBvdmVyZmxvd3MuXG4gICAgd2hpbGUgKGNodW5rU3RhcnQgPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHBhcmFtZXRlcnMgPSBpdGVtcy5zbGljZShcbiAgICAgICAgY2h1bmtTdGFydCxcbiAgICAgICAgY2h1bmtTdGFydCArIGNvbnN0YW50cy52OE1heFNhZmVDaHVua1NpemVcbiAgICAgIClcbiAgICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgMClcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgSHVzaCwgaXTigJlzIGZpbmUuXG4gICAgICBsaXN0LnNwbGljZSguLi5wYXJhbWV0ZXJzKVxuXG4gICAgICBjaHVua1N0YXJ0ICs9IGNvbnN0YW50cy52OE1heFNhZmVDaHVua1NpemVcbiAgICAgIHN0YXJ0ICs9IGNvbnN0YW50cy52OE1heFNhZmVDaHVua1NpemVcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBlbmQgYGl0ZW1zYCAoYW4gYXJyYXkpIGF0IHRoZSBlbmQgb2YgYGxpc3RgIChhbm90aGVyIGFycmF5KS5cbiAqIFdoZW4gYGxpc3RgIHdhcyBlbXB0eSwgcmV0dXJucyBgaXRlbXNgIGluc3RlYWQuXG4gKlxuICogVGhpcyBwcmV2ZW50cyBhIHBvdGVudGlhbGx5IGV4cGVuc2l2ZSBvcGVyYXRpb24gd2hlbiBgbGlzdGAgaXMgZW1wdHksXG4gKiBhbmQgYWRkcyBpdGVtcyBpbiBiYXRjaGVzIHRvIHByZXZlbnQgVjggZnJvbSBoYW5naW5nLlxuICpcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogICBJdGVtIHR5cGUuXG4gKiBAcGFyYW0ge0FycmF5PFQ+fSBsaXN0XG4gKiAgIExpc3QgdG8gb3BlcmF0ZSBvbi5cbiAqIEBwYXJhbSB7QXJyYXk8VD59IGl0ZW1zXG4gKiAgIEl0ZW1zIHRvIGFkZCB0byBgbGlzdGAuXG4gKiBAcmV0dXJucyB7QXJyYXk8VD59XG4gKiAgIEVpdGhlciBgbGlzdGAgb3IgYGl0ZW1zYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2gobGlzdCwgaXRlbXMpIHtcbiAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgIHNwbGljZShsaXN0LCBsaXN0Lmxlbmd0aCwgMCwgaXRlbXMpXG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIHJldHVybiBpdGVtc1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-chunked/dev/index.js\n");

/***/ })

};
;