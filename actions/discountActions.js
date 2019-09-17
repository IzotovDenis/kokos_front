import { actionTypes } from "../store/actionTypes";
import API from "modules/API";

export function setDiscounts(payload) {
  return {
    type: actionTypes.SET_DISCOUNTS,
    discounts: payload.discounts,
    global: payload.global
  };
}

function getDiscounts(groupId) {
  return API.discounts.index();
}

export function actionGetDiscounts() {
  return function(dispatch) {
    return getDiscounts().then(response => {
      dispatch(setDiscounts(response));
    });
  };
}
