import React from "react";
import PageContainer from "../components/page-container";
import { graphql } from "gatsby";
import "./style.scss";
import NewsEntry from "../components/news-entry";

export default function AuthorPosts({ data, pageContext }) {
  const { author } = pageContext;

  return (
    <PageContainer>
      <div className="w-100 d-flex  justify-content-start align-items-center bg-light mb-5 text-secondary pl-5">
        <h2 className="h3 font-weight-bold m-4 p-4">
          {author ? `Articles By: ${author}` : "The Author"}
        </h2>
      </div>
      {data.allMarkdownRemark.edges &&
        data.allMarkdownRemark.edges.map((entry) => (
          <NewsEntry
            key={entry.node.id}
            excerpt={entry.node.excerpt}
            {...entry.node.frontmatter}
          />
        ))}
    </PageContainer>
  );
}
const fun = () => {
  // export
  const query = graphql`
    query AuthorPostsByPath($author: String!) {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(news)/" }
          frontmatter: { author: { eq: $author } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              author
              date
              title
              path
              abstract
              tags
              featureImage {
                childImageSharp {
                  id
                  gatsbyImageData(formats: [AUTO, WEBP], width: 350)
                }
              }
              attachments {
                childImageSharp {
                  id
                  gatsbyImageData(formats: [AUTO, WEBP], width: 350)
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `;
};
