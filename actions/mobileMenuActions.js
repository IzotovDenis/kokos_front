import { actionTypes } from "../store/actionTypes";
import API from "modules/API";

export function actionShow() {
  return {
    type: actionTypes.SET_MOBILE_MENU_SHOWN
  };
}

export function actionHide() {
  return {
    type: actionTypes.SET_MOBILE_MENU_HIDE
  };
}
