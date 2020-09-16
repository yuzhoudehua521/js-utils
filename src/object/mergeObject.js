/* 
merge(...objs): 合并多个对象, 返回一个合并后对象(不改变原对象)
{ a: [{ x: 2 }, { y: 4 }], b: 1}
{ a: { z: 3}, b: [2, 3], c: 'foo'}
合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
*/
import connect from "../array/connect";

export function mergeObject(...objs) {
  const result = {};

  objs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      //result没有key
      if (!result.hasOwnProperty(key)) {
        result[key] = value;
      } else {
        //result有key
        result[key] = connect([], result[key], value);
      }
    });
  });

  return result;
}

// export function mergeObject(...objs) {
//   return objs.reduce((pre, obj) => {
//     // Object.keys 返回一个所有元素为字符串的数组
//     return Object.keys(obj).reduce((p, key) => {
//       p[key] = !p.hasOwnProperty(key) ? obj[key] : [].concat(p[key], obj[key]);
//       return p;
//     }, pre);
//   }, {});
// }
