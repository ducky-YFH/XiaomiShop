<template>
  <div id="detail">
    <!-- <h1>{{this.$route.params.id}}</h1> -->
    <!-- 轮播图 -->
    <div id="detail-carousel">
      <a class="back" @click="$router.back(-1)">
        <van-icon name="arrow-left" />
      </a>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in phoneDetail.carousel" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 返回顶部 -->
    <BackTop></BackTop>
    <!-- 购物车导航条 -->
    <CartNav @addToCart="addToCart"></CartNav>
    <section>
      <!-- 手机名称 -->
      <h1 id="phone-name">{{phoneDetail.name}}</h1>
      <!-- 手机简述 -->
      <div id="phone-sketch">
        <span class="phone-notice">{{phoneDetail.notice}}</span>
        {{phoneDetail.sketch}}
      </div>
      <!-- 手机价格 -->
      <div id="phone-price">
        <p>￥{{phoneDetail.price}}</p>
      </div>
      <!-- 手机配置 -->
      <div id="phone-deploy" @click="paraOpt.flag = true">
        <div class="wrapper">
          <div v-for="item in phoneDetail.deploy" :key="item.name" class="wrapper-item">
            <img :src="item.img" alt />
            <p>{{item.name}}</p>
            <p>{{item.cname}}</p>
          </div>
        </div>
      </div>
      <!-- 选择手机配置、地址、承担 -->
      <div id="phone-sele">
        <div @click="phoneOpt.flag = true">
          <span>已选</span>
          <span>{{phoneDetail.name +" "+ curPhone.ver.memory + " "+ curPhone.color + "x" + curPhone.count}}</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
        <div @click="addrOpt.flag = true">
          <span>送至</span>
          <span>深圳信息职业技术学院</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
        <div @click="serveOpt.flag = true">
          <span>
            <van-icon color="#f78738" name="passed" />小米自营
          </span>
          <span>
            <van-icon color="#f78738" name="passed" />小米发货
          </span>
          <span>
            <van-icon color="#f78738" name="passed" />7天无理由退货
          </span>
          <span>
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <!-- 评论区域 -->
      <div id="phone-comment">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in commentList" :key="index">
            <router-link tag="div" :to="`/comment/view/${item.cid}`">
              <div class="c-item">
                <div class="c-mes">
                  <div class="c-left">
                    <img v-lazy="item.avatar" alt />
                    <div>
                      <p>{{item.user}}</p>
                      <p>{{item.time}}</p>
                    </div>
                  </div>
                  <div class="c-right">
                    <van-icon name="good-job-o" />
                    <span>{{item.like}}</span>
                  </div>
                </div>
                <div class="c-con">
                  <div>{{item.con}}</div>
                  <div class="c-img">
                    <div class="c-imgBox" alt v-for="(imgItem,i) in item.img" :key="i">
                      <img v-lazy="imgItem" />
                    </div>
                  </div>
                </div>
                <div class="c-reply">
                  <span class="repWho">{{item.repy.name}}：</span>
                  <span class="repCon">{{item.repy.con}}</span>
                </div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
        <router-link tag="a" :to="`/comment/list/${phoneDetail.id}`">
          <div id="comment-more">
            <span>更多评论</span>
            <van-icon name="more-o" />
          </div>
        </router-link>
      </div>
    </section>
    <!-- 手机图片介绍 -->
    <div id="phone-introduce">
      <div v-for="(item,index) in introduceImg" :key="index" class="p-img">
        <img v-lazy="item" />
      </div>
    </div>
    <!-- +++++++++弹出组件-手机参数+++++++++ -->
    <Option :option="paraOpt" @closeBox="closeBox">
      <ul class="paraSlot">
        <li v-for="(item,index) in phoneDetail.mainDeploy" :key="index">
          <span class="paraType">{{ item.type }}</span>
          <span class="paraName">{{ item.n }}</span>
        </li>
      </ul>
    </Option>
    <!-- ========================================弹出组件-手机配置选择======================================== -->
    <Option :option="phoneOpt" @closeBox="closeBox">
      <div class="phoneSlot">
        <!-- 图片、名称、价格 -->
        <div class="p-mes">
          <img class="p-img" :src="curPhone.img" />
          <div>
            <p class="p-price">￥{{ curPhone.ver.money }}</p>
            <p class="p-name">{{ phoneDetail.name +" "+ curPhone.ver.memory + " "+ curPhone.color}}</p>
          </div>
        </div>
        <div class="p-wrap">
          <!-- 版本 -->
          <div class="p-sele p-type">
            <p>版本</p>
            <ul @click="selectType">
              <li
                :data-index="index"
                :class="{active: index == 0 }"
                v-for="(item,index) in curPhone.vers"
                :key="index"
              >{{ item.memory }}</li>
            </ul>
          </div>
          <!-- 颜色 -->
          <div class="p-sele">
            <p>颜色</p>
            <ul @click="selectColor">
              <li
                :class="{active: index == 0}"
                v-for="(item,index) in types"
                :key="index"
                :data-index="index"
              >{{item.color}}</li>
            </ul>
          </div>
          <!-- 购买数量 -->
          <div class="p-count">
            <span>购买数量</span>
            <div class="counter" @click="controlCount">
              <span :class="[{minus: true}, {can: curPhone.count > 0}]">&minus;</span>
              <span class="num">{{ curPhone.count }}</span>
              <span :class="[{add: true}, {can: curPhone.count < curPhone.ver.max}]">&plus;</span>
            </div>
          </div>
          <!-- 加入购物车 -->
          <button
            @click="addToCart"
            :class="[{btnCart: true}, {btnPass: curPhone.count == 0}]"
          >加入购物车</button>
        </div>
      </div>
    </Option>
    <!-- ===================================================================================================== -->
    <!-- ++++++++++++弹出组件-选择地址++++++++++++ -->
    <Option :option="addrOpt" @closeBox="closeBox">
      <van-address-list
        v-model="addrOpt.chosenAddressId"
        :list="addrOpt.list"
        @add="onAdd"
        @edit="onEdit"
      />
    </Option>
    <!-- ++++++++++++弹出组件-服务说明++++++++++++ -->
    <Option :option="serveOpt" @closeBox="closeBox">
      <ul class="serveSlot">
        <li v-for="(item,index) in serveOpt.serve" :key="index">
          <van-icon color="#f78738" name="passed" />
          <span>{{item | strFilter }}</span>
        </li>
      </ul>
    </Option>
  </div>
