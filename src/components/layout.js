import React from "react";
import Header from "./header";
import ExtraInfo from "./content/ExtraInfo";
import Footer from "./content/Footer";

import "../assets/styles/tailwind.css";
import "../assets/styles/font.css";
import "../assets/styles/animation.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ExtraInfo />
      <div className="border-t border-abstract w-full my-16"></div>
      <Footer />
    </>
  );
};

export default Layout;
