import { combineReducers } from 'redux';
import success from './success/successReducer';

const rootReducer = combineReducers({
  success,
});

export default rootReducer;