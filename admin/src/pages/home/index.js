import React, { Component } from 'react'
import PageTitle from 'component/page-title/index'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="首页" />
        <div className="row">
          <div className="col-md-12">hello</div>
        </div>
      </div>
    )
  }
}

export default Home
