const webpack = require('webpack');
const webpackDevConfig = require('../config/webpack.config.ssr');
const compiler = webpack(webpackDevConfig,(err,stat)=>{console.log(err+"is occur");});