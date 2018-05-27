
import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class DetailsView extends Component {
  constructor(props){
    super(props)
    this.state={
      value:null,
    }
    this.fetchData=this.fetchData.bind(this)
  }

  
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    debugger;
    const {id}= this.props.match.params;
    const me =this;
    fetch(`/content/${id}`, {
    method : 'get'
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      me.setState({
        value : data
      },()=>{console.log(me.state.value)})
    })
    .catch(console.log)
  }

  render() {
    const {value} = this.state;
    return (
      <div className='item-container jumbotron'>
      {console.log(value)}
      {value && console.log(value.link)}
      {
        value
        &&
        <div>
        
          <div>
          <table className="table table-hover">
          <tr><td>Title</td>
          <td><h2>{value.title}</h2></td>
          <br/></tr>
          <tr><td>Description
          <h2>{value.categories}</h2></td></tr>
         
     
        </table>
        <hr />
        <div className='item-buttons-container'>
         
         <Link to='/Listview'>
         <button className='btn item-buttons btn-success'>Back</button>
         </Link>
         
         </div>
          </div>
        </div>
        
      }
      
    </div>
    );
  }
}