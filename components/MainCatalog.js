import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { withRouter } from "next/router";
import { ArrowDownIcon, DiscountIcon } from "components/Icons";

const MainCatalog = props => {
  const [open, setOpen] = useState(false);
  const groups = useSelector(state => state.catalog.tree);
  return (
    <>
      <DiscountItem />
      <div className={"labelCatalog"}>КАТАЛОГ</div>
      <div className={"desktop"}>
        {groups.map((item, index) => {
          return <Item item={item} parent count={1} />;
        })}
      </div>
      <style jsx>{`
        .head {
          display: flex;
          align-items: center;
        }
        .title {
          padding: 10px;
          font-weight: 600;
          font-size: 14px;
        }
        .icon {
          width: 20px;
          height: 20px;
          transition: all 0.2s linear;
        }
        .labelCatalog {
          font-weight: 500;
          color: #666;
          font-size: 12px;
          background: #fafafa;
          padding: 5px;
          text-align: center;
        }
        .mobile {
          display: none;
        }
        .label {
          padding: 0px;
          margin: 0px;
        }
        .desktop {
          display: block;
          background: #fff;
        }
        @media (max-width: 991.98px) {
          .mobile {
            display: block;
          }
          .desktop {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

const Item = withRouter(props => {
  const { item, parent } = props;
  const isGroupRoute = props.router.pathname === "/group";
  const group_id = props.router.query.id;
  return (
    <>
      <Link href={`/group?id=${item.id}`} as={`/groups/${item.id}`}>
        <a
          className={`item 
          ${parent ? "parent" : ""}
          ${
            isGroupRoute && group_id && parseInt(item.id) === parseInt(group_id)
              ? "active"
              : ""
          }`}
        >
          {item.title}
        </a>
      </Link>

      {item.children.map((item, index) => {
        return <Item item={item} count={props.count + 1} />;
      })}
      <style jsx>{`
        .item {
          font-size: 14px;
          font-weight: 500;
          padding: 10px 0px;
          padding-left: ${props.count * 10}px;
          display: block;
          color: #333;
          text-decoration: none;
          border-left: 3px solid transparent;
        }
        .item:hover {
          border-left: 3px solid #ccc;
        }
        .parent {
          font-weight: 600;
          text-transform: uppercase;
        }
        .active {
          background: #f0f0f0;
        }
        .childrens {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
});

const DiscountItem = () => {
  return (
    <>
      <Link href={"/discounts"}>
        <a className={"item"}>
          <div className={"itemIcon"}>
            <DiscountIcon />
          </div>
          <div className={"title"}>Акции</div>
        </a>
      </Link>
      <style jsx>{`
        .item {
          display: flex;
          padding: 0px 10px;
          text-decoration: none;
          background: #fa866940;
          border: 1px dashed transparent;
        }
        .item:hover {
          border: 1px dashed #fa8669;
        }
        .itemIcon {
          height: 32px;
          width: 32px;
          padding: 2px;
        }
        .title {
          flex: 1;
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          margin-left: 10px;
          color: #222;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default MainCatalog;
