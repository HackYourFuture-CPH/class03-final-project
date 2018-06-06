import React from 'react';
import '../../styles/index.css'

export default class Rating extends React.Component{
  render(){
    const {rateUpHandler, rateDownHandler, index, rate_up, rate_down} = this.props
    return (
      <div className='rate-buttons'>
        {/* the rate up and down buttons */}
        <i className="fas fa-thumbs-up" onClick={()=>rateUpHandler(index)}>{rate_up}</i>
        <i className="fas fa-thumbs-down" onClick={()=>rateDownHandler(index)}>{rate_down}</i>
      </div>
    )
  }
}
