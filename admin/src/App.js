import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from 'pages/home/index'
import Layout from 'component/layout/index'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path='/' component={Home}/>
            <Route path='/product' component={Home}/>
            <Route path='/product.category' component={Home}/>
          </Switch>
        </Layout>
      </Router>  
    );
  }
}

export default App;
