import React from "react";
import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 7% 0;
    & h4{
        text-align: center;
        font-size: 2.4em;
        color: #333;
        font-weight: bold;
        background-color: #ffff25;
        margin: 20px;
    }
    & p{
        font-size: 1.3em;
        margin: 30px 0 50px 0;
    }
`;

const Contacts = styled.div`
    display: flex;
    width: 100%;
    padding: 3% 20%;
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
    background-color: #ffff25;
    border-radius: 3em;
    &:hover, &:active{
        background-color: #ebeb14;
    }
`;

const Sns = () => (
    <Section>
        <h4>입주 문의 및 상담방법</h4>
        <p>
            입주 문의 및 기타 상담은 카카오톡과 위챗앱을 통해서 가능합니다. 
        </p>
        <Contacts>
            <Social>
                <img src="img-kakaotalk-logo.png" alt="kakao"/>
                <Snsid>
                    Kakao Plus | <span>GDTHG7</span>
                </Snsid>
                <Connect href="http://qr.kakao.com/talk/SZ5jdXVtw6OTryWqdyJAPRz3I.w-" target="blank">카카오톡으로 상담하기</Connect>
            </Social>
            <Social>
                <img src="img-wechat-logo.png" alt="kakao"/>
                <Snsid>
                    WeChat | <span>GDTHG7</span>
                </Snsid>
                <Connect href="http://qr.kakao.com/talk/SZ5jdXVtw6OTryWqdyJAPRz3I.w-" target="blank">위챗으로 상담하기</Connect>
            </Social>
        </Contacts>
    </Section>
);

export default Sns;