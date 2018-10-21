import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './index.less'

class Copyright extends React.Component {
  static defaultProps = {
    className: 'footer'
  }

  render() {
    const props = { ...this.props }
    delete props.isMobile
    return (
      <OverPack {...props} playScale={0.05}>
        <TweenOne animation={{ y: '+=30', opacity: 0, type: 'from' }} key="footer">
          <span id={`${props.id}-content`}>
            Copyright © 2017 The Project by <a href="#">Ant Motion</a>. All Rights Reserved
          </span>
        </TweenOne>
      </OverPack>
    )
  }
}

export default Copyright
