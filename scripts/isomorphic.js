require('../server.babel');
const React = require('react');
const express =require('express');
const { match, RouterContext } = require('react-router');
// const routes =require('../routes/index.js');
import routes from '../routes/iso-routes.js';
const { Provider } =require('react-redux');
const {renderToString} = require('react-dom/server');
const { createStore, applyMiddleware } = require('redux');
const rootReducer = require('../src/reduxReducer/combineReducer.ts');
const thunk = require('redux-thunk').default;
const app = new express();
const store = createStore(rootReducer, applyMiddleware(thunk));
const Main = require('../src/pages/main/index.tsx');

// console.log(require('../routes/index.js'));
app.use(render);
app.listen('3004',(err)=>{
    console.log(err+'server is success');
})
function render(req, res) {
    webpackIsomorphicTools.refresh();
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        console.log('the renderProps is :');
        console.log(renderProps);
        console.log('the routes is :');
        console.log(routes);
        console.log('the req.url is :');
        console.log(req.url);
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.status(200).send(template(renderProps))
        } else {
            res.status(404).send('Not found'+renderProps)
        }
    })
}
function template(renderProps) {
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