import {
  LOAD_POST_START,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAIL
} from "../actionTypes/postActionTypes";

export const loadPosts = () => dispatch => {
  dispatch({ type: LOAD_POST_START });
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        throw Error("Server Error");
      }
      return response.json();
    })
    .then(json => {
      dispatch({
        type: LOAD_POST_SUCCESS,
        payload: json
      });
    })
    .catch(error => {
      dispatch({
        type: LOAD_POST_FAIL,
        payload: error
      });
    });
};
