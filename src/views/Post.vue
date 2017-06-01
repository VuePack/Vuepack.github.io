<template>
  <section class="posts-detail">
    <div v-if="!content">loading..</div>
    <article v-else class="post-view">
      <div class="post-head">
        <div class="pull-left">
          <div style="text-align:left;">
            <h1 class="post-title">
              {{ title }}
            </h1>
          </div>
          <time pubdate="pubdate" :datetime="this.date | formatDate" :title="this.date | formatDate" class="post-date">{{ this.date | timeago }} by leon</time>
        </div>
        <router-link class="iconfont icon-close" to="/notes"></router-link>
      </div>
      <div class="post-main" v-if="content" v-html="htmlFromMarkdown"></div>
    </article>
  </section>
</template>
<script>
  import Vue from 'vue'
  import api from 'config'
  import conf from 'config/conf.json'
  import fm from 'front-matter'
  import marked from 'utils/render.js'
  import { mapState, mapActions } from 'vuex'
  import { POSTS_LIST } from '../module/Index/manage/store.js'

  export default {
    name: 'postView',
    data() {
      return {
        title: '',
        date: null,
        content: ''
      }
    },
    computed: {
      htmlFromMarkdown() {
        return marked(this.content)
      }
    },
    created() {
      this.loadPost()
    },
    methods: {
      ...mapActions([POSTS_LIST]),
      loadPost() {
        this.$parent.isDetail = true
        this.POSTS_LIST()
        api.getDetail(this.$route.params.hash)
          .then(text => {
            // Parse front-matter
            // https://github.com/jxson/front-matter#fmstring
            const content = fm(text)
            this.content = content.body
            this.title = content.attributes.title
            this.date = content.attributes.date
            window.document.title = `${this.title}`
          })
          .catch(err => {
            console.error(err)
          })
      },
      newTab() {
        Vue.nextTick(function () {
          // Load the external link into new tab
          const linksArray = Array.from(document.querySelectorAll('a'))
          const currentHost = window.location.host
          linksArray.forEach(el => {
            if (el.href && el.host !== currentHost) {
              el.target = '_blank'
              // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
              el.rel = 'noopener noreferrer'
            }
          })
        })
      }
    },
    watch: {
      'htmlFromMarkdown': 'newTab'
    }
  }

</script>
<style lang="less">
  @import '../assets/style/_vars.less';
  .posts-detail {
    position: absolute;
    top: 0;
    left: 400px;
    right: 0;
    .pull-left{
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .pull-right{
      display: flex;
      position: relative;
      align-items: center;
      width: 50px;
    }
    .icon-close{
      position: absolute;
      right: -20px;
      font-size: 26px;
    }
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
  .post-head{
    position: relative;
    display: flex;
    padding: 0 0 30px 0;
    text-align: center;
    border-bottom: 1px dotted rgba(0,0,0,.1);
  }
  .post-title{
    display: inline-block;
    position: relative;
    font-size: 36px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    &:before{
      position: absolute;
      left: -42px;
      top: -6px;
      content: '『';
      color: @green;
    }
    &:after{
      position: absolute;
      right: -42px;
      bottom: -6px;
      content: '』';
      color: @green;
    }
  }
  .post-date {
    font-size: 12px;
    text-align: left;
  }
  .post-view {
    padding: 30px 45px;
  }
  .post-main{
    color: #34495e;
    img{
      max-width: 100%;
      border-radius: 5px;
      box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.2);
    }
    table {
      margin: 30px 0;
      tr {
        th{
          font-weight: bold;
           border: 1px solid #e3e3e3;
          padding: 4px;
        }
        td{
           border: 1px solid #e3e3e3;
          padding: 4px;
        }
      }
    }
    p{
      padding-bottom: 15px;
      line-height: 1.8;
    }
    b, strong{
      color: #333;
    }
    h1,h2,h3,h4{
      position: relative;
      margin: 1em 0;
      font-weight: bold;
      font-size: 18px;
    }
    h1{
      &:before{
        content: "#";
        color: #42b983;
        position: absolute;
        left: -0.8em;
        top: -4px;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
    h2{
      &:before{
        content: "##";
        color: #FF5722;
        position: absolute;
        left: -1.5em;
        top: -4px;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
    h3{
      &:before{
        content: "###";
        color: #FF9800;
        position: absolute;
        left: -2.2em;
        top: -4px;
        font-size: 1.2em;
        font-weight: bold;
      }
    }

    h4{
      padding-left: 30px;
      &:before{
        content: "####";
        color: #42b983;
        position: absolute;
        left: -0.8em;
        top: -4px;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
    a{
      color: @green;
    }
    ul{
      list-style-type: circle;
      line-height: 30px;
      ul{
        list-style-type: disc;
        padding-left: 20px;
        ul{
          list-style-type: square;
        }
      }
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .posts-detail{
      position: absolute;
      top: 0;
      padding: 0 30px;
      left: 0;
      right: 0;
      .list-item{
        font-size: 13px;
        padding: 10px 0;
        margin:0;
      }
    }
    .post-head{
      padding: 0 0 20px 0;
    }
    .post-view{
      padding: 20px 0 0 0;
    }
    .post-main {
      font-size: 13px;
    }
    .post-title{
      font-size: 22px;
      &:before{
        left: -30px;
      }
      &:after{
        right: -30px;
      }
    }
  }
</style>
