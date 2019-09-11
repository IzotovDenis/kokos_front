import React from "react";
import Styles from "./Styles";

const Input = props => {
  return (
    <>
      <input className={"formControl"} {...props} />
      <Styles />
    </>
  );
};

Input.defaultProps = {
  value: "",
  onChange: e => {}
};

export default Input;
