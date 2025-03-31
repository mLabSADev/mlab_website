// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
// import Typography from "../Typography/Typography";
// import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
// import "./styles.css";
import { Carousel } from "react-carousel-minimal";
import { Box, Container, Stack, Typography, colors } from "@mui/material";
import { Button, ConfigProvider } from "antd";
import { navigate } from "gatsby";
import { ANTDTheme } from "../ThemeProvider";

const Arrow = (dir, onClick) => {
  return (
    <div onClick={onClick} className="arrow">
      <svg
        className={dir === "left" ? "left" : "right"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 291.2 291.2"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M145.6,0C65.52,0,0,65.52,0,145.6S65.52,291.2,145.6,291.2s145.6-65.52,145.6-145.6S225.68,0,145.6,0Zm0,280C71.68,280,11.2,219.52,11.2,145.6S71.68,11.2,145.6,11.2,280,71.68,280,145.6,219.52,280,145.6,280Z" />
            <path d="M145,105.28l-7.84-7.84L89,145.6l48.16,48.16,7.84-7.84L110.32,151.2h84V140h-84Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

const CarouselItem = ({ title, text, image, reg }) => {
  let width = typeof window !== "undefined" ? window.screen.width : 800;
  return (
    <Stack position={"relative"}>
      <Stack
        sx={{
          background:
            "linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,1))",
        }}
        zIndex={4}
      >
        <Stack
          position={"relative"}
          zIndex={3}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Stack
            textAlign={"left"}
            height={"100%"}
            flex={1}
            p={{ xs: 2, sm: 5, md: 10, lg: 17 }}
            spacing={3}
            py={{ xs: 4, sm: 10, md: 20, lg: 34 }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              <Typography variant="h2">{title}</Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
            >
              <Typography variant="h4">{title}</Typography>
            </Box>

            <Typography variant="subtitle1">{text}</Typography>
            <ConfigProvider theme={ANTDTheme}>
              <Stack direction={"row"} spacing={2}>
                <Button
                  size="large"
                  style={{ alignSelf: "self-start" }}
                  type="primary"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  size="large"
                  style={{ alignSelf: "self-start" }}
                  type="default "
                  onClick={() => {
                    navigate("/who-we-are");
                  }}
                >
                  About Us
                </Button>
              </Stack>
            </ConfigProvider>
          </Stack>
          <Stack flex={1}>
            <Box sx={{ width: "100%", height: "100%" }} overflow={"hidden"}>
              <GatsbyImage
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                image={image}
                alt={title}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
  return (
    <SwiperSlide className="item-c">
      <GatsbyImage className="item-img" image={image} alt={title} />
      <div className="details-c">
        <div>
          <Typography
            className="header-text-c"
            color="light"
            variant={width > 980 ? "h1" : "h3"}
          >
            {title}
          </Typography>
          <Typography color="light" variant="b2">
            {text}
          </Typography>
          <br></br>
          <Typography color="light" variant="caption">
            {reg}
          </Typography>
        </div>
        <div className="silentDiv"></div>
      </div>
    </SwiperSlide>
  );
};

const CarouselSlider = ({ data = [] }) => {
  const onAutoplayTimeLeft = (s, time, progress) => {
    // time in miliseconds
    // progress is from 1 to 0
    console.log({ s, time, progress });
  };
  return (
    <Stack
      m={1}
      mt={10}
      overflow={"hidden"}
      borderRadius={5}
      sx={{ border: `solid 1px ${colors.grey[300]}` }}
    >
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        speed={5000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        // className="mySwiper"
      >
        {data.map((banner, i) => {
          const title = banner.node.frontmatter.title;
          const reg = banner.node.frontmatter.registration;
          const image = banner.node.frontmatter.image;
          console.log({ title, reg });
          return (
            <SwiperSlide key={i}>
              <CarouselItem title={title} image={getImage(image)} text={reg} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Stack>
  );
  return (
    <Swiper
      // cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      mousewheel={false}
      keyboard={true}
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      // className="mySwiper"
    >
      {data.map((banner, i) => {
        const title = banner.node.frontmatter.title;
        const reg = banner.node.frontmatter.registration;
        const image = banner.node.frontmatter.image;
        return (
          <SwiperSlide key={i}>
            <CarouselItem title={title} image={getImage(image)} text={reg} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselSlider;
