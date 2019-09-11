import React from "react";
import Styles from "./Styles";

const TextArea = props => {
  return (
    <>
      <textarea className={"formControl"} {...props} />
      <Styles />
    </>
  );
};

TextArea.defaultProps = {
  value: "",
  rows: 3,
  onChange: e => {}
};

export default TextArea;
