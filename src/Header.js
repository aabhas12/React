import React, { Component } from 'react';
import './App.css';
import Title from "./Header/Title";

class Header extends Component {
  render() {
      console.log(this.props);
    return (
    <Title title={this.props.title}/>
        );
  }
}

export default Header;
