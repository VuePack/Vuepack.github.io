/*
 * @Author: Leon
 * @Date: 2017-02-19 10:40:28
 * @Last Modified by: Leon
 * @Last Modified time: 2017-02-20 21:29:20
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import ListView from 'views/list.vue'
import PostView from 'views/post.vue'
import LabView from 'views/lab.vue'
import AboutView from 'views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/notes'
  },
  {
    path: '/notes',
    name: '笔记',
    component: ListView
  },
  {
    path: '/post/:hash',
    name: 'post',
    component: PostView
  },
  {
    path: '/labs',
    name: '实验室',
    component: LabView
  },
  {
    path: '/about',
    name: '关于',
    component: AboutView
  },
  {
    path: '*',
    name: 'other',
    redirect: '/notes'
  },
]

/**
 * 实例化VueRouter
 */
const router = new VueRouter({
  hashbang: true, // 将路径格式化为#!开头
  history: true, // use history=false when testing
  base: __dirname,
  routes
})

/**
 * 注册一个全局的 after 钩子
 * 在每次路由切换成功进入激活阶段时被调用
 */
router.afterEach((to, from, next) => {
  router.app.$store.state.menu.forEach(e => {
    e.default = e.name === to.name ? 1 : 0
  })
})

export default router
