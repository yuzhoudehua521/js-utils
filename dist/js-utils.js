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

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/* \r\n将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组\r\n*/\r\n\r\nfunction chunk(array, size) {\r\n  if (array.length === 0) {\r\n    return [];\r\n  }\r\n\r\n  size = size || 1;\r\n\r\n  let bigArr = [];\r\n  let smallArr = [];\r\n\r\n  array.forEach((item) => {\r\n    if (smallArr.length === 0) {\r\n      bigArr.push(smallArr);\r\n    }\r\n    smallArr.push(item);\r\n\r\n    if (smallArr.length === size) {\r\n      smallArr = [];\r\n    }\r\n  });\r\n\r\n  return bigArr;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return compact; });\n/* \r\ncompact(array): 返回数组中所有真值元素组成的新数组\r\n*/\r\n\r\nfunction compact(array) {\r\n  return array.filter((item) => {\r\n    if (item) {\r\n      return item;\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/compact.js?");

/***/ }),

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

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* \r\ndifference(arr1, arr2): 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)\r\n    如: [1,3,5,7].difference([5, 8])  ==> [1, 3, 7]\r\n*/\r\n\r\nfunction difference(arr1, arr2) {\r\n  if (arr1.length === 0) {\r\n    return [];\r\n  } else if (arr2.length === 0) {\r\n    return arr1.slice();\r\n  }\r\n  return arr1.filter((item) => arr2.indexOf(item) === -1);\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n/* \r\n1. drop(array, count): \r\n    得到数组过滤掉左边count个后剩余元素组成的数组\r\n    说明: 不改变当前数组, count默认是1\r\n    如: drop([1,3,5,7], 2) ===> [5, 7]\r\n2. dropRight(array, count): \r\n    得到数组过滤掉右边count个后剩余元素组成的数组\r\n    说明: 不改变数组, count默认是1\r\n    如: dropRight([1,3,5,7], 2) ===> [1, 3]\r\n*/\r\n\r\nfunction drop(array, count) {\r\n  if (array.length === 0 || count >= array.length) {\r\n    return [];\r\n  }\r\n  count = count || 1;\r\n\r\n  return array.filter((item, index) => index >= count);\r\n}\r\n\r\nfunction dropRight(array, count) {\r\n  if (array.length === 0 || count >= array.length) {\r\n    return [];\r\n  }\r\n  count = count || 1;\r\n\r\n  return array.filter((item, index) => index < array.length - count);\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/drop.js?");

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

/***/ "./src/array/merge.js":
/*!****************************!*\
  !*** ./src/array/merge.js ***!
  \****************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return merge; });\n/* \r\nmerge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\r\n  如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]\r\n*/\r\n\r\nfunction merge(arr1, arr2) {\r\n  // slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组\r\n  const result = arr1.slice();\r\n  if (arr2.length === 0 || !arr2) {\r\n    return result;\r\n  }\r\n\r\n  arr2.forEach((item) => {\r\n    if (result.indexOf(item) === -1) {\r\n      result.push(item);\r\n    }\r\n  });\r\n\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/merge.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\n/* \r\n1. pull(array, ...values): \r\n    删除数组中与value相同的元素, 返回所有删除元素的数组\r\n    说明: 数组发生了改变\r\n    如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n2. pullAll(array, values): \r\n    功能与pull一致, 只是参数变为数组\r\n    如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n*/\r\n\r\nfunction pull(array, ...values) {\r\n  if (array.length === 0 || values.length === 0) {\r\n    return [];\r\n  }\r\n\r\n  //from通过字符串创建一个数组,Array.from方法可以将Set结构转为数组，set返回不重复类数组\r\n  values = Array.from(new Set(values));\r\n  const result = [];\r\n\r\n  //改变原数组，返回新数组\r\n  for (let index = 0; index < array.length; index++) {\r\n    const item = array[index];\r\n\r\n    if (values.indexOf(item) !== -1) {\r\n      //原数组存在就进行删除\r\n      array.splice(index, 1);\r\n      result.push(item);\r\n      index--;\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\nfunction pullAll(array, values) {\r\n  if (!values || !Array.isArray(values)) {\r\n    return [];\r\n  }\r\n  return pull(array, ...values);\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/array/pull.js?");

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
/*! exports provided: call, apply, bind, debounce, throttle, map, filter, reduce, find, findIndex, every, some, unique1, unique2, unique3, connect, slice, compact, chunk, flatten1, flatten2, difference, merge, pull, pullAll, drop, dropRight, newInstance, newInstanceOf, mergeObject, shallowClone, deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_3__[\"debounce\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/connect */ \"./src/array/connect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return _array_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_9__[\"compact\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_10__[\"chunk\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_11__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_11__[\"flatten2\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"difference\"]; });\n\n/* harmony import */ var _array_merge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/merge */ \"./src/array/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return _array_merge__WEBPACK_IMPORTED_MODULE_13__[\"merge\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"dropRight\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_newInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/newInstanceOf */ \"./src/object/newInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstanceOf\", function() { return _object_newInstanceOf__WEBPACK_IMPORTED_MODULE_17__[\"newInstanceOf\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"shallowClone\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"shallowClone\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"deepClone\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://jsU/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: shallowClone, deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shallowClone\", function() { return shallowClone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone\", function() { return deepClone; });\n// 浅拷贝只是在根属性(对象的第一层级)创建了一个新的对象，但是对于引用类型只会拷贝一份相同的内存地址。\r\n// 深拷贝后的对象与原来的对象完全隔离，互不影响，对一个对象的修改并不会影响另一个对象。\r\n\r\nfunction shallowClone(target) {\r\n  if (target instanceof Array) {\r\n    return [...target];\r\n  } else if (target instanceof Object) {\r\n    return { ...target };\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\n/*\r\n获取数据的类型字符串名\r\n*/\r\nfunction getType(data) {\r\n  // slice(beginIndex,endIndex)\r\n  return Object.prototype.toString.call(data).slice(8, -1);\r\n}\r\n\r\nfunction deepClone(target) {\r\n  let type = getType(target);\r\n\r\n  if (type === \"Object\" || type === \"Array\") {\r\n    //判断是对象还是数组\r\n    const cloneTarget = type === \"Object\" ? {} : [];\r\n    for (let key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = deepClone(target[key]);\r\n      }\r\n    }\r\n    return cloneTarget;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* harmony import */ var _array_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/connect */ \"./src/array/connect.js\");\n/* \r\nmerge(...objs): 合并多个对象, 返回一个合并后对象(不改变原对象)\r\n{ a: [{ x: 2 }, { y: 4 }], b: 1}\r\n{ a: { z: 3}, b: [2, 3], c: 'foo'}\r\n合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }\r\n*/\r\n\r\n\r\nfunction mergeObject(...objs) {\r\n  const result = {};\r\n\r\n  objs.forEach((obj) => {\r\n    Object.keys(obj).forEach((key) => {\r\n      const value = obj[key];\r\n      //result没有key\r\n      if (!result.hasOwnProperty(key)) {\r\n        result[key] = value;\r\n      } else {\r\n        //result有key\r\n        result[key] = Object(_array_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([], result[key], value);\r\n      }\r\n    });\r\n  });\r\n\r\n  return result;\r\n}\r\n\r\n// export function mergeObject(...objs) {\r\n//   return objs.reduce((pre, obj) => {\r\n//     // Object.keys 返回一个所有元素为字符串的数组\r\n//     return Object.keys(obj).reduce((p, key) => {\r\n//       p[key] = !p.hasOwnProperty(key) ? obj[key] : [].concat(p[key], obj[key]);\r\n//       return p;\r\n//     }, pre);\r\n//   }, {});\r\n// }\r\n\n\n//# sourceURL=webpack://jsU/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n/* \r\n    1. 自定义new工具函数\r\n    语法: newInstance(Fn, ...args)\r\n    功能: 创建Fn构造函数的实例对象\r\n    实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\r\n*/\r\n\r\nfunction newInstance(Fn, ...args) {\r\n  const obj = {};\r\n\r\n  // 相当于: obj.Fn()\r\n  const result = Fn.apply(obj, args);\r\n\r\n  if (result instanceof Object) {\r\n    return result;\r\n  }\r\n\r\n  obj.__proto__ = Fn.prototype;\r\n\r\n  return obj;\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/object/newInstanceOf.js":
/*!*************************************!*\
  !*** ./src/object/newInstanceOf.js ***!
  \*************************************/
/*! exports provided: newInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstanceOf\", function() { return newInstanceOf; });\n/* \r\n自定义instanceof工具函数\r\n语法: newInstanceOf(obj, Type)\r\n功能: 判断obj是否是Type类型的实例\r\n实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false\r\n*/\r\n\r\nfunction newInstanceOf(obj, type) {\r\n  let protoObj = obj.__proto__;\r\n\r\n  if (protoObj && protoObj === type.prototype) {\r\n    return true;\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://jsU/./src/object/newInstanceOf.js?");

/***/ })

/******/ });
});