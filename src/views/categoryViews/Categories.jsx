import React, { Component } from 'react';
import CategoryAdd from '../../components/categoryComponents/CategoryAdd';
import CategoryList from '../../components/categoryComponents/CategoryList';
import CategoryRandom from '../../components/categoryComponents/CategoryRandom';

export default class Categories extends Component {

  render() {
    return (
      <div>
        <h2>My Categories</h2>

        <CategoryAdd />

        <CategoryList />
        
        <CategoryRandom />

      </div>
    );
  }
}