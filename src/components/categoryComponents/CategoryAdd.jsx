import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/category';

class CategoryAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newCategoryObject:
        { id: null, name: null, budget: null },
    };
  }

  idChange = (event) => {
    this.setState(
      { newCategoryObject: { ...this.state.newCategoryObject, id: Number(event.target.value) } }
    );
  };

  nameChange = (event) => {
    this.setState(
      { newCategoryObject: { ...this.state.newCategoryObject, name: event.target.value } }
    );
  };

  budgetChange = (event) => {
    this.setState(
      { newCategoryObject: { ...this.state.newCategoryObject, budget: Number(event.target.value) } }
    );
  };

  addCategory = () => {
    const category = this.state.newCategoryObject;
    this.props.addCategoryLocal(category);
  };
  
  render = () => {
    return (
      <div>
        <h4>New Category</h4>
        <p>
          Id: <input id="id" type="number" onChange={this.idChange} /><br />
          Name: <input id="name" type="text" onChange={this.nameChange} /><br />
          Budget: <input id="budget" type="number" onChange={this.budgetChange} /><br />
          <button type="button" onClick={this.addCategory}>ADD NEW CATEGORY</button>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addCategoryLocal: (category) => {
    dispatch(addCategory(category));
  },
});

export default connect(null, mapDispatchToProps)(CategoryAdd);
