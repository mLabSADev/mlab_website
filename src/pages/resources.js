import React from "react";
import "./resources.scss";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
import Publication from "../components/Publication/Publication";
import Typography from "../components/Typography/Typography";
const Resources = () => {
  const pubs = [
    {
      title: "mPact Report 2020",
      link: "https://drive.google.com/file/d/18mpxYRHAA_c-kf-Ge3eH7JGMmAMqnP94/view?usp=sharing",
    },
    {
      title: "Summary Economic Impact Assessment (TBC)",
      link: "",
    },
    {
      title: "do mLabs make a difference (World Bank Report)",
      link: "https://drive.google.com/file/d/1IdNp195GKrTRIFfNeBitmIxqDfD8MZHS/view?usp=sharing",
    },
    {
      title: "do mLabs make a difference",
      link: "https://drive.google.com/file/d/1ytVoAwtKUJem3EoJXmlDWj_w3zYEnRdL/view?usp=sharing",
    },
  ];
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
        <div className="publications">
          <div className="pub-title">
            <Typography variant="s1">Extra Publications</Typography>
          </div>
          <div className="pub-wrapper">
            {pubs.map((p, i) => (
              <Publication key={i} title={p.title} url={p.link} />
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Resources;
