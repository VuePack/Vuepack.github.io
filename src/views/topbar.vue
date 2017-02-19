<template>
  <nav class="topbar">
    <div class="bar-item">
      <ul class="item-menu">
        <li v-for="item in this.$store.state.menu">
          <router-link :to="item.path" :class="{'active' : item.default === 1}">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="item-search">
        <form v-on:submit.prevent="searchResult">
          <input type="text" name="" placeholder="search" v-model="searchVal" @keyup.esc="resetSearch">
          <i class="iconfont icon-search"></i>
        </form>
      </div>
    </div>
    <div class="bar-tags">
      <a :class="{'active' : item.default === 1}" v-for="(item, index) in this.$store.state.tag" @click="checkTag(item.name,index)">{{item.name}}</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'topbar',
  data() {
    return {
      searchVal: ''
    }
  },
  watch:{
    searchVal(v) {
      if (v.length === 0) {
        this.resetSearch()
      }
    }
  },
  props: {},
  computed: {},
  methods: {
    checkTag(type, index) {
      let sessionList = JSON.parse(sessionStorage.list), filterItems

      if (this.$route.name === 'post' || this.$route.name === '实验室' || this.$route.name === '关于') {
        this.$router.replace('/home')
      }

      this.$store.state.tag.forEach(e => {
        e.default = 0
      })

      if (type === '全部标签') {
        filterItems = sessionList
      } else {
        filterItems = sessionList.filter(v => {
          return v.tag.toLowerCase().indexOf(type.toLowerCase()) !== -1
        })
      }

      this.$store.state.tag[index].default = 1
      this.$store.state.list = filterItems
    },
    searchResult() {
      let sessionList = JSON.parse(sessionStorage.list), filterItems

      filterItems = sessionList.filter(v => {
        return v.title.toLowerCase().indexOf(this.searchVal.toLowerCase()) !== -1
      })

      this.$store.state.list = filterItems
    },
    resetSearch() {
      let sessionList = JSON.parse(sessionStorage.list), filterItems
      this.searchVal = ''
      this.$store.state.list = sessionList
    }
  },
  mounted() {
  }
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
  z-index: 1;
  .bar-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 6px 5px @border;
    padding: 0 45px;
    z-index:9;
    .item-search{
      position: relative;
      width: 25%;
      input{
        width: 100%;
        height: 25px;
        padding: 10px;
        border: 0;
        border-bottom: 1px solid @e3;
        border-radius: 0;
        transition: all 0.3s ease-out;
        font-size: 13px;
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
      height: 50px;
    }
    li {
      padding: 0 20px 0 0;
    }
    a:hover {
      color: @green;
      border-bottom: 3px solid @green;
      transition: all .2s linear;
    }
    .active {
      color: @green;
      border-bottom: 3px solid @green;
    }
  }
  .bar-tags {
    padding: 14px 45px 12px;
    background-color: @white;
    border-bottom: 1px solid @border;
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
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .topbar{
    padding: 0;
    .bar-item{
      padding: 0 30px;
    }
    .bar-tags{
      white-space: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      padding: 14px 30px 12px;
      &::-webkit-scrollbar {
          display: none;
      }
    }
  }
}
</style>
