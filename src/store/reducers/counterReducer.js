import { ADD, SUB, INC, DEC } from "../actionTypes/counterActionTypes";

const initialState = {
  num: 0
};

const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INC:
      return { ...state, num: state.num + 1 };
    case DEC:
      return { ...state, num: state.num - 1 };
    case ADD:
      return { ...state, num: state.num + action.payload };
    case SUB:
      return { ...state, num: state.num - action.payload };
    default:
      return { ...state };
  }
};

export default counterReducer;
