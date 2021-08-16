import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import {
	SectionContainer,
	ColumnsContainer,
} from "../componentsStyled/containers";

const HeroBackgroundImage = styled(BackgroundImage)`
	height: 100vh;
	/* background-position: top center;
	background-attachment: scroll; */
	/* background-repeat: no-repeat;
	background-attachment: fixed; */
	/* -webkit-transform: translateZ(-999px);
	transform: translateZ(-999px);
	z-index: 3; */
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
		margin: 0px;
		line-height: 80%;
		transition: all 0.3s ease 0s;
	}

	.h1-left {
		text-align: left;
		margin: 0;
		transform: translateY(-210px);
		transition: all 0.5s ease 0s;
	}

	.h1-right {
		text-align: right;
		margin: 0;
		transform: translateY(320px);
		transition: all 0.5s ease 0s;
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
			margin-left: 0px;
			transform: translate(0px, 0px);
		}

		.h1-right {
			width: auto;
			text-align: right;
			margin-right: 0px;
			transform: translate(0px, 0px);
		}
	}

	/* Tablet */
	@media (min-width: 1100px) {
		.h1-left {
			margin-left: 100px;
		}

		.h1-right {
			margin-right: 100px;
		}
	}
`;

const HeroImage = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "HeroPicture.jpg" }) {
				sharp: childImageSharp {
					fluid(maxWidth: 2400, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	const imageRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			if (!imageRef) return;
			console.log(imageRef.current);
			console.log(window.pageYOffset);
			const factor = 0.5;
			const yvalue = factor * window.pageYOffset;
			// imageRef.current.imageRef.scrollTop = yvalue;
			// imageRef.current.imageRef.style.backgroundPosition =
			// 	"center " + yvalue + "px";
			imageRef.current.backgroundStyles.backgroundPosition =
				"center " + yvalue + "px";
			// imageRef.current.updater.enqueueForceUpdate();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<HeroBackgroundImage
			id="home"
			tag="section"
			alt="victor martinez"
			ref={imageRef}
			fluid={image.sharp.fluid}
			fadeIn="soft"
		>
			<SectionContainer id="home" bgColor="transparent" height="100vh">
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
