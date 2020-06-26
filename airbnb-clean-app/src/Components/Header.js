import React from "react";
import styled from "styled-components";
import Logo from "../Logo.png";
import { Link } from "react-router-dom";

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  background-color: #222222;
  height: 70px;
  padding-top: 5px;
`;

const StyledH1 = styled.h1`
  color: #d80565;
  display: flex;
  justify-content: flex-start;
  margin-left: 2%;
`;

const StyledLogo = styled.img`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: flex-start;
  margin-left: 2%;
`;

const NavDiv = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
`;

const NavLinks = styled.a`
  color: #ffffff;
`;

const Button = styled.button`
  height: 40px;
  width: 90px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: #ffffff;

  ${(props) => (props.type === "primary-red" ? `background: #FF385C` : null)}
  ${(props) => (props.type === "secondary-red" ? `background: #D80565` : null)}
`;

function Header() {
  return (
    <StyledNavBar>
      <StyledLogo src={Logo} alt="logopng" />
      <StyledH1>Airbnb Optimal Pricing &nbsp;</StyledH1>
      <NavDiv>
        <NavLinks href="https://practical-khorana-8d6535.netlify.app/index.html">
          <Button type="secondary-red">Home</Button>
        </NavLinks>
        <NavLinks href="https://practical-khorana-8d6535.netlify.app/about.html">
          <Button type="primary-red">About</Button>
        </NavLinks>
        <Link to="/register">
          <Button type="secondary-red">Register</Button>
        </Link>
        <Link to="/login">
          <Button type="primary-red">Login</Button>
        </Link>
        <Link to="/dashboard">
          <Button type="secondary-red">Dashboard</Button>
        </Link>
      </NavDiv>
    </StyledNavBar>
  );
}

export default Header;
