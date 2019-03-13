//main App.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductItem from '../ProductItem';
import ProductView from '../ProductView';
import ProductListView from '../ProductListView';
import '../App/App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Route path="/" component={ProductItem} exact />
        <Route path="/:productview" component={ProductListView} />
        <Route path="/productitems" component={ProductView} />
      </div>
    );
  }
}

export default App;
