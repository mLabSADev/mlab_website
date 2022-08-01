import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Typography from "../components/Typography/Typography";
import { graphql } from "gatsby";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import "./contact.scss";
// import * as sgMail from "@sendgrid/mail";
const { SENDGRID_API } = require("../../keys");
// sgMail.setApiKey(SENDGRID_API);
const SignupForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.topic) {
      errors.topic = "Required";
    } else if (values.topic.length > 30) {
      errors.topic = "Must be 30 characters or less";
    }

    if (!values.message) {
      errors.message = "Required";
    } else if (values.message.length > 500) {
      errors.message = "Must be 500 characters or less";
    }
    return errors;
  };

  const PostData = (val) => {
    const send = {
      To: "keketsomatsuma88@gmail.com",
      from: val.email,
      subject: val.topic,
      text: val.message,
    };
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      topic: "",
      message: "",
    },
    validate,
    onSubmit: async (val) => {
      console.log(val);
    },
  });

  return (
    <form className="form-formik" onSubmit={formik.handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="firstName">Full Name</InputLabel>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? (
          <Typography variant="caption" color="gray">
            {formik.errors.firstName}
          </Typography>
        ) : null}
      </FormControl>

      <FormControl>
        {" "}
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <Typography variant="caption" color="gray">
            {formik.errors.email}
          </Typography>
        ) : null}
      </FormControl>
      <FormControl>
        {" "}
        <InputLabel htmlFor="topic">Topic</InputLabel>
        <Input
          id="topic"
          name="topic"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.topic}
        />
        {formik.errors.topic ? (
          <Typography variant="caption" color="gray">
            {formik.errors.topic}
          </Typography>
        ) : null}
      </FormControl>
      <FormControl>
        {" "}
        <InputLabel htmlFor="message">Message</InputLabel>
        <Input
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.errors.mesWsage ? (
          <Typography variant="caption" color="gray">
            {formik.errors.message}
          </Typography>
        ) : null}
      </FormControl>
      <Button type="submit" variant="contained" color="success">
        Submit
      </Button>
    </form>
  );
};

const Contact = ({ data }) => {
  const locations = data.allMarkdownRemark.edges;
  const contactUs = data.site.siteMetadata;
  return (
    <Layout>
      <PageHeader title="Contact Us" />
      <Section>
        <div className="form-wraper">
          <div className="form-details">
            <Typography variant="h4">Contact Us</Typography>
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
            <Typography variant="h4">We'd love to hear from you</Typography>
            <SignupForm />
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
                  mLab | {l.node.frontmatter.city}
                </Typography>
                <Typography variant="s2">
                  {l.node.frontmatter.province}
                </Typography>
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
                  allowFullScreen=""
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
          fields {
            slug
          }
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
                gatsbyImageData(formats: [AUTO, WEBP], width: 350)
              }
            }
            image
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
