import { withRouter } from "next/router";
import API from "modules/API";
import { connect } from "react-redux";
import { actionGetItem, actionSetItem } from "../actions/itemActions";
import ItemImage from "components/ItemImage";
import { currency } from "modules/helpers";
import ItemForm from "components/ItemForm";
import MainCatalog from "components/MainCatalog";
import BreadCrumbs from "components/BreadCrumbs";
import Head from "next/head";

function initialLoad(reduxStore, query) {
  let promise = new Promise((resolve, reject) => {
    Promise.all([API.items.show(query.id)])
      .then(value => {
        reduxStore.dispatch(actionSetItem(value[0].item));
        resolve(true);
      })
      .catch(e => reject("error"));
  });
  return promise;
}

class Item extends React.Component {
  static async getInitialProps({ reduxStore, req, query }) {
    const isServer = !!req;
    if (isServer) {
      await initialLoad(reduxStore, query);
    }
    return {};
  }
  state = {};
  render() {
    const { item, isLoad } = this.props;
    return (
      <>
        <Head>
          <title>
            Купить {item.title} {item.subtitle}
          </title>
          <meta
            content={`Купить со скидкой ${item.title} ${item.subtitle}`}
            name="title"
          />
          <meta
            name="description"
            content={`Лучшая цена на ${item.title}: всего ${parseInt(
              item.price / 100
            )}руб. ${item.subtitle}. Доставка по России.`}
          />
        </Head>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={"gcatalog"}>
            <MainCatalog />
          </div>
          <div className={"gcontent"}>
            <BreadCrumbs type={"groups"} id={item.group.id} self />
            <div className={"container"}>
              <div className={"main"}>
                <div className={"imageContainer"}>
                  <ItemImage item={item} />
                </div>
                <div className={"content"}>
                  <div className={"title"}>{item.title}</div>
                  <div className={"subtitle"}>{item.subtitle}</div>
                  <div className={"price"}>
                    <Price item={item} />
                  </div>
                  <div className={"formContainer"}>
                    <ItemForm item={item} />
                  </div>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.description.replace(/\n/g, "<br />")
                }}
                className={"description"}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .container {
            width: 100%;
          }
          .main {
            display: flex;
            flex-direction: row;
          }
          .imageContainer img {
            width: 100%;
          }
          .imageContainer {
            width: 300px;
            border-radius: 10px;
            overflow: hidden;
          }
          .content {
            padding: 0px 20px;
            flex: 1;
            position: relative;
          }
          .description {
            position: relative;
            padding-top: 20px;
          }
          .description:before {
            content: "Описание:";
            position: absolute;
            font-size: 0.9em;
            color: #666;
            top: 0px;
            left: 0px;
          }
          .stats {
            display: flex;
            padding: 10px 0px;
            flex-direction: row;
          }
          .counter {
            flex: 1;
            font-size: 0.9rem;
            line-height: 1.5rem;
          }
          .price {
            padding: 10px 0px;
          }
          .icon {
            width: 1.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            fill: #fb8c00;
          }
          .title {
            font-size: 1.3rem;
            font-family: "Proxima Nova", sans-serif;
            font-weight: 600;
          }
          .formContainer {
            width: 200px;
            padding: 10px 0px;
          }
          @media (max-width: 991.98px) {
            .imageContainer {
              width: 90%;
              margin: 0 auto;
            }
            .main {
              flex-direction: column;
            }
            .price {
              padding: 10px 0px;
              font-weight: 600;
              font-size: 1.3rem;
              text-align: center;
            }
            .formContainer {
              margin: 0 auto;
            }
          }
        `}</style>
      </>
    );
  }
}

const Price = props => {
  const { item } = props;
  let result;
  if (item.discount_price > 0) {
    return (
      <>
        <span className={"price_old"}>{currency(item.price)}</span>
        <div className={"price"}>{currency(item.discount_price)}</div>
        <style jsx>{`
          .price_old {
            font-size: 13px;
            position: relative;
            font-weight: 400;
            color: #888;
          }
          .price_old::before {
            content: " ";
            height: 1px;
            top: 50%;
            bottom: 0px;

            width: 100%;
            background: #888;
            position: absolute;
          }
          .price {
            font-family: "Proxima Nova", sans-serif;
            font-weight: 600;
            font-size: 1.3rem;
            text-align: left;
          }
        `}</style>
      </>
    );
  } else {
    return (
      <>
        <div className={"price"}>{currency(item.price)}</div>{" "}
        <style jsx>{`
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
        `}</style>
      </>
    );
  }
};

const mapDispatchToProps = {
  actionGetItem
};

export default connect(
  state => {
    return {
      item: state.item.item,
      itemLoad: state.item.itemLoad
    };
  },
  mapDispatchToProps
)(withRouter(Item));
