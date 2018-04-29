import React, { Component } from 'react';
import logo from './logo.svg';

import Contentform from './Components/Contentform';
import ListView from './Components/ListView';
import './Styles/App.css';
import './Styles/styles.css';


class App extends Component {

  let j;


componentDidMount() {
  
  fetch('/contents', {
	method: 'get'
}).then(function(response) {
 console.log(response);

   
  return response.json();
  }).then(function(j) {
   j = j; 
  });
	 }

  render() {



    return (
      
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SharingPoint</h1>
          <h1>{j}</h1>
        </header>
        <Contentform/>
         <ListView/>
         <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Categories</th>
                            <th>Difficulty</th>
                            <th>link</th>
                            <th>Type</th>
                            <th>Descritop</th>
                        </tr>
                    </thead>
                    </table>
        </div>
    );
  }
}

export default App;