import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
/**
 *
 * @param {children} string text
 * @returns
 */
function SectionTitle({ children = '' }) {
  let width = 0
  if (typeof window !== 'undefined') {
    width = window.screen.width
  } else {
    width = 1000
  }
  return (
    <div className="main-st">
      <div className="underline-st">
        <Typography variant={width > 880 ? "h4" : "h5"}>
          {children.toUpperCase()}
        </Typography>
      </div>
    </div>
  );
}

export default SectionTitle;
