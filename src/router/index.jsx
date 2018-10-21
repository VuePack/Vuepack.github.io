/* eslint-disable */
import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'
import QueueAnim from 'rc-queue-anim'
import DevTool from 'mobx-react-devtools'

import { DefaultLayout, HomeLayout } from '../views/layout'
import Blog from '../pages/blog'
import Home from '../pages/home'

const isDev = process.env.NODE_ENV === 'development'

// @withRouter
export default class Root extends Component {
  render() {
    const location = this.props.location
    return (
      <Provider>
        <Switch location={location}>
          <HomeLayout exact path="/" component={Home} />
          <DefaultLayout name="home" exact path="/" component={Home} />
          <DefaultLayout name="blog" path="/blog" component={Blog} />
        </Switch>
      </Provider>
    )
  }
}
