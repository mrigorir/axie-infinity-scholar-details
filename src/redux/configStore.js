import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { detailsReducer } from './slp';
import { mmrReducer } from './mmr';
import { axiesReducer } from './axies';

const reducer = combineReducers({
  slp: detailsReducer,
  mmr: mmrReducer,
  axies: axiesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
