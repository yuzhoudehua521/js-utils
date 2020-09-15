/* 
merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
  如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]
*/

export function merge(arr1, arr2) {
  // slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组
  const result = arr1.slice();
  if (arr2.length === 0 || !arr2) {
    return result;
  }

  arr2.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });

  return result;
}
