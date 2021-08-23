import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { SectionContainer } from "../componentsStyled/containers";
import TimelinePoint from "./TimelinePoint";
import { graphql, useStaticQuery } from "gatsby";

const TimelineContainer = styled.div`
	height: auto;
	position: relative;
	padding: 80px 0;
	transition: 0.3s ease 0s;
	background-attachment: fixed;
	background-size: cover;
	z-index: 1;

	//gray mask
	&:before {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(99, 99, 99, 0.6);
		content: "";
	}
`;

const TimelineHeader = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 10em;

	h1 {
		color: var(--back-primary-font);
		font-size: 1.5em;
		letter-spacing: 5px;
		margin: 0 0 0 0;
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

	//timeline guide
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
	const timelineContent = useStaticQuery(graphql`
		query {
			allDatoCmsTimepoint(sort: { order: DESC, fields: period }) {
				nodes {
					company
					description
					duties
					id
					period
					title
					other {
						blocks
						links
						value
					}
					images {
						fluid {
							...GatsbyDatoCmsFluid
						}
					}
				}
			}
		}
	`);

	const dataTimeline = timelineContent.allDatoCmsTimepoint.nodes;
	console.log(dataTimeline);

	return (
		<SectionContainer
			bgColor="var(--back-quaternary-color)"
			color="var(--back-primary-color)"
			height="auto"
			width="100%"
		>
			<TimelineContainer id="timeline">
				<TimelineHeader>
					<h1>Through Time</h1>
				</TimelineHeader>
				<TimelineDiv>
					{dataTimeline.map((timePoint) => {
						return <TimelinePoint key={timePoint.id} timePoint={timePoint} />;
					})}
				</TimelineDiv>
			</TimelineContainer>
		</SectionContainer>
	);
};

export default Timeline;
