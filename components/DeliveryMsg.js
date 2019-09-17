import React from "react";
import { useSelector } from "react-redux";
import { currency } from "modules/helpers";

const CartDelivery = props => {
  const amount = useSelector(state => state.cart.amount);
  if (amount < 500000) {
    return (
      <>
        <div className={"container"}>
          <div>Бесплатная доставка от 5000 руб.</div>
          Добавьете еще товара на{" "}
          <span className={"amount"}>{currency(500000 - amount)}</span>, чтобы
          получить бесплатную доставку.
        </div>
        <style jsx>
          {`
            .container {
              border: 1px dashed #1c61f5;
              text-align: center;
              font-size: 0.9em;
              font-weight: 500;
              padding: 10px;
              margin: 10px;
              color: #1c61f5;
            }
            .amount {
              font-weight: 600;
            }
          `}
        </style>
      </>
    );
  } else {
    return (
      <>
        <div className={"container"}>
          <div className={"amount"}>Мы доставим ваш заказ бесплатно.</div>
        </div>
        <style jsx>
          {`
            .container {
              text-align: center;
              font-size: 0.9em;
              font-weight: 500;
              padding: 10px;
              margin: 10px;
              color: #1c61f5;
            }
            .amount {
              font-weight: 600;
            }
          `}
        </style>
      </>
    );
  }
};

export default CartDelivery;
