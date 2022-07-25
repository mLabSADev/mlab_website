import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
function Button({ label = "read more", onClick }) {
  return (
    <button className="button-nc">
      <div className="line-nc"></div>
      <div className="btn-nc">
        <Typography variant="button">read more</Typography>
      </div>
      <div className="line-nc"></div>
    </button>
  );
}

export default Button;
