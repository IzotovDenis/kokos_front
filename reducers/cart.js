import { actionTypes } from "../store/actionTypes";

const initialState = {
  items: [],
  orderList: {},
  avaiableList: {},
  orderId: undefined,
  info: {},
  amount: 0,
  fetching: false,
  isSuccess: false
};

console.log(initialState);

export default function catalog(state = initialState, action) {
  let nextOrderList = {};
  switch (action.type) {
    case actionTypes.SET_INITIAL_ORDER_LIST:
      return {
        ...state,
        orderList: action.ids
      };
    case actionTypes.TOUGLE_ITEM:
      let newCount = action.count;
      if (newCount > 0) {
        localStorage.setItem(
          "orderList",
          JSON.stringify({ ...state.orderList, [action.itemId]: newCount })
        );
        return {
          ...state,
          orderList: { ...state.orderList, [action.itemId]: newCount }
        };
      }
      if (newCount < 1) {
        nextOrderList = { ...state.orderList };
        delete nextOrderList[action.itemId];
        localStorage.setItem("orderList", JSON.stringify(nextOrderList));
        return { ...state, orderList: nextOrderList };
      }
      break;
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        orderList: { ...state.orderList, [action.itemId]: undefined }
      };
    case actionTypes.CART_OPEN:
      return { ...state, isComplete: false };
    case actionTypes.SET_CART_ITEMS:
      return {
        ...state,
        items: action.items,
        orderList: { ...state.orderList, ...action.max_counts },
        max_counts: action.max_counts,
        not_able: action.not_able,
        amount: action.amount
      };
    case actionTypes.SEND_SUCCESS:
      localStorage.removeItem("orderList");
      return {
        ...initialState,
        orderList: {},
        isSuccess: true,
        fetching: false
      };
    case actionTypes.CLEAR_ORDER:
      localStorage.removeItem("orderList");
      return { ...initialState, orderList: {} };
    case actionTypes.HANDLE_INFO: {
      return { ...state, info: { ...state.info, [action.name]: action.value } };
    }
    case actionTypes.HANDLE_COMMENT: {
      return { ...state, comment: action.value };
    }
    case actionTypes.SET_FETCHING: {
      return { ...state, fetching: true };
    }
    case actionTypes.LEAVE_SUCCESS: {
      return { ...state, isSuccess: false };
    }
    default:
      return { ...state };
  }
}
