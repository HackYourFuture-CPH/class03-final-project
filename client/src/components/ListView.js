import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contentform from './Contentform';

class Listview extends Component {
  render() {

    return (
      <div className="listview">
      <h2>Listview</h2>
  <Router>
      
   <Link to="/"><input type="button" value="Add Content" /></Link>
   </Router>
  <hr />
  <form >
  <label>Categories: </label>  <br />
    <select name="categories">
      <option value="javascript">Javacript</option>
      <option value="css">CSS</option>
      <option value="mysql">MYSQL</option>
      <option value="others">Others</option>
     </select>
     <br />
                
     <label>Difficulty: </label>  <br />
     <select name="difficulty">
     <option value="Basic">Basic</option>
     <option value="Intermediate">Intermediate</option>
    <option value="High">High</option>
               
     </select>
                
    <br />
    <label>Type: </label>  <br />
    <select name="type">
    <option value="Video">Video</option>
     <option value="Audio">Audio</option>
     </select>
    <br />
<input type="submit" value="Search" />
<hr />
    </form>
     </div>

    );
  }
}

export default Listview;