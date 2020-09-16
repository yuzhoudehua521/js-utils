/* 
    1. 自定义new工具函数
    语法: newInstance(Fn, ...args)
    功能: 创建Fn构造函数的实例对象
    实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj
*/

export function newInstance(Fn, ...args) {
  const obj = {};

  // 相当于: obj.Fn()
  const result = Fn.apply(obj, args);

  if (result instanceof Object) {
    return result;
  }

  obj.__proto__ = Fn.prototype;

  return obj;
}
