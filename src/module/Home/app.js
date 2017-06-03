/*
 * @Author: Leon
 * @Date: 2017-02-19 10:05:51
 * @Last Modified by: Leon
 * @Last Modified time: 2017-02-19 10:38:34
 */

import Vue from 'vue'
import router from './manage/router'
import App from './app.vue'
import filter from 'utils/filter'
import store from './manage/store'
import FastClick from 'fastclick'
import 'loaders.css'

filter(Vue)
Vue.config.devtools = true
FastClick.attach(document.body)

new Vue( // eslint-disable-line no-new
  Vue.util.extend({ router, store }, App)
).$mount('#app')