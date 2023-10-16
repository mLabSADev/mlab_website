import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const Publication = ({ url, title }) => {
  return (
    <div>
      <a className="publication" key={title} href={url} target="_blank">
        <iframe
          className="content"
          src={url}
          width="100%"
          height="300"
          title="Google Drive Preview"
        ></iframe>
      </a>
    </div>
  );
};

export default Publication;
