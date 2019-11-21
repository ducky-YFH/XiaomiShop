<template>
  <div class="main">
    <!-- 顶部用户登录信息显示区域 -->
    <header>
      <div class="avatar">
        <img src="@/assets/images/defaultimg.png" />
      </div>
      <div class="name">登录/注册</div>
    </header>
    <section>
      <!-- 我的订单 -->
      <div id="b1">
        <a href>我的订单</a>
        <div class="order-all">
          <a href>全部订单</a>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 付款收获退还修区域 -->
      <div id="b2">
        <div>
          <a href="#">
            <van-icon name="paid" />
            <span>待付款</span>
          </a>
        </div>
        <div>
          <a href="#">
            <van-icon name="logistics" />
            <span>待收货</span>
          </a>
        </div>
        <div>
          <a href="#">
            <van-icon name="warning-o" />
            <span>退换修</span>
          </a>
        </div>
      </div>
      <div class="cart interval-cart">
        <div class="left">
          <van-icon name="gem-o" />
        </div>
        <div class="right">
          <span>会员中心</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="cart">
        <div class="left">
          <van-icon name="cash-on-deliver" />
        </div>
        <div class="right">
          <span>我的优惠</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="cart">
        <div class="left">
          <van-icon name="phone-o" />
        </div>
        <div class="right">
          <span>服务中心</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="cart">
        <div class="left">
          <van-icon name="location-o" />
        </div>
        <div class="right">
          <span>小米之家</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <router-link tag="div" to="/me/set">
        <div class="cart">
          <div class="left">
            <van-icon name="setting-o" />
          </div>
          <div class="right">
            <span>设置</span>
            <span>
              <van-icon name="arrow" />
            </span>
          </div>
        </div>
      </router-link>
      <div class="cart interval-cart">
        <div class="left">
          <van-icon name="manager-o" />
        </div>
        <div class="right">
          <span>退出登录</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#Me {
  background: #f5f5f5;
  header {
    background: url("./headerbg.png") center 0 #f37d0f;
    background-size: auto 100%;
    padding: 0.3rem 0.5rem;
    display: flex;
    align-items: center;
    .avatar {
      width: 1.3rem;
      img {
        border: 1px solid #f8b16f;
        vertical-align: middle;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .name {
      margin-left: 0.4rem;
      color: #fff;
      font-size: 0.4rem;
    }
  }
  section {
    /*-------我的订单---------*/
    #b1 {
      display: flex;
      padding: 0.4rem;
      justify-content: space-between;
      font-size: 0.4rem;
      border-bottom: 1px solid #d9d9d9;
      background: #ffffff;
      a {
        color: #000;
      }
      .van-icon {
        vertical-align: top;
      }
    }
    /*-------付款-收获-退还修--------*/
    #b2 {
      display: flex;
      justify-content: space-around;
      padding: 0.6rem 0;
      background: #ffffff;
      div {
        a {
          color: #000;
          font-size: 0.4rem;
          display: flex;
          flex-direction: column;
          text-align: center;
          .van-icon {
            color: #b1b1b1;
            font-size: 0.5rem;
          }
          span {
            margin-top: 0.2rem;
          }
        }
      }
    }
    .interval-cart {
      margin-top: 0.2rem;
    }
    .cart {
      display: flex;
      font-size: 0.4rem;
      padding: 0.4rem;
      background: #ffffff;
      border-bottom: 1px solid #d9d9d9;
      .left {
        flex: 0.15;
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>