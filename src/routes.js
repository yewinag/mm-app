
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {UserAuthWrapper} from 'redux-auth-wrapper';
import {routerActions} from 'react-router-redux';

import Home from 'components/HomePage';
import App from 'components/App';
import SearchRedirectPage from 'components/SearchRedirectPage';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/users/sign_in',
  wrapperDisplayName: 'UserIsAuthenticated'
});

const handleOnEnter = nextState => {
  Intercom('update');
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}  onEnter={handleOnEnter}/>
    <Route path="/used" component={SearchRedirectPage} onEnter={handleOnEnter}/>
  </Route>
)
