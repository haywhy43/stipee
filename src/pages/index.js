import React from "react";
import Layout from "../components/layout";
import Header from "../components/pages/Home/Header";
import Info from "../components/pages/Home/Info";
import Features from "../components/pages/Home/Features";

export default function Home() {
  return (
    <Layout border="0px 1px 0px rgba(250, 170, 49, 0.5)">
      <Header />
      <Info />
      <Features />
    </Layout>
  );
}
