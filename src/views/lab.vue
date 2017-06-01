<template>
  <section class="view view-lab">
    实验室还在开发哦
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
}
</style>