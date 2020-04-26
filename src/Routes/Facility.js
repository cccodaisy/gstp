import React from "react";
import styled from "styled-components";
import Sns from "../Components/Sns";

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 7% 0 0 0;
    padding-bottom: 2%;
    .inner{
        width: 1400px;
        margin: 0 auto;
        height: 100%;
      }
    & h3{
        text-align: center;
        font-size: 2.4em;
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
    img{
        width: 49%;
        &:nth-child(even){
            margin-left: 2%;
        }
        &:first-of-type{
            width: 100%;
            margin-left: 0;
            margin-bottom: 2%;
        }
    }
`

const DetailImg = styled.div`
`

function Facility(props){
    console.log(props);
    return (
        <>
            <Section>
                <h3>태학관 공유 라운지 </h3>
                <div className="inner">
                    <DetailInfo>
                        <p>
                        개인실 원룸형 아파트 구조면서 건물 1층에 공유공간 거실을 함께 가지고 있습니다. <br/>
                        공유공간에서는 휴식과 다양한 커뮤니티 활동 프로그램을 가질 수 있습니다. 
                        </p>
                        <img src="../gstp/images/img-sharelounge-1.jpg" alt="라운지 이미지1"/>
                        <img src="../gstp/images/img-sharelounge-2.jpg" alt="라운지 이미지2"/>
                        <img src="../gstp/images/img-sharelounge-3.jpg" alt="라운지 이미지3"/>
                    </DetailInfo>
                </div>
            </Section>
            <Sns />
        </>
    );
}

export default Facility;