import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import classNames from 'classnames'
import { Link, withRouter } from 'react-router-dom'

import './index.less'
@withRouter
export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          url: '/',
          name: 'Home'
        },
        {
          url: '/blog',
          name: 'Blog'
        },
        {
          url: '/vlog',
          name: 'Vlog'
        }
      ]
    }
  }
  render() {
    const { links } = this.state
    const location = this.props.location
    console.log(location)
    return (
      <div className="sidebar">
        <div className="sidebar-nav">
          {links.map(x => {
            return (
              <Link
                className={location.pathname === x.url ? 'font-Ailerons active' : 'font-Ailerons'}
                key={x.name}
                to={x.url}>
                {x.name}
              </Link>
            )
          })}
        </div>
        <div className="seidebar-copyright">
          <p>由 @余树 纯手工制作</p>
        </div>
      </div>
    )
  }
}
