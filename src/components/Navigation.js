import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: 768px){
        padding-bottom: 0;
    }
`;

const LinkStyled = styled(Link)`
    color: #000;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: '', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type{
        margin-right: 0;
    }

    &.current-page{
        border-bottom: 2px solid #fff;
    }
`;


const Navigation = () => {
    return (
        <NavStyled>
            <LinkStyled to="/" activeClassName="current-page">Home</LinkStyled>
            <LinkStyled to="/about" activeClassName="current-page">About</LinkStyled>
        </NavStyled>
    )
}

export default Navigation
