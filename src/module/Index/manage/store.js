/*
 * @Author: Leon
 * @Date: 2017-02-18 15:09:04
 * @Last Modified by: Leon
 * @Last Modified time: 2017-02-19 10:12:08
 */

import API from 'config'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const POSTS_LIST = 'POSTS_LIST' // 文章列表

export default new Vuex.Store({
  state: {
    list: [],
    tag: [],
    menu: [
      {
        name: '笔记',
        default: 1,
        path: '/home'
      },
      {
        name: '实验室',
        default: 0,
        path: '/lab'
      },
      {
        name: '关于',
        default: 0,
        path: '/about'
      }
    ]
  },
  mutations: {
    [POSTS_LIST](state) {
      API.getList().then((res) => {
        state.list = res[0]
        state.tag = res[1]
      })
    }
  },
  actions: {
    [POSTS_LIST]({
      commit
    }) {
      commit(POSTS_LIST)
    }
  }
})