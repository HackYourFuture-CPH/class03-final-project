 import React, { Component } from 'react';
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 // create a new class by name of Detailsview
export default class DetailsView extends Component { 
  constructor(props){ // using contructor and super method
    super(props)
    this.state={ // set inital state to empty string
      value:null,
    }
    this.fetchData=this.fetchData.bind(this)
  }
  //Use a componentDidMount lifecycle method,use fetch to fetch inforamtion from database
componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    //debugger;
    const {id}= this.props.match.params;
    const me =this;
    fetch(`/content/${id}`, {
    method : 'GET'
    })
    .then(function(response){
    //console.log(response.json());
      return response.json();
    })
    .then(function(data){
      me.setState({// use setset to set new values to data fetched from database
        value : data
      },()=>{console.log(`${JSON.stringify(me.state.value)}`)}) // data can be `string` or {object}!
    })
    .catch(console.log)
  }

  render() {
    const {value} = this.state;
    return (
      <div className='item-container  jumbotron'>
      {value && value.link && <div class="w3-container">
      <h2>Details of selected Topic</h2>
  <p>Please find the description of Topic below:</p><hr />   
      <table class="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Link</th>
        <th>Description</th>
      </tr>
    </thead>
      <tbody>
        <tr>
           <td>{value.title}</td>
           <td>{value.link}</td>
           <td>{value.description}</td>
        </tr> 
        </tbody>
        </table>
      <Link to='/'>
      <button className='btn item-buttons btn-success'>Back</button>
     </Link>
      <button className='btn item-buttons btn-success'>
      <a target='_blank' href={value.link}>Visit Link</a>
      </button>
      <hr /> </div>
 }
     </div>
    );
  }
}
