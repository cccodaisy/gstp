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
        margin-top: 100px;   
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
                <h3>About Taehakgwan</h3>
                <div className="inner">
                    {window.innerWidth > 780 ? 
                        <p>
                        Home to international students and Korean students mostly from Seoul National University, Taehakgwan offers full housing to our residents. <br/>
                        Every house member gets a private studio apartment with a personal kitchen and bathroom with access to amenities such as washing, air-condition, refrigerator, wardrobe, and desks.
                        </p> 
                    :
                        <p>
                        Home to international students and Korean students mostly from Seoul National University, Taehakgwan offers full housing to our residents. Every house member gets a private studio apartment with a personal kitchen and bathroom with access to amenities such as washing, air-condition, refrigerator, wardrobe, and desks.
                        </p>
                    }
                    <img src={`${process.env.REACT_APP_IMG}images/img-about-1.jpg`} alt="aboutTaehakgwan1"/>
                    <img src={`${process.env.REACT_APP_IMG}images/img-about-2.jpg`} alt="aboutTaehakgwan2"/>
                    <img src={`${process.env.REACT_APP_IMG}images/img-about-3.jpg`} alt="aboutTaehakgwan3"/>
                </div>
            </Section>
            <Sns lang='en' />
        </>
    );
}

export default AboutUs;