import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const ProgressStatistic = ({ label, description, icon }) => {
  return (
    <div className="main-ps">
      <GatsbyImage class="stat-icon" image={icon} alt={label} />
      <div className="text-ps">
        <Typography variant="h4">{label}</Typography>
        <Typography variant="s1">{description}</Typography>
      </div>
    </div>
  );
};

export default ProgressStatistic;
