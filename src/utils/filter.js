/*
 * @Author: Leon
 * @Date: 2017-02-21 22:01:56
 * @Last Modified by: Leon
 * @Last Modified time: 2017-12-27 15:01:12
 */

import timeFormater from 'time-formater'

export default (Vue) => {
  Vue.filter('dtime', date => {
    if (!date) return ''
    return timeFormater(date).fromNow()
  })

  Vue.filter('formatDate', date => {
    return new Date(date).toLocaleDateString()
  })
}
