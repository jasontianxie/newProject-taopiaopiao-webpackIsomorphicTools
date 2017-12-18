import { combineReducers } from 'redux';
import * as mainReducer from './mainReducer';
import * as storesReducer from './storesReducer';
 const rootReducer = combineReducers({
    main:mainReducer,
    stores:storesReducer
  })

  export default rootReducer; 