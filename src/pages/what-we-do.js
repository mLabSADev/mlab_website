import React, { useState, useEffect } from "react";
import "./what-we-do.scss";
import Layout from "../components/ChatBot/ChatBot";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Typography from "../components/Typography/Typography";
import PageHeader from "../components/PageHeader/PageHeader";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Section from "../components/Section/Section";
import ProgressStatistic from "../components/ProgressStatistic/ProgressStatistic";
import { AnimatePresence } from "framer-motion";
import { WhatWeDoCard } from "./who-we-are";
// import { Helmet } from "react-helmet";

const WhatWeDo = ({ data, location }) => {
  const impactBarStats = data.impactBarStats.edges;

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
  useEffect(() => {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3238112, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);
  return (
    <Layout>
      {/* <Helmet title={'mLab | What we do'} /> */}
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
            const noSpaces = title.replaceAll(" ", "-");
            console.log(title);
            return (
              <WhatWeDoCard
                key={i}
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
      sort: { fields: frontmatter___priority, order: ASC }
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
