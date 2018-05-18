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
    const me =this;
    fetch("/list", {
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
    //const bla =this.props.match.params.id
    return (
      <div className='item-container jumbotron'>
          {value && Object.keys(this.props).length >1 && this.props.match.params &&
          <div>
          <div className='item-buttons-container'>
          {/*back to list button*/}
          <Link to='/list'>
          <button className='btn item-buttons btn-success'>back to the list</button>
          </Link>
          {/*visit the site button*/}
          <a className='btn item-buttons btn-success' target='_blank' href={value[this.props.match.params.id].link}>visit wedsite</a>
          </div>
          {
            <div>
            <p>title</p>
            <h2>{value[this.props.match.params.id].title}</h2>
            <p>category</p>
            <h2>{value[this.props.match.params.id].category}</h2>
            <p>Description</p>
            <h4>{value[this.props.match.params.id].description ?
              value[this.props.match.params.id].description :
              <p>no description...</p>

            }</h4>
            </div>
          }
        </div>
      }
    </div>
    );
  }
}
