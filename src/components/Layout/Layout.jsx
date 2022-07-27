import React from "react";
import { store } from "../../redux/store";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/index";

import "./style.scss";
const Layout = (props) => {
  return (
    <div className="main-l">
      <Navigation />
      <div className="children-l">
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
