import * as React from "react";
import "./main.scss";
import Layout from "../components/Layout/Layout";
import CarouselSlider from "../components/Carousel/Carousel";
import ProgressStatistic from "../components/ProgressStatistic/ProgressStatistic";
import Section from "../components/Section/Section";
import CategoryStats from "../components/CategoryStats/CategoryStats";
import NewsCard from "../components/NewsCard/NewsCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
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
  return (
    <Layout>
      <CarouselSlider />
      <Section>
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
          <div>
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
      <Section>
        <SectionTitle text="Hello world" />
        <NewsCard />
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
    </Layout>
  );
};

export default IndexPage;
