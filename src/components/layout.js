import React from "react";
import Header from "./header";
import ExtraInfo from "./content/ExtraInfo";

import "../assets/styles/tailwind.css";
import "../assets/styles/font.css";
import "../assets/styles/animation.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ExtraInfo />
    </>
  );
};

export default Layout;
