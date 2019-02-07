import React, { Component } from 'react';

export default class CategoryItem extends Component {

  render() {
    return (
      <div>
        <li key={this.props.index}>{`${this.props.item.name} ${this.props.item.budget}`}</li>
      </div>
    );
  }
}