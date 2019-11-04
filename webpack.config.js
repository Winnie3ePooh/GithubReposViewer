const webpack = require("webpack");
const path = require("path");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const devMode = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "main.js",
    publicPath: "/"
  },
  devServer: {
    host: "localhost",
    port: 8080,
    publicPath: "/",
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build"),
    hot: true,
    hotOnly: true,
    index: "/index.html"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "less-loader",
            options: { javascriptEnabled: true }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      api: path.resolve(__dirname, "src/api/"),
      components: path.resolve(__dirname, "src/components/"),
      containers: path.resolve(__dirname, "src/containers/"),
      appRoutes: path.resolve(__dirname, "src/routes/"),
      utils: path.resolve(__dirname, "src/utils/"),
      context: path.resolve(__dirname, "src/context/")
    },
    extensions: [".js", ".jsx"]
  },
  plugins: devMode
    ? [new webpack.HotModuleReplacementPlugin(), new Dotenv()]
    : [
        new MomentLocalesPlugin({
          localesToKeep: ["ru"]
        })
      ]
};
