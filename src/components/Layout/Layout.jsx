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
import "./style.scss";
import Button from "../Button/Button";
const Layout = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const [formValues, setFormValues] = useState({
    company: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [sentStatus, setSentStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const open = () => setOpenForm(true);
  const close = () => setOpenForm(false);
  const postSubmit = () => {
    setStatusMessage("Thank you for your submission.");
    setSentStatus("success");
    setTimeout(() => {
      setSentStatus("");
    }, 2000);

    setFormValues({
      company: "",
      firstName: "",
      email: "",
      topic: "",
      message: "",
      enquiry: "",
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
                x: 90,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: 300,
                opacity: 0,
              }}
              className="feedback-ui"
            >
              <NetlifyForm
                formName="Floating Form"
                formValues={formValues}
                postSubmit={postSubmit}
                className="main-form"
              >
                <Typography variant="h4">Chat to us</Typography>
                <Typography variant="b2">
                  We'd love to hear from you.
                </Typography>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="enquiry">What's your enquiry?</InputLabel>
                  <Select
                    name="enquiry"
                    id="enquiry"
                    value={formValues.enquiry}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="company">Company</InputLabel>
                  <Input
                    id="company"
                    name="Company"
                    type="text"
                    value={formValues.company}
                    onChange={handleChange}
                  />
                </FormControl>
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
                  <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                  />
                </FormControl>
                <Button
                  label="Submit"
                  type="button"
                  variant="contained"
                  color="success"
                />
              </NetlifyForm>
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
