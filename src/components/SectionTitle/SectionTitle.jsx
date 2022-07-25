import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
/**
 *
 * @param {children} string text
 * @returns
 */
function SectionTitle({ children = '' }) {
  let width = window.screen.width;
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
