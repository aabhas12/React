import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Footer from "./Footer";

class App extends Component {
    constructor(){
        super();
        this.state = {title:"Aabhas is not here"};
    }
    render() {
        setTimeout(()=>{this.setState({title:"Aabhas is here"});},2000)
        const title = "Aabhas is here";
        return (
            <div className="App">
                <Header title={this.state.title}/>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React Aabhas</h1>
                <Footer/>
            </div>
        );
    }
}

export default App;
