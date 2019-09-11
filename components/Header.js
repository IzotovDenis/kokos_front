import React from "react";
import Link from "next/link";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { MenuIcon } from "./Icons";
import * as mobileMenuActions from "../actions/mobileMenuActions.js";

const Header = () => {
  return (
    <>
      <div className={"header"}>
        <Hamburger />
        <div className={"logoContainer"}>
          <Link href={"/"}>
            <a>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1
                }}
              >
                <img
                  src={"/static/assets/images/logo.png"}
                  className={"logoImage"}
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={"rightSide"}>
          <SubHead />
        </div>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          padding-top: 20px;
          width: 1300px;
          margin: 0 auto;
        }

        .logoContainer {
          width: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logoImage {
          width: 100px;
        }
        .rightSide {
          flex: 1;
        }
        @media (max-width: 991.98px) {
          .header {
            width: 100vw;
            padding: 5px 15px;
            margin-bottom: 0px;
          }
          .logoContainer {
            flex: 1;
            margin-right: 30px;
          }
          .logoImage {
            width: 70px;
          }
          .rightSide {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

const Hamburger = connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      mobileMenuActions: bindActionCreators(mobileMenuActions, dispatch)
    };
  }
)(props => {
  return (
    <>
      <div
        className={"hamburgerContainer"}
        onClick={() => props.mobileMenuActions.actionShow()}
      >
        <div className={"hamburgerWrapper"}>
          <MenuIcon />
        </div>
      </div>

      <style jsx>{`
        .hamburgerContainer {
          display: none;
        }
        .hamburgerWrapper {
          height: 26px;
          width: 26px;
          fill: #582806;
        }
        .hamburgerWrapper svg {
          fill: #582806;
        }
        @media (max-width: 991.98px) {
          .hamburgerContainer {
            display: flex;
            width: 30px;
            height: 50px;
            justify-content: center;
            align-items: center;
            fill: #fff;
          }
        }
      `}</style>
    </>
  );
});

export const SubHead = props => {
  return (
    <>
      <div className={"container"}>
        <div className={"wrapper"}>
          <div className={"labelCatalog"}>ИНФОРМАЦИЯ</div>
          <Link href={"/"}>
            <a className={"item"}>
              <div className={"title"}>Главная</div>
            </a>
          </Link>
          <Link href={"/p?id=about"}>
            <a className={"item"}>
              <div className={"title"}>О нас</div>
            </a>
          </Link>
          <Link href={"/p?id=payment"}>
            <a className={"item"}>
              <div className={"title"}>Оплата и доставка</div>
            </a>
          </Link>
          <Link href={"/p?id=stores"}>
            <a className={"item itemStore"}>
              <div className={"title"}>Магазины</div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;

          font-size: 16px;
        }

        .wrapper {
          max-width: 1300px;
          margin: 0 auto;
          display: -ms-flexbox;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .item {
          margin: 0px 20px;
          text-align: center;
          display: flex;
          font-weight: 700;
          justify-content: center;
          text-decoration: none;
          color: #582806;
          fill: #582806;
          text-transform: uppercase;
          font-size: 1.1em;
        }

        .item:first-child {
          border-left-color: transparent;
        }

        .icon {
          width: 19px;
          height: 19px;
        }

        .title {
          padding-left: 10px;
        }

        .itemStore {
          font-weight: 700;
          color: #582806;
          fill: #582806;
        }
        .labelCatalog {
          font-weight: 500;
          color: #666;
          font-size: 12px;
          background: #fafafa;
          padding: 5px;
          text-align: center;
          display: none;
        }
        @media (max-width: 767px) {
          .wrapper {
            flex-direction: column;
          }
          .item {
            font-size: 14px;
            font-weight: 500;
            padding: 10px;
            align-items: flex-start;
            justify-content: flex-start;
            margin: 0px;
          }
          .labelCatalog {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
