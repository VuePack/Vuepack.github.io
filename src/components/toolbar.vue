<template>
  <div class="toolbar">
    <ul>
      <li>
        <a>
          <i class="iconfont icon-xinxi"></i>
        </a>
      </li>
      <li>
        <a @click="backtop">
          <i class="iconfont icon-dingbu"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  mounted() {},
  components: {},
  props: {},
  computed: {},
  methods: {
    backtop() {
      document.body.scrollTop = 0
      this.$emit('backtop')
    }
  }
}
</script>
<style lang='less' scoped>
.toolbar {
  position: fixed;
  top: 350px;
  left: 50%;
  width: 50px;
  margin-left: 640px;
  z-index: 99;
  a {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
    text-align: center;
    margin-bottom: 10px;
    background: rgba(204, 204, 204, .5);
    &:hover {
      cursor: pointer;
      background: rgba(204, 204, 204, 1);
    }
  }
  .iconfont {
    color: white;
    font-size: 26px;
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .toolbar {
    margin-left: 120px;
  }
}
</style>