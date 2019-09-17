import React from "react";
import { useSelector } from "react-redux";
import Items from "../components/Items";
import { Discount } from "./Discounts";
import Link from "next/link";

const DiscountsList = props => {
  const list = useSelector(state => state.discounts.list);
  return list.map(discount => {
    return <DiscountPlate discount={discount} />;
  });
};

const DiscountPlate = props => {
  const { discount } = props;
  return (
    <>
      <div className={"plate"}>
        <h2 className={"title"}>{discount.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: discount.text.replace(/\n/g, "<br />")
          }}
          className={"text"}
        />

        <Items items={discount.items_prev} />
        <Link
          href={`/discount?id=${discount.id}`}
          as={`/discounts/${discount.id}`}
        >
          <a className={"allItems"}>Посмотреть все товары >>></a>
        </Link>
      </div>
      <style jsx>{`
        .title {
          margin: 10px 0px;
        }
        .plate {
          border-bottom: 3px dashed #ccc;
        }
        .allItems {
          color: #333;
          padding: 10px;
          font-weight: 600;
          display: block;
        }
      `}</style>
    </>
  );
};

export default DiscountsList;
