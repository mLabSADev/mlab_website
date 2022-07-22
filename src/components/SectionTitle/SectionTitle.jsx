import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
function SectionTitle({text}) {
    let width = window.screen.width;
  return (
    <div className="main-st">
      <div className="underline-st">
        <Typography variant={width > 880 ? "h3":"h5"}>{text.toUpperCase()}</Typography>
      </div>
    </div>
  );
}

export default SectionTitle;
