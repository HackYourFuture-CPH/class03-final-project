import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListView from './components/ListView';
import DetailsView from './components/Detailsview';

import './styles/App.css';
import './styles/styles.css';
import './styles/index.css';
import Contentform from './components/Contentform';



class App extends Component {
 
  render() {
    return (
      
  <div className="App">

   <Router>
    <div>
      <ul>
      <li>
          <Link to="/"><h1 className="App-title">SharingPoint</h1></Link>
        </li>
       
        <li>
        <Link to="/contentform"><h3>Add Content</h3></Link>
        </li>
        
      </ul>

    

    <Route exact path="/Detailsview/:id" component={DetailsView} />
       
       <Route exact path="/" component={ListView}/>
       <Route exact path="/Contentform" component={Contentform}/>
    </div>
  </Router>
   </div>
    );
  }
 }
 
 export default App;