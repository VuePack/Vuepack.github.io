<template>
  <div class="toolbar">
    <ul>
      <li>
        <a class="tool-qr">
          <i class="iconfont icon-xinxi"></i>
        </a>
        <div class="qrcode">
          <img :src="qrcodeUrl" alt="扫一扫二维码">
        </div>
      </li>
      <li>
        <a @click="backtop" class="tool-backtop">
          <i class="iconfont icon-dingbu"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import conf from 'config/conf.json'
import scrollIntoView from 'scroll-into-view'
export default {
  name: '',
  data() {
    return {
      qrcodeUrl: conf.qrcode
    }
  },
  mounted() {},
  components: {},
  props: {},
  computed: {},
  methods: {
    backtop() {
      // let top = document.body.scrollTop || document.documentElement.scrollTop
      // let ax = 0
      // if (top > 0) {
      //   setInterval(function() {
      //     if (top <= 0) {
      //       clearInterval(scrollTop.timer)
      //     } else {
      //       ax += 20
      //       top -= ax
      //       window.scrollTo(0, top)
      //     }
      //   },
      //   100)
      // }
      scrollIntoView(document.getElementById('app'), {
        time: 500,
        align: {top: 0.2}
      })
    }
  }
}
</script>
<style lang='less' scoped>
.toolbar {
  position: fixed;
  top: 70%;
  left: 50%;
  width: 50px;
  margin-left: 640px;
  z-index: 99;
  ul li{
    position: relative;
  }
  a {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    &:hover {
      cursor: pointer;
      box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px rgba(0,0,0,.14), 0 1px 14px rgba(0,0,0,.12);
      + .qrcode{
        display: block;
        transition: all .2s linear;
      }
    }
  }
  .iconfont {
    color: rgba(255, 255, 255, .87);
    font-size: 26px;
  }
  .qrcode{
    display: none;
    position: absolute;
    top: -50px;
    left: -170px;
    width: 150px;
    z-index: 99;
    img{
      width: 100%;
    }
  }
}
.tool-qr{
  background-color: #2196f3;
}
.tool-backtop{
  background-color: #f4511e;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .toolbar {
    margin-left: 120px;
  }
}
</style>