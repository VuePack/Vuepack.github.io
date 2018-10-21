import React from 'react'

import { Route } from 'react-router-dom'
import Navbar from '../navbar'
import './index.less'

export const DefaultLayout = ({ component: Component, ...rest }) => {
  // console.log(rest)
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="layout-wrapper">
          <Navbar />
          <Component {...matchProps} />
        </div>
      )}
    />
  )
}

export const HomeLayout = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={matchProps => <Component {...matchProps} />} />
}
