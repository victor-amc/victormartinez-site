import React, { useEffect, useState, useMemo } from "react";
import Navigation from "./Navigation";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import IconVM from "../images/logo-vm.svg";

const LinkStyled = styled(Link)`
	color: var(--fore-primary-color);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-decoration: none;
`;

const HeaderStyled = styled.header`
	background-color: var(--back-primary-color);
	position: fixed;
	width: 100%;
	padding: 0rem;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
	box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

	-moz-transition: background-color 0.4s ease-in, box-shadow 0.4s ease-in;
	-webkit-transition: background-color 0.4s ease-in, box-shadow 0.4s ease-in;
	-o-transition: background-color 0.4s ease-in, box-shadow 0.4s ease-in;
	transition: background-color 0.4s ease-in, box-shadow 0.4s ease-in;

	&.container-transparent {
		background-color: transparent;
		box-shadow: 0px 0px 0px transparent;
	}
`;

const HeaderDiv = styled.div`
	margin: 0;
	width: min(80vw, 1200px);
	padding: 0rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const H1 = styled.h1`
	font-size: 1.2rem;
	font-family: var(--font-logo);
	font-weight: normal;
	margin: 0;
`;

const Logo = styled(IconVM)`
	width: 50px;
	height: 50px;
	padding: 0;
	margin: 0;
`;

const Header = ({ bgTransThreshold }) => {
	const [scrollOffset, setScrollOffset] = useState(0);
	bgTransThreshold = bgTransThreshold === undefined ? -1 : bgTransThreshold;

	useEffect(() => {
		const handleScroll = () => {
			setScrollOffset(window.pageYOffset);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isTransparent = useMemo(() => {
		return scrollOffset < bgTransThreshold;
	}, [scrollOffset, bgTransThreshold]);

	return (
		<HeaderStyled className={isTransparent && "container-transparent"}>
			<HeaderDiv>
				<LinkStyled to="/">
					<Logo />
					<H1>Victor Martinez</H1>
				</LinkStyled>

				<Navigation />
			</HeaderDiv>
		</HeaderStyled>
	);
};

export default Header;
