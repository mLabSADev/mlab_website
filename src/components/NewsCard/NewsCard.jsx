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
      <div
        style={{
          padding: "1px",
          background:
            "radial-gradient(circle, rgba(219,255,154,1) 0%, rgba(203,255,95,1) 41%, rgba(141,198,25,1) 47%, rgba(110,164,0,1) 47%, rgba(172,255,0,1) 49%, rgba(213,255,124,1) 51%, rgba(245,255,238,1) 100%)",
        }}
      >
        {image ? (
          <GatsbyImage
            objectFit="cover"
            image={image}
            backgroundColor={"rgba(93,145,0,0)"}
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
      </div>

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
