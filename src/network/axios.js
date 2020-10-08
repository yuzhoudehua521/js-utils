/* 
  1. 函数的返回值为promise, 成功的结果为response, 失败的结果为error
  2. 能处理多种类型的请求: GET/POST/PUT/DELETE
  3. 函数的参数为一个配置对象
      {
        url: '',   // 请求地址
        method: '',   // 请求方式GET/POST/PUT/DELETE
        params: {},  // GET/DELETE请求的query参数
        data: {}, // POST或DELETE请求的请求体参数 
      }
  4. 响应json数据自动解析为js的对象/数组
*/
/* 发送任意类型请求的函数 */

export function axios(url, method = "GET", params = {}, data = {}) {
  return new Promise((resolve, reject) => {
    //1 处理method(转大写)
    method = method.toUpperCase();

    //2 处理query参数(拼接到url上)   id=1&xxx=abc
    /* 
    {
      id: 1,
      xxx: 'abc'
    }
    */
    let queryString = "";
    // Object.keys(obj)返回数组或对象key所组成的数组
    Object.keys(params).forEach((key) => {
      queryString += `${key}=${params[key]}&`;
    });
    if (queryString) {
      // 去除最后的&
      queryString = queryString.substring(0, queryString.length - 1);
      // 接到url
      url += "?" + queryString;
    }

    //3 执行异步ajax请求, 配置XMLHttpRequest
    // 创建xhr对象
    const request = new XMLHttpRequest();
    // 打开连接(初始化请求, 没有请求)，url已经包含参数了，第三个参数永远传true，ajax存在的意义就是发送异步请求。
    request.open(method, url, true);

    // 发送请求
    if (method === "GET") {
      request.send();
    } else if (method === "POST" || method === "PUT" || method === "DELETE") {
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=utf-8"
      ); // 告诉服务器请求体的格式是json
      request.send(JSON.stringify(data)); // 发送json格式请求体参数
    }

    // 绑定状态改变的监听
    request.onreadystatechange = function () {
      // 如果请求没有完成, 直接结束
      if (request.readyState !== 4) {
        return;
      }
      // 如果响应状态码在[200, 300)之间代表成功, 否则失败
      const { status, statusText } = request;
      // 2.1. 如果请求成功了, 调用resolve()
      if (status >= 200 && status <= 299) {
        // 准备结果数据对象response
        const response = {
          data: JSON.parse(request.response),
          status,
          statusText,
        };
        resolve(response);
      } else {
        // 2.2. 如果请求失败了, 调用reject()
        reject(new Error("request error status is " + status));
      }
    };
  });
}
