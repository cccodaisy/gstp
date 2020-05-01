import React, { useEffect } from "react";
import styled from "styled-components";
import Sns from "Components/Sns";
import Location from "Components/Location";
import MAIL from "images/mail.png";
import INSTAGRAM from "images/instagram.png";
import FACEBOOK from "images/facebook.png";

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0 7% 0;
    & h3{
        text-align: center;
        font-size: 2.8em;
        color: #333;
        font-weight: bold;
        margin: 20px;
        position: relative;
        &:after{
            content: '';
            position: absolute;
            width: 100%;
            left: -15px;
            background-color: #ffff25;
            height: 20px;
            z-index: -1;
            bottom: -8px;
            padding: 0 15px;
        }
    }
`;

const Contacts = styled.div`
    display: flex;
    width: 100%;
    padding: 3% 17%;
`;

const Social = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const Snsid = styled.div`
    flex: 1;
    font-size: 1.4em;
    margin: 30px 0;
    & span{
        font-weight: bold;
        color: black;
    }
`;

const Connect = styled.a`
    padding: 15px 20px; 
    color: #4d4d4d;
    font-size: 1.3em;
    font-weight: bold;
    border: solid 1px #707070;
    border-radius: 3em;
    transition: background-color, border 0.3s linear;
    &:visited{
        background-color: #d8d8d8;
        border: solid 1px #d8d8d8;
    }
    &:hover, &:active {
        background-color: #f5f5f5;
        border: solid 1px #f5f5f5;
    }
`;

function Contact(){
    
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <Sns/>
            <Section>
                <h3>태학관 이메일 &amp;소셜미디어</h3>
                <Contacts>
                    <Social>
                        <img src={MAIL} alt="mail"/>
                        <Snsid>
                            Email | <span>taehakgwan@gmail.com</span>
                        </Snsid>
                        <Connect href="mailto:taehakgwan@gmail.com" target="blank">이메일 보내기 </Connect>
                    </Social>
                    <Social>
                        <img src={INSTAGRAM} alt="instagram"/>
                        <Snsid>
                            Instagram | <span>@taehakgwan</span>
                        </Snsid>
                        <Connect href="https://www.instagram.com/taehakgwan/" target="blank">인스타그램 방문하기</Connect>
                    </Social>
                    <Social>
                        <img src={FACEBOOK} alt="facebook"/>
                        <Snsid>
                            Facebook | <span>@THG.house</span>
                        </Snsid>
                        <Connect href="https://www.facebook.com/THG.House/" target="blank">페이스북 방문하기</Connect>
                    </Social>
                </Contacts>
            </Section>
            <Location/>
        </>
    );
}

export default Contact;