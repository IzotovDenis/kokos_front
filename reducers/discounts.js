import { actionTypes } from "../store/actionTypes";

const exampleInitialState = {
  list: [],
  global: {}
};

export default (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DISCOUNTS:
      return { ...state, list: action.discounts, global: action.global };
    default:
      return state;
  }
};
