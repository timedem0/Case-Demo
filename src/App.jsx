import React, { Component } from 'react';
import './App.css';
import Categories from './views/categoryViews/Categories';
import CategoriesFiltered from './views/categoryViews/CategoriesFiltered';
import Category from './views/categoryViews/Category';
import Navigator from './views/Navigator'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" component={Categories} />
              <Route path="/categories_expensive" component={CategoriesFiltered} />
              <Route path="/category/:id" component={Category} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
