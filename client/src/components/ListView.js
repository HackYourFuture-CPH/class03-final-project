import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



//In a new component, we’ll create a new class by name Listview
class Listview extends Component { 
  constructor(props){//use a constructor and super method to pass props down
    super(props)
    this.state={ //this.state to set the state of initvalue and newvalue to an empty string.
      initValue:null,
      newValue:null
     }
  this.categoriesFilter=this.categoriesFilter.bind(this)
  this.difficultyFilter=this.difficultyFilter.bind(this)
  this.typeFilter=this.typeFilter.bind(this)
  this.upvote = this.upvote.bind(this)
 }
 // Use a componentDidMount lifecycle method,use fetch to fetch inforamtion from database
componentDidMount(){
  this.fetchData()
}
//fetch data by fetch Api 
fetchData(){
  const me =this;
  fetch("/contents", {
  method : 'GET'
  })
  .then(function(response){
   return response.json()
  })
  .then(function(data){
    me.setState({//use this.setState to set the state of the messages to the new state using the data we just fetched
    initValue :data,
    newValue:data
    },()=>{
  console.log(me.state.initValue)})
  })
  .catch(console.log)
}
// it's function call when (onchange) event happen
categoriesFilter(event){
 const {initValue}=this.state;
  const filtering = initValue.filter(a=> {
  return a.categories === event.target.value})
  console.log(event.target.value)
  event.target.value==="all categories"? this.setState({newValue : this.state.initValue})
  :this.setState({newValue : filtering})
}
// it's function call when (onchange) event happen
difficultyFilter(event){
  const {initValue}=this.state;
  const filtering = initValue.filter(a=>{ 
  return a.difficulty === event.target.value})
  console.log(event.target.value)
  event.target.value==="all levels"? this.setState({newValue : this.state.initValue}) 
  :this.setState({newValue : filtering})
}
typeFilter(event){
  const {initValue}=this.state;
  const filtering = initValue.filter(a=>{
  return a.type === event.target.value})
  console.log(event.target.value)
  event.target.value==="all types"? this.setState({newValue : this.state.initValue})
   :this.setState({newValue : filtering})
}
upvote(id,upvotes){
// for rating 
fetch('/upvote', {
// post data to database
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ //data can be string or data
      id: id,
      upvotes: upvotes,  
     })
  })
    .catch((err) => {
      alert('Error occured while trying to upvote');
    });
    this.fetchData();
}
/*downvote(id,downvotes){
   
  fetch('/upvote', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      downvotes: downvotes,
     
    })
  })
    .catch((err) => {
      console.log('Error occured while trying to downvote');
    });
    this.fetchData();
  }*/
  render() {
  const {newValue, initValue} = this.state;
return (
  
  <div class="row content">
    <div class="col-sm-3 sidenav">
  <h2>Search By</h2>
<form >
 <label>Categories: </label><br />
   <select name="categories"onChange={this.categoriesFilter}>
   <option value="allcategories">All Categories</option>
     <option value="javascript">Javascript</option>
     <option value="css">CSS</option>
     <option value="mysql">MYSQL</option>
     <option value="php">PHP</option>
    <option value="github">GITHUB</option>
    <option value="others">Others</option>
    </select><br />
  <label>Difficulty: </label><br />
    <select name="difficulty" onChange={this.difficultyFilter}>
    <option value="alllevels">ALL Levels</option>
    <option value="Basic">Basic</option>
    <option value="Intermediate">Intermediate</option>
    <option value="High">High</option>
    </select><br />
  <label>Type: </label><br />
    <select name="type" onChange={this.typeFilter}>
    <option value="allltypes">ALL Types</option>
    <option value="Video">Video</option>
    <option value="Audio">Audio</option>
    <option value="Article">Article</option>
    <option value="Others">Others</option>
    </select><br />
<input type="submit" value="Search" /><hr />
  </form>
  </div>'
  {
    initValue &&
  <div className="w3-container">
    {
    newValue.map(a=>{
    const index = newValue.indexOf(a);
  return (
  //Keys help React identify which items have changed, are added, or are removed.
  //don’t have stable IDs for rendered items, you may use the item index as a key 
  <div key={index} className="w3-container">
  <Link to={`/Detailsview/${a.id}`}>
  <table class="table">
  <tbody>
    <tr><td>
    <h2> <b> {a.title}</b></h2>
    <p> {a.link}</p>
    <p>{a.type}</p></td></tr>
    </tbody>
   </table>
 </Link>
  <button value="Upvote" key={a.id} onClick={()=>{
  this.upvote(a.id,a.upvote)
   }} >Like ({a.upvote})</button><hr />
  </div>
 )
})
}
</div>
}
</div>

    

   );
 }
}
export default Listview;