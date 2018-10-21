import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './router'
import './app.less'

import './assets/style/orc.less'
import http from './utils/httpRequest'
import dayjs from 'dayjs'
window.$http = http
window.$dayjs = dayjs

render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
)
