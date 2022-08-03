import React from "react";
import Typography from "../Typography/Typography";
import { Link } from "gatsby";
import "./style.scss";
/**
 *
 * @param {string} label label
 * @param {func} onClick click event, if type = button
 * @param {string} type button | link
 * @param {string} url if type = link, url must be provided
 */

function Button(props, { label = "read more", type = "button", url, color }) {
  if (type === "button") {
    return (
      <button {...props} className="button-nc">
        <div className="line-nc"></div>
        <div className="btn-nc">
          <Typography color={color ? color : null} variant="button">
            {label}
          </Typography>
        </div>
        <div className="line-nc"></div>
      </button>
    );
  } else {
    return (
      <Link to={url} className="button-nc">
        <div className="line-nc"></div>
        <div className="btn-nc">
          <Typography color={color ? color : null} variant="button">
            {label}
          </Typography>
        </div>
        <div className="line-nc"></div>
      </Link>
    );
  }
}

export default Button;
