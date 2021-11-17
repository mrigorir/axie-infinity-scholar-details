import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { detailsReducer } from './data';

const reducer = combineReducers({
  details: detailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
