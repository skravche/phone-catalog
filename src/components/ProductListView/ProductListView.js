import React, { Component } from 'react';
import PhoneData from '../Data/phones.json';
import './ProductListView.css';

class ProductListView extends Component {
  render() {
    return (
      <div>
        {PhoneData.map((phoneDetails, index) => {
          return (
            <li className="phone-list">
              <a href="#/">
                <img
                  className="picphone"
                  src={`https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/${
                    phoneDetails.imageUrl
                  }`}
                  alt=" "
                />
              </a>
              <div className="phone-text">
                <a href="#/">
                  <p>{phoneDetails.name} </p>
                </a>
                <p className="description">{phoneDetails.snippet}</p>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default ProductListView;
