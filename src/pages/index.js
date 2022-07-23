import * as React from "react";
import "./main.scss";
import Layout from "../components/Layout/Layout";
import CarouselSlider from "../components/Carousel/Carousel";
import ProgressStatistic from "../components/ProgressStatistic/ProgressStatistic";
import Section from "../components/Section/Section";
import CategoryStats from "../components/CategoryStats/CategoryStats";
import NewsCard from "../components/NewsCard/NewsCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Typography from "../components/Typography/Typography";
const IndexPage = () => {
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
  return (
    <Layout>
      <CarouselSlider />
      <Section>
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
      </Section>
    </Layout>
  );
};

export default IndexPage;
