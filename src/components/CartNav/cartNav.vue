<template>
  <div id="cartNav">
    <div class="wrapper">
      <router-link to="/index" tag="a" class="toIndex">
        <div>
          <van-icon name="wap-home-o" />
        </div>
        <p>首页</p>
      </router-link>
      <router-link to="/cart" tag="a" class="toCart">
        <span class="count">{{ count }}</span>
        <div>
          <van-icon name="cart-o" />
        </div>
        <p>购物车</p>
      </router-link>
      <div class="addCart">
        <button @click="addToCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartNav',
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
  methods:{
    addToCart(){
      // 调用父组件的加入购物车事件
      this.$emit('addToCart')
    }
  }
}
</script>

<style lang="scss" scoped>
#cartNav {
  position: fixed;
  width: 100%;
  z-index: 111;
  bottom: 0;
  padding: 4px;
  .wrapper {
    display: flex;
    font-size: 0.4rem;
    justify-content: space-around;
    margin: 0.3rem;
    padding: 0.2rem;
    align-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    box-shadow: 0 2px 10px 2px #bfbfbf;
    background: rgba(255, 255, 255, 0.9);
    & > a {
      text-align: center;
      color: #000;
    }
    .van-icon {
      font-size: 0.5rem;
    }
    .toIndex {
      flex: 0.1;
    }
    .toCart {
      flex: 0.2;
      position: relative;
      .count {
        position: absolute;
        min-width: 0.5rem;
        top: -0.15rem;
        font-size: 0.3rem;
        color: #fff;
        background: #ed4d41;
        display: inline-block;
        z-index: 2;
        padding: 0.04rem;
        border-radius: 20px;
      }
    }
    .addCart {
      text-align: right;
      flex: 0.7;
      button {
        background: #ff6700;
        border-radius: 20px;
        border: none;
        outline: none;
        padding: 0.2rem 0.7rem;
        color: #fff;
        font-weight: 400;
      }
    }
  }
}
</style>