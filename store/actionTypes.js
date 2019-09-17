const cartActionTypes = {
  TOUGLE_ITEM: "TOUGLE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  CLEAR_ORDER: "CLEAR_ORDER",
  CART_OPEN: "CART_OPEN",
  SEND_SUCCESS: "SEND_SUCCESS",
  HANDLE_INFO: "HANDLE_INFO",
  MOVE_STEP: "MOVE_STEP",
  SET_AMOUNT: "SET_AMOUNT",
  HANDLE_COMMENT: "HANDLE_COMMENT",
  SET_FETCHING: "SET_FETCHING",
  LEAVE_SUCCESS: "LEAVE_SUCCESS",
  SET_INITIAL_ORDER_LIST: "SET_INITIAL_ORDER_LIST"
};

const itemsActionTypes = {
  SET_ITEM: "SET_ITEM"
};

const catalogActionTypes = {
  SET_CATALOG: "SET_CATALOG",
  TOUGLE_NODE: "TOUGLE_NODE",
  SET_GROUP_ITEMS: "SET_GROUP_ITEMS",
  CLEAR_ITEMS: "CLEAR_ITEMS"
};

const groupActionTypes = {
  SET_GROUP: "SET_GROUP",
  SET_MORE_ITEMS_GROUP: "SET_MORE_ITEMS_GROUP",
  CLEAR_GROUP_ITEMS: "CLEAR_GROUP_ITEMS"
};

const mobileMenuActionTypes = {
  SET_MOBILE_MENU_HIDE: "SET_MOBILE_MENU_HIDE",
  SET_MOBILE_MENU_SHOWN: "SET_MOBILE_MENU_SHOWN"
};

const userActionTypes = {
  SET_USER: "SET_USER",
  SIGNOUT: "SIGNOUT",
  UPDATE_USER_FIELD: "UPDATE_USER_FIELD"
};

const discountsActionTypes = {
  SET_DISCOUNTS: "SET_DISCOUNTS"
};

export const actionTypes = {
  ...cartActionTypes,
  ...groupActionTypes,
  ...mobileMenuActionTypes,
  ...cartActionTypes,
  ...catalogActionTypes,
  ...itemsActionTypes,
  ...discountsActionTypes
};
