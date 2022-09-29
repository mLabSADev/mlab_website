import React from "react";
import "./partners.scss";
import Layout from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PageHeader from "../components/PageHeader/PageHeader";
import { graphql } from "gatsby";
const Partners = ({ data }) => {
  const partners = data.partners;
  console.log(partners);
  return (
    <Layout>
      <PageHeader title="Partners" index={3} />
      <Section>
        <SectionTitle>Founding Partners</SectionTitle>
      </Section>
      <Section>
        <div className="list-partners">
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/science-and-tech.png"
            alt=""
            className="partner-p"
          ></StaticImage>
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/arc.png"
            alt=""
            className="partner-p"
          ></StaticImage>
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/csir.png"
            alt=""
            className="partner-p"
          ></StaticImage>
          <StaticImage
            objectFit="contain"
            src="../images/active-partners/infoDev.png"
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
            src="../images/active-partners/tech-innovation.png"
            alt=""
            className="partner-p"
          ></StaticImage>
        </div>
      </Section>
      <Section>
        <div className="partners-main" dangerouslySetInnerHTML={{ __html: partners.html }} />
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
  }
`;
