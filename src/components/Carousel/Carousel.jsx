// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
// import "./styles.css";
import { Carousel } from "react-carousel-minimal";

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
  return (
    <SwiperSlide className="item-c">
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
          <Typography color="light" variant="b2">
            {text}
          </Typography>
          <br></br>
          <Typography color="light" variant="caption">
            {reg}
          </Typography>
        </div>
        <div className="silentDiv"></div>
      </div>
    </SwiperSlide>
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
  let _data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      mousewheel={false}
      keyboard={true}
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {data.map((banner, i) => {
        const title = banner.node.frontmatter.title;
        const reg = banner.node.frontmatter.registration;
        const image = banner.node.frontmatter.image;
        return (
          <SwiperSlide key={i} className="item-c">
            <CarouselItem title={title} image={getImage(image)} text={reg} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselSlider;
