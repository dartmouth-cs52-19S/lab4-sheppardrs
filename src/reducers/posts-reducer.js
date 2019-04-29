import { ActionTypes } from '../actions';

const PostsReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default PostsReducer;
