<template>
  <div id="detail">
    <!-- 轮播图 -->
    <div id="detail-carousel">
      <a class="back" @click="$router.back(-1)">返回</a>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in phoneDetail.carousel" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
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
          <span>小米CC9 Pro 6GB+128GB 魔法绿镜 x 1</span>
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
            <div class="c-item">
              <div class="c-mes">
                <div class="c-left">
                  <img
                    :src="item.avatar"
                    alt
                  />
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
                <img
                  alt
                  v-for="(imgItem,i) in item.img"
                  :key="i"
                  :src="imgItem"
                />
              </div>
              <div class="c-reply">
                <span class="repWho">{{item.repy.name}}：</span>
                <span class="repCon">{{item.repy.con}}</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!--  -->
    </section>

    <!-- +++++++++弹出组件-手机参数+++++++++ -->
    <Option :option="paraOpt" @closeBox="closeBox">
      <ul class="paraSlot">
        <li v-for="(item,index) in phoneDetail.mainDeploy" :key="index">
          <span class="paraType">{{ item.type }}</span>
          <span class="paraName">{{ item.n }}</span>
        </li>
      </ul>
    </Option>
    <!-- +++++++++弹出组件-手机配置选择+++++++++ -->
    <Option :option="phoneOpt" @closeBox="closeBox">
      <div class="phoneSlot">
        <!-- 图片、名称、价格 -->
        <div class="p-mes">
          <img
            class="p-img"
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572941094.42616676.jpg"
            alt
          />
          <div>
            <p class="p-price">￥3099</p>
            <p class="p-name">小米CC9 Pro 8GB+128GB 魔法绿镜</p>
          </div>
        </div>
        <div class="p-wrap">
          <!-- 版本 -->
          <div class="p-sele">
            <p>版本</p>
            <ul>
              <li class="active">6GB+128GB</li>
              <li>8GB+128GB</li>
              <li>8GB+256GB</li>
            </ul>
          </div>
          <!-- 颜色 -->
          <div class="p-sele">
            <p>颜色</p>
            <ul>
              <li class="active">魔法绿镜</li>
              <li>冰雪极光</li>
              <li>暗夜魅影</li>
            </ul>
          </div>
          <!-- 购买数量 -->
          <div class="p-count">
            <span>购买数量</span>
            <div class="counter">
              <span class="minus">&minus;</span>
              <span class="num">1</span>
              <span class="add can">&plus;</span>
            </div>
          </div>
          <!-- 加入购物车 -->
          <button class="p-btn">加入购物车</button>
        </div>
      </div>
    </Option>
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
    <!-- <h1>{{this.$route.params.id}}</h1> -->
  </div>
</template>

<script>
import Option from '../OptionBox'

