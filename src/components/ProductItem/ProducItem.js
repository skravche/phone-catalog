//main App.js
import './ProductItem.css';
import React, { Component } from 'react';
import PhoneData from '../Data/phones.json';

class ProductItem extends Component {
  render() {
    return (
      <div className="App">
        <h1>Phone</h1>
        {PhoneData.map((pheneDetails, index) => {
          return (
            <div className="App">
              <h2>{pheneDetails.id}</h2>
              <p>{pheneDetails.name}</p>
              <p>{pheneDetails.snippet}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductItem;
