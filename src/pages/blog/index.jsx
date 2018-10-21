import React from 'react'
import ReactDOM from 'react-dom'
import QueueAnim from 'rc-queue-anim'
import { Skeleton } from 'antd'

import './index.less'

export default class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tagsIndex: 0,
      tags: ['All'],
      articles: []
    }
  }

  componentWillMount() {
    this.getArticle()
  }
  componentDidMount() {}

  async getArticle() {
    const { tags } = this.state
    const res = await window.$http.get('/repos/lizhoukai/blog/toc')
    if (res.data) {
      res.data.forEach(x => {
        if (x.depth === 1) tags.push(x.title)
      })
      this.setState({ tags })
    }
  }

  render() {
    const { tags } = this.state
    if (tags.length === 1) {
      return (
        <div className="layout-content">
          <Skeleton active paragraph={{ rows: 8 }} />
        </div>
      )
    }
    return (
      // <QueueAnim type={['right', 'left']} delay={300} key="text" className="layout-content">
      <div className="layout-content">
        <div className="tags">
          {tags.map((x, i) => {
            return <a key={i}>{x}</a>
          })}
        </div>
      </div>
      // </QueueAnim>
    )
  }
}
