import React from "react";
import Header from "./header";
import ExtraInfo from "./content/ExtraInfo";
import Footer from "./content/Footer";

import "../assets/styles/tailwind.css";
import "../assets/styles/font.css";
import "../assets/styles/animation.css";

const Layout = ({ children, alt }) => {
  return (
    <>
      <Header />
      {children}
      {!alt ? (
        <>
          <ExtraInfo />
          <div className="border-t border-abstract w-full my-16"></div>
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default Layout;
