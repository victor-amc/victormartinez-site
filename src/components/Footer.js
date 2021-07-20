import React from 'react';
import Navigation from './Navigation';
import {Link} from "gatsby";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

const LinkStyled = styled(Link)`
    color: var(--primary-color);
    text-align: center;
    text-decoration: none;
`;

const FooterStyled = styled.footer`
    background-color: rgba(44,62,80);
    margin-top: 5rem;
    padding: 1rem;
`;

const FooterDiv = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const FooterParagraph = styled.p`
    text-align: center;
    color: #fff;
    background-color: rgb(33,44,55);
    margin: 0;
    padding: 1rem;
`;

const Footer = ({title}) => {
    const year = new Date().getFullYear();

    return (
        <>
            <FooterStyled>
                <FooterDiv>
                    <Navigation/>

                    <LinkStyled to ="/">
                        <h1>TESTING</h1>
                    </LinkStyled>
                </FooterDiv>
            </FooterStyled>

            <FooterParagraph>
                &#169; {title} {year}
            </FooterParagraph>
        </>
    )
}

export default Footer
