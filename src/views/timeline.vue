<template>
  <div class="view view-mental-journey">
    <div class="mj-list">
      <div class="list-wrap pull-left">
        <div class="list-item" v-for="line in filterByOddTimeline">
          <div class="list-date">{{line.year}}
            <strong>{{line.month}}</strong>
          </div>
          <div class="list-content" v-for="item in line.items">
            <div class="list-day">{{item.day}}</div>
            <div class="list-text">{{item.content}}</div>
          </div>
        </div>
      </div>
      <div class="list-wrap pull-right">
        <div class="list-item" v-for="line in filterByEvenTimeline">
          <div class="list-date">{{line.year}}
            <strong>{{line.month}}</strong>
          </div>
          <div class="list-content" v-for="item in line.items">
            <div class="list-day">{{item.day}}</div>
            <div class="list-text">{{item.content}}</div>
          </div>
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
          'month': 'February',
          'items': [
            {
              'day': '02/19',
              'content': '于2月19日Blog1.1.0上线。用自己写的脚手架构建前端页面，后端使用 Github Api 来获取数据，markdown 编写，基于vue + vue-router + vuex + es6 + less 完成'
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
              'content': '公司学习了 git，了解了 Github，发现 Github Pages 和 Hexo 能搭建一个独立博客，用了 NexT.Pisces 主题'
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
              'content': '1月8日域名正式上线，混迹各种论坛，自己设计写了几套 WordPress 主题，初期没钱买服务器托管在安全性和稳定性极差的第三方平台上，，隔几天就挂掉%>_<%'
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
  },
  components: {},
  props: {},
  computed: {
    filterByOddTimeline() {
      return this.timeline.filter((value, index) => {
        if (index % 2 == 0) return true
      })
    },
    filterByEvenTimeline() {
      return this.timeline.filter((value, index) => {
        if (index % 2 == 1) return true
      })
    }
  },
  methods: {}
}
</script>
<style lang='less' scoped>
@import '../assets/style/_vars.less';
.view-mental-journey {
  padding-top: 75px;
}

.mj-list {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 75%;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 12px;
    width: 2px;
    height: 100%;
    background-color: #ddf3eb;
  }
  .list-wrap {
    flex: 1;
  }
  .pull-left {
    padding-right: 20px;
    div{
      text-align: right;
    }
    .list-item{
      margin-bottom: 60px;
      &:after{
        position: absolute;
        top: 0px;
        right: -29px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: @green;
        border: 4px solid #ddf3eb;
        content: "";
      }
    }
  }
  .pull-right {
    padding-left: 20px;
    .list-item{
      margin-top: 75px;
      &:after{
        position: absolute;
        top: 8px;
        left: -27px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: @green;
        border: 4px solid #ddf3eb;
        content: "";
      }
    }
  }
  .list-item {
    position: relative;
    padding: 8px;
    border-radius: 3px;
    &:hover {
      transition: all .3s linear; // box-shadow: 0 15px 30px rgba(0,0,0,0.1);
      transform: translate3d(0, -2px, 0);
      background-color: rgba(49, 192, 193,.1);
      &:after {
        background-color: @orange;
      }
    }
  }
  .list-date {
    font-size: 20px;
    color: #ccc;
    line-height: 1;
    margin-bottom: 10px;
    strong {
      color: @green;
      font-size: 15px;
    }
  }
  .list-content {
    color: #333;
    font-size: 16px;
    margin-bottom: 7px;
    &:last-child {
      margin-bottom: 15px;
    }
  }
  .list-day {
    font-size: 13px;
    line-height: 2;
    color: #999;
  }
  .list-text {
    color: #666;
  }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .mj-list {
    width: 100%;
    .list-content {
      max-width: 100%;
    }
    .list-item {
    }
  }
}
</style>