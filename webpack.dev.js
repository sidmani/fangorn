const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config')

module.exports = merge(common, {
  entry: './test/torture_test/torture_test.js',
  devServer: {
    port: 8000,
    open: true,
    historyApiFallback: true,
  },
});
