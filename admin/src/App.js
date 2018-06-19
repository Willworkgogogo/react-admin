import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Home from 'pages/home/index'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home}/>
          <Redirect from='*' to='/' />
        </Switch>
      </Router>  
    );
  }
}

export default App;
