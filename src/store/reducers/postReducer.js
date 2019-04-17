import {
  LOAD_POST_START,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAIL
} from "../actionTypes/postActionTypes";

const initialState = {
  loading: false,
  posts: [],
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST_START:
      return { ...state, loading: true, error: null };
    case LOAD_POST_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: null };
    case LOAD_POST_FAIL:
      return { ...state, loading: false, error: action.payload, posts: [] };
    default:
      return { ...state };
  }
};

export default postReducer;
