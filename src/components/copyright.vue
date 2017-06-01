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
hr {
  margin: 30px 0;
  height: 2px;
  border: none;
  background-color: #ddd;
  background-image: repeating-linear-gradient(-45deg, white, white 4px, transparent 4px, transparent 8px);
}
.article-copyright{
  p{
    color: #000;
    font-size: 15px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
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