/* 
数组扁平化: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
  如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
*/

/*
方法一: 递归 + reduce() + concat()
concat() 方法用于连接两个或多个数组。
*/
export function flatten1(array) {
  return array.reduce((preArr, item) => {
    if (Array.isArray(item)) {
      //递归插入数组
      return preArr.concat(flatten1(item));
    } else {
      return preArr.concat(item);
    }
  }, []);
}

/*
方法二: ... + some() + concat()
*/
export function flatten2(array) {
  let arr = [].concat(...array);

  //不断循环判断，再连接
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }

  return arr;
}
