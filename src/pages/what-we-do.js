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
import TechCard from "../components/TextCard/TechCard";

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
const SubPage = ({ title, data, theTech = [] }) => {
  const icon = getImage(data.node.frontmatter.icon);
  const background = getImage(data.node.frontmatter.featureImage);

  let width = typeof window !== "undefined" ? window.screen.width : 800;
  return (
    <div className="subPage">
      <div className="subPage-header">
        <GatsbyImage className="image-sp" image={background} alt={title} />
        <div className="subPage-content">
          <div className="sp-c-details">
            <Typography variant={width > 980 ? "h4" : "h6"} color="light">
              {title.toUpperCase()}
            </Typography>
            <Typography variant={width > 980 ? "h2" : "h4"} color="light">
              {data.node.frontmatter.shortText}
            </Typography>
          </div>
          <div className="sp-c-icon">
            <GatsbyImage objectFit="contain" image={icon} alt="" />
          </div>
        </div>
      </div>

      {/* <Section>
        <iframe
          title={title}
          className="subPage-video"
          src={data.node.frontmatter.video}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section> */}
      <Section>
        <div className="reading">
          <div></div>
          <div
            className="r-content"
            dangerouslySetInnerHTML={{ __html: data.node.html }}
          />
          <div></div>
        </div>
      </Section>
      <CodeTribe />
      {title == "Tech Solutions" && (
        <Section>
          <SectionTitle>our tech</SectionTitle>
          <br></br>
          <br></br>
          <div className="techs-w">
            {theTech.map((item, i) => {
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
                  // handleClick={open}
                />
              );
            })}
          </div>
        </Section>
      )}
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
            <SubPage
              theTech={data.theTech.edges}
              title={modalOpen.title}
              data={activeSection}
            />
          </Modal>
        )}
      </AnimatePresence>

      <PageHeader title={"WHAT WE DO"} index={2} />
      <br />
      <br />
      <br />
      <Section>
        <Typography variant="s1">
          At the heart of mLab’s work is the belief that when our youth are
          empowered with the right skills to innovate and create solutions, they
          unlock opportunities for optimising existing, or establishing new
          businesses, that will drive our economy forward.{" "}
        </Typography>
        <br />

        <Typography variant="b2">
          We do this by offering programmes, projects and services under the
          following pillars;{" "}
        </Typography>
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
                <Typography color="light" variant="h4">
                  {title.toUpperCase()}
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
                  label="MORE INFO / APPLY"
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
