import React, { useState } from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Modal from "../components/Modal/Modal";
import Layout from "../components/Layout/Layout";
import { AnimatePresence } from "framer-motion";
import "./style.scss";
import Typography from "../components/Typography/Typography";

const WhatWeDo = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { stories, whatWeDo } = data;
  const close = () => setModalOpen(false);

  const open = () => setModalOpen(true);
  return <Layout>
    <Typography variant="h1">Hello</Typography>
  </Layout>;
};
export default WhatWeDo;
