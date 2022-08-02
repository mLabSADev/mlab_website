import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
import Carousel from "react-material-ui-carousel";
const CarouselItem = ({ title, text, image, reg }) => {
  let width =
    typeof window !== "undefined" ? window.screen.width : 1000;
  return (
    <div className="item-c">
      <GatsbyImage className="item-img" image={image} alt={title} />
      <div className="details-c">
        <div>
          {" "}
          <Typography
            className="header-text-c"
            color="light"
            variant={width > 880 ? "h1" : "h3"}
          >
            {title.toUpperCase()}
          </Typography>
          <Typography color="light" variant="b2">
            {text}
          </Typography>{" "}
          <Typography color="light" variant="caption">
            {reg}
          </Typography>
        </div>
        <div></div>
      </div>
    </div>
  );
};

/**
 *
 * @param {string} title title
 * @param {string} text text
 * @param {string} image image
 * @returns
 */

const CarouselSlider = ({ data = [] }) => {
  return (
    <Carousel autoPlay={true}>
      {data.map((item, i) => {
        const title = item.node.frontmatter.title;
        const registration = item.node.frontmatter.registration;
        const text = item.node.rawMarkdownBody;
        const image = getImage(item.node.frontmatter.thumb);
        return (
          <CarouselItem
            key={i}
            image={image}
            text={text}
            title={title}
            reg={registration}
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselSlider;
