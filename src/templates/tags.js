import React from "react";
import { graphql } from "gatsby";
import "./news.scss";
import Layout from "../components/Layout/Layout";
import Typography from "../components/Typography/Typography";
import Section from "../components/Section/Section";
import PageHeader from "../components/PageHeader/PageHeader";
import NewsCard from "../components/NewsCard/NewsCard";
import { getImage } from "gatsby-plugin-image";
import Tag from "../components/Tag/Tag";

export default function TaggedPosts({ data, pageContext }) {
  const { tag } = pageContext;
  const news = data.allMarkdownRemark.nodes;
  let tags = [];
  news.forEach((element) => {
    let tag = element.frontmatter.tags;
    tags = tags.concat(tag);
  });
  return (
    <Layout>
      <PageHeader title={tag.toUpperCase()} />
      <Section>
        {/* <SectionTitle>Articles</SectionTitle> */}
        <div className="news-content">
          <div className="stories-n">
            <div className="article-title">
              <Typography variant="h5">Articles tagged - {tag}</Typography>
            </div>

            <div className="stories-news">
              {news.map((entry, i) => {
                const img = getImage(entry.frontmatter.featureImage);
                const excerpt = entry.excerpt;
                const title = entry.frontmatter.title;
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
            {tags.length > 0 ? (
              <Typography variant="h6">Tags</Typography>
            ) : null}

            <div className="tags">
              <div className="tag-list">
                {tags.map((item, i) => {
                  return <Tag key={i} label={item} url={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export const query = graphql`
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
