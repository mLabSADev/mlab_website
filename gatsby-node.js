const path = require("path");
const slugify = require('slugify');
const { paginate } = require("gatsby-awesome-pagination");
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve("src/templates/blog-post.js");
  const TagsTemplate = path.resolve("src/templates/tags.js");
  const PillerTemplate = path.resolve("src/pages/pillers.js");
  const GeneratePath = (path) => {
    const link = slugify(path, {
      replacement: '-',  // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
      lower: true,      // convert to lower case, defaults to `false`
      strict: false,     // strip special characters except replacement, defaults to `false`
      trim: true         // trim leading and trailing replacement chars, defaults to `true`
    })
    return link
  }
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
  const categories = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(categories)/" }
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
    const _path = GeneratePath(`/news/${title}`);
    createPage({
      path: _path,
      component: PostTemplate,
      context: { article: title },
    });
  });
  tags.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.tags.length) {
      node.frontmatter.tags.forEach((tag) => {
        const _path = GeneratePath(`/news/tag/${tag}`);
        createPage({
          path: _path,
          component: TagsTemplate,
          context: { tag: tag },
        });
      });
    }
  });
  categories.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.tags.length) {
      node.frontmatter.name.forEach((tag) => {
        const _path = GeneratePath(`/news/category/${tag}`);
        createPage({
          path: _path,
          component: TagsTemplate,
          context: { tag: tag },
        });
      });
    }
  });
  pillers.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const _path = GeneratePath(`/what-we-do//${node.frontmatter.title}`);
    createPage({
      path: _path,
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
