<template>
  <div id="app">
    <main>
      <topbar v-if="!isDetail"></topbar>
      <sidenav></sidenav>
      <toolbar v-if="!isTop"></toolbar>
      <!-- 子路由渲染 -->
      <transition name="slid" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>
<script>
import conf from 'config/conf.json'
import Sidenav from 'views/sideNav.vue'
import Topbar from 'views/topbar.vue'
import Toolbar from 'components/toolbar.vue'

export default {
  name: 'app',
  data() {
    return {
      title: conf.blogTitle,
      keyword: '',
      isDetail: false,
      isTop: true
    }
  },
  components: {
    Sidenav,
    Topbar,
    Toolbar
  },
  methods: {
    resetSearch() {
      this.keyword = ''
    },
    addEvent(obj, type, fn) {
      if (obj.attachEvent) {
        obj.attachEvent('on' + type, function () {
          fn.call(obj)
        })
      } else {
        obj.addEventListener(type, fn, false)
      }
    }
  },
  watch: {
    'keyword'() {
      if (this.keyword) {
        this.$router.push({
          name: 'list',
          query: {
            keyword: this.keyword
          }
        })
      } else {
        this.$router.push({
          name: 'list'
        })
      }
    },
    'topH'(v) {
    }
  },
  mounted() {
    this.addEvent(window, 'scroll', () => {
      let winH = document.documentElement.clientHeight, topH = 0
      topH = document.documentElement.scrollTop || document.body.scrollTop

      if (topH >= winH) {
        this.isTop = false
      } else {
        this.isTop = true
      }
    })
  }
}
</script>
<style lang="less" src="../../assets/style/likr.less"></style>
