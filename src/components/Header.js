import React from 'react';
import Navigation from "./Navigation";
import {Link} from "gatsby";
import styled from "@emotion/styled";

const LinkStyled = styled(Link)`
    color: var(--primary-color);
    text-align: center;
    text-decoration: none;
`;

const HeaderStyled = styled.header`
    background-color: rgba(44,62,80);
    padding: 1rem;
`;  

const HeaderDiv = styled.div`
    max-width: 1200px;
    padding: 1rem;

    @media (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderDiv>

                <LinkStyled to="/">
                    <h1>Victor Martinez</h1>
                </LinkStyled>

                <Navigation/>

            </HeaderDiv>
        </HeaderStyled>
    )
}

export default Header
