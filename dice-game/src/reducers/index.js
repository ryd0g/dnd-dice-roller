import rollReducer from './rollReducer';
import secondRollReducer from './secondRollReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  rollReducer,
  secondRollReducer,
});

export default allReducers;
