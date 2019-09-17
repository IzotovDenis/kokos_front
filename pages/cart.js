import { connect, useSelector } from "react-redux";
import CartItems from "components/CartItems";
import CartForm from "../components/CartForm";
import DeliveryMsg from "../components/DeliveryMsg";
import Link from "next/link";

const Cart = props => {
  const cart = useSelector(state => state.cart);
  if (cart.items.length === 0) {
    return (
      <>
        <div className={"cart"}>
          <DeliveryMsg />
          <h3>В корзине пусто :(</h3>
          <Link href={"/"}>
            <a>Вернуться в магазин</a>
          </Link>
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
  return (
    <>
      <div className={"cart"}>
        <DeliveryMsg />
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
};

export default Cart;
