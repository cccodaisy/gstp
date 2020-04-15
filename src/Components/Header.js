import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 195px;
    display: flex;
    align-items: center;
    background-color:  ${props => props.current === '/' ? 'transparent' : '#4d4d4d'};
    z-index: 10;
    transition: all 0.2s linear;
    color: white;
`;

const List = styled.ul`
    display: flex;
    width: 100%;
    min-width: 1000px;
`;

const Item = styled.li`
    height: 65px;
    margin: 0 45px;
    padding: 0 15px;
    text-align: center;
    border-bottom: 3px solid
     ${props => props.current ? "#ffff25" : "transparent" };
    transition: border-bottom .5s ease-in-out;
    color:  ${props => props.current ? "#ffff25" : "white" };
    &:first-child {
        width: 40%;
        border-bottom: 3px solid transparent;
    }
    &:last-child {
        margin-right: 20px;
    }
`;

const SLink = styled(Link)`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    &.home{
        background: url('./logo.png') no-repeat;
        background-size: 80px 100px;
        margin-left: 5%;
    }
`;

export default withRouter (({ location: {pathname }}) => (
    <Header current={ pathname }>
        <List>
            <Item current={ pathname === "/" }>
                <SLink to="/" className="home"></SLink>
            </Item>
            <Item current={ pathname === "/aboutus" }>
                <SLink to="/aboutus">AboutUs</SLink>
            </Item>
            <Item current={ pathname === "/room" }>
                <SLink to="/room">Room Types</SLink>
            </Item>
            <Item current={ pathname === "/facility" }>
                <SLink to="/facility">Facilities</SLink>
            </Item>
            <Item current={ pathname === "/contact" }>
                <SLink to="/contact">Contact &amp; location</SLink>
            </Item>
            <Item current={ pathname === "/language" }>
                <SLink to="/language">한국어</SLink>
            </Item>
        </List>
    </Header>
))