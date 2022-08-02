import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from "../Typography/Typography";
import "./style.scss";
const CategoryStats = ({ number, label, image }) => {
  let width =
  typeof window !== "undefined"
    ? window.screen.width
    : 1000;
  return (
    <div className="main-sc">
      <GatsbyImage className="image-cs" image={image} alt={label} />
      {/* <StaticImage className="image-cs" src="../../images/icons/bulb.png" alt="" /> */}
      <div className="text-cs">
        <Typography variant={width > 880 ? "h1":"h3"}>{number}</Typography>
        <Typography variant="s2">{label}</Typography>
      </div>
    </div>
  );
};

export default CategoryStats;
