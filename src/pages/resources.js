import React, { useEffect } from "react";
import "./resources.scss";
import Layout from "../components/ChatBot/ChatBot";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
import Publication from "../components/Publication/Publication";
import Typography from "../components/Typography/Typography";
import { graphql } from "gatsby";
// import { Helmet } from "react-helmet";
const Resources = ({ data }) => {
  const resources = data.resources.edges;
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
    <Layout>
      {/* <Helmet title={'mLab | Resources'} /> */}
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
        <div className="publications">
          <div className="pub-title">
            <Typography variant="s1">Extra Publications</Typography>
          </div>
          <div className="pub-wrapper">
            {resources.map((resource, i) => {
              const { title, link } = resource.node.frontmatter;
              if (link) {
                return <Publication key={i} title={title} url={link} />;
              }
            })}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Resources;
export const query = graphql`
  query ResourcesQuery {
    resources: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(resources)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
          }
        }
      }
    }
  }
`;
