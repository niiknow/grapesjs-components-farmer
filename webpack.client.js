const path    = require('path');
const webpack = require('webpack');

const rst = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/client.js'),
  output: {
    filename: 'gcfclient.min.js',
    library: 'GcfClient',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
    {
      enforce: 'pre',
      test: /\.(jsx,js)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'eslint-loader',
      options: {
        fix: false,
        cache: false,
        formatter: require('eslint-friendly-formatter')
      }
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ]
    }, {
      test: /\.css$/,
      use: [
        'css-loader',
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=10240',
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
    })
  ]
}

module.exports = rst
