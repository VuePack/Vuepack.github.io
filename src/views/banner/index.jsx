import React, { PropTypes } from 'react'
import { Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

import './index.less'

class Banner extends React.Component {
  render() {
    const props = { ...this.props }
    delete props.isMobile
    return (
      <OverPack replay playScale={[0.3, 0.1]} {...props}>
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}>
          <span className="title" key="title" id={`${props.id}-title`}>
            余树
          </span>
          <p key="content" id={`${props.id}-content`}>
            一个很酷的前端
          </p>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon">
          <Icon type="down" theme="outlined" />
        </TweenOne>
      </OverPack>
    )
  }
}

Banner.defaultProps = {
  className: 'banner'
}

// Banner.propTypes = {
//   className: PropTypes.string
// }

export default Banner
