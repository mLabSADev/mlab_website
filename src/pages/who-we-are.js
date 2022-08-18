import React from "react";
import "./who-we-are.scss";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Typography from "../components/Typography/Typography";
import PageHeader from "../components/PageHeader/PageHeader";
import Button from "../components/Button/Button";

const WhatWeDoCard = ({ image, title, description }) => {
  return (
    <div className="wwd-c">
      <GatsbyImage
        objectFit="cover"
        image={image}
        className="image-c"
        alt=""
      ></GatsbyImage>
      <div className="details-c">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="b2">{description}</Typography>
        <Button label="read more" type="link" url="/what-we-do" />
      </div>
    </div>
  );
};
const TeamCard = ({ fullName, position, image }) => {
  return (
    <div className="card-tc">
      <Typography variant="h5" center>
        {fullName}
      </Typography>
      <Typography variant="s2" center color="gray">
        {position}
      </Typography>
      <GatsbyImage
        image={image}
        alt={fullName}
        objectFit="contain"
        className="image-tc"
      />
    </div>
  );
};
const WhoWeAre = ({ data }) => {
  const team = data.team.edges;
  return (
    <Layout>
      <PageHeader title="WHO WE ARE" index={1} />
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
            <StaticImage
              objectFit="cover"
              src="../images/mlabstaff.png"
              alt="mlab team"
            />
          </div>
        </div>
      </Section>
      <Section>
        {/* <SectionTitle>we believe</SectionTitle> */}
        <Typography variant="h2" center>
          When our youth are empowered, they create innovative solutions that
          drive our society.
        </Typography>
      </Section>
      <Section>
        <SectionTitle>what we do</SectionTitle>
        <div className="main-wwd-c">
          {data.whatWeDo.edges.map((card, i) => {
            const img = getImage(card.node.frontmatter.featureImage);
            return (
              <WhatWeDoCard
                title={card.node.frontmatter.title}
                description={card.node.excerpt}
                image={img}
              />
            );
          })}
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
          {team.map((t, i) => {
            const img = getImage(t.node.frontmatter.thumb);
            return (
              <TeamCard
                image={img}
                fullName={t.node.frontmatter.name}
                position={t.node.frontmatter.position}
              />
            );
          })}
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
          frontmatter {
            name
            position
            department
            location
            tags
            path
            thumb {
              childImageSharp {
                id
                gatsbyImageData(quality: 100, width: 1020)
              }
            }
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
