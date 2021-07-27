import React from "react";
import styled from "@emotion/styled";
import { SectionContainer } from "../componentsStyled/containers";

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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TimelineDiv = styled.div`
	background-color: yellow;
	display: flex;
	margin: 0 auto;
	flex-wrap: wrap;
	flex-direction: column;
	max-width: min(80%, 1200px);
	position: relative;

	.timeline__content-title {
		font-weight: normal;
		font-size: 66px;
		margin: -10px 0 0 0;
		transition: 0.4s;
		padding: 0 10px;
		box-sizing: border-box;
		font-family: "Pathway Gothic One", sans-serif;
		color: #fff;
	}
	.timeline__content-desc {
		margin: 0;
		font-size: 15px;
		box-sizing: border-box;
		color: rgba(255, 255, 255, 0.7);
		font-family: Cardo;
		font-weight: normal;
		line-height: 25px;
	}
	.timeline:before {
		position: absolute;
		left: 50%;
		width: 2px;
		height: 100%;
		margin-left: -1px;
		content: "";
		background: rgba(255, 255, 255, 0.07);
	}
	@media only screen and (max-width: 767px) {
		.timeline:before {
			left: 40px;
		}
	}
	.timeline-item {
		padding: 40px 0;
		opacity: 0.3;
		filter: blur(2px);
		transition: 0.5s;
		box-sizing: border-box;
		width: calc(50% - 40px);
		display: flex;
		position: relative;
		transform: translateY(-80px);
	}
	.timeline-item:before {
		content: attr(data-text);
		letter-spacing: 3px;
		width: 100%;
		position: absolute;
		color: rgba(255, 255, 255, 0.5);
		font-size: 13px;
		font-family: "Pathway Gothic One", sans-serif;
		border-left: 2px solid rgba(255, 255, 255, 0.5);
		top: 70%;
		margin-top: -5px;
		padding-left: 15px;
		opacity: 0;
		right: calc(-100% - 56px);
	}
	.timeline-item:nth-of-type(even) {
		align-self: flex-end;
	}
	.timeline-item:nth-of-type(even):before {
		right: auto;
		text-align: right;
		left: calc(-100% - 56px);
		padding-left: 0;
		border-left: none;
		border-right: 2px solid rgba(255, 255, 255, 0.5);
		padding-right: 15px;
	}
	.timeline-item--active {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0px);
	}
	.timeline-item--active:before {
		top: 50%;
		transition: 0.3s all 0.2s;
		opacity: 1;
	}
	.timeline-item--active .timeline__content-title {
		margin: -50px 0 20px 0;
	}
	@media only screen and (max-width: 767px) {
		.timeline-item {
			align-self: baseline !important;
			width: 100%;
			padding: 0 30px 150px 80px;
		}
		.timeline-item:before {
			left: 10px !important;
			padding: 0 !important;
			top: 50px;
			text-align: center !important;
			width: 60px;
			border: none !important;
		}
		.timeline-item:last-child {
			padding-bottom: 40px;
		}
	}
	.timeline__img {
		max-width: 100%;
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
	}
	.timeline-header {
		width: 100%;
		text-align: center;
		margin-bottom: 80px;
		position: relative;
	}
	.timeline-header__title {
		color: #fff;
		font-size: 46px;
		font-family: Cardo;
		font-weight: normal;
		margin: 0;
	}
	.timeline-header__subtitle {
		color: rgba(255, 255, 255, 0.5);
		font-family: "Pathway Gothic One", sans-serif;
		font-size: 16px;
		letter-spacing: 5px;
		margin: 10px 0 0 0;
		font-weight: normal;
	}
`;

