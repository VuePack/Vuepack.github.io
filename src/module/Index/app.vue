<template>
  <div id='showtime'>
    <section class="index-section">
      <div class="panel-banner">
        <a class="print" href="/home.html" title="点击进入博客">Leon's Daily</a>
      </div>
      <ul class="panel-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
    <!--<section class="index-section index-about">
        flow me
      </section>-->
  </div>
</template>
<style lang="less">
@import '../../assets/style/likr.less';
body,
html {
  height: 100%;
}

.print {
  width: 6em;
  border-right: .05em solid;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(11) forwards, caret 1s steps(1) forwards;
  &:hover {
    color: #de8a8a;
  }
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0
  }
}

#showtime {
  width: 100%;
  height: 100%;
}

.index-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100px; // background-image: url('https://ohv0hyr4v.qnssl.com/banner-trip.jpg');
  background: url(https://ohv0hyr4v.qnssl.com/2016091468798code.jpg) center top / cover; // background-size: cover;
}

.index-section {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.panel-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 60px;
  font-weight: bold; // background: linear-gradient(to right, rgba(107, 183, 86, 0.95), rgba(0, 143, 104, 0.95));
  background-image: url('https://ohv0hyr4v.qnssl.com/banner-trip.jpg');
  background-size: cover; // clip-path: polygon(50% 0%, 100% 0, 100% 66%, 50% 100%, 0 66%, 0 0);
  // opacity: .6;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .panel-banner {
    font-size: 40px;
  }
}
.panel-bubbles {
  li {
    position: absolute;
    list-style: none;
    width: 40px;
    height: 40px;
    display: block;
    bottom: 0;
    animation: square 25s infinite;
    animation-fill-mode: both;
    transition-timing-function: linear;
    border-radius: 6px;
    &:nth-child(1) {
      left: 10%;
      background: rgba(135, 208, 104, 0.53);
    }
    &:nth-child(2) {
      left: 20%;
      width: 80px;
      height: 80px;
      animation-duration: 15s;
      background: rgba(91, 192, 222, 0.5);
    }
    &:nth-child(3) {
      left: 25%;
      background: rgba(238, 238, 238, 0.81);
    }

    &:nth-child(4) {
      left: 40%;
      width: 55x;
      height: 55x;
      animation-duration: 20s;
      background: rgba(255, 170, 0, 0.7);
    }
    &:nth-child(5) {
      left: 84%;
      background: rgba(255, 170, 0, 0.8);
    }

    &:nth-child(6) {
      left: 80%;
      width: 70px;
      height: 70px;
      background: rgba(245, 183, 59, 0.76);
    }
    &:nth-child(7) {
      left: 68%;
      width: 75px;
      height: 75px;
      animation-delay: 4s;
      background: #afdddf;
    }

    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 10s;
      background: rgba(135, 208, 104, 0.7);
    }
  }
}

@keyframes square {
  0% {
    opacity: 0;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    opacity: .7;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(-1000px) rotate(600deg);
    transform: translateY(-1000px) rotate(600deg);
  }
}
</style>
<script>
export default {
  name: 'showtime',
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
  },
  watch: {
  }
}
</script>
