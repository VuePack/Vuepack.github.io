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
            <div class="list-pic" v-if="item.pic"><img :src="url" v-for="url in item.pic"></div>
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
import conf from 'config/conf.json'
export default {
  name: '',
  data() {
    return {
      timeline: conf.timeline
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
  .list-pic{
    img{
      width: 110px;
    }
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