import rollReducer from './rollReducer';
import d20Reducer from './d20Reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  rollReducer,
  d20Reducer,
});

export default allReducers;
