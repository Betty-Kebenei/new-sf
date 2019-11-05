var path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              options: { presets: ["@babel/env"] }
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  discardDuplicates: true,
                  importLoaders: 1,
                  modules: true,
                  localIdentName: "[name]__[local]___[hash:base64:5]"
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ]
          }
      ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/dist/',
    host: '127.0.0.1',
    port: 8080,
    open: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
