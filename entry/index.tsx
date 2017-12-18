///<reference path="../commonDeclare/index.d.ts" />
import * as React from 'react';
import * as ReactDom from 'react-dom';
// const React = require('react');
// const ReactDom = require('react');
// import App from '../src/pages/main';
import 'src/commonStyle/normalize.library.scss';
import { Router, hashHistory } from 'react-router';
import routes from '../routes/index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'src/reduxReducer/combineReducer.js';

let store = createStore(rootReducer);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>
    ,document.getElementById('root')
)