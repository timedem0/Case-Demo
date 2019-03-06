import React, { Component } from 'react';

export default class CategoryItem extends Component {

  render() {
    return (
      <span>
        {`${this.props.id}. ${this.props.name} - ${this.props.budget} € `}
      </span>
    );
  }
}
