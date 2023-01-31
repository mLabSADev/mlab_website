import React, { useEffect } from "react";
import "./who-we-are.scss";
import Layout from "../components/ChatBot/ChatBot";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Typography from "../components/Typography/Typography";
import PageHeader from "../components/PageHeader/PageHeader";
import Button from "../components/Button/Button";

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
    <div className="wwd-c">
      <GatsbyImage
        objectFit="cover"
        image={image}
        className="image-c"
        alt={title}
      ></GatsbyImage>
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
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="card-tc">
      <GatsbyImage
        image={image}
        alt={fullName}
        objectFit="contain"
        className="image-tc"
      />
      <Typography capitalise={true} variant="h5" center>
        {capitalizeFirstLetter(fullName)}
      </Typography>
      <Typography variant="s2" center color="gray">
        {position}
      </Typography>
    </div>
  );
};
const WhoWeAre = ({ data }) => {
  const team = data.team.edges;
  const about = data.aboutMlab.html;
  return (
    <Layout>
      <PageHeader title="WHO WE ARE" index={1} />
      <Section>
        <div className="about-page">
          <div>
            <Typography variant="h4">About Us</Typography>
            <br></br>
            <br></br>
            <p dangerouslySetInnerHTML={{ __html: about }}></p>
            {/* <Typography variant="b1">{about}</Typography> */}
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
        <SectionTitle>our team</SectionTitle>
        <Typography variant="b1" center={true}>
          mLab has a staff complement of passionate and dynamic young
          individuals who are determined to drive and transform South Africa’s
          ICT sector.
        </Typography>
        <div className="our-team-wrapper">
          {team.map((t, i) => {
            const img = getImage(t.node.frontmatter.profilePicture);
            return (
              <TeamCard
                key={i}
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
