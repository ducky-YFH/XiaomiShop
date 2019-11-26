<template>
  <div id="app">
    <transition name="slide">
      <keep-alive exclude="cart">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding-bottom: 1.666rem;
}
</style>
