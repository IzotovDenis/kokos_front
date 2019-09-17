import MainCatalog from "../components/MainCatalog";
import BreadCrumbs from "../components/BreadCrumbs";
import { withRouter } from "next/router";
import API from "../modules/API";
import Items from "../components/Items";
import Spinner from "../components/Spinner";

class Discount extends React.Component {
  state = { discount: { items: [], text: "" }, isLoad: false };
  componentDidMount() {
    const id = this.props.router.query.id;
    API.discounts.show(id).then(response => {
      this.setState({ discount: response.discount, isLoad: true });
    });
  }
  render() {
    const { discount, isLoad } = this.state;
    return (
      <>
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
