import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const CarouselItem = ({ title, text, image }) => {
  const image_ = "../../images/carousel/1.png";
  let width = window.screen.width;
  return (
    <div className="item-c">
      <StaticImage className="item-img" src={image_} alt={title} />
      <div className="details-c">
        <Typography
          className="header-text-c"
          color="light"
          variant={width > 880 ? "h1" : "h2"}
        >
          {title}
        </Typography>
        <Typography color="light" variant="b1">
          {text}
        </Typography>
      </div>
    </div>
  );
};

const CarouselSlider = () => {
  const data = [
    {
      title: "Towards technology-led prosperity for all",
      text: "mLab nurtures tech-talent, accelerates start-ups and creates technologies for social change. ",
      image: "../../images/carousel/1.png",
    },
  ];
  return (
    <div className="main-c">
      {data.map((item, i) => {
        return (
          <CarouselItem
            key={i}
            image={item.image}
            text={item.text}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default CarouselSlider;
