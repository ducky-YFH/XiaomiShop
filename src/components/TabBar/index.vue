<template>
  <div id="TabBar">
    <div id="TabBar-nav">
      <router-link to="/index" tag="a" class="nav-item">
        <i class="icon iconfont icon-home"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/category" tag="a" class="nav-item">
        <i class="icon iconfont icon-icon-category"></i>
        <p>分类</p>
      </router-link>
      <router-link to="/cart" tag="a" class="nav-item cart">
        <span class="count">{{ count }}</span>
        <i class="icon iconfont icon-ShoppingCart_"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/me" tag="a" class="nav-item">
        <i class="icon iconfont icon-me"></i>
        <p>我的</p>
      </router-link>
    </div>
    <div id="TabBar-buy" v-if="false"></div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  computed:{
    count(){
      let cart = this.$store.getters.cart
      let count = 0;
      cart.forEach(item => {
        count += item.count
      })
      return count
    }
  },
}
</script>

<style lang="scss" scoped>
#TabBar {
  z-index: 9999;
  background: #ffffff;
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #f4f4f4;
  #TabBar-nav {
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.15rem;
    .nav-item {
      &.cart{
        position: relative;
      }
      .count {
        position: absolute;
        min-width: 0.5rem;
        font-size: 0.3rem;
        color: #fff;
        background: #ed4d41;
        display: inline-block;
        z-index: 2;
        padding: 0.04rem;
        border-radius: 20px;
        top: 0.1rem;
        left: 1.3rem;
      }
      &.link-active {
        color: #f56d02;
      }
      text-align: center;
      flex: 1;
      display: inline-block;
      color: #999999;
      & > i {
        font-size: 0.6rem;
      }
      & > p {
        font-size: 0.35rem;
      }
    }
  }
  #TabBar-buy {
  }
}
</style>