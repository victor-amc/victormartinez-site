import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import {
	SectionContainer,
	ColumnsContainer,
} from "../componentsStyled/containers";

const HeroBackgroundImage = styled(BackgroundImage)`
	height: 900px;
`;

const UlHero = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	li {
		margin: 100px 0px;
	}

	h1 {
		font-size: 4rem;
		color: var(--primary-color);
		line-height: 80%;
		border-bottom: 4px solid var(--primary-color);
		transition: all 0.3s ease 0s;

		@media (min-width: 992px) {
			font-size: 5.8rem;
		}
	}

	.h1-left {
		text-align: left;
		transform: translateY(-210px);
	}

	.h1-right {
		text-align: right;
		transform: translateY(320px);
	}

	/* Desktop */
	@media (min-width: 768px) {
		h1 {
			width: 200px;
			word-wrap: normal;
			border-bottom: none;
		}

		li {
			margin: 0px;
		}

		.h1-left {
			width: auto;
			transform: translate(0px, 0px);
		}

		.h1-right {
			width: auto;
			text-align: right;
			transform: translate(0px, 0px);
		}
	}
`;

const HeroImage = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "HeroPicture.jpg" }) {
				sharp: childImageSharp {
					fluid(maxWidth: 1200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<HeroBackgroundImage
			id="home"
			tag="section"
			alt="victor martinez"
			fluid={image.sharp.fluid}
			fadeIn="soft"
		>
			<SectionContainer id="home" bgColor="transparent" height="100%">
				<ColumnsContainer>
					<UlHero>
						<li className="h1-left">
							<h1>Computational Designer</h1>
						</li>
						<li className="h1-right">
							<h1>Software Developer</h1>
						</li>
					</UlHero>
				</ColumnsContainer>
			</SectionContainer>
		</HeroBackgroundImage>
	);
};

export default HeroImage;
