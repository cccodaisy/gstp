import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    margin-bottom: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
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
`;

export default withRouter (({ location: { pathname }}) => (
    <List>
        <Item current={ pathname === "/apartment/bed" }>
            <SLink to="/apartment/bed">침대가 있는 원룸</SLink>
        </Item>
        <Item current={ pathname === "/apartment/nobed" }>
            <SLink to="/apartment/nobed">침대없는 원룸</SLink>
        </Item>
    </List>
))