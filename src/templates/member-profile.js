import React from "react";
import PageContainer from "../components/page-container";
import { graphql } from "gatsby";
import "./style.scss";
import GatsbyImage from "gatsby-image";
import Tab from "../components/tab";

export default function MemberProfile({ data }) {
  return (
    <PageContainer>
      <Tab
        title={data.markdownRemark.frontmatter.name}
        abstract={`mlab news - ${data.markdownRemark.excerpt}`}
      />
      <div className="member-container text-dark bg-light shadow">
        {data ? (
          <>
            <div className="member">
              <div className="inner">
                <div className="back-button">
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      if (typeof window.history !== "undefined") {
                        window.history.back();
                      } else {
                        if (typeof history !== "undefined") {
                          history.back();
                        }
                      }
                    }}
                  >
                    Back
                  </button>
                </div>
                <div className="title-container">
                  <GatsbyImage
                    className="rounded-circle"
                    style={{ width: "25vh", height: "25vh" }}
                    fixed={
                      data.markdownRemark.frontmatter.profilePicture &&
                      data.markdownRemark.frontmatter.profilePicture
                        .childImageSharp.fixed
                    }
                  />
                  <h3 className=" text-center font-weight-bold mt-2 mb-2">
                    {data.markdownRemark.frontmatter.name}
                  </h3>
                  <h5 className="mt-0 text-secondary text-center">
                    {data.markdownRemark.frontmatter.position}
                  </h5>
                </div>
                <p className="text text-center text-success mt-2">
                  Part of mLab Southern Africa since{" "}
                  <strong>{data.markdownRemark.frontmatter.since}</strong>
                </p>
              </div>
            </div>
            <div className="details">
              <div
                style={{ padding: 16 }}
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              ></div>
              <div className="d-flex flex-row ml-4 mb-4">
                {data.markdownRemark.frontmatter.tags.map((tag, index) => (
                  <h6
                    style={{ backgroundColor: "#90dc08", color: "white" }}
                    className="badge-pill m-1 p-2"
                    key={tag + "-" + index}
                  >
                    {tag}
                  </h6>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div>nothing found</div>
        )}
      </div>
    </PageContainer>
  );
}
const fun = () => {
  // export
  const query = graphql`
    query MemberByPath($member: String!) {
      markdownRemark(frontmatter: { path: { eq: $member } }) {
        id
        frontmatter {
          path
          name
          position
          department
          since
          tags
          profilePicture {
            childImageSharp {
              id
              gatsbyImageData(formats: [AUTO, WEBP], width: 350)
            }
          }
        }
        html
      }
    }
  `;
};
