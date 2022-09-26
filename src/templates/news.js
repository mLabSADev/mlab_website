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
import { Link } from "gatsby";
import Tag from "../components/Tag/Tag";
import moment from "moment";
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

  return (
    <Layout>
      <PageHeader title="news" index={4} />
      <Section>
        {/* <SectionTitle>Articles</SectionTitle> */}
        <div className="news-content">
          <div className="stories-n">
            <div className="article-title">
              <Typography variant="h3">Articles</Typography>
            </div>

            <div className="stories-news">
              {data.allMarkdownRemark.edges.map((entry, i) => {
                const img = getImage(entry.node.frontmatter.featureImage);
                const title = entry.node.frontmatter.title;
                const excerpt = entry.node.excerpt;
                const lowerCase = title.toLowerCase();
                const remove_invalid_1 = lowerCase.replaceAll(":", "");
                const remove_invalid_2 = remove_invalid_1.replaceAll("|", "");
                const remove_invalid_3 = remove_invalid_2.replaceAll("#", "");
                const remove_invalid_4 = remove_invalid_3.replaceAll("&", "");
                const _path = remove_invalid_4.replaceAll(" ", "-");
                const date = entry.node.frontmatter.timeStamp;
                if (entry.node.frontmatter.path) {
                  return (
                    <NewsCard
                      date={moment(date).format("DD MMMM, YYYY")}
                      key={i}
                      image={img}
                      title={title}
                      excerpt={excerpt}
                      url={`/news/${_path}`}
                    />
                  );
                } else return null;
              })}
            </div>
          </div>

          <div className="categories-news">
            <div className="tag-tittle">
              <Typography variant="h5">Tags</Typography>
            </div>

            <div className="tags">
              {tags.length == 0 && (
                <div className="empty-tags">
                  <Typography variant="b1">No tags for this page.</Typography>
                </div>
              )}
              <div className="tag-list">
                {tags.map((item, i) => {
                  return <Tag key={i} label={item} url={item} />;
                })}
              </div>
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
                  // renderItem={() => {
                  //   return (
                  //     <Link className="boc">1</Link>
                  //   )
                  // }}
                  count={numberOfAllPages.length}
                  onChange={(elements, n) => {
                    if (typeof window !== "undefined") {
                      // return <Link to={n === 1 ? "/news" : `/news/${n}`} />;
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
  query NewsQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(news)/" }
        frontmatter: { path: { ne: null } }
      }
      sort: { fields: [frontmatter___timeStamp], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            timeStamp
            title
            path
            abstract
            tags
            featureImage {
              name
              childImageSharp {
                id
                gatsbyImageData(formats: [AUTO, WEBP], width: 1024)
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
