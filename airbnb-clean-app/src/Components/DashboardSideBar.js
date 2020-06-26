import React from 'react';
import account from '../account.png';
import menu from '../menu.png';
import styled from 'styled-components';

const StyledSideBar = styled.div`
    background-color: #000000;
    background-image: url('user.png');
    background-repeat: no-repeat;
    background-size: 150px;
    background-position: 50% 10%;
    border: solid #222222 2px;
    height: 100%;
    width: 25%;
`

const StyledIcon = styled.img`
    position: absolute;
    top: 40%;
    left: 2%;
`

const StyledMenu = styled.img`
    position: absolute;
    top: 50%;
    left: 2%;
`

const StyledAccountH1 = styled.h1`
    position: absolute;
    top: 39%;
    left: 6%;
    color: #FFFFFF;
`

const StyledMenuH1 = styled.h1`
    position: absolute;
    top: 48.5%;
    left: 6%;
    color: #FFFFFF;
`

function SideBar() {
    
    return (
        <StyledSideBar>
            <StyledIcon src={account} alt='account icon'/>
            <StyledMenu src={menu} alt='menu icon' />
            <StyledAccountH1>Account</StyledAccountH1>
            <StyledMenuH1>Menu</StyledMenuH1>
        </StyledSideBar>
    )
};

export default SideBar;

