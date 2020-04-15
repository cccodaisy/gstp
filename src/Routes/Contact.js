import React from "react";
import styled from "styled-components";
import Sns from "../Components/Sns";
import Location from "../Components/Location";

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0 7% 0;
    & h4{
        text-align: center;
        font-size: 2.4em;
        color: #333;
        font-weight: bold;
        background-color: #ffff25;
        margin: 20px 0 50px 0;
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
    return (
        <>
            <Sns/>
            <Section>
                <h4>태학관 이메일 &amp;소셜미디어</h4>
                <Contacts>
                    <Social>
                        <img src="mail.png" alt="kakao"/>
                        <Snsid>
                            Email | <span>taehakgwan@gmail.com</span>
                        </Snsid>
                        <Connect href="mailto:taehakgwan@gmail.com" target="blank">이메일 보내기 </Connect>
                    </Social>
                    <Social>
                        <img src="instagram-1.png" alt="kakao"/>
                        <Snsid>
                            Instagram | <span>@taehakgwan</span>
                        </Snsid>
                        <Connect href="https://www.instagram.com/taehakgwan/" target="blank">인스타그램 방문하기</Connect>
                    </Social>
                    <Social>
                        <img src="facebook-1.png" alt="kakao"/>
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