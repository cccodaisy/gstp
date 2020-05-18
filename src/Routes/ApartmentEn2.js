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
    p{
        text-align: center;
        font-size: 1.1em;
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

function Apartment2(){
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <Section>
                <h3>Types of studio apartment</h3>
                <div className="inner">
                <Rooms/>
                    <OptionInfo>
                        <p>* Ondol is a Korean traditional style of sleeping, where you will be given a thick plush mattress and regular bedding (pillows and duvet) but without a bed frame. <br/>
                            In most Korean housings including Taehakgwan, the heating system comes from the floor. Residents who choose to stay in Ondol will sleep on heated floors, 
                            over a thick mattress which will make your stay cozy and warm.
                        </p>
                        <h4>Option</h4>
                        <img src={window.innerWidth > 780 ? `${process.env.REACT_APP_IMG}images/img-option-nobed-en.png` : `${process.env.REACT_APP_IMG}images/img-option-nobed-mobile.png`} alt="optionImg"/>
                        <h4>Security</h4>
                        <img src={window.innerWidth > 780 ? `${process.env.REACT_APP_IMG}images/img-security-en.png` : `${process.env.REACT_APP_IMG}images/img-security-mobile.png`} alt="securityImg"/>
                    </OptionInfo>
                    <RoomImg>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-1.jpg`} alt="optionNoBedImg1"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-2.jpg`} alt="optionNoBedImg2"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-3.jpg`} alt="optionNoBedImg3"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-4.jpg`} alt="optionNoBedImg4"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-5.jpg`} alt="optionNoBedImg5"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-6.jpg`} alt="optionNoBedImg6"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-7.jpg`} alt="optionNoBedImg7"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-8.jpg`} alt="optionNoBedImg8"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-option-nobed-9.jpg`} alt="optionNoBedImg9"/>
                    </RoomImg>
                </div>
            </Section>
            <Sns lang='en' snsText="Please be aware that each studio size and configuration may vary."
            snsText2="Please contact us via Kakao or Wechat for more information regarding your stay and application." />
        </>
    );
}

export default Apartment2;