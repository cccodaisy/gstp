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

const Moving = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
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
      top: 50%;
      transform:translateX(-50%);
      line-height: 3.4;
    }
    & h2{
      font-size: 2.4em;
      text-align: center;
      line-height: 1.3;
      padding-bottom: 40px;
      left: 50%;
      top: 63%;
      width: 80%;
      transform:translateX(-50%);
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
        <span className="more">더보기 > </span>
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
          <h1>태학관</h1>
          <Inner>
            <div className="textbox">Taehakgwan House</div>
            {this.state.windowWidth > 780 ? 
            <h2>태학관은 다양한 국적의 <br />사람들이 모여사는 개인 원룸형<br/> 주거 공간입니다.</h2> 
            : 
            <h2>태학관은 다양한 국적의 사람들이 모여사는 개인 원룸형 주거 공간입니다.</h2>}
            <img src={ARROW_D} alt='아래화살표'/>
          </Inner>
        </Section>
        <SlideContainer>
          <Inner style={this.state.windowWidth > 780 ? {padding: '6% 0', minHeight: '400px'} : {padding: '30px 0'}}>
            <Slider {...settings}>
              <Slide
                bgImg='images/banner-1.jpg'
                href='/facility'
                title='함께 사용하는 공유 라운지'
                desc='공유 라운지는 태학관 모든 사람과 공유되는 공간으로 자유롭게 24시간 사용가능합니다. 자연스럽게 함께 사는 사람들과 소통하고 교류하며 이웃을 알 수 있습니다. 공유공간에서는 휴식과 다양한 커뮤니티 활동 프로그램을 가질 수 있습니다.'
              />
              <Slide
                bgImg='images/banner-2.jpg'
                href='/apartment/bed'
                title='원룸 타입별 안내'
                desc='태학관의 원룸은 기본 옵션이 냉장고, 세탁기, 전기인덕션, 부엌싱크대, 책상, 의자, 서재, 에어콘, 개인용 화장실과 샤워실(세면대)가 제공됩니다. 여러개의 원룸은 타입이 크게 두가지로 침대가 있는 원룸, 없는 원룸으로 나뉘어집니다. '
              />
              <Slide
                bgImg='images/banner-3.jpg'
                href='facility'
                title='서울 둘레길'
                desc={this.state.windowWidth > 780 ? `서울시에서 조성한 숲속의 산책공원 루트 입니다. 저희 지역은 '서울 둘레길 제 5구간'으로 되어져 있습니다.
                  태학관에서 걸어서 5분이면 바로 연결되어져 있습니다. 태학관 인근 서울둘레길 명소로는 숲속의 도서관, 
                  여러 체육시설(헬스장, 베트민턴장), 족구장, 국궁장, 조선 시대 유적 무덤, 한강과 여의도가 보이는 돌바위...` 
                  : 
                  `서울시에서 조성한 숲속의 산책공원 루트 입니다. 저희 지역은 '서울 둘레길 제 5구간'으로 되어져 있습니다.
                  태학관에서 걸어서 5분이면 바로 연결되어져 있습니다. 태학관 인근 서울둘레길 명소로는 숲속의 도서관, 
                  여러 체육시설(헬스장, 베트민턴장)...`
                }
              />
            </Slider>
          </Inner>
        </SlideContainer>
        {/* <Slider/> */}
        <Sns snsText="입주 문의 및 기타 상담은 카카오톡과 위챗앱을 통해서 가능합니다." />
        <Location />
      </>
    );
  }
}

export default Home;