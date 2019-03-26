import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCategory } from '../../actions/category';

class CategoryEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = { categoryObject: { id: "", name: "", budget: "" }, message: '', };
  }

  componentDidMount() {
    this.getCategory();
  };

  getCategory() {
    const categoryList = this.props.categories.categoryList;
    const categoryId = this.props.id;
    let newList = [];
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].id === Number(categoryId)) {
        newList.push(categoryList[i]);
      }
    }
    this.setState({ categoryObject: newList[0] });
  }

  idChange = (event) => {
    this.setState(
      { categoryObject: { ...this.state.categoryObject, id: Number(event.target.value) } }
    );
  };

  nameChange = (event) => {
    this.setState(
      { categoryObject: { ...this.state.categoryObject, name: event.target.value } }
    );
  };

  budgetChange = (event) => {
    this.setState(
      { categoryObject: { ...this.state.categoryObject, budget: Number(event.target.value) } }
    );
  };

  addCategory = () => {
    const category = this.state.categoryObject;
    this.props.addCategoryLocal(category);
    this.setState({ message: 'Changes Saved' })
  };
  
  render = () => {
    return (
      <div>
        <h4>Edit this Category</h4>
        <p>
          Id: <input id="id" type="number" value={this.state.categoryObject.id} onChange={this.idChange} /><br />
          Name: <input id="name" type="text" value={this.state.categoryObject.name} onChange={this.nameChange} /><br />
          Budget: <input id="budget" type="number" value={this.state.categoryObject.budget} onChange={this.budgetChange} /><br />
          <br />
          <button type="button" onClick={this.addCategory}>SAVE CHANGES</button><br />
          <br />
          <Link to="/">Back to Main Page</Link><br />
          <br />
          {this.state.message}
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

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditForm);
