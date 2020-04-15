import React from 'react';
import styled from 'styled-components';

class Language extends React.Component{
  state = {
    isLoading: true
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
      <div>Language</div>
      );
  }
}


export default Language;