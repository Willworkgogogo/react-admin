import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class NavSide extends Component {
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <NavLink to="/" activeClassName="active-menu" exact>
                <i className="fa fa-dashboard" />
                <span>首页</span>
              </NavLink>
            </li>
            <li className="active">
              <Link to="/product">
                <i className="fa fa-sitemap" />商品<span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/product">商品管理</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-menu" to="/product-category">品类管理</NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/order">
                <i className="fa fa-table" />订单管理<span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/order">订单管理</NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/user">
                <i className="fa fa-user" />用户<span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/user">用户管理</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavSide
