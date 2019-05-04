import { ActionTypes } from '../actions';

const PostReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false };
    default:
      return state;
  }
};

export default PostReducer;
