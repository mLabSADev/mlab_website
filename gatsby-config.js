module.exports = {
  siteMetadata: {
    title: "mlab",
    siteUrl: "https://www.mlab.co.za",
    facebook: "https://www.facebook.com/mLabSA",
    twitter: "https://twitter.com/mlabsa?ref_src=twsrc%5Etfw",
    instagram: "https://www.instagram.com/mlablimps/?hl=en",
    youtube: "https://www.youtube.com/user/mLabSAStudio/videos",
    linkedin: "https://www.linkedin.com/company/mlab-south-africa/mycompany/",
    post: "https://mlab.co.za/wp-json/wp/v2/posts",
    address:
      "U8, Enterprise Building, The Innovation Hub, Mark Shuttleworth Street, Tshwane Pretoria, South Africa, 0087",
    telephone: "+27 012 844 0240",
    description: `mLab Southern Africa is a registered Nonprofit organisation and Level 1 B-BBEE service provider focusing on Skills and Enterprise Development as well as Lean Innovation Facilitation and Supplier Development Support. We have proudly partnered with  founding partners The Ministry of Foreign Affairs of Finland, The Department of Science & Technology, The Innovation Hub, The CSIR, The V&A Waterfront and the World Bank`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms", //
    "gatsby-plugin-sass", //
    "gatsby-plugin-image", //
    "gatsby-plugin-react-helmet", //
    "gatsby-plugin-mdx", //
    "gatsby-plugin-sharp", //
    "gatsby-transformer-sharp", //
    {
      resolve: "gatsby-plugin-sitemap", //
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        excludes: [
          `/team/*`,
          `/author/*`,
          `/offline-plugin-app-shell-fallback`,
          `/404`,
        ],
        query: `{
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage {
          nodes {
            path
          }
        }
      }`,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => ({
            url: site.siteMetadata.siteUrl + node.path,
            changefreq: `weekly`,
            priority: 0.7,
          })),
      },
    },

    {
      resolve: "gatsby-plugin-manifest", //
      options: {
        name: `mLab Southern Africa`,
        short_name: `mLab`,
        description: `mLab Southern Africa is a registered Nonprofit organisation and Level 1 B-BBEE service provider focusing on Skills and Enterprise Development as well as Lean Innovation Facilitation and Supplier Development Support. We have proudly partnered with  founding partners The Ministry of Foreign Affairs of Finland, The Department of Science & Technology, The Innovation Hub, The CSIR, The V&A Waterfront and the World Bank`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#f1f1f1`,
        theme_color: `#91dd09`,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./custom-sw-code.js`),
        workboxConfig: {
          importWorkboxFrom: `cdn`,
          globPatterns: ["**/images/icons/*"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-3KLGEL4MZG",
        head: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./src/markdown",
      },
      __key: "markdown",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: "oldschool",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                h1: "h1",
                h2: "h2",
                h3: "h3",
                h4: "h4",
                h5: "h5",
                h6: "h6",
                paragraph: "b1",
                listItem: "b2",
                "list[ordered=false]": "b2",
                "list[ordered=true]": "b2",
                span: "b2",
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-3KLGEL4MZG",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCSvPQ3-fpuAYGljNEBCrWTVO-yO9tepaU",
          authDomain: "mlab-22bb9.firebaseapp.com",
          databaseURL: "https://mlab-22bb9.firebaseio.com",
          projectId: "mlab-22bb9",
          storageBucket: "mlab-22bb9.appspot.com",
          messagingSenderId: "479164571450",
          appId: "1:479164571450:web:3610b81d1c921714927a03",
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mlab-co-za`,
      },
    },
  ],
};
