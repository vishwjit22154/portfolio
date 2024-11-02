"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-strikethrough";
exports.ids = ["vendor-chunks/micromark-extension-gfm-strikethrough"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughHtml: () => (/* binding */ gfmStrikethroughHtml)\n/* harmony export */ });\n/**\n * @import {HtmlExtension} from 'micromark-util-types'\n */\n\n/**\n * Create an HTML extension for `micromark` to support GFM strikethrough when\n * serializing to HTML.\n *\n * @returns {HtmlExtension}\n *   Extension for `micromark` that can be passed in `htmlExtensions`, to\n *   support GFM strikethrough when serializing to HTML.\n */\nfunction gfmStrikethroughHtml() {\n  return {\n    enter: {\n      strikethrough() {\n        this.tag('<del>')\n      }\n    },\n    exit: {\n      strikethrough() {\n        this.tag('</del>')\n      }\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYWRjbi1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanM/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge0h0bWxFeHRlbnNpb259IGZyb20gJ21pY3JvbWFyay11dGlsLXR5cGVzJ1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGFuIEhUTUwgZXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0byBzdXBwb3J0IEdGTSBzdHJpa2V0aHJvdWdoIHdoZW5cbiAqIHNlcmlhbGl6aW5nIHRvIEhUTUwuXG4gKlxuICogQHJldHVybnMge0h0bWxFeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBodG1sRXh0ZW5zaW9uc2AsIHRvXG4gKiAgIHN1cHBvcnQgR0ZNIHN0cmlrZXRocm91Z2ggd2hlbiBzZXJpYWxpemluZyB0byBIVE1MLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtU3RyaWtldGhyb3VnaEh0bWwoKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IHtcbiAgICAgIHN0cmlrZXRocm91Z2goKSB7XG4gICAgICAgIHRoaXMudGFnKCc8ZGVsPicpXG4gICAgICB9XG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICBzdHJpa2V0aHJvdWdoKCkge1xuICAgICAgICB0aGlzLnRhZygnPC9kZWw+JylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js":
/*!******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethrough: () => (/* binding */ gfmStrikethrough)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-chunked */ \"(rsc)/./node_modules/micromark-util-chunked/dev/index.js\");\n/* harmony import */ var micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-classify-character */ \"(rsc)/./node_modules/micromark-util-classify-character/dev/index.js\");\n/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-resolve-all */ \"(rsc)/./node_modules/micromark-util-resolve-all/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @import {Options} from 'micromark-extension-gfm-strikethrough'\n * @import {Event, Extension, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'\n */\n\n\n\n\n\n\n\n/**\n * Create an extension for `micromark` to enable GFM strikethrough syntax.\n *\n * @param {Options | null | undefined} [options={}]\n *   Configuration.\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `extensions`, to\n *   enable GFM strikethrough syntax.\n */\nfunction gfmStrikethrough(options) {\n  const options_ = options || {}\n  let single = options_.singleTilde\n  const tokenizer = {\n    name: 'strikethrough',\n    tokenize: tokenizeStrikethrough,\n    resolveAll: resolveAllStrikethrough\n  }\n\n  if (single === null || single === undefined) {\n    single = true\n  }\n\n  return {\n    text: {[micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde]: tokenizer},\n    insideSpan: {null: [tokenizer]},\n    attentionMarkers: {null: [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde]}\n  }\n\n  /**\n   * Take events and resolve strikethrough.\n   *\n   * @type {Resolver}\n   */\n  function resolveAllStrikethrough(events, context) {\n    let index = -1\n\n    // Walk through all events.\n    while (++index < events.length) {\n      // Find a token that can close.\n      if (\n        events[index][0] === 'enter' &&\n        events[index][1].type === 'strikethroughSequenceTemporary' &&\n        events[index][1]._close\n      ) {\n        let open = index\n\n        // Now walk back to find an opener.\n        while (open--) {\n          // Find a token that can open the closer.\n          if (\n            events[open][0] === 'exit' &&\n            events[open][1].type === 'strikethroughSequenceTemporary' &&\n            events[open][1]._open &&\n            // If the sizes are the same:\n            events[index][1].end.offset - events[index][1].start.offset ===\n              events[open][1].end.offset - events[open][1].start.offset\n          ) {\n            events[index][1].type = 'strikethroughSequence'\n            events[open][1].type = 'strikethroughSequence'\n\n            /** @type {Token} */\n            const strikethrough = {\n              type: 'strikethrough',\n              start: Object.assign({}, events[open][1].start),\n              end: Object.assign({}, events[index][1].end)\n            }\n\n            /** @type {Token} */\n            const text = {\n              type: 'strikethroughText',\n              start: Object.assign({}, events[open][1].end),\n              end: Object.assign({}, events[index][1].start)\n            }\n\n            // Opening.\n            /** @type {Array<Event>} */\n            const nextEvents = [\n              ['enter', strikethrough, context],\n              ['enter', events[open][1], context],\n              ['exit', events[open][1], context],\n              ['enter', text, context]\n            ]\n\n            const insideSpan = context.parser.constructs.insideSpan.null\n\n            if (insideSpan) {\n              // Between.\n              (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(\n                nextEvents,\n                nextEvents.length,\n                0,\n                (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(insideSpan, events.slice(open + 1, index), context)\n              )\n            }\n\n            // Closing.\n            (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(nextEvents, nextEvents.length, 0, [\n              ['exit', text, context],\n              ['enter', events[index][1], context],\n              ['exit', events[index][1], context],\n              ['exit', strikethrough, context]\n            ])\n\n            ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(events, open - 1, index - open + 3, nextEvents)\n\n            index = open + nextEvents.length - 2\n            break\n          }\n        }\n      }\n    }\n\n    index = -1\n\n    while (++index < events.length) {\n      if (events[index][1].type === 'strikethroughSequenceTemporary') {\n        events[index][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.data\n      }\n    }\n\n    return events\n  }\n\n  /**\n   * @this {TokenizeContext}\n   * @type {Tokenizer}\n   */\n  function tokenizeStrikethrough(effects, ok, nok) {\n    const previous = this.previous\n    const events = this.events\n    let size = 0\n\n    return start\n\n    /** @type {State} */\n    function start(code) {\n      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde, 'expected `~`')\n\n      if (\n        previous === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde &&\n        events[events.length - 1][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.characterEscape\n      ) {\n        return nok(code)\n      }\n\n      effects.enter('strikethroughSequenceTemporary')\n      return more(code)\n    }\n\n    /** @type {State} */\n    function more(code) {\n      const before = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(previous)\n\n      if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde) {\n        // If this is the third marker, exit.\n        if (size > 1) return nok(code)\n        effects.consume(code)\n        size++\n        return more\n      }\n\n      if (size < 2 && !single) return nok(code)\n      const token = effects.exit('strikethroughSequenceTemporary')\n      const after = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(code)\n      token._open =\n        !after || (after === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(before))\n      token._close =\n        !before || (before === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(after))\n      return ok(code)\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL3N5bnRheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksc0VBQXNFO0FBQ2xGOztBQUVtQztBQUNVO0FBQ3NCO0FBQ2Q7QUFDUTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEIsV0FBVztBQUNsRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsQ0FBQyx3REFBSyxtQkFBbUI7QUFDcEMsaUJBQWlCLGtCQUFrQjtBQUNuQyx1QkFBdUIsT0FBTyx3REFBSztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQzs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyw4REFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0VBQVU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLFlBQVksOERBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLCtEQUFNOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx3REFBSztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsTUFBTSwyQ0FBTSxVQUFVLHdEQUFLOztBQUUzQjtBQUNBLHFCQUFxQix3REFBSztBQUMxQiw4Q0FBOEMsd0RBQUs7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxxQkFBcUIsb0ZBQWlCOztBQUV0QyxtQkFBbUIsd0RBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0ZBQWlCO0FBQ3JDO0FBQ0EsNkJBQTZCLDREQUFTO0FBQ3RDO0FBQ0EsK0JBQStCLDREQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhZGNuLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS1zdHJpa2V0aHJvdWdoL2Rldi9saWIvc3ludGF4LmpzP2FiMmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaW1wb3J0IHtPcHRpb25zfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS1zdHJpa2V0aHJvdWdoJ1xuICogQGltcG9ydCB7RXZlbnQsIEV4dGVuc2lvbiwgUmVzb2x2ZXIsIFN0YXRlLCBUb2tlbiwgVG9rZW5pemVDb250ZXh0LCBUb2tlbml6ZXJ9IGZyb20gJ21pY3JvbWFyay11dGlsLXR5cGVzJ1xuICovXG5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5pbXBvcnQge3NwbGljZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2h1bmtlZCdcbmltcG9ydCB7Y2xhc3NpZnlDaGFyYWN0ZXJ9IGZyb20gJ21pY3JvbWFyay11dGlsLWNsYXNzaWZ5LWNoYXJhY3RlcidcbmltcG9ydCB7cmVzb2x2ZUFsbH0gZnJvbSAnbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwnXG5pbXBvcnQge2NvZGVzLCBjb25zdGFudHMsIHR5cGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdG8gZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoIHN5bnRheC5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9ucz17fV1cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtFeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBleHRlbnNpb25zYCwgdG9cbiAqICAgZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoIHN5bnRheC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVN0cmlrZXRocm91Z2gob3B0aW9ucykge1xuICBjb25zdCBvcHRpb25zXyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IHNpbmdsZSA9IG9wdGlvbnNfLnNpbmdsZVRpbGRlXG4gIGNvbnN0IHRva2VuaXplciA9IHtcbiAgICBuYW1lOiAnc3RyaWtldGhyb3VnaCcsXG4gICAgdG9rZW5pemU6IHRva2VuaXplU3RyaWtldGhyb3VnaCxcbiAgICByZXNvbHZlQWxsOiByZXNvbHZlQWxsU3RyaWtldGhyb3VnaFxuICB9XG5cbiAgaWYgKHNpbmdsZSA9PT0gbnVsbCB8fCBzaW5nbGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHNpbmdsZSA9IHRydWVcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGV4dDoge1tjb2Rlcy50aWxkZV06IHRva2VuaXplcn0sXG4gICAgaW5zaWRlU3Bhbjoge251bGw6IFt0b2tlbml6ZXJdfSxcbiAgICBhdHRlbnRpb25NYXJrZXJzOiB7bnVsbDogW2NvZGVzLnRpbGRlXX1cbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIGV2ZW50cyBhbmQgcmVzb2x2ZSBzdHJpa2V0aHJvdWdoLlxuICAgKlxuICAgKiBAdHlwZSB7UmVzb2x2ZXJ9XG4gICAqL1xuICBmdW5jdGlvbiByZXNvbHZlQWxsU3RyaWtldGhyb3VnaChldmVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgLy8gV2FsayB0aHJvdWdoIGFsbCBldmVudHMuXG4gICAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gY2xvc2UuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiZcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JyAmJlxuICAgICAgICBldmVudHNbaW5kZXhdWzFdLl9jbG9zZVxuICAgICAgKSB7XG4gICAgICAgIGxldCBvcGVuID0gaW5kZXhcblxuICAgICAgICAvLyBOb3cgd2FsayBiYWNrIHRvIGZpbmQgYW4gb3BlbmVyLlxuICAgICAgICB3aGlsZSAob3Blbi0tKSB7XG4gICAgICAgICAgLy8gRmluZCBhIHRva2VuIHRoYXQgY2FuIG9wZW4gdGhlIGNsb3Nlci5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMF0gPT09ICdleGl0JyAmJlxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLnR5cGUgPT09ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknICYmXG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uX29wZW4gJiZcbiAgICAgICAgICAgIC8vIElmIHRoZSBzaXplcyBhcmUgdGhlIHNhbWU6XG4gICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCA9PT1cbiAgICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbb3Blbl1bMV0uc3RhcnQub2Zmc2V0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlJ1xuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLnR5cGUgPSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlJ1xuXG4gICAgICAgICAgICAvKiogQHR5cGUge1Rva2VufSAqL1xuICAgICAgICAgICAgY29uc3Qgc3RyaWtldGhyb3VnaCA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmlrZXRocm91Z2gnLFxuICAgICAgICAgICAgICBzdGFydDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW29wZW5dWzFdLnN0YXJ0KSxcbiAgICAgICAgICAgICAgZW5kOiBPYmplY3QuYXNzaWduKHt9LCBldmVudHNbaW5kZXhdWzFdLmVuZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqIEB0eXBlIHtUb2tlbn0gKi9cbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpa2V0aHJvdWdoVGV4dCcsXG4gICAgICAgICAgICAgIHN0YXJ0OiBPYmplY3QuYXNzaWduKHt9LCBldmVudHNbb3Blbl1bMV0uZW5kKSxcbiAgICAgICAgICAgICAgZW5kOiBPYmplY3QuYXNzaWduKHt9LCBldmVudHNbaW5kZXhdWzFdLnN0YXJ0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcGVuaW5nLlxuICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheTxFdmVudD59ICovXG4gICAgICAgICAgICBjb25zdCBuZXh0RXZlbnRzID0gW1xuICAgICAgICAgICAgICBbJ2VudGVyJywgc3RyaWtldGhyb3VnaCwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgdGV4dCwgY29udGV4dF1cbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgY29uc3QgaW5zaWRlU3BhbiA9IGNvbnRleHQucGFyc2VyLmNvbnN0cnVjdHMuaW5zaWRlU3Bhbi5udWxsXG5cbiAgICAgICAgICAgIGlmIChpbnNpZGVTcGFuKSB7XG4gICAgICAgICAgICAgIC8vIEJldHdlZW4uXG4gICAgICAgICAgICAgIHNwbGljZShcbiAgICAgICAgICAgICAgICBuZXh0RXZlbnRzLFxuICAgICAgICAgICAgICAgIG5leHRFdmVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZUFsbChpbnNpZGVTcGFuLCBldmVudHMuc2xpY2Uob3BlbiArIDEsIGluZGV4KSwgY29udGV4dClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDbG9zaW5nLlxuICAgICAgICAgICAgc3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICAgIFsnZXhpdCcsIHRleHQsIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW2luZGV4XVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBzdHJpa2V0aHJvdWdoLCBjb250ZXh0XVxuICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgc3BsaWNlKGV2ZW50cywgb3BlbiAtIDEsIGluZGV4IC0gb3BlbiArIDMsIG5leHRFdmVudHMpXG5cbiAgICAgICAgICAgIGluZGV4ID0gb3BlbiArIG5leHRFdmVudHMubGVuZ3RoIC0gMlxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKSB7XG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9IHR5cGVzLmRhdGFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAgICogQHR5cGUge1Rva2VuaXplcn1cbiAgICovXG4gIGZ1bmN0aW9uIHRva2VuaXplU3RyaWtldGhyb3VnaChlZmZlY3RzLCBvaywgbm9rKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLnByZXZpb3VzXG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHNcbiAgICBsZXQgc2l6ZSA9IDBcblxuICAgIHJldHVybiBzdGFydFxuXG4gICAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgICBhc3NlcnQoY29kZSA9PT0gY29kZXMudGlsZGUsICdleHBlY3RlZCBgfmAnKVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzID09PSBjb2Rlcy50aWxkZSAmJlxuICAgICAgICBldmVudHNbZXZlbnRzLmxlbmd0aCAtIDFdWzFdLnR5cGUgIT09IHR5cGVzLmNoYXJhY3RlckVzY2FwZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBub2soY29kZSlcbiAgICAgIH1cblxuICAgICAgZWZmZWN0cy5lbnRlcignc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JylcbiAgICAgIHJldHVybiBtb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgICBmdW5jdGlvbiBtb3JlKGNvZGUpIHtcbiAgICAgIGNvbnN0IGJlZm9yZSA9IGNsYXNzaWZ5Q2hhcmFjdGVyKHByZXZpb3VzKVxuXG4gICAgICBpZiAoY29kZSA9PT0gY29kZXMudGlsZGUpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgdGhpcmQgbWFya2VyLCBleGl0LlxuICAgICAgICBpZiAoc2l6ZSA+IDEpIHJldHVybiBub2soY29kZSlcbiAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgIHNpemUrK1xuICAgICAgICByZXR1cm4gbW9yZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA8IDIgJiYgIXNpbmdsZSkgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgY29uc3QgdG9rZW4gPSBlZmZlY3RzLmV4aXQoJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScpXG4gICAgICBjb25zdCBhZnRlciA9IGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpXG4gICAgICB0b2tlbi5fb3BlbiA9XG4gICAgICAgICFhZnRlciB8fCAoYWZ0ZXIgPT09IGNvbnN0YW50cy5hdHRlbnRpb25TaWRlQWZ0ZXIgJiYgQm9vbGVhbihiZWZvcmUpKVxuICAgICAgdG9rZW4uX2Nsb3NlID1cbiAgICAgICAgIWJlZm9yZSB8fCAoYmVmb3JlID09PSBjb25zdGFudHMuYXR0ZW50aW9uU2lkZUFmdGVyICYmIEJvb2xlYW4oYWZ0ZXIpKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js\n");

/***/ })

};
;