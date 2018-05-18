import React, { Component } from 'react';
import ItemManeger from '../items/itemManeger.js'

 import Item from '../items/item.js'
  import ItemList from '../items/itemList.js'

import {Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/list/:id" component={Item}/>
        <Route exact path="/list" component={ItemList}/>
        <Route exact path="/" component={ItemManeger}/>
      </div>
    );
  }
}

export default App;
