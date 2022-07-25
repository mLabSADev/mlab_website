import React, { useState } from "react";
import "./news.scss";
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Typography from "../components/Typography/Typography";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PageHeader from "../components/PageHeader/PageHeader";
import NewsCard from "../components/NewsCard/NewsCard";
import Modal from "../components/Modal/Modal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { graphql, Link } from "gatsby";
const Tags = () => {
  return (
    <div>
      <Typography variant="s2">tagname</Typography>
    </div>
  );
};
const News = ({ data, pageContext, numberOfAllPages = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const { humanPageNumber, numberOfPages } = pageContext;
  for (let i = 0; i < numberOfPages; i++) {
    numberOfAllPages.push(i + 1);
  }
  const dataarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(data, pageContext, numberOfAllPages);
  //   onClick={() => (modalOpen ? close() : open())}
  return (
    <Layout>
      <PageHeader title="news" />
      <Section>
        {/* <SectionTitle>Articles</SectionTitle> */}
        <div className="news-content">
          <div className="stories-news">
            {data.allMarkdownRemark.edges.map((entry) => {
              if (entry.node.frontmatter.path) {
                return <NewsCard />;
              } else return null;
            })}
          </div>

          <div className="categories-news">
            <Typography variant="h6">CATEGORIES</Typography>
            <div className="tags">
              {dataarray.map((item, i) => {
                return (
                  <Link className="tag-link">
                    <Tags />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pagination-news">
          {numberOfAllPages.map((number, i) => {
            if (number == 1) number = "";
            const page = "/news";
            var url = typeof window !== "undefined" && window.location.pathname;
            var current = number === "" ? page : `/news/${number}`;
            console.log({ url, current, number });
            if (url == current) {
              return (
                <Link to={current}>
                  <Pagination
                    page={number === "" ? 1 : number}
                    showFirstButton
                    showLastButton
                    variant="outlined"
                    color="secondary"
                    count={numberOfAllPages.length}
                  />
                </Link>
              );
            }
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
