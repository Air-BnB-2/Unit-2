// h1
// nav links
// signup button
// primary red (r255,g56,b92 - #FF385C),
// secondary red (r216,g5,b101 - #D80565),
// white (r255,g255,b255 - #FFFFFF),
// black (r0,g0,b0 - #000000),
// grey (r34, g34, b34 - #222222)

import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo.png';

const StyledNavBar = styled.nav `
    display: flex;
    align-items: center;
    background-color: #222222;
    height: 70px;
    padding-top: 5px;
`;
const StyledH1 = styled.h1 `
    color: #D80565;
    display: flex;
    justify-content: flex-start;
    margin-left: 2%;
`;
const StyledLogo = styled.img `
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: flex-start;
`;

const NavDiv = styled.nav `
    display:flex;
    justify-content: flex-end;
    align-items: center;
    width: 75%;
`;
const NavLinks = styled.a `
    color: #FFFFFF;
    margin: 5px;
`;
const Button = styled.button `
    height: 40px;
    width: 90px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: #FFFFFF;

    ${props => (props.type === 'primary-red') ? `background: #FF385C` : null}
    ${props => (props.type === 'secondary-red') ? `background: #D80565` : null}
`;

function Header () {
    return (
    <StyledNavBar>
      <StyledH1>Airbnb Optimal Pricing &nbsp;</StyledH1>
        <StyledLogo src={Logo} alt="logopng"/>
        <NavDiv>
            <NavLinks href='#'>Home</NavLinks>
            <NavLinks href='#'>About</NavLinks>
            <Button type='secondary-red'>Register</Button>
            <Button type='primary-red'>Login</Button>
        </NavDiv>
    </StyledNavBar>
    )
}

export default Header;