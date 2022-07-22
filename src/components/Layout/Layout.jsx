import React from "react";
import Navigation from "../Navigation/index";
import "./style.scss";
const Layout = (props) => {
  return (
    <div className="main-l">
      <Navigation />
      <div className="children-l">{props.children}</div>
    </div>
  );
};

export default Layout;
