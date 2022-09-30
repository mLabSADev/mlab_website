import React, { useState } from "react";
import "./contact.scss";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
import Typography from "../components/Typography/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "../components/Button/Button";
import NetlifyForm from "react-ssg-netlify-forms";
import { navigate } from "gatsby";
import Modal from "../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
export const SignupForm = (main) => {
  const [sentStatus, setSentStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.firstName) {
  //     errors.firstName = "Required";
  //   } else if (values.firstName.length > 15) {
  //     errors.firstName = "Must be 15 characters or less";
  //   }

  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }
  //   if (!values.topic) {
  //     errors.topic = "Required";
  //   } else if (values.topic.length > 30) {
  //     errors.topic = "Must be 30 characters or less";
  //   }

  //   if (!values.message) {
  //     errors.message = "Required";
  //   } else if (values.message.length > 500) {
  //     errors.message = "Must be 500 characters or less";
  //   }
  //   return errors;
  // };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(e.target.name);
    if (e.target.name === "email") {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)
      ) {
        setStatusMessage("");
        setSentStatus("");
      } else {
        setStatusMessage("Email is invalid");

        setSentStatus("error");
      }
    }
  };

  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    topic: "",
    message: "",
  });
  const close = () => setModalOpen(false);

  // const open = () => setModalOpen(true);
  const postSubmit = () => {
    if (main) {
      setStatusMessage("Thank you for your submission.");
      setSentStatus("success");
      setTimeout(() => {
        setSentStatus("");
      }, 2000);
    }
    setFormValues({
      firstName: "",
      email: "",
      topic: "",
      message: "",
    });
  };
  return (
    <NetlifyForm
      formName="Very Simple Form"
      formValues={formValues}
      postSubmit={postSubmit}
      className="main-form"
    >
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <div>
              <Typography variant="h5">Success</Typography>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <FormControl fullWidth>
        <InputLabel htmlFor="firstName">Full Name</InputLabel>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          value={formValues.firstName}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="topic">Subject</InputLabel>
        <Input
          id="topic"
          name="topic"
          type="text"
          value={formValues.topic}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        {" "}
        <InputLabel htmlFor="message">Message</InputLabel>
        <Input
          multiline={true}
          minRows={3}
          maxRows={10}
          id="message"
          name="message"
          type="text"
          value={formValues.message}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        label="Submit"
        type="button"
        variant="contained"
        color="success"
      />
      {sentStatus && (
        <div className={`form-message status-${sentStatus}`}>
          <Typography variant="b2" color="light">
            {statusMessage}
          </Typography>
        </div>
      )}
    </NetlifyForm>
  );
};

const Contact = ({ data }) => {
  const locations = data.allMarkdownRemark.edges;
  const contactUs = data.site.siteMetadata;
  return (
    <Layout>
      <PageHeader index={6} title="Contact Us" />
      <Section>
        <div className="form-wraper">
          <div className="form-details">
            <div>
              <Typography variant="h4">Contact Us</Typography>
              <Typography variant="b1">
                Our Labs are dedicated spaces that provide a range of services
                to entrepreneurs, innovators, makers, developers and digital
                creatives through our different programmes. We also host a
                number of partner events, workshops and training within our labs
                and technology partners can select to run mLab facilitated
                activities or simply work with our events team to assist with
                setup and arrangements.{" "}
              </Typography>
            </div>

            <div>
              <Typography variant="h5">Address</Typography>
              <Typography variant="b2">{contactUs.address}</Typography>
            </div>
            <div>
              <Typography variant="h5">Phone</Typography>
              <Typography variant="b2">{contactUs.telephone}</Typography>
            </div>
          </div>
          <div className="main-form">
            <Typography variant="h4">Email Us</Typography>
            <Typography variant="b1">We'd love to hear from you</Typography>
            <SignupForm main={true} />
          </div>
        </div>
      </Section>
      {locations.map((l, i) => {
        const image = getImage(l.node.frontmatter.featureImage);
        return (
          <Section>
            <div className="locaton-wrapper">
              <GatsbyImage
                alt={l.node.frontmatter.city}
                image={image}
                className="location-image"
              ></GatsbyImage>
              <div className="location-details">
                <Typography variant="h3">
                  mLab | {l.node.frontmatter.province}
                </Typography>
                <Typography variant="s2">{l.node.frontmatter.city}</Typography>
                <br></br>
                <p dangerouslySetInnerHTML={{ __html: l.node.html }} />
                <br></br>
                <br></br>
                <iframe
                  title="location-map"
                  className="map-locations"
                  src={l.node.frontmatter.location}
                  width="100%"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Section>
        );
      })}
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query ContactUs($title: String = "Contact Us") {
    site(siteMetadata: {}) {
      siteMetadata {
        address
        telephone
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(locations)/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            city
            location
            programmes
            province
            tel
            email
            physicalAddress
            featureImage {
              name
              childImageSharp {
                id
                gatsbyImageData(
                  formats: [AUTO, WEBP]
                  width: 1920
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        abstract
      }
    }
  }
`;
