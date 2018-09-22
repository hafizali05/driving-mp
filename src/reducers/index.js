import { combineReducers } from 'redux';
import DriverReducer from './reducer_driver';

const rootReducer = combineReducers({
  drivers: DriverReducer
});

export default rootReducer;
