import * as React from 'react';
import { renderToString } from 'react-dom/server';
import 'src/commonStyle/normalize.library.scss';
import { match, RouterContext } from 'react-router';
import routes from '../routes/index.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reduxReducer/combineReducer';
import thunk from 'redux-thunk';
const webpackIsomorphic = require('webpack-isomorphic');
const path = require('path');

let store = createStore(rootReducer, applyMiddleware(thunk));

module.exports = function render(req:any, res:any):void {
    webpackIsomorphic.install(path.resolve(__dirname ,'../public'), {
        cache: process.env['NODE_ENV'] !== 'development'
    });
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.status(200).send(template(renderProps))
        } else {
            res.status(404).send('Not found')
        }
    })
}
function template(renderProps:any):any {
    return (`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="initial-scale=1, maximum-scale=1,width=device-width,user-scalable=no">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <div id="root">${renderToString(<Provider store={store}><RouterContext {...renderProps} /></Provider>)}</div>
            <script type="text/javascript">
                window.onresize = function(){
                document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
                }
                document.addEventListener('DOMContentLoaded',function(){
                document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
                },false);
            </script>
            <script type="text/javascript" src="/bundle.app.js"></script>
            <script type="text/javascript" src="/bundle.vendor.js"></script>
        </body>
        </html>
    `)
}