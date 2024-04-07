import React, { useState, useEffect } from "react";
import "./pillers.scss";
import Layout from "../components/ChatBot/ChatBot";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Section from "../components/Section/Section";
import TechCard from "../components/TextCard/TechCard";
import { Card, Modal } from "antd";
import { Icons } from "../components/Icons";
import AIVideo from "../images/aihack/bgVideo.mp4";
const slugify = require("slugify");
// import { Helmet } from "react-helmet";
const GeneratePath = (path) => {
  const link = slugify(path, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
  return link;
};
const CodeTribe = ({ state = false, link, title, description }) => {
  return (
    <div className="codeTribe">
      <div className="codeTribe-bg">
        {state ? (
          <StaticImage
            className="ct-bg"
            src={"../images/backgrounds/Applications Closed.jpg"}
            alt="bg"
          />
        ) : (
          <StaticImage
            className="ct-bg"
            src={"../images/backgrounds/appsclosed.jpg"}
            alt="bg"
          />
        )}

        {/* <iframe
          title="bg"
          className="ct-bg"
          src="https://my.spline.design/interactivespherescopy-9c716a85bc147c41a41c8e55bf0dfd1e/"
          frameBorder="0"
        ></iframe> */}
      </div>
      <div className="codeTribe-details">
        {state && <Typography variant="s2">Applications Open</Typography>}
        <Typography variant="h3" color="dark">
          {title}
        </Typography>
        <Typography variant="b1" color="dark">
          {description}
        </Typography>
        {state ? null : (
          <Typography variant="b2">
            Please register with the chatbot to be notified when calls open.
          </Typography>
        )}
        {state ? (
          <Button color="dark" label="Apply Now" type="link" url={link} />
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
  const [projectData, setProjectData] = useState({});
  const [openProject, setOpenProject] = useState(false);
  // const icon = getImage(data.frontmatter.icon);
  // const background = getImage(data.frontmatter.featureImage);
  const sectionData = data.allMarkdownRemark.edges;
  const theTech = data.theTech.edges;
  const techStartupApplication = data.techStartupApplication.frontmatter;
  const techSkillsApplication = data.techSkillsApplication.frontmatter;
  const projects = data.projects.edges;
  const techSolutionsApplication = data.techSolutionsApplication.frontmatter;
  let width = typeof window !== "undefined" ? window.screen.width : 800;
  const resposiveWidth = 980;
  const url = location.pathname;
  const splitUrl = url.split("/");
  // const cleanSplit = splitUrl[2].replace("-", " ");
  const cleanSplit = GeneratePath(splitUrl[2]);
  console.log({ width });
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
      {/* <Helmet title={`mLab | ${cleanSplit}`} /> */}
      {sectionData.map((node, i) => {
        const title = cleanSplit;
        const background = getImage(node.node.frontmatter.featureImage);
        const icon = getImage(node.node.frontmatter.icon);
        if (GeneratePath(node.node.frontmatter.title) == title) {
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
              {cleanSplit === "tech-start-ups" && (
                <Section>
                  <Card>
                    <div className="apply-main">
                      <div className="apply-content">
                        <Typography variant="h6">
                          Build your product today with us
                        </Typography>
                        {width < 500 ? (
                          <Typography variant="h4">
                            Ready to take the leap? Register your startup now
                            and unlock the doors to endless possibilities!
                          </Typography>
                        ) : (
                          <Typography variant="h2">
                            Ready to take the leap? Register your startup now
                            and unlock the doors to endless possibilities!
                          </Typography>
                        )}

                        <div style={{ textAlign: "center" }}>
                          <a
                            href="https://forms.gle/NJNpY31VcUC1cwek9"
                            target="_blank"
                          >
                            <Button label={"Apply for Tech Solution"}></Button>
                          </a>
                        </div>
                      </div>
                      <div className="apply-image">
                        <img
                          src="https://images.pexels.com/photos/3861563/pexels-photo-3861563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                        />
                      </div>
                    </div>
                  </Card>
                </Section>
              )}
              {cleanSplit === "tech-ecosystems" &&
                cleanSplit === "tech-start-ups" && (
                  <Section>
                    <StaticImage
                      className="subPage-video"
                      src="../images/resources/ecosystem.jpg"
                      alt={"Ecosystem"}
                    />
                  </Section>
                )}
              {cleanSplit === "tech-ecosystems" && (
                <Section>
                  <StaticImage
                    className="subPage-video"
                    src="../images/resources/ecosystem.jpg"
                    alt={"Ecosystem"}
                  />
                </Section>
              )}
              {data.frontmatter.video &&
                cleanSplit !== "tech-ecosystems" &&
                data.frontmatter.video !== "null" && (
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

              {/* techStartupApplication */}
              {cleanSplit === "tech-start-ups" &&
                techStartupApplication.open && (
                  <CodeTribe
                    title={cleanSplit}
                    state={techStartupApplication.open}
                    description={techStartupApplication.description}
                    link={techStartupApplication.link}
                  />
                )}

              {/* techSkillsApplication */}
              {cleanSplit === "tech-skills" && techSkillsApplication.open && (
                <CodeTribe
                  title={"Application are Open"}
                  state={techSkillsApplication.open}
                  description={techSkillsApplication.description}
                  link={techSkillsApplication.link}
                />
              )}

              {/* techSolutionsApplication */}
              {cleanSplit === "tech-solutions" &&
                techSolutionsApplication.open && (
                  <CodeTribe
                    title={cleanSplit}
                    state={techSolutionsApplication.open}
                    description={techSolutionsApplication.description}
                    link={techSolutionsApplication.link}
                  />
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
              {/* AI Masup */}
              <Section>
                {cleanSplit == "tech-solutions" && (
                  <div className="pillers-hack">
                    <video
                      className="hack-bgVideo"
                      muted
                      autoPlay
                      loop
                      style={{ width: `100%` }}
                    >
                      <source src={AIVideo} type="video/mp4" />
                    </video>
                    <div className="hack-text">
                      <div>
                        {" "}
                        <Typography
                          style={{ fontFamily: "Segoe_Bold" }}
                          variant="h3"
                        >
                          Sustainable
                        </Typography>
                        <Typography
                          style={{ fontFamily: "Segoe_Bold" }}
                          variant="h3 "
                          gradient={true}
                        >
                          Artificial Intelligence
                        </Typography>
                        <Typography
                          style={{ fontFamily: "Segoe_Bold" }}
                          variant="h4"
                        >
                          themed webinars, hackathon and <br />
                          post-hack incubation
                        </Typography>
                      </div>

                      <Typography
                        style={{ fontFamily: "Segoe_Bold" }}
                        variant="h6"
                      >
                        Unleash Innovation, Transform Tomorrow
                      </Typography>

                      <div className="buttons">
                        <Link
                          to="/aimashup"
                          target="_blank"
                          className="registerbtn"
                        >
                          <Icons.Star className="star1" />
                          <Icons.Star className="star2" />
                          <Icons.Star className="star3" />
                          <Typography variant="button">View Event</Typography>
                        </Link>
                      </div>
                    </div>
                    <div className="hack-logo">
                      <StaticImage src="../images/aihack/newlogo.png" alt="" />
                      {/* <Logo /> */}
                    </div>
                  </div>
                )}
              </Section>
              {/* ... */}
              {cleanSplit == "tech-solutions" && (
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
              <Section>
                {projects.length > 0 && (
                  <SectionTitle>initiatives</SectionTitle>
                )}

                <div className="initiatives">
                  {projects.map((item) => {
                    const {
                      category,
                      description,
                      title,
                      link,
                      to,
                      cca,
                      from,
                      image,
                    } = item.node.frontmatter;
                    const coverImage = getImage(image);
                    const path = GeneratePath(title);
                    return (
                      <Card
                        hoverable
                        actions={[
                          <Button type="link" url={`/initiatives/${path}`}>
                            View More
                          </Button>,
                        ]}
                        cover={
                          <GatsbyImage
                            image={coverImage}
                            alt=""
                            style={{ height: 200, objectFit: "cover" }}
                          />
                        }
                      >
                        <Card.Meta title={title} description={cca} />
                      </Card>
                    );
                  })}
                </div>
              </Section>
            </div>
          );
        }
      })}
    </Layout>
  );
};

export default Pillers;

export const query = graphql`
  query WhatWeDo($title: String) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(wwdSections)/" } }
      sort: { fields: frontmatter___priority, order: ASC }
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
    projects: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: $title } }
        fileAbsolutePath: { regex: "/(projects)/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            title
            description
            to
            from
            cca
            category
            link
          }
        }
      }
    }
    techStartupApplication: markdownRemark(
      fileAbsolutePath: { regex: "/(tech-skills/index.md)/" }
    ) {
      frontmatter {
        description
        link
        open
      }
    }
    techSkillsApplication: markdownRemark(
      fileAbsolutePath: { regex: "/(tech-skills/index.md)/" }
    ) {
      frontmatter {
        description
        link
        open
      }
    }
    techSolutionsApplication: markdownRemark(
      fileAbsolutePath: { regex: "/(tech-solution/index.md)/" }
    ) {
      frontmatter {
        description
        link
        open
      }
    }
  }
`;
