import React from 'react';
import styled from 'styled-components';
import Sns from 'Components/Sns'
import Location from 'Components/Location'

const Section = styled.section`
  width: 100%;
  position: relative;
  &.main{
      height: 1080px;
      background: url('./images/img-main.jpg') #333 no-repeat center center;
      transition: all 0.5s ease-in-out;
      .inner{
        position: relative;
        width: 1140px;
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
  }
  &.rooms{
      height: 913px;
      background-color: #a2c5c7;
      display: flex;
      align-items: center;
      .inner{
        position: relative;
        width: 1320px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
      }
      & .left{
          flex: 1;
          width: 24px;
          height: 70px;
          background-color: white;
      }
      & .box{
          flex: 12;
          background-color: white;
          display: flex;
          align-items: center;
          position: relative;
          & .room{
              flex: 4;
              background: url('./images/banner-1.jpg') no-repeat center;
              width: 941px;
              height: 680px;
          }
          & .info{
              flex: 3;
              font-size: 1.4em;
              position: relative;
              height: 680px;
              h4{
                  font-size: 40px;
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
                  margin: 0 10%;
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
                  &:hover{
                    background-color: #ebeb14;
                  }
              }
          }
      }
      & .right{
          flex: 1;
          width: 24px;
          height: 70px;
          background-color: white;
      }
  }
`;

class Home extends React.Component{
  state = {
    isLoading: true,
  };
  getMovies = async () => {
    this.setState({ isLoading: false });
  }
  componentDidMount(){  
    this.getMovies();
 }
  render(){
    const { isLoading } = this.state;
    return (
      <>
        <Section className="main">
          <div className="inner">
            <h1>태학관</h1>
            <div className="textbox">Tae Hak Gwan House</div>
            <h2>태학관은 다양한 국적의 <br/>사람들이 모여사는 개인 원룸형 주거 공간입니다.</h2>
          </div>
        </Section>
        <Section className="rooms">
          <div className="inner">
            <div className="left"></div>
            <div className="box">
              <div className="room"></div>
              <div className="info">
                <h4>함께 사용하는 공유 라운지</h4>
                <div>
                  공유 라운지는 태학관 모든 사람과 공유되는 공간으로 자유롭게 24시간 사용가능합니다. 자연스럽게 함께 사는 사람들과 소통하고 교류하며 이웃을 알 수 있습니다. 공유공간에서는 휴식과 다양한 커뮤니티 활동 프로그램을 가질 수 있습니다. 
                </div>
                <a href="/rooms">
                  <span className="more">더보기 > </span>
                </a>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </Section> 
        <Sns/>
        <Location/>
      </>
    );
  }
}


export default Home;