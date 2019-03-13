import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import phones from '../Data/phones.json';

class ProductList extends Component {
  state = {
    inPhoneName: '',
    filterPhone: 'newest',
  };

  replacefilterPhome = e => {
    this.setState({ filterPhone: e.target.value });
  };

  filterItems = (check1, check2) => {
    let filterState = this.state.filterPhone;
    return filterState === 'alphabetical'
      ? (check1.name > check2.name) - (check1.name < check2.name)
      : check1.age - check2.age;
  };

  render() {
    const filteredTitles = phoneList =>
      phoneList.name
        .toLowerCase()
        .includes(this.state.inPhoneName.toLowerCase()) ||
      phoneList.snippet
        .toLowerCase()
        .includes(this.state.inPhoneName.toLowerCase());

    return (
      <div className="wrap">
        <div className="leftCol">
          <section>
            <p>
              Search:
              <input
                className="selector"
                type="text"
                onChange={e => this.setState({ inPhoneName: e.target.value })}
                value={this.state.inPhoneName}
                name="search"
              />
            </p>
            <p>
              Sort by:
              <select
                className="selector"
                value={this.state.filterPhone}
                onChange={this.replacefilterPhome}
              >
                <option value="newest">Newest</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </p>
          </section>
        </div>
        <div className="rightCol">
          <ul>
            {phones
              .sort(this.filterItems)
              .filter(filteredTitles)
              .map(phoneList => (
                <ProductItem
                  imageUrl={phoneList.imageUrl}
                  name={phoneList.name}
                  snippet={phoneList.snippet}
                  id={phoneList.id}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
