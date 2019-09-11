import React from "react";
import { CartIcon } from "./Icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionToggleItem } from "../actions/cartActions";

const ItemForm = props => {
  const { item } = props;
  const ordered = useSelector(state => state.cart.orderList[item.id] || 0);
  const dispatch = useDispatch();
  const getTitle = () => {
    if (ordered > 0) {
      return `${ordered}шт. в корзине`;
    }
    return `в корзину`;
  };
  return (
    <>
      <div
        className={"order"}
        onClick={() => dispatch(actionToggleItem(item.id, ordered + 1))}
      >
        <div className={"icon"}>
          <CartIcon />
        </div>

        <div className={"title"}>{getTitle()}</div>
      </div>
      <style jsx>{`
        .order {
          font-weight: 400;
          border: 1px solid #582806;
          padding: 3px 8px;
          border-radius: 2px;
          color: #582806;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }
        .icon {
          width: 20px;
          height: 20px;
        }
        .title {
          font-size: 14px;
          font-weight: 400;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .icon svg {
          stroke-width: 1px;
          stroke: #582806;
        }
        .order:hover {
          color: #fff;
          background: #582806;
        }
      `}</style>
      <style global jsx>{`
        .icon svg {
          fill: #582806;
        }
        .order:hover .icon svg {
          fill: #fff;
          stroke-width: 1px;
          stroke: #fff;
        }
      `}</style>
    </>
  );
};

export default ItemForm;
