import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const storage = compose(
  filter([
    'user'
  ])
)(adapter(window.localStorage));

export default function configureStore(initialState) {
  //const logger = createLogger();
  const routingMiddleware = routerMiddleware(browserHistory);

  const middlewares = [
    thunkMiddleware,
    routingMiddleware
  ];

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(...middlewares),
    persistState(storage, 'mmapp'),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
