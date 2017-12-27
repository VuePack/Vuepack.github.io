/*
 * @Author: Leon
 * @Date: 2017-02-19 10:40:28
 * @Last Modified by: Leon
 * @Last Modified time: 2017-12-27 23:12:41
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component(resolve) {
      require(['../../../views/notes.vue'], resolve)
    }
  },
  {
    path: '/post/:hash',
    name: '笔记详情',
    component(resolve) {
      require(['../../../views/article.vue'], resolve)
    }
  },
  {
    path: '/labs',
    name: '实验室',
    component(resolve) {
      require(['../../../views/lab.vue'], resolve)
    }
  },
  {
    path: '/timeline',
    name: '时间轴',
    component(resolve) {
      require(['../../../views/timeline.vue'], resolve)
    }
  },
  {
    path: '/about',
    name: '关于',
    component(resolve) {
      require(['../../../views/about.vue'], resolve)
    }
  },
  {
    path: '/404',
    name: '404',
    component(resolve) {
      require(['../../../views/404.vue'], resolve)
    }
  },
  {
    path: '*',
    name: 'other',
    redirect: '/404'
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
  window.scrollTo(0, 0)
  router.app.$store.state.menu.forEach(e => {
    e.default = e.name === to.name ? 1 : 0
  })
})

export default router
