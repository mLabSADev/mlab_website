import React from "react";
import PageContainer from "../components/page-container";
import { graphql } from "gatsby";
import "./style.scss";
import NewsEntry from "../components/news-entry";

export default function TaggedPosts({ data, pageContext }) {
  const { tag } = pageContext;
  return (
    <PageContainer>
      <div className="w-100 d-flex justify-content-start align-items-center bg-light mb-5 text-secondary pl-5">
        <h2 className="h3 font-weight-bold m-4 p-4">
          {tag ? `Articles Associated To: ${tag}` : "The Tag"}
        </h2>
      </div>
      {data.allMarkdownRemark.nodes &&
        data.allMarkdownRemark.nodes.map((entry) => (
          <NewsEntry
            key={entry.id}
            excerpt={entry.excerpt}
            {...entry.frontmatter}
          />
        ))}
    </PageContainer>
  );
}

const fun = () => {
  // export
  const query = graphql`
    query TagPostsByPath($tag: [String]) {
      allMarkdownRemark(filter: { frontmatter: { tags: { in: $tag } } }) {
        nodes {
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
  `;
};
