import React from "react";
import Button from "../Button/Button";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from "../Typography/Typography";
import "./style.scss";
const TechCard = ({ image, icon, title, description, handleClick }) => {
  return (
    <div className="main-tc">
      <div className="image-w">
        <div className="image">
          <GatsbyImage
            objectFit="cover"
            className="img"
            image={image}
            alt=""
          />
        </div>
      </div>
      <div className="details">
        <div className="details-text">
          <div>
            {/* <Typography variant="caption">27 Jan, 202x</Typography> */}
            <Typography variant="h4">{title}</Typography>
          </div>
          <div className="icon-w">
            <GatsbyImage
              objectFit="cover"
              className="icon-img"
              image={icon}
              alt=""
            />
          </div>
        </div>
        <br></br>
        <Typography variant="b2">{description}</Typography>
        {/* <Button type="button" onClick={handleClick}></Button> */}
      </div>
    </div>
  );
};

export default TechCard;
