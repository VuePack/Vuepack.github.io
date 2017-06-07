<template>
  <div class="article-copyright">
    <hr>
    <p>
      <strong>作者 ：</strong> {{author}}
    </p>
    <p>
      <strong>标签 ：</strong> {{tag}}
    </p>
    <p>
      <strong>转载请注明来源 ：</strong> {{link}}
    </p>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  mounted() {
    return {
    }
  },
  components: {},
  props: {
    author: null,
    tag: null,
    link: null
  },
  computed: {},
  methods: {}
}
</script>
<style lang='less' scoped>
.article-copyright{
  p{
    color: #000;
    font-size: 15px;
    word-wrap: break-word;
    word-break: normal;
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .article-copyright{
    p{
      font-size: 13px;
    }
  }
}
</style>