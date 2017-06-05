<template>
  <div class="view view-mental-journey">
    <div class="mj-list">
      <div class="list-item" v-for="line in timeline">
        <div class="list-date">{{line.year}} <strong>{{line.month}}</strong></div>
        <div class="list-content" v-for="item in line.items">
          <div class="list-day">{{item.day}}</div>
          <div class="list-text">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      timeline: [
        {
          'year': '2017',
          'month': 'June',
          'items': [
            {
              'day': '06/01',
              'content': 'Blog1.3版本添加视图切换交互动画，文章详情页模块更改'
            },
            {
              'day': '06/02',
              'content': 'Blog1.4版本增加 copyright，区块区分，loading 动画更改'
            },
            {
              'day': '06/05',
              'content': 'Blog1.5版本增加 timeline 模块'
            }
          ]
        },
        {
          'year': '2017',
          'month': 'May',
          'items': [
            {
              'day': '05/24',
              'content': 'Blog1.1版本增加首页介绍页'
            },
            {
              'day': '05/31',
              'content': 'Blog1.2版本增加文章详情页 title，日期，搜索模块调整'
            }
          ]
        },
        {
          'year': '2017',
          'month': 'February',
          'items': [
            {
              'day': '02/19',
              'content': '于2月19日Blog1.0上线。用自己写的脚手架构建前端页面，后端使用 github Api 来获取数据，markdown 编写，基于vue + vue-router + vuex + es6 + less 完成'
            }
          ]
        },
        {
          'year': '2016',
          'month': 'August',
          'items': [
            {
              'day': '08/15',
              'content': '写了一个基于 vue 多页脚手架'
            }
          ]
        },
        {
          'year': '2016',
          'month': 'May',
          'items': [
            {
              'day': '05/23',
              'content': '折腾到凌晨4点完成的脚手架 Webpack + Gulp'
            },
            {
              'day': '05/30',
              'content': '入住知乎，来的有点晚'
            }
          ]
        },
        {
          'year': '2015',
          'month': 'May',
          'items': [
            {
              'day': '05/01',
              'content': '公司学习了 git，了解了 github，发现 Github Pages 和 Hexo 能搭建一个独立博客，用了 NexT.Pisces 主题'
            },
            {
              'day': '05/22',
              'content': '购入 “likr.cn” 域名， 含义：名字缩写，锂 + 氪 = ？'
            }
          ]
        },
        {
          'year': '2015',
          'month': 'January',
          'items': [
            {
              'day': '01/08',
              'content': '1月8日域名正式上线，混迹各种论坛，自己设计写了几套 WordPress 主题，期初没钱买服务器托管在安全性和稳定性极差的第三方平台上，，隔几天就挂掉%>_<%'
            }
          ]
        },
        {
          'year': '2014',
          'month': 'October',
          'items': [
            {
              'day': '10/28',
              'content': '阿里云搞活动，买了一年的 “ilsns.com” 域名， “sns” 意为社交'
            }
          ]
        },
        {
          'year': '2014',
          'month': 'April',
          'items': [
            {
              'day': '04/03',
              'content': '某天，逛网站发现一个非常酷炫的网站，好奇并百度才知道有美工职业（那时候前端没那么高大上 - -），然后就入坑自学了 ~'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    return {
    }
  },
  components: {},
  props: {},
  computed: {},
  methods: {}
}
</script>
<style lang='less' scoped>
@import '../assets/style/_vars.less';
.view-mental-journey{
  padding-top: 75px;
}
.mj-list{
  position: relative;
  &:before{
    content: "";
    position: absolute;
    left: 7px;
    top: 12px;
    width: 2px;
    height: 100%;
    background-color: #ddf3eb;
  }
  .list-item{
    position: relative;
    padding-left: 40px;
    &:after{
      position: absolute;
      left: 0;
      top: 0;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      border: 5px solid red;
      background-color: @green;
      border: 4px solid #ddf3eb;
      content: "";
    }
  }
  .list-date{
    font-size: 20px;
    color: #ccc;
    line-height: 1;
    margin-bottom: 10px;
    strong{
      color: @green;
      font-size: 15px;
    }
  }
  .list-content{
    color: #333;
    font-size: 16px;
    margin-bottom: 7px;
    max-width: 60%;
    &:last-child{
      margin-bottom: 15px;
    }
  }
  .list-day{
    font-size: 13px;
    line-height: 2;
    color: #999;
  }
  .list-text{
    color: #666;
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .mj-list .list-content{
    max-width: 100%;
  }
}
</style>