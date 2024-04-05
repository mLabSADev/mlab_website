import React, { useEffect } from "react";
import "./initiatives.scss";
import {
  Space,
  Typography,
  Layout as ANTLayout,
  Image,
  Card,
  Divider,
  Button as ANTD,
} from "antd";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/ChatBot/ChatBot";
import Button from "../components/Button/Button";
import slugify from "slugify";
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
const Initiatives = ({ data }) => {
  const { category, cca, description, from, image, link, title, to } =
    data.markdownRemark.frontmatter;
  const others = data.others.edges;
  const thumnbail = getImage(image);
  useEffect(() => {
    console.log(thumnbail);
  });
  return (
    <Layout>
      <ANTLayout>
        <GatsbyImage
          className="initiatives-thumbnail"
          image={thumnbail}
          alt={title}
        />
        <div className="initiatives-body">
          <Typography.Title>{title}</Typography.Title>
          <Typography>{description}</Typography>
          <Divider />
          <div className="initiatives-others">
            <Typography.Title level={4}>More Initiatives</Typography.Title>
            <div className="initiatives-cards">
              {others.map((item) => {
                const { cca, title, image } = item.node.frontmatter;
                const coverImage = getImage(image);
                const path = GeneratePath(title);
                return (
                  <Card
                    hoverable
                    actions={[
                      <div
                        style={{
                          paddingLeft: 10,
                          paddingRight: 10,
                          width: "100%",
                          // background: "red",
                          height: 45,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Button type="link" url={`/initiatives/${path}`}>
                          View More
                        </Button>{" "}
                      </div>,
                    ]}
                    cover={
                      <GatsbyImage
                        image={coverImage}
                        alt=""
                        style={{ height: 200, objectFit: "cover" }}
                      />
                    }
                  >
                    <Card.Meta title={title} description={cca} />
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </ANTLayout>
    </Layout>
  );
};

export default Initiatives;
export const query = graphql`
  query Initiatives($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        title
        description
        to
        from
        cca
        category
        link
      }
    }
    others: allMarkdownRemark(
      filter: {
        frontmatter: { title: { ne: $title } }
        fileAbsolutePath: { regex: "/(projects)/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            title
            cca
          }
        }
      }
    }
  }
`;
