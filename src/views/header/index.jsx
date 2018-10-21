import React from 'react'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

import Blog from '../../pages/blog/index'
import './index.less'

const Item = Menu.Item

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneOpen: false
    }
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen
    })
  }

  render() {
    const props = { ...this.props }
    const isMobile = props.isMobile
    delete props.isMobile
    const navData = [
      { name: '博客', url: '/blog' },
      { name: '摄影', url: '/art' },
      { name: 'vlog', url: '/vlog' }
    ]
    const navChildren = navData.map((item, i) => (
      <Item key={i}>
        <Link className="link" to={item.url}>
          {item.name}
        </Link>
      </Item>
    ))
    return (
      <TweenOne component="header" animation={{ opacity: 0, type: 'from' }} {...props}>
        <TweenOne
          className={`${this.props.className}-logo`}
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          id={`${this.props.id}-logo`}>
          <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" />
        </TweenOne>
        {isMobile ? (
          <div
            className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
            id={`${this.props.id}-menu`}>
            <div
              className={`${this.props.className}-phone-nav-bar`}
              onClick={() => {
                this.phoneClick()
              }}>
              <em />
              <em />
              <em />
            </div>
            <div className={`${this.props.className}-phone-nav-text`}>
              <Menu defaultSelectedKeys={['0']} mode="inline" theme="dark">
                {navChildren}
              </Menu>
            </div>
          </div>
        ) : (
          <TweenOne
            className={`${this.props.className}-nav`}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}>
            <Menu mode="horizontal" defaultSelectedKeys={['0']} id={`${this.props.id}-menu`}>
              {navChildren}
            </Menu>
          </TweenOne>
        )}
      </TweenOne>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string
}

Header.defaultProps = {
  className: 'header'
}

export default Header
