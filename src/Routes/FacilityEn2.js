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
    & .inner{
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
        & .inner{
            margin-bottom: 20%;
        }  
        & h3{
            font-size: 2em;
            margin: 10% auto;
        }
        & p{
            font-size: 1.1em;
            text-align: left;
        }
    }
`;

const DetailInfo = styled.div`
    margin-bottom: 60px;
    padding-bottom: 30px;
    border-bottom: 1px solid #d8d8d8;
`

const DetailImg = styled.div`
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

const ShortInfo = styled.div`
    display: flex;
    margin-bottom: 60px;
    padding-bottom: 30px;
    border-bottom: 1px solid #d8d8d8;
    & div{
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
    @media only screen and (max-width: 780px) {   
        flex-direction: column;
        & div{
            width: 100%;
            margin-bottom: 4%;
            &.textbox{
                & p{
                    width: 100%;
                }
            }
            &:nth-child(even){
                margin-left: 0%;
            }  
        }
        &:last-child{
            flex-direction: column-reverse;
        }
    }
`

function Facility2(){

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <Section>
                <h3>Places to see nearby</h3>
                <div className="inner">
                    <DetailInfo>
                        <h4>1. Seoul trail (5 minutes on foot)</h4>
                        {window.innerWidth > 780 ? 
                            <p>
                                The Seoul Trail, consisting of urban terrains and greenery, circumscribes the entire city of Seoul. 
                                Taehakgwan is close to the 5th section of the Seoul trail and is only 5 minutes by walking. 
                                Facilities near this section of the trail include a mountain library, outdoor gym areas, historical sites, 
                                Samsungsan pilgrimage route and a few temples (Bodeok-sa, Yaksu-sa, Hoam-sa) and a great viewpoint to oversee 
                                Seoul's skyline. It is the perfect spot to relax out in nature, away from the hustle and bustle of the city.
                            </p>
                            : 
                            <p>
                                The Seoul Trail, consisting of urban terrains and greenery, circumscribes the entire city of Seoul. <br/>
                                Taehakgwan is close to the 5th section of the Seoul trail and is only 5 minutes by walking. Facilities near this section of the trail include a mountain library, outdoor gym areas, historical sites, Samsungsan pilgrimage route and a few temples (Bodeok-sa, Yaksu-sa, Hoam-sa) and a great viewpoint to oversee Seoul's skyline. It is the perfect spot to relax out in nature, away from the hustle and bustle of the city.
                            </p>
                        }
                        <DetailImg>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-1.jpg`} alt="facilities1"/>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-2.jpg`} alt="facilities2"/>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-3.jpg`} alt="facilities3"/>
                        </DetailImg>
                    </DetailInfo>
                    <ShortInfo>
                        <div className='textbox'>
                            <h4>2. Seoul National University (15 minutes on foot)</h4>
                            <p>
                            Seoul National University (SNU) is one of the most prestigious and well renowned universities in Korea.<br/>
                            The SNU campus is easy to get to from Taehakgwan.
                            </p>
                        </div>
                        <div>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-4.jpg`} alt="facilities4" />
                        </div>
                    </ShortInfo>
                    <ShortInfo>
                        <div>
                            <img src={`${process.env.REACT_APP_IMG}images/img-facilities-5.jpg`} alt="facilities5" />
                        </div>
                        <div className='textbox'>
                            <h4>3. Dorim-cheon stream &amp; Bike path ( 7 minutes on foot )</h4>
                            <p>
                            Dorim-cheon stream is a river in Seoul that is known for cyclist-friendly roads that are near Taehakgwan. Additionally, there is a bike lane from our residence that will eventually take you to the Han river. <br/>It is the perfect spot to jog or to go on a walk.
                            </p>
                        </div>
                    </ShortInfo>
                </div>
            </Section>
            <Sns lang='en'/>
        </>
    );
}

export default Facility2;