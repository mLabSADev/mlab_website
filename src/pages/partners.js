import React from "react";
import "./partners.scss";
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PageHeader from "../components/PageHeader/PageHeader";
import { StaticImage } from "gatsby-plugin-image";

const Partner = ({ image }) => {
  return;
};
const Partners = () => {
  return (
    <Layout>
      <PageHeader title="Partners" />
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
    </Layout>
  );
};

export default Partners;
