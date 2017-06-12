/*
 * @Author: Leon
 * @Date: 2017-02-18 15:09:04
 * @Last Modified by: Leon
 * @Last Modified time: 2017-06-12 15:42:50
 */
import API from 'config'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const POSTS_LIST = 'POSTS_LIST' // 文章列表

export default new Vuex.Store({
  state: {
    menu: [
      {
        name: '笔记',
        default: 1,
        path: '/notes'
      },
      {
        name: '时间轴',
        default: 0,
        path: '/timeline'
      },
      {
        name: '实验室',
        default: 0,
        path: '/labs'
      },
      // {
      //   name: '关于',
      //   default: 0,
      //   path: '/about'
      // }
    ],
    tag: ['JavaScript', 'vue', '移动端', '折腾系列', '前端规范', '云心情', '备忘录']
  },
  // 组件获取 state
  getter: {},
  // 修改 state
  mutations: {},
  // 组件触发动
  actions: {}
})