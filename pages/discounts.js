import MainCatalog from "../components/MainCatalog";
import BreadCrumbs from "../components/BreadCrumbs";
import DiscountsList from "../components/DiscountsList";
import Head from "next/head";

class Discounts extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Скидки и Акции в интернет магазине Kokos.top</title>
          <meta
            content={`Купить корейскую косметику по акции со скидкой в интернет магазине Kokos.top`}
            name="title"
          />
          <meta
            name="description"
            content={`Корейская косметика известных брендов по акции со скидкой. Красота и здоровье для Вашей кожи. Отправка по всей России.`}
          />
        </Head>
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
