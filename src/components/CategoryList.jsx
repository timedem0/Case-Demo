import React, { Component } from 'react';
import { fetchTestCategories } from '../models/Test';
import CategoryItem from './CategoryItem';

export default class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.setState({ categories: fetchTestCategories() });
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.categories.map((item, index) =>
            <CategoryItem item={item} index={index} />
          )}
        </ol>
      </div>
    );
  }
}