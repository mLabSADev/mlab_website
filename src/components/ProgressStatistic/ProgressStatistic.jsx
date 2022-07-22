import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const ProgressStatistic = ({ percentage, label }) => {
  return (
    <div className="main-ps">
      <div className="text-ps">
        <Typography variant="s1">{label}</Typography>
        <Typography variant="b1">{percentage}%</Typography>
      </div>
      <div style={{ width: `${percentage}%` }} className="progress-bar"></div>
    </div>
  );
};

export default ProgressStatistic;
