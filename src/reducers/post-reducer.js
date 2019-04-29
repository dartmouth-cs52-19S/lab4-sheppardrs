import { ActionTypes } from '../actions';

const PostReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return action.payload;
    default:
      return state;
  }
};

export default PostReducer;
