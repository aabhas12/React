import React, { Component } from 'react';
import './App.css';
import Title from "./Header/Title";

class Header extends Component {
    changetheheader(e){
    const title = e.target.value;
    this.props.changetext(title);
        }
    render() {

        console.log(this.props);
        return (
            <div>
                <Title title={this.props.title}/>
                <input onChange={this.changetheheader.bind(this)}/>
            </div>
        );
    }
}

export default Header;
