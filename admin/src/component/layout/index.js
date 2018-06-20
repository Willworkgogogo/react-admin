import React, {Component} from 'react';
import './theme.css';
import TopNav from 'component/nav-top/index';
import SideNav from 'component/nav-side/index';

class Layout extends Component {
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        {this.props.children}
      </div>
    )
  }
}

export default Layout