let path = require("path");

module.exports = {
  entry: "./app.ts",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "app.js"
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
