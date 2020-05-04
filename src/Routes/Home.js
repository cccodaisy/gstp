import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import Sns from 'Components/Sns'
import Location from 'Components/Location'
import ARROW_R from 'images/arrow-right.png';
import ARROW_L from 'images/arrow-left.png';

const Section = styled.section`
  width: 100%;
  position: relative;
  height: 1080px;
  background: url('gstp/images/img-main.jpg') no-repeat center center;
  background-size: auto 100%;
  transition: all 0.5s ease-in-out;
  & .textbox{
      position: absolute;
      top: 58%;
      left: 0;
      width: 28%;
      height: 68px;
      line-height: 68px;
      text-align: center;
      background-color: #a2c5c7;
      color: white;
      font-size: 1.85em;
  }
  & h2{
      position: absolute;
      top: 67%;
      left: 0;
      color: white;
      font-size: 4.3em;
      line-height: 1.15;
      font-weight: bold;
      letter-spacing: -1px;
  }
`;

const Inner = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: ${props => props.height};
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
  .slick-dots li button:before{font-size:12px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'●';text-align:center;opacity:.25;color:#000}
  .slick-dots li.slick-active button:before{opacity:.75;color:#000}
`;

const RoomImg = styled.div`
    background: url(${props => props.bgImg}) white no-repeat center;
    background-size: 120%;
    width: 50%;
    height: 544px;
    display: block;
    float: left;
`

const RoomInfo = styled.div`
    font-size: 1.4em;
    position: relative;
    width: 50%;
    height: 544px;
    display: block;
    float: left;
    background: white;
    h3{
        font-size: 2em;
        color: #333;
        letter-spacing: -1px;
        width: 80%;
        margin: 16% 10% 6% 10%;
        font-weight: bold;
        margin-bottom: 70px;
    }
    div{
        line-height: 1.67;
        text-align: left;
        width: 80%;
        margin: 0 9%;
        text-overflow: ellipsis; 
        overflow: hidden;
    }
    .more{
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
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "50px", background: "url(" + ARROW_R + ") no-repeat center center", backgroundSize: "20px auto", position: "absolute", right: '-5%', top: 'calc(50% - 25px)', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "50px", background: "url(" + ARROW_L + ") no-repeat center center", backgroundSize: "20px auto", position: "absolute", left: '-5%', top: 'calc(50% - 25px)', zIndex: 1  }}
      onClick={onClick}
    />
  );
}

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
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
          <Inner height='100%'>
            <div className="textbox">Taehakgwan House</div>
            <h2>태학관은 다양한 국적의 <br />사람들이 모여사는 개인 원룸형<br/> 주거 공간입니다.</h2>
          </Inner>
        </Section>
        <SlideContainer>
          <Inner style={{padding: '106px 0'}}>
            <Slider {...settings}>
              <Slide
                bgImg='gstp/images/banner-1.jpg'
                href='/facility'
                title='함께 사용하는 공유 라운지'
                desc='공유 라운지는 태학관 모든 사람과 공유되는 공간으로 자유롭게 24시간 사용가능합니다. 자연스럽게 함께 사는 사람들과 소통하고 교류하며 이웃을 알 수 있습니다. 공유공간에서는 휴식과 다양한 커뮤니티 활동 프로그램을 가질 수 있습니다.'
              />
              <Slide
                bgImg='gstp/images/banner-2.jpg'
                href='/apartment/bed'
                title='원룸 타입별 안내'
                desc='태학관의 원룸은 기본 옵션이 냉장고, 세탁기, 전기인덕션, 부엌싱크대, 책상, 의자, 서재, 에어콘, 개인용 화장실과 샤워실(세면대)가 제공됩니다. 여러개의 원룸은 타입이 크게 두가지로 침대가 있는 원룸, 없는 원룸으로 나뉘어집니다. '
              />
              <Slide
                bgImg='images/banner-3.jpg'
                href='facility'
                title='서울 둘레길'
                desc='서울시에서 조성한 숲속의 산책공원 루트 입니다. 저희 지역은 ‘서울 둘레길 제 5구간’으로 되어져 있습니다.
                  태학관에서 걸어서 5분이면 바로 연결되어져 있습니다. 태학관 인근 서울둘레길 명소로는 숲속의 도서관, 
                  여러 체육시설(헬스장, 베트민턴장), 족구장, 국궁장, 조선 시대 유적 무덤, 한강과 여의도가 보이는 돌바위 view point, 
                  불교 사찰인(보덕사, 약수사, 호암사)...'
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