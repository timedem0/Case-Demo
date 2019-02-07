import React, { Component } from 'react';
import './App.css';
import Categories from './views/Categories';
import AddCategory from './components/AddCategory';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AddCategory />
        <Categories />
      </div>
    );
  }
}

export default App;
