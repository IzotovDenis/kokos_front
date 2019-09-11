import { actionTypes } from "../store/actionTypes";

const initialState = {
  isShown: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MOBILE_MENU_SHOWN:
      return { isShown: true };
    case actionTypes.SET_MOBILE_MENU_HIDE:
      return { isShown: false };
    default:
      return state;
  }
}
