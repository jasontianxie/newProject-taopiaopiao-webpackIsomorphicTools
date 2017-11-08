const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry:{
        app:path.resolve(__dirname,'../entry/index.js'),
        vendor:path.resolve(__dirname,'../entry/vendor.js'),
        hotClient:'webpack-hot-middleware/client',
    },
    output:{
        path:path.resolve(__dirname,'../public'),
        filename:'[name].[hash].js',
        // filename:'[name].js',
        publicPath:'127.0.0.1:3000/public/'
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env','react']
              }
            }
          }
        ]
      },
    plugins:[
      new CleanWebpackPlugin(['public'],{root:path.resolve(__dirname,'..')}),
      new webpack.HotModuleReplacementPlugin(),
      // Use NoErrorsPlugin for webpack 1.x
      new webpack.NoEmitOnErrorsPlugin(),
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'template.html'
      })
    ]
}