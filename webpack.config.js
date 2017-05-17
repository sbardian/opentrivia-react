/**
 * Created by sbardian on 5/16/17.
 */

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: "babel-loader",
        query: { compact: false }
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.EnvironmentPlugin(['DebtTrackerAPI'])
  ]
};