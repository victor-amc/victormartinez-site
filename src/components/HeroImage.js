import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const BackgroundImageStyled = styled(BackgroundImage)`
	height: 900px;
`;

const ImageDiv = styled.div`
	width: min-content(80%, 1200px);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	ul {
		width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	li {
		margin: 100px 50px;
	}

	h1 {
		font-size: 4rem;
		color: var(--primary-color);
		line-height: 80%;
		border-bottom: 4px solid var(--primary-color);

		@media (min-width: 992px) {
			font-size: 5.8rem;
		}
	}

	.h1-left {
		text-align: left;
		transform: translate(-100px, -150px);
	}

	.h1-right {
		text-align: right;
		transform: translate(130px, 250px);
	}

	@media (min-width: 768px) {
		ul {
			flex-direction: row;
			justify-content: space-between;
		}

		h1 {
			width: 200px;
			word-wrap: normal;
			border-bottom: none;
		}

		li {
			margin: 0px 50px;
		}

		.h1-left {
			transform: translate(0px, 0px);
		}

		.h1-right {
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
		<BackgroundImageStyled
			tag="section"
			alt="victor martinez"
			fluid={image.sharp.fluid}
			fadeIn="soft"
		>
			<ImageDiv>
				<ul>
					<li>
						<h1 className="h1-left">Computational Designer</h1>
					</li>
					<li>
						<h1 className="h1-right">Software Developer</h1>
					</li>
				</ul>
			</ImageDiv>
		</BackgroundImageStyled>
	);
};

export default HeroImage;
