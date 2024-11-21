import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
// import Typography from "../Typography/Typography";
import "./style.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { Card } from "antd";
const ProgressStatistic = ({ label, description, icon }) => {
  return (
    <Card variant="outlined">
      <Stack direction={"row"} spacing={3}>
        <GatsbyImage
          style={{ width: 40, height: 40, objectFit: "contain" }}
          image={icon}
          alt={label}
        />

        <Stack textAlign={"left"} spacing={2}>
          <Typography variant="h5" fontWeight={"bold"}>
            {label}
          </Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProgressStatistic;
