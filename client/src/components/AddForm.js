import React from 'react';


export default class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            category: '',
            difficulty : '',
            type: '',
            link: '',
            description:''
          }
          this.submitForm = this.submitForm.bind(this);
          this.changeData = this.changeData.bind(this);
    }
    submitForm(event) {
        if (this.state.title == '' || this.state.category == '' || this.state.difficulty == '' || this.state.type == '' || this.state.link == '' || this.state.description == '')  return
        event.preventDefault()
        var data = {
            category: this.state.category,
            difficulty: this.state.difficulty,
            link: this.state.link,
            title: this.state.title,
            type: this.state.type,
            description:this.state.description
        }
        fetch('/newContent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data.success == true){
               window.location.href = '/categories/'+data.category; 
            }
        }).catch(function(err) {
            console.log(err)
        });
    }
    changeData(event) {
        this.setState({[event.target.name]: event.target.value}); 
    }
    render(){
        return(
            <form onSubmit={this.submitForm} className="addForm">
                <table>
                    <tbody>
                    <tr>
                        <td><label>Title: </label></td>
                        <td><input name="title" onChange={this.changeData} type='text' /></td>
                    </tr>
                    <tr>
                        <td><label>Category: </label></td>
                        <td>
                        <select name="category" onChange={this.changeData}>
                            <option value=""></option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="js">JAVASCRIPT</option>
                            <option value="others">Others</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Difficulty: </label></td>
                        <td>
                            <select name="difficulty" onChange={this.changeData}>
                                <option value=""></option>
                                <option value="basic">Basic</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="high">High</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Type: </label></td>
                        <td>
                            <select name="type" onChange={this.changeData}>
                                <option value=""></option>
                                <option value="video">Video</option>
                                <option value="audio">Audio</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Link: </label></td>
                        <td><input name="link" onChange={this.changeData} type='text' /></td>
                    </tr>
                    <tr>
                        <td><label>Description: </label></td>
                        <td> <textarea onChange={this.changeData} name="description" /></td>
                    </tr>
                    </tbody>
                </table>
                <input type="submit" value='Add content' />
            </form>
        )
    }
}