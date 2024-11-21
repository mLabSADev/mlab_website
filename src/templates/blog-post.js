import React, { useEffect, useState } from "react";
import { graphql, navigate } from "gatsby";
import "./style.scss";
import DisqusTemplate from "../components/disqus/index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/ChatBot/ChatBot";
import Section from "../components/Section/Section";
// import Tag from "../components/Tag/Tag";
import "./blog-post.scss";
// import Typography from "../components/Typography/Typography";
import { AnimatePresence } from "framer-motion";
import ImageModal from "../components/ImageModal/ImageModal";
import moment from "moment";
import { Tag } from "antd";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
const slugify = require("slugify");
export default function BlogPost({ data }) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const theme = useTheme();
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
      <Stack
        mx={2}
        borderRadius={5}
        overflow={"hidden"}
        height={400}
        mt={10}
        onClick={() => open()}
      >
        <GatsbyImage
          style={{ width: "100%", height: "100%" }}
          image={banner ? banner : image}
          alt={title}
          objectFit="cover"
        />
      </Stack>
      <Section>
        <Stack pb={10} pt={5}>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <Typography variant="h6">
                {moment(date).format("DD MMMM, YYYY")}
              </Typography>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="s" color="gray">
                <Typography variant="caption">author</Typography> {author}
              </Typography>
            </Stack>
            <Divider />
            <Stack direction={"row"} spacing={1}>
              {tags &&
                tags.map((t, i) => {
                  const removeUnderscore = t.replaceAll("_", " ");
                  const removeDash = removeUnderscore.replaceAll("-", " ");
                  const tag = {
                    label: removeDash,
                    link: t,
                  };
                  const _path = GeneratePath(tag.link);
                  return tag.label ? (
                    <Tag
                      color={theme.palette.success.main}
                      key={i}
                      onClick={() => navigate(`/news/tag/${_path}`)}
                    >
                      {tag.label}
                    </Tag>
                  ) : null;
                })}
            </Stack>
            <Divider />
            <div
              className="controlImage"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Stack>
        </Stack>
      </Section>
      <Section>
        <Stack pb={20}>
          <DisqusTemplate
            url={`/news/${GeneratePath(data.markdownRemark.frontmatter.title)}`}
            title={data.markdownRemark.frontmatter.title}
            identifier={GeneratePath(data.markdownRemark.frontmatter.title)}
          ></DisqusTemplate>
        </Stack>
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
