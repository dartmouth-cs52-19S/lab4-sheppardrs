import { ActionTypes } from '../actions';

const PostReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return action.payload;
    case ActionTypes.CLEAR_POST:
      return {
        title: '', content: '', tags: '', cover_url: '',
      };
    default:
      return state;
  }
};

export default PostReducer;
