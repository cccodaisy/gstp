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
    & h4{
        font-size: 1.5em;
        text-align: center;
        font-weight: bold;
        margin-top: 60px;
    }
    & p{
        font-size: 1.3em;
        margin: 30px auto 50px auto;
        text-align: center;
        line-height: 1.9;
    }
    @media only screen and (max-width: 780px) {   
        width: 88%;
        margin-left: 6%;   
        margin-top: 100px;   
        & h3{
            font-size: 2em;
            margin:  10% auto;
        }
        & p{
            font-size: 1.1em;
        }
    }
`;

const DetailInfo = styled.div`
    @media only screen and (max-width: 780px) {      
        img{
            width: 100%;
            margin-bottom: 4%;
        }
    }
    @media only screen and (min-width: 781px) {    
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
    }
`

function Facility(props){

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <Section>
                <h3>The common area</h3>
                <div className="inner">
                    <DetailInfo>
                        <p>
                        Our building consists of studio style apartments where every resident can relax and <br/>engage in various community programs in the common area located on first floor.
                        </p>
                        <img src={`${process.env.REACT_APP_IMG}images/img-sharelounge-1.jpg`} alt="shareLounge1"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-sharelounge-2.jpg`} alt="shareLounge2"/>
                        <img src={`${process.env.REACT_APP_IMG}images/img-sharelounge-3.jpg`} alt="shareLounge3"/>
                    </DetailInfo>
                </div>
            </Section>
            <Sns lang='en'/>
        </>
    );
}

export default Facility;