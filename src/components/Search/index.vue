<template>
  <div id="search">
    <NavBar title="搜索"></NavBar>
    <form action="/">
      <van-search @search="onSearch" placeholder="请输入手机名称" v-model="searchText" />
    </form>
    <div class="p-cart">
      <ul>
        <li v-for="item in phoneList" :key="item.id">
          <a class="phone-link">
            <img v-lazy="item.src" />
            <p class="phone-name">{{item.name}}</p>
            <p class="phone-sketch">{{item.sketch}}</p>
            <p>
              <span class="price-n">{{item.priceNow}}</span>
              <span class="price-b">{{item.priceBe}}</span>
            </p>
            <button class="phone-btn">立即购买</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data(){
    return{
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
      searchText:""
    }
  },
  methods:{
    onSearch(){
      window.console.log(this.searchText)
    }
  }
}
</script>

<style lang="scss" scoped>
.p-cart {
  padding: 0 0.1rem;
  background: #ffffff;
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
</style>