<template>
  <section class="view view-about">
    关于我，还在开发哦
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
    created() {
      this.POSTS_LIST()
    },
    computed: {},
    methods: {
      ...mapActions([POSTS_LIST])
    }
  }
</script>
<style lang='less' scoped>

</style>