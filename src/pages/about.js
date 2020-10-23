import React from "react";
import Layout from "../components/layout";
import Header from "../components/pages/About/Header";
import Objective from "../components/pages/About/Objective";
import Team from "../components/pages/About/Team";
import Values from "../components/pages/About/Values";

export default function About() {
  return (
    <Layout>
      <Header />
      <Objective />
      <Team />
      <Values />
    </Layout>
  );
}
