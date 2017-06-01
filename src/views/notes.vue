<template>
  <section class="view view-notes">
    <Loader v-if="this.$store.state.list == '' && isLoading"></Loader>
    <div v-else class="posts-list">
      <div class="posts-tips" v-if="this.$store.state.list == ''"> <span class="iconfont icon-wuziliao"><i>没有相关文章</i></span></div>
      <article v-for="{ title, sha, date } in filteredList" :key="sha" class="list-item">
        <div class="posts-main">
          <router-link :to="'/post/' + sha" class="item-title">
            {{ title }}
          </router-link>
          <time pubdate="pubdate" :datetime="date | formatDate" :title="date | formatDate" class="item-date">{{ date | timeago }}</time>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import { POSTS_LIST } from '../module/Index/manage/store.js'
  import Loader from 'components/loader'
  import conf from 'config/conf.json'

  export default {
    name: 'listView',
    data() {
      return {
        site: conf,
        isLoading: true
      }
    },
    mounted() {
    },
    components: {
      Loader: Loader
    },
    computed: {
      filteredList() {
        let keyword = (this.$route.query.keyword || '').toLowerCase()
        this.isLoading = false
        return this.$store.state.list
          .filter(item => (item.title.toLowerCase().indexOf(keyword) !== -1))
          .sort((itemA, itemB) => (new Date(itemB.date) - new Date(itemA.date)))
      }
    },
    created() {
      this.loadList()
    },
    methods: {
      ...mapActions([POSTS_LIST]),
      loadList() {
        window.document.title = conf.title
        this.POSTS_LIST()
        this.$parent.isDetail = false
      }
    },
    watch: {
      '$route': 'loadList'
    }
  }
</script>
<style lang="less">
  @import '../assets/style/_vars.less';
  .posts-tips{
    display: flex;
    justify-content: center;
    i{
      font-size: 15px;
    }
  }
  .view-notes {
    padding-top: 100px;
    .item-title {
      color: @title;
      font-weight: bold;
      transition: padding .2s ease-out;
      &:hover{
        padding-left: 10px;
      }
    }
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      margin-right: 20px;
    }
    .item-date {
      color: @subTitle;
    }
    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px dotted @border;
      padding: 20px 0;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .view-notes{
      position: absolute;
      top: 100px;
      padding: 0 20px;
      left: 0;
      right: 0;
      .list-item{
        font-size: 13px;
        padding: 10px 0;
        margin:0;
      }
    }
  }
</style>