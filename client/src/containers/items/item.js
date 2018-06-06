import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../styles/index.css'


export default class Item extends Component {
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
    const {id}= this.props.match.params;
    const me =this;
    fetch(`/list/${id}`, {
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
      {value&&console.log(value.link)}
      {
        value
        &&
        <div>
          <div className='item-buttons-container'>
          {/*back to list button*/}
          <Link to='/categories'>
          <button className='btn item-buttons btn-success'>back to the list</button>
          </Link>
          {/*visit the site button*/}
          <a className='btn item-buttons btn-success' target='_blank' href={value.link}>visit wedsite</a>
          </div>
          <div>
          <p>title</p>
          <h2>{value.title}</h2>
          <br/>
          <p>Description</p>
          <h2>{value.category}</h2>
          <p className='description'>
           {value.description ?
            value.description :
            <p>no description...</p>
          }</p>
          </div>
        </div>
      }
    </div>
    );
  }
}
