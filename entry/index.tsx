import * as React from 'react';
import * as ReactDom from 'react-dom';
// const React = require('react');
// const ReactDom = require('react');
import {App} from '../src/pages/main';
import 'src/commonStyle/normalize.library.scss';

ReactDom.render(
    <App/>,document.getElementById('root')
)