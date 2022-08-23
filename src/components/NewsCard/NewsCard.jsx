import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Button from "../Button/Button";
/**
 *
 * @param {obj} image result from getImage
 * @param {title} title title
 * @param {string} excerpt excerpt
 * @returns
 */
const NewsCard = ({ image, title, excerpt, url, date }) => {
  let titleFix = "";
  if (title) {
    titleFix = title.replaceAll("-", " ");
  } else {
    if (title === undefined || title === "undefined") {
      titleFix = "";
    } else {
      titleFix = title;
    }
  }

  return (
    <div className="main-nc">
      {image ? (
        <GatsbyImage
          objectFit="cover"
          image={image}
          alt={title}
          className="image-nc"
        ></GatsbyImage>
      ) : (
        <StaticImage
          src="../../assets/placeholder.jpg"
          className="image-nc"
          alt="no image"
        />
      )}

      <div className="details-nc">
        <Typography variant="b1">{date}</Typography>
        <Typography variant="h5">{titleFix.toUpperCase()}</Typography>
        <Typography color="gray" variant="b2">
          {excerpt}
        </Typography>
      </div>
      <Button label="read more" type="link" url={`/news${url}`} />
    </div>
  );
};

export default NewsCard;
