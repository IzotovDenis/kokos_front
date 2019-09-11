import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import ItemImage from "components/ItemImage";
import ItemForm from "components/ItemForm";
import { currency } from "components/Currency";
import { actionToggleItem } from "actions/cartActions";
import { PlusIcon, MinusIcon } from "../components/Icons";

const CartItems = props => {
  const { items } = props;
  return items.map((item, index) => {
    return <CartItem item={item} key={item.id} />;
  });
};

const CartItem = props => {
  const { item } = props;
  const ordered = useSelector(state => state.cart.orderList[item.id] || 0);
  return (
    <>
      <div className={"item"}>
        <div className={"imageContainer"}>
          <ItemImage item={item} />
        </div>
        <div className={"content"}>
          <div className={"titleContainer"}>{item.title}</div>
          <div className={"actions"}>
            <div className={"orderContainer"}>
              <Form value={ordered} item={item} />
            </div>
            <div className={"priceContainer"}>
              <span>{currency(item.price * ordered)}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .item {
          padding: 5px 0px;
          display: flex;
          flex-direction: row;
          background: #fff;
          border-bottom: 1px solid #fafafa;
        }

        .item:last-child {
          border-bottom: none;
        }

        .imageContainer {
          width: 80px;
          height: 80px;
          position: relative;
        }

        .content {
          padding: 0px 10px;
          flex: 1;
          display: flex;
          flex-direction: row;
        }

        .titleContainer {
          flex: 1;
          display: flex;
          align-items: center;
          font-size: 1rem;
          font-weight: 600;
        }

        .footer {
          display: flex;
          flex-direction: row;
        }

        .priceContainer {
          width: 100px;
          display: flex;
          align-items: center;
          padding-right: 10px;
          justify-content: flex-end;
        }

        .orderContainer {
          width: 90px;
          display: flex;
          align-items: center;
        }

        .actions {
          display: flex;
          flex: 1;
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

const Form = props => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={"form"}>
        <div
          className={"container"}
          onClick={() =>
            dispatch(actionToggleItem(props.item.id, props.value - 1))
          }
        >
          <MinusIcon />
        </div>
        <div className={"value"}>{props.value}</div>
        <div
          className={"container"}
          onClick={() =>
            dispatch(actionToggleItem(props.item.id, props.value + 1))
          }
        >
          <PlusIcon />
        </div>
      </div>
      <style jsx>{`
        .form {
          display: flex;
          user-select: none;
        }
        .value {
          width: 40px;
          text-align: center;
        }
        .container {
          width: 18px;
          cursor: pointer;
          height: 18px;
          border: 1px solid #888;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default connect(state => {
  return {
    items: state.cart.items || [],
    cart: state.cart
  };
})(CartItems);
