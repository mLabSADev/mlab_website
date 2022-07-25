import React from "react";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import Section from "../components/Section/Section";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Typography from "../components/Typography/Typography";
import { graphql } from "gatsby";

import { Formik } from "formik";
import "./contact.scss";
function contact({ data }) {
  const locations = data.allMarkdownRemark.edges;
  console.log(locations);
  return (
    <Layout>
      <PageHeader title="Contact Us" />
      <Section>
        <div className="form-wraper">
          <div className="form-details">
            <Typography variant="h4">Contact Us</Typography>
            <div>
              <Typography variant="h5">Our Addresses</Typography>
              <Typography variant="b2">Our Addresses</Typography>
            </div>
            <div>
              <Typography variant="h5">Our Addresses</Typography>
              <Typography variant="b2">Our Addresses</Typography>
            </div>
          </div>
          <div className="main-form">
            <Typography variant="h4">Contact Us</Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
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
}

export default contact;

export const query = graphql`
  query ContactUs($title: String = "Contact Us") {
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
