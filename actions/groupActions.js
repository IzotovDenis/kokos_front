import { actionTypes } from "../store/actionTypes";
import API from "modules/API";

export function setGroup(payload) {
  return {
    type: actionTypes.SET_GROUP,
    payload: payload
  };
}

function getGroup(groupId) {
  return API.groups.show(groupId);
}

export function clearGroupItems() {
  return {
    type: actionTypes.CLEAR_GROUP_ITEMS
  };
}

export function actionGetGroup(groupId) {
  return function(dispatch, getState) {
    if (getState().group.groupId !== parseInt(groupId, 10)) {
      dispatch(clearGroupItems());
      return getGroup(groupId).then(group => {
        dispatch(setGroup(group));
      });
    }
  };
}