const timelineData = [
	{
		date: "2011",
		header: "Alpha Hardin",
		title: "Project Management Intern",
		description:
			"Intern helping in project management for small scale construction projects.",
		duties:
			"Site management of Punch List and collaboration in As Built documentation.",
		image: "",
		links: [],
	},
	{
		date: "2011-2013",
		header: "Rojkind Arquitectos",
		title: "Architect",
		description:
			"Part of the design team collaborating in the development of architectural projects (20sqm-150,000sqm) from its conceptual/schematic design to its construction documentation.",
		duties:
			"3d modelling, managing the model shop, implementing parametric & computational design solutions (Grasshopper), developing architectural drawings & documentation plans, development of presentations & diagrams.",
		image: "",
		links: [
			"http://rojkindarquitectos.com/work/altozano-tower/",
			"http://rojkindarquitectos.com/work/citelis-ii/",
			"http://rojkindarquitectos.com/work/chedraui-santa-fe/",
			"https://www.archdaily.com/560641/liverpool-insurgentes-department-store-rojkind-arquitectos",
			"https://www.dezeen.com/2014/02/26/cineteca-nacional-siglo-xxi-film-archive-cinema-mexico-rojkind-arquitectos/",
		],
	},
	{
		date: "2013-2014",
		header: "MAG Architectural & Technology Solutions",
		title: "Junior Software Engineer & BIM Modeller",
		description:
			"Part of a start up that developed BIM solutions & related IOS and OSX apps. My main role got invested in the software development team, however, I jumped from time to time as a BIM Modeller to help the team deliver 300+ LOD models.",
		duties:
			"Development of IOS & OSX mockups & prototypes (Objective-C), feature development & some backend design (MySQL). BIM modeller, quantity surveying & services interference detection.",
		image: "",
		links: [],
	},
	{
		date: "2014",
		header: "Sordo Madaleno Arquitectos",
		title: "Computational Design Contractor",
		description:
			"Collaborating in the conceptual design of the International Airport Of Mexico City competition [short listed].",
		duties: "",
		image: "",
		links: [
			"https://www.sordomadaleno.com/sma/projects-sm/new-mexico-city-international-airport",
		],
	},
	{
		date: "2014-2016",
		header: "Laing O'Rourke | EnExG",
		title: "Researcher & Operations Engineer",
		description:
			"Part of an innovation lab invested on spinning of technological & engineering tools for the construction industry. Spend most of my time helping FreeFAB Wax technology team developing and delivering the first commission of our industrial 3d printer in UK. ",
		duties:
			"Helping in the development of multiple POC projects, ABB & SIEMENS CNC machine operator (Rapid & GCode), developing monolithic tools for interoperability between CAM, CAD & other engineering softwares (.NET VB), assisting on workshop management, developing presentations & graphical material.",
		image: "",
		links: ["https://www.freefab.com"],
	},
	{
		date: "2017",
		header: "Building Studio Architects",
		title: "Data Analyst & Architectural Designer",
		description:
			"Responsible of R&D and data analytics in a small design studio.",
		duties:
			"Enabling data-driven design processes (Python), teaching current parametric/computational tools to the team (Grasshopper & Dynamo) & performing standard architectural duties.",
		image: "",
		links: ["https://www.buildingstudio.com.au"],
	},
	{
		date: "2017-2019",
		header: "Woods Bagot | Superspace",
		title: "Senior Design Researcher",
		description:
			"Global role invested in the development & implementation of spatial & urban analytic tools. Currently Era-Co.",
		duties:
			"Software development in .NET (WinForms, XAML, C#), tool development and implementation for Java apps, data analysis in Python.",
		image: "",
		links: ["https://www.era-co.com/"],
	},
	{
		date: "2020",
		header: "Parametric Monkey",
		title: "AEC Software Developer",
		description:
			"Briefly joined a 1 person startup for a role in charge of developing a feasibility plugin for Rhinoceros3d.",
		duties:
			"UI/UX development (XAMl & C#), development of spatial analytical tools (C#)",
		image: "",
		links: [""],
	},
	{
		date: "2020-2021",
		header: "Vuxal",
		title: "Computational Design Consultant",
		description:
			"Founded a consultancy bridging spatial science, design technology and computational design to the AEC industry.",
		duties: "",
		image: "",
		links: [""],
	},
];

