// import { combineReducers } from 'redux';
import {combineReducers} from 'redux-immutable';
// import mainReducer from './mainReducer';
// import storesReducer from './storesReducer';
const mainReducer = require('./mainReducer.ts');
const storesReducer = require('./storesReducer.ts');
 const rootReducer = combineReducers({
    main:mainReducer,
    stores:storesReducer
  })

  export default rootReducer; 