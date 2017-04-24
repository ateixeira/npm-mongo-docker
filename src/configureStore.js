import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(browserHistory)
    )
  )
}