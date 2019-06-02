import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { MainPage, AboutAs } from './components/pages';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={AboutAs} />
          <AboutAs />
        </Switch>
      </div>
    );
  }
}
export default App;
