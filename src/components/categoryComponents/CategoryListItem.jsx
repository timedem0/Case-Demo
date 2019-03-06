import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

export default class CategoryListItem extends Component {

  render() {
    return (
      <li>
        <CategoryItem id={this.props.item.id} name={this.props.item.name} budget={this.props.item.budget} />
        <button type="button" onClick={ () => this.props.delete(this.props.item.id) }>DEL</button>
      </li>
    );
  }
}
