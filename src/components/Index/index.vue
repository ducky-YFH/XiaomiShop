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
      <a class="me">
        <i class="icon iconfont icon-me"></i>
      </a>
    </header>
    <!-- 轮播图 -->
    <div id="phone-carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in carouselList" :key="index">
          <a href>
            <img :src="item.src" alt />
          </a>
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
        <a href>
          <img v-lazy="hotPhone.hotSrc" />
        </a>
      </div>
      <ul>
        <li v-for="item in phoneList" :key="item.id">
          <a class="phone-link" href>
            <img v-lazy="item.src" />
            <p class="phone-name">{{item.name}}</p>
            <p class="phone-sketch">{{item.ketch}}</p>
            <p>
              <span class="price-n">{{item.priceNow}}</span>
              <span class="price-b">{{item.priceBe}}</span>
            </p>
            <button class="phone-btn">立即购买</button>
          </a>
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
      carouselList:[
        {
          'id':'1',
          'name':'xiaomiCC9Pro',
          'src': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d051875340405ba2f33d89eb8c1ef400.jpg?thumb=1&w=720&h=360',
        },
        {
          'id':'2',
          'name': 'xiaomi9Pro',
          'src':'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/061baf7d438f78c6a072d4b4872c884b.jpg?thumb=1&w=720&h=360',
        },
        {
          'id':'3',
          'name': 'RedmiBook14',
          'src':'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/12c58318af41a367c002e5f800adf740.jpg?thumb=1&w=720&h=360',
        }
      ],
      // 部分手机展示数据
      phoneList:[
        {
          'id': '1',
          'name': 'Redmi Note8 Pro',
          'src': 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280',
          'sketch': '6400万全场景四摄',
          'priceNow': '￥1299起',
          'priceBe': '￥1399',
        },
        {
          'id': '2',
          'name': 'Redmi Note 8',
          'src': 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280',
          'sketch': '千元4800万四摄',
          'priceNow': '￥1299起',
          'priceBe': '',
          'hot': 'true',
          'hotSrc': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440'
        },
        {
          'id': '3',
          'name': 'Redmi Note 7  Pro',
          'src': 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/905c13a84d8b70c9b9f4e3dee10a9515.jpg?thumb=1&w=344&h=280',
          'sketch': '索尼4800万超清拍照',
          'priceNow': '￥1299起',
          'priceBe': '',
        },
        {
          'id': '4',
          'name': 'Redmi K20',
          'src': 'http://i8.mifile.cn/v1/a1/86143982-11ca-5249-e90c-eecfdb9b98a0.webp',
          'sketch': '弹出全面屏，4800万三摄',
          'priceNow': '￥1299起',
          'priceBe': '',
        },
      ],
      // 每日精选
      hotPhone:{}
    }
  },
  methods:{
    getHotphone(){
      this.hotPhone = this.phoneList.find(item => {
        return item.hot
      })
    }
  },
  created(){
    this.getHotphone()
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