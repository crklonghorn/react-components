import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import WhiteCard from '../white-card/white-card';
import MainCard from '../main-card/main-card';
import SideCard from '../side-card/side-card';
import Weather from '../weather/weather';

class App extends Component {   
        
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Dashboard</h1>
        </header>
        
        <div className="container-fluid App-main">
            <div className="row">
                <div className="col-sm-9 col-app-left">
                    <WhiteCard />
                    <MainCard />
                </div>
                <div className="col-sm-3 col-app-right">
                    <Weather />
                    <SideCard />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
