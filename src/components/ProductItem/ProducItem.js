import './ProductItem.css';
import React, { Component } from 'react';
import PhoneData from '../Data/phones.json';

class ProductItem extends Component {
  render() {
    return (
      <div>
        {PhoneData.map((phoneDetails, index) => {
          return (
            <li className="thumbnail phones">
              <a href="#/">
                <img
                  className="thumb"
                  src={`https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/${
                    phoneDetails.imageUrl
                  }`}
                  alt=" "
                />
              </a>
              <a href="#/">
                <p>{phoneDetails.name} </p>
              </a>
              <p className="ng-binding">{phoneDetails.snippet}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default ProductItem;
