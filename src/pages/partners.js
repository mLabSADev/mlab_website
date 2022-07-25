import React from "react";
import "./partners.scss";
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PageHeader from "../components/PageHeader/PageHeader";

const Partner = ({ image }) => {
  return <div className="partner-p"></div>;
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
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
        </div>
      </Section>
    </Layout>
  );
};

export default Partners;
