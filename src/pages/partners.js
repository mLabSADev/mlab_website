import React, { useEffect } from "react";
import "./partners.scss";
import Layout from "../components/ChatBot/ChatBot";
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PageHeader from "../components/PageHeader/PageHeader";
import { graphql } from "gatsby";
// import { Helmet } from "react-helmet";

const Partners = ({ data }) => {
  const partners = data.partners;
  const provincialPartners = data.provincialPartners.edges;
  const foundingPartners = data.provincialPartners.edges;
  useEffect(() => {
    console.log(foundingPartners);
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
    <Layout>
      {/* <Helmet title={"mLab | Partners"} /> */}
      <PageHeader title="Partners" index={3} />
      <Section>
        <SectionTitle>Founding Partners</SectionTitle>
      </Section>
      <Section>
        <div className="list-partners">
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/worldbank_logo.jpg"
            alt=""
            className="partner-p"
          ></StaticImage>
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/ministry.png"
            alt=""
            className="partner-p"
          ></StaticImage>
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/DSI-Logo.png"
            alt=""
            className="partner-p"
          ></StaticImage>
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/csir_logo.jpg"
            alt=""
            className="partner-p"
          ></StaticImage>
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/the-innovation-hub_1_orig.png"
            alt=""
            className="partner-p"
          ></StaticImage>
        </div>
      </Section>
      {/* <SectionTitle>Provincial Partners</SectionTitle> */}
      {/* <Section>
        <div className="list-partners">
          {provincialPartners.map((item, i) => {
            let name = item.node.frontmatter.name;
            let image = getImage(item.node.frontmatter.thumb);
            return (
              <GatsbyImage
                // style={{ width: "500px" }}
                objectFit="contain"
                className="partner-p"
                image={image}
                alt={name}
              />
            );
          })}
        </div>
      </Section> */}
      <Section>
        <div
          className="partners-main"
          dangerouslySetInnerHTML={{ __html: partners.html }}
        />
      </Section>
    </Layout>
  );
};

export default Partners;
export const query = graphql`
  query PartnersQuery {
    partners: markdownRemark(
      fileAbsolutePath: { regex: "/(mcollaboration)/" }
    ) {
      html
    }
    provincialPartners: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(provincial-partners)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            thumb {
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
        }
      }
    }
    foundingPartners: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(founding-partners)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            thumb {
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
        }
      }
    }
  }
`;
