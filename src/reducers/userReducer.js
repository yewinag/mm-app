import * as types from '../constants/actionTypes';

function user(state = {
  }, action) {
  switch (action.type) {
    case types.REQUEST_USER_LOGIN:
      return Object.assign({}, state, {
      });
    case types.USER_LOGGED_IN:
      return Object.assign({}, state, action.payload, {
      });
    case types.REQUEST_USER_LOGOUT:
      return Object.assign({}, state, {
      });
      //return action.payload;
    case types.FAILED_USER_LOGIN:
      return Object.assign({}, state, action.payload);
    case types.USER_LOGGED_OUT:
      return {};
    case types.CLEAR_USER_STATE:
      return {};
    case types.USER_INFO_UPDATE:
      action.payload.images = state.user.images;
      return Object.assign({}, state,
        { user: action.payload }
      );
    default:
      return state;
  }
}

export default user;
