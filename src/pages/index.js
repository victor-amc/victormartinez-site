import * as React from "react";

import Layout from "../components/Layout";
import HeroImage from "../components/HeroImage";
import Timeline from "../components/Timeline";
import styled from "@emotion/styled";

const H2 = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-size: 3rem;
`;

const IndexPage = () => {
  return (
    <Layout title="Victor Martinez">
      <HeroImage />
      <Timeline />
      <H2>Test</H2>
    </Layout>
  );
};

export default IndexPage;
