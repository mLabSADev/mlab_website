import React from "react";
import "./style.scss";
// import Typography from "../Typography/Typography";
import { StaticImage } from "gatsby-plugin-image";
import { Stack, Typography, colors } from "@mui/material";
const PageHeader = ({ image, title, page, index = 0, text }) => {
  return (
    <Stack
      m={1}
      mt={10}
      borderRadius={5}
      sx={{ border: `solid 1px ${colors.grey[300]}` }}
      overflow={"hidden"}
      className="main-ph"
    >
      {index === 1 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/aboutUs.png"
          alt=""
        />
      )}
      {index === 2 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/whatWeDo.png"
          alt=""
        />
      )}
      {index === 3 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/partners.png"
          alt=""
        />
      )}
      {index === 4 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/news.png"
          alt=""
        />
      )}
      {index === 5 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/resources.png"
          alt=""
        />
      )}
      {index === 6 && (
        <StaticImage
          className="imagebg"
          src="../../images/backgrounds/page-bgs/contact.png"
          alt=""
        />
      )}

      <Stack className="title-ph">
        <Typography variant="h3" color={"white"}>
          {title.toUpperCase()}
        </Typography>
        <Stack className="sectionTitleDescription">
          <Typography variant="body1" color="white">
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PageHeader;
