<template>
  <section class="view view-lab">
    <!--<div class="btn-group">
      <div>
        <a class="btn-lab btn-active">折腾案例</a>
        <a class="btn-lab">Github</a>
        <a class="btn-lab">摄影</a>
      </div>
    </div>-->
    <div class="lab-item">
      <img src="http://img95.699pic.com/photo/50012/0118.jpg_wh300.jpg">
      <div class="intro">
        <!--test-->
      </div>
    </div>
    <div class="lab-item">
      <img src="http://img95.699pic.com/photo/50012/0118.jpg_wh300.jpg">
      <div class="intro">
        <!--test-->
      </div>
    </div>
    <div class="lab-item">
      <img src="http://img95.699pic.com/photo/50012/0118.jpg_wh300.jpg">
      <div class="intro">
        <!--test-->
      </div>
    </div>
    <div class="lab-item">
      <img src="http://img95.699pic.com/photo/50012/0118.jpg_wh300.jpg">
      <div class="intro">
        <!--test-->
      </div>
    </div>
  </section>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import { POSTS_LIST } from '../module/Index/manage/store.js'
  export default {
    name: '',
    data() {
      return {}
    },
    mounted() {},
    components: {},
    props: {},
    computed: {},
    created() {
      this.POSTS_LIST()
    },
    methods: {
      ...mapActions([POSTS_LIST])
    }
  }
</script>
<style lang='less' scoped>
.view-lab{
  padding-top: 70px;
  .btn-lab{
    position: relative;
    display: block;
    width: 100%;
    height: 35px;
    bottom: 0;
    background: #f70;
    box-shadow: 0 0 4px rgba(0,0,0,.5);
    transition: .2s;
    &:before{
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      top: -10px;
      border-style: solid;
      border-width: 0 30px 10px;
      border-color: transparent transparent #f70;
    }
  }
  .btn-group{
    position: fixed;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 999;
  }
}
.lab-item{
  float: left;
  width: 32.333%;
  padding: 18px;
  img{
    width: 100%;
  }
}
</style>