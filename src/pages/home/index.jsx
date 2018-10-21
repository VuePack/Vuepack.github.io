import React from 'react'
import ReactDOM from 'react-dom'
import { enquireScreen } from 'enquire-js'

import Header from '../../views/header/index'
import Banner from '../../views/banner/index'
import Content from '../../views/content/index'

import LoopMp4 from '../../assets/media/loop.mp4'
import './index.less'

let isMobile
enquireScreen(b => {
  isMobile = b
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: ''
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    // if (location.port) {
    // 样式 build 时间在 200-300ms 之间;
    setTimeout(() => {
      this.setState({
        show: true
      })
    }, 500)
    // }
  }

  render() {
    const children = [
      <Header id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile} />,
      <Banner id="content_0_0" key="content_0_0" isMobile={this.state.isMobile} />,
      <Content id="content_6_0" key="content_6_0" isMobile={this.state.isMobile} />
    ]
    return (
      <div className="app-wrapper">
        <div className="video">
          <video autoPlay loop muted>
            <source src={LoopMp4} type="video/mp4" />
          </video>
        </div>
        {this.state.show && children}
      </div>
    )
  }
}
