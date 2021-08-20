import React from "react";
import styled from "@emotion/styled";

import IconFacebook from "../images/socialmedia/facebook.svg";
import IconGithub from "../images/socialmedia/github.svg";
import IconInstagram from "../images/socialmedia/instagram.svg";
import IconLinkedin from "../images/socialmedia/linkedin.svg";
import IconYoutube from "../images/socialmedia/youtube.svg";

const A = styled.a`
	color: var(--primary-color);
	text-align: center;
	text-decoration: none;
`;

const FooterStyled = styled.footer`
	background-color: var(--back-secondary-color);
	margin-top: 5rem;
	padding: 1rem;
`;

const FooterDiv = styled.div`
	width: min(80vw, 1200px);
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FooterParagraph = styled.p`
	text-align: center;
	color: var(--back-primary-color);
	font-size: 1.4rem;
	margin: 0;
	padding: 1rem;
`;

const FooterSocialMediaContainer = styled.div`
	ul {
		display: flex;
		justify-content: space-between;

		.btn-sm {
			height: 2.4em;
			width: 2.4em;
			opacity: 0.4;
			margin: 2px;
			transform: scale3d(0.8, 0.8, 0.8);
			filter: invert(100%) sepia(0%) saturate(300%) hue-rotate(16deg)
				brightness(115%) contrast(85%);

			&:hover {
				opacity: 1;
				transition: opacity 0.3s linear;
				animation: buttonScale 0.3s;

				@keyframes buttonScale {
					0% {
						transform: scale3d(0.8, 0.8, 0.8);
					}
					50% {
						transform: scale3d(1, 1, 1);
					}
					100% {
						transform: scale3d(0.8, 0.8, 0.8);
					}
				}
			}

			&:active {
				filter: invert(20%) sepia(75%) saturate(3000%) hue-rotate(296deg)
					brightness(90%) contrast(85%);
			}
		}
	}
`;

const Footer = ({ title }) => {
	const year = new Date().getFullYear();

	return (
		<>
			<FooterStyled>
				<FooterDiv>
					<FooterSocialMediaContainer>
						<ul>
							<li>
								<A
									href="https://www.linkedin.com/in/victoramc/"
									target="_blank"
									rel="nofollow"
								>
									<IconLinkedin className="btn-sm btn-lkdin" alter="LinkedIn" />
								</A>
							</li>
							<li>
								<A
									href="https://github.com/victor-amc"
									target="_blank"
									rel="nofollow"
								>
									<IconGithub className="btn-sm btn-repo" alter="GitHub" />
								</A>
							</li>
							<li>
								<A
									href="https://www.facebook.com/victor.alejandro.mc/"
									target="_blank"
									rel="nofollow"
								>
									<IconFacebook className="btn-sm btn-face" alter="Facebook" />
								</A>
							</li>
							<li>
								<A
									href="https://www.instagram.com/victoralejandromc/"
									target="_blank"
									rel="nofollow"
								>
									<IconInstagram
										className="btn-sm btn-insta"
										alter="Instagram"
									/>
								</A>
							</li>
							<li>
								<A
									href="https://www.youtube.com/channel/UCkyZq4nLFNDHadzQZMYtwNw"
									target="_blank"
									rel="nofollow"
								>
									<IconYoutube className="btn-sm btn-yout" alter="Youtube" />
								</A>
							</li>
						</ul>
					</FooterSocialMediaContainer>

					<FooterParagraph>
						&#169; {title} {year}
					</FooterParagraph>
				</FooterDiv>
			</FooterStyled>
		</>
	);
};

export default Footer;
