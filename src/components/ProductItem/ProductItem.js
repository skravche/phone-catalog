import './ProductItem.css';
import React, { Component } from 'react';
import ProductListView from '../ProductListView';

class ProductItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="leftCol">
          <section>
            <p>
              Search: <input type="input" name="search" />
            </p>
            <p>
              Sort by:
              <select className="selector">
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>
        </div>

        <div className="rightCol">
          <ProductListView />
        </div>
      </div>
    );
  }
}

export default ProductItem;
