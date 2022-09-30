import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/index";
import Typography from "../Typography/Typography";
import NetlifyForm from "react-ssg-netlify-forms";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Button from "../Button/Button";

export const ChatForm = ({ formState }) => {
  const [sentStatus, setSentStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [enquiry, setInquiry] = useState([]);
  const [formValues, setFormValues] = useState({
    company: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const postSubmit = () => {
    setStatusMessage("Thank you for your submission.");
    setSentStatus("success");
    setTimeout(() => {
      setSentStatus("");
      formState();
    }, 2000);

    setFormValues({
      company: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };
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
  return (
    <NetlifyForm
      formName="Floating Form"
      formValues={formValues}
      postSubmit={postSubmit}
      className="main-form"
    >
      <Typography variant="h4">Chat to us</Typography>
      <Typography variant="b2">We'd love to hear from you.</Typography>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="enquiry">How can we help you?</InputLabel>
        <Select
          name="enquiry"
          id="enquiry"
          value={formValues.enquiry}
          onChange={handleChange}
        >
          <StaticQuery
            query={graphql`
              query Enquiry {
                q: allMarkdownRemark(
                  filter: {
                    fileAbsolutePath: { regex: "/(partnershipContacts)/" }
                  }
                ) {
                  edges {
                    node {
                      frontmatter {
                        enquiry
                        contact
                      }
                    }
                  }
                }
              }
            `}
            render={(data) => {
              setInquiry(data.q.edges);
            }}
          />
          {enquiry.map((node, i) => (
            <MenuItem key={i} value={node.node.frontmatter.contact}>
              {node.node.frontmatter.enquiry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="company">Company</InputLabel>
        <Input
          id="company"
          name="company"
          type="text"
          value={formValues.company}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="firstName">Full Name</InputLabel>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          value={formValues.firstName}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="message">Message</InputLabel>
        <Input
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
const Layout = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const open = () => setOpenForm(true);
  const close = () => setOpenForm(false);

  return (
    <div className="main-l">
      <Navigation />
      <div className="children-l">
        {props.children}
        <Footer />
      </div>

      <div className="feedback-ui-button">
        <AnimatePresence>
          {openForm && (
            <motion.div
              initial={{
                x: 500,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: 900,
                opacity: 0,
              }}
              className="feedback-ui"
            >
              <ChatForm formState={() => close()} />
            </motion.div>
          )}
        </AnimatePresence>
        {openForm ? (
          <StaticImage
            class="chat-icon"
            src="../../images/icons/close-chat-icon.png"
            alt="chat icon"
          />
        ) : (
          <StaticImage
            class="chat-icon"
            src="../../images/icons/chat-icon.png"
            alt="chat icon"
          />
        )}
        <div
          onClick={() => {
            if (openForm) {
              close();
            } else {
              open();
            }
          }}
          className={openForm ? "chat-label-show" : "chat-label-show"}
        >
          {" "}
          <Typography color="light" variant="b2">
            {openForm ? "close" : "Chat to us"}{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Layout;
