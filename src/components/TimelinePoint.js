import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const LinkStyled = styled(Link)`
	color: var(--primary-color);
	text-align: center;
	text-decoration: none;
`;

const TimelineItem = styled.div`
	padding: 40px 0;
	opacity: 0.3;
	filter: blur(2px);
	transition: 0.5s;
	box-sizing: border-box;
	width: calc(50% - 40px);
	display: flex;
	flex-direction: column;
	position: relative;
	transform: translateY(-80px);

	&:before {
		content: attr(data-text);
		letter-spacing: 3px;
		width: 100%;
		position: absolute;
		color: rgba(255, 255, 255, 0.5);
		font-size: 13px;
		font-family: var(--font-special);
		border-left: 2px solid rgba(255, 255, 255, 0.5);
		top: 70%;
		margin-top: -5px;
		padding-left: 15px;
		opacity: 0;
		right: calc(-100% - 56px);
	}

	&:nth-of-type(even) {
		align-self: flex-end;
	}

	&:nth-of-type(even):before {
		right: auto;
		text-align: right;
		left: calc(-100% - 56px);
		padding-left: 0;
		border-left: none;
		border-right: 2px solid rgba(255, 255, 255, 0.5);
		padding-right: 15px;
	}

	.timeline-item-active {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0px);

		&:before {
			top: 50%;
			transition: 0.3s all 0.2s;
			opacity: 1;
		}

		h1 {
			margin: -50px 0 20px 0;
		}
	}

	@media only screen and (max-width: 768px) {
		align-self: baseline !important;
		width: 100%;
		padding: 0 30px 150px 80px;

		&:before {
			left: 10px !important;
			padding: 0 !important;
			top: 50px;
			text-align: center !important;
			width: 60px;
			border: none !important;
		}

		&:last-child {
			padding-bottom: 40px;
		}
	}
`;

const TimelineItemTitle = styled.div`
	box-sizing: border-box;
	font-family: var(--font-special);
	margin-bottom: 5px;

	h1 {
		font-weight: normal;
		font-size: 8rem;
		transition: 0.4s;
		color: var(--back-primary-color);
	}

	h2 {
		margin-bottom: 0.2em;
		text-transform: uppercase;
		color: var(--back-primary-color);
	}
`;

const TimelineItemContent = styled.div`
	font-family: var(--font-alter);

	img {
		max-width: 100%;
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
	}

	p {
		margin-bottom: 0.8em;
		box-sizing: border-box;
		color: var(--back-primary-color);
		font-weight: normal;
		line-height: 25px;
	}

	ul {
		font-size: 0.8em;
		font-style: italic;
		list-style: disc;

		li {
			margin-left: 1.5em;
		}
	}
`;

const TimelinePoint = ({ timePoint }) => {
	const { period, company, title, description, duties, image, links } =
		timePoint;

	const [arrayDuties, setArrayDuties] = useState([]);

	useEffect(() => {
		let aDuties = duties.split(";");
		if (
			aDuties.length > 1 ||
			(aDuties.length === 1 && aDuties[0].trim() !== "")
		)
			setArrayDuties(aDuties);
	}, [duties]);

	return (
		<TimelineItem data-text={company}>
			<TimelineItemTitle>
				<h1>{period}</h1>
				<h2>{title}</h2>
			</TimelineItemTitle>

			<TimelineItemContent>
				<p>{description}</p>

				{arrayDuties.length > 0 ? (
					<ul>
						<span>Duties:</span>
						{arrayDuties.map((duty, i) => {
							return <li key={i}>{duty}</li>;
						})}
					</ul>
				) : null}

				{/* <ul>
					{links.forEach((link, i) => {
						<li>
							<LinkStyled key={i} to={link}>
								Link
							</LinkStyled>
							;
						</li>;
					})}
				</ul> */}
			</TimelineItemContent>
		</TimelineItem>
	);
};

export default TimelinePoint;
