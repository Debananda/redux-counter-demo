import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

// const logger = store => next => action => {
//   console.log("Before State", store.getState());
//   console.log("Action", action);
//   next(action);
//   console.log("After State", store.getState());
// };

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
