import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CLEAR_POST: 'CLEAR_POST',
  ERROR_SET: 'ERROR_SET',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=s_somers';
// local testing
const ROOT_URL = 'http://localhost:9090/api';
// heroku database
// const ROOT_URL = 'https://cs52blogs.herokuapp.com/api';


export function changePost(post) {
  return {
    type: ActionTypes.FETCH_POST,
    payload: post,
  };
}

export function clearPost() {
  return {
    type: ActionTypes.CLEAR_POST,
  };
}

export function fetchPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        // console.log('GOT the posts');
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      })
      .catch((error) => {
        // dispatch an error, use it in a separate error reducer
        // have an error component somewhere show it
        dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        // console.log('from action, post: ', response.data);
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function deletePost(id, history) {
  const hasHist = arguments.length === 2;
  // console.log(arguments.length); // from: https://stackoverflow.com/questions/411352/how-best-to-determine-if-an-argument-is-not-sent-to-the-javascript-function
  return (dispatch) => {
    console.log('in return of delete');
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        if (hasHist) {
          history.push('/posts');
        }
        dispatch(fetchPosts()); // from: https://stackoverflow.com/questions/43130915/redux-how-to-call-an-action-creator-from-inside-another-action-creator
        // console.log('called fetchposts from delete');
        // console.log(response);
        // dispatch({ type: ActionTypes.DELETE_POST });
      })
      .catch((error) => {
        console.log('Error in delete post');
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

// export function createPost(post, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/posts/${API_KEY}`, post)
//       .then((response) => {
//         history.push(`/posts/${response.data._id}`);
//         dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
//         // dispatch(fetchPosts()); // do I want to dispatch this? should happen on mount
//       })
//       .catch((error) => {
//         console.log('ERROR posting');
//         console.log(error);
//         dispatch({ type: ActionTypes.ERROR_SET, error });
//       });
//   };
// }
export function createPost(history) {
  return (dispatch, getState) => {
  // console.log(getState().post);
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, getState().post, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        history.push(`/posts/${response.data._id}`);
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
        // dispatch(fetchPosts()); // do I want to dispatch this? should happen on mount
      })
      .catch((error) => {
        console.log('ERROR posting');
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function editPost(history) {
  return (dispatch, getState) => {
    const { post } = getState();
    // console.log(post._id);
    axios.put(`${ROOT_URL}/posts/${post._id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        history.push(`/posts/${response.data._id}`);
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
        // dispatch(fetchPosts()); // do I want to dispatch this? should happen on mount
      })
      .catch((error) => {
        console.log('ERROR editing');
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

// export function editPost(post, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/posts/${API_KEY}`, post)
//       .then((response) => {
//         // history.push(`/posts/${response.data._id}`);
//         dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
//         // dispatch(fetchPosts()); // do I want to dispatch this? should happen on mount
//       })
//       .catch((error) => {
//         console.log('ERROR posting');
//         console.log(error);
//         dispatch({ type: ActionTypes.ERROR_SET, error });
//       });
//   };
// }

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

// signin user using thunk to post to signin route with email and password
// store token on success and dispatch AUTH_USER action
export function signinUser({ email, password }, history) {
  // from createPost
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin${API_KEY}`, { email, password }).then((response) => {
      // do something with the response.data (some json)
      // console.log('posts is: ', posts);
      localStorage.setItem('token', response.data.token);
      dispatch({ type: ActionTypes.AUTH_USER });
      history.push('/');
    }).catch((error) => {
      // hit an error -> do something else
      dispatch(authError(`Signin failed: ${error.response.data}`));
      console.log('FAILED IN ACTION signinUser');
    });
  };
}

// Same as signin but using signup route
export function signupUser({ email, password, username }, history) {
  // from createPost
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password, username }).then((response) => {
      // do something with the response.data (some json)
      localStorage.setItem('token', response.data.token);
      history.push('/');
      dispatch({ type: ActionTypes.AUTH_USER });
    }).catch((error) => {
      // hit an error -> do something else
      dispatch(authError(`Signin failed: ${error.response.data}`));
      console.log('FAILED IN ACTION signupUser');
    });
  };
}

// deletes token from localstorage
// and dispatches deauth action
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
