import React, { Component } from 'react';
import { fetchRndCategory } from '../../actions/category';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';

class CategoryRandom extends Component {

  componentDidMount() {
    this.props.localFetch();
  }

  render() {
    return (
      <div>
        <h4>Category of the Day</h4>

        {
          this.props.categories.category.map((item) =>
            <CategoryItem key={item.id} id={item.id} name={item.name} budget={item.budget} />
          )
        }
      
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  localFetch: () => {
    dispatch(fetchRndCategory());
  },
});

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoryRandom);
