import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DiscountIcon } from "components/Icons";
import Link from "next/link";
import discount from "../pages/discount";

const Discounts = props => {
  const discounts = useSelector(state => state.discounts.list);
  return discounts.map(discount => {
    return (
      <div>
        <Discount discount={discount} />
      </div>
    );
  });
};

export const Discount = props => {
  const { discount } = props;
  return (
    <>
      <Link
        href={`/discounts?id=${discount.id}`}
        as={`/discounts/${discount.id}`}
      >
        <a className={"container"}>
          <div className={"icon"}>
            <DiscountIcon />
          </div>
          <div className={"title"}>{discount.title}</div>
        </a>
      </Link>
      <style jsx>{`
        .container {
          border-radius: 10px;
          margin: 10px;
          display: flex;
          text-decoration: none;
        }
        .icon {
          background: #fa8669;
          width: 50px;
          padding: 10px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .title {
          flex: 1;
          display: flex;
          font-size: 14px;
          font-weight: 600;
          align-items: center;
          color: #222;
          text-decoration: none;
          padding: 10px 20px;
          border: 1px dashed #fa8669;
          background: #fa866930;
          border-left: 0px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      `}</style>
    </>
  );
};

export default Discounts;
