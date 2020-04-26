import React from 'react';
import styled from 'styled-components';
import Sns from '../Components/Sns'
import Slider from '../Components/Slider'
import Location from '../Components/Location'
import ARROW_R from '../images/arrow-right.png';
import ARROW_L from '../images/arrow-left.png';

const Section = styled.section`
  width: 100%;
  position: relative;
  height: 1080px;
  background: url('gstp/images/img-main.jpg') no-repeat center center;
  background-size: auto 100%;
  transition: all 0.5s ease-in-out;
  .inner{
    position: relative;
    width: 1400px;
    margin: 0 auto;
    height: 100%;
  }
  & .textbox{
      position: absolute;
      top: 58%;
      left: 1%;
      width: 28%;
      height: 68px;
      line-height: 68px;
      text-align: center;
      background-color: #a2c5c7;
      color: white;
      font-size: 1.6em;
  }
  & h2{
      position: absolute;
      top: 67%;
      left: 1%;
      color: white;
      font-size: 5.2em;
      line-height: 1.15;
      font-weight: 500;
      letter-spacing: -1px;
  }
`;

class Home extends React.Component{
  render(){
    return (
      <>
        <Section>
          <div className="inner">
            <h1>태학관</h1>
            <div className="textbox">Tae Hak Gwan House</div>
            <h2>태학관은 다양한 국적의 <br/>사람들이 모여사는 개인 원룸형 주거 공간입니다.</h2>
          </div>
        </Section>
        <Slider/>
        <Sns snsText="입주 문의 및 기타 상담은 카카오톡과 위챗앱을 통해서 가능합니다." />
        <Location/>
      </>
    );
  }
}


export default Home;