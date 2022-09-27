import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
import { StaticImage } from "gatsby-plugin-image";
const PageHeader = ({ image, title, page, index = 0, text }) => {
  return (
    <div className="main-ph">
      {index === 1 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/aboutUs.png"
          alt=""
        />
      )}
      {index === 2 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/whatWeDo.png"
          alt=""
        />
      )}
      {index === 3 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/partners.png"
          alt=""
        />
      )}
      {index === 4 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/news.png"
          alt=""
        />
      )}
      {index === 5 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/resources.png"
          alt=""
        />
      )}
      {index === 6 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/contact.png"
          alt=""
        />
      )}

      <div className="title-ph">
        <Typography variant="h3" color="light">
          {title.toUpperCase()}
        </Typography>
        <Typography variant="b2" color="light">{text}</Typography>
      </div>
    </div>
  );
};

export default PageHeader;
