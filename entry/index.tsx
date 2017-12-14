import * as React from 'react';
import * as ReactDom from 'react-dom';
// const React = require('react');
// const ReactDom = require('react');
import App from '../src/pages/main';
import 'src/commonStyle/normalize.library.scss';
import { Router, hashHistory } from 'react-router';
import {routes} from '../routes/index.js';

ReactDom.render(
    <Router history={hashHistory} routes={routes}/>,document.getElementById('root')
)