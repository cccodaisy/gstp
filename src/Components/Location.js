import React from "react";
import styled from "styled-components";
import MAP from '../images/img-map.jpg'

const Section = styled.section`
    width: 100%;
    height: 824px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
`;

const Inner = styled.div`
    width: 1400px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    align-items: center;
    position: relative;
    & .map{
        background: url(${MAP}) no-repeat center;
        width: 70%;
        height: 680px;
        background-size: 100%;
    }
`

const AddressInfo = styled.div`
    flex: 1 auto;
    font-size: 1.4em;
    position: relative;
    height: 680px;
    h3{
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
        transition: background-color 0.3s linear;
        &:hover{
            background-color: #ebeb14;
        }
    }
`

const Location = () => (
    <Section>
        <Inner>
            <AddressInfo>
                <h3>태학관 오는 방법</h3>
                <div>
                주변 버스 정보 | <span>5515B 버스 탑승 후<br/>
                현대 아파트 종점에서 하차</span> <br/><br/>
                오시는 길과 방법은 메신저를 통해 <br/>자세히 안내해 드립니다. 
                </div>
                <a href="http://qr.kakao.com/talk/SZ5jdXVtw6OTryWqdyJAPRz3I.w-">
                <span className="more">카카오톡으로 안내받기</span>
                </a>
            </AddressInfo>
            <a className="map" href={MAP} target="_blank"></a>
        </Inner>
    </Section>
);

export default Location;