import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css'
import {Link} from 'react-router-dom';
import Selectbutton from './selectButton.js'


 export default class ItemForm extends Component {

  render() {
    return (
      <div>
       <h3 className='header'>add content</h3>
        <div className="Form">
          <form onSubmit={this.props.submitHandler}>
          {/* the Category selection */}
            <Selectbutton
              changeHandler={this.props.categoryHandler}
              name='Category' value={['Webdesign', 'NodeJS', 'Database', 'Architecture']}
             />
            {/* the type selection */}

              <Selectbutton
                changeHandler={this.props.typeHandler}
                name='Type' value={['video', 'article', 'other']}
               />
            {/* the difficulty selection */}

            <Selectbutton
              changeHandler={this.props.difficultyHandler}
              name='Difficulty' value={['Easy', 'Intermediate', 'Hard']}
             />
            {/* the link input */}

            <div className='formItem'>
            <label>title:<br/>
              <input type='text'
                onChange={this.props.titleHandler}/>
            </label>
            </div>
            {/* the title input */}

            <div>
            <label>Link: <br/>
            <input className='err' type='text' onChange={this.props.linkHandler}/>
            </label>
            </div>
            {/* the Description input */}
            <div>
            <label>Description:<br/>
            <textarea className='err'
              rows="4"
              cols="37"
              placeholder="Describe what you are linking to and why the link is worth visiting."
              onChange={this.props.descriptionHandler}
            >
            </textarea>
            </label>
            </div>
            {/*the submit button*/}
            <input type="submit" value="Submit"/>
            <Link to='/list'>
            <input type="button" value='view content'/>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

ItemForm.proptypes={
  submitHandler : PropTypes.func.isRequired,
  categoryHandler : PropTypes.func.isRequired,
  difficultyHandler : PropTypes.func.isRequired,
  linkHandler : PropTypes.func.isRequired,
  titleHandler : PropTypes.func.isRequired,
  descriptionHandler : PropTypes.func.isRequired,
  typeHandler:PropTypes.func.isRequired

}
