<template>
  <div class="sitenav">
    <div class="site-index">
      <router-link to="/">
          <i class="iconfont icon-l"></i>
          <i class="iconfont icon-i"></i>
          <i class="iconfont icon-k"></i>
          <i class="iconfont icon-r"></i>
      </router-link>
    </div>
    <div class="site-title">
      <h2> About </h2>
    </div>
    <div class="site-author nav-section">
      <img class="avatar" :src="site.avatar" alt="avatar">
      <div class="text">
        <p>{{ site.author }} @{{ site.name }}</p>
        <p>{{ site.hobby }}</p>
      </div>
    </div>
    <div class="site-title">
      <h2> Hobby </h2>
    </div>
    <div class="site-description nav-section">
      <p>
        <i class="iconfont icon-manhua"></i>
        {{site.like.tv_series}}
      </p>
      <p>
        <i class="iconfont icon-dianshi"></i>
        {{site.like.cartoon}}
      </p>
      <p>
        <i class="iconfont icon-code"></i>
        {{site.like.code}}
      </p>
      <p>
        <i class="iconfont icon-aihao"></i>
        {{site.like.other}}
      </p>
    </div>
    <div class="site-title">
      <h2> Activities </h2>
    </div>
    <div class="site-activities nav-section">
      <ul class="act-item">
        <li class="item-content">
          <a :href="site.activities.github" target="_blank">
            <i class="iconfont icon-github"></i>
            <span class="label">github</span>
          </a>
        </li>
        <li class="item-content">
          <a :href="site.activities.instagram" target="_blank">
            <i class="iconfont icon-instagram"></i>
            <span class="label">instagram</span>
          </a>
        </li>
        <li class="item-content">
          <a :href="site.activities.project" target="_blank">
            <i class="iconfont icon-xiangmu"></i>
            <span class="label">项目</span>
          </a>
        </li>
        <li class="item-content">
          <a :href="site.activities.cv" target="_blank">
            <i class="iconfont icon-jianli"></i>
            <span class="label">简历</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="site-copyright">
      <p>
        由@lizhoukai用<i class="iconfont icon-aixin"></i>纯手工打造
      </p>
    </div>
  </div>
</template>
<script>
  import conf from 'config/conf.json'
  export default {
    name: 'sitenav',
    data() {
      return {
        site: conf
      }
    },
    props: {},
    computed: {},
    methods: {}
  }

</script>
<style lang='less'>
  @import '../assets/style/_vars.less';
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .sitenav{
      display: none
    }
  }
  .sitenav {
    position: fixed;
    left: 0;
    top: 0;
    max-width: 400px;
    height: 100%;
    box-shadow:0 4px 10px rgba(0,0,0,0.2);
    z-index: 3;
  }
  .nav-section{
    padding: 20px 15px;
    line-height: 1.6;
  }
  .site-index{
    display: flex;
    justify-content: center;
    line-height: 1.6;
    a {
      padding: 15px 0 0px;
    }
  }

  .site-title {
    position: relative;
    text-align: center;
    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      border-top: 1px solid rgba(0, 0, 0, .05);
    }
    h2 {
      display: inline-block;
      position: relative;
      padding: 0 10px;
      color: #2fbfc1;
      font-weight: bold;
      font-size: 20px;
      background: #fff;
    }
  }

  .site-author {
    display: flex;
    align-items: center;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      box-shadow: 0px 4px 10px rgba(0, 39, 80, 0.5);
      margin: 0 15px 0 0;
    }
    .text {
      flex: 1;
    }
  }
  .site-activities{
    .iconfont{
      font-size: 20px;
    }
    .icon-zhihu{
      font-size: 23px
    }
    .label{
      padding: 0 0 0 10px;
    }
    .item-content{
      a{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .site-description{
    .iconfont{
      font-size: 20px;
      padding: 0 10px 0 0;
    }
    p{
      font-size: 14px;
      display: flex;
      align-items: baseline;
      padding-bottom: 5px;
      &:last-child{
        padding-bottom: 0;
      }
    }
    .icon-manhua{
      font-size: 26px;
    }
  }
  .site-copyright{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    p {
      display: flex;
      justify-content: center;
      font-size: 14px;
      color:@33;
      padding: 3px 0;
    }
    .iconfont{
      font-size: 18px;
      color: @danger;
      padding: 0 10px;
    }
  }

  .act-item{
    display: flex;
    justify-content: space-between;
  }

</style>
