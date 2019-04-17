import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer
});

export default rootReducer;
