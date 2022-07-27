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
import { graphql } from "gatsby";
import { AnimatePresence } from "framer-motion";
import { getImage } from "gatsby-plugin-image";
const IndexPage = ({ data }) => {
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
  const news = data.news.edges;
  const techs = data.theTech.edges;
  const banners = data.banners.edges;
  return (
    <Layout>
      <CarouselSlider data={banners} />
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
          {news.map((item, i) => {
            const image = getImage(item.node.frontmatter.thumb);
            return (
              <NewsCard
                image={image}
                excerpt={item.node.excerpt}
                title={item.node.frontmatter.title.replace("-", " ")}
                url={item.node.frontmatter.path}
              />
            );
          })}
        </div>
        <div className=""></div>
      </Section>
      <Section>
        <SectionTitle>our tech</SectionTitle>
        {/* <Typography center={true} variant="b1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at eros
          rutrum, tempus dui quis, vulputate nisi. Donec ut ex suscipit,
          venenatis neque at, pulvinar quam.{" "}
        </Typography> */}
        <br></br>
        <br></br>
        <div className="techs-w">
          {techs.map((item, i) => {
            const img = getImage(item.node.frontmatter.screenshot);
            const icon = getImage(item.node.frontmatter.icon);
            const title = item.node.frontmatter.appName;
            const description = item.node.frontmatter.description;
            return (
              <TechCard
                key={i}
                title={title}
                image={img}
                icon={icon}
                description={description}
                handleClick={open}
              />
            );
          })}
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    news: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(news)/" } }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            tags
            path
            title
            date
            author
            thumb {
              childImageSharp {
                id
                gatsbyImageData(layout: FULL_WIDTH, quality: 100, width: 300)
              }
            }
          }
          excerpt
        }
      }
    }
    banners: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(banners)/" } }
    ) {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            title
            registration
            thumb {
              childImageSharp {
                gatsbyImageData(width: 700,  quality: 100,)
              }
            }
          }
        }
      }
    }
    theTech: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(theTech)/" } }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            appName
            description
            screenshot {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 100, placeholder: BLURRED)
                id
              }
            }
            icon {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 100, placeholder: BLURRED)
                id
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
