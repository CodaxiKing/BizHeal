"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-innertext@1.1.5_@types+react@19.1.13_react@19.1.1";
exports.ids = ["vendor-chunks/react-innertext@1.1.5_@types+react@19.1.13_react@19.1.1"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/react-innertext@1.1.5_@types+react@19.1.13_react@19.1.1/node_modules/react-innertext/index.js":
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/react-innertext@1.1.5_@types+react@19.1.13_react@19.1.1/node_modules/react-innertext/index.js ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

eval("\nvar hasProps = function (jsx) {\n    return Object.prototype.hasOwnProperty.call(jsx, 'props');\n};\nvar reduceJsxToString = function (previous, current) {\n    return previous + innerText(current);\n};\nvar innerText = function (jsx) {\n    if (jsx === null ||\n        typeof jsx === 'boolean' ||\n        typeof jsx === 'undefined') {\n        return '';\n    }\n    if (typeof jsx === 'number') {\n        return jsx.toString();\n    }\n    if (typeof jsx === 'string') {\n        return jsx;\n    }\n    if (Array.isArray(jsx)) {\n        return jsx.reduce(reduceJsxToString, '');\n    }\n    if (hasProps(jsx) &&\n        Object.prototype.hasOwnProperty.call(jsx.props, 'children')) {\n        return innerText(jsx.props.children);\n    }\n    return '';\n};\ninnerText.default = innerText;\nmodule.exports = innerText;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LWlubmVydGV4dEAxLjEuNV9AdHlwZXMrcmVhY3RAMTkuMS4xM19yZWFjdEAxOS4xLjEvbm9kZV9tb2R1bGVzL3JlYWN0LWlubmVydGV4dC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LWlubmVydGV4dEAxLjEuNV9AdHlwZXMrcmVhY3RAMTkuMS4xM19yZWFjdEAxOS4xLjEvbm9kZV9tb2R1bGVzL3JlYWN0LWlubmVydGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBoYXNQcm9wcyA9IGZ1bmN0aW9uIChqc3gpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGpzeCwgJ3Byb3BzJyk7XG59O1xudmFyIHJlZHVjZUpzeFRvU3RyaW5nID0gZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgcmV0dXJuIHByZXZpb3VzICsgaW5uZXJUZXh0KGN1cnJlbnQpO1xufTtcbnZhciBpbm5lclRleHQgPSBmdW5jdGlvbiAoanN4KSB7XG4gICAgaWYgKGpzeCA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YganN4ID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgdHlwZW9mIGpzeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGpzeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGpzeC50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGpzeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGpzeDtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanN4KSkge1xuICAgICAgICByZXR1cm4ganN4LnJlZHVjZShyZWR1Y2VKc3hUb1N0cmluZywgJycpO1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcHMoanN4KSAmJlxuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanN4LnByb3BzLCAnY2hpbGRyZW4nKSkge1xuICAgICAgICByZXR1cm4gaW5uZXJUZXh0KGpzeC5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn07XG5pbm5lclRleHQuZGVmYXVsdCA9IGlubmVyVGV4dDtcbm1vZHVsZS5leHBvcnRzID0gaW5uZXJUZXh0O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/react-innertext@1.1.5_@types+react@19.1.13_react@19.1.1/node_modules/react-innertext/index.js\n");

/***/ })

};
;