const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "Hashlink",
    libraryTarget: "umd",
    umdNamedDefine: true,
    libraryExport: "default", // <-- add this line
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ""),
    },
    compress: true,
    port: 9000,
    // index: "index.html", // <-- add this line
  },
};
