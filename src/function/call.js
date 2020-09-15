export function call(fn, obj, ...args) {
  // fn.call(obj) => obj.fn

  if (obj === undefined || obj === null) {
    obj = window;
  }
  //this = fn 临时为obj赋予fn,
  obj.temFn = fn;
  // console.log(obj.temFn);  fn

  //fn(...args)
  const result = obj.temFn(...args);
  delete obj.temFn;
  return result;
}
