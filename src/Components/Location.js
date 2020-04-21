import React from "react";
import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    height: 824px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    .inner{
        position: relative;
        width: 1320px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
    }
    & .left{
        flex: 1;
        width: 24px;
        height: 70px;
    }
    & .box{
        flex: 12;
        background-color: white;
        display: flex;
        align-items: center;
        position: relative;
        & .info{
            flex: 1 auto;
            font-size: 1.4em;
            position: relative;
            height: 680px;
            h4{
                font-size: 40px;
                color: #333;
                letter-spacing: -1px;
                width: 80%;
                margin: 16% 15% 6% 15%;
                font-weight: bold;
                margin-bottom: 70px;
            }
            div{
                line-height: 1.67;
                text-align: left;
                width: 70%;
                margin: 0 15%;
                span{
                    font-weight: bold;
                }
            }
            .more{
                padding: 20px 40px;
                text-align: center;
                font-weight: bold;
                color: #4d4d4d;
                background-color: #ffff25;
                border-radius: 2em;
                position: absolute;
                bottom: 15%;
                left: 15%;
                &:hover{
                    background-color: #ebeb14;
                }
            }
        }
        & .map{
            background: url('./images/img-map.jpg') no-repeat center;
            min-width: 700px;
            width: 873px;
            height: 680px;
        }
    }
    & .right{
        flex: 1;
        width: 24px;
        height: 70px;
    }
`;


const Location = () => (
    <Section>
        <div className="inner">
            <div className="left"></div>
            <div className="box">
            <div className="info">
                <h4>태학관 오는 방법</h4>
                <div>
                주변 버스 정보 | <span>5515B 버스 탑승 후<br/>
                현대 아파트 종점에서 하차</span> <br/><br/>
                오시는 길과 방법은 메신저를 통해 <br/>자세히 안내해 드립니다. 
                </div>
                <a href="http://qr.kakao.com/talk/SZ5jdXVtw6OTryWqdyJAPRz3I.w-">
                <span className="more">카카오톡으로 안내받기</span>
                </a>
            </div>
            <div className="map"></div>
            </div>
            <div className="right"></div>
        </div>
    </Section>
);

export default Location;