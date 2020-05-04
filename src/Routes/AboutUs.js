import React, { useEffect } from "react";
import styled from "styled-components";
import Sns from 'Components/Sns'

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 7% 0;
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
        margin: 30px 0 50px 0;
        text-align: center;
        line-height: 1.9;
    }
    @media only screen and (min-width: 781px) {     
        & img{
            width: 100%;
            margin-bottom: 35px;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
    @media only screen and (max-width: 780px) {      
        & h3{
            font-size: 2em;
            margin:  10% auto;
        }
        & p{
            font-size: 1.1em;
            padding: 0 30px;
        }
        & img{
            width: 88%;
            margin: 0 6% 2% 6%;
        }
    }
`;

function AboutUs(){
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <Section>
                <h3>태학관 소개</h3>
                <div className="inner">
                    <p>
                    서울대 등 국제 학생들과 한국 학생들 입주자 분들이 주로 거주 하는 하우스 입니다. <br/>
                    개인 원룸형 주거 공간으로 각 개인 원룸 아파트에는 풀 옵션(세탁기,냉장고, 에어컨, 책상, 장농 등)인 설비시설과 <br/>
                    개인 부엌과 개인 화장실과 개인 샤워시설이 있습니다.
                    </p>
                    <img src={`${process.env.REACT_APP_IMG}images/img-about-1.jpg`} alt="태학관 이미지1"/>
                    <img src={`${process.env.REACT_APP_IMG}images/img-about-2.jpg`} alt="태학관 이미지2"/>
                    <img src={`${process.env.REACT_APP_IMG}images/img-about-3.jpg`} alt="태학관 이미지3"/>
                </div>
            </Section>
            <Sns />
        </>
    );
}

export default AboutUs;