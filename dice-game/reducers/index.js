import rollReducer from './rollReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  rollReducer,
});

export default allReducers;
