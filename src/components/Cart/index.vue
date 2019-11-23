<template>
  <div id="shoppingCart">
    <NavBar title="购物车"></NavBar>
    <TabBar></TabBar>
    <div v-for="(item,index) in Cart" :key="index" class="car-item first-item">
      <van-checkbox v-model="item.checked" checked-color="#ff5722"></van-checkbox>
      <div class="car-img">
        <img :src="item.img" alt />
      </div>
      <div class="car-main">
        <p>{{item.name +" "+ item.ver.memory +" "+ item.color + " " }}</p>
        <p>售价：{{ item.ver.money }}元</p>
        <div class="counter" @click="handleCounter($event,index)">
          <span :class="[{minus:true}, {can: item.count > 1}]">&minus;</span>
          <span class="num">{{item.count}}</span>
          <span :class="[{add:true},{can: item.count < item.ver.max}]">&plus;</span>
        </div>
      </div>
      <div class="car-rubbish">
        <van-icon name="delete" />
      </div>
    </div>
    <div id="car-count">
      <div class="sum">共{{ goodsCount }}件</div>
      <div class="money">
        <span>{{ money }}</span>
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
      money: 0,
      goodsCount: 0
    }
  },
  computed:{
    Cart(){
      return this.$store.getters.cart
    }
  },
  methods:{
    handleCounter(e,index){
      // 减减
      if(e.target.classList.contains('minus') && this.Cart[index].count > 1){
        this.$store.dispatch('minusCount', index)
        this.countMoney(true, false, index)
      }
      // 加加
      if(e.target.classList.contains('add') && this.Cart[index].count < this.Cart[index].ver.max){
        this.$store.dispatch('addCount', index)
        this.countMoney(false, true, index)
      }
    },
    countMoney(minus = false, add = false,  index){
      if(minus){
        this.money -= this.Cart[index].ver.money
        this.goodsCount -= 1
      }else if(add){
        this.money += this.Cart[index].ver.money
        this.goodsCount += 1
      }else{
        this.Cart.forEach(item => {
          this.money += item.count * item.ver.money
          this.goodsCount += item.count
        })
      }
    }
  },
  mounted(){
    this.countMoney()
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
    .van-checkbox {
      width: 30px;
    }
    .car-img {
      width: 2.8rem;
      margin: 0 0.3rem;
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
      .van-icon::before {
        text-align: left;
      }
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