import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
// import Carousel from "react-material-ui-carousel";
// import Carousel from "framer-motion-carousel";
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
  let _data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];
  return (
    <Carousel
      data={_data}
      time={7000}
      automatic={true}
      dots={true}
      width="100%"
      height="70vh"
    />
  );
};

export default CarouselSlider;
