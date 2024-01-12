import React from "react";
import { graphql } from "gatsby";
import "./news.scss";
import Layout from "../components/ChatBot/ChatBot";
import Typography from "../components/Typography/Typography";
import Section from "../components/Section/Section";
import PageHeader from "../components/PageHeader/PageHeader";
import NewsCard from "../components/NewsCard/NewsCard";
import { getImage } from "gatsby-plugin-image";
import Tag from "../components/Tag/Tag";
const slugify = require("slugify");
export default function TaggedPosts({ data, pageContext }) {
  // detect change
  const { tag } = pageContext;
  const news = data.allMarkdownRemark.nodes;
  let tags = [];
  news.forEach((element) => {
    let tag = element.frontmatter.tags;
    tags = tags.concat(tag);
  });
  const GeneratePath = (path) => {
    const link = slugify(path, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: true, // strip special characters except replacement, defaults to `false`
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
    return link;
  };
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
                const _path = GeneratePath(title);
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
                  const _path = GeneratePath(item);
                  return (
                    <Tag key={i} label={item} url={`/news/tag/${_path}`} />
                  );
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
