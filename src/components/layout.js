import React from "react";
import Header from "./header";

import "../assets/styles/tailwind.css";
import "../assets/styles/font.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
