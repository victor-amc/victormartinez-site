import React from "react";
import Navigation from "./Navigation";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const LinkStyled = styled(Link)`
	color: var(--fore-primary-color);
	text-align: center;
	text-decoration: none;
`;

const HeaderStyled = styled.header`
	background-color: transparent;
	position: fixed;
	width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

const HeaderDiv = styled.div`
	width: min(80vw, 1200px);
	padding: 1rem;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const H1 = styled.h1`
	font-family: "Bebas Neue", sans-serif;
	font-size: 2.5rem;
	padding: 0rem 1.5rem 0 1.5rem;
	border-bottom: 4px solid var(--fore-primary-color);
	padding: 0;
	margin: 0 0 0 0;

	span {
		color: var(--primary-color);
	}
`;

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderDiv>
				<LinkStyled to="/">
					<H1>
						Victor <span>Martinez</span>
					</H1>
				</LinkStyled>

				<Navigation />
			</HeaderDiv>
		</HeaderStyled>
	);
};

export default Header;
