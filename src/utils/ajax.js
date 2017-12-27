/*
 * @Author: Leon
 * @Date: 2017-08-20 00:16:20
 * @Last Modified by: Leon
 * @Last Modified time: 2017-11-23 18:09:04
 */

import axios from 'axios'

let HTTP = (type, url, params, config = {
  'headers': {
    'Authorization': 'Token ' + (localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')).token : '')
  }
}) => {
  let args = [url, params, config].filter(x => Boolean(x))
  return axios[type](...args).then(
    res => {
      if (res.data && res.data.code !== '0') {
        vm.$message({ type: 'error', message: res.data.msg })
      }
      return res.data
    }
  ).catch(err => {
    if (err.response && err.response.status === 401) {
      vm.$router.replace('/login')
      localStorage.clear()
    } else {
      vm.$message({ type: 'error', message: '网络连接失败，请重试' })
    }
  })
}

export default {
  get: HTTP.bind(null, 'get'),
  post: HTTP.bind(null, 'post'),
  put: HTTP.bind(null, 'put'),
  delete: HTTP.bind(null, 'delete')
}
