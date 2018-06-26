import React, { Component } from 'react'

// 标题组件
export default class PageTitle extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    document.title = this.props.title + ' - WILSON'
    console.log(document.title)
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">{this.props.title}</h1>
        </div>
      </div>
    )
  }
}
