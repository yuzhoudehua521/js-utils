//节流
export function throttle(callback, delay) {
  let pre = 0;
  return function (event) {
    const current = Date.now();
    //相隔时间大于delay才执行
    if (current - pre > delay) {
      callback.call(this, event);
      pre = current;
    }
  };
}
