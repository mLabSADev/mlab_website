import React from "react";
import Typography from "../Typography/Typography";
import "./style.scss";
const ProgressStatistic = ({ percentage, label }) => {
  return (
    <div className="main-ps">
      <div className="text-ps">
        <Typography variant="h5">{label}</Typography>
      </div>
      {/* <div style={{ width: `${percentage}%` }} className="progress-bar">
        <div className="knob">
          <Typography  variant="caption">{percentage}%</Typography>
        </div>
      </div> */}
    </div>
  );
};

export default ProgressStatistic;
