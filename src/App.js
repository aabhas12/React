import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Footer from "./Footer";

class App extends Component {
    render() {
        const title = "Aabhas is here";
        return (
            <div className="App">
                <Header title={title}/>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React Aabhas</h1>
                <Footer/>
            </div>
        );
    }
}

export default App;
