import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: ${props => props.current === '/' ? 'absolute' : 'relative'};
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1000px;
    height: 195px;
    display: flex;
    align-items: center;
    background-color:  ${props => props.current === '/' ? 'transparent' : '#4d4d4d'};
    z-index: 999;
    transition: all 0.5s ease-in-out;
    color: white;
`;

const Inner = styled.div`
    position: relative;
    width: 1140px;
    margin: 0 auto;
`;

const Logo = styled.div`
    flex: 1;
    margin-left: 4%;
`;


const List = styled.ul`
    flex: 2;
    display: block;
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
    font-size: 1.3em;
    &.home{
        background: url('images/logo.png') no-repeat;
        background-size: 80px 100px;
        margin-left: 5%;
    }
`;

export default withRouter (({ location: {pathname }}) => (
    <Header current={ pathname }>
        <Inner>
            <Logo>
                <SLink to="/" className="home" style={{height: "80px"}}></SLink>
            </Logo>
            <List>
                <Item current={ pathname === "/language" }>
                    <SLink to="/language">한국어</SLink>
                </Item>
                <Item current={ pathname === "/contact" }>
                    <SLink to="/contact">Contact &amp; Location</SLink>
                </Item>
                <Item current={ pathname === "/facility" }>
                    <SLink to="/facility">Facilities</SLink>
                </Item>
                <Item current={ pathname === "/apartment" }>
                    <SLink to="/apartment">Apartment Type</SLink>
                </Item>
                <Item current={ pathname === "/aboutus" }>
                    <SLink to="/aboutus">AboutUs</SLink>
                </Item>
            </List>
        </Inner>
    </Header>
))