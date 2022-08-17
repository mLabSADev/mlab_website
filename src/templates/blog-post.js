import React from "react";
import { graphql } from "gatsby";
import "./style.scss";
import DisqusTemplate from "../components/disqus/index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Tag from "../components/Tag/Tag";
import "./blog-post.scss";
import Typography from "../components/Typography/Typography";
export default function BlogPost({ data }) {
  const image = getImage(
    data.markdownRemark.frontmatter.featureImage &&
      data.markdownRemark.frontmatter.featureImage
  );
  const tags = data.markdownRemark.frontmatter.tags;
  const title = data.markdownRemark.frontmatter.title.replaceAll("-", " ");
  const html = data.markdownRemark.html;
  const date = data.markdownRemark.frontmatter.data;
  const author = data.markdownRemark.frontmatter.author;
  return (
    <Layout>
      <GatsbyImage
        class="image-bog"
        image={image}
        alt={title}
        objectFit="cover"
      />
      <Section>
        <div className="main-blog">
          <div></div>
          <div className="article-blog">
            <div>
              <Typography variant="caption">{date}</Typography>
              <Typography variant="h3">{title.toUpperCase()}</Typography>
              <Typography variant="s1" color="gray">
                <Typography variant="caption">author</Typography> {author}
              </Typography>
            </div>
            <p
              className="controlImage"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="tag-section">
            {tags.length > 0 ? (
              <Typography variant="h6">Tags</Typography>
            ) : null}
            <div className="tag-w">
              {tags.map((t, i) => {
                return <Tag key={i} label={t} url={t} />;
              })}
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="disquss-section">
          <div></div>
          <div>
            <DisqusTemplate
              url={data.markdownRemark.frontmatter.path}
              title={data.markdownRemark.frontmatter.title}
              identifier={data.markdownRemark.frontmatter.title}
            ></DisqusTemplate>
          </div>

          <div></div>
        </div>
      </Section>
    </Layout>
  );
}
export const query = graphql`
  query BlogPostByPath($article: String!) {
    markdownRemark(frontmatter: { title: { eq: $article } }) {
      frontmatter {
        path
        title
        author
        date
        tags
        featureImage {
          id
          name
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              width: 550
              placeholder: BLURRED
            )
          }
        }
      }
      html
    }
  }
`;
