//main App.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductItem from '../ProductItem';
import ProductView from '../ProductView';
import ProductListView from '../ProductListView';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <section className="sectionleft">
            <p>
              Search: <input type="input" name="search" />
            </p>
            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>

          <div className="sectionright">
            <ul className="phones">
              <Route path="/" component={ProductItem} exact />
              <Route path="/:productView" component={ProductView} />
              <Route path="/productListView" component={ProductListView} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*

        <li className="thumbnail">

          <a href="#!/phones/motorola-xoom-with-wi-fi" class="thumb">
            <img alt="Motorola XOOM™ with Wi-Fi" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
                  
            </a>




            <Route path="/" component={ProductItem} exact />
            <Route path="/:productView" component={ProductView} />
            <Route path="/productListView" component={ProductListView} />
            </ul>
*/
