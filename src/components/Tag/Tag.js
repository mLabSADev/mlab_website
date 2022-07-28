import { Link } from "gatsby";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const Tag = ({ label, url }) => {
  return (
    <Link className="tag-link" to={`/news/tag/${url.replaceAll(" ", "_")}`}>
      <Typography variant="caption">{label.toUpperCase()}</Typography>
    </Link>
  );
};
export default Tag;
