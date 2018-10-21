/*
 * @Author: Leon
 * @Date: 2017-08-20 00:16:20
 * @Last Modified by: Leon
 * @Last Modified time: 2018-05-20 19:00:17
 */

import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'
axios.defaults.baseURL = '/api/v2'
axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
axios.interceptors.request.use(
  config => {
    if (localStorage.hasOwnProperty('token')) {
      config.headers['token'] = localStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          alert('请求的参数不正确，或缺少必要信息!')
          break
        case 401:
          alert('需要用户认证的接口用户信息不正确!')
          break
        case 403:
          alert('缺少对应功能的权限!')
          break
        case 404:
          alert('数据不存在，或未开放!')
          break
        case 500:
          alert('服务器异常!')
          break
      }
    } else {
      alert('连接到服务器失败')
    }
    return Promise.reject(error)
  }
)

let HTTP = (type, url, params, config = {}) => {
  let args = [url, params, config].filter(x => Boolean(x))
  return axios[type](...args).then(res => {
    if (res.data && res.status !== 200) {
      alert(res.data.msg)
    }
    return res.data
  })
}

export default {
  get: HTTP.bind(null, 'get'),
  post: HTTP.bind(null, 'post'),
  put: HTTP.bind(null, 'put'),
  delete: HTTP.bind(null, 'delete')
}
