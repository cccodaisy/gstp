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
    position: relative;
    height: 65px;
    display: block;
    float: right;
    margin: 0 2.2%;
    padding: 0 1.6%;
    text-align: center;
    border-bottom: 3px solid
     ${props => props.current ? "#ffff25" : "transparent" };
    transition: border-bottom .5s ease-in-out;
    color:  ${props => props.current ? "#ffff25" : "white" };
    &:first-child {
        margin-right: 2%;
    }
    &:last-child{
        margin-left: 0;
    }
    &:hover {
        border-bottom: 3px solid #ffff25;
    }
    &:hover > div{
        display: block;
        transition: display 1s linear;
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
    & > span{
        margin: 0 0 0 15px;
        border-style:solid; 
        border-width: 6px;
        border-color:  white transparent transparent transparent;
    }
`;

const Deps = styled.div`
    transition: display 1s linear;
    position: absolute;
    display: none;
    top: 65px;
    left: 0;
`
const DLink = styled(Link)`
    width: 139px;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.4em;
    color: #4d4d4d;
    border-bottom: 1px solid #c9c9c9;
    &:last-child{
        border-bottom: unset;
    }
`;


export default withRouter (
    ({ location: { pathname }}) => (
    <Header current={ pathname }>
        <Inner>
            <Logo>
                <SLink to="/" className="home" style={{height: "100px"}}></SLink>
            </Logo>
            <List>
                <Item current={ pathname === "/language" }>
                    <SLink>Language<span></span></SLink>
                    <Deps>
                        <DLink to="/kr" style={{width: '150px'}}>한국어</DLink>
                        <DLink to="/eng" style={{width: '150px'}}>English</DLink>
                    </Deps>
                </Item>
                <Item current={ pathname === "/contact" }>
                    <SLink to="/contact">Contact &amp; Location</SLink>
                </Item>
                <Item current={ pathname.includes("/facility") }>
                    <SLink>Facilities<span></span></SLink>
                    <Deps>
                        <DLink to="/facility/lounge">공유 라운지</DLink>
                        <DLink to="/facility/surround">주변 시설</DLink>
                    </Deps>
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