<template>
  <nav class="topbar">
    <div class="bar-item">
      <ul class="item-menu">
        <li v-for="item in this.$store.state.menu">
          <router-link :to="item.path" :class="{'active' : item.default === 1}">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="item-search" v-if="this.$route.path === '/notes'">
        <form v-on:submit.prevent="searchResult">
          <input type="text" name="" v-model="keyword" @keyup.esc="resetSearch">
          <i class="iconfont icon-search"></i>
        </form>
      </div>
    </div>
    <div class="bar-tags" v-if="this.$route.path === '/notes'">
      <a :class="{'active' : $route.query.hasOwnProperty('tag') === false}" @click="$router.push({path: '/notes'})">全部标签</a>
      <a :class="{'active' : item === $route.query.tag}" v-for="(item, index) in this.$store.state.tag" @click="$router.push({path: '/notes', query: {tag: item}})">{{item}}</a>
    </div>
  </nav>
</template>
<script>
import { instance } from 'config/instanceShared'

export default {
  name: 'topbar',
  data() {
    return {
      keyword: ''
    }
  },
  watch:{
    $route(route) {
      instance.$emit('checkedTag', this.$route.query.tag)
    },
    'keyword': 'updateQuery'
  },
  props: {
    tags: []
  },
  computed: {},
  methods: {
    searchResult() {
      let sessionList = JSON.parse(sessionStorage.list), filterItems

      filterItems = sessionList.filter(v => {
        return v.title.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
      })

      this.$store.state.list = filterItems
    },
    resetSearch() {
      let sessionList = JSON.parse(sessionStorage.list), filterItems
      this.keyword = ''
      this.$store.state.list = sessionList
    },
    updateQuery() {
      if (this.keyword) {
        this.$router.push({path: '/notes', query: { q: this.keyword }})
      } else {
        this.$router.push({path: '/notes', query: null})
      }
    }
  },
  mounted() {}
}
</script>
<style lang='less' scoped>
@import '../assets/style/_vars.less';
.topbar {
  position: fixed;
  width: 100%;
  padding-left: 400px;
  top: 0;
  left: 0;
  right: 0;
  background-color: @white;
  z-index: 2;
  .bar-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px @border;
    padding: 0 30px;
    z-index:9;
    .item-search{
      position: relative;
      width: 25%;
      input{
        width: 100%;
        height: 25px;
        padding: 10px;
        border: 0;
        border-radius: 0;
        transition: all 0.3s ease-out;
        font-size: 13px;
        background-color: transparent;
        &:focus{
          border-bottom: 1px solid @33;
        }
        &:focus + .iconfont{
          color: @33;
        }
        &:hover{
          border-bottom: 1px solid @33;
        }
        &:hover + .iconfont{
          color: @33;
        }
      }
      .iconfont{
        position: absolute;
        right: 0;
        font-size: 16px;
        color: @cc;
        top: 3px;
      }
    }
    ul{
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
    }
    li {
      position: relative;
      padding: 0 20px 0 0;
    }
    a {
      position: relative;
      &:hover:after{
        visibility: visible;
        transform: scaleX(1);
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -3px;
        left: 0;
        background-color: @green;
        visibility: hidden;
        transform: scaleX(0);
        transition: .3s ease-in-out;
      }
    }
    .active:after{
      visibility: visible;
      transform: scaleX(1);
    }
  }
}
.bar-tags {
  height: 44px;
  padding: 10px 30px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  white-space: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    display: inline-block;
    position: relative;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    padding: 0 10px 0 20px;
    margin-right: 10px;
    border-radius: 0 4px 4px 0;
    transition: all .2s linear;
    cursor: pointer;
    background: #eee;
    &:hover {
      color: @white;
      background: @orange;
    }
    &:after {
      position: absolute;
      content: "";
      width: 4px;
      height: 4px;
      top: 8px;
      left: 12px;
      border-radius: 100%;
      background: #fff;
    }
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-width: 8px 12px 12px 0;
      border-color: #fff transparent;
      border-style: solid;
    }
  }
  .active {
    color: @white;
    background-color: @orange;
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .topbar{
    padding: 0;
    background-color: @green;
    .bar-item{
      color: white;
      padding: 0 20px;
      a:after{
        background-color: white;
      }
    }
    .item-search{
      input{
        color: white;
        &:focus{
          border-bottom: 1px solid white !important;
        }
        &:focus + .iconfont{
          color: white !important;
        }
        &:hover{
          border-bottom: 1px solid white !important;
        }
        &:hover + .iconfont{
          color: white !important;
        }
      }
    }
  }
  .bar-tags{
    padding: 10px 20px;
  }
}
</style>
