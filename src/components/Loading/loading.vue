<template>
  <div v-if="show" class="Loading">
    <div class="wrapper">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    show: Boolean
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.Loading{
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  background: #000;
  z-index: 9999;
}
.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  .bar {
    display: inline-block;
    width: 0.3rem;
    height: 1rem;
    background: #fff;
    transform-origin: bottom center;
    animation: loading 1.5s ease-in-out infinite;
  }
  .bar1 {
    animation-delay: 0.1s;
  }
  .bar2 {
    animation-delay: 0.2s;
  }
  .bar3 {
    animation-delay: 0.3s;
  }
  .bar4 {
    animation-delay: 0.4s;
  }
  .bar5 {
    animation-delay: 0.5s;
  }
  .bar6 {
    animation-delay: 0.6s;
  }
  .bar7 {
    animation-delay: 0.7s;
  }

  @keyframes loading {
    0% {
      transform: scaleY(0.1);
      background: #fff;
    }
    50% {
      transform: scaleY(1);
      background: #42a5f5;
    }
    100% {
      transform: scaleY(0.1);
      background: transparent;
    }
  }
}
</style>