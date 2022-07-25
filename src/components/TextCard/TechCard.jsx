import React from "react";
import Button from "../Button/Button";
import { StaticImage } from "gatsby-plugin-image";
import Typography from "../Typography/Typography";
import "./style.scss";
const TechCard = () => {
  return (
    <div className="main-tc">
      <div className="image-w">
        <div className="image">
          <StaticImage
          className="img"
            src="../../images/qualcomm-snapdragon-sdk-for-android.png"
            alt=""
          />
        </div>
      </div>
      <div className="details">
        <Typography variant="caption">27 Jan, 202x</Typography>
        <Typography variant="h4">Tech Name</Typography>
        <br></br>
        <Typography variant="b2">
          Complete details on each type of Personal Data collected are provided
          in the dedicated sections of this privacy policy or by specific
          explanation texts displayed prior to the Data collection.
        </Typography>
        <Button></Button>
      </div>
    </div>
  );
};

export default TechCard;
