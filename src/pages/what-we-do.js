import React from "react";
import "./what-we-do.scss";
import { graphql } from "gatsby";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
const WhatWeDo = ({ data }) => {
  const sectionData = data.allMarkdownRemark.edges;
  console.log(sectionData);
  return (
    <Layout>
      <PageHeader title={"WHAT WE DO"} />
      {sectionData.map((item, i) => {
        const title = item.node.frontmatter.title;
        const excerpt = item.node.excerpt;
        const body = item.node.rawMarkdownBody;
        return (
          <div className="wwd-section">
            <div className="wwd-details">
              <Typography variant="h4">{title}</Typography>
              <Typography variant="b1">{excerpt}</Typography>
              <span className="b1" dangerouslySetInnerHTML={{ __html: body }} />
              <Button label="read more"></Button>
            </div>
            <div className="wwd-image"></div>
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(whatWeDo)/" } }) {
      edges {
        node {
          id
          excerpt
          rawMarkdownBody
          frontmatter {
            title
            path
            link
          }
        }
      }
    }
  }
`;
