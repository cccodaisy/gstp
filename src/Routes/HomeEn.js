import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from "react-slick";
import Sns from 'Components/Sns'
import Location from 'Components/Location'
import ARROW_R from 'images/arrow-right.png';
import ARROW_L from 'images/arrow-left.png';
import ARROW_D from 'images/arrow-down.png';

const goToDown = keyframes`
  0% {
    margin-bottom: 40px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    margin-bottom: 0;
    opacity: 0;
  }
`;

const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MobileMoving = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
`;

const Moving = keyframes`
  0% {
    opacity: 0;
    margin-bottom: -50px;
  }
  100% {
    opacity: 1;
    margin-bottom: 0;
  }
`;

const Section = styled.section`
  width: 100%;
  position: relative;
  background: url('images/img-main.jpg') #ccc no-repeat center top;
  background-size: cover;
  transition: all 0.5s ease-in-out;
  @media only screen and (max-width: 780px) { 
    background-position: 56% 50%;
    background-size: auto 100%;
  }
`;

const Inner = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 880px;
  max-height: 1080px;
  & .textbox{
      position: absolute;
      bottom: 40%;
      left: 2%;
      padding: 0 40px;
      line-height: 2.7;
      text-align: center;
      background-color: #a2c5c7;
      color: white;
      font-size: 1.85em;
      animation: ${Fade} .8s ease-in-out;
  }
  & h2{
      position: absolute;
      bottom: 2%;
      left: 2%;
      padding-bottom: 10%;
      color: white;
      font-size: 4.3em;
      line-height: 1.15;
      font-weight: bold;
      letter-spacing: -1px;
      animation: ${Moving} 1.5s ease-in-out;
  }
  & > img{
    display: none;
  }
  
  @media only screen and (max-width: 780px) { 
    max-height: 860px;
    min-height: 700px;
    & .textbox{
      font-size: 1.5em;
      padding: 0 30px;
      margin: 0 auto;
      width: 250px;
      left: 50%;
      top: 40%;
      bottom: unset;
      transform:translateX(-50%);
      line-height: 3.4;
    }
    & h2{
      font-size: 2.4em;
      text-align: center;
      line-height: 1.3;
      padding-bottom: 40px;
      left: 50%;
      top: 53%;
      width: 80%;
      transform:translateX(-50%);
      animation: ${MobileMoving} 1.5s ease-in-out;
    }
    & > img{
      display: block;
      animation: ${goToDown} 2s infinite ease-in-out;
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform:translateX(-50%);
      width: 50px;
    }
  }
`;

const SlideContainer = styled.div`
  width: 100%;
  background-color: #a2c5c7;
  & .slick-slider{
    box-sizing: border-box;
    & .slick-list, & .slick-track{
      transform: translateZ(0);
    }
  }
  & .slick-list, & .slick-slider {
    position: relative;
    display: block;
  }
  & .slick-list{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  & .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  & .slick-initialized .slick-slide {
    display: block;
  }
  & .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  .slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}
  .slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:13px 5px;padding:0;cursor:pointer}
  .slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}
  .slick-dots li button:focus,.slick-dots li button:hover{outline:0}
  .slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}
  .slick-dots li button:before{font-size:1rem;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'●';text-align:center;opacity:.25;color:#000}
  .slick-dots li.slick-active button:before{opacity:.75;color:#000}

`;

const RoomImg = styled.div`
    background: url(${props => props.bgImg}) white no-repeat center;
    background-size: 120%;
    width: 50%;
    height: 544px;
    display: block;
    float: left;
    @media only screen and (max-width: 780px) { 
      width: 88%;
      margin-left: 6%;   
      height: 300px;
      float: unset;
    }
`

