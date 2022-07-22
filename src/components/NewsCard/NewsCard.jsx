import React from "react";
import "./style.scss";
import Typography from "../Typography/Typography";
import { Link } from "gatsby";

const Button = () => {
  return (
    <div className="button-nc">
      <div className="line-nc"></div>
      <Link className="btn-nc">
        <Typography variant="button">read more</Typography>
      </Link>
      <div className="line-nc"></div>
    </div>
  );
};
const NewsCard = () => {
  return (
    <div className="main-nc">
      <div className="image-nc"></div>
      <div className="details-nc">
        <Typography variant="h4">
          Winners of the AgriTourZA programme
        </Typography>
        <Typography variant="b1">
          It’s a win/win for these entrepreneurs and tourism and agricultural
        </Typography>
      </div>
      <Button />
    </div>
  );
};

export default NewsCard;
