<template>
  <div id="Index">
    <!-- 顶部 -->
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt />
      </div>
      <div class="search">
        <i class="icon iconfont icon-search"></i>
        <input type="text" placeholder="搜索商品" />
      </div>
      <router-link to="/me" class="me">
        <i class="icon iconfont icon-me"></i>
      </router-link>
    </header>
    <!-- 轮播图 -->
    <div id="phone-carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in carouselList" :key="index">
          <router-link :to="`/detail/${item.id}`">
            <img :src="item.src" alt />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 手机品牌 -->
    <div id="phone-type">
      <ul>
        <li>
          <a href>
            <img
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img src="http://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp" alt />
          </a>
        </li>
        <li>
          <a href>
            <img
              src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6eb2a9a73687e007daf30fc3f85e0ad2.gif"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img src="http://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp" alt />
          </a>
        </li>
        <li>
          <a href>
            <img src="http://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp" alt />
          </a>
        </li>
      </ul>
    </div>
    <!-- 手机展示 -->
    <div id="phone-show">
      <div class="phone-hot">
        <router-link :to="`/detail/${hotPhone.id}`">
          <img v-lazy="hotPhone.src" />
        </router-link>
      </div>
      <ul>
        <li v-for="item in phoneList" :key="item.id">
          <router-link :to="`/detail/${item.id}`" class="phone-link">
            <img v-lazy="item.src" />
            <p class="phone-name">{{item.name}}</p>
            <p class="phone-sketch">{{item.sketch}}</p>
            <p>
              <span class="price-n">{{item.priceNow}}</span>
              <span class="price-b">{{item.priceBe}}</span>
            </p>
            <button class="phone-btn">立即购买</button>
          </router-link>
        </li>
      </ul>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar"
export default {
  name: 'index',
  data(){
    return {
      // 导航栏数据
      carouselList:[],
      // 部分手机展示数据
      phoneList:[],
      // 每日精选
      hotPhone:{}
    }
  },
  methods:{
    // 获取每日推荐的手机
    getHotphone(data){
      this.hotPhone = data
    },
    getPhoneList(){
      this.$axios.get('/api/phonelist').then(res => {
        // window.console.log(res.data)
        this.carouselList = res.data.carousel
        this.phoneList = res.data.phoneList
        this.getHotphone(res.data.choiceness);
      })
    }
  },
  mounted(){
    this.getPhoneList();
  },
  components:{
    TabBar
  }
}
</script>

<style lang="scss" scoped>
#Index {
  background: #fefefe;
  header {
    padding: 5px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
      width: 1rem;
      height: 1rem;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .search {
      flex: 0.7;
      position: relative;
      display: flex;
      align-items: center;
      input {
        width: 100%;
        height: 0.8rem;
        outline: none;
        border: 1px solid #e5e5e5;
        text-indent: 0.6rem;
        font-size: 0.4rem;
      }
      .icon-search {
        position: absolute;
        left: 5px;
        font-size: 0.4rem;
      }
    }
    .me {
      .iconfont {
        font-size: 0.8rem;
      }
    }
  }
  #phone-type {
    width: 100%;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        display: inline-block;
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  #phone-carousel {
    width: 100%;
    height: 5rem;
    box-sizing: border-box;
    overflow: hidden;
    .van-swipe {
      width: 100%;
      height: 100%;
      .van-swipe-item {
        float: left;
        img {
          height: 5rem;
        }
      }
    }
  }
  #phone-show {
    padding: 0 0.1rem;
    .phone-hot {
      width: 100%;
      img {
        width: 100%;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-flow: wrap;
      li {
        display: flex;
        width: 47.888%;
        text-align: center;
        flex-direction: column;
        margin: 0.1rem;
        box-sizing: border;
        .phone-link {
          text-decoration: none;
          p {
            font-size: 0.4rem;
            line-height: 0.5rem;
          }
          .phone-name {
            color: #000;
            font-size: 0.4rem;
            font-weight: bold;
          }
          .phone-sketch {
            font-size: 0.3rem;
            color: #757575;
          }
          .price-n {
            color: #ea625b;
          }
          .price-b {
            font-size: 0.2rem;
            color: #757575;
            text-decoration: line-through;
          }
          .phone-btn {
            background: #ea625b;
            color: #fff;
            font-size: 0.3rem;
            font-weight: 600;
            border: none;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>