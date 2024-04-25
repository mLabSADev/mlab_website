import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
// import Typography from "../Typography/Typography";
import "./style.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { Card } from "antd";
const TechCard = ({ image, icon, title, description, handleClick }) => {
  return (
    <Card
      cover={
        <Stack maxHeight={300} overflow={"hidden"}>
          <GatsbyImage objectFit="cover" image={image} alt="" />
        </Stack>
      }
    >
      <Card.Meta
        avatar={
          <Avatar size={"large"}>
            <GatsbyImage
              objectFit="cover"
              image={icon}
              alt=""
              style={{ height: 40, width: 40 }}
            />
          </Avatar>
        }
        title={title}
        description={description}
      />
    </Card>
  );
};

export default TechCard;
