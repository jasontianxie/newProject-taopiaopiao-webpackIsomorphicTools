const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const IsomorphicPlugin = require('webpack-isomorphic/plugin');
const webpackIsomorphic = require('webpack-isomorphic');

const isomorphicPlugin = new IsomorphicPlugin({
	extensions: ['jpg', 'png', 'gif', 'css','scss']
});

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development",
  allChunks: true
});

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

var webpackIsomorphicToolsPlugin = 
  // webpack-isomorphic-tools settings reside in a separate .js file 
  // (because they will be used in the web server code too).
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tool-configuration'))
  // also enter development mode since it's a development webpack configuration
  // (see below for explanation)
  .development()

module.exports = [{
  context: path.resolve(__dirname ,'../public'),
  target: 'node',
  entry: 
    path.resolve(__dirname, '../entry/serverRender.tsx')
  ,
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundleSSR.js',
    // filename:'[name].js',
    publicPath: '/',
    libraryTarget:"commonjs",
    library:'page'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json","scss"],
    alias:{
      src:path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test:/\.css$/,use:[
          {loader:"style-loader"},
          {
                loader: "css-loader",
              }
        ]
      },
      {
        test:/\.library.scss$/,
        use:[
          {loader:"style-loader"},
          {loader: "css-loader"},
          {
            loader:"postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude:/\.library.scss$/,
        use:[
          {loader:"style-loader",options:{hmr:true}},
          {
                loader: "css-loader",
                options:{
                  modules:true,
                  importLoaders:2,
                  localIdentName:'[name]__[local]___[hash:base64:5]'
                }
              },
              {
                loader:"postcss-loader"
              },
              {
                loader: "sass-loader"
              }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use:[{loader:'url-loader',options:{limit:40000}}]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    // extractSass,
    new CleanWebpackPlugin(['public'], { root: path.resolve(__dirname, '..') }),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NormalModuleReplacementPlugin(/\.library.scss$/, 'node-noop'),
    new webpack.IgnorePlugin(/\.(css|scss)$/),
    isomorphicPlugin
  ]
},
{
  context: path.resolve(__dirname ,'../public'),
  entry: {
    app: ['eventsource-polyfill', path.resolve(__dirname, '../entry/index.tsx'), 'webpack-hot-middleware/client?reload=true'],
    vendor: ['eventsource-polyfill', path.resolve(__dirname, '../entry/vendor.js'), 'webpack-hot-middleware/client?reload=true'],
    // polyfill:'eventsource-polyfill',
  },
  // entry:[
  //   'event-source-polyfill',
  //   'webpack-hot-middleware/client?reload=true',
  //   path.resolve(__dirname,'../entry/index.tsx'),
  //   // path.resolve(__dirname,'../entry/vendor.js')
  // ],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.[name].js',
    // filename:'[name].js',
    publicPath: '/'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json","scss"],
    alias:{
      src:path.resolve(__dirname, '../src')
    }
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
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test:/\.css$/,use:[
          {loader:"style-loader"},
          {
                loader: "css-loader",
              }
        ]
      },
      {
        test:/\.library.scss$/,
        use:[
          {loader:"style-loader"},
          {loader: "css-loader"},
          {
            loader:"postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude:/\.library.scss$/,
        // use: extractSass.extract({
        //   use: [{
        //     loader: "css-loader",
        //     options:{
        //       modules:true,
        //       importLoaders:2,
        //       localIdentName:'[name]__[local]___[hash:base64:5]'
        //     }
        //   },
        //   {
        //     loader:"postcss-loader"
        //   },
        //   {
        //     loader: "sass-loader"
        //   }],
        //   // use style-loader in development 
        //   fallback: {loader:"style-loader",options:{hmr:true}}
        // })
        use:[
          {loader:"style-loader",options:{hmr:true}},
          {
                loader: "css-loader",
                options:{
                  modules:true,
                  importLoaders:2,
                  localIdentName:'[name]__[local]___[hash:base64:5]'
                }
              },
              {
                loader:"postcss-loader"
              },
              {
                loader: "sass-loader"
              }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use:[{loader:'url-loader',options:{limit:40000}}]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  plugins: [
    // extractSass,
    new CleanWebpackPlugin(['public'], { root: path.resolve(__dirname, '..') }),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    isomorphicPlugin
    
  ]
}
]