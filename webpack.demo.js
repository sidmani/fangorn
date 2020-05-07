const merge = require('webpack-merge');
const Compression = require('compression-webpack-plugin');
const common = require('./webpack.config');

module.exports = merge(common, {
  plugins: [
    new Compression(),
  ],
});
