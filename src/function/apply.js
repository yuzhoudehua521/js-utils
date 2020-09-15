export function apply(fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = window;
  }
  obj.temFn = fn;
  const result = obj.temFn(...args);
  delete obj.temFn;
  return result;
}
