"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parseley";
exports.ids = ["vendor-chunks/parseley"];
exports.modules = {

/***/ "(action-browser)/./node_modules/parseley/lib/parseley.mjs":
/*!************************************************!*\
  !*** ./node_modules/parseley/lib/parseley.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ast: () => (/* binding */ ast),\n/* harmony export */   compareSelectors: () => (/* binding */ compareSelectors),\n/* harmony export */   compareSpecificity: () => (/* binding */ compareSpecificity),\n/* harmony export */   normalize: () => (/* binding */ normalize),\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   parse1: () => (/* binding */ parse1),\n/* harmony export */   serialize: () => (/* binding */ serialize)\n/* harmony export */ });\n/* harmony import */ var leac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leac */ \"(action-browser)/./node_modules/leac/lib/leac.mjs\");\n/* harmony import */ var peberminta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peberminta */ \"(action-browser)/./node_modules/peberminta/lib/core.mjs\");\n\n\n\nvar ast = /*#__PURE__*/Object.freeze({\n    __proto__: null\n});\n\nconst ws = `(?:[ \\\\t\\\\r\\\\n\\\\f]*)`;\nconst nl = `(?:\\\\n|\\\\r\\\\n|\\\\r|\\\\f)`;\nconst nonascii = `[^\\\\x00-\\\\x7F]`;\nconst unicode = `(?:\\\\\\\\[0-9a-f]{1,6}(?:\\\\r\\\\n|[ \\\\n\\\\r\\\\t\\\\f])?)`;\nconst escape = `(?:\\\\\\\\[^\\\\n\\\\r\\\\f0-9a-f])`;\nconst nmstart = `(?:[_a-z]|${nonascii}|${unicode}|${escape})`;\nconst nmchar = `(?:[_a-z0-9-]|${nonascii}|${unicode}|${escape})`;\nconst name = `(?:${nmchar}+)`;\nconst ident = `(?:[-]?${nmstart}${nmchar}*)`;\nconst string1 = `'([^\\\\n\\\\r\\\\f\\\\\\\\']|\\\\\\\\${nl}|${nonascii}|${unicode}|${escape})*'`;\nconst string2 = `\"([^\\\\n\\\\r\\\\f\\\\\\\\\"]|\\\\\\\\${nl}|${nonascii}|${unicode}|${escape})*\"`;\nconst lexSelector = (0,leac__WEBPACK_IMPORTED_MODULE_0__.createLexer)([\n    { name: 'ws', regex: new RegExp(ws) },\n    { name: 'hash', regex: new RegExp(`#${name}`, 'i') },\n    { name: 'ident', regex: new RegExp(ident, 'i') },\n    { name: 'str1', regex: new RegExp(string1, 'i') },\n    { name: 'str2', regex: new RegExp(string2, 'i') },\n    { name: '*' },\n    { name: '.' },\n    { name: ',' },\n    { name: '[' },\n    { name: ']' },\n    { name: '=' },\n    { name: '>' },\n    { name: '|' },\n    { name: '+' },\n    { name: '~' },\n    { name: '^' },\n    { name: '$' },\n]);\nconst lexEscapedString = (0,leac__WEBPACK_IMPORTED_MODULE_0__.createLexer)([\n    { name: 'unicode', regex: new RegExp(unicode, 'i') },\n    { name: 'escape', regex: new RegExp(escape, 'i') },\n    { name: 'any', regex: new RegExp('[\\\\s\\\\S]', 'i') }\n]);\nfunction sumSpec([a0, a1, a2], [b0, b1, b2]) {\n    return [a0 + b0, a1 + b1, a2 + b2];\n}\nfunction sumAllSpec(ss) {\n    return ss.reduce(sumSpec, [0, 0, 0]);\n}\nconst unicodeEscapedSequence_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'unicode' ? String.fromCodePoint(parseInt(t.text.slice(1), 16)) : undefined);\nconst escapedSequence_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'escape' ? t.text.slice(1) : undefined);\nconst anyChar_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'any' ? t.text : undefined);\nconst escapedString_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(peberminta__WEBPACK_IMPORTED_MODULE_1__.many(peberminta__WEBPACK_IMPORTED_MODULE_1__.or(unicodeEscapedSequence_, escapedSequence_, anyChar_)), (cs) => cs.join(''));\nfunction unescape(escapedString) {\n    const lexerResult = lexEscapedString(escapedString);\n    const result = escapedString_({ tokens: lexerResult.tokens, options: undefined }, 0);\n    return result.value;\n}\nfunction literal(name) {\n    return peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === name ? true : undefined);\n}\nconst whitespace_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'ws' ? null : undefined);\nconst optionalWhitespace_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.option(whitespace_, null);\nfunction optionallySpaced(parser) {\n    return peberminta__WEBPACK_IMPORTED_MODULE_1__.middle(optionalWhitespace_, parser, optionalWhitespace_);\n}\nconst identifier_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'ident' ? unescape(t.text) : undefined);\nconst hashId_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'hash' ? unescape(t.text.slice(1)) : undefined);\nconst string_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name.startsWith('str') ? unescape(t.text.slice(1, -1)) : undefined);\nconst namespace_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.left(peberminta__WEBPACK_IMPORTED_MODULE_1__.option(identifier_, ''), literal('|'));\nconst qualifiedName_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(namespace_, identifier_, (ns, name) => ({ name: name, namespace: ns })), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(identifier_, (name) => ({ name: name, namespace: null })));\nconst uniSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(namespace_, literal('*'), (ns) => ({ type: 'universal', namespace: ns, specificity: [0, 0, 0] })), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('*'), () => ({ type: 'universal', namespace: null, specificity: [0, 0, 0] })));\nconst tagSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(qualifiedName_, ({ name, namespace }) => ({\n    type: 'tag',\n    name: name,\n    namespace: namespace,\n    specificity: [0, 0, 1]\n}));\nconst classSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('.'), identifier_, (fullstop, name) => ({\n    type: 'class',\n    name: name,\n    specificity: [0, 1, 0]\n}));\nconst idSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(hashId_, (name) => ({\n    type: 'id',\n    name: name,\n    specificity: [1, 0, 0]\n}));\nconst attrModifier_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => {\n    if (t.name === 'ident') {\n        if (t.text === 'i' || t.text === 'I') {\n            return 'i';\n        }\n        if (t.text === 's' || t.text === 'S') {\n            return 's';\n        }\n    }\n    return undefined;\n});\nconst attrValue_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(string_, peberminta__WEBPACK_IMPORTED_MODULE_1__.option(peberminta__WEBPACK_IMPORTED_MODULE_1__.right(optionalWhitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(identifier_, peberminta__WEBPACK_IMPORTED_MODULE_1__.option(peberminta__WEBPACK_IMPORTED_MODULE_1__.right(whitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })));\nconst attrMatcher_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.choice(peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('='), () => '='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('~'), literal('='), () => '~='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('|'), literal('='), () => '|='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('^'), literal('='), () => '^='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('$'), literal('='), () => '$='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('*'), literal('='), () => '*='));\nconst attrPresenceSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.abc(literal('['), optionallySpaced(qualifiedName_), literal(']'), (lbr, { name, namespace }) => ({\n    type: 'attrPresence',\n    name: name,\n    namespace: namespace,\n    specificity: [0, 1, 0]\n}));\nconst attrValueSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.middle(literal('['), peberminta__WEBPACK_IMPORTED_MODULE_1__.abc(optionallySpaced(qualifiedName_), attrMatcher_, optionallySpaced(attrValue_), ({ name, namespace }, matcher, { value, modifier }) => ({\n    type: 'attrValue',\n    name: name,\n    namespace: namespace,\n    matcher: matcher,\n    value: value,\n    modifier: modifier,\n    specificity: [0, 1, 0]\n})), literal(']'));\nconst attrSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(attrPresenceSelector_, attrValueSelector_);\nconst typeSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(uniSelector_, tagSelector_);\nconst subclassSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.choice(idSelector_, classSelector_, attrSelector_);\nconst compoundSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.flatten(typeSelector_, peberminta__WEBPACK_IMPORTED_MODULE_1__.many(subclassSelector_)), peberminta__WEBPACK_IMPORTED_MODULE_1__.many1(subclassSelector_)), (ss) => {\n    return {\n        type: 'compound',\n        list: ss,\n        specificity: sumAllSpec(ss.map(s => s.specificity))\n    };\n});\nconst combinator_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.choice(peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('>'), () => '>'), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('+'), () => '+'), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('~'), () => '~'), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('|'), literal('|'), () => '||'));\nconst combinatorSeparator_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(optionallySpaced(combinator_), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(whitespace_, () => ' '));\nconst complexSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.leftAssoc2(compoundSelector_, peberminta__WEBPACK_IMPORTED_MODULE_1__.map(combinatorSeparator_, (c) => (left, right) => ({\n    type: 'compound',\n    list: [...right.list, { type: 'combinator', combinator: c, left: left, specificity: left.specificity }],\n    specificity: sumSpec(left.specificity, right.specificity)\n})), compoundSelector_);\nconst listSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.leftAssoc2(peberminta__WEBPACK_IMPORTED_MODULE_1__.map(complexSelector_, (s) => ({ type: 'list', list: [s] })), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(optionallySpaced(literal(',')), () => (acc, next) => ({ type: 'list', list: [...acc.list, next] })), complexSelector_);\nfunction parse_(parser, str) {\n    if (!(typeof str === 'string' || str instanceof String)) {\n        throw new Error('Expected a selector string. Actual input is not a string!');\n    }\n    const lexerResult = lexSelector(str);\n    if (!lexerResult.complete) {\n        throw new Error(`The input \"${str}\" was only partially tokenized, stopped at offset ${lexerResult.offset}!\\n` +\n            prettyPrintPosition(str, lexerResult.offset));\n    }\n    const result = optionallySpaced(parser)({ tokens: lexerResult.tokens, options: undefined }, 0);\n    if (!result.matched) {\n        throw new Error(`No match for \"${str}\" input!`);\n    }\n    if (result.position < lexerResult.tokens.length) {\n        const token = lexerResult.tokens[result.position];\n        throw new Error(`The input \"${str}\" was only partially parsed, stopped at offset ${token.offset}!\\n` +\n            prettyPrintPosition(str, token.offset, token.len));\n    }\n    return result.value;\n}\nfunction prettyPrintPosition(str, offset, len = 1) {\n    return `${str.replace(/(\\t)|(\\r)|(\\n)/g, (m, t, r) => t ? '\\u2409' : r ? '\\u240d' : '\\u240a')}\\n${''.padEnd(offset)}${'^'.repeat(len)}`;\n}\nfunction parse(str) {\n    return parse_(listSelector_, str);\n}\nfunction parse1(str) {\n    return parse_(complexSelector_, str);\n}\n\nfunction serialize(selector) {\n    if (!selector.type) {\n        throw new Error('This is not an AST node.');\n    }\n    switch (selector.type) {\n        case 'universal':\n            return _serNs(selector.namespace) + '*';\n        case 'tag':\n            return _serNs(selector.namespace) + _serIdent(selector.name);\n        case 'class':\n            return '.' + _serIdent(selector.name);\n        case 'id':\n            return '#' + _serIdent(selector.name);\n        case 'attrPresence':\n            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}]`;\n        case 'attrValue':\n            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}${selector.matcher}\"${_serStr(selector.value)}\"${(selector.modifier ? selector.modifier : '')}]`;\n        case 'combinator':\n            return serialize(selector.left) + selector.combinator;\n        case 'compound':\n            return selector.list.reduce((acc, node) => {\n                if (node.type === 'combinator') {\n                    return serialize(node) + acc;\n                }\n                else {\n                    return acc + serialize(node);\n                }\n            }, '');\n        case 'list':\n            return selector.list.map(serialize).join(',');\n    }\n}\nfunction _serNs(ns) {\n    return (ns || ns === '')\n        ? _serIdent(ns) + '|'\n        : '';\n}\nfunction _codePoint(char) {\n    return `\\\\${char.codePointAt(0).toString(16)} `;\n}\nfunction _serIdent(str) {\n    return str.replace(\n    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\\x00-\\x7F])|(\\x00)|([\\x01-\\x1f]|\\x7f)|([\\s\\S])/g, (m, d1, d2, hy, safe, nl, ctrl, other) => d1 ? _codePoint(d1) :\n        d2 ? '-' + _codePoint(d2.slice(1)) :\n            hy ? '\\\\-' :\n                safe ? safe :\n                    nl ? '\\ufffd' :\n                        ctrl ? _codePoint(ctrl) :\n                            '\\\\' + other);\n}\nfunction _serStr(str) {\n    return str.replace(\n    /(\")|(\\\\)|(\\x00)|([\\x01-\\x1f]|\\x7f)/g, (m, dq, bs, nl, ctrl) => dq ? '\\\\\"' :\n        bs ? '\\\\\\\\' :\n            nl ? '\\ufffd' :\n                _codePoint(ctrl));\n}\nfunction normalize(selector) {\n    if (!selector.type) {\n        throw new Error('This is not an AST node.');\n    }\n    switch (selector.type) {\n        case 'compound': {\n            selector.list.forEach(normalize);\n            selector.list.sort((a, b) => _compareArrays(_getSelectorPriority(a), _getSelectorPriority(b)));\n            break;\n        }\n        case 'combinator': {\n            normalize(selector.left);\n            break;\n        }\n        case 'list': {\n            selector.list.forEach(normalize);\n            selector.list.sort((a, b) => (serialize(a) < serialize(b)) ? -1 : 1);\n            break;\n        }\n    }\n    return selector;\n}\nfunction _getSelectorPriority(selector) {\n    switch (selector.type) {\n        case 'universal':\n            return [1];\n        case 'tag':\n            return [1];\n        case 'id':\n            return [2];\n        case 'class':\n            return [3, selector.name];\n        case 'attrPresence':\n            return [4, serialize(selector)];\n        case 'attrValue':\n            return [5, serialize(selector)];\n        case 'combinator':\n            return [15, serialize(selector)];\n    }\n}\nfunction compareSelectors(a, b) {\n    return _compareArrays(a.specificity, b.specificity);\n}\nfunction compareSpecificity(a, b) {\n    return _compareArrays(a, b);\n}\nfunction _compareArrays(a, b) {\n    if (!Array.isArray(a) || !Array.isArray(b)) {\n        throw new Error('Arguments must be arrays.');\n    }\n    const shorter = (a.length < b.length) ? a.length : b.length;\n    for (let i = 0; i < shorter; i++) {\n        if (a[i] === b[i]) {\n            continue;\n        }\n        return (a[i] < b[i]) ? -1 : 1;\n    }\n    return a.length - b.length;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9wYXJzZWxleS9saWIvcGFyc2VsZXkubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQztBQUNIOztBQUVoQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQztBQUNBLDZCQUE2QixTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU87QUFDM0QsZ0NBQWdDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTztBQUM5RCxtQkFBbUIsT0FBTztBQUMxQix3QkFBd0IsUUFBUSxFQUFFLE9BQU87QUFDekMsMkNBQTJDLEdBQUcsR0FBRyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU87QUFDL0UsMkNBQTJDLEdBQUcsR0FBRyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU87QUFDL0Usb0JBQW9CLGlEQUFXO0FBQy9CLE1BQU0sbUNBQW1DO0FBQ3pDLE1BQU0sb0NBQW9DLEtBQUssU0FBUztBQUN4RCxNQUFNLDhDQUE4QztBQUNwRCxNQUFNLCtDQUErQztBQUNyRCxNQUFNLCtDQUErQztBQUNyRCxNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQjtBQUNBLHlCQUF5QixpREFBVztBQUNwQyxNQUFNLGtEQUFrRDtBQUN4RCxNQUFNLGdEQUFnRDtBQUN0RCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQU87QUFDdkMseUJBQXlCLDZDQUFPO0FBQ2hDLGlCQUFpQiw2Q0FBTztBQUN4Qix1QkFBdUIsMkNBQUssQ0FBQyw0Q0FBTSxDQUFD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QUFDM0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0NBQWtDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYWRjbi1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcGFyc2VsZXkvbGliL3BhcnNlbGV5Lm1qcz84YWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUxleGVyIH0gZnJvbSAnbGVhYyc7XG5pbXBvcnQgKiBhcyBwIGZyb20gJ3BlYmVybWludGEnO1xuXG52YXIgYXN0ID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG5cbmNvbnN0IHdzID0gYCg/OlsgXFxcXHRcXFxcclxcXFxuXFxcXGZdKilgO1xuY29uc3QgbmwgPSBgKD86XFxcXG58XFxcXHJcXFxcbnxcXFxccnxcXFxcZilgO1xuY29uc3Qgbm9uYXNjaWkgPSBgW15cXFxceDAwLVxcXFx4N0ZdYDtcbmNvbnN0IHVuaWNvZGUgPSBgKD86XFxcXFxcXFxbMC05YS1mXXsxLDZ9KD86XFxcXHJcXFxcbnxbIFxcXFxuXFxcXHJcXFxcdFxcXFxmXSk/KWA7XG5jb25zdCBlc2NhcGUgPSBgKD86XFxcXFxcXFxbXlxcXFxuXFxcXHJcXFxcZjAtOWEtZl0pYDtcbmNvbnN0IG5tc3RhcnQgPSBgKD86W19hLXpdfCR7bm9uYXNjaWl9fCR7dW5pY29kZX18JHtlc2NhcGV9KWA7XG5jb25zdCBubWNoYXIgPSBgKD86W19hLXowLTktXXwke25vbmFzY2lpfXwke3VuaWNvZGV9fCR7ZXNjYXBlfSlgO1xuY29uc3QgbmFtZSA9IGAoPzoke25tY2hhcn0rKWA7XG5jb25zdCBpZGVudCA9IGAoPzpbLV0/JHtubXN0YXJ0fSR7bm1jaGFyfSopYDtcbmNvbnN0IHN0cmluZzEgPSBgJyhbXlxcXFxuXFxcXHJcXFxcZlxcXFxcXFxcJ118XFxcXFxcXFwke25sfXwke25vbmFzY2lpfXwke3VuaWNvZGV9fCR7ZXNjYXBlfSkqJ2A7XG5jb25zdCBzdHJpbmcyID0gYFwiKFteXFxcXG5cXFxcclxcXFxmXFxcXFxcXFxcIl18XFxcXFxcXFwke25sfXwke25vbmFzY2lpfXwke3VuaWNvZGV9fCR7ZXNjYXBlfSkqXCJgO1xuY29uc3QgbGV4U2VsZWN0b3IgPSBjcmVhdGVMZXhlcihbXG4gICAgeyBuYW1lOiAnd3MnLCByZWdleDogbmV3IFJlZ0V4cCh3cykgfSxcbiAgICB7IG5hbWU6ICdoYXNoJywgcmVnZXg6IG5ldyBSZWdFeHAoYCMke25hbWV9YCwgJ2knKSB9LFxuICAgIHsgbmFtZTogJ2lkZW50JywgcmVnZXg6IG5ldyBSZWdFeHAoaWRlbnQsICdpJykgfSxcbiAgICB7IG5hbWU6ICdzdHIxJywgcmVnZXg6IG5ldyBSZWdFeHAoc3RyaW5nMSwgJ2knKSB9LFxuICAgIHsgbmFtZTogJ3N0cjInLCByZWdleDogbmV3IFJlZ0V4cChzdHJpbmcyLCAnaScpIH0sXG4gICAgeyBuYW1lOiAnKicgfSxcbiAgICB7IG5hbWU6ICcuJyB9LFxuICAgIHsgbmFtZTogJywnIH0sXG4gICAgeyBuYW1lOiAnWycgfSxcbiAgICB7IG5hbWU6ICddJyB9LFxuICAgIHsgbmFtZTogJz0nIH0sXG4gICAgeyBuYW1lOiAnPicgfSxcbiAgICB7IG5hbWU6ICd8JyB9LFxuICAgIHsgbmFtZTogJysnIH0sXG4gICAgeyBuYW1lOiAnficgfSxcbiAgICB7IG5hbWU6ICdeJyB9LFxuICAgIHsgbmFtZTogJyQnIH0sXG5dKTtcbmNvbnN0IGxleEVzY2FwZWRTdHJpbmcgPSBjcmVhdGVMZXhlcihbXG4gICAgeyBuYW1lOiAndW5pY29kZScsIHJlZ2V4OiBuZXcgUmVnRXhwKHVuaWNvZGUsICdpJykgfSxcbiAgICB7IG5hbWU6ICdlc2NhcGUnLCByZWdleDogbmV3IFJlZ0V4cChlc2NhcGUsICdpJykgfSxcbiAgICB7IG5hbWU6ICdhbnknLCByZWdleDogbmV3IFJlZ0V4cCgnW1xcXFxzXFxcXFNdJywgJ2knKSB9XG5dKTtcbmZ1bmN0aW9uIHN1bVNwZWMoW2EwLCBhMSwgYTJdLCBbYjAsIGIxLCBiMl0pIHtcbiAgICByZXR1cm4gW2EwICsgYjAsIGExICsgYjEsIGEyICsgYjJdO1xufVxuZnVuY3Rpb24gc3VtQWxsU3BlYyhzcykge1xuICAgIHJldHVybiBzcy5yZWR1Y2Uoc3VtU3BlYywgWzAsIDAsIDBdKTtcbn1cbmNvbnN0IHVuaWNvZGVFc2NhcGVkU2VxdWVuY2VfID0gcC50b2tlbigodCkgPT4gdC5uYW1lID09PSAndW5pY29kZScgPyBTdHJpbmcuZnJvbUNvZGVQb2ludChwYXJzZUludCh0LnRleHQuc2xpY2UoMSksIDE2KSkgOiB1bmRlZmluZWQpO1xuY29uc3QgZXNjYXBlZFNlcXVlbmNlXyA9IHAudG9rZW4oKHQpID0+IHQubmFtZSA9PT0gJ2VzY2FwZScgPyB0LnRleHQuc2xpY2UoMSkgOiB1bmRlZmluZWQpO1xuY29uc3QgYW55Q2hhcl8gPSBwLnRva2VuKCh0KSA9PiB0Lm5hbWUgPT09ICdhbnknID8gdC50ZXh0IDogdW5kZWZpbmVkKTtcbmNvbnN0IGVzY2FwZWRTdHJpbmdfID0gcC5tYXAocC5tYW55KHAub3IodW5pY29kZUVzY2FwZWRTZXF1ZW5jZV8sIGVzY2FwZWRTZXF1ZW5jZV8sIGFueUNoYXJfKSksIChjcykgPT4gY3Muam9pbignJykpO1xuZnVuY3Rpb24gdW5lc2NhcGUoZXNjYXBlZFN0cmluZykge1xuICAgIGNvbnN0IGxleGVyUmVzdWx0ID0gbGV4RXNjYXBlZFN0cmluZyhlc2NhcGVkU3RyaW5nKTtcbiAgICBjb25zdCByZXN1bHQgPSBlc2NhcGVkU3RyaW5nXyh7IHRva2VuczogbGV4ZXJSZXN1bHQudG9rZW5zLCBvcHRpb25zOiB1bmRlZmluZWQgfSwgMCk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbn1cbmZ1bmN0aW9uIGxpdGVyYWwobmFtZSkge1xuICAgIHJldHVybiBwLnRva2VuKCh0KSA9PiB0Lm5hbWUgPT09IG5hbWUgPyB0cnVlIDogdW5kZWZpbmVkKTtcbn1cbmNvbnN0IHdoaXRlc3BhY2VfID0gcC50b2tlbigodCkgPT4gdC5uYW1lID09PSAnd3MnID8gbnVsbCA6IHVuZGVmaW5lZCk7XG5jb25zdCBvcHRpb25hbFdoaXRlc3BhY2VfID0gcC5vcHRpb24od2hpdGVzcGFjZV8sIG51bGwpO1xuZnVuY3Rpb24gb3B0aW9uYWxseVNwYWNlZChwYXJzZXIpIHtcbiAgICByZXR1cm4gcC5taWRkbGUob3B0aW9uYWxXaGl0ZXNwYWNlXywgcGFyc2VyLCBvcHRpb25hbFdoaXRlc3BhY2VfKTtcbn1cbmNvbnN0IGlkZW50aWZpZXJfID0gcC50b2tlbigodCkgPT4gdC5uYW1lID09PSAnaWRlbnQnID8gdW5lc2NhcGUodC50ZXh0KSA6IHVuZGVmaW5lZCk7XG5jb25zdCBoYXNoSWRfID0gcC50b2tlbigodCkgPT4gdC5uYW1lID09PSAnaGFzaCcgPyB1bmVzY2FwZSh0LnRleHQuc2xpY2UoMSkpIDogdW5kZWZpbmVkKTtcbmNvbnN0IHN0cmluZ18gPSBwLnRva2VuKCh0KSA9PiB0Lm5hbWUuc3RhcnRzV2l0aCgnc3RyJykgPyB1bmVzY2FwZSh0LnRleHQuc2xpY2UoMSwgLTEpKSA6IHVuZGVmaW5lZCk7XG5jb25zdCBuYW1lc3BhY2VfID0gcC5sZWZ0KHAub3B0aW9uKGlkZW50aWZpZXJfLCAnJyksIGxpdGVyYWwoJ3wnKSk7XG5jb25zdCBxdWFsaWZpZWROYW1lXyA9IHAuZWl0aGVyT3IocC5hYihuYW1lc3BhY2VfLCBpZGVudGlmaWVyXywgKG5zLCBuYW1lKSA9PiAoeyBuYW1lOiBuYW1lLCBuYW1lc3BhY2U6IG5zIH0pKSwgcC5tYXAoaWRlbnRpZmllcl8sIChuYW1lKSA9PiAoeyBuYW1lOiBuYW1lLCBuYW1lc3BhY2U6IG51bGwgfSkpKTtcbmNvbnN0IHVuaVNlbGVjdG9yXyA9IHAuZWl0aGVyT3IocC5hYihuYW1lc3BhY2VfLCBsaXRlcmFsKCcqJyksIChucykgPT4gKHsgdHlwZTogJ3VuaXZlcnNhbCcsIG5hbWVzcGFjZTogbnMsIHNwZWNpZmljaXR5OiBbMCwgMCwgMF0gfSkpLCBwLm1hcChsaXRlcmFsKCcqJyksICgpID0+ICh7IHR5cGU6ICd1bml2ZXJzYWwnLCBuYW1lc3BhY2U6IG51bGwsIHNwZWNpZmljaXR5OiBbMCwgMCwgMF0gfSkpKTtcbmNvbnN0IHRhZ1NlbGVjdG9yXyA9IHAubWFwKHF1YWxpZmllZE5hbWVfLCAoeyBuYW1lLCBuYW1lc3BhY2UgfSkgPT4gKHtcbiAgICB0eXBlOiAndGFnJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIHNwZWNpZmljaXR5OiBbMCwgMCwgMV1cbn0pKTtcbmNvbnN0IGNsYXNzU2VsZWN0b3JfID0gcC5hYihsaXRlcmFsKCcuJyksIGlkZW50aWZpZXJfLCAoZnVsbHN0b3AsIG5hbWUpID0+ICh7XG4gICAgdHlwZTogJ2NsYXNzJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHNwZWNpZmljaXR5OiBbMCwgMSwgMF1cbn0pKTtcbmNvbnN0IGlkU2VsZWN0b3JfID0gcC5tYXAoaGFzaElkXywgKG5hbWUpID0+ICh7XG4gICAgdHlwZTogJ2lkJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHNwZWNpZmljaXR5OiBbMSwgMCwgMF1cbn0pKTtcbmNvbnN0IGF0dHJNb2RpZmllcl8gPSBwLnRva2VuKCh0KSA9PiB7XG4gICAgaWYgKHQubmFtZSA9PT0gJ2lkZW50Jykge1xuICAgICAgICBpZiAodC50ZXh0ID09PSAnaScgfHwgdC50ZXh0ID09PSAnSScpIHtcbiAgICAgICAgICAgIHJldHVybiAnaSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQudGV4dCA9PT0gJ3MnIHx8IHQudGV4dCA9PT0gJ1MnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3MnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59KTtcbmNvbnN0IGF0dHJWYWx1ZV8gPSBwLmVpdGhlck9yKHAuYWIoc3RyaW5nXywgcC5vcHRpb24ocC5yaWdodChvcHRpb25hbFdoaXRlc3BhY2VfLCBhdHRyTW9kaWZpZXJfKSwgbnVsbCksICh2LCBtb2QpID0+ICh7IHZhbHVlOiB2LCBtb2RpZmllcjogbW9kIH0pKSwgcC5hYihpZGVudGlmaWVyXywgcC5vcHRpb24ocC5yaWdodCh3aGl0ZXNwYWNlXywgYXR0ck1vZGlmaWVyXyksIG51bGwpLCAodiwgbW9kKSA9PiAoeyB2YWx1ZTogdiwgbW9kaWZpZXI6IG1vZCB9KSkpO1xuY29uc3QgYXR0ck1hdGNoZXJfID0gcC5jaG9pY2UocC5tYXAobGl0ZXJhbCgnPScpLCAoKSA9PiAnPScpLCBwLmFiKGxpdGVyYWwoJ34nKSwgbGl0ZXJhbCgnPScpLCAoKSA9PiAnfj0nKSwgcC5hYihsaXRlcmFsKCd8JyksIGxpdGVyYWwoJz0nKSwgKCkgPT4gJ3w9JyksIHAuYWIobGl0ZXJhbCgnXicpLCBsaXRlcmFsKCc9JyksICgpID0+ICdePScpLCBwLmFiKGxpdGVyYWwoJyQnKSwgbGl0ZXJhbCgnPScpLCAoKSA9PiAnJD0nKSwgcC5hYihsaXRlcmFsKCcqJyksIGxpdGVyYWwoJz0nKSwgKCkgPT4gJyo9JykpO1xuY29uc3QgYXR0clByZXNlbmNlU2VsZWN0b3JfID0gcC5hYmMobGl0ZXJhbCgnWycpLCBvcHRpb25hbGx5U3BhY2VkKHF1YWxpZmllZE5hbWVfKSwgbGl0ZXJhbCgnXScpLCAobGJyLCB7IG5hbWUsIG5hbWVzcGFjZSB9KSA9PiAoe1xuICAgIHR5cGU6ICdhdHRyUHJlc2VuY2UnLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UsXG4gICAgc3BlY2lmaWNpdHk6IFswLCAxLCAwXVxufSkpO1xuY29uc3QgYXR0clZhbHVlU2VsZWN0b3JfID0gcC5taWRkbGUobGl0ZXJhbCgnWycpLCBwLmFiYyhvcHRpb25hbGx5U3BhY2VkKHF1YWxpZmllZE5hbWVfKSwgYXR0ck1hdGNoZXJfLCBvcHRpb25hbGx5U3BhY2VkKGF0dHJWYWx1ZV8pLCAoeyBuYW1lLCBuYW1lc3BhY2UgfSwgbWF0Y2hlciwgeyB2YWx1ZSwgbW9kaWZpZXIgfSkgPT4gKHtcbiAgICB0eXBlOiAnYXR0clZhbHVlJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIG1hdGNoZXI6IG1hdGNoZXIsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG1vZGlmaWVyOiBtb2RpZmllcixcbiAgICBzcGVjaWZpY2l0eTogWzAsIDEsIDBdXG59KSksIGxpdGVyYWwoJ10nKSk7XG5jb25zdCBhdHRyU2VsZWN0b3JfID0gcC5laXRoZXJPcihhdHRyUHJlc2VuY2VTZWxlY3Rvcl8sIGF0dHJWYWx1ZVNlbGVjdG9yXyk7XG5jb25zdCB0eXBlU2VsZWN0b3JfID0gcC5laXRoZXJPcih1bmlTZWxlY3Rvcl8sIHRhZ1NlbGVjdG9yXyk7XG5jb25zdCBzdWJjbGFzc1NlbGVjdG9yXyA9IHAuY2hvaWNlKGlkU2VsZWN0b3JfLCBjbGFzc1NlbGVjdG9yXywgYXR0clNlbGVjdG9yXyk7XG5jb25zdCBjb21wb3VuZFNlbGVjdG9yXyA9IHAubWFwKHAuZWl0aGVyT3IocC5mbGF0dGVuKHR5cGVTZWxlY3Rvcl8sIHAubWFueShzdWJjbGFzc1NlbGVjdG9yXykpLCBwLm1hbnkxKHN1YmNsYXNzU2VsZWN0b3JfKSksIChzcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdjb21wb3VuZCcsXG4gICAgICAgIGxpc3Q6IHNzLFxuICAgICAgICBzcGVjaWZpY2l0eTogc3VtQWxsU3BlYyhzcy5tYXAocyA9PiBzLnNwZWNpZmljaXR5KSlcbiAgICB9O1xufSk7XG5jb25zdCBjb21iaW5hdG9yXyA9IHAuY2hvaWNlKHAubWFwKGxpdGVyYWwoJz4nKSwgKCkgPT4gJz4nKSwgcC5tYXAobGl0ZXJhbCgnKycpLCAoKSA9PiAnKycpLCBwLm1hcChsaXRlcmFsKCd+JyksICgpID0+ICd+JyksIHAuYWIobGl0ZXJhbCgnfCcpLCBsaXRlcmFsKCd8JyksICgpID0+ICd8fCcpKTtcbmNvbnN0IGNvbWJpbmF0b3JTZXBhcmF0b3JfID0gcC5laXRoZXJPcihvcHRpb25hbGx5U3BhY2VkKGNvbWJpbmF0b3JfKSwgcC5tYXAod2hpdGVzcGFjZV8sICgpID0+ICcgJykpO1xuY29uc3QgY29tcGxleFNlbGVjdG9yXyA9IHAubGVmdEFzc29jMihjb21wb3VuZFNlbGVjdG9yXywgcC5tYXAoY29tYmluYXRvclNlcGFyYXRvcl8sIChjKSA9PiAobGVmdCwgcmlnaHQpID0+ICh7XG4gICAgdHlwZTogJ2NvbXBvdW5kJyxcbiAgICBsaXN0OiBbLi4ucmlnaHQubGlzdCwgeyB0eXBlOiAnY29tYmluYXRvcicsIGNvbWJpbmF0b3I6IGMsIGxlZnQ6IGxlZnQsIHNwZWNpZmljaXR5OiBsZWZ0LnNwZWNpZmljaXR5IH1dLFxuICAgIHNwZWNpZmljaXR5OiBzdW1TcGVjKGxlZnQuc3BlY2lmaWNpdHksIHJpZ2h0LnNwZWNpZmljaXR5KVxufSkpLCBjb21wb3VuZFNlbGVjdG9yXyk7XG5jb25zdCBsaXN0U2VsZWN0b3JfID0gcC5sZWZ0QXNzb2MyKHAubWFwKGNvbXBsZXhTZWxlY3Rvcl8sIChzKSA9PiAoeyB0eXBlOiAnbGlzdCcsIGxpc3Q6IFtzXSB9KSksIHAubWFwKG9wdGlvbmFsbHlTcGFjZWQobGl0ZXJhbCgnLCcpKSwgKCkgPT4gKGFjYywgbmV4dCkgPT4gKHsgdHlwZTogJ2xpc3QnLCBsaXN0OiBbLi4uYWNjLmxpc3QsIG5leHRdIH0pKSwgY29tcGxleFNlbGVjdG9yXyk7XG5mdW5jdGlvbiBwYXJzZV8ocGFyc2VyLCBzdHIpIHtcbiAgICBpZiAoISh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSBzZWxlY3RvciBzdHJpbmcuIEFjdHVhbCBpbnB1dCBpcyBub3QgYSBzdHJpbmchJyk7XG4gICAgfVxuICAgIGNvbnN0IGxleGVyUmVzdWx0ID0gbGV4U2VsZWN0b3Ioc3RyKTtcbiAgICBpZiAoIWxleGVyUmVzdWx0LmNvbXBsZXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGlucHV0IFwiJHtzdHJ9XCIgd2FzIG9ubHkgcGFydGlhbGx5IHRva2VuaXplZCwgc3RvcHBlZCBhdCBvZmZzZXQgJHtsZXhlclJlc3VsdC5vZmZzZXR9IVxcbmAgK1xuICAgICAgICAgICAgcHJldHR5UHJpbnRQb3NpdGlvbihzdHIsIGxleGVyUmVzdWx0Lm9mZnNldCkpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBvcHRpb25hbGx5U3BhY2VkKHBhcnNlcikoeyB0b2tlbnM6IGxleGVyUmVzdWx0LnRva2Vucywgb3B0aW9uczogdW5kZWZpbmVkIH0sIDApO1xuICAgIGlmICghcmVzdWx0Lm1hdGNoZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaCBmb3IgXCIke3N0cn1cIiBpbnB1dCFgKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5wb3NpdGlvbiA8IGxleGVyUmVzdWx0LnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsZXhlclJlc3VsdC50b2tlbnNbcmVzdWx0LnBvc2l0aW9uXTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgaW5wdXQgXCIke3N0cn1cIiB3YXMgb25seSBwYXJ0aWFsbHkgcGFyc2VkLCBzdG9wcGVkIGF0IG9mZnNldCAke3Rva2VuLm9mZnNldH0hXFxuYCArXG4gICAgICAgICAgICBwcmV0dHlQcmludFBvc2l0aW9uKHN0ciwgdG9rZW4ub2Zmc2V0LCB0b2tlbi5sZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbn1cbmZ1bmN0aW9uIHByZXR0eVByaW50UG9zaXRpb24oc3RyLCBvZmZzZXQsIGxlbiA9IDEpIHtcbiAgICByZXR1cm4gYCR7c3RyLnJlcGxhY2UoLyhcXHQpfChcXHIpfChcXG4pL2csIChtLCB0LCByKSA9PiB0ID8gJ1xcdTI0MDknIDogciA/ICdcXHUyNDBkJyA6ICdcXHUyNDBhJyl9XFxuJHsnJy5wYWRFbmQob2Zmc2V0KX0keydeJy5yZXBlYXQobGVuKX1gO1xufVxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHBhcnNlXyhsaXN0U2VsZWN0b3JfLCBzdHIpO1xufVxuZnVuY3Rpb24gcGFyc2UxKHN0cikge1xuICAgIHJldHVybiBwYXJzZV8oY29tcGxleFNlbGVjdG9yXywgc3RyKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3Rvci50eXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBpcyBub3QgYW4gQVNUIG5vZGUuJyk7XG4gICAgfVxuICAgIHN3aXRjaCAoc2VsZWN0b3IudHlwZSkge1xuICAgICAgICBjYXNlICd1bml2ZXJzYWwnOlxuICAgICAgICAgICAgcmV0dXJuIF9zZXJOcyhzZWxlY3Rvci5uYW1lc3BhY2UpICsgJyonO1xuICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgcmV0dXJuIF9zZXJOcyhzZWxlY3Rvci5uYW1lc3BhY2UpICsgX3NlcklkZW50KHNlbGVjdG9yLm5hbWUpO1xuICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gJy4nICsgX3NlcklkZW50KHNlbGVjdG9yLm5hbWUpO1xuICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgICByZXR1cm4gJyMnICsgX3NlcklkZW50KHNlbGVjdG9yLm5hbWUpO1xuICAgICAgICBjYXNlICdhdHRyUHJlc2VuY2UnOlxuICAgICAgICAgICAgcmV0dXJuIGBbJHtfc2VyTnMoc2VsZWN0b3IubmFtZXNwYWNlKX0ke19zZXJJZGVudChzZWxlY3Rvci5uYW1lKX1dYDtcbiAgICAgICAgY2FzZSAnYXR0clZhbHVlJzpcbiAgICAgICAgICAgIHJldHVybiBgWyR7X3Nlck5zKHNlbGVjdG9yLm5hbWVzcGFjZSl9JHtfc2VySWRlbnQoc2VsZWN0b3IubmFtZSl9JHtzZWxlY3Rvci5tYXRjaGVyfVwiJHtfc2VyU3RyKHNlbGVjdG9yLnZhbHVlKX1cIiR7KHNlbGVjdG9yLm1vZGlmaWVyID8gc2VsZWN0b3IubW9kaWZpZXIgOiAnJyl9XWA7XG4gICAgICAgIGNhc2UgJ2NvbWJpbmF0b3InOlxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShzZWxlY3Rvci5sZWZ0KSArIHNlbGVjdG9yLmNvbWJpbmF0b3I7XG4gICAgICAgIGNhc2UgJ2NvbXBvdW5kJzpcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3Rvci5saXN0LnJlZHVjZSgoYWNjLCBub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ2NvbWJpbmF0b3InKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemUobm9kZSkgKyBhY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjICsgc2VyaWFsaXplKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgY2FzZSAnbGlzdCc6XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IubGlzdC5tYXAoc2VyaWFsaXplKS5qb2luKCcsJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX3Nlck5zKG5zKSB7XG4gICAgcmV0dXJuIChucyB8fCBucyA9PT0gJycpXG4gICAgICAgID8gX3NlcklkZW50KG5zKSArICd8J1xuICAgICAgICA6ICcnO1xufVxuZnVuY3Rpb24gX2NvZGVQb2ludChjaGFyKSB7XG4gICAgcmV0dXJuIGBcXFxcJHtjaGFyLmNvZGVQb2ludEF0KDApLnRvU3RyaW5nKDE2KX0gYDtcbn1cbmZ1bmN0aW9uIF9zZXJJZGVudChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoXG4gICAgLyheWzAtOV0pfCheLVswLTldKXwoXi0kKXwoWy0wLTlhLXpBLVpfXXxbXlxceDAwLVxceDdGXSl8KFxceDAwKXwoW1xceDAxLVxceDFmXXxcXHg3Zil8KFtcXHNcXFNdKS9nLCAobSwgZDEsIGQyLCBoeSwgc2FmZSwgbmwsIGN0cmwsIG90aGVyKSA9PiBkMSA/IF9jb2RlUG9pbnQoZDEpIDpcbiAgICAgICAgZDIgPyAnLScgKyBfY29kZVBvaW50KGQyLnNsaWNlKDEpKSA6XG4gICAgICAgICAgICBoeSA/ICdcXFxcLScgOlxuICAgICAgICAgICAgICAgIHNhZmUgPyBzYWZlIDpcbiAgICAgICAgICAgICAgICAgICAgbmwgPyAnXFx1ZmZmZCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3RybCA/IF9jb2RlUG9pbnQoY3RybCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXFxcJyArIG90aGVyKTtcbn1cbmZ1bmN0aW9uIF9zZXJTdHIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKFxuICAgIC8oXCIpfChcXFxcKXwoXFx4MDApfChbXFx4MDEtXFx4MWZdfFxceDdmKS9nLCAobSwgZHEsIGJzLCBubCwgY3RybCkgPT4gZHEgPyAnXFxcXFwiJyA6XG4gICAgICAgIGJzID8gJ1xcXFxcXFxcJyA6XG4gICAgICAgICAgICBubCA/ICdcXHVmZmZkJyA6XG4gICAgICAgICAgICAgICAgX2NvZGVQb2ludChjdHJsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemUoc2VsZWN0b3IpIHtcbiAgICBpZiAoIXNlbGVjdG9yLnR5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGlzIG5vdCBhbiBBU1Qgbm9kZS4nKTtcbiAgICB9XG4gICAgc3dpdGNoIChzZWxlY3Rvci50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvbXBvdW5kJzoge1xuICAgICAgICAgICAgc2VsZWN0b3IubGlzdC5mb3JFYWNoKG5vcm1hbGl6ZSk7XG4gICAgICAgICAgICBzZWxlY3Rvci5saXN0LnNvcnQoKGEsIGIpID0+IF9jb21wYXJlQXJyYXlzKF9nZXRTZWxlY3RvclByaW9yaXR5KGEpLCBfZ2V0U2VsZWN0b3JQcmlvcml0eShiKSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnY29tYmluYXRvcic6IHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZShzZWxlY3Rvci5sZWZ0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2xpc3QnOiB7XG4gICAgICAgICAgICBzZWxlY3Rvci5saXN0LmZvckVhY2gobm9ybWFsaXplKTtcbiAgICAgICAgICAgIHNlbGVjdG9yLmxpc3Quc29ydCgoYSwgYikgPT4gKHNlcmlhbGl6ZShhKSA8IHNlcmlhbGl6ZShiKSkgPyAtMSA6IDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xufVxuZnVuY3Rpb24gX2dldFNlbGVjdG9yUHJpb3JpdHkoc2VsZWN0b3IpIHtcbiAgICBzd2l0Y2ggKHNlbGVjdG9yLnR5cGUpIHtcbiAgICAgICAgY2FzZSAndW5pdmVyc2FsJzpcbiAgICAgICAgICAgIHJldHVybiBbMV07XG4gICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgICAgICByZXR1cm4gWzFdO1xuICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gWzMsIHNlbGVjdG9yLm5hbWVdO1xuICAgICAgICBjYXNlICdhdHRyUHJlc2VuY2UnOlxuICAgICAgICAgICAgcmV0dXJuIFs0LCBzZXJpYWxpemUoc2VsZWN0b3IpXTtcbiAgICAgICAgY2FzZSAnYXR0clZhbHVlJzpcbiAgICAgICAgICAgIHJldHVybiBbNSwgc2VyaWFsaXplKHNlbGVjdG9yKV07XG4gICAgICAgIGNhc2UgJ2NvbWJpbmF0b3InOlxuICAgICAgICAgICAgcmV0dXJuIFsxNSwgc2VyaWFsaXplKHNlbGVjdG9yKV07XG4gICAgfVxufVxuZnVuY3Rpb24gY29tcGFyZVNlbGVjdG9ycyhhLCBiKSB7XG4gICAgcmV0dXJuIF9jb21wYXJlQXJyYXlzKGEuc3BlY2lmaWNpdHksIGIuc3BlY2lmaWNpdHkpO1xufVxuZnVuY3Rpb24gY29tcGFyZVNwZWNpZmljaXR5KGEsIGIpIHtcbiAgICByZXR1cm4gX2NvbXBhcmVBcnJheXMoYSwgYik7XG59XG5mdW5jdGlvbiBfY29tcGFyZUFycmF5cyhhLCBiKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGEpIHx8ICFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXJndW1lbnRzIG11c3QgYmUgYXJyYXlzLicpO1xuICAgIH1cbiAgICBjb25zdCBzaG9ydGVyID0gKGEubGVuZ3RoIDwgYi5sZW5ndGgpID8gYS5sZW5ndGggOiBiLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3J0ZXI7IGkrKykge1xuICAgICAgICBpZiAoYVtpXSA9PT0gYltpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChhW2ldIDwgYltpXSkgPyAtMSA6IDE7XG4gICAgfVxuICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xufVxuXG5leHBvcnQgeyBhc3QgYXMgQXN0LCBjb21wYXJlU2VsZWN0b3JzLCBjb21wYXJlU3BlY2lmaWNpdHksIG5vcm1hbGl6ZSwgcGFyc2UsIHBhcnNlMSwgc2VyaWFsaXplIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/parseley/lib/parseley.mjs\n");

/***/ })

};
;