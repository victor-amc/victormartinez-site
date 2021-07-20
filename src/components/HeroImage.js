import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const BackgroundImageStyled = styled(BackgroundImage)`
  height: 700px;
`;

const ImageDiv = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: red;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }

  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`;

const HeroImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "HeroPicture.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImageStyled
      tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    >
      <ImageDiv>
        <h1>Welcome to see... Me</h1>
        <p>The best me profile you will ever see in your entire next 20 minutes...</p>
      </ImageDiv>
    </BackgroundImageStyled>
  );
};

export default HeroImage;
