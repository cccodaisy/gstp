import React, { useEffect } from "react";
import styled from "styled-components";
import Sns from "Components/Sns";

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 7% 0 0 0;
    padding-bottom: 2%;
    .inner{
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
      }
    & h3{
        text-align: center;
        font-size: 2.8em;
        color: #333;
        font-weight: bold;
        margin: 20px auto 5% auto;
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
    h4{
        font-size: 1.5em;
        text-align: center;
        font-weight: bold;
        margin-top: 60px;
    }
    p{
        font-size: 1.3em;
        margin: 30px auto 50px auto;
        text-align: center;
        line-height: 1.9;
    }
`;

const DetailInfo = styled.div`
    margin-bottom: 60px;
    padding-bottom: 30px;
    border-bottom: 1px solid #d8d8d8;
`

const DetailImg = styled.div`
    img{
        width: 49%;
        margin-bottom: 2%;
        &:nth-child(odd){
            margin-left: 2%;
        }
        &:first-child{
            width: 100%;
            margin-left: 0;
        }
    }
`

const ShortInfo = styled.div`
    display: flex;
    margin-bottom: 60px;
    padding-bottom: 30px;
    border-bottom: 1px solid #d8d8d8;
    div{
        width: 49%;
        margin-bottom: 2%;
        &.textbox{
            display: flex;
            flex-direction: column;
            justify-content: center;
            h4{
                margin-top: 0;
            }
            p{
                width: 75%;
            }
        }
        &:nth-child(even){
            margin-left: 2%;
        }
        & img{
            width: 100%;
        }
    }
    &:last-child{
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: unset;
    }
`

function Facility2(){

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <Section>
                <h3>태학관 주변 시설 안내</h3>
                <div className="inner">
                    <DetailInfo>
                        <h4>1.서울 둘레길 (도보 5분)</h4>
                        <p>
                        서울시에서 조성한 숲속의 산책공원 루트 입니다. 저희 지역은 ‘서울 둘레길 제 5구간’으로 되어져 있습니다. <br/>
                        태학관에서 걸어서 5분이면 바로 연결되어져 있습니다. 태학관 인근 서울둘레길 명소로는 숲속의 도서관,  <br/>
                        여러 체육시설(헬스장, 베트민턴장), 족구장, 국궁장, 조선 시대 유적 무덤, 한강과 여의도가 보이는 돌바위 view point,  <br/>
                        불교 사찰인(보덕사, 약수사, 호암사) 절터와 자작나무 유아 숲 체험 교실터, 천주교 삼성산 성지순례길  <br/>
                        (조선 말 3인의 프랑스 선교사 무덤 유적지) 등이 있습니다. 도심속에서 숲속의 자연을 체험할 수 있는  <br/>
                        힐링의 숲 공원이 인접해 있습니다. 
                        </p>
                        <DetailImg>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-1.jpg`} alt="둘레길 이미지1"/>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-2.jpg`} alt="둘레길 이미지2"/>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-3.jpg`} alt="둘레길 이미지3"/>
                        </DetailImg>
                    </DetailInfo>
                    <ShortInfo>
                        <div class='textbox'>
                            <h4>2. 서울대학교 (도보 15분)</h4>
                            <p>
                            한국을 대표하는 명실 상부한 대학교 캠퍼스가 자리 하고 있습니다. 가까운 거리에
                            서울대학교가 있어 접근성이 좋습니다. 
                            </p>
                        </div>
                        <div>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-4.jpg`} alt="서울대 이미지" />
                        </div>
                    </ShortInfo>
                    <ShortInfo>
                        <div>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-5.jpg`} alt="도림천길 이미지" />
                        </div>
                        <div class='textbox'>
                            <h4>3. 도림천 산책 &amp; 자전거길 (도보 7분)</h4>
                            <p>
                            자전거 전용도로가 설치 되어져 있습니다. 저희 마을에서 여의도 한강으로 연결이 될 수 있는 자전거 전용도로가 조성 되어져 있습니다. 마을 주민들의 조깅과 산책로도 각광을 받고 있습니다.
                            </p>
                        </div>
                    </ShortInfo>
                </div>
            </Section>
            <Sns />
        </>
    );
}

export default Facility2;