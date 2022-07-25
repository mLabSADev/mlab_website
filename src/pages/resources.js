import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
import Modal from "../components/Modal/Modal";
import Typography from "../components/Typography/Typography";
import "./resources.scss";
import { AnimatePresence, motion } from "framer-motion";
const Resources = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  //   onClick={() => (modalOpen ? close() : open())}
  return (
    <Layout>
      <PageHeader title="resources" />
      <Section>
        <iframe
          className="mlab-report"
          src="https://online.fliphtml5.com/cloph/uyxw/#p=1"
          title="mlab"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Section>
    </Layout>
  );
};

export default Resources;
