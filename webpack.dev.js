const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './test/torture_test/torture_test.js',
  devServer: {
    port: 8000,
    open: true,
    historyApiFallback: true,
  },
  output: {
    filename: 'app.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fangorn Torture Test',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(mp4|svg|png|jpe?g|gif|woff2?)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]___[local]',
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
