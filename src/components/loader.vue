<template>
  <div class="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>
<script>
export default {
  name: 'loader',
  data() {
    return {
    }
  },
  mounted() {
    return {
    }
  },
  components: {},
  props: {},
  computed: {},
  methods: {}
}
</script>
<style lang='less' scoped>
.loader {
  z-index: 999;
}
.dot {
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
  &:nth-child(1) {
    animation-delay: 0.1s;
    background: #32aacc;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
    background: #64aacc;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
    background: #96aacc;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
    background: #c8aacc;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
    background: #faaacc;
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

</style>