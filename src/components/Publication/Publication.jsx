import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const Publication = ({ url, title }) => {
  return (
    <a className="publication" key={title} href={url} target="_blank">
      {/* <StaticImage
        className="image"
        src="../../images/backgrounds/pexels-eberhard-grossgasteiger-1612461.jpg"
      /> */}
      <div className="content">
        <Typography variant="h5">{title.toUpperCase()}</Typography>
      </div>
    </a>
  );
};

export default Publication;
