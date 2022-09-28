import React, { useState } from "react";
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
const CodeTribe = ({ state = true }) => {
  return (
    <div className="codeTribe">
      <div className="codeTribe-bg">
        <iframe
          title="bg"
          className="ct-bg"
          src="https://my.spline.design/interactivespherescopy-9c716a85bc147c41a41c8e55bf0dfd1e/"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="codeTribe-details">
        {state ? (
          <Typography variant="h3" color="light">
            Applications Open
          </Typography>
        ) : (
          <Typography variant="h3" color="light">
            Applications Closed
          </Typography>
        )}
        <Typography variant="h6" color="light">
          CodeTribe
        </Typography>
        <Typography variant="b2" color="light">
          Calls for applications are as below. If currently closed, please
          follow us on social media to find out when calls are open. You can
          also register onto our database to be notified when calls are open and
          to be kept informed of other exciting opportunities:
        </Typography>
        {state ? (
          <Button
            color="light"
            label="Apply Now"
            type="link"
            url="http://codetribe.co.za/"
          />
        ) : null}
      </div>
    </div>
  );
};
const SubPage = ({ title, data }) => {
  console.log(data);
  return (
    <div className="subPage">
      <div className="subPage-header">
        <StaticImage
          className="image-sp"
          src="../images/backgrounds/pexels-eberhard-grossgasteiger-1612461.jpg"
          alt=""
        />
        <div className="subPage-content">
          <Typography variant="h3" color="light" center>
            {title}
          </Typography>
          <Typography variant="b2" center color="light">
            {data.node.rawMarkdownBody}
          </Typography>
        </div>
      </div>
      <Section>
        <iframe
          title={title}
          className="subPage-video"
          src={data.node.frontmatter.video}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>

      <CodeTribe />
    </div>
  );
};
const WhatWeDo = ({ data }) => {
  const [modalOpen, setModalOpen] = useState({ title: "", state: false });
  const [activeSection, setActiveSection] = useState({});
  const sectionData = data.wwdSections.edges;
  const close = () => setModalOpen({ state: false, title: "" });
  const open = (section) => setModalOpen({ state: true, title: section });
  const impactBarStats = data.impactBarStats.edges;
  const stats = data.stats.edges;
  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen.state && (
          <Modal modalOpen={modalOpen.state} handleClose={close}>
            <SubPage title={modalOpen.title} data={activeSection} />
          </Modal>
        )}
      </AnimatePresence>

      <PageHeader title={"WHAT WE DO"} index={2} />

      <Section>
        <SectionTitle>Our Impact</SectionTitle>
        <div className="responsive-column">
          <div className="progress-stat-wrappr">
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
        </div>
      </Section>
      <div className="wwd-secton-wrapper">
        {sectionData.map((item, i) => {
          const title = item.node.frontmatter.title;
          const excerpt = item.node.excerpt;
          const body = item.node.rawMarkdownBody;
          const image = getImage(item.node.frontmatter.featureImage);
          return (
            <div className="wwd-section">
              <div className="wwd-details">
                <Typography color="light" variant="h2">
                  {title}
                </Typography>
                <Typography color="light" variant="b1">
                  {excerpt}
                </Typography>
                <Button
                  color="light"
                  type="button"
                  onClick={async () => {
                    setActiveSection(item);
                    open(title);
                  }}
                  label="read more"
                ></Button>
              </div>
              <GatsbyImage
                image={image}
                alt="title"
                className="wwd-image"
              ></GatsbyImage>
            </div>
          );
        })}
      </div>
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
    impactBarStats: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(impactBarStats)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            label
            percentage
          }
          excerpt
          rawMarkdownBody
          html
        }
      }
    }
  }
`;
