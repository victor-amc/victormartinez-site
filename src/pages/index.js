import * as React from "react";

import Layout from "../components/Layout";
import HeroImage from "../components/HeroImage";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
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
			<About />
			<Timeline />
			<Skills />
		</Layout>
	);
};

export default IndexPage;
