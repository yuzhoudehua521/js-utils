export function bind(fn, obj, ...args) {
  //...args 优先级比...args1更高
  return (...args1) => {
    if (obj === undefined || obj === null) {
      obj = window;
    }
    obj.temFn = fn;
    const result = obj.temFn(...args, ...args1);
    delete obj.temFn;
    return result;

    //this = fn
    // return this.call(obj, ...args, ...args1);
  };
}
