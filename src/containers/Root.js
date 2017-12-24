import React, {Component} from 'react';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import {applyRouterMiddleware, Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from '../routes';
import {useScroll} from 'react-router-scroll';
import '../styles/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} render={applyRouterMiddleware(useScroll())} />
      </Provider>
    );
  }
}

export default Root;
