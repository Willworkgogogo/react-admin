import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavTop extends Component {
  constructor(props) {
    super(props)
  }

  Logout() {
    
  }

  render() {
    return (
      <div className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>W</b>ilson</Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown ">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw" />
              <span>欢迎，xxxxxxx</span>
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={() => this.Logout()}>
                  <i className="fa fa-sign-out fa-fw" /> 
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavTop