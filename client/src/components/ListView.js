import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contentform from './Contentform';

class Listview extends Component {
  constructor(props) {
   super(props)
   this.state = {
       users: []
   }
}

componentDidMount() {
   let self = this;
   fetch('/contents', {
       method: 'GET'
   }).then(function(response) {
       if (response.status >= 400) {
           throw new Error("Bad response from server");
       }
       return response.json();
   }).then(function(data) {
       self.setState({users: data});
   }).catch(err => {
   console.log('caught it!',err);
   })
}

 render() {

   return (
     <div className="listview">
     <h2>Listview</h2>
     
     <Router>
    <div>
      <ul>
        
        <li>
          <Link to="/contentform"><input type="button" value="Add Content" /></Link>
        </li>
       
       
      </ul>

      <hr />

      <Route path="/contentform" component={Contentform} />
     

   
    </div>
  </Router>;

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
   <div>
           <table className="table table-hover" border="1">
               <thead>
        
         
               {this.state.users.map(contents =>
                       <tr key={contents.id}>
                       <td>{contents.categories} <br/><br/>
                       
                       <a href="">{contents.link}</a>
                       
                       </td>
                    
                     
                       
                  </tr>
               )}
        
               </thead>
           </table>
       </div>
    </div>
    

   );
 }
}
export default Listview;