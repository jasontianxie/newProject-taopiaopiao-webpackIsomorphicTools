///<reference path="./index.d.ts" />
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
import * as rootReducer from 'src/reduxReducer/combineReducer';

let store = createStore(rootReducer);

ReactDom.render(
    <Router history={hashHistory} routes={routes}/>,document.getElementById('root')
)