const RoomInfo = styled.div`
    font-size: 1.4em;
    position: relative;
    width: 50%;
    height: 544px;
    display: block;
    float: left;
    background: white;
    & h3{
        font-size: 2em;
        color: #333;
        letter-spacing: -1px;
        width: 80%;
        margin: 16% 10% 6% 10%;
        font-weight: bold;
    }
    & div{
        line-height: 1.67;
        text-align: left;
        width: 80%;
        margin: 0 9%;
        text-overflow: ellipsis; 
        overflow: hidden;
    }
    & .more{
        padding: 20px 60px;
        text-align: center;
        font-weight: bold;
        color: #4d4d4d;
        background-color: #ffff25;
        border-radius: 2em;
        position: absolute;
        bottom: 12%;
        left: 10%;
        transition: background-color 0.3s linear;
        &:hover{
          background-color: #ebeb14;
        }
    }
    @media only screen and (max-width: 780px) { 
      width: 88%;
      margin-left: 6%;   
      height: 460px;
      float: unset;
      padding-top: 60px;
      & h3{
        margin: 0 auto;
        font-size: 1.3em;
        width: 100%;
        text-align: center;
      }
      & div{
        font-size: 0.9em;
        margin: 33px auto;
        text-align: center;
      }
      & .more{
        padding: 20px 0;
        width: 55%;
        display: block;
        margin: 0 auto;
        position: unset;
      }
    }
`

const Slide = (props) => (
  <>
    <RoomImg bgImg={props.bgImg} />
    <RoomInfo>
      <h3>{props.title}</h3>
      <div>
        {props.desc}
      </div>
      <a href={props.href}>
        <span className="more">To see more > </span>
      </a>
    </RoomInfo>
  </>
)

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    window.innerWidth > 780 ? 
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "50px", background: "url(" + ARROW_R + ") no-repeat center center", backgroundSize: "20px auto", position: "absolute", right: '-5%', top: 'calc(50% - 25px)', zIndex: 1 }}
      onClick={onClick}
    />
    :
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    window.innerWidth > 780 ? 
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "50px", background: "url(" + ARROW_L + ") no-repeat center center", backgroundSize: "20px auto", position: "absolute", left: '-5%', top: 'calc(50% - 25px)', zIndex: 1  }}
      onClick={onClick}
    />
    :
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

class Home extends React.Component {
  state={
    windowWidth: window.innerWidth
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const settings = {
      dots: this.state.windowWidth > 780 ? false : true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <>
        <Section>
          <h1>Taehakgwan</h1>
          <Inner>
            <div className="textbox">Taehakgwan House</div>
            <h2>Taehakgwan offers housing for people all over the world where they get to reside in private apartments.</h2>
            <img src={ARROW_D} alt='arrow_down'/>
          </Inner>
        </Section>
        <SlideContainer>
          <Inner style={this.state.windowWidth > 780 ? {padding: '6% 0', minHeight: '400px'} : {padding: '30px 0'}}>
            <Slider {...settings}>
              <Slide
                bgImg='images/banner-1.jpg'
                href='/en/facility/lounge'
                title='The common area for everyone'
                desc={this.state.windowWidth > 780 ? 
                  "The common area is shared by all members of Taehakgwan and is available 24/7.  It is where residents can relax and have fun. You can engage and get to know the other residents and participate in various community programs at Taehakgwan's common area."
                   :
                "The common area is shared by all members of Taehakgwan and is available 24/7.  It is where residents can relax and have fun. You can engage and get to know..."}
              />
              <Slide
                bgImg='images/banner-2.jpg'
                href='/en/apartment/bed'
                title='Types of apartments'
                desc={this.state.windowWidth > 780 ? 'At Taehakgwan, each studio apartment comes with a personal bathroom including a sink and a shower booth. Additionally, every resident will get a refrigerator, washing machine, induction stove top, kitchen sink, desk, chair and air conditioner in their studio. You can decide to stay in either a studio...' 
                : 'At Taehakgwan, each studio apartment comes with a personal bathroom including a sink and a shower booth. Additionally, every resident will get...'}
              />
              <Slide
                bgImg='images/banner-3.jpg'
                href='/en/facility/nearby'
                title='The Seoul Trail'
                desc={this.state.windowWidth > 780 ? `The Seoul Trail, consisting of urban terrains and greenery, circumscribes the entire city of Seoul. Taehakgwan is close to the 5th section of the Seoul trail and is only 5 minutes by walking. Facilities near this section of the trail include a mountain library, outdoor gym areas, historical sites, Samsungsan... ` 
                  : 
                  `The Seoul Trail, consisting of urban terrains and greenery, circumscribes the entire city of Seoul. Taehakgwan is close to the 5th section of...`
                }
              />
            </Slider>
          </Inner>
        </SlideContainer>
        {/* <Slider/> */}
        <Sns lang='en'/>
        <Location lang='en' />
      </>
    );
  }
}

export default Home;