</template>

<script>
import Option from '../OptionBox'

export default {
  name: 'detail',
  data(){
    return {
      // 记录第一次进入
      firstEnter: true,
      paraOpt:{
        flag: false,
        title: '关键参数'
      },
      phoneOpt:{
        flag: false,
        title: '选择配置'
      },
      // 地址
      addrOpt:{
        flag: false,
        title: '选择地址',
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ]
      },
      phoneDetail: {},
      // 服务说明
      serveOpt:{
        flag: false,
        title: '服务说明',
        serve:[]
      },
      // 评论swiper滑块API，用来评论区
      swiperOption: {
        slidesPerView : 'auto'
      },
      // 评论内容
      commentList:[],
      // 手机图片介绍数据
      introduceImg:[],
      // 手机参数选择
      types:[],
      // 当前选择的手机
      curPhone:{ id: '', name: '', img: '', color:'', count: Number, ver: {}, vers: [],
      }
    }
  },
  filters:{
    strFilter(str){
      return str.replace(/：/,'\n').replace(/<br>/g,'\n')
    }
  },
  methods:{
    closeBox(flag){
      this.paraOpt.flag = flag
      this.phoneOpt.flag = flag
      this.addrOpt.flag = flag
      this.serveOpt.flag = flag
    },
    // 跳到添加地址组件
    onAdd(){
      this.$router.push('/address/editaddr')
    },
    // 编辑地址
    onEdit(item, index) {
      window.console.log('编辑地址',item,index)
    },
    // 获取后台数据
    getDetail(){
      this.$axios.get("/api/detail",{ params: {id: this.$route.params.id} }).then(res => {
        this.phoneDetail = res.data
        this.serveOpt.serve = this.phoneDetail.serve
        this.commentList = this.phoneDetail.commentList
        this.introduceImg = this.phoneDetail.introduceImg
        this.curPhone.name = this.phoneDetail.name
        this.types = this.phoneDetail.types
        this.selectFirst(this.types[0])
      // eslint-disable-next-line no-unused-vars
      }).catch(error =>{
        setTimeout(()=>{
          this.$toast.fail("获取数据失败")
          this.$router.go(-1)
        },1000)
      })
    },
    // 选取手机颜色
    selectColor(event){
      if(event.target.localName == 'li'){
        let index = this.showActive(event);
        this.curPhone.img = this.types[index].img
        this.curPhone.color = this.types[index].color
        this.curPhone.vers = this.types[index].vers
        // 找到ul判断是否有ver
        document.querySelector('.p-type > ul').children.forEach((item,index) => {
          if(item.className == 'active'){
            this.curPhone.ver = this.curPhone.vers[index]
          }
        })
        this.judgeNum()
        // window.console.log(this.curPhone)
      }
    },
    // 默认自动选择手机配置一
    selectFirst(firstItem){
      this.curPhone.id = this.$route.params.id
      this.curPhone.img = firstItem.img
      this.curPhone.color = firstItem.color
      this.curPhone.vers = firstItem.vers
      this.curPhone.ver = firstItem.vers[0]
      this.judgeNum()
    },
    // 选择手机配置
    selectType(event){
      if(event.target.localName == 'li'){
        let index = this.showActive(event);
        this.curPhone.ver = this.curPhone.vers[index]
        this.judgeNum()
      }
    },
    showActive(e){
      e.target.parentElement.children.forEach(item => {
        item.className = ""  
      })
      e.target.className = "active"
      return e.target.dataset.index
    },
    // 判断手机可以购买的数量是否大于0
    judgeNum(){
      if(this.curPhone.ver.max > 0){
        this.curPhone.count = 1
      }else{
        this.curPhone.count = 0
      }
    },
    // 控制购买数量
    controlCount(e){
      if(e.target.classList.contains('minus') && this.curPhone.count > 0){
        this.curPhone.count -= 1;
      }
      if(e.target.classList.contains('add') && this.curPhone.count < this.curPhone.ver.max){
        this.curPhone.count += 1;
      }
    },
    // 添加到购物车
    addToCart(){
      if(this.curPhone.count > 0){
        let newCurPhone = this.deepCopy({}, this.curPhone);
        this.$store.dispatch('addCart',newCurPhone)
        this.$toast.success('添加成功！');
        this.phoneOpt.flag = false
      }
    },
    // 深拷贝
    deepCopy(newObj, oldObj) {
      for (var key in oldObj) {
        var item = oldObj[key]
        if (item instanceof Array) {
          newObj[key] = [];
          this.deepCopy(newObj[key], item);
        }else if (item instanceof Object) {
          newObj[key] = {};
          this.deepCopy(newObj[key], item);
        }else {
          newObj[key] = item;
        }
      }
      return newObj;
    }
  },
  mounted(){
    // this.firstEnter = true
  },
  components:{
    Option,
  },
  beforeRouteEnter(to, from, next){
    if(from.name == 'index' || from.name == 'category'){
      to.meta.keepAlive = false
    }
    next(vm => {
      if(vm.firstEnter){
        vm.getDetail()
        vm.firstEnter = false
        to.meta.keepAlive = true
      }
    })
  },
  activated(){
    if(!this.$route.meta.keepAlive && !this.firstEnter){
      this.getDetail()
      this.$route.meta.keepAlive = true
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  #detail-carousel {
    width: 100%;
    height: 11rem;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .back {
      position: absolute;
      display: inline-block;
      font-size: 0.4rem;
      padding: 0.2rem;
      border-radius: 50%;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
      margin: 10px;
      z-index: 11;
      i{
        vertical-align: middle;
      }
    }
    .van-swipe {
      width: 100%;
      height: 100%;
      .van-swipe-item {
        float: left;
        img {
          height: 11rem;
        }
      }
    }
  }
  section {
    background: #ffffff;
    padding: 0.4rem;
    #phone-name {
      font-size: 0.6rem;
    }
    #phone-sketch {
      margin-top: 0.2rem;
      .phone-notice {
        color: #ff4a00;
      }
      font-size: 0.3rem;
      color: #757575;
      line-height: 0.6rem;
    }
    #phone-price {
      margin-top: 0.2rem;
      p {
        font-size: 0.7rem;
        color: #ff6739;
      }
    }
    #phone-deploy {
      margin-top: 0.2rem;
      .wrapper {
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0.3rem 0;
        margin-bottom: -0.2rem;
        overflow: -moz-scrollbars-none;
        .wrapper-item {
          display: inline-block;
          text-align: center;
          font-size: 0.38rem;
          color: #676767;
          width: 2rem;
          padding: 0 0.3rem;
          border-left: 1px solid #ececec;
          img {
            width: 0.6rem;
          }
          p {
            line-height: 0.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
    #phone-sele {
      margin-top: 0.2rem;
      background: #fafafa;
      div {
        border-bottom: 1px solid #f0f0f0;
      }
      div:nth-of-type(1),
      div:nth-of-type(2) {
        display: flex;
        justify-content: space-around;
        font-size: 0.3rem;
        padding: 0.3rem 0.2rem;
        span:nth-of-type(odd) {
          color: #737373;
        }
        span:nth-of-type(2) {
          flex: 0.8;
        }
      }
      div:nth-of-type(3) {
        font-size: 0.3rem;
        padding: 0.3rem 0.1rem 0.3rem 0.5rem;
        span {
          margin-right: 0.4rem;
          color: #737373;
          .van-icon {
            margin-right: 0.1rem;
          }
        }
        span:nth-last-of-type(1) {
          float: right;
        }
      }
    }
    #phone-comment {
      margin-top: 0.4rem;
      border-radius: 10px;
      font-size: 0.366rem;
      .swiper-slide {
        width: 7.8rem;
      }
      .c-item {
        background: #fafafa;
        padding: 0.4rem;
        height: 6rem;
        display: inline-block;
        margin-right: 0.3rem;
        border-radius: 10px;
        .c-mes {
          display: flex;
          justify-content: space-between;
          .c-left {
            display: flex;
            img {
              border-radius: 50%;
              width: 1.2rem;
            }
            div {
              margin-top: 0.15rem;
              margin-left: 0.3rem;
              display: flex;
              flex-direction: column;
              p:nth-of-type(2) {
                font-size: 0.3rem;
                margin-top: 0.1rem;
                color: #a1a1a1;
              }
            }
          }
          .c-right {
            display: flex;
            align-items: center;
            i {
              font-size: 0.6rem;
              color: #a9a9a9;
            }
            span {
              color: #a9a9a9;
              margin-left: 0.1rem;
            }
          }
        }
        .c-con {
          margin-top: 0.2rem;
          div:nth-of-type(1) {
            height: 1.2rem;
            line-height: 0.6rem;
            overflow: hidden;
            margin-bottom: 0.4rem;
          }
          .c-img {
            overflow: hidden;
            height: 1.5rem;
            width: 100%;
            display: flex;
            .c-imgBox {
              width: 1.8rem;
              height: 1.5rem;
              border-radius: 10px;
              margin-right: 0.3rem;
              overflow: hidden;
              img {
                width: 1.8rem;
                height: 1.9rem;
                margin-right: 0.3rem;
              }
            }
          }
        }
        .c-reply {
          margin-top: 0.3rem;
          font-size: 0.36rem;
          line-height: 0.5rem;
          .repWho {
            color: #ff6700;
          }
          .repCon {
          }
        }
      }
      #comment-more {
        margin-top: 0.4rem;
        font-size: 0.45rem;
        color: #4e72a5;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  #phone-introduce {
    margin-top: 0.3rem;
    .p-img {
      margin-top: -0.28rem;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  // 详细参数插槽
  .paraSlot {
    li {
      display: flex;
      justify-content: space-around;
      position: relative;
      padding: 0 0 0 0.6rem;
      align-items: center;
      margin: 0.6rem 0;
      .paraType {
        flex: 0.6;
        color: #9b9b9b;
      }
      .paraName {
        flex: 1;
        font-weight: 520;
        overflow: hidden;
        word-break: keep-all;
      }
    }
  }
  // 选择配置插槽
  .phoneSlot {
    .p-mes {
      display: flex;
      align-items: center;
      .p-img {
        width: 3rem;
      }
      .p-price {
        font-size: 0.666rem;
        color: #ff6700;
      }
      .p-name {
        line-height: 1rem;
      }
    }
    .p-wrap {
      padding: 0.4rem 0.6rem;
      .p-sele {
        margin-top: 0.2rem;
        p {
          line-height: 1rem;
        }
        ul {
          li {
            display: inline-block;
            border: 1px solid #ececec;
            padding: 0.3rem 0.1rem;
            margin-right: 0.2rem;
          }
          .active {
            color: #ff7517;
            border: 1px solid #ff7517;
          }
          .passive {
            color: #d5d5d5;
            border: 1px solid #d5d5d5;
          }
        }
      }
      .p-count {
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        span {
          line-height: 1rem;
        }
        .counter {
          display: inline-block;
          align-items: center;
          span {
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
      .btnCart {
        width: 100%;
        margin-top: 1rem;
        border: none;
        padding: 0.3rem;
        background: #ff6700;
        color: #fff;
        border-radius: 30px;
        &.btnPass {
          background: #9c9898;
        }
      }
    }
  }
  // 服务插槽
  .serveSlot {
    padding: 0 0.5rem;
    li {
      padding: 0.2rem;
      span {
        margin-left: 0.3rem;
        white-space: pre-wrap;
        line-height: 0.6rem;
      }
    }
  }
}
</style>