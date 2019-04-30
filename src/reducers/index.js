// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
});

export default rootReducer;
