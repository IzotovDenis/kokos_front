import React from "react";
import Link from "next/link";
import ItemImage from "../components/ItemImage";
import ItemForm from "../components/ItemForm";
import { currency } from "components/Currency";
import slugify from "slugify";

class Items extends React.Component {
  render() {
    return (
      <>
        <div className={"items"}>
          {this.props.items.map((item, index) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
        <style jsx>{`
          .items {
            display: flex;
            overflow: hidden;
            flex-wrap: wrap;
          }
        `}</style>
      </>
    );
  }
}

const Item = props => {
  const { item } = props;
  return (
    <>
      <div className={"item"}>
        {false && (
          <>
            <div className={"brand"}>KOKO SHANEL</div>
          </>
        )}
        <Link
          href={{
            pathname: `/i/${item.id}-${slugify(item.title)}`
          }}
        >
          <a className={"itemContent"}>
            <div className={"imageContainer"}>
              <ItemImage item={item} />
            </div>
            <div className={"title"}>{item.title}</div>
            <div className={"short"}>{item.subtitle}</div>
          </a>
        </Link>
        <div className={"footer"}>
          <div className={"price"}>{currency(item.price)}</div>
          <div className={"orderForm"}>
            <ItemForm itemId={item.id} item={item} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .item {
          width: 250px;
          margin: 3px;
          float: left;
          display: flex;
          flex-direction: column;
          position: relative;
          border-radius: 2px;
          overflow: hidden;
        }

        .item:hover {
          box-shadow: 1px 1px 4px 1px #ccc;
          background: #fff;
        }

        .itemContent {
          flex: 1;
          display: flex;
          flex-direction: column;
          color: #333;
          text-decoration: none;
        }

        .item:active {
          box-shadow: 1px 1px 4px 1px #44a8f2;
        }

        .imageContainer {
          width: 100%;
          position: relative;
        }

        .brand {
          position: absolute;
          left: 0;
          top: 0;
          background: #582806;
          padding: 5px;
          font-size: 0.9em;
          font-weight: 500;
          color: #fff;
          z-index: 300;
          user-select: none;
        }

        .new {
          position: absolute;
          left: 0;
          top: 25px;
          background: #ef3f23;
          padding: 3px 6px;
          font-size: 0.8em;
          font-weight: 400;
          color: #fff;
          z-index: 300;
          user-select: none;
        }

        .title {
          font-size: 15px;
          text-transform: uppercase;
          width: 100%;
          padding: 3px 0px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
        }
        .item a {
          text-decoration: none;
        }
        .short {
          font-size: 13px;
          padding: 5px 0px;
          color: #666;
        }

        .price {
          font-family: "Proxima Nova", sans-serif;
          font-weight: 600;
          text-align: center;
          padding-bottom: 5px;
          color: #000;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer {
          display: flex;
          padding: 0px 5px 5px 5px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .orderForm {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 991.98px) {
          .item {
            width: calc(100% / 2 - 6px);
          }
          .title {
            font-size: 0.75em;
            overflow: hidden;
          }
          .footer {
            display: flex;
            padding: 10px 5px 5px 5px;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default Items;