export default {
  name: 'detail',
  data(){
    return {
      phoneDetail: {
        id: '1',
        name: '小米CC9 Pro',
        notice: '[ 新品火热开售中，分期享6期免息，低至467元起/期 ]',
        sketch: '1亿像素超清主摄 / 后置全场景五摄像头 / 双闪光双柔光四闪光灯 / 3200万像素超清前置相机 / 10倍混合光学变焦，50倍数字变焦 / 5260mAh大电量 / 标配30W疾速快充 / 小米首款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216 超线性扬声器',
        price: 2799,
        deploy: [
          {name:'CPU',cname:'骁龙730G',img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png'},
          {name:'五摄像头',cname:'10800万+2000万+1200万+500万+200万像素',img:'https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png'},
          {name:'超大屏',cname:'6.47英寸',img:'https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png'},
          {name:'屏幕分辨率',cname:'2340x1080',img:'https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png'},
          {name:'极速畅玩',cname:'6GB',img:'https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png'},
          {name:'存储容量',cname:'128GB',img:'https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png'},
          {name:'超长待机',cname:'5260mAh',img:'https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png'},
          {name:'运营商网络',cname:'4G全网通',img:'https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png'},
          {name:'网络模式',cname:'双卡双待',img:'https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png'},
        ],
        mainDeploy:[
          {type:'CPU',n:'高通骁龙'},
          {type:'CPU主频',n:'最高2.2GHZ'},
          {type:'后置摄像头',n:'10800万+2000万+1200万+500万+200万像素'},
          {type:'前置摄像头',n:'3200万像素'},
          {type:'屏幕',n:'双曲面'},
          {type:'屏幕尺寸',n:'6.47英寸'},
          {type:'屏幕分辨率',n:'2340x1080'},
          {type:'运行内存',n:'6GB'},
          {type:'存储容量',n:'128GB'},
          {type:'NFC',n:'支持'},
          {type:'红外遥控',n:'支持'},
          {type:'指纹识别',n:'屏幕指纹'},
          {type:'电池容量',n:'5260mAh'},
          {type:'电池充电',n:'有线快充'},
          {type:'网络类型',n:'4G全网通'},
          {type:'网络模式',n:'双卡双待'},
        ],
        comment: [
          {name: '小明', content: '非常不错的一款手机，拍照清晰',img:['https://i1.mifile.cn/a2/1573781813_7654729_s1128_1504wh.jpg','https://i1.mifile.cn/a2/1573781811_8004007_s1224_1632wh.jpg']},
          {name: '小红', content: '这台手机很好看，非常喜欢',img:['https://i1.mifile.cn/a2/1573720837_7399607_s1500_2000wh.jpg','https://i1.mifile.cn/a2/1573720833_8357377_s2000_1500wh.jpg']}
        ],
        type:[
          {color: '魔法绿镜',ver:[{memory:'6GB+128GB',number:100},{memory:'8GB+128GB',number: 50},{memory:'8GB+256GB',number:30}]},
          {color: '冰雪极光',ver:[{memory:'6GB+128GB',number:100},{memory:'8GB+128GB',number: 50},{memory:'8GB+256GB',number:40}]},
          {color: '暗夜魅影',ver:[{memory:'6GB+128GB',number:10},{memory:'8GB+128GB',number: 30},{memory:'8GB+256GB',number:10}]},
          '8GB+128GB',
          '8GB+256GB'
        ],
        img:[
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce07b93044e955f4d395b1af4f7f873f.jpg?f=webp&w=1080&h=2479&bg=20307',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb0eaeabc5030ac1c9282cf9b3c8effa.jpg?f=webp&w=1080&h=2195&bg=151515',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/384da100cbc0058265582b0851c4f2c5.jpg?f=webp&w=1080&h=2419&bg=10101',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ed16ae262d7a3f24bd4b43d018b957.jpg?f=webp&w=1080&h=2598&bg=10101',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0adb1e65f11e744529cb07e19dd709fc.jpg?f=webp&w=1080&h=2058&bg=0',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23cb2c757c219ea3f598384f4114db15.jpg?f=webp&w=1080&h=810&bg=4B71AF',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/42712c5fbb65eb59ea27fc89e2fd203b.jpg?f=webp&w=1080&h=1807&bg=141414',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a7f755c8fe9d7ac70559095915c707c.jpg?f=webp&w=1080&h=1587&bg=10101',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8d76c1febbe8365eee2dc51f4637203.jpg?f=webp&w=1080&h=2096&bg=10101',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7432d6d76f74a92764951ba3e81473ab.jpg?f=webp&w=1080&h=1942&bg=E5F2F8',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ec7104e82ddebb8ca5d92f82b736bc7.jpg?f=webp&w=1080&h=1036&bg=F7F7F7',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427',
        ],
        carousel:[
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f72a2a4b703834d55a1850c50172e6c9.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/30bc4cdb195b2b85e997967399659b95.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7aecd5ccab1ee2f565588ca6211ac06b.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3abade1a775f6c86ba5963bba538e3f3.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5742bc15fcfe5e99d660406187bc8987.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ab3819c8b315abb974230b68df6a40c.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86af9949b94e1bd54e9b334bf621faa7.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac0c7f41be1c8f48d854b6f9c66c3f5e.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/debe9bcf9af16e25ac05378e141493fb.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68f4a723a1c26acc064ac3a028865ff7.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15af19386c9c52cdf58116a67b697d47.jpg',
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bdf061e5817020fccd5dd00dc7f8ac4.jpg'
        ]
      },
      paraOpt:{
        flag: false,
        title: '关键参数'
      },
      phoneOpt:{
        flag: false,
        title: '选择配置'
      },
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
      serveOpt:{
        flag: false,
        title: '服务说明',
        serve:[
          '小米自营',
          '由小米发货',
          '7天无理由退货',
          '运费说明：由小米(不含小米有品)发货的商品,单笔满150元免运费;<br>'+
          '由小米有品发货的商品,免运费;<br>'+
          '由第三方商家发货的商品,免运费;<br>'+
          '特殊商品需要单独收取运费,具体以实际结算金额为准;优惠券等不能抵扣运费金额;如需无理由退货,用户将承担该商品的退货物流费用;<br>',
          '7天价格保护'
        ]
      },
      // 评论swiper滑块API
      swiperOption: {
        slidesPerView : 'auto'
      },
      // 评论内容
      commentList:[
        {
          user: '大黑帅', 
          avatar: 'https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01nYY16yjI2/70BOxylxKgCdcK.jpg',
          time: '2019-11-17',
          like: 11, 
          con:'手机外观挺漂亮的，颜值高！电池大！间直好看的无法形容，very good',
          repy:{ name: '官方',con: '必须给你点赞，我还练过葵花点穴手，保证你舒坦' },
          img:[
            '//i1.mifile.cn/a2/1573711026_4629170_s1500_2000wh!540x5400.jpg',
            '//i1.mifile.cn/a2/1573711025_8415951_s1500_2000wh!540x5400.jpg'
          ]
        },
        {
          user: '小黑帅', 
          avatar: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/9bd716bcdd5d6e4968d3adc3c5b6353b.jpg',
          time: '2019-11-18', 
          like: 100, 
          con:'拍照效果真心不错👍！值得拥有，性价比好！',
          repy:{ name: '官方',con: '鹅鹅鹅，曲项向天歌，白毛浮绿水，米米爱你哟~ღ( ´･ᴗ･` )感谢您...' },
          img:[
            '//i1.mifile.cn/a2/1573739504_1002777_s414_276wh!540x5400.jpg',
            '//i1.mifile.cn/a2/1573739503_7035046_s414_276wh!540x5400.jpg'
          ]
        },
        {
          user: '小工', 
          avatar: 'https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01T5CyF1EV6/doYKhjWZt2QPQH.jpg',
          time: '2019-11-17', 
          like: 1112, 
          con:'还是很惊艳的，嘿嘿',
          repy:{ name: '官方',con: '米家CC初长成，隐于深闺人不知，天生丽质难自弃，一朝选在米粉侧~~感谢...' },
          img:[
            '//i1.mifile.cn/a2/1573700784_4893316_s1512_2016wh!540x5400.jpg',
            '//i1.mifile.cn/a2/1573700782_6353342_s2016_1512wh!540x5400.jpg'
          ]
        },
      ]
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
    onAdd(){
      this.$router.push('/me/editAddr')
    },
    onEdit(item, index) {
      window.console.log('编辑地址',item,index)
    }
  },
  components:{
    Option
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
      font-size: 0.3rem;
      padding: 0.2rem;
      border-radius: 10%;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
      margin: 10px;
      z-index: 11;
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
          div {
            height: 1.2rem;
            line-height: 0.6rem;
            overflow: hidden;
            margin-bottom: 0.4rem;
          }
          img {
            height: 1.5rem;
            width: 1.8rem;
            border-radius: 10px;
            margin-right: 0.3rem;
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
      .p-btn {
        width: 100%;
        margin-top: 1rem;
        border: none;
        padding: 0.3rem;
        background: #ff6700;
        color: #fff;
        border-radius: 30px;
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