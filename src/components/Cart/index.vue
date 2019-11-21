<template>
  <div id="shoppingCart">
    <NavBar title="购物车"></NavBar>
    <TabBar></TabBar>
    <div class="car-item first-item">
      <van-checkbox v-model="checked" checked-color="#ff5722"></van-checkbox>
      <div class="car-img">
        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528440985.59935969.jpg" alt />
      </div>
      <div class="car-main">
        <p>米家六位插线板 白色</p>
        <p>售价：49元</p>
        <div class="counter">
          <span class="minus">&minus;</span>
          <span class="num">1</span>
          <span class="add can">&plus;</span>
        </div>
      </div>
      <div class="car-rubbish">
        <van-icon name="delete" />
      </div>
    </div>
    <div class="car-item">
      <van-checkbox v-model="checked" checked-color="#ff5722"></van-checkbox>
      <div class="car-img">
        <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528440985.59935969.jpg" alt />
      </div>
      <div class="car-main">
        <p>米家六位插线板 白色</p>
        <p>售价：49元</p>
        <div class="counter">
          <span class="minus">&minus;</span>
          <span class="num">1</span>
          <span class="add can">&plus;</span>
        </div>
      </div>
      <div class="car-rubbish">
        <van-icon name="delete" />
      </div>
    </div>
    <div id="car-count">
      <div class="sum">共2件</div>
      <div class="money">
        <span>100</span>
        <span>元</span>
      </div>
      <div class="accounts">去结算</div>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'cart',
  data(){
    return {
      checked: true
    }
  },
  components:{
    TabBar
  }
}
</script>

<style lang="scss" scoped>
#shoppingCart {
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  .first-item {
    margin-top: 0 !important;
  }
  .car-item {
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
    font-size: 0.4rem;
    padding: 0.4rem;
    height: 3rem;
    background: #ffffff;
    justify-content: space-around;
    .car-img {
      width: 2.8rem;
      margin: 0 0.5rem;
      border: 1px solid #efefef;
      img {
        width: 100%;
      }
    }
    .car-main {
      display: flex;
      flex-direction: column;
      max-height: 2rem;
      p {
        line-height: 0.6rem;
      }
      p:nth-of-type(2) {
        color: #b8b8b8;
        font-size: 0.35rem;
      }
      .counter {
        span {
          display: inline-block;
          padding: 0.1rem 0.25rem;
          border: 1px solid #eeeeee;
          font-size: 0.56rem;
        }
        span:nth-of-type(odd) {
          color: #d5d5d5;
          background: #fafafa;
        }
        .can {
          color: #7c7c7c !important;
          background: #f4f4f4 !important;
        }
      }
    }
    .car-rubbish {
    }
  }
  #car-count {
    position: fixed;
    bottom: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.5rem;
    background: #f4f4f4;
    line-height: 1.5rem;
    border-top: 1px solid #f4f4f4;
    div {
      flex: 1;
      text-align: center;
    }
    .sum {
      color: #999999;
      background: #ffffff;
    }
    .money {
      color: #ff6700;
      span:nth-of-type(1) {
        font-weight: bold;
      }
      span:nth-of-type(2) {
        font-size: 0.2rem;
        color: #acacac;
        margin-left: 0.1rem;
      }
    }
    .accounts {
      background: #ff6700;
      color: #fff;
    }
  }
}
</style>