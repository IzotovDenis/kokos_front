import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import { CartIcon } from "./Icons";
import { withRouter } from "next/router";
import { actionGetCartItems } from "actions/cartActions";
import { setInitialOrderList } from "actions/cartActions";

const ThumbCart = props => {
  const { items, orderList } = props.cart;
  const dispatch = useDispatch();
  useEffect(() => {
    let cacheOrder = localStorage.getItem("orderList");
    if (cacheOrder) {
      dispatch(setInitialOrderList(JSON.parse(cacheOrder)));
      dispatch(actionGetCartItems());
    }
  }, []);
  let count = items.length;
  let amount = 0;
  items.map(item => {
    amount = amount + item.price * (orderList[item.id] || 0);
    return null;
  });
  if (props.router.pathname === "/cart") {
    return null;
  }

  return (
    <>
      <Link href={{ pathname: "/cart" }}>
        <a className={"cartContainer"}>
          <div className={"icon"}>
            <CartIcon />
            <div
              className={"number"}
              style={{ color: count > 0 ? "#ef3f23" : undefined }}
            >
              {count}
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .cartContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #777;
          fill: #777;
          background: transparent;
          border-radius: 2px;
          cursor: pointer;
          height: 80px;
          width: 80px;
          padding: 0px 10px;
          border-radius: 5px;
          text-decoration: none;
          border-radius: 50px;
          position: fixed;
          top: 100px;
          right: 50px;
          box-shadow: 1px 1px 4px 1px #ccc;
          z-index: 200;
          background: #fff;
        }

        .cartContainer:hover {
          fill: #ef3f23;
          color: #ef3f23;
          box-shadow: 0 1px 3px rgba(239, 63, 35, 0.5),
            0 1px 3px rgba(239, 63, 35, 0.02);
        }

        .cartContent {
          padding: 0px 20px;
        }

        .cartItems {
          color: #222;
        }

        .cartAmount {
          color: #222;
        }

        .cartBtn {
          width: 120px;
          border: 1px solid #44a8f2;
          border-radius: 3px;
          padding: 5px;
          height: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #44a8f2;
          color: #fff;
          text-decoration: none;
        }

        .icon {
          width: 40px;
          height: 40px;
          position: relative;
        }

        .number {
          position: absolute;
          bottom: 2px;
          text-align: center;
          font-size: 16px;
          width: 100%;
          font-weight: 400;
        }

        .title {
          padding: 0px 5px;
          font-size: 1em;
        }

        @media (max-width: 991.98px) {
          .cartContainer {
            right: 10px;
            height: 60px;
            width: 60px;
            bottom: 20px;
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
};

export default withRouter(
  connect(state => {
    return {
      cart: state.cart
    };
  })(ThumbCart)
);
