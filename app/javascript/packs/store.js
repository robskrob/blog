import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './modules';

const loggerMiddleware = createLogger();

export default createStore(
  combineReducers(reducers),
  applyMiddleware(loggerMiddleware)
)
