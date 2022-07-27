import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../Button/Button";
/**
 *
 * @param {obj} image result from getImage
 * @param {title} title title
 * @param {string} excerpt excerpt
 * @returns
 */
const NewsCard = ({ image, title, excerpt, url }) => {
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
        <div className="image-nc">
          <iframe
            src="https://my.spline.design/macbookprocopy-882fa58dd63ca60c52f69be266786223/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      )}

      <div className="details-nc">
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
