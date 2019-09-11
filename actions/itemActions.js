import { actionTypes } from "../store/actionTypes";
import API from "modules/API";

export function actionSetItem(item) {
  return {
    type: actionTypes.SET_ITEM,
    item: item
  };
}

export const actionGetItem = id => dispatch => {
  return API.items
    .show(id)
    .then(response => dispatch(actionSetItem(response.item)));
};
