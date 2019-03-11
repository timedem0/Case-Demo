import React, { Component } from 'react';
// import CategoryAdd from '../../components/categoryComponents/CategoryAdd';
import CategoryListExpensive from '../../components/categoryComponents/CategoryListExpensive';
// import CategoryRandom from '../../components/categoryComponents/CategoryRandom';

export default class Categories extends Component {

  render() {
    return (
      <div>
        <h2>Expensive Categories</h2>

        <CategoryListExpensive />

      </div>
    );
  }
}