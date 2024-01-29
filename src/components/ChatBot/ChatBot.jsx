import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../NewsCard/Navigation/index";
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

export const ChatBot = ({ formState }) => {
  const [sentStatus, setSentStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [enquiry, setInquiry] = useState([]);
  const [enlarge, setEnlarge] = useState(false);
  const maximize = () => setEnlarge(true);
  const minimize = () => setEnlarge(false);
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
    <iframe
      style={{
        width: "100%",
        height: 500,
        border: "none",
      }}
      src="https://mlab-chatbot.web.app"
    ></iframe>
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

      <div
        className="feedback-ui-button"
        onClick={() => {
          if (openForm) {
            close();
          } else {
            open();
          }
        }}
      >
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
              <ChatBot formState={() => close()} />
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
        <div className={openForm ? "chat-label-show" : "chat-label-show"}>
          <Typography color="light" variant="b2">
            {openForm ? "close" : "Chat to us"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Layout;
