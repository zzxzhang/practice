/**
 * Created by zzx on 2018/2/19.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;
var isProduction = NODE_ENV ==='production' ? true : false;

module.exports = {
  entry: {
    test: './1.js'
  },
  output: {
    filename: isProduction ? '[name].[chunkhash:8].js': '[name].js',
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "https://i4.a.com/ss/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-es2015'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          },
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './1.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new WebpackMd5Hash(),
    new ExtractTextPlugin("styles.[contenthash:8].css"),
  ]
}
