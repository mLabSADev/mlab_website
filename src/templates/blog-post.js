import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import "./style.scss";
import DisqusTemplate from "../components/disqus/index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/ChatBot/ChatBot";
import Section from "../components/Section/Section";
import Tag from "../components/Tag/Tag";
import "./blog-post.scss";
import Typography from "../components/Typography/Typography";
import { AnimatePresence } from "framer-motion";
import ImageModal from "../components/ImageModal/ImageModal";

import moment from "moment";
export default function BlogPost({ data }) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const image = getImage(
    data.markdownRemark.frontmatter.featureImage &&
      data.markdownRemark.frontmatter.featureImage
  );
  const banner = getImage(data.markdownRemark.frontmatter?.banner);
  const tags = data.markdownRemark.frontmatter.tags;
  const title = data.markdownRemark.frontmatter.title.replaceAll("-", " ");
  const html = data.markdownRemark.html;
  const date = data.markdownRemark.frontmatter.timeStamp;
  const author = data.markdownRemark.frontmatter.author;
  useEffect(() => {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3238112, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);
  return (
    <Layout>
      <AnimatePresence>
        {modalOpen && (
          <ImageModal modalOpen={modalOpen} handleClose={close}>
            <div className="f-w">
              <GatsbyImage
                className="fullscreen"
                image={image}
                alt={title}
                objectFit="contain"
              />
            </div>
          </ImageModal>
        )}
      </AnimatePresence>
      <div onClick={() => open()} class="image-b">
        <div />
        <GatsbyImage
          class="image-bog"
          image={banner ? banner : image}
          alt={title}
          objectFit="cover"
        />
        <div />
      </div>

      <Section>
        <div className="main-blog">
          <div></div>
          <div className="article-blog">
            <div>
              <Typography variant="h6">
                {moment(date).format("DD MMMM, YYYY")}
              </Typography>
              <Typography variant="h3">{title.toUpperCase()}</Typography>
              <Typography variant="s1" color="gray">
                <Typography variant="caption">author</Typography> {author}
              </Typography>
            </div>
            <hr className="line-hr" />
            <div
              className="controlImage"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="tag-section">
            {tags && tags.length > 0 ? (
              <Typography variant="h6">Tags</Typography>
            ) : null}
            <div className="tag-w">
              {tags &&
                tags.map((t, i) => {
                  const removeUnderscore = t.replaceAll("_", " ");
                  const removeDash = removeUnderscore.replaceAll("-", " ");
                  const tag = {
                    label: removeDash,
                    link: t,
                  };
                  return tag.label ? (
                    <Tag key={i} label={tag.label} url={tag.link} />
                  ) : null;
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
      <div className="index-form">
        {/* <SignupForm main={false}></SignupForm> */}
        {/* <ChatBot /> */}
      </div>
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
        timeStamp
        tags
        featureImage {
          id
          name
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              width: 1920
              placeholder: BLURRED
            )
          }
        }
      }
      html
    }
  }
`;
