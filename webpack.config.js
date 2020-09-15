const path = require("path");

module.exports = {
  mode: "development",
  //mode: 'production', 打包压缩
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js-utils.js",
    // filename: "js-utils.min.js",
    //可以使用的语法规范，require，import等
    libraryTarget: "umd",
    //对外暴露名
    library: "jsU",
  },
};
