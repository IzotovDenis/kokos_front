import { actionTypes } from "../store/actionTypes";

const initialState = {
  isLogin: false,
  token: '',
  profile: {},
  fetchingUser: true,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, isLogin: true, token: action.token, profile: action.profile, fetchingUser: false }
    case actionTypes.SIGNOUT:
      return { ...initialState, fetchingUser: false }
    case actionTypes.UPDATE_USER_FIELD:
      return { ...state, profile: { ...state.profile, [action.name]: action.value } }
    default:
      return state
  }
}

