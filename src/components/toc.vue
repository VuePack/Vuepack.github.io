<template>
  <nav class="toc" v-if="lists.length > 0">
    <a v-view='`#${list.text}`' v-for='(list, i) in lists' :key="i" :class="{'pl15' : list.zIndex === 2}"><span>{{list.text}}</span></a>
  </nav>
</template>
<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  props: ['lists', 'num'],
  created() {},
  components: {},
  computed: {},
  methods: {}
}
</script>
<style lang='less' scoped>
.toc{
  position: fixed;
  top: 50px;
  right: 0;
  width: 180px;
  padding: 10px;
  color: #333;
  background: #fff;
  box-shadow: 0 6px 18px 0 rgba(232,237,250,.5);
  border: 1px solid rgba(224, 219, 219, 0.3);
  .pl15{
    padding-left: 15px;
  }
  a{
    display: block;
    font-size: 13px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover{
      color: #ff5722;
    }
  }
}
</style>