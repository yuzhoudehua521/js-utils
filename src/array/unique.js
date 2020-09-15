// 1). 理解:
//     创建一个不重复的数组副本, 只有首次出现的元素才会被保留
//     如: uniq([2, 3, 2, 7, 6, 7]) ==> [2, 3, 7, 6]
// 2). 实现:
//     方法1: 利用forEach()和indexOf()
//             说明: 本质是双重遍历, 效率差些
//     方法2: 利用forEach() + 对象容器
//             说明: 只需一重遍历, 效率高些
//     方法3: 利用ES6语法: from + Set 或者 ... + Set
//             说明: 编码简洁

export function unique1(array) {
  const arr = [];

  array.forEach((item) => {
    //不存在返回-1，push数组中
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    }
  });

  return arr;
}

export function unique2(array) {
  const arr = [];
  const temp = {};

  array.forEach((item) => {
    //利用对象key的唯一性
    if (!temp.hasOwnProperty(item)) {
      arr.push(item);
      temp[item] = true;
    }
  });

  return arr;
}

// 例一 可以接受一个数组作为参数
// const set = new Set([1,2,3,4,4,]);
// ...将一个数组转为用逗号分隔的参数序列
// console.log([...set]);

export function unique3(array) {
  return [...new Set(array)];
}
