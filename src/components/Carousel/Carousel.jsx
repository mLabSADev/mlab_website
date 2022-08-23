import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
// import Carousel from "react-material-ui-carousel";
import Carousel from "framer-motion-carousel";

const Arrow = (dir, onClick) => {
  return (
    <div onClick={onClick} className="arrow">
      <svg
        className={dir === "left" ? "left" : "right"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 291.2 291.2"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M145.6,0C65.52,0,0,65.52,0,145.6S65.52,291.2,145.6,291.2s145.6-65.52,145.6-145.6S225.68,0,145.6,0Zm0,280C71.68,280,11.2,219.52,11.2,145.6S71.68,11.2,145.6,11.2,280,71.68,280,145.6,219.52,280,145.6,280Z" />
            <path d="M145,105.28l-7.84-7.84L89,145.6l48.16,48.16,7.84-7.84L110.32,151.2h84V140h-84Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

const CarouselItem = ({ title, text, image, reg }) => {
  let width = typeof window !== "undefined" ? window.screen.width : 800;
  console.log(width);
  return (
    <div className="item-c">
      <GatsbyImage className="item-img" image={image} alt={title} />
      <div className="details-c">
        <div>
          <Typography
            className="header-text-c"
            color="light"
            variant={width > 980 ? "h1" : "h3"}
          >
            {title.toUpperCase()}
          </Typography>
          <Typography color="light" variant="b1">
            {text}
          </Typography>
          <br></br>
          <Typography color="light" variant="caption">
            {reg}
          </Typography>
        </div>
        <div className="silentDiv"></div>
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
    <Carousel
      renderDots={({ activeIndex }) => {
        return <div className="dots"></div>;
      }}
      
      loop={true}
      interval={7000}
      className="carousel-main"
      autoPlay={true}
    >
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
