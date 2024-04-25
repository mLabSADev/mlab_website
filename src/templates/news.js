import React, { useEffect } from "react";
import "./news.scss";
import "swiper/css";
import "swiper/css/pagination";
import Layout from "../components/ChatBot/ChatBot";
import Section from "../components/Section/Section";
// import Typography from "../components/Typography/Typography";
import PageHeader from "../components/PageHeader/PageHeader";
import NewsCard from "../components/NewsCard/NewsCard";
import Pagination from "@mui/material/Pagination";
import {
  Autoplay,
  Mousewheel,
  Pagination as SPagination,
} from "swiper/modules";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import Tag from "../components/Tag/Tag";
import moment from "moment";
import { Card, ConfigProvider, Empty, Tag } from "antd";
import {
  Grid,
  Divider,
  Stack,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import { ANTDTheme } from "../components/ThemeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Helmet } from "react-helmet";
const slugify = require("slugify");
const News = ({ data, pageContext, numberOfAllPages = [] }) => {
  const { numberOfPages } = pageContext;
  for (let i = 0; i < numberOfPages; i++) {
    numberOfAllPages.push(i + 1);
  }

  const news = data.allMarkdownRemark.edges;
  const gridNews = data.gridNews.edges;
  let tags = [];
  const theme = useTheme();
  news.forEach((element) => {
    let tag = element.node.frontmatter.tags || [];
    let cleanTags = [];
    tag.map((item) => {
      const remove_invalid_1 = item.replaceAll("_", " ");
      const remove_invalid_2 = remove_invalid_1.replaceAll("-", " ");
      const tag = {
        label: remove_invalid_2,
        link: item,
      };
      cleanTags.push(tag);
    });
    tags = tags.concat(cleanTags);
  });
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
    console.log(gridNews);
  }, []);
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
    })(window, document, "https:static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);
  return (
    <Layout route="news">
      {/* <Helmet title={"mLab | News"} /> */}
      <PageHeader
        title="news"
        text="Keep up to date with our latest calls for applications, opportunities, projects and success stories"
        index={4}
      />
      <Section>
        <Stack pt={5}>
          <Stack pt={2}>
            <Typography variant="h5">Latest News</Typography>
          </Stack>
          <Stack py={5}>
            <Swiper
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              mousewheel={true}
              speed={3000}
              pagination={{
                clickable: true,
              }}
              modules={[SPagination, Autoplay, Mousewheel]}
            >
              {gridNews.map((entry, i) => {
                // clean later
                const img = getImage(entry.node.frontmatter.featureImage);
                const title = entry.node.frontmatter.title;
                const excerpt = entry.node.excerpt;
                const date = entry.node.frontmatter.timeStamp;
                const _path = GeneratePath(title);
                if (title) {
                  return (
                    <SwiperSlide>
                      <Card onClick={() => navigate(`/news/${_path}`)}>
                        <Stack direction={"row"}>
                          <Stack width={400}>
                            {img ? (
                              <GatsbyImage
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                                objectFit="cover"
                                image={img}
                                backgroundColor={"rgba(93,145,0,0)"}
                                alt={title}
                              ></GatsbyImage>
                            ) : (
                              <StaticImage
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                                src="../../assets/placeholder.jpg"
                                alt="no image"
                              />
                            )}
                          </Stack>
                          <Stack flex={1} spacing={2} p={5} textAlign={"left"}>
                            <Typography variant="subtitle2">
                              {moment(date).format("DD MMMM, YYYY")}
                            </Typography>
                            <Typography variant="h5" fontWeight={"bold"}>
                              {title}
                            </Typography>
                            <Typography color={colors.grey[700]}>
                              {excerpt}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Card>
                      {/* <NewsCard
                        date={moment(date).format("DD MMMM, YYYY")}
                        key={i}
                        image={img}
                        title={title}
                        excerpt={excerpt}
                        url={`/news/${_path}`}
                      /> */}
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </Stack>

          <Stack spacing={2} my={3}>
            <Divider />
            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={2}
              py={5}
              borderRadius={5}
            >
              <Stack pb={0}>
                <Typography variant="h6">Tags</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack flex={1}>
                <Grid container spacing={1}>
                  {tags.map((item, i) => {
                    const _path = GeneratePath(item.link);
                    return item.label ? (
                      <Grid item>
                        <ConfigProvider theme={ANTDTheme}>
                          <Tag
                            color={theme.palette.success.main}
                            style={{ cursor: "pointer" }}
                            key={i}
                            onClick={() => {
                              navigate(`/news/tag/${_path}`);
                            }}
                          >
                            {item.label}
                          </Tag>
                        </ConfigProvider>
                      </Grid>
                    ) : null;
                  })}
                </Grid>
              </Stack>
            </Stack>

            <Divider />
            <Grid container spacing={1}>
              {news.map((entry, i) => {
                // clean later
                const img = getImage(entry.node.frontmatter.featureImage);
                const title = entry.node.frontmatter.title;
                const excerpt = entry.node.excerpt;
                const date = entry.node.frontmatter.timeStamp;
                const _path = GeneratePath(title);
                if (title) {
                  return (
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <NewsCard
                        date={moment(date).format("DD MMMM, YYYY")}
                        key={i}
                        image={img}
                        title={title}
                        excerpt={excerpt}
                        url={`/news/${_path}`}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Stack>
        </Stack>
        <Divider />
        <Stack py={5} pb={5} alignItems={"center"}>
          {numberOfAllPages.map((number, i) => {
            if (number === 1) number = "";
            const page = "/news";
            var url = typeof window !== "undefined" && window.location.pathname;
            var current = number === "" ? page : `/news/${number}`;
            if (url === current) {
              return (
                <Pagination
                  key={i}
                  page={number === "" ? 1 : number}
                  showFirstButton
                  showLastButton
                  variant="outlined"
                  color="secondary"
                  count={numberOfAllPages.length}
                  onChange={(elements, n) => {
                    if (typeof window !== "undefined") {
                      // return <Link to={n === 1 ? "/news" : `/news/${n}`} />;
                      window.location.href = n === 1 ? "/news" : `/news/${n}`;
                      return <Link>{n}</Link>;
                    } else {
                      console.log("Server cannot execute");
                    }
                  }}
                />
              );
            }
            return true;
          })}
        </Stack>
      </Section>
    </Layout>
  );
};
export const query = graphql`
  query NewsQuery($limit: Int, $skip: Int) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(news)/" }
        frontmatter: { title: { ne: "News" } }
      }
      sort: { fields: [frontmatter___timeStamp], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            timeStamp
            title
            tags
            featureImage {
              name
              childImageSharp {
                id
                gatsbyImageData(formats: [AUTO, WEBP], width: 1920)
              }
            }
            attachments {
              name
              childImageSharp {
                id
                gatsbyImageData(formats: [AUTO, WEBP], width: 1920)
              }
            }
          }
          excerpt
        }
      }
    }
    gridNews: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(news)/" }
        frontmatter: { title: { ne: "News" } }
      }
      sort: { fields: [frontmatter___timeStamp], order: DESC }
      limit: 4
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            timeStamp
            title
            tags
            featureImage {
              name
              childImageSharp {
                id
                gatsbyImageData(formats: [AUTO, WEBP], width: 1920)
              }
            }
            attachments {
              name
              childImageSharp {
                id
                gatsbyImageData(formats: [AUTO, WEBP], width: 1920)
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
export default News;
