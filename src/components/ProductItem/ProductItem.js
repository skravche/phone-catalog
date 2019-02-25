import './ProductItem.css';
import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    const { imageUrl, name, snippet } = this.props;

    return (
      <li className="phone-list">
        <a href="#/">
          <img
            className="picphone"
            src={`https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/${imageUrl}`}
            alt=" "
          />
        </a>
        <div className="phone-text">
          <a href="#/">
            <p>{name} </p>
          </a>
          <p className="description">{snippet}</p>
        </div>
      </li>
    );
  }
}

export default ProductItem;
