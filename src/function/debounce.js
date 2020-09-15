export function debounce(callback, delay) {
  return function (event) {
    //每次频繁触发事件， 都会清除上一个定时器
    if (callback.hasOwnProperty("timer")) {
      clearTimeout(callback.timer);
    }

    //触发最后一次事件
    callback.timer = setTimeout(() => {
      //执行this.callback(event)
      callback.call(this, event);

      delete callback.timer;
    }, delay);
  };
}
