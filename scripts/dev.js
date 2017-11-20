const webpack = require('webpack');
const webpackDevConfig = require('../config/webpack.config.dev');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const opn = require('opn');
// import webpack from 'webpack';
// import webpackDevConfig from '../config/webpack.config.dev';
const app = express();
const compiler = webpack(webpackDevConfig);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

process.env.NODE_ENV = 'development'; 

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));
// Serve the files on port 3000.
app.listen(3003, function () {
  console.log('Example app listening on port 3000!\n');
  // opn('127.0.0.1:3000',{app: 'chrome'});
});
// const watching = compiler.watch({
//   watch: true
// }, (err, stats) => {
// });