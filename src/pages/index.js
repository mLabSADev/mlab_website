import React, { useState } from "react";
import "./main.scss";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import CarouselSlider from "../components/Carousel/Carousel";
import ProgressStatistic from "../components/ProgressStatistic/ProgressStatistic";
import Section from "../components/Section/Section";
import CategoryStats from "../components/CategoryStats/CategoryStats";
import NewsCard from "../components/NewsCard/NewsCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Typography from "../components/Typography/Typography";
import TechCard from "../components/TextCard/TechCard";
import Modal from "../components/Modal/Modal";
import { SignupForm } from "./contact";
import { AnimatePresence } from "framer-motion";
const IndexPage = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const news = data.news.edges;
  const techs = data.theTech.edges;
  const banners = data.banners.edges;
  const impactBarStats = data.impactBarStats.edges;
  const stats = data.stats.edges;
  const newsHeader = data.newsHeader.frontmatter.position;
  return (
    <Layout>
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
      <CarouselSlider data={banners} />

      <Section>
        <SectionTitle> Impact Statistics</SectionTitle>
        <div className="responsive-column">
          <div>
            {impactBarStats.map((item, i) => {
              return (
                <ProgressStatistic
                  key={i}
                  percentage={item.node.frontmatter.percentage}
                  label={item.node.frontmatter.label}
                />
              );
            })}
          </div>
          <div className="cs-stats">
            {stats.map((item, i) => {
              const img = getImage(item.node.frontmatter.icon);

              return (
                <CategoryStats
                  key={i}
                  number={item.node.frontmatter.number}
                  label={item.node.frontmatter.label}
                  image={img}
                />
              );
            })}
          </div>
        </div>
      </Section>

      {/* dont't remove */}
      <div className="video-i">
        <iframereact-ssg-netlify-forms
          className="play-video"
          src="https://www.youtube.com/embed/z4C5HVz_wu4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframereact-ssg-netlify-forms>
      </div>
      {/* ... */}
      <Section>
        <SectionTitle>latest news</SectionTitle>
        <Typography center variant="b1">
          {newsHeader}
        </Typography>
        <div className="hs">
          {news.map((item, i) => {
            const image = getImage(item.node.frontmatter.thumb);
            return (
              <NewsCard
                key={i}
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
      <div className="index-form">
        <SignupForm main={false}></SignupForm>
      </div>
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
                gatsbyImageData(quality: 100, width: 1000)
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
                gatsbyImageData(width: 1100, quality: 100)
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
                gatsbyImageData(width: 1000, quality: 100, placeholder: BLURRED)
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
    impactBarStats: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(impactBarStats)/" } }
    ) {
      edges {
        node {
          frontmatter {
            label
            percentage
          }
        }
      }
    }
    stats: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(stats)/" } }
    ) {
      edges {
        node {
          frontmatter {
            label
            number
            icon {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
    newsHeader: markdownRemark(
      fileAbsolutePath: { regex: "/(seo-headers/news)/" }
    ) {
      frontmatter {
        position
      }
    }
  }
`;
