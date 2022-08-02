const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve("src/templates/blog-post.js");
  const TagsTemplate = path.resolve("src/templates/tags.js");
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
  // Create pages from tags
  const tags = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(news)/" }
          frontmatter: { tags: { ne: null } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);
  const whatWeDo = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(wwdSections)/" } }
      ) {
        edges {
          node {
            rawMarkdownBody
            frontmatter {
              path
              title
              link
              thumb {
                childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR, width: 700)
                }
              }
            }
          }
        }
      }
    }
  `);
  news.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/news${node.frontmatter.path}`,
      component: PostTemplate,
      context: { article: node.frontmatter.path },
    });
  });
  tags.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.tags.length) {
      node.frontmatter.tags.forEach((tag) => {
        createPage({
          path: `/news/tag/${tag.replaceAll(" ", "_")}`,
          component: TagsTemplate,
          context: { tag: tag },
        });
      });
    }
  });
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
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  });
};
