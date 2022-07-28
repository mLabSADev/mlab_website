import React, { useState } from "react";
import "./what-we-do.scss";
import { graphql } from "gatsby";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
import Modal from "../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
const CodeTribe = ({ state = true }) => {
  return (
    <div className="codeTribe">
      <div className="codeTribe-bg">
        <iframe
          className="ct-bg"
          src="https://my.spline.design/interactivespherescopy-9c716a85bc147c41a41c8e55bf0dfd1e/"
          frameborder="0"
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
          CodeTribe is a dedicated programme for developing the next generation
          of software developers. While established startups are welcome to have
          members participate in their own time and at own expense, they do not
          qualify for bursaries as full time students. Startups and their staff
          or members are advised to apply for incubation and acceleration
          support through Maxum Business Incubator and mLab.
        </Typography>
        {state ? (
          <Button
            color="light"
            label="Apply Now"
            type="link"
            url="https://www.w3schools.com/"
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
  const sectionData = data.allMarkdownRemark.edges;
  const close = () => setModalOpen({ state: false, title: "" });
  const open = (section) => setModalOpen({ state: true, title: section });
  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen.state && (
          <Modal modalOpen={modalOpen.state} handleClose={close}>
            <SubPage title={modalOpen.title} data={activeSection} />
          </Modal>
        )}
      </AnimatePresence>
      <PageHeader title={"WHAT WE DO"} />
      {sectionData.map((item, i) => {
        const title = item.node.frontmatter.title;
        const excerpt = item.node.excerpt;
        const body = item.node.rawMarkdownBody;
        const image = getImage(item.node.frontmatter.thumb);
        return (
          <div className="wwd-section">
            <div className="wwd-details">
              <Typography variant="h4">{title}</Typography>
              <Typography variant="b1">{excerpt}</Typography>
              <span className="b1" dangerouslySetInnerHTML={{ __html: body }} />
              <Button
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(wwdSections)/" } }
      limit: 5
    ) {
      edges {
        node {
          html
          rawMarkdownBody
          frontmatter {
            path
            title
            link
            video
            thumb {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR, width: 500)
              }
            }
          }
        }
      }
    }
  }
`;
