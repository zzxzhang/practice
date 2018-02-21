/**
 * Created by zzx on 2018/2/20.
 */
const webpack = require('webpack');
const path = require('path')
const config = require('./webpack.config');

module.exports = Object.assign({}, config, {
  plugins: config.plugins.concat(new webpack.HotModuleReplacementPlugin()),
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    open: true,
    port: 9000
  }
})
