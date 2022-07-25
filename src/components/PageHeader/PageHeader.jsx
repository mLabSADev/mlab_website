import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
import { StaticImage } from "gatsby-plugin-image";
function PageHeader({ image, title, page }) {
  const backgrounds = {};
  return (
    <div className="main-ph">
      <StaticImage
        className="imagebg"
        src={`../../images/backgrounds/3d.jpg`}
        alt=""
      />
      <div className="title-ph">
        <Typography variant="h3" color="light">
          {title.toUpperCase()}
        </Typography>
      </div>
    </div>
  );
}

export default PageHeader;
