import { actionTypes } from "../store/actionTypes";

const initialState = {
  fetching: false,
  title: "Самые лучшие средства",
  items: [],
  totalItems: 0,
  groupId: undefined,
  isLoad: false,
  group: {}
};

export default function group(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_GROUP:
      return {
        ...state,
        items: action.payload.items,
        group: action.payload.group,
        groupId: action.payload.group.id,
        pageLoaded: action.payload.pageLoaded,
        totalItems: action.payload.group.items_count,
        isLoad: true
      };
    case actionTypes.CLEAR_GROUP_ITEMS:
      return {
        ...initialState,
        isLoad: false
      };
    default:
      return state;
  }
}
