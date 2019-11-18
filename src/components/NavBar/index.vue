<template>
  <div class="NavBar">
    <span @click="handleBack()" class="back">返回</span>
    <h1>分类</h1>
    <router-link tag="a" to="/index" class="icon iconfont icon-search"></router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods:{
    handleBack(){
      this.$router.back();
    }
  }
}
</script>

<style lang="scss" scoped>
  .NavBar{
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
    padding: 0.4rem;
    color: #949494;
    background: #f2f2f2;
    h1{
      color: #666666;
    }
    .icon-search{
      font-size: 0.444rem;
      color: #949494;
    }
  }
</style>