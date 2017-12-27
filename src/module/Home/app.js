/*
 * @Author: Leon
 * @Date: 2017-02-19 10:05:51
 * @Last Modified by: Leon
 * @Last Modified time: 2017-12-27 23:29:57
 */

import Vue from 'vue'
import axios from 'axios'
import FastClick from 'fastclick'
import scrollIntoView from 'scroll-into-view'

import App from './app.vue'
import router from './manage/router'
import store from './manage/store'
import filter from '../../utils/filter'
import http from '../../utils/ajax'
import Loader from '../../utils/preloader'

filter(Vue)
Vue.use(Loader, router)
Vue.config.devtools = true
FastClick.attach(document.body)

const vm = new Vue({
  el: '#app',
  store,
  router,
  render: page => page(App),
  http: {
    header: {
      'Content-Type': 'application/json'
    }
  }
})

Vue.directive('view', {
  inserted: function (el) {
    el.addEventListener('click', event => {
      let select = event.target.innerHTML
      scrollIntoView(document.getElementById(select.toLocaleLowerCase().replace(/ /g, '-')), {
        time: 500,
        align: {
          top: 0.2
        }
      })
    })
  }
})

// http请求拦截器
axios.interceptors.request.use(config => {
  vm.$showLoader()
  return config
}, error => {
  vm.$closeLoader()
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {
  vm.$closeLoader()
  return data
}, error => {
  vm.$closeLoader()
  return Promise.reject(error)
})

console.log('WeChat：Mr_Songtaste\r\n\r\n\r\n%cfollow me %c https://github.com/lizhoukai/', 'color:red', 'color:green')

window.vm = Vue
window.axios = axios
window.http = http
