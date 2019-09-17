import MainCatalog from "../components/MainCatalog";
import BreadCrumbs from "../components/BreadCrumbs";
import { withRouter } from "next/router";
import API from "../modules/API";
import Items from "../components/Items";
import Spinner from "../components/Spinner";
import Head from "next/head";

// function initialLoad(reduxStore, query) {
//   let promise = new Promise((resolve, reject) => {
//     Promise.all([API.groups.show(query.id, undefined, query.token)]).then(
//       value => {
//         reduxStore.dispatch(setGroup(value[0]));
//         resolve(true);
//       }
//     );
//   });
//   return promise;
// }

class Discount extends React.Component {
  static async getInitialProps({ reduxStore, req, query }) {
    const isServer = !!req;
    if (isServer) {
      let response = await API.discounts.show(query.id);
      return { discount: response.discount };
    }
    return {};
  }
  state = {
    discount: this.props.discount,
    isLoad: this.props.discount ? true : false
  };
  componentDidMount() {
    const id = this.props.router.query.id;
    if (!this.props.discount) {
      API.discounts.show(id).then(response => {
        this.setState({ discount: response.discount, isLoad: true });
      });
    }
  }
  componentDidUpdate() {
    const id = this.props.router.query.id;
    if (!this.props.discount && this.state.discount.id !== parseInt(id)) {
      API.discounts.show(id).then(response => {
        this.setState({ discount: response.discount, isLoad: true });
      });
    }
  }
  render() {
    const { discount, isLoad } = this.state;
    return (
      <>
        {isLoad && (
          <Head>
            <title>{discount.title} в интернет магазине Kokos.top</title>
            <meta
              content={`${discount.title} в интернет магазине Kokos.top`}
              name="title"
            />
            <meta name="description" content={`${discount.text}`} />
          </Head>
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={"gcatalog"}>
            <MainCatalog />
          </div>
          <div className={"gcontent"}>
            {!isLoad && <Spinner />}
            {isLoad && (
              <>
                <BreadCrumbs
                  type={"custom"}
                  values={[{ href: "/discounts", title: "Все скидки" }]}
                />
                <h1 className={"groupLabel"}>{discount.title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: discount.text.replace(/\n/g, "<br />")
                  }}
                  className={"text"}
                />

                <Items items={discount.items || []} />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Discount);
