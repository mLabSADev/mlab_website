import React from "react";
import "./news.scss";
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Typography from "../components/Typography/Typography";
import PageHeader from "../components/PageHeader/PageHeader";
import NewsCard from "../components/NewsCard/NewsCard";
import Pagination from "@mui/material/Pagination";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Tag from "../components/Tag/Tag";
const News = ({ data, pageContext, numberOfAllPages = [] }) => {
  const { numberOfPages } = pageContext;
  for (let i = 0; i < numberOfPages; i++) {
    numberOfAllPages.push(i + 1);
  }
  const news = data.allMarkdownRemark.edges;
  let tags = [];
  news.forEach((element) => {
    let tag = element.node.frontmatter.tags;
    tags = tags.concat(tag);
  });
  //   onClick={() => (modalOpen ? close() : open())}

  return (
    <Layout>
      <PageHeader title="news" index={4} />
      <Section>
        {/* <SectionTitle>Articles</SectionTitle> */}
        <div className="news-content">
          <div className="stories-n">
            <Typography variant="h3">Articles</Typography>
            <div className="stories-news">
              {data.allMarkdownRemark.edges.map((entry, i) => {
                const img = getImage(entry.node.frontmatter.featureImage);
                const title = entry.node.frontmatter.title;
                const excerpt = entry.node.excerpt;
                const path = entry.node.frontmatter.path;
                if (entry.node.frontmatter.path) {
                  return (
                    <NewsCard
                      key={i}
                      image={img}
                      title={title}
                      excerpt={excerpt}
                      url={path}
                    />
                  );
                } else return null;
              })}
            </div>
          </div>

          <div className="categories-news">
            <Typography variant="h6">Tags</Typography>
            <div className="tags">
              {tags.map((item, i) => {
                return <Tag key={i} label={item} url={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="pagination-news">
          {numberOfAllPages.map((number, i) => {
            if (number === 1) number = "";
            const page = "/news";
            var url = typeof window !== "undefined" && window.location.pathname;
            var current = number === "" ? page : `/news/${number}`;
            if (url === current) {
              return (
                <Pagination
                  page={number === "" ? 1 : number}
                  showFirstButton
                  showLastButton
                  variant="outlined"
                  color="secondary"
                  count={numberOfAllPages.length}
                  onChange={(elements, n) => {
                    if (typeof window !== "undefined") {
                      window.location.href = n === 1 ? "/news" : `/news/${n}`;
                    } else {
                      console.log("Server cannot execute");
                    }
                  }}
                />
              );
            }
            return true;
          })}
        </div>
      </Section>
    </Layout>
  );
};
export const query = graphql`
  query NewsQuery($title: String! = "News", $skip: Int, $limit: Int) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        abstract
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(news)/" }
        frontmatter: { path: { ne: null } }
      }
      sort: { fields: [frontmatter___timeStamp], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            timeStamp(formatString: "")
            title
            path
            abstract
            tags
            featureImage {
              name
              childImageSharp {
                id
                gatsbyImageData(formats: [AUTO, WEBP], width: 350)
              }
            }
            attachments {
              name
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
export default News;
