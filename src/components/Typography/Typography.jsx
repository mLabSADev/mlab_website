import React from "react";
import "./style.scss";
/**
 *
 * @param {string} variant h(1-6) | s(1-2) | b(1-2) | button | caption | overline
 * @param {string} color light | dark
 * @returns
 */
const Typography = (props) => {
  return (
    <p {...props} className={[`main-t ${props.variant} ${props.color}`]}>
      {props.children}
    </p>
  );
};

export default Typography;
