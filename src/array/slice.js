// slice()
// 语法: var newArray = slice(oldArr, [begin[, end]])
// 功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变

export function slice(array, begin, end) {
  const arr = [];

  //空数组
  if (array.length === 0) {
    return arr;
  }

  begin = begin || 0;
  end = end || array.length - 1;

  if (begin < 0) {
    begin = 0;
  }
  if (end > array.length - 1) {
    end = array.length - 1;
  }

  for (let i = begin; i < end; i++) {
    arr.push(array[i]);
  }
  return arr;
}
