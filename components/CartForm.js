import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSendOrder } from "../actions/cartActions";
import validate from "validate.js";
import { LineInput, LineTextArea } from "../components/Interface";

var constraints = {
  person: {
    presence: {
      allowEmpty: false,
      message: "не заполнено!"
    }
  },
  tel: {
    presence: {
      allowEmpty: false
    }
  },
  email: {
    presence: {
      allowEmpty: false
    },
    email: true
  },
  address: {
    presence: {
      allowEmpty: false
    }
  }
};

const CartForm = props => {
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState({});
  const fetching = useSelector(state => state.cart.fetching);
  const dispatch = useDispatch();
  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const validateField = e => {
    const name = e.target.name;
    const errors = validate(info, constraints);
    if (errors && errors[name]) {
      setErrors({ ...errors, [name]: errors[name] });
    } else {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const sendValidate = e => {
    const errors = validate(info, constraints);
    if (errors) setErrors(errors || {});
    else {
      dispatch(actionSendOrder());
    }
  };
  useEffect(() => {
    const data = localStorage.getItem("info");
    if (data) {
      setInfo(JSON.parse(data));
    }
  }, []);
  useEffect(() => localStorage.setItem("info", JSON.stringify(info)), [info]);
  return (
    <>
      <LineInput
        title={"ФИО получателя"}
        name={"person"}
        type={"text"}
        value={info.person}
        error={errors["person"]}
        onChange={handleChange}
        onBlur={validateField}
      />
      <LineInput
        title={"email"}
        name={"email"}
        type={"text"}
        value={info.email}
        error={errors["email"]}
        onChange={handleChange}
        onBlur={validateField}
      />
      <LineInput
        title={"Телефон"}
        name={"tel"}
        type={"text"}
        value={info.tel}
        error={errors["tel"]}
        onChange={handleChange}
        onBlur={validateField}
      />
      <LineTextArea
        title={"Адрес доставки"}
        name={"address"}
        type={"text"}
        value={info.address}
        error={errors["address"]}
        onChange={handleChange}
        onBlur={validateField}
      />
      <LineTextArea
        title={"Комментарий"}
        name={"comment"}
        type={"text"}
        value={info.comment}
        onChange={handleChange}
      />
      <button
        onClick={sendValidate}
        disabled={fetching}
        style={{
          background: "#5a2b08",
          color: "#fff",
          padding: 10,
          textAlign: "center",
          fontSize: "1.5em",
          fontWeight: "300",
          width: "100%",
          border: 0,
          cursor: "pointer"
        }}
      >
        {fetching ? "Отправка заказа..." : "Оформить заказ"}
      </button>
    </>
  );
};

export default CartForm;
