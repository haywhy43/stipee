import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Container = styled.div``;

export default function Home() {
  return (
    <Layout>
      <Container>
        <p className="text-lg">Hello world!</p>
      </Container>
    </Layout>
  );
}
