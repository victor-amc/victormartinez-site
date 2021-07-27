import React, { useEffect, useState, useMemo } from "react";
import Navigation from "./Navigation";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const LinkStyled = styled(Link)`
	color: var(--fore-primary-color);
	text-align: center;
	text-decoration: none;
`;

const HeaderStyled = styled.header`
	background-color: var(--back-primary-color);
	position: fixed;
	width: 100%;
	padding: 1rem;
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
		box-shadow: 0px 0px 0px rgba(250, 250, 250, 0);
	}
`;

const HeaderDiv = styled.div`
	margin: 0;
	width: min(80vw, 1200px);
	padding: 1rem;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const H1 = styled.h1`
	font-size: 2.5rem;
	padding: 0rem 1.5rem 0 1.5rem;
	border-bottom: 4px solid var(--fore-primary-color);
	padding: 0;
	margin: 0 0 0 0;

	span {
		color: var(--primary-color);
	}
`;

const Header = ({ bgTransThreshold }) => {
	// const threshold = [0, 0.1];
	// const rootMargin = "500px 0px 0px 0px";

	// const [setRefsInView, entries] = useInView({ rootMargin });
	// const headerRef = useRef(null);

	// useEffect(() => {
	// 	setRefsInView([headerRef]);
	// }, [headerRef]);

	// //intersection observer
	// useEffect(() => {
	// 	entries.forEach((entry) => {
	// 		console.log(entry);
	// 		console.log(entry.intersectionRatio);
	// 		console.log(entry.isIntersecting);
	// 	});
	// }, [entries]);

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
