import React, { Component, Fragment } from 'react';

import AppNav from './Nav'
import AppHeader from './Header'

class Frame extends Component {
    state={
        navs: [
            {
                id: 1, 
                url: '/home', 
                title: '主页'
            },
            {
                id: 2, 
                url: '/blog', 
                title: '博客'
            },
            {
                id: 3, 
                url: '/myself', 
                title: '个人中心'
            }
        ]
    }
    render() {
      return (
        <Fragment>  
          <AppHeader />  
          <AppNav navs={ this.state.navs }/>  
          <div className='main'>{this.props.children}</div>        
        </Fragment>
      );
      
    }
  }
export default Frame