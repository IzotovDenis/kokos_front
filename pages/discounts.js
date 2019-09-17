import MainCatalog from "../components/MainCatalog";
import BreadCrumbs from "../components/BreadCrumbs";
import DiscountsList from "../components/DiscountsList";

class Discounts extends React.Component {
  render() {
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={"gcatalog"}>
            <MainCatalog />
          </div>
          <div className={"gcontent"}>
            <BreadCrumbs
              type={"custom"}
              values={[{ href: "/discounts", title: "Все скидки" }]}
            />
            <h1 className={"groupLabel"}>Специальные предложения</h1>
            <DiscountsList />
          </div>
        </div>
      </>
    );
  }
}

export default Discounts;
