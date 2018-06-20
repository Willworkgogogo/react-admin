import React, {Component} from 'react';
import './index.css';

class Home extends Component{
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <h1>home component</h1>
          <button className="btn btn-primary">test</button>
        </div>
      </div>
      
    )
  }
}

export default Home