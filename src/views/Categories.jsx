import React, { Component } from 'react';
import CategoryList from '../components/CategoryList';

export default class Categories extends Component {

  render() {
    return (
      <div>
        <h2>My Categories</h2>
        <CategoryList />
      </div>
    );
  }
}