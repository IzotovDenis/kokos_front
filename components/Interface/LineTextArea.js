import React, { useState } from "react";
import { TextArea } from "./index";

const LineTextArea = props => {
  const [focus, setFocus] = useState(false);
  const isActive = focus || props.value.length > 0 ? true : false;
  return (
    <div
      className={focus ? "boxShadow lineInput" : "lineInput"}
      style={{
        boxShadow: props.error ? "rgb(254, 86, 33) 0px 0px 3px 1px" : undefined
      }}
    >
      <div className={"inputContainer"}>
        <TextArea
          {...props}
          style={{
            zIndex: 20,
            border: "0px",
            outline: "none",
            paddingTop: isActive ? "1.206rem" : "0.838rem",
            paddingBottom: isActive ? "0.47rem" : "0.838rem"
          }}
          onFocus={() => setFocus(true)}
          onBlur={e => {
            setFocus(false);
            props.onBlur(e);
          }}
          onChange={e => props.onChange(e)}
        />
      </div>
      <div
        className={
          isActive
            ? "labelContainer labelContainerFocused"
            : "labelContainer labelContainerUnFocused"
        }
        onClick={() => setFocus(!focus)}
      >
        <span className={"label"}>{props.title}</span>
      </div>
      <Styles />
    </div>
  );
};

const Styles = () => {
  return (
    <style jsx>{`
      .lineInput {
        display: flex;
        flex-direction: row;
        position: relative;
        box-shadow: 0 0 0 1px #5a2b08;
        margin-bottom: 10px;
        background: #fff;
      }

      .boxShadow {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px -2px rgba(0, 0, 0, 0.4);
      }

      .labelContainer {
        color: #5a2b08;
        position: absolute;
        height: 1em;
        line-height: 1em;
        padding: 2px 5px;
        user-select: none;
        font-weight: 400;
        z-index: 10;
      }

      .labelContainerFocused {
        top: 0px;
        opacity: 1;
        font-size: 11px;
        padding-left: 5px;
      }

      .labelContainerUnFocused {
        font-size: 1em;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
      }

      .label {
        font-style: inherit;
      }

      .inputContainer {
        flex: 1;
        z-index: 10;
      }
    `}</style>
  );
};

LineTextArea.defaultProps = {
  title: "",
  value: "",
  onBlur: e => {}
};

export default LineTextArea;
