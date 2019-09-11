import { actionTypes } from "../store/actionTypes";

const exampleInitialState = {
  item: {},
  itemLoad: false
};

export default (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEM:
      return { ...state, item: action.item, itemLoad: true };
    default:
      return state;
  }
};
