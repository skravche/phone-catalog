import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductView from '../ProductView';
import ProductListView from '../ProductListView';
import '../App/App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Route path="/" component={ProductListView} exact />
        <Route path="/:productListView" component={ProductView} />
      </div>
    );
  }
}

export default App;
