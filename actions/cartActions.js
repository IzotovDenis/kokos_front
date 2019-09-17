import { actionTypes } from "../store/actionTypes";
import API from "modules/API";
import Router from "next/router";

export function tougleItem(itemId, count) {
  return {
    type: actionTypes.TOUGLE_ITEM,
    itemId: itemId,
    count: count
  };
}

export function deleteItem(itemId) {
  return {
    type: actionTypes.DELETE_ITEM,
    itemId: itemId
  };
}

export function actionToggleItem(itemId, count) {
  return function(dispatch, getState) {
    dispatch(tougleItem(itemId, count));
    dispatch(actionGetCartItems());
  };
}

function setAmount(amount) {
  return {
    type: actionTypes.SET_AMOUNT,
    amount: amount
  };
}

function calcAmount() {
  return (dispatch, getState) => {
    let items = getState().cart.items || [];
    let orderList = getState().cart.orderList;
    let amount = 0;
    items.map(item => {
      amount = amount + item.price * (orderList[item.id] || 0);
    });
    dispatch(setAmount(amount));
  };
}

function getCartItems(ids) {
  return API.orders.getCartItems({ items: ids });
}

function setCartItems(response) {
  return {
    type: actionTypes.SET_CART_ITEMS,
    items: response.items,
    able: response.able,
    max_counts: response.max_counts,
    amount: response.amount
  };
}

export function actionGetCartItems() {
  return function(dispatch, getState) {
    let ids = getState().cart.orderList;
    console.log(getState().cart);
    return getCartItems(ids)
      .then(response => {
        dispatch(setCartItems(response));
        dispatch(calcAmount());
      })
      .catch(error => console.log(error));
  };
}

export function setInitialOrderList(ids) {
  return {
    type: actionTypes.SET_INITIAL_ORDER_LIST,
    ids: ids
  };
}

function sendSuccess() {
  return {
    type: actionTypes.SEND_SUCCESS
  };
}

function sendOrder(order) {
  return API.orders.create(order);
}

function fetching() {
  return {
    type: actionTypes.SET_FETCHING
  };
}

export function actionSendOrder(info) {
  return function(dispatch, getState) {
    dispatch(fetching());
    const cart = getState().cart;
    const order = { items: cart.orderList, info: info };
    return sendOrder(order).then(response => {
      if (response.success) {
        dispatch(sendSuccess());
        Router.replace(`/success`);
      }
    });
  };
}

export function actionCartOpen() {
  return {
    type: actionTypes.CART_OPEN
  };
}

export function actionHandleInfo(name, value) {
  return {
    type: actionTypes.HANDLE_INFO,
    name: name,
    value: value
  };
}

export function actionHandleComment(value) {
  return {
    type: actionTypes.HANDLE_COMMENT,
    value: value
  };
}

export function moveStep(step) {
  return {
    type: actionTypes.MOVE_STEP,
    step: step
  };
}

export function actionLeaveSuccess() {
  history.replace(`/`);
  return {
    type: actionTypes.LEAVE_SUCCESS
  };
}
