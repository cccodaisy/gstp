import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import LOGO from "../images/logo-thg-d.png";

const Header = styled.header`
    color: white;
    position: ${props => props.current === '/' ? 'absolute' : 'relative'};
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1000px;
    height: 100%;
    background-color:  ${props => props.current === '/' ? 'transparent' : '#4d4d4d'};
    z-index: 10;
    transition: all 0.5s ease-in-out;
    color: white;
`;

const Inner = styled.div`
    position: relative;
    width: 1400px;
    min-width: 1000px;
    margin: 0 auto;
    padding: 2.5% 0;
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;

const Logo = styled.div`
    flex: 1;
`;


const List = styled.ul`
    flex: 4;
    display: block;
    margin-top: -1%

`;

const Item = styled.li`
    height: 65px;
    display: block;
    float: right;
    margin: 0 3%;
    padding: 0 1%;
    text-align: center;
    border-bottom: 3px solid
     ${props => props.current ? "#ffff25" : "transparent" };
    transition: border-bottom .5s ease-in-out;
    color:  ${props => props.current ? "#ffff25" : "white" };
    &:first-child {
        margin-right: 5%;
    }
    &:last-child{
        margin-left: 0;
    }
    &:hover {
        border-bottom: 3px solid #ffff25;
    }
`;

const SLink = styled(Link)`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4em;
    &.home{
        background: url(${LOGO}) no-repeat;
        background-size: 80px 100px;
        margin-left: 5%;
    }
`;

export default withRouter (({ location: { pathname }}) => (
    <Header current={ pathname }>
        <Inner>
            <Logo>
                <SLink to="/" className="home" style={{height: "100px"}}></SLink>
            </Logo>
            <List>
                <Item current={ pathname === "/language" }>
                    <SLink to="/language">Language</SLink>
                </Item>
                <Item current={ pathname === "/contact" }>
                    <SLink to="/contact">Contact &amp; Location</SLink>
                </Item>
                <Item current={ pathname.includes("/facility") }>
                    <SLink to="/facility/lounge">Facilities</SLink>
                </Item>
                <Item current={ pathname.includes('/apartment') }>
                    <SLink to="/apartment/bed">Apartment Type</SLink>
                </Item>
                <Item current={ pathname === "/aboutus" }>
                    <SLink to="/aboutus">AboutUs</SLink>
                </Item>
            </List>
        </Inner>
    </Header>
))