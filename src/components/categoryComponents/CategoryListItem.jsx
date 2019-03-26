import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';

export default class CategoryListItem extends Component {

  render() {
    return (
      <li>
        <CategoryItem id={this.props.item.id} name={this.props.item.name} budget={this.props.item.budget} />
        &nbsp;&nbsp;
        <Link to={ `/category_view/${this.props.item.id}` }>View</Link>
        &nbsp;&nbsp;
        <Link to={ `/category_edit/${this.props.item.id}` }>Edit</Link>
        &nbsp;&nbsp;
        <button type="button" onClick={ () => this.props.delete(this.props.item.id) }>DEL</button>
      </li>
    );
  }
}
