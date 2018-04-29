import React, { Component } from 'react';




class Contentform extends Component {
  render() {
    return (
      <div className="Test">
      
       <h2>Add Contents</h2>
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
                <label>Link: </label>  <br />
                <input type="text" name="link"  placeholder="Enter URL" />
                <br />
                  
                <label>Title: </label>  <br />
                <input type="text" name="title" placeholder="Enter a Title" />
                <br />
                <label>Type: </label>  <br />
                <select name="type">
                <option value="Video">Video</option>
                <option value="Audio">Audio</option>
               
          
                </select>
                <br />
      
                <label>Description: </label>  <br />
                <textarea name="description" rows="10" cols="40"  placeholder="Descriptions.."></textarea>
                <br />
               
 
               
                
 
                <input type="submit" value="Submit" />
                <input type="submit" value="Cancel" />
 
                <hr />
              </form>
      </div>
    );
  }
}

export default Contentform;