import { actionTypes } from "../store/actionTypes";

const initialState = {
  tree: [],
  list: {},
  loaded: false
}

export default function catalog(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CATALOG:
      return { ...action.catalog, loaded: true }
    default:
      return { ...state }
  }
}
