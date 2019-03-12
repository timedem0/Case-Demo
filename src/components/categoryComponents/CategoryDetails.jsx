import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';

class CategoryDetails extends Component {

  getCategory() {
    const categoryList = this.props.categories.categoryList;
    const categoryId = this.props.id;
    let newList = [];
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].id === Number(categoryId)) {
        newList.push(categoryList[i]);
      }
    }
    return newList;
  }

  render() {
    return (
      <div>

        {
          this.getCategory().map((item) =>
            <CategoryItem key={item.id} id={item.id} name={item.name} budget={item.budget} />
          )
        }
      
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(CategoryDetails);
