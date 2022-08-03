import React from "react";
import "./resources.scss";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
const Resources = () => {
  return (
    <Layout>
      <PageHeader index={5} title="resources" />
      <Section>
        <iframe
          className="mlab-report"
          src="https://online.fliphtml5.com/cloph/uyxw/#p=1"
          title="mlab"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Section>
    </Layout>
  );
};

export default Resources;
