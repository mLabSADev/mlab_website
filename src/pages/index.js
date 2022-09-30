import React, { useState } from "react";
import "./main.scss";
import Layout, { ChatForm } from "../components/Layout/Layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import CarouselSlider from "../components/Carousel/Carousel";
import Section from "../components/Section/Section";
import NewsCard from "../components/NewsCard/NewsCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Typography from "../components/Typography/Typography";
import TechCard from "../components/TextCard/TechCard";
import Modal from "../components/Modal/Modal";
import { SignupForm } from "./contact";
import { AnimatePresence } from "framer-motion";
import moment from "moment";
import { WhatWeDoCard } from "./who-we-are";
const IndexPage = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const news = data.news.edges;

  const banners = data.banners.edges;
  // const impactBarStats = data.impactBarStats.edges;
  // const stats = data.stats.edges;
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
        <SectionTitle>what we do</SectionTitle>
        <div className="main-wwd-c">
          {data.whatWeDo.edges.map((card, i) => {
            const img = getImage(card.node.frontmatter.featureImage);
            return (
              <WhatWeDoCard
                title={card.node.frontmatter.title}
                excerpt={card.node.frontmatter.excerpt}
                description={card.node.rawMarkdownBody}
                image={img}
              />
            );
          })}
        </div>
      </Section>
      {/* dont't remove */}
      <div className="video-i">
        <iframe
          className="play-video"
          src="https://www.youtube.com/embed/z4C5HVz_wu4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* ... */}
      <Section>
        <SectionTitle>latest news</SectionTitle>
        <Typography center variant="b1">
          {newsHeader}
        </Typography>
        <div className="hs">
          {news.map((item, i) => {
            const image = getImage(item.node.frontmatter.featureImage);
            const title = item.node.frontmatter.title;
            const lowerCase = title;
            const remove_invalid_1 = lowerCase.replaceAll(":", "");
            const remove_invalid_2 = remove_invalid_1.replaceAll("|", "");
            const remove_invalid_3 = remove_invalid_2.replaceAll("#", "");
            const remove_invalid_4 = remove_invalid_3.replaceAll("&", "");
            const remove_invalid_5 = remove_invalid_4.replaceAll('"', "");
            const remove_invalid_6 = remove_invalid_5.replaceAll('"', "");
            const _path = remove_invalid_6.replaceAll(" ", "-");
            return (
              <NewsCard
                date={moment(item.node.frontmatter.timeStamp).format(
                  "DD MMMM, YYYY"
                )}
                key={i}
                image={image}
                excerpt={item.node.excerpt}
                title={item.node.frontmatter.title.replace("-", " ")}
                url={`/news/${_path}`}
              />
            );
          })}
        </div>
        <div className=""></div>
      </Section>

      <div className="index-form">
        <SignupForm main={false}></SignupForm>
        <ChatForm />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    news: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(news)/" }
        frontmatter: { title: { ne: "News" } }
      }
      sort: { fields: [frontmatter___timeStamp], order: DESC }
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
            featureImage {
              childImageSharp {
                id
                gatsbyImageData(quality: 100, width: 1920)
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
            image {
              childImageSharp {
                gatsbyImageData(width: 1920, quality: 100)
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
                gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
                id
              }
            }
            icon {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: BLURRED)
                id
              }
            }
          }
          excerpt
        }
      }
    }
    whatWeDo: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(whatWeDo)/" } }
    ) {
      edges {
        node {
          id
          rawMarkdownBody
          frontmatter {
            title
            path
            excerpt

            featureImage {
              name
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP], width: 350)
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
