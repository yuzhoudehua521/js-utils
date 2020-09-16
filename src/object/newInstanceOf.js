/* 
自定义instanceof工具函数
语法: newInstanceOf(obj, Type)
功能: 判断obj是否是Type类型的实例
实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false
*/

export function newInstanceOf(obj, type) {
  let protoObj = obj.__proto__;

  if (protoObj && protoObj === type.prototype) {
    return true;
  } else {
    return false;
  }
}
