// connect()
// 语法: var newArray = connect(oldArr, value1[, value2[, ...[, valueN]]])
// 功能: 将n个数组或值与当前数组合并生成一个新数组

export function connect(array, ...values) {
  const arr = [...array];

  values.forEach((value) => {
    if (Array.isArray(value)) {
      arr.push(...value);
    } else {
      arr.push(value);
    }
  });

  return arr;
}