const Timeline = () => {
	return (
		<SectionContainer
			bgColor="var(--back-quaternary-color)"
			color="var(--back-primary-color)"
			height="auto"
			width="100%"
		>
			<TimelineContainer id="timeline">
				<TimelineHeader>
					<h1>Career</h1>
					<h3>Victor Through Time</h3>
				</TimelineHeader>
				<TimelineDiv>
					{/* <div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg"
							/>
							<h2 class="timeline__content-title">1881</h2>
							<p class="timeline__content-desc">
								He was born in 1881 (probably in the spring) in Salonica, then
								an Ottoman city, now inGreece. His father Ali Riza, a customs
								official turned lumber merchant, died when Mustafawas still a
								boy. His mother Zubeyde, adevout and strong-willed woman, raised
								him and his sister.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg"
							/>
							<h2 class="timeline__content-title">1893</h2>
							<p class="timeline__content-desc">
								First enrolled in a traditionalreligious school, he soon
								switched to a modern school. In 1893, he entered a military
								highschool where his mathematics teacher gave him the second
								name Kemal (meaning perfection)in recognition of young Mustafa's
								superior achievement.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://www.volpeypir.com/upload/3732.jpg"
							/>
							<h2 class="timeline__content-title">1905</h2>
							<p class="timeline__content-desc">
								In 1905, Mustafa Kemal graduated from the War Academy in
								Istanbul with the rank of Staff Captain. Posted in Damascus, he
								started with several colleagues, a clandestinesociety called
								"Homeland and Freedom" to fight against the Sultan'sdespotism.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg"
							/>
							<h2 class="timeline__content-title">1908</h2>
							<p class="timeline__content-desc">
								In 1908 he helped the group of officers who toppled the Sultan.
								Mustafa Kemal'scareer flourished as he won his heroism in the
								far corners of the Ottoman Empire,including Albania and Tripoli.
								He also briefly served as a staff officer in Salonica
								andIstanbul and as a military attache in Sofia.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://ataturk.istanbul.gov.tr/GalleryLibrary/12.jpg"
							/>
							<h2 class="timeline__content-title">1915</h2>
							<p class="timeline__content-desc">
								In 1915, when Dardanelles campaign was launched, Colonel Mustafa
								Kemal became anational hero by winning successive victories and
								finally repelling the invaders.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://blog.istanbul1881.com/wp-content/uploads/2016/08/atat%C3%BCrk-%C3%BCn-inan%C4%B1lmaz-karizmatik-fotograf%C4%B1_861050.jpg"
							/>
							<h2 class="timeline__content-title">1916</h2>
							<p class="timeline__content-desc">
								Promotedto general in 1916, at age 35, he liberated two major
								provinces in eastern Turkey thatyear. In the next two years, he
								served as commander of several Ottoman armies inPalestine,
								Aleppo, and elsewhere, achieving another major victory by
								stopping the enemyadvance at Aleppo.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://manisanokta.com/wp-content/uploads/2014/07/ataturk-20.jpg"
							/>
							<h2 class="timeline__content-title">1919</h2>
							<p class="timeline__content-desc">
								On May 19, 1919, Mustafa Kemal Pasha landed in the Black Sea
								port of Samsun to startthe War of Independence. In defiance of
								the Sultan's government, he rallied a liberationarmy in Anatolia
								and convened the Congress of Erzurum and Sivas which established
								thebasis for the new national effort under his leadership.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://www.volpeypir.com/upload/3732.jpg"
							/>
							<h2 class="timeline__content-title">1920</h2>
							<p class="timeline__content-desc">
								On April 23, 1920, the GrandNational Assembly was inaugurated.
								Mustafa Kemal Pasha was elected to its Presidency. Fighting on
								many fronts, he led his forces to victory against rebels and
								invadingarmies. Following the Turkish triumph at the two major
								battles at Inonu in Western Turkey,the Grand National Assembly
								conferred on Mustafa Kemal Pasha the title ofCommander-in-Chief
								with the rank of Marshal.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://sanatkaravani.com/wp-content/uploads/2015/11/ataturk-4.jpg"
							/>
							<h2 class="timeline__content-title">1922</h2>
							<p class="timeline__content-desc">
								At the end of August 1922, the Turkish armieswon their ultimate
								victory. Within a few weeks, the Turkish mainland was
								completelyliberated, the armistice signed, and the rule of the
								Ottoman dynasty abolished
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="https://turkcetarih.com/wp-content/uploads/2015/05/Atat%C3%BCrkveCumhuriyet.jpg"
							/>
							<h2 class="timeline__content-title">1923</h2>
							<p class="timeline__content-desc">
								In July 1923, the national government signed the Lausanne Treaty
								with Great Britain,France, Greece, Italy, and others. In
								mid-October, Ankara became the capital of the new Turkish State.
								On October 29, the Republic was proclaimed and Mustafa Kemal
								Pasha wasunanimously elected President of the Republic.
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="https://pbs.twimg.com/media/Cw69H8pXUAEaSqa.jpg"
							/>
							<h2 class="timeline__content-title">1934</h2>
							<p class="timeline__content-desc">
								The account of Atatürk's fifteen year Presidency is a saga of
								dramatic modernization.With indefatigable determination, he
								created a new political and legal system, abolished the
								Caliphate and made both government and education secular, gave
								equal rights to women,changed the alphabet and the attire, and
								advanced the arts and the sciences, agricultureand industry. In
								1934, when the surname law was adopted, the national parliament
								gave him the name{" "}
								<i>
									<strong>"Atatürk" (Father of the Turks)</strong>
								</i>
							</p>
						</div>
					</div>
					<div class="timeline-item" data-text="FATHER OF THE TURKS">
						<div class="timeline__content">
							<img
								class="timeline__img"
								src="http://www.bik.gov.tr/wp-content/uploads/2016/11/20161110_2_20037273_15856882.jpg?fit=1024%2C863"
							/>
							<h2 class="timeline__content-title">1938</h2>
							<p class="timeline__content-desc">
								On November 10, 1938, following an illness of a few months, the
								national liberator and the Father of modern Turkey died. But his
								legacy to his people and to the world endures.
							</p>
						</div>
					</div> */}
				</TimelineDiv>
			</TimelineContainer>
		</SectionContainer>
	);
};

export default Timeline;
