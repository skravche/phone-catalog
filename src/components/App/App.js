//main App.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductItem from '../ProductItem';
import ProductView from '../ProductView';
import ProductListView from '../ProductListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Phone</h1>
        <Route path="/" component={ProductListView} exact />
        <Route path="/:productView" component={ProductView} />
        <Route path="/productListView" component={ProductListView} />
        <Route path="/productItem" component={ProductItem} exact />
      </div>
    );
  }
}

export default App;
