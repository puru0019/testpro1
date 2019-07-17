const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUTPUT_PATH = path.resolve(__dirname, './dist');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: OUTPUT_PATH,
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: OUTPUT_PATH,
    stats: 'errors-only',
    open: true,
    port: 8044,
    compress: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jpeg|png|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        // only turn on standard global CSS loader for the material directories
        // These paths are the same as above and specific to your system, so change accordingly
        include: [
          path.resolve('./node_modules/material-components-web'),
          path.resolve('./node_modules/@material'),
        ],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    },
  },
};
