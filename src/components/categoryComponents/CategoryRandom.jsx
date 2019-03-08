import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';

class CategoryRandom extends Component {

  render() {
    return (
      <div>
        <h4>Category of the Day</h4>

        {
          this.props.categories.categoryRnd.map((item) =>
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

export default connect(mapStateToProps)(CategoryRandom);
