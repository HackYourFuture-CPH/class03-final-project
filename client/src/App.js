import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contentform from './Components/Contentform';
import ListView from './Components/ListView';
import './Styles/App.css';
import './Styles/styles.css';


class App extends Component {
 
  render() {
    return (
      
       <div className="App">
        
        
    
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SharingPoint</h1>
        </header>
   
       <ListView/>,
        
      
 
      </div>
    );
  }
 }
 
 export default App;