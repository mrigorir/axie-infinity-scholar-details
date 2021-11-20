import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { detailsReducer } from './data';
import { mmrReducer } from './mmr';

const reducer = combineReducers({
  slp: detailsReducer,
  mmr: mmrReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
