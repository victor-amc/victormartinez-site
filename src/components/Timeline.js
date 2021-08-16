import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { SectionContainer } from "../componentsStyled/containers";
import TimelinePoint from "./TimelinePoint";
import { timelineData } from "./dataTemp";
import useInView from "../hooks/useInView";

const TimelineContainer = styled.div`
	height: auto;
	position: relative;
	padding: 80px 0;
	transition: 0.3s ease 0s;
	background-attachment: fixed;
	background-size: cover;
	z-index: 1;

	&:before {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(99, 99, 99, 0.8);
		content: "";
	}
`;

const TimelineHeader = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 6em;

	h2 {
		font-size: 2em;
		font-family: var(--font-alter);
		font-weight: normal;
	}

	h3 {
		color: rgba(255, 255, 255, 0.5);
		font-family: var(--font-special);
		font-size: 1em;
		letter-spacing: 5px;
		margin: 10px 0 0 0;
		font-weight: normal;
	}
`;

const TimelineDiv = styled.div`
	display: flex;
	margin: 0 auto;
	flex-wrap: wrap;
	flex-direction: column;
	max-width: min(80%, 1200px);
	position: relative;

	&:before {
		position: absolute;
		left: 50%;
		width: 2px;
		height: 100%;
		margin-left: -1px;
		content: "";
		background: rgba(255, 255, 255, 0.07);
	}

	@media only screen and (max-width: 768px) {
		&:before {
			left: 40px;
		}
	}
`;

const Timeline = () => {
	const threshold = [0, 0.1];
	const rootMargin = "500px 0px 0px 0px";

	const [setRefsInView, entries] = useInView({ rootMargin });
	const headerRef = useRef(null);

	useEffect(() => {
		setRefsInView([headerRef]);
	}, [headerRef]);

	//intersection observer
	useEffect(() => {
		entries.forEach((entry) => {
			console.log(entry);
			console.log(entry.intersectionRatio);
			console.log(entry.isIntersecting);
		});
	}, [entries]);

	return (
		<SectionContainer
			bgColor="var(--back-quaternary-color)"
			color="var(--back-primary-color)"
			height="auto"
			width="100%"
		>
			<TimelineContainer id="timeline">
				<TimelineHeader>
					<h1>Resume</h1>
					<h2>Victor Martinez</h2>
					<h3>Through Time</h3>
				</TimelineHeader>
				<TimelineDiv>
					{timelineData.map((timePoint) => {
						return <TimelinePoint key={timePoint.id} timePoint={timePoint} />;
					})}
				</TimelineDiv>
			</TimelineContainer>
		</SectionContainer>
	);
};

export default Timeline;
