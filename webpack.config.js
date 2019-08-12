const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('config');

const OUTPUT_PATH = path.resolve(__dirname, './dist');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    'another-main': './another-index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: OUTPUT_PATH,
    library: 'ui-react-material',
    libraryTarget: 'umd',
    publicPath: './',
  },
  devServer: {
    contentBase: OUTPUT_PATH,
    stats: 'errors-only',
    open: true,
    port: 8059,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // new CleanWebpackPlugin(['dist']),
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
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    'lodash.isempty': 'lodash.isempty',
  },
};

