<template>
  <div id="app">
    <main>
      <topbar v-if="!isDetail"></topbar>
      <sidenav></sidenav>
      <toolbar v-if="!isTop" v-on:backtop="getTimer"></toolbar>
      <!-- 子路由渲染 -->
      <transition name="slid" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>
<style lang="less" src="../../assets/style/likr.less"></style>
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
      getTimer() {
        // this.timer = obj
      }
    },
    watch: {
      'keyword' () {
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
      'topH' (v) {
      }
    },
    mounted() {
      let winH = document.documentElement.clientHeight, topH = 0
      window.onscroll = () => {
        topH = document.body.scrollTop || document.documentElement.scrollTop
        if (topH >= winH) {
          this.isTop = false
        } else {
          this.isTop = true
        }
      }
    }
  }
</script>
