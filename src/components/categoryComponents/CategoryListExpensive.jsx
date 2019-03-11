import React, { Component } from 'react';
import { fetchAllCategories, fetchFilteredIds, deleteCategory } from '../../actions/category';
import CategoryListItem from './CategoryListItem';
import { connect } from 'react-redux';

class CategoryListExpensive extends Component {

  componentDidMount() {
    this.props.categoriesFetchAll();
  }

  delete = (id) => {
    this.props.localDelete(id);
  }

  getFilteredCategoryList = () => {
    const categoryList = this.props.categories.categoryList;
    const filteredIds = this.props.categories.filteredIds;
    let newList = [];
    for (let i = 0; i < categoryList.length; i++) {
      for (let j = 0; j < filteredIds.length; j++) {
        if (categoryList[i].id === filteredIds[j]) {
          newList.push(categoryList[i]);
        }
      }
    }
    return newList;
  }

  render() {
    return (
      <div>
        <h4>List of Categories</h4>
        <ul style={{}}>
          {
            this.getFilteredCategoryList().map((item, index) =>
              <CategoryListItem key={index} item={item} delete={this.delete} />
            )
          }
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
    dispatch(fetchFilteredIds());
  },
  localDelete: (id) => {
    dispatch(deleteCategory(id));
  },
});

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoryListExpensive);
