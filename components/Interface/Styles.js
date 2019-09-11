import React from "react";

const Styles = props => {
  return (
    <style jsx>{`
      .formControl {
        display: block;
        width: 100%;
        padding: 0.438em 0.875em;
        font-size: 1em;
        font-style: inherit;
        line-height: 1.54;
        font-weight: 600;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(24, 28, 33, 0.1);
        -webkit-transition: border-color 0.15s ease-in-out,
          -webkit-box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out,
          -webkit-box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
          -webkit-box-shadow 0.15s ease-in-out;
      }

      textarea {
        resize: none;
      }
    `}</style>
  );
};

export default Styles;
