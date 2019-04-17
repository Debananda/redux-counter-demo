import { INC, DEC, ADD, SUB } from "../actionTypes/counterActionTypes";

export const handleIncrement = () => dispatch => dispatch({ type: INC });

export const handleDecrement = () => dispatch => dispatch({ type: DEC });

export const handleAddition = val => dispatch =>
  dispatch({ type: ADD, payload: val });

export const handleSubtraction = val => dispatch =>
  dispatch({ type: SUB, payload: val });
