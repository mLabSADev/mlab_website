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

const Button = (
  { label, type = "button", url, color, onClick, disabled = false },
  props
) => {
  if (type === "button") {
    return (
      <button
        disabled={disabled}
        type="submit"
        onClick={onClick}
        {...props}
        className="button-nc"
      >
        <div className="line-nc"></div>
        <div className="btn-nc">
          <Typography color={color ? color : null} variant="button">
            {label ? label : "read more"}
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
};

export default Button;
