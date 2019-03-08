import React, { Component } from 'react';
import { fetchAllCategories, deleteCategory } from '../../actions/category';
import CategoryListItem from './CategoryListItem';
import { connect } from 'react-redux';

class CategoryList extends Component {

  componentDidMount() {
    this.props.categoriesFetchAll();
  }

  delete = (id) => {
    this.props.localDelete(id);
  }

  render() {
    return (
      <div>
        <h4>List of Categories</h4>
        <ul style={{}}>
          {
            this.props.categories.categoryList.map((item, index) =>
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
  },
  localDelete: (id) => {
    dispatch(deleteCategory(id));
  },
});

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
