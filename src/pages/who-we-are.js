import React, { useState, useEffect } from "react";
import "./who-we-are.scss";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Typography from "../components/Typography/Typography";
import { navigate } from "gatsby";
import Link from "gatsby-link";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
const WhatWeDoCard = ({ image, title, description }) => {
  return (
    <div className="wwd-c">
      <div className="image-c"></div>
      <div className="details-c">
        <Typography variant="h4">Nurturing Talent</Typography>
        <Typography variant="b2">
          Blender is a work of passion. We do this with great satisfaction
          because it has meaning for many people all over the world. It’s a
          special treat to work for a project that is highly appreciated by top
          industry professionals as well as by hobbyists. It’s a very special
          treat to work for a company that has no sales department or investors.
          And it’s especially a treat to work on Free Software, on a public open
          source project which has a strong connection with an amazing community
          of online contributors.
        </Typography>
      </div>
    </div>
  );
};
const TeamCard = ({ fullName, position, image }) => {
  return (
    <div className="card-tc">
      <Typography variant="h5" center>
        Keketso Matsuma
      </Typography>
      <Typography variant="s2" center color="gray">
        UI/UX designer
      </Typography>
      <div className="image-tc"></div>
    </div>
  );
};
const WhoWeAre = ({ data }) => {
  // controls which team to show per location
  const [locations, setLocations] = useState({});
  const [currentLocation, setCurrentLocation] = useState("gauteng");

  // sets the teams
  const locs = data.team.edges.reduce((acc, cur) => {
    if (!acc[cur.node.frontmatter.location])
      acc[cur.node.frontmatter.location] = [];
    acc[cur.node.frontmatter.location].push({ ...cur });
    return acc;
  }, {});

  // triggers the setting
  useEffect(() => {
    setLocations(locs);
  }, []);

  return (
    <Layout>
      <PageHeader title="WHO WE ARE" />
      <Section>
        <div className="about-page">
          <div>
            <Typography variant="h4">Who we are</Typography>
            <br></br>
            <br></br>
            <Typography variant="b1">
              mLab is a tech-centred business that works towards preparing our
              youth for the digital economy. In only six years mLab has touched
              many lives. We’ve trained over 300 junior developers, mostly from
              South Africa’s townships, in mobile application development and
              Agile practice and helped to link them to employment and income
              opportunities. We’ve supported over 65 early-stage digital
              start-ups that have gone on to positively impact thousands of
              users through their technologies and created more than 300 new
              jobs. We’ve partnered with and supported the development of
              digital solutions with significant social impact, from cancer
              awareness to citizen water quality monitoring to agricultural
              empowerment apps. mLab has doubled in size in the last two years.
              Today our staff complement includes 18 passionate and dynamic
              young individuals who are determined to drive and transform South
              Africa’s ICT sector. We have expanded from our Gauteng based
              headquarters to have presence in Limpopo and the Northern Cape. We
              offer training in Soweto and Tembisa in Gauteng, and are planning
              expansion around South Africa and into the rest of the African
              continent.
            </Typography>
          </div>
          <div>
            <StaticImage src="../images/mlabstaff.png" />
          </div>
        </div>
      </Section>
      <Section>
        {/* <SectionTitle>we believe</SectionTitle> */}
        <Typography variant="h2" center={true}>
          When our youth are empowered, they create innovative solutions that
          drive our society.
        </Typography>
      </Section>
      <Section>
        <SectionTitle>what we do</SectionTitle>
        <div className="main-wwd-c">
          <WhatWeDoCard></WhatWeDoCard>
          <WhatWeDoCard></WhatWeDoCard>
          <WhatWeDoCard></WhatWeDoCard>
          <WhatWeDoCard></WhatWeDoCard>
        </div>
      </Section>
      <Section>
        <SectionTitle>our team</SectionTitle>
        <Typography variant="b1" center={true}>
          mLab is a tech-centred business that works towards preparing our youth
          for the digital economy. In only six years mLab has touched many
          lives. We’ve trained over 300 junior developers, mostly from South
          Africa’s townships, in mobile application development and Agile
          practice and helped to link them to employment and income
          opportunities. We’ve supported over 65 early-stage digital start-ups
          that have gone on to positively impact thousands of users through
          their technologies and created more than 300 new jobs. We’ve partnered
          with and supported the development of digital solutions with
          significant social impact, from cancer awareness to citizen water
          quality monitoring to agricultural empowerment apps.
        </Typography>
        <div className="our-team-wrapper">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
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
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            position
            department
            location
            tags
            path
          }
          excerpt
        }
      }
    }
    whatWeDo: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(whatWeDo)/" } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            featureImage {
              name
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP], width: 350)
              }
            }
          }
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
