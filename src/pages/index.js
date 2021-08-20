import * as React from "react";

import Layout from "../components/Layout";
import HeroImage from "../components/HeroImage";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";

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
