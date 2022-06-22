import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from './jobs/jobs';

const reducer = combineReducers({
  jobsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
