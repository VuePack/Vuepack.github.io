/*
 * @Author: Leon
 * @Date: 2017-02-21 22:01:56
 * @Last Modified by:   Leon
 * @Last Modified time: 2017-02-21 22:01:56
 */

import Timeago from 'timeago.js'

const timeago = new Timeago(null, 'zh_CN')

export default (Vue) => {
  // https://github.com/hustcc/timeago.js#1-usage
  Vue.filter('timeago', str => {
    if (!str) return ''
    return timeago.format(new Date(str))
  })

  // get a string representing the date portion of the given Date
  Vue.filter('formatDate', date => {
    return new Date(date).toLocaleDateString()
  })
}
