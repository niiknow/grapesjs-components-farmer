const path    = require('path');
const webpack = require('webpack');
const pkg     = require('./package.json');

const banner  = `${pkg.name} client-side script
${pkg.description}\n
@version v${pkg.version}
@author ${pkg.author}
@homepage ${pkg.homepage}
@repository ${pkg.repository.url}`;

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
      exclude: /(node_modules|bower_components|dist)/,
      use: 'eslint-loader'
    }, {
      test: /\.css$/,
      use: 'css-loader',
      exclude: /(node_modules|bower_components|dist)/
    }, {
      test: /\.(png|jpg|gif)$/,
      use: 'url-loader?limit=10240',
      exclude: /(node_modules|bower_components|dist)/
    },
    {
      test: /\.(js)$/,
      exclude: /(node_modules|bower_components|dist)/,
      use: ['babel-loader']
    }
  ]},
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise'
    }),
    new webpack.BannerPlugin(banner)
  ]
}

module.exports = rst;
