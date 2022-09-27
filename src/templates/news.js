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
import generatePath from "../pages/path-gen";
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
  console.log(news);
  return (
    <Layout>
      <PageHeader
        title="news"
        text="Keep up to date with our latest calls for applications, opportunities, projects and success stories"
        index={4}
      />
      <Section>
        {/* <SectionTitle>Articles</SectionTitle> */}
        <div className="news-content">
          <div className="stories-n">
            <div className="article-title">
              <Typography variant="h3">Articles</Typography>
            </div>

            <div className="stories-news">
              {data.allMarkdownRemark.edges.map((entry, i) => {
                // clean later
                const img = getImage(entry.node.frontmatter.featureImage);
                const title = entry.node.frontmatter.title;

                const excerpt = entry.node.excerpt;
                const date = entry.node.frontmatter.timeStamp;
                const lowerCase = title;
                const remove_invalid_1 = lowerCase.replaceAll(":", "");
                const remove_invalid_2 = remove_invalid_1.replaceAll("|", "");
                const remove_invalid_3 = remove_invalid_2.replaceAll("#", "");
                const remove_invalid_4 = remove_invalid_3.replaceAll("&", "");
                const remove_invalid_5 = remove_invalid_4.replaceAll('"', "");
                const remove_invalid_6 = remove_invalid_5.replaceAll('"', "");
                const _path = remove_invalid_6.replaceAll(" ", "-");
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
                  return item ? <Tag key={i} label={item} url={item} /> : null;
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
                  count={numberOfAllPages.length}
                  onChange={(elements, n) => {
                    if (typeof window !== "undefined") {
                      // return <Link to={n === 1 ? "/news" : `/news/${n}`} />;
                      window.location.href = n === 1 ? "/news" : `/news/${n}`;
                      return <Link>{n}</Link>;
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
  query NewsQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(news)/" }
        frontmatter: { title: { ne: "News" } }
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
            timeStamp
            title
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
