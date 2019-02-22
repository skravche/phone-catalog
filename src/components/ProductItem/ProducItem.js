//main App.js
import './ProductItem.css';
import React, { Component } from 'react';
import PhoneData from '../Data/phones.json';

class ProductItem extends Component {
  render() {
    return (
      <div className="App">
        <h1>Phone</h1>
        {PhoneData.map((phoneDetails, index) => {
          return (
            <div className="App">
              <h2>{phoneDetails.id}</h2>
              <p>{phoneDetails.name}</p>
              <p>{phoneDetails.snippet}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductItem;
