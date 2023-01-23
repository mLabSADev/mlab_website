import React, { useState, useEffect } from "react";
import "./pillers.scss";
import Layout from "../components/Layout/Layout";
import { StaticQuery, graphql } from "gatsby";
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
import { WhatWeDoCard } from "./who-we-are";
const CodeTribe = ({ state = false, link }) => {
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
          Tech StartUp
        </Typography>
        <Typography variant="b2" color="light">
          Calls for applications are as below. If currently closed, please
          follow us on social media to find out when calls are open. You can
          also register onto our database to be notified when calls are open and
          to be kept informed of other exciting opportunities:
        </Typography>
        {state ? (
          <Button color="light" label="Apply Now" type="link" url={link} />
        ) : null}
      </div>
    </div>
  );
};

const Pillers = ({ data, location }) => {
  const [applicationState, setApplicationState] = useState({
    state: false,
    link: "",
  });
  // const icon = getImage(data.frontmatter.icon);
  // const background = getImage(data.frontmatter.featureImage);
  const sectionData = data.allMarkdownRemark.edges;
  const theTech = data.theTech.edges;
  const application = data.applications.edges;
  let width = typeof window !== "undefined" ? window.screen.width : 800;
  const resposiveWidth = 980;
  const url = location.pathname;
  const splitUrl = url.split("/");
  const cleanSplit = splitUrl[2].replace("-", " ");

  useEffect(() => {
    application.forEach((element) => {
      const open = element.node.frontmatter.open;
      const link = element.node.frontmatter.link;
      if (open != null) {
        setApplicationState({ state: open, link: link });
      }
    });
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
      {sectionData.map((node, i) => {
        const title = cleanSplit;
        const background = getImage(node.node.frontmatter.featureImage);
        const icon = getImage(node.node.frontmatter.icon);
        if (node.node.frontmatter.title == title) {
          const data = node.node;
          return (
            <div className="subPage" key={i}>
              <div className="subPage-header">
                <GatsbyImage
                  className="image-sp"
                  image={background}
                  alt={title}
                />
                <div className="subPage-content">
                  <div className="sp-c-icon">
                    <GatsbyImage objectFit="contain" image={icon} alt="" />
                  </div>
                  <div className="sp-c-details">
                    <Typography
                      variant="s1"
                      color="light"
                      center={width < resposiveWidth ? true : false}
                    >
                      {data.frontmatter.title.toUpperCase()}
                    </Typography>
                    <Typography
                      variant={width < resposiveWidth ? "h4" : "h2"}
                      color="light"
                      center={width < resposiveWidth ? true : false}
                    >
                      {data.frontmatter.shortText}
                    </Typography>
                    <Button
                      color="light"
                      label="Contact Us for more info"
                      type="link"
                      url="/contact"
                    />
                  </div>
                </div>
              </div>
              {data.frontmatter.video && (
                <Section>
                  <iframe
                    title={title}
                    className="subPage-video"
                    src={data.frontmatter.video}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Section>
              )}

              <Section>
                <div className="reading">
                  <div></div>
                  <div
                    className="r-content"
                    dangerouslySetInnerHTML={{ __html: data.html }}
                  />
                  <div></div>
                </div>
              </Section>
              {cleanSplit == "Tech Solutions" && (
                <CodeTribe
                  state={applicationState.state}
                  link={applicationState.link}
                />
              )}

              {cleanSplit == "Tech Solutions" && (
                <Section>
                  <SectionTitle>our tech</SectionTitle>
                  <br></br>
                  <br></br>
                  <div className="techs-w">
                    {theTech.map((item, i) => {
                      console.log(item.node);
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
        }
      })}
    </Layout>
  );
};

export default Pillers;

export const query = graphql`
  query WhatWeDo {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(wwdSections)/" } }
      sort: {fields: frontmatter___priority, order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
            shortText
            link
            video
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  quality: 100
                  width: 1080
                )
              }
            }
            icon {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  quality: 100
                  width: 1080
                )
              }
            }
          }
          html
          rawMarkdownBody
          excerpt
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

    applications: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(tech-solutions)/" } }
    ) {
      edges {
        node {
          frontmatter {
            open
            link
          }
        }
      }
    }
  }
`;
