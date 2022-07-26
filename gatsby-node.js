const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve("src/templates/blog-post.js");
  const TagsTemplate = path.resolve("src/templates/tags.js");
  const PillerTemplate = path.resolve("src/pages/pillers.js");
  const news = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(news)/" }
          frontmatter: { title: { ne: "News" } }
        }
        sort: { fields: [frontmatter___timeStamp], order: DESC }
      ) {
        edges {
          node {
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
  const pillers = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(wwdSections)/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  news.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const title = node.frontmatter.title;
    const lowerCase = title;
    const remove_invalid_1 = lowerCase.replaceAll(":", "");
    const remove_invalid_2 = remove_invalid_1.replaceAll("|", "");
    const remove_invalid_3 = remove_invalid_2.replaceAll("#", "");
    const remove_invalid_4 = remove_invalid_3.replaceAll("&", "");
    const remove_invalid_5 = remove_invalid_4.replaceAll('"', "");
    const remove_invalid_6 = remove_invalid_5.replaceAll('"', "");
    const _path = remove_invalid_6.replaceAll(" ", "-");
    createPage({
      path: `/news/${_path}`,
      component: PostTemplate,
      context: { article: title },
    });
  });
  tags.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.tags.length) {
      node.frontmatter.tags.forEach((tag) => {
        createPage({
          path: `/news/tag/${tag.replaceAll(" ", "-")}`,
          component: TagsTemplate,
          context: { tag: tag },
        });
      });
    }
  });
  pillers.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/what-we-do/${node.frontmatter.title.replaceAll(" ", "-")}`,
      component: PillerTemplate,
      context: { title: node.frontmatter.title },
    });
  });
  paginate({
    createPage, // The Gatsby `createPage` function
    items: news.data.allMarkdownRemark.edges, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: "/news", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve("src/templates/news.js"), // Just like `createPage()`
  });
};

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
