import React, { Component } from 'react';
import CategoryListExpensive from '../../components/categoryComponents/CategoryListExpensive';

export default class CategoriesFiltered extends Component {

  render() {
    return (
      <div>
        <h2>Expensive Categories</h2>

        <CategoryListExpensive />

      </div>
    );
  }
}
