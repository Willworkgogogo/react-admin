import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Home from 'pages/home/index'
import Layout from 'component/layout/index'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path='/' component={Home}/>
            <Redirect from='*' to='/' />
          </Switch>
        </Layout>
      </Router>  
    );
  }
}

export default App;
