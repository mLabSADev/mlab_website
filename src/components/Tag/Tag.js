import { Link } from "gatsby";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const Tag = ({ label, url }) => {
  return (
    <Link className="tag-link" to={url}>
      <Typography variant="caption">{label ? label.toUpperCase() : label}</Typography>
    </Link>
  );
};
export default Tag;
