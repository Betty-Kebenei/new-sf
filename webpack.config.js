const path = require("path");
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
            loader: "css-loader"
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/dist/',
    host: '127.0.0.1',
    port: 8081,
    open: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
