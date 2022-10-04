import React from "react";
import "./style.scss";
/**
 *
 * @param {string} variant h(1-6) | s(1-2) | b(1-2) | button | caption | overline
 * @param {string} color light | dark | gray
 * @returns
 */
const Typography = (props) => {
  console.log(props.capitalise);
  return (
    <p
      {...props}
      className={[
        `main-t ${props.variant} ${props.color} ${
          props.center == true ? "center" : null
        } ${props.capitalise ? "sentance-case" : null}`,
      ]}
    >
      {props.children}
    </p>
  );
};

export default Typography;
