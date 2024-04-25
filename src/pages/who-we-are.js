import React, { useEffect } from "react";
import "./who-we-are.scss";
import Layout from "../components/ChatBot/ChatBot";
import { Link, graphql, navigate } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
// import Typography from "../components/Typography/Typography";
import PageHeader from "../components/PageHeader/PageHeader";
// import Button from "../components/Button/Button";
import { Avatar, Button, Card, ConfigProvider, Image } from "antd";
import { Box, Grid, Stack, Typography, colors } from "@mui/material";
import { ANTDTheme } from "../components/ThemeProvider";

export const WhatWeDoCard = ({
  image,
  title,
  description,
  excerpt,
  url,
  location,
  onClick,
}) => {
  // const page = location.pathname;

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
    <Stack flex={1}>
      <ConfigProvider theme={ANTDTheme}>
        <Card
          onClick={() => {
            navigate(`${url}`);
          }}
          hoverable
          style={{ display: "flex", flexDirection: "column", flex: 1 }}
          cover={<GatsbyImage image={image} />}
          actions={[<Button type="link">Read More</Button>]}
        >
          <Typography
            sx={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: "100%",
              overflow: "hidden",
            }}
            gutterBottom
            variant="subtitle2"
          >
            {excerpt}
          </Typography>
          <Card.Meta
            title={
              <Typography fontWeight={"bold"} variant="h6">
                {title}
              </Typography>
            }
            description={description}
          />
        </Card>
      </ConfigProvider>
    </Stack>
  );
  return (
    <div className="wwd-c">
      <div className="details-c">
        <Typography center variant="caption">
          {excerpt}
        </Typography>
        <Typography center variant="h4">
          {title}
        </Typography>
        <Typography center color="gray" variant="b2">
          {description}
        </Typography>
        <Button label="read more" type={"link"} url={url} onClick={onClick} />
      </div>
    </div>
  );
};
const TeamCard = ({ fullName, position, image }) => {
  const capitalizeFirstLetter = (string) => {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  };
  if (fullName) {
    return (
      <Card
        hoverable
        cover={
          <Stack
            overflow={"hidden"}
            position={"relative"}
            alignItems={"center"}
          >
            <GatsbyImage
              style={{ zIndex: 5 }}
              image={image}
              alt={fullName}
              objectFit="contain"
            />
          </Stack>
        }
      >
        <Card.Meta
          title={
            <Typography variant="h5">
              {capitalizeFirstLetter(fullName)}
            </Typography>
          }
          description={
            <Typography variant="subtitle2" color="gray">
              {position}
            </Typography>
          }
        />
      </Card>
    );
  }
};
const WhoWeAre = ({ data }) => {
  const team = data.team.edges;
  const about = data.aboutMlab.html;
  return (
    <Layout route="who-we-are">
      {/* <Helmet title="mLab | Who We Are" /> */}
      <PageHeader title="WHO WE ARE" index={1} />
      <Section>
        <Stack>
          <Stack spacing={3} py={15}>
            <Stack direction={{ sm: "column", md: "row" }}>
              <Stack width={300} py={5}>
                <Typography variant="h2">About Us</Typography>
              </Stack>
              <Stack flex={1}>
                <p dangerouslySetInnerHTML={{ __html: about }}></p>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <StaticImage
              objectFit="cover"
              src="../images/mlabstaff.png"
              alt="mlab team"
            />
          </Stack>
        </Stack>
      </Section>
      <Stack my={10} bgcolor={colors.blueGrey[800]}>
        <Section>
          {/* <SectionTitle>we believe</SectionTitle> */}
          <Stack textAlign={"center"} py={15} color={"white"}>
            <Typography variant="h3" center>
              When our youth are empowered, they create innovative solutions
              that drive our society.
            </Typography>
          </Stack>
        </Section>
      </Stack>

      <Section>
        <Stack spacing={4}>
          <Stack>
            <SectionTitle>our team</SectionTitle>
            <Typography variant="body2" textAlign={"center"}>
              mLab has a staff complement of passionate and dynamic young
              individuals who are determined to drive and transform South
              Africa’s ICT sector.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {team.map((t, i) => {
              const img = getImage(t.node.frontmatter.profilePicture);
              return (
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <TeamCard
                    key={i}
                    image={img}
                    fullName={t.node.frontmatter.name}
                    position={t.node.frontmatter.position}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Section>
    </Layout>
  );
};

export default WhoWeAre;

export const query = graphql`
  query WhoWeAreQuery($title: String! = "Who We Are") {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        abstract
        name
        position
      }
    }
    team: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(team)/" } }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            position
            department
            location
            tags
            path
            profilePicture {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  quality: 100
                  width: 720
                )
              }
            }
          }
          excerpt
        }
      }
    }

    history: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(history)/" } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            accomplishment
            title
          }
        }
      }
    }
    aboutMlab: markdownRemark(fileAbsolutePath: { regex: "/(about-mlab)/" }) {
      frontmatter {
        path
        title
      }
      html
    }
  }
`;
