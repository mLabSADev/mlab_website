import React, { useState } from "react";
import "./main.scss";
import Layout from "../components/Layout/Layout";
import CarouselSlider from "../components/Carousel/Carousel";
import ProgressStatistic from "../components/ProgressStatistic/ProgressStatistic";
import Section from "../components/Section/Section";
import CategoryStats from "../components/CategoryStats/CategoryStats";
import NewsCard from "../components/NewsCard/NewsCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Typography from "../components/Typography/Typography";
import TechCard from "../components/TextCard/TechCard";
import Modal from "../components/Modal/Modal";
import { AnimatePresence, motion } from "framer-motion";
const IndexPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const stats = [
    {
      label: "Students employed after studies",
      percentage: 10,
    },
    {
      label: "Participants between 10 - 35",
      percentage: 30,
    },
    {
      label: "Female Participants",
      percentage: 50,
    },
    {
      label: "Startups founded by SA Youth",
      percentage: 70,
    },
  ];
  const categoryStats = [
    {
      number: 200,
      label: "Startups",
    },
    {
      number: 400,
      label: "graduates",
    },
    {
      number: 600,
      label: "impacted by our tech",
    },
  ];
  let width = window.screen.width;
  const techs = [
    {
      title: "Tech Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget elit in ipsum auctor tempor. Nullam vestibulum metus quis arcu pulvinar, non rutrum arcu tristique. Nullam commodo accumsan porttitor. Phasellus condimentum maximus arcu, a bibendum nulla lobortis at. Aenean maximus auctor dolor at sodales. Pellentesque id lectus velit. Pellentesque eu purus non magna egestas pretium. Nunc eget mi consequat, mollis leo efficitur, faucibus ipsum. Nullam efficitur consequat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      title: "Tech Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget elit in ipsum auctor tempor. Nullam vestibulum metus quis arcu pulvinar, non rutrum arcu tristique. Nullam commodo accumsan porttitor. Phasellus condimentum maximus arcu, a bibendum nulla lobortis at. Aenean maximus auctor dolor at sodales. Pellentesque id lectus velit. Pellentesque eu purus non magna egestas pretium. Nunc eget mi consequat, mollis leo efficitur, faucibus ipsum. Nullam efficitur consequat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      title: "Tech Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget elit in ipsum auctor tempor. Nullam vestibulum metus quis arcu pulvinar, non rutrum arcu tristique. Nullam commodo accumsan porttitor. Phasellus condimentum maximus arcu, a bibendum nulla lobortis at. Aenean maximus auctor dolor at sodales. Pellentesque id lectus velit. Pellentesque eu purus non magna egestas pretium. Nunc eget mi consequat, mollis leo efficitur, faucibus ipsum. Nullam efficitur consequat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      title: "Tech Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget elit in ipsum auctor tempor. Nullam vestibulum metus quis arcu pulvinar, non rutrum arcu tristique. Nullam commodo accumsan porttitor. Phasellus condimentum maximus arcu, a bibendum nulla lobortis at. Aenean maximus auctor dolor at sodales. Pellentesque id lectus velit. Pellentesque eu purus non magna egestas pretium. Nunc eget mi consequat, mollis leo efficitur, faucibus ipsum. Nullam efficitur consequat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      title: "Tech Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget elit in ipsum auctor tempor. Nullam vestibulum metus quis arcu pulvinar, non rutrum arcu tristique. Nullam commodo accumsan porttitor. Phasellus condimentum maximus arcu, a bibendum nulla lobortis at. Aenean maximus auctor dolor at sodales. Pellentesque id lectus velit. Pellentesque eu purus non magna egestas pretium. Nunc eget mi consequat, mollis leo efficitur, faucibus ipsum. Nullam efficitur consequat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
  ];
  return (
    <Layout>
      <CarouselSlider />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <Typography variant="h2">Hello World</Typography>
          </Modal>
        )}
      </AnimatePresence>

      <Section>
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => (modalOpen ? close() : open())}
        >
          Launch modal
        </motion.button> */}
        <SectionTitle> Impact Statistics</SectionTitle>
        <div className="responsive-column">
          <div>
            {stats.map((item, i) => {
              return (
                <ProgressStatistic
                  key={i}
                  percentage={item.percentage}
                  label={item.label}
                />
              );
            })}
          </div>
          <div className="cs-stats">
            {categoryStats.map((item, i) => {
              return (
                <CategoryStats
                  key={i}
                  number={item.number}
                  label={item.label}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </Section>

      {/* dont't remove */}
      <div className="video-i">
        <iframe
          className="play-video"
          src="https://www.youtube.com/embed/z4C5HVz_wu4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/* ... */}
      <Section>
        <SectionTitle>latest news</SectionTitle>
        <Typography center={true} variant="b1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at eros
          rutrum, tempus dui quis, vulputate nisi. Donec ut ex suscipit,
          venenatis neque at, pulvinar quam.{" "}
        </Typography>
        <div className="hs">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className=""></div>
      </Section>
      <Section>
        <SectionTitle>our tech</SectionTitle>
        <Typography center={true} variant="b1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at eros
          rutrum, tempus dui quis, vulputate nisi. Donec ut ex suscipit,
          venenatis neque at, pulvinar quam.{" "}
        </Typography>
        <br></br>
        <br></br>
        <div className="techs-w">
          {techs.map((item, i) => {
            return <TechCard key={i} />;
          })}
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
