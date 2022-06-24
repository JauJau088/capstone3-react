import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import aggregateReducer from './aggregate/aggregate';
import jobsReducer from './jobs/jobs';

const reducer = combineReducers({
  aggregateReducer,
  jobsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
