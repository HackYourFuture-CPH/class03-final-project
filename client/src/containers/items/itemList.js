import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/rateButton/rating.js";
import Selectbutton from "../../components/items/selectButton.js";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      type_id: 0,
      difficulty_id:0,
      url: `/list${this.props.location.search}`
    };
    //binding the functions
    this.fetchData = this.fetchData.bind(this);
    this.rateUpFunc = this.rateUpFunc.bind(this);
    this.rateDownFunc = this.rateDownFunc.bind(this);
    this.patchData = this.patchData.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }
  //rendering the data after mounting
  componentDidMount() {
    this.fetchData();
  }
  //getting the data from the database
  fetchData() {
    const me = this;
    fetch(this.state.url, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        me.setState({value: data});
      })
      .catch(console.log);
  }
  // the rate up function
  rateUpFunc(index) {
    const { value } = this.state;
    const item = value[index];
    const plusItem = ++item.rate_up;
    const newItem = { ...item, rate_up: plusItem };
    const newList = [...value];
    newList[index].rate_up = plusItem;
    this.patchData(newItem, newList);
  }
  // the rate down function
  rateDownFunc(index) {
    const { value } = this.state;
    const item = value[index];
    const plusItem = ++item.rate_down;
    const newItem = { ...item, rate_down: plusItem };
    const newList = [...value];
    newList[index].rate_down = plusItem;
    this.patchData(newItem, newList);
  }
  // this function updates the data in the database
  patchData(val, newList) {
    fetch("/patch", {
      method: "PATCH",
      body: JSON.stringify(val),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(() => {
        const me = this;
        me.setState({ value: newList }, () => console.log(this.state.value));
      })
      .catch(console.log);
  }
  filterHandler(e) {
    const {name, value}=e.target;
    if (value != 0) {
      this.setState(
        {
          [name]: value,
          url: `/list${this.props.location.search}&${[name]}=${value}`
        },
        () => {
          this.fetchData();
          console.log([name]+' :'+ value)
        }
      );
    } else {
      this.setState(
        {
          [name]: value,
          url: `/list${this.props.location.search}`
        },
        () => {
          this.fetchData();
        }
      );
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className='div-container'>
        <div className='filter-container'>
          <label>
            Type<br />
            <select value={this.state.type_id} onChange={this.filterHandler} name='type_id'>
              <option value="0">all</option>
              <option value="1">article</option>
              <option value="2">video</option>
              <option value="3">other</option>
            </select>
          </label>
          <br/>
          <label>
            difficulty<br />
            <select value={this.state.difficulty_id} onChange={this.filterHandler} name='difficulty_id'>
              <option value="0">all</option>
              <option value="1">Amateur</option>
              <option value="2">World Class</option>
              <option value="3">Legendary</option>
            </select>
          </label>
        </div>
          <div className="list-container ">
            {//if the value in state is null, we don't render anything
            value &&
              (value.length) ?
              (
                <div>
                  {value.map(a => {
                    const index = value.indexOf(a);
                    return (
                      <div key={index} className="listItems">
                        <div className="item-content">
                          <div className="bla">
                            <Link to={`/item/${a.id}`}>
                              <h3 className="link">
                                <b>{a.title}</b>
                              </h3>
                              <p className="link">{a.link}</p>
                            </Link>
                          </div>
                          {/*the rate component*/}
                          <Rating
                            rate_up={a.rate_up}
                            rate_down={a.rate_down}
                            rateUpHandler={this.rateUpFunc}
                            rateDownHandler={this.rateDownFunc}
                            index={index}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ):
              <h3>no items to show...</h3>
            }
            </div>
    </div>
    );
  }
}
