const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry:{
        app:['eventsource-polyfill',path.resolve(__dirname,'../entry/index.tsx'),'webpack-hot-middleware/client?reload=true'],
        vendor:['eventsource-polyfill',path.resolve(__dirname,'../entry/vendor.js'),'webpack-hot-middleware/client?reload=true'],
        // polyfill:'eventsource-polyfill',
    },
    // entry:[
    //   'event-source-polyfill',
    //   'webpack-hot-middleware/client?reload=true',
    //   path.resolve(__dirname,'../entry/index.tsx'),
    //   // path.resolve(__dirname,'../entry/vendor.js')
    // ],
    output:{
        path:path.resolve(__dirname,'../public'),
        filename:'[name].[hash].js',
        // filename:'[name].js',
        publicPath:'/'
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
    module: {
        rules: [
          // {
          //   test: /\.jsx?$/,
          //   exclude: /node_modules/,
          //   use: {
          //     loader: 'babel-loader',
          //     options: {
          //       presets: ['env','react']
          //     }
          //   }
          // },
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
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
      }),
      new BrowserSyncPlugin(
        // BrowserSync options 
        {
          // browse to http://localhost:3000/ during development 
          host: 'http://127.0.0.1',
          port: 3100,
          // proxy the Webpack Dev Server endpoint 
          // (which should be serving on http://localhost:3100/) 
          // through BrowserSync 
          proxy: 'http://127.0.0.1:3003/'
        },
        // plugin options 
        {
          // prevent BrowserSync from reloading the page 
          // and let Webpack Dev Server take care of this 
          reload: false
        }
      )
    ]
}