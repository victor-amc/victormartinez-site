import React from "react";
import styled from "@emotion/styled";
import {
	SectionContainer,
	VerticalContainerWidth,
} from "../componentsStyled/containers";

const Span1 = styled.span`
	color: var(--primary-color);
	opacity: 1;
`;

const Span2 = styled.span`
	color: var(--primary-color);
	opacity: 0.8777;
`;

const Span3 = styled.span`
	color: var(--primary-color);
	opacity: 0.6333;
`;

const Span4 = styled.span`
	color: var(--primary-color);
	opacity: 0.5;
`;

const About = () => {
	return (
		<SectionContainer id="about" height="100vh">
			<VerticalContainerWidth maxWidth="700px">
				<h1>About</h1>

				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					Salutations! I am an <Span3>architect</Span3> by training that
					discover in <Span1>software development</Span1> resourceful quantities
					of dopamine. Made in Mexico City, ensambled in Sydney and with a
					strong interest on <Span1>data-driven-design</Span1>,{" "}
					<Span2>human-centric-design</Span2>, <Span3>machine learning</Span3>,{" "}
					<Span4>complex geometry</Span4> &amp; <Span1>UX design</Span1>.
				</p>
			</VerticalContainerWidth>
		</SectionContainer>
	);
};

export default About;
