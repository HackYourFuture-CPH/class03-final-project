
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
    //debugger;
    const {id}= this.props.match.params;
    const me =this;
    fetch(`/content/${id}`, {
    method : 'get'
    })
    .then(function(response){
      //console.log(response.json());
      return response.json();
    })
    .then(function(data){
      me.setState({
        value : data
      },()=>{console.log(`${JSON.stringify(me.state.value)}`)})
    })
    .catch(console.log)
  }

  render() {
    const {value} = this.state;
    return (
      <div className='item-container jumbotron'>

      {value && value.link &&
      
       
          <div class="w3-container">
          <h2>Details Overview</h2>
          <table className="table table-hover" border="0">
          
          <tr><td><h2>Title</h2></td>
          <td>{value.title}</td>
          <br/></tr>
          <tr><td><h2>Link</h2></td>
          <td>{value.link}</td>
          <br/></tr>
          <tr><td><h2>Description</h2></td>
          <td>{value.description}</td></tr>
          
         
     
        </table>
        <hr />
     
         
         <Link to='/'>
         <button className='btn item-buttons btn-success'>Back</button>
         </Link>
         <button className='btn item-buttons btn-success'><a target='_blank' href={value.link}>Visit Link</a></button>
         </div>
      }
      
    </div>
    );
  }
}