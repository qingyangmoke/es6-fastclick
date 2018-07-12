const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const banner = `${pkg.name}
Description: ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
Github: ${pkg.repository.url}`;

const config = {
  entry: {
    'FastClick': [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: ['[name]'],
  },
  plugins: [
    new webpack.BannerPlugin(banner),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-2'],
        },
      },
    ],
    // noParse: /src\/p2\/p2.js/
  },
};

module.exports = config;
