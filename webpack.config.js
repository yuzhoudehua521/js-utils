const path = require("path");

module.exports = {
  //1 模式
  mode: "development",
  //mode: 'production', 打包压缩

  //2 入口
  entry: "./src/index.js",

  //3 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js-utils.js",
    // filename: "js-utils.min.js",
    //可以使用的语法规范，ESM, require，import等
    libraryTarget: "umd",
    //对外暴露名
    library: "jsU",
  },

  //4 模块加载器
  module: {
    rules: [
      //1 处理es6 => es5
      // {
      //   test：/\.js/
      //   include：[path.resolve(__dirname, "src")]
      //   use：'babel-loader'
      // }
      //2 处理打包图片
      //3 处理音视频或字体
      //4 处理样式
      // {
      //   test: /\.css$/,
      //   use:  [{
      //     loader: "style-loader" // 将 JS 字符串生成为 style 节点
      //   }, {
      //       loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      //   }, {
      //       loader: "sass-loader" // 将 Sass 编译成 CSS
      //   }]
      //  }
    ],
  },

  //5 插件
  plugins: [],
};
