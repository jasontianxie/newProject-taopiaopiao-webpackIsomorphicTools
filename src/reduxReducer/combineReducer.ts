// import { combineReducers } from 'redux';
import {combineReducers} from 'redux-immutable';
import mainReducer from './mainReducer';
import storesReducer from './storesReducer';
 const rootReducer = combineReducers({
    main:mainReducer,
    stores:storesReducer
  })

  export default rootReducer; 