import React, { useState, useEffect } from "react";
import "./what-we-do.scss";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import PageHeader from "../components/PageHeader/PageHeader";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Section from "../components/Section/Section";
import CategoryStats from "../components/CategoryStats/CategoryStats";
import ProgressStatistic from "../components/ProgressStatistic/ProgressStatistic";
import Modal from "../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import TechCard from "../components/TextCard/TechCard";
import Pillers from "./pillers";
import { WhatWeDoCard } from "./who-we-are";

const WhatWeDo = ({ data, location }) => {
  const [modalOpen, setModalOpen] = useState({ title: "", state: false });
  const [activeSection, setActiveSection] = useState({});
  const [isMouseOver, setMouseOver] = useState(false);
  const sectionData = data.wwdSections.edges;
  const close = () => setModalOpen({ state: false, title: "" });
  const open = (section) => setModalOpen({ state: true, title: section });
  const impactBarStats = data.impactBarStats.edges;
  const stats = data.stats.edges;

  // useEffect(() => {
  //   setTimeout(() => {
  //     const scrollElement = document.getElementsByClassName(
  //       "progress-stat-wrappr"
  //     )[0];
  //     scrollElement.addEventListener(
  //       "mouseleave",
  //       (event) => {
  //         setMouseOver(false);
  //       },
  //       false
  //     );
  //     scrollElement.addEventListener(
  //       "mouseover",
  //       (event) => {
  //         setMouseOver(true);
  //         scrollElement.addEventListener("wheel", (evt) => {
  //           // The magic happens here.
  //           scrollElement.scrollLeft += evt.deltaY;
  //         });
  //       },
  //       false
  //     );
  //   }, 1000);
  // }, []);
  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {/* {modalOpen.state && (
          <Modal modalOpen={modalOpen.state} handleClose={close}>
            <SubPage
              theTech={data.theTech.edges}
              title={modalOpen.title}
              data={activeSection}
            />
          </Modal>
        )} */}
      </AnimatePresence>

      <PageHeader title={"WHAT WE DO"} index={2} />
      <br />
      <br />
      <br />

      <Section>
        <SectionTitle>we believe in an empowered youth</SectionTitle>
        <Typography center variant="b1">
          At the heart of mLab’s work is the belief that when our youth are
          empowered with the right skills to innovate and create solutions, they
          unlock opportunities for optimising existing, or establishing new
          businesses, that will drive our economy forward.{" "}
        </Typography>
        <br />

        <Typography center variant="b2">
          We do this by offering programmes, projects and services under the
          following pillars
        </Typography>
        <br />
        <br />
        <div className="main-wwd-c">
          {data.whatWeDo.edges.map((card, i) => {
            const img = getImage(card.node.frontmatter.featureImage);
            const title = card.node.frontmatter.title;
            const noSpaces = title.replaceAll(" ", "-")
            return (
              <WhatWeDoCard
                title={title}
                excerpt={card.node.frontmatter.excerpt}
                description={card.node.rawMarkdownBody}
                image={img}
                url={`/what-we-do/${noSpaces}`}
              />
            );
          })}
        </div>
      </Section>
      <Section>
        <SectionTitle>Our Impact</SectionTitle>
        <div className="responsive-column">
          <div className="progress-stat-wrappr">
            {impactBarStats.map((item, i) => {
              const image = getImage(item.node.frontmatter.icon);
              return (
                <ProgressStatistic
                  key={i}
                  label={item.node.frontmatter.label}
                  description={item.node.frontmatter.description}
                  icon={image}
                />
              );
            })}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default WhatWeDo;

export const query = graphql`
  query WhatWeDOQuery($title: String! = "What We Do") {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        abstract
        name
        position
      }
    }
    wwdSections: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(wwdSections)/" } }
    ) {
      edges {
        node {
          html
          rawMarkdownBody
          excerpt
          id
          frontmatter {
            title
            summary
            shortText
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO
                  placeholder: BLURRED
                  quality: 100
                )
              }
            }
            icon {
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO
                  placeholder: BLURRED
                  quality: 100
                )
              }
            }
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
                gatsbyImageData(width: 1920, quality: 100)
              }
            }
          }
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

    theTech: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(theTech)/" } }
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
    impactBarStats: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(impactBarStats)/" } }
    ) {
      edges {
        node {
          frontmatter {
            label
            percentage
            description
            icon {
              childImageSharp {
                gatsbyImageData(
                  quality: 10
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
  }
`;
