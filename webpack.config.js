/**
 * Created by sbardian on 5/16/17.
 */

let webpack = require('webpack');

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
  }
};