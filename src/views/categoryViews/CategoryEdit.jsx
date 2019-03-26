import React, { Component } from 'react';
import CategoryEditForm from '../../components/categoryComponents/CategoryEditForm';

export default class CategoryEdit extends Component {

  render() {
    return (
      <div>
        <h2>Category Edit</h2>

        <CategoryEditForm id={this.props.match.params.id} />

      </div>
    );
  }
}
