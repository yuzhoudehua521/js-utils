(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsU"] = factory();
	else
		root["jsU"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/connect.js":
/*!******************************!*\
  !*** ./src/array/connect.js ***!
  \******************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return connect; });\n// connect()\r\n// 语法: var newArray = connect(oldArr, value1[, value2[, ...[, valueN]]])\r\n// 功能: 将n个数组或值与当前数组合并生成一个新数组\r\n\r\nfunction connect(array, ...values) {\r\n  const arr = [...array];\r\n\r\n  values.forEach((value) => {\r\n    if (Array.isArray(value)) {\r\n      arr.push(...value);\r\n    } else {\r\n      arr.push(value);\r\n    }\r\n  });\r\n\r\n  return arr;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/connect.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n/* \r\n实现数组声明式处理系列工具函数\r\n*/\r\n\r\n/* \r\n实现map()\r\n*/\r\nfunction map(array, callback) {\r\n  const arr = [];\r\n  for (let index = 0; index < array.length; index++) {\r\n    arr.push(callback(array[index], index));\r\n  }\r\n  return arr;\r\n}\r\n\r\n/*\r\n  实现reduce() \r\n  */\r\nfunction reduce(array, callback, initValue) {\r\n  let result = initValue;\r\n  for (let index = 0; index < array.length; index++) {\r\n    // 调用回调函数将返回的结果赋值给result\r\n    result = callback(result, array[index], index);\r\n  }\r\n  return result;\r\n}\r\n\r\n/* \r\n  实现filter()\r\n  */\r\nfunction filter(array, callback) {\r\n  const arr = [];\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) {\r\n      arr.push(array[index]);\r\n    }\r\n  }\r\n  return arr;\r\n}\r\n\r\n/* \r\n  实现find()\r\n  */\r\nfunction find(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) {\r\n      return array[index];\r\n    }\r\n  }\r\n  return undefined;\r\n}\r\n\r\n/* \r\n  实现findIndex()\r\n  */\r\nfunction findIndex(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) {\r\n      return index;\r\n    }\r\n  }\r\n  return -1;\r\n}\r\n\r\n/* \r\n   实现every()\r\n   */\r\nfunction every(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (!callback(array[index], index)) {\r\n      // 只有一个结果为false, 直接返回false\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n}\r\n\r\n/* \r\n  实现some()\r\n  */\r\nfunction some(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) {\r\n      // 只有一个结果为true, 直接返回true\r\n      return true;\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* \r\n数组扁平化: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n  如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]\r\n*/\r\n\r\n/*\r\n方法一: 递归 + reduce() + concat()\r\nconcat() 方法用于连接两个或多个数组。\r\n*/\r\nfunction flatten1(array) {\r\n  return array.reduce((preArr, item) => {\r\n    if (Array.isArray(item)) {\r\n      //递归插入数组\r\n      return preArr.concat(flatten1(item));\r\n    } else {\r\n      return preArr.concat(item);\r\n    }\r\n  }, []);\r\n}\r\n\r\n/*\r\n方法二: ... + some() + concat()\r\n*/\r\nfunction flatten2(array) {\r\n  let arr = [].concat(...array);\r\n\r\n  //不断循环判断，再连接\r\n  while (arr.some((item) => Array.isArray(item))) {\r\n    arr = [].concat(...arr);\r\n  }\r\n\r\n  return arr;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n// slice()\r\n// 语法: var newArray = slice(oldArr, [begin[, end]])\r\n// 功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\r\n\r\nfunction slice(array, begin, end) {\r\n  const arr = [];\r\n\r\n  //空数组\r\n  if (array.length === 0) {\r\n    return arr;\r\n  }\r\n\r\n  begin = begin || 0;\r\n  end = end || array.length - 1;\r\n\r\n  if (begin < 0) {\r\n    begin = 0;\r\n  }\r\n  if (end > array.length - 1) {\r\n    end = array.length - 1;\r\n  }\r\n\r\n  for (let i = begin; i < end; i++) {\r\n    arr.push(array[i]);\r\n  }\r\n  return arr;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n// 1). 理解:\r\n//     创建一个不重复的数组副本, 只有首次出现的元素才会被保留\r\n//     如: uniq([2, 3, 2, 7, 6, 7]) ==> [2, 3, 7, 6]\r\n// 2). 实现:\r\n//     方法1: 利用forEach()和indexOf()\r\n//             说明: 本质是双重遍历, 效率差些\r\n//     方法2: 利用forEach() + 对象容器\r\n//             说明: 只需一重遍历, 效率高些\r\n//     方法3: 利用ES6语法: from + Set 或者 ... + Set\r\n//             说明: 编码简洁\r\n\r\nfunction unique1(array) {\r\n  const arr = [];\r\n\r\n  array.forEach((item) => {\r\n    //不存在返回-1，push数组中\r\n    if (arr.indexOf(item) === -1) {\r\n      arr.push(item);\r\n    }\r\n  });\r\n\r\n  return arr;\r\n}\r\n\r\nfunction unique2(array) {\r\n  const arr = [];\r\n  const temp = {};\r\n\r\n  array.forEach((item) => {\r\n    //利用对象key的唯一性\r\n    if (!temp.hasOwnProperty(item)) {\r\n      arr.push(item);\r\n      temp[item] = true;\r\n    }\r\n  });\r\n\r\n  return arr;\r\n}\r\n\r\n// 例一 可以接受一个数组作为参数\r\n// const set = new Set([1,2,3,4,4,]);\r\n// ...将一个数组转为用逗号分隔的参数序列\r\n// console.log([...set]);\r\n\r\nfunction unique3(array) {\r\n  return [...new Set(array)];\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply(fn, obj, args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window;\r\n  }\r\n  obj.temFn = fn;\r\n  const result = obj.temFn(...args);\r\n  delete obj.temFn;\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\nfunction bind(fn, obj, ...args) {\r\n  //...args 优先级比...args1更高\r\n  return (...args1) => {\r\n    if (obj === undefined || obj === null) {\r\n      obj = window;\r\n    }\r\n    obj.temFn = fn;\r\n    const result = obj.temFn(...args, ...args1);\r\n    delete obj.temFn;\r\n    return result;\r\n\r\n    //this = fn\r\n    // return this.call(obj, ...args, ...args1);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\nfunction call(fn, obj, ...args) {\r\n  // fn.call(obj) => obj.fn\r\n\r\n  if (obj === undefined || obj === null) {\r\n    obj = window;\r\n  }\r\n  //this = fn 临时为obj赋予fn,\r\n  obj.temFn = fn;\r\n  // console.log(obj.temFn);  fn\r\n\r\n  //fn(...args)\r\n  const result = obj.temFn(...args);\r\n  delete obj.temFn;\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nfunction debounce(callback, delay) {\r\n  return function (event) {\r\n    //每次频繁触发事件， 都会清除上一个定时器\r\n    if (callback.hasOwnProperty(\"timer\")) {\r\n      clearTimeout(callback.timer);\r\n    }\r\n\r\n    //触发最后一次事件\r\n    callback.timer = setTimeout(() => {\r\n      //执行this.callback(event)\r\n      callback.call(this, event);\r\n\r\n      delete callback.timer;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n//节流\r\nfunction throttle(callback, delay) {\r\n  let pre = 0;\r\n  return function (event) {\r\n    const current = Date.now();\r\n    //相隔时间大于delay才执行\r\n    if (current - pre > delay) {\r\n      callback.call(this, event);\r\n      pre = current;\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: call, apply, bind, debounce, throttle, map, filter, reduce, find, findIndex, every, some, unique1, unique2, unique3, connect, slice, flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_3__[\"debounce\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/connect */ \"./src/array/connect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return _array_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://jsU/./src/index.js?");

/***/ })

/******/ });
});