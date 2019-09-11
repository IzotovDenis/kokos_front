import { connect } from "react-redux";
import CartItems from "components/CartItems";
import CartForm from "../components/CartForm";

class Cart extends React.Component {
  render() {
    return (
      <>
        <div className={"cart"}>
          <h3>Ваш заказ</h3>
          <CartItems />
          <h3>Получатель</h3>
          <CartForm />
        </div>
        <style jsx>{`
          .cart {
            max-width: 700px;
            margin: 0 auto;
          }
          @media (max-width: 991.98px) {
            .cart {
              width: 100%;
              padding: 10px;
            }
          }
        `}</style>
      </>
    );
  }
}

export default connect()(Cart);
