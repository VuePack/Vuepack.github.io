<template>
  <div id='app'>
    <main>
      <topbar v-if="!isDetail"></topbar>
      <sidenav></sidenav>
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

  export default {
    name: 'app',
    data() {
      return {
        title: conf.blogTitle,
        keyword: '',
        isDetail: false
      }
    },
    components: {
      Sidenav,
      Topbar
    },
    methods: {
      resetSearch() {
        this.keyword = ''
        this.$refs.searchBar.blur()
      },
      selectSearchText() {
        this.$refs.searchBar.select()
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
      }
    }
  }
</script>
