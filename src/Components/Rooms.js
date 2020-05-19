import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    margin-bottom: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 780px) {
        width: 88%;
        margin: 0 6%;
    }
`;

const Item = styled.li`
    flex: 1;
    text-align: center;
    border: 1px solid #707070;
    border-top:
     ${props => props.current ? " 5px solid #ffff25" : " 1px solid #707070" };
    border-bottom: 1px solid
     ${props => props.current ? "transparent" : "#707070" };
    transition: border-bottom .5s ease-in-out;
    background-color:  ${props => props.current ? "white" : "#f5f5f5" };
    color: #4d4d4d;
    &:first-child {
        border-right: 1px solid
        ${props => props.current ? "transparent" : "#707070" };
    }
    &:last-child {
        border-left: 1px solid
        ${props => props.current ? "transparent" : "#707070" };
    }
`;

const SLink = styled(Link)`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8em;
    @media only screen and (max-width: 780px) {     
        font-size: 1.3em;
    }
`;

export default withRouter (({ location: { pathname }}) => (
    <List>
        <Item current={ pathname === "/kr/apartment/bed" || pathname === "/en/apartment/bed"}>
            <SLink to={pathname.includes('kr') ? '/kr/apartment/bed' : '/en/apartment/bed'}>
                {pathname.includes('kr') ? 
                "침대가 있는 원룸" : 
                "Western style"}
                <br/>
                {pathname.includes('kr') ? '' : "(with bed)"}
            </SLink>
        </Item>
        <Item current={ pathname === "/kr/apartment/nobed" || pathname === "/en/apartment/nobed" }>
            <SLink to={pathname.includes('kr') ? '/kr/apartment/nobed' : '/en/apartment/nobed'}>
                {pathname.includes('kr') ? 
                "침대없는 원룸" : 
                "Korean style sleeping"
                }
                <br/>
                {pathname.includes('kr') ? '' : "(without bed frame)"}
            </SLink>
        </Item>
    </List>
))