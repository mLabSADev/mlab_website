const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const news = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(news)/" }
          frontmatter: { path: { ne: null } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            html
            id
            frontmatter {
              author
              date
              title
              path
            }
          }
        }
      }
    }
  `);

  paginate({
    createPage, // The Gatsby `createPage` function
    items: news.data.allMarkdownRemark.edges, // An array of objects
    itemsPerPage: 9, // How many items you want per page
    pathPrefix: "/news", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve("src/templates/news.js"), // Just like `createPage()`
  });
};

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `images` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
