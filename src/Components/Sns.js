import React from "react";
import styled from "styled-components";
import KAKAO_LOGO from "../images/img-kakaotalk-logo.png"
import WECHAT_LOGO from "../images/img-wechat-logo.png"

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 7% 0;
    & h3{
        text-align: center;
        font-size: 2.4em;
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
    & p{
        font-size: 1.3em;
        line-height: 2;
        margin: 30px 0 50px 0;
        text-align: center;
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
    transition: background-color 0.3s linear;
    &:hover, &:active{
        background-color: #ebeb14;
    }
`;

console.log(window.location.origin)

const Sns = (props) => (
    <Section>
        <h3>입주 문의 및 상담방법</h3>
        <p>
            {props.snsText ?? "자세한 입주 문의 및 기타 상담은 메신저를 통해 가능합니다."} 
            <br/>{props.snsText2 ?? null}
        </p>
        <Contacts>
            <Social>
                <img src={KAKAO_LOGO} alt="kakao" width='120' />
                <Snsid>
                    Kakao Plus | <span>GDTHG7</span>
                </Snsid>
                <Connect href="http://qr.kakao.com/talk/SZ5jdXVtw6OTryWqdyJAPRz3I.w-" target="blank">카카오톡으로 상담하기</Connect>
            </Social>
            <Social>
                <img src={WECHAT_LOGO} alt="wechat" width='120' />
                <Snsid>
                    WeChat | <span>GDTHG7</span>
                </Snsid>
                <Connect href="http://qr.kakao.com/talk/SZ5jdXVtw6OTryWqdyJAPRz3I.w-" target="blank">위챗으로 상담하기</Connect>
            </Social>
        </Contacts>
    </Section>
);

export default Sns;