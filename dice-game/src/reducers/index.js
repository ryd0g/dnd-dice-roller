import rollReducer from './rollReducer';
import d20Reducer from './d20Reducer';
import d4Reducer from './d4Reducer';
import d8Reducer from './d8Reducer';
import d10Reducer from './d10Reducer';
import d12Reducer from './d12Reducer';
import percentReducer from './percentReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  rollReducer,
  d4Reducer,
  d8Reducer,
  d10Reducer,
  d12Reducer,
  d20Reducer,
  percentReducer,
});

export default allReducers;
