import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
	SectionContainer,
	VerticalContainer,
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
		<SectionContainer id="about" height="700px">
			<VerticalContainer>
				<h1>About</h1>

				<p
					css={css`
						margin: 5rem 0;
					`}
				>
					In short, I am an <Span3>architect</Span3> by training that found in{" "}
					<Span1>software development</Span1> an overdose of dopamine action
					potential. Made in Mexico City, ensambled in Sydney and with a strong
					interest on <Span1>data-driven-design</Span1>,{" "}
					<Span2>human-centric-design</Span2>, <Span3>machine learning</Span3>,{" "}
					<Span4>complex geometry</Span4> &amp; <Span1>UX design</Span1>.
				</p>
			</VerticalContainer>
		</SectionContainer>
	);
};

export default About;