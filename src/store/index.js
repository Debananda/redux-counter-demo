import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";

const logger = store => next => action => {
  console.log("Before State", store.getState());
  console.log("Action", action);
  next(action);
  console.log("After State", store.getState());
};

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
