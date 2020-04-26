import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Slide from './Slide';
import ARROW_R from '../images/arrow-right.png';
import ARROW_L from '../images/arrow-left.png';

const Container = styled.div`
  height: 913px;
  background-color: #a2c5c7;
  display: flex;
  align-items: center;
  padding: 0 5%;
`;

const Inner = styled.div`
    overflow: hidden;
    width: 1400px;
`

const Button = styled.button`
  all: unset;
  flex: 1;
  text-align: center;
  img{
    padding: 10px 32px;
    border-radius: 3em;
    width: 90px;
    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: .3em .2em 2em rgba(0,0,0,0.2);
      }
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;


const TOTAL_SLIDES = 2;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.7s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 

    const timer = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < TOTAL_SLIDES ? currentSlide + 1 : 0);
    }, 5000);
    return () => {
      clearInterval(timer);
    };

  }, [currentSlide]);
  
  return (
    <Container>
        <Button onClick={prevSlide}>
            <img src={ARROW_L} alt="왼쪽버튼" />
        </Button>
      <Inner>
        <SliderContainer ref={slideRef}>
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
                bgImg='gstp/images/banner-3.jpg' 
                href='facility'
                title='서울 둘레길' 
                desc='서울시에서 조성한 숲속의 산책공원 루트 입니다. 저희 지역은 ‘서울 둘레길 제 5구간’으로 되어져 있습니다.
                태학관에서 걸어서 5분이면 바로 연결되어져 있습니다. 태학관 인근 서울둘레길 명소로는 숲속의 도서관, 
                여러 체육시설(헬스장, 베트민턴장), 족구장, 국궁장, 조선 시대 유적 무덤, 한강과 여의도가 보이...'
            />
        </SliderContainer>
      </Inner>
        <Button onClick={nextSlide} className='right'>
            <img src={ARROW_R} alt="오른쪽버튼" />
        </Button>
    </Container>
  );
}
