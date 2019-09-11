import { actionTypes } from "../store/actionTypes";
import API from "modules/API";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function setUser(profile, token) {
  return {
    type: actionTypes.SET_USER,
    profile: profile,
    token: token
  };
}

function initUserQuery(token) {
  return API.initUser(token).then(response => {
    let json = response.json();
    if (response.status === 200) {
      return json;
    } else {
      return json.then(err => {
        throw err;
      });
    }
  });
}

export function initializeUser() {
  return function(dispatch) {
    return initUserQuery()
      .then(response => {
        if (response.success) {
          dispatch(setUser(response.profile));
        } else {
          dispatch(SignOut());
        }
      })
      .catch(error => console.log(error));
  };
}

export function actionSetUser(profile, token) {
  return function(dispatch) {
    dispatch(setUser(profile, token));
  };
}

export function SignOut() {
  cookies.remove("token", { path: "/" });
  return {
    type: actionTypes.SIGNOUT
  };
}

export function updateUserField(name, value) {
  return {
    type: actionTypes.UPDATE_USER_FIELD,
    name: name,
    value: value
  };
}
