const webpack = require('webpack');
const webpackDevConfig = require('../config/webpack.config.iso.dev');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const opn = require('opn');
// import webpack from 'webpack';
// import webpackDevConfig from '../config/webpack.config.dev';
const app = express();
const compiler = webpack(webpackDevConfig);




process.env.NODE_ENV = 'development'; 

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));
// app.use(handleRender);
// Serve the files on port 3000.
app.listen(3003, function () {
  console.log('Example app listening on port 3000!\n');
  // opn('127.0.0.1:3000',{app: 'chrome'});
});
// const watching = compiler.watch({
//   watch: true
// }, (err, stats) => {
// });


