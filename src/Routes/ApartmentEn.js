import React, { useEffect } from "react";
import styled from "styled-components";
import Sns from "Components/Sns";
import Rooms from "Components/Rooms";

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
        margin: 20px auto 7% auto;
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
    @media only screen and (max-width: 780px) { 
        margin-top: 100px;   
        width: 88%; 
        margin-left: 6%;       
        & h3{
            font-size: 2em;
            margin: 10% auto 20% auto;
        }
    }
`;

const OptionInfo = styled.div`
    margin-bottom: 80px;
    h4{
        font-size: 1.5em;
        text-align: center;
        font-weight: bold;
        margin-top: 60px;
    }
    img {
        width: 60%;
        margin: 20px 20%;
    } 
    @media only screen and (max-width: 780px) {      
        img {
            width: 90%;
            margin: 20px 5%;
        }
    }
`

const RoomImg = styled.div`
    @media only screen and (max-width: 780px) {      
        img{
            width: 100%;
            margin-bottom: 4%;
        }
    }
    @media only screen and (min-width: 781px) {     
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
    }
`

function Apartment(){

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <Section>
                <h3>Types</h3>
                <div className="inner">
                <Rooms/>
                    <OptionInfo>
                        <h4>Details</h4>
                        <img src={window.innerWidth > 780 ? `${process.env.REACT_APP_IMG}images/img-option-bed-en.png` : `${process.env.REACT_APP_IMG}images/img-option-bed-mobile.png`} alt="optionImg"/>
                        <h4>Security</h4>
                        <img src={window.innerWidth > 780 ? `${process.env.REACT_APP_IMG}images/img-security-en.png` : `${process.env.REACT_APP_IMG}images/img-security-mobile.png`} alt="securityImg"/>
                    </OptionInfo>
                    <RoomImg>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-bed-1.jpg`} alt="optionBedImg1"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-bed-2.jpg`} alt="optionBedImg2"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-bed-3.jpg`} alt="optionBedImg3"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-bed-4.jpg`} alt="optionBedImg4"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-bed-5.jpg`} alt="optionBedImg5"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-bed-6.jpg`} alt="optionBedImg6"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-bed-7.jpg`} alt="optionBedImg7"/>
                    </RoomImg>
                </div>
            </Section>
            <Sns lang='en' snsText="Please be aware that each studio size and configuration may vary."
            snsText2="Please contact us via Kakao or Wechat for more information regarding your stay and application." />
        </>
    );
}

export default Apartment;