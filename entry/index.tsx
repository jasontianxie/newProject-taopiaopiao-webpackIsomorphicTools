///<reference path="../commonDeclare/index.d.ts" />
import * as React from 'react';
import * as ReactDom from 'react-dom';
// const React = require('react');
// const ReactDom = require('react');
// import App from '../src/pages/main';
import 'src/commonStyle/normalize.library.scss';
import { Router, hashHistory,match ,createMemoryHistory} from 'react-router';
import routes from '../routes/index.js';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware  } from 'redux';
import rootReducer from '../src/reduxReducer/combineReducer';
import thunk from 'redux-thunk';

let store = createStore(rootReducer,applyMiddleware(thunk));
const history = createMemoryHistory();
// ReactDom.render(
//     <Provider store={store}>
//         <Router history={hashHistory} routes={routes}/>
//     </Provider>
//     ,document.getElementById('root')
// )
match({ history, routes }, (error, redirectLocation, renderProps) => {
    ReactDom.render(<Router {...renderProps} />, document.getElementById('root'))
  })