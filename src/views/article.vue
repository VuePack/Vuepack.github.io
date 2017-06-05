<template>
  <section class="article-detail">
    <Loader v-if="!content"></Loader>
    <article v-else class="article-view">
      <div class="article-head">
        <div class="pull-left">
          <div style="text-align:left;">
            <h1 class="article-title">
              {{ title }}
            </h1>
          </div>
          <time pubdate="pubdate" :datetime="this.date | formatDate" :title="this.date | formatDate" class="article-date">{{ this.date | timeago }} by leon</time>
        </div>
        <router-link class="iconfont icon-close" to="/notes"></router-link>
      </div>
      <div class="article-main" v-if="content" v-html="htmlFromMarkdown"></div>
      <Copyright :author="article.author" :tag="article.tag" :link="article.link"></Copyright>
    </article>
  </section>
</template>
<script>
  import Vue from 'vue'
  import Loader from 'components/loader'
  import Copyright from 'components/copyright'
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
        content: '',
        article: {
          author: 'leon',
          tag: '',
          link: location.href
        }
      }
    },
    computed: {
      htmlFromMarkdown() {
        return marked(this.content)
      }
    },
    components: {
      Loader,
      Copyright
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
            this.article.tag = content.attributes.tags
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
  .article-detail {
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
      color: @orange;
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
  .article-head{
    position: relative;
    display: flex;
    padding: 0 0 30px 0;
    text-align: center;
    &:after{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      height: 2px;
      width: 100%;
      border: none;
      background-color: #ddd;
      background-image: repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px);
    }
  }
  .article-title{
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
  .article-date {
    font-size: 12px;
    text-align: left;
  }
  .article-view {
    padding: 25px 50px;
  }
  .article-main{
    color: #34495e;
    word-wrap: break-word;
    word-break: normal;
    img{
      max-width: 100%;
      margin: 10px 0;
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
      padding: 15px 0;
      line-height: 1.8;
    }
    b, strong{
      color: #9e4e23;
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
        left: -0.7em;
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
        left: -1.4em;
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
        left: -2.1em;
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
        left: -0.7em;
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
    .article-detail{
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
    .article-head{
      padding: 0 0 20px 0;
    }
    .article-view{
      padding: 20px 0 0 0;
    }
    .article-main {
      font-size: 13px;
    }
    .article-title{
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
