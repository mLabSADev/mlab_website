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
    description: `mLab South Africa is a registered Non-profit Organisation with Public Benefit Organisation status. We are a Level 1 B-BBEE service provider focusing on Ecosystem, Skills, Enterprise and Technology acceleration. We believe that when our youth are empowered with the right skills, resources and support, they can drive our economy forward. Our founding partners include the World Bank, the Ministry of Foreign Affairs of Finland, the Department of Science and Innovation, The Innovation Hub, and the CSIR.`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms", //
    "gatsby-plugin-sass", //
    "gatsby-plugin-image", //
    "gatsby-plugin-react-helmet", //
    "gatsby-plugin-mdx", //
    "gatsby-plugin-sharp", //
    "gatsby-transformer-sharp", //
    "gatsby-plugin-sitemap",
    `gatsby-plugin-offline`,
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
                "heading[depth=1]": "h1",
                "heading[depth=2]": "h2",
                "heading[depth=3]": "h3",
                "heading[depth=4]": "h4",
                "heading[depth=5]": "h5",
                "heading[depth=6]": "h6",
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
          apiKey: "AIzaSyD115GptMK3aCUu3pu0hFqNJuStQ_ctRKI",
          authDomain: "mlabwebsite.firebaseapp.com",
          projectId: "mlabwebsite",
          storageBucket: "mlabwebsite.appspot.com",
          messagingSenderId: "870711052956",
          appId: "1:870711052956:web:6dde9253bc6a5129cafb59",
          measurementId: "G-VEM9BZWE33",
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
