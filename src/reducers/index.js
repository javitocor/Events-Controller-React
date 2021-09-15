import { combineReducers } from 'redux';
import authReducer from './auth';
import itemReducer from './items';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
});

export default rootReducer;