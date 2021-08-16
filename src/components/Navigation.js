import React from "react";
// import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavStyled = styled.nav`
	display: flex;
	justify-content: center;
	padding-bottom: 0;
`;

const ANav = styled.a`
	color: var(--fore-primary-color);
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 1rem;
	text-decoration: none;
	padding: 1rem;
	margin-right: 1rem;

	&:last-of-type {
		margin-right: 0;
	}

	&.nav-page {
		&:hover {
			transition: all 0.3s ease 0;
			color: var(--primary-color);
		}
	}

	&.current-page {
		border-bottom: 2px solid var(--fore-primary-color);
	}
`;

const Navigation = () => {
	return (
		<NavStyled>
			<ANav href="/work" className={`nav-page`}>
				Work
			</ANav>

			<ANav href="/thoughts" className={`nav-page`}>
				Blog
			</ANav>

			<ANav href="/#contact" className={`nav-page`}>
				Let's Talk
			</ANav>
		</NavStyled>
	);
};

export default Navigation;
