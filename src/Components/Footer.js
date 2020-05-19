import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import LOGO_FT from "images/logo-footer.png";

const Footer = styled.footer`
    color: white;
    background: #3c3c3b;
    width: 100%;
`;

const Infos = styled.div`
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    padding: 110px 0;
    @media only screen and (max-width: 780px) {      
        padding: 20px 0;
    }
`;

const Logo = styled.div`
    flex: 1;
    text-align: center;
    @media only screen and (max-width: 780px) {
        display: none;
    }
`;

const Lists = styled.div`
    display: flex;
    flex: 4;
    flex-flow: column wrap; 
    @media only screen and (max-width: 780px) {
        width: 90%;
        margin: 0 5%;
        display: block;
        flex: unset;
        flex-flow: unset; 
    }
`;

const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid #707070;
    padding: 2% 0;
    &:first-child{
        border-top: unset;
    }
    &.sns{
        flex-direction: column;
        color: #acacac;
    }
    @media only screen and (max-width: 780px) {      
        padding: 32px 0;
        &:first-child{
            padding-bottom: 50px;
        }
    }
`;

const Item = styled.li`
    margin: 10px 0;
    padding: 0 20px;
    border-right: 1px solid white;
    &:last-child{
        border-right: unset;
    }
    @media only screen and (max-width: 780px) {  
        font-size: 1.1em;    
        flex-direction: column;
        padding: 0 15px 0 0;
        &:nth-child(2){
            padding-left: 15px;
        }
    }
`;

const SnsLinks = styled.li`
    margin: 10px 0;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 780px) {      
        flex-direction: column;
        padding: 0;
    }
`;

const SnsLink = styled.div`
    flex: 1;
    font-size: 1.2em;
    & a{
        color: white;
        border-bottom: 1px solid white;
        transition: color 0.3s linear;
        &:hover{
            text-decoration: underline;
        }
    }
    @media only screen and (max-width: 780px) {      
        font-size: 1.1em;
        margin-bottom: 23px;
    }
`;

const SLink = styled(Link)`
    font-size: 1.2em;
    transition: color 0.3s linear;
    &:hover{
        text-decoration: underline;
    }
    &.nohover{
        &:hover{
            text-decoration: none;
        }
    }
    @media only screen and (max-width: 780px) {  
        font-size: 1.1em;
    }
`;

const DLink = styled(Link)`
    & span:hover{
        color: white;
    }
    & span{
        color: #acacac;
        padding-left: 10px;
    }
    @media only screen and (max-width: 780px) { 
        & span{
            font-size: 0.85em;
        }
    }
`;

export default withRouter (({ location : { pathname }}) => (
    <Footer>
        <Infos>
            <Logo>
                <SLink to={pathname.includes('kr') ? '/kr' : '/en'} ><img src={LOGO_FT} width="110" height="auto" alt="태학관로고"/></SLink>
            </Logo>
            <Lists>
                <List>
                    <Item>
                        <SLink to={pathname.includes('kr') ? '/kr/aboutus' : '/en/aboutus'}>About Us</SLink>
                    </Item>
                    <Item>
                        <SLink to={pathname.includes('kr') ? '/kr/apartment/bed' : '/en/apartment/bed'}>Apartment Type</SLink>
                    </Item>
                    <Item>
                        <SLink className='nohover' to={pathname.includes('kr') ? '/kr/facility/lounge' : '/en/facility/lounge'}>
                            Facilities 
                        </SLink>
                        <DLink to={pathname.includes('kr') ? '/kr/facility/lounge' : '/en/facility/lounge'}>
                            <span>
                                { pathname.includes('/kr') ? '공유 라운지' : 'The common area' }
                            </span>
                        </DLink>
                        <span style={{marginLeft: '8px'}}>/</span>
                        <DLink to={pathname.includes('kr') ? '/kr/facility/nearby' : '/en/facility/nearby'}>
                            <span>
                                { pathname.includes('/kr') ? '태학관 주변 시설 안내' : 'Places to see nearby' }
                            </span>
                        </DLink>
                    </Item>
                    <Item>
                        <SLink to={pathname.includes('kr') ? '/kr/contact' : '/en/contact'}>Contact &amp; Location</SLink>
                    </Item>
                </List>
                <List>
                    <Item>
                        <SLink to="/kr">한국어 웹사이트</SLink>
                    </Item>
                    <Item>
                        <SLink to="/en">English website</SLink>
                    </Item>
                </List>
                <List className="sns">
                    <Item style={{fontSize: '16.8px', borderRight: 'none'}}>
                        { pathname.includes('/kr') ? '서울 관악구 대학18길 30' : '30, Daehak 18-gil, Gwanak-gu, Seoul, Republic of Korea ' }
                    </Item>
                    <SnsLinks>
                        <SnsLink>
                            <span>Email | </span>
                            <a href="mailto:taehakgwan@gmail.com">taehakgwan@gmail.com</a>
                        </SnsLink>
                        <SnsLink>
                            <span>Instagram | </span>
                            <a href="https://www.instagram.com/taehakgwan/">@taehakgwan</a>
                        </SnsLink>
                        <SnsLink>
                            <span>Facebook | </span>
                            <a href="https://www.facebook.com/THG.House/">@THG.house</a>
                        </SnsLink>
                    </SnsLinks>
                </List>
            </Lists>
        </Infos>
    </Footer>
))