import Link from "next/link";

class Success extends React.Component {
  render() {
    return (
      <div>
        <h1> Ваш заказ успешно отправлен.</h1>
        <Link href={"/"}>
          <a>Вернуться в магазин</a>
        </Link>
      </div>
    );
  }
}

export default Success;
