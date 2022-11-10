import React, { useEffect } from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Button from "../Button/Button";
import { squareVariants } from "../Typography/Typography";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
/**
 *
 * @param {obj} image result from getImage
 * @param {title} title title
 * @param {string} excerpt excerpt
 * @param {string} date date
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
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="main-nc"
    >
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
        <Typography variant="h6">{date}</Typography>
        <Typography variant="h5">{titleFix.toUpperCase()}</Typography>
        <Typography color="gray" variant="b2">
          {excerpt}
        </Typography>
      </div>
      <Button label="read more" type="link" url={`${url}`} />
    </motion.div>
  );
};

export default NewsCard;
