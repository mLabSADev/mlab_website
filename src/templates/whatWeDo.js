import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageContainer from "../components/page-container";
import Tab from "../components/tab";
import SegmentTitle from "../components/segment-title/index";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "./style.scss";

const WhatWeDo = ({ data }) => {
  const { stories, whatWeDo } = data;

  return (
    <PageContainer>
      <Tab
        title={whatWeDo.frontmatter.title}
        abstract={`What We Do - ${whatWeDo.frontmatter.title}`}
      />
      <div className="noClass">
        <Container>
          <Row>
            <Col>
              <h1>{whatWeDo.frontmatter.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: whatWeDo.html }}></p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="grayArea">
        <Container>
          <Row>
            <Col>
              <SegmentTitle title="Tech Stories"></SegmentTitle>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            {stories.edges.map((story) => {
              const image = story.node.frontmatter
                ? getImage(story.node.frontmatter.featureImage)
                : null;
              const options = {
                day: "numeric",
                month: "long",
                year: "numeric",
              };
              return (
                <Col key={story.node.id}>
                  <Container
                    style={{
                      background: "white",
                      marginBottom: 20,
                      padding: 20,
                    }}
                  >
                    <Row>
                      <Col
                        style={{ display: "flex", alignItems: "center" }}
                        md={3}
                      >
                        <div style={{ width: "100%" }}>
                          <GatsbyImage
                            alt={story.node.frontmatter.featureImage.name}
                            style={{ height: "100%" }}
                            image={image}
                          />
                        </div>
                      </Col>
                      <Col style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ margin: 0, paddingRight: 20 }}>
                          {story.node.frontmatter
                            ? story.node.frontmatter.name
                            : "Story Name"}
                        </h4>
                        <p style={{ margin: 0, color: "gray" }}>
                          {story.node.frontmatter
                            ? new Date(
                                story.node.frontmatter.date
                              ).toLocaleDateString("en-ZA", options)
                            : new Date().toLocaleDateString()}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3}></Col>
                      <Col>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: story.node.html,
                          }}
                        ></p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </PageContainer>
  );
};
export default WhatWeDo;

const fun = () => {
  // export
  const query = graphql`
    query WhatWeDoByPath($link: String!, $stories: String!) {
      whatWeDo: markdownRemark(frontmatter: { path: { eq: $link } }) {
        id
        html
        frontmatter {
          title
          link
          path
          featureImage {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP], width: 350)
            }
            name
          }
        }
      }
      stories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: $stories } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              name
              date
              featureImage {
                id
                childImageSharp {
                  gatsbyImageData(formats: [AUTO, WEBP])
                }
              }
            }
          }
        }
      }
    }
  `;
};
