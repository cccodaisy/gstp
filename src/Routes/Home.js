import React from 'react';
import styled from 'styled-components';

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
        <section className="main">
          <h1>태학관</h1>
          <div className="textbox">Tae Hak Gwan House</div>
          <h2>태학관은 다양한 국적의 <br/>사람들이 모여사는 개인 원룸형 주거 공간입니다.</h2>
        </section>
        <section className="rooms">
          <div className="left"></div>
          <div className="box">
            <div className="room"></div>
            <div className="info">
              <h4>함께 사용하는 공유 라운지</h4>
              <div>
                공유 라운지는 태학관 모든 사람과 공유되는 공간으로 자유롭게 24시간 사용가능합니다. 자연스럽게 함께 사는 사람들과 소통하고 교류하며 이웃을 알 수 있습니다. 공유공간에서는 휴식과 다양한 커뮤니티 활동 프로그램을 가질 수 있습니다. 
              </div>
              <span className="more">더보기 > </span>
            </div>
          </div>
          <div className="right"></div>
        </section>      
      </>
    );
  }
}


export default Home;