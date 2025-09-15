import React from "react";
import "./style.scss";
import { Container } from "@mui/material";
function Section(props) {
  return <Container>{props.children}</Container>;
}

export default Section;
