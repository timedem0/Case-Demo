import React, { Component } from 'react';
import './App.css';
import Categories from './views/categoryViews/Categories';
import CategoriesExpensive from './views/categoryViews/CategoriesExpensive';
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
              <Route path="/categories_expensive" component={CategoriesExpensive} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
