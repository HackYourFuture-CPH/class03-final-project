import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/index.css';



 export default class HomePage extends Component {
   clickHandler(e){
      window.location.href = '/categories'
   }
  render() {
    return (
      <div>
      <div className='image-container'>
        <div className='img-content'>
          <p className='img-text'>Discover the most usefull centent in the web development community</p>
          <button className='btn btn-warning' onClick={this.clickHandler}>view categories</button>
        </div>
      </div>
      </div>
    );
  }
}
