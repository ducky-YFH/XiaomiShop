<template>
  <div class="set">
    <NavBar title="个人中心"></NavBar>
    <router-link tag="div" to="/address/list" class="cart">
      <span class="left">地址管理</span>
      <span class="right">
        <van-icon name="arrow" />
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .cart{
    padding: 0.3rem;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    background: #ffffff;
    span:nth-of-type(2){
      color: #929292;
    }
  }
</style>