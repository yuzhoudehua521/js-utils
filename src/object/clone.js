// 浅拷贝只是在根属性(对象的第一层级)创建了一个新的对象，但是对于引用类型只会拷贝一份相同的内存地址。
// 深拷贝后的对象与原来的对象完全隔离，互不影响，对一个对象的修改并不会影响另一个对象。

export function shallowClone(target) {
  if (target instanceof Array) {
    return [...target];
  } else if (target instanceof Object) {
    return { ...target };
  } else {
    return target;
  }
}

/*
获取数据的类型字符串名
*/
function getType(data) {
  // slice(beginIndex,endIndex)
  return Object.prototype.toString.call(data).slice(8, -1);
}

export function deepClone(target) {
  let type = getType(target);

  if (type === "Object" || type === "Array") {
    //判断是对象还是数组
    const cloneTarget = type === "Object" ? {} : [];
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(target[key]);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}
