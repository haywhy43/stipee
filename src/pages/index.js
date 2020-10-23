import React from "react";
import Layout from "../components/layout";
import Header from "../components/pages/Home/Header";
import Info from "../components/pages/Home/Info";
import Features from "../components/pages/Home/Features";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Info />
      <Features />
    </Layout>
  );
}
