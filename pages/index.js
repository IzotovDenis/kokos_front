import React from "react";
import Link from "next/link";
import Head from "next/head";
import API from "modules/API";
import Items from "components/Items";
import MainCatalog from "../components/MainCatalog";

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    // const isServer = !!req;
    // //reduxStore.dispatch(serverRenderClock(isServer));
    // if (isServer) {
    //   let response = await axios.get("http://api.timibro.com/admin/items");
    //   reduxStore.dispatch(actionSetItems(response.data.items));
    // } else {
    // }
    return {};
  }
  state = { items: [] };
  componentDidMount() {
    API.items.popular().then(items => this.setState({ items: items }));
  }
  componentWillUnmount() {}
  render() {
    const { items } = this.state;
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={"gcatalog"}>
            <MainCatalog />
          </div>
          <div className={"gcontent"}>
            <h1 className={"hLabel"}>
              <span>Популярные товары</span>
            </h1>
            <Items items={items} />
          </div>
        </div>
        <style jsx>{`
          .label {
            font-weight: 700;
            font-family: "Proxima Nova";
            text-transform: uppercase;
            font-size: 22px;
            position: relative;
            text-align: center;
            letter-spacing: 3px;
          }
          .label::before {
            content: "";
            position: absolute;
            height: 1px;
            width: 100%;
            bottom: 5px;
            left: 0;
            background-color: #eaf0f6;
          }
          .labelText {
            background: #eaf0f6;
            display: inline-block;
            position: relative;
            padding: 0px 10px;
          }
          @media (max-width: 991.98px) {
            .label {
              font-size: 15px;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Index;
