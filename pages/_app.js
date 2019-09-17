import App from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Header from "components/Header";
import Head from "next/head";
import ThumbCart from "components/ThumbCart";
import { setCatalog } from "../actions/catalogActions";
import { setDiscounts } from "../actions/discountActions";
import API from "modules/API";
import MobileMenu from "components/MobileMenu";
import Footer from "components/Footer";

function initialLoad(ctx) {
  let promise = new Promise((resolve, reject) => {
    Promise.all([API.groups.index(), API.discounts.index()])
      .then(value => {
        ctx.reduxStore.dispatch(setCatalog(value[0]));
        ctx.reduxStore.dispatch(setDiscounts(value[1]));
        resolve(true);
      })
      .catch(e => {
        reject("error");
      });
  });
  return promise;
}

class MyApp extends App {
  static async getInitialProps({ reduxStore, Component, ctx }) {
    const isServer = !!ctx.req;
    let error = false;
    if (isServer) {
      await initialLoad(ctx).catch(e => {
        error = true;
      });
    }
    if (Component.getInitialProps) {
      await Component.getInitialProps(ctx);
    }
    return { error: error };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Provider store={reduxStore}>
          <React.Fragment>
            <HeadPage />
            <MobileMenu />
            <Header />
            <div className={"App"}>
              <Component {...pageProps} />
            </div>
            <ThumbCart />
            <Footer />
          </React.Fragment>
        </Provider>
        <Styles />
      </>
    );
  }
}

const Styles = () => {
  return (
    <style jsx>{`
      .gcatalog {
        width: 250px;
      }
      .gcontent {
        flex: 1;
        margin-left: 20px;
      }
      @media (max-width: 991.98px) {
        .gcatalog {
          display: none;
        }
        .gcontent {
          width: 100%;
          margin-left: 0px;
          padding: 10px;
        }
      }
    `}</style>
  );
};

const HeadPage = props => {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&amp;subset=cyrillic"
        rel="stylesheet"
      />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=no"
      />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/static/ms-icon-144x144.png"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
        rel="stylesheet"
      />
      <link href="/static/assets/index.css" rel="stylesheet" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default withReduxStore(MyApp);
