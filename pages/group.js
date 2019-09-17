import MainCatalog from "../components/MainCatalog";
import { connect } from "react-redux";
import API from "modules/API";
import { setGroup } from "../actions/groupActions";
import { withRouter } from "next/router";
import * as groupActions from "../actions/groupActions";
import { bindActionCreators } from "redux";
import Items from "components/Items";
import BreadCrumbs from "components/BreadCrumbs";
import Head from "next/head";
import Spinner from "../components/Spinner";

function initialLoad(reduxStore, query) {
  let promise = new Promise((resolve, reject) => {
    Promise.all([API.groups.show(query.id, undefined, query.token)]).then(
      value => {
        reduxStore.dispatch(setGroup(value[0]));
        resolve(true);
      }
    );
  });
  return promise;
}

class Group extends React.Component {
  static async getInitialProps({ reduxStore, req, query }) {
    const isServer = !!req;
    if (isServer) {
      await initialLoad(reduxStore, query);
    }
    return { token: query };
  }
  componentDidMount() {
    this.props.groupActions.clearGroupItems();
    this.props.groupActions.actionGetGroup(
      this.props.router.query.id,
      this.props.router.query
    );
  }
  componentDidUpdate(prevProps) {
    const { dispatch } = this.props;
    if (
      JSON.stringify(this.props.router.query) !==
      JSON.stringify(prevProps.router.query)
    ) {
      this.props.groupActions.clearGroupItems();
      this.props.groupActions.actionGetGroup(
        this.props.router.query.id,
        this.props.router.query
      );
    }
  }
  getTitle() {
    const { group } = this.props;
    if (group.site_title && group.site_title.length > 0) {
      return group.site_title;
    } else {
      return group.title;
    }
  }
  getDescription() {
    const { group } = this.props;
    return `${this.getTitle()} по низкой цене с доставкой по России, оригинальный товар, большой выбор, удобный способ оплаты`;
  }
  render() {
    const { items, isLoad } = this.props;
    return (
      <>
        <Head>
          <title>Купить {this.getTitle()} в интернет-магазине Kokos</title>
          <meta
            content={`Купить ${this.getTitle()} в интернет-магазине Kokos`}
            name="title"
          />
          <meta name="description" content={this.getDescription()} />
        </Head>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={"gcatalog"}>
            <MainCatalog />
          </div>
          <div className={"gcontent"}>
            {!isLoad && <Spinner />}
            {isLoad && (
              <>
                <BreadCrumbs type={"groups"} id={this.props.group.id} />
                <h1 className={"groupLabel"}>{this.getTitle()}</h1>
                <Items items={items} />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(
    (state, ownProps) => {
      return {
        group: state.group.group,
        items: state.group.items,
        groupId: state.group.groupId,
        totalItems: state.group.totalItems,
        pageLoaded: state.group.pageLoaded,
        totalPages: state.group.totalPages,
        isLoad: state.group.isLoad
      };
    },
    dispatch => {
      return {
        groupActions: bindActionCreators(groupActions, dispatch)
      };
    }
  )(Group)
);
