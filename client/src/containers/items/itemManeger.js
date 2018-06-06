import React, { Component } from 'react';
import ItemForm from '../../components/items/itemForm.js';
import '../../styles/index.css';

 export default class ItemManeger extends Component {
  constructor(props){
    super(props)
    this.state={
      category : 1,
      difficulty : 1,
      type : 1,
      link : '',
      title : '',
      description : '',
    }
    //binding the functions
    this.submitFunc=this.submitFunc.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
  }
  // this function the forms input changes
  changeHandler(event){
    const {name, value}=event.target;
    this.setState({
      [name] : value
    })
  }
  // this function submits value in database
  submitFunc(event){
    event.preventDefault();
    console.log('state: ', this.state)
      return   fetch('/form', {
        method : "POST",
        body : JSON.stringify(this.state),
        headers: new Headers({
      		'Content-Type': 'application/json'
    		})
      }).then(()=>{window.location.href = "/categories";
})
  }
  render() {
    return (
      <div>
        <div>
          <ItemForm
              submitHandler={this.submitFunc}
              categoryHandler={this.changeHandler}
              difficultyHandler={this.changeHandler}
              linkHandler={this.changeHandler}
              titleHandler={this.changeHandler}
              descriptionHandler={this.changeHandler}
              typeHandler={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}
