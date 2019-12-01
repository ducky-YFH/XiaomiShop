var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/phoneList', function (req, res, next) {
  let phoneList =
  {
    "phoneList": [
      {
        "id": "1",
        "name": "小米CC9 Pro",
        "src": "//i8.mifile.cn/v1/a1/7d583942-b8f9-951a-1f27-c836b86c1473.webp",
        "sketch": "3200万自拍，4800万三摄",
        "priceNow": "1699",
        "priceBe": "1999"
      },
      {
        "id": "2",
        "name": "Redmi Note 8",
        "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
        "sketch": "千元4800万四摄",
        "priceNow": "1299起",
        "priceBe": "",
        "hot": "true",
        "hotSrc": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440"
      },
      {
        "id": "3",
        "name": "Redmi Note 7  Pro",
        "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/905c13a84d8b70c9b9f4e3dee10a9515.jpg?thumb=1&w=344&h=280",
        "sketch": "索尼4800万超清拍照",
        "priceNow": "1299起",
        "priceBe": ""
      },
      {
        "id": "4",
        "name": "Redmi K20",
        "src": "//i8.mifile.cn/v1/a1/86143982-11ca-5249-e90c-eecfdb9b98a0.webp",
        "sketch": "弹出全面屏，4800万三摄",
        "priceNow": "1299起",
        "priceBe": ""
      },
      {
        "id": "5",
        "name": "小米9 Pro 5G",
        "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c45bb8ab2c35e31910612acd2cb7f91.jpg?thumb=1&w=344&h=280",
        "sketch": "5G双卡全网通，骁龙855Plus",
        "priceNow": "3699起",
        "priceBe": ""
      }
    ],
    "carousel": [
      {
        "id": "1",
        "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d051875340405ba2f33d89eb8c1ef400.jpg?thumb=1&w=720&h=360"
      },
      {
        "id": "2",
        "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bec5dd6b3fd6029b98d8402bf8583976.jpg?thumb=1&w=720&h=360"
      },
      {
        "id": "6",
        "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/feb3aeb636332e316231700a247b9cbd.jpg?thumb=1&w=720&h=360"
      }
    ],
    "choiceness": {
      "id": 2,
      "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440"
    }
  }
  res.json(phoneList)
});

router.get('/detail', function (req, res) {
  let detailData1 = {
    "id": 1,
    "name": "小米CC9 Pro",
    "notice": "[ 新品火热开售中，分期享6期免息，低至467元起/期 ]",
    "sketch": "1亿像素超清主摄 / 后置全场景五摄像头 / 双闪光双柔光四闪光灯 / 3200万像素超清前置相机 / 10倍混合光学变焦，50倍数字变焦 / 5260mAh大电量 / 标配30W疾速快充 / 小米首款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216 超线性扬声器",
    "price": 2799,
    "deploy": [
      {
        "name": "CPU",
        "cname": "骁龙730G",
        "img": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"
      },
      {
        "name": "五摄像头",
        "cname": "10800万+2000万+1200万+500万+200万像素",
        "img": "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png"
      },
      {
        "name": "超大屏",
        "cname": "6.47英寸",
        "img": "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png"
      },
      {
        "name": "屏幕分辨率",
        "cname": "2340x1080",
        "img": "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png"
      },
      {
        "name": "极速畅玩",
        "cname": "6GB",
        "img": "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png"
      },
      {
        "name": "存储容量",
        "cname": "128GB",
        "img": "https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png"
      },
      {
        "name": "超长待机",
        "cname": "5260mAh",
        "img": "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png"
      },
      {
        "name": "运营商网络",
        "cname": "4G全网通",
        "img": "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png"
      },
      {
        "name": "网络模式",
        "cname": "双卡双待",
        "img": "https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png"
      }
    ],
    "mainDeploy": [
      {
        "type": "CPU",
        "n": "高通骁龙"
      },
      {
        "type": "CPU主频",
        "n": "最高2.2GHZ"
      },
      {
        "type": "后置摄像头",
        "n": "10800万+2000万+1200万+500万+200万像素"
      },
      {
        "type": "前置摄像头",
        "n": "3200万像素"
      },
      {
        "type": "屏幕",
        "n": "双曲面"
      },
      {
        "type": "屏幕尺寸",
        "n": "6.47英寸"
      },
      {
        "type": "屏幕分辨率",
        "n": "2340x1080"
      },
      {
        "type": "运行内存",
        "n": "6GB"
      },
      {
        "type": "存储容量",
        "n": "128GB"
      },
      {
        "type": "NFC",
        "n": "支持"
      },
      {
        "type": "红外遥控",
        "n": "支持"
      },
      {
        "type": "指纹识别",
        "n": "屏幕指纹"
      },
      {
        "type": "电池容量",
        "n": "5260mAh"
      },
      {
        "type": "电池充电",
        "n": "有线快充"
      },
      {
        "type": "网络类型",
        "n": "4G全网通"
      },
      {
        "type": "网络模式",
        "n": "双卡双待"
      }
    ],
    "commentList": [
      {
        "cid": 111,
        "user": "大黑帅",
        "avatar": "https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01nYY16yjI2/70BOxylxKgCdcK.jpg",
        "time": "2019-11-17",
        "like": 11,
        "con": "手机外观挺漂亮的，颜值高！电池大！间直好看的无法形容，very good",
        "repy": {
          "name": "官方",
          "con": "必须给你点赞，我还练过葵花点穴手，保证你舒坦"
        },
        "img": [
          " //i1.mifile.cn/a2/1573711026_4629170_s1500_2000wh!540x5400.jpg",
          " //i1.mifile.cn/a2/1573711025_8415951_s1500_2000wh!540x5400.jpg"
        ]
      },
      {
        "cid": 222,
        "user": "小黑帅",
        "avatar": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/9bd716bcdd5d6e4968d3adc3c5b6353b.jpg",
        "time": "2019-11-18",
        "like": 100,
        "con": "拍照效果真心不错👍！值得拥有，性价比好！",
        "repy": {
          "name": "官方",
          "con": "鹅鹅鹅，曲项向天歌，白毛浮绿水，米米爱你哟~ღ( ´･ᴗ･` )感谢您..."
        },
        "img": [
          " //i1.mifile.cn/a2/1573739504_1002777_s414_276wh!540x5400.jpg",
          " //i1.mifile.cn/a2/1573739503_7035046_s414_276wh!540x5400.jpg"
        ]
      },
      {
        "cid": 333,
        "user": "小工",
        "avatar": "https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01T5CyF1EV6/doYKhjWZt2QPQH.jpg",
        "time": "2019-11-17",
        "like": 1112,
        "con": "还是很惊艳的，嘿嘿",
        "repy": {
          "name": "官方",
          "con": "米家CC初长成，隐于深闺人不知，天生丽质难自弃，一朝选在米粉侧~~感谢..."
        },
        "img": [
          " //i1.mifile.cn/a2/1573700784_4893316_s1512_2016wh!540x5400.jpg",
          " //i1.mifile.cn/a2/1573700782_6353342_s2016_1512wh!540x5400.jpg"
        ]
      }
    ],
    "types": [
      {
        "color": "魔法绿镜",
        "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572932850.83044508.jpg",
        "vers": [
          {
            "memory": "6GB+128GB",
            "money": 2799,
            "max": 4
          },
          {
            "memory": "8GB+128GB",
            "money": 3000,
            "max": 10
          },
          {
            "memory": "8GB+256GB",
            "money": 3500,
            "max": 6
          }
        ]
      },
      {
        "color": "冰雪极光",
        "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572941393.18077211.jpg",
        "vers": [
          {
            "memory": "6GB+128GB",
            "money": 2799,
            "max": 4
          },
          {
            "memory": "8GB+128GB",
            "money": 3000,
            "max": 6
          },
          {
            "memory": "8GB+256GB",
            "money": 3500,
            "max": 1
          }
        ]
      },
      {
        "color": "暗夜魅影",
        "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572941191.92012217.jpg",
        "vers": [
          {
            "memory": "6GB+128GB",
            "money": 2799,
            "max": 3
          },
          {
            "memory": "8GB+128GB",
            "money": 3000,
            "max": 4
          },
          {
            "memory": "12GB+256GB",
            "money": 5000,
            "max": 0
          }
        ]
      }
    ],
    "introduceImg": [
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce07b93044e955f4d395b1af4f7f873f.jpg?f=webp&w=1080&h=2479&bg=20307",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb0eaeabc5030ac1c9282cf9b3c8effa.jpg?f=webp&w=1080&h=2195&bg=151515",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/384da100cbc0058265582b0851c4f2c5.jpg?f=webp&w=1080&h=2419&bg=10101",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ed16ae262d7a3f24bd4b43d018b957.jpg?f=webp&w=1080&h=2598&bg=10101",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0adb1e65f11e744529cb07e19dd709fc.jpg?f=webp&w=1080&h=2058&bg=0",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23cb2c757c219ea3f598384f4114db15.jpg?f=webp&w=1080&h=810&bg=4B71AF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/42712c5fbb65eb59ea27fc89e2fd203b.jpg?f=webp&w=1080&h=1807&bg=141414",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a7f755c8fe9d7ac70559095915c707c.jpg?f=webp&w=1080&h=1587&bg=10101",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8d76c1febbe8365eee2dc51f4637203.jpg?f=webp&w=1080&h=2096&bg=10101",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7432d6d76f74a92764951ba3e81473ab.jpg?f=webp&w=1080&h=1942&bg=E5F2F8",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ec7104e82ddebb8ca5d92f82b736bc7.jpg?f=webp&w=1080&h=1036&bg=F7F7F7",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427"
    ],
    "carousel": [
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f72a2a4b703834d55a1850c50172e6c9.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/30bc4cdb195b2b85e997967399659b95.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7aecd5ccab1ee2f565588ca6211ac06b.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3abade1a775f6c86ba5963bba538e3f3.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5742bc15fcfe5e99d660406187bc8987.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ab3819c8b315abb974230b68df6a40c.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86af9949b94e1bd54e9b334bf621faa7.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac0c7f41be1c8f48d854b6f9c66c3f5e.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/debe9bcf9af16e25ac05378e141493fb.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68f4a723a1c26acc064ac3a028865ff7.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15af19386c9c52cdf58116a67b697d47.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bdf061e5817020fccd5dd00dc7f8ac4.jpg"
    ],
    "serve": [
      "小米自营",
      "由小米发货",
      "7天无理由退货",
      "运费说明：由小米(不含小米有品)发货的商品,单笔满150元免运费;<br>由小米有品发货的商品,免运费;<br>由第三方商家发货的商品,免运费;<br>特殊商品需要单独收取运费,具体以实际结算金额为准;优惠券等不能抵扣运费金额;如需无理由退货,用户将承担该商品的退货物流费用;<br>",
      "7天价格保护"
    ]
  }
  let detailData2 = {
    "id": 2,
    "name": "Redmi Note 8",
    "notice": "「6GB+64GB直降100，到手价1099元，新增星云紫新配色」",
    "sketch": "4800万全场景四摄 / 前置1300万美颜相机 / 骁龙665处理器 / 4000mAh超长续航 / 标配18W快充 / 超线性扬声器 / 90%高屏占比 / 康宁大猩猩保护玻璃 / 6.3英寸水滴全面屏",
    "price": 1099,
    "deploy": [
      {
        "name": "CPU",
        "cname": "骁龙665八核",
        "img": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"
      },
      {
        "name": "四摄像头",
        "cname": "4800万+800万+200万+200万像素",
        "img": "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png"
      },
      {
        "name": "超大屏",
        "cname": "6.3英寸",
        "img": "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png"
      },
      {
        "name": "屏幕分辨率",
        "cname": "2340x1080",
        "img": "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png"
      },
      {
        "name": "极速畅玩",
        "cname": "6GB",
        "img": "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png"
      },
      {
        "name": "存储容量",
        "cname": "64GB",
        "img": "https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png"
      },
      {
        "name": "超长待机",
        "cname": "4000mAh",
        "img": "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png"
      },
      {
        "name": "运营商网络",
        "cname": "4G全网通",
        "img": "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png"
      },
      {
        "name": "网络模式",
        "cname": "双卡双待",
        "img": "https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png"
      }
    ],
    "mainDeploy": [
      {
        "type": "CPU",
        "n": "骁龙665八核"
      },
      {
        "type": "CPU主频",
        "n": "最高2.0GHZ"
      },
      {
        "type": "后置摄像头",
        "n": "4800万+800万+200万+200万像素"
      },
      {
        "type": "前置摄像头",
        "n": "1300万像素"
      },
      {
        "type": "屏幕",
        "n": "水滴全面屏"
      },
      {
        "type": "屏幕尺寸",
        "n": "6.3英寸"
      },
      {
        "type": "屏幕分辨率",
        "n": "2340x1080"
      },
      {
        "type": "运行内存",
        "n": "6GB"
      },
      {
        "type": "存储容量",
        "n": "64GB"
      },
      {
        "type": "指纹识别",
        "n": "后置指纹"
      },
      {
        "type": "电池容量",
        "n": "4000mAh"
      },
      {
        "type": "电池充电",
        "n": "有线快充"
      },
      {
        "type": "网络类型",
        "n": "4G全网通"
      },
      {
        "type": "网络模式",
        "n": "双卡双待"
      }
    ],
    "commentList": [
      {
        "cid": 111,
        "user": "高飞仰冥鸿",
        "avatar": "https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01YZktmc1S1/6kM9Gvbnut5swb.jpg",
        "time": "2019-11-17",
        "like": 11,
        "con": "一直在用小米的，这也是第五台，不错，挺好的",
        "repy": {
          "name": "官方",
          "con": "必须给你点赞，我还练过葵花点穴手，保证你舒坦"
        },
        "img": [
          "//i1.mifile.cn/a2/1571641042_6970594_s1200_1600wh!540x5400.jpg",
          "//i1.mifile.cn/a2/1571641035_1605830_s1500_2000wh!540x5400.jpg",
          "//i1.mifile.cn/a2/1571641021_8353454_s1500_2000wh!540x5400.jpg"
        ]
      },
      {
        "cid": 222,
        "user": "溪源陶莎",
        "avatar": "https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01iIOHaGh5I/8e2xquF7KJ6ypd.jpg",
        "time": "2019-11-18",
        "like": 100,
        "con": "外观高大上，拍照可以第三部小米品牌手机，希望小米不忘初心，我会永远支持",
        "repy": {
          "name": "官方",
          "con": "米米爱你哟~ღ( ´･ᴗ･` )感谢您..."
        },
        "img": [
          "//i1.mifile.cn/a2/1568868607_9278224_s1500_2000wh!540x5400.jpg",
          "//i1.mifile.cn/a2/1568868603_5411028_s1500_2000wh!540x5400.jpg"
        ]
      },
      {
        "cid": 333,
        "user": "暗黑。",
        "avatar": "https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01T5CyF1EV6/doYKhjWZt2QPQH.jpg",
        "time": "2019-11-17",
        "like": 1112,
        "con": "第四部小米手机了，性价比高，以后还会继续支持小米。",
        "repy": {
          "name": "官方",
          "con": "米家CC初长成，隐于深闺人不知，天生丽质难自弃，一朝选在米粉侧~~感谢..."
        },
        "img": [
          "//i1.mifile.cn/a2/1568863149_8219722_s1920_1074wh!540x5400.jpg",
          "//i1.mifile.cn/a2/1568863148_9976420_s2016_1508wh!540x5400.jpg",
          "//i1.mifile.cn/a2/1568863146_1909783_s2016_1508wh!540x5400.jpg"
        ]
      }
    ],
    "types": [
      {
        "color": "皓月白",
        "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422175.57093562.jpg",
        "vers": [
          {
            "memory": "6GB+64GB",
            "money": 1099,
            "max": 10
          }
        ]
      },
      {
        "color": "曜石黑",
        "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422141.04018158.jpg",
        "vers": [
          {
            "memory": "6GB+64GB",
            "money": 1099,
            "max": 14
          }
        ]
      },
      {
        "color": "星云紫",
        "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1573823282.77886401.jpg",
        "vers": [
          {
            "memory": "6GB+64GB",
            "money": 1099,
            "max": 5
          }
        ]
      },
      {
        "color": "梦幻蓝",
        "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422055.88767967.jpg",
        "vers": [
          {
            "memory": "6GB+64GB",
            "money": 1099,
            "max": 6
          }
        ]
      }
    ],
    "introduceImg": [
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6957583e0c7ae8e284579984068daf3.jpg?f=webp&w=1080&h=1753&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acc23d295406a8cc59f09d34e9f02ce3.jpg?f=webp&w=1080&h=640&bg=F9D6FF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d775752caeeededfdebe56ac632c60a0.jpg?f=webp&w=1080&h=501&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57455489b5e27e1bc7692c4ac1fd7da1.jpg?f=webp&w=1080&h=498&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57455489b5e27e1bc7692c4ac1fd7da1.jpg?f=webp&w=1080&h=498&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fd261af279833d58266ae22c345854c.jpg?f=webp&w=1080&h=1220&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/65301f1f51aac4a95a296646f4528603.jpg?f=webp&w=1080&h=640&bg=130D27",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53da572f86319de783aa55b5abe06b95.jpg?f=webp&w=1080&h=676&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c35c836fe0ffce14b87a3416a809790.jpg?f=webp&w=920&h=1100&bg=FEFDFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/050f4d5b268e732473e88f17bfa6dfb8.jpg?f=webp&w=1080&h=675&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6a65e3af4bad6c061e38bc7f67b2aa0.jpg?f=webp&w=920&h=1100&bg=FCFAFD",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc66c011dcae0e3cd13cc25ea8abfd4d.jpg?f=webp&w=1080&h=640&bg=410F66",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/79b6d4bab1696360b19b6c230616b66d.jpg?f=webp&w=1080&h=1155&bg=FEFEFE",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8247a51dc50825e40c3d3031f5703d9e.jpg?f=webp&w=1080&h=974&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec502a644c55d8ef341079ed89da9e41.jpg?f=webp&w=1080&h=971&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2d05a553f369e182822c1b3046c94a61.jpg?f=webp&w=1080&h=675&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5fe12c3cca360e33af2000fb6dd2ef2.jpg?f=webp&w=750&h=443&bg=FFFFFF",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1604b294506f6c05940c1f95adbb7f8b.jpg?f=webp&w=1080&h=1008&bg=FFFFFD",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23cb9e078b1b671590f0df7c2ec70768.jpg?f=webp&w=1080&h=1058&bg=FFFFFF"
    ],
    "carousel": [
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7734e0de99293d83ec5b923bb6b7aa3d.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/544606eafa79b7870ee48329571fbef2.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/65e3e2dcce852b09bd0e35d2425b2e9c.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2d10fb82dcd525351085444dd21effe.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/538f19801c5a501e0e307d98677d752d.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b17192d299e875fc2402badb7e4acf17.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4019643d06e2bfe049ba2be1d9b5cf83.jpg",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a82e1f926c8a4effe3e3e9b0cfadb2ec.jpg"
    ],
    "serve": [
      "小米自营",
      "由小米发货",
      "7天无理由退货",
      "运费说明：由小米(不含小米有品)发货的商品,单笔满150元免运费;<br>由小米有品发货的商品,免运费;<br>由第三方商家发货的商品,免运费;<br>特殊商品需要单独收取运费,具体以实际结算金额为准;优惠券等不能抵扣运费金额;如需无理由退货,用户将承担该商品的退货物流费用;<br>",
      "7天价格保护"
    ]
  }
  // 查询数据库，获取数据
  if (req.query.id == 1) {
    res.json(detailData1)
  } else if (req.query.id == 2) {
    res.json(detailData2)
  }
  else {
    res.json(401, { status: 0 })
  }
})

router.get('/category', function (req, res) {
  let categoryData = [
    {
      "type": "小米手机",
      "list": [
        {
          "id": 1,
          "name": "小米CC9 Pro",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ee8b3b156837eecc9ae9660e1b869b.png?thumb=1&w=120&h=120"
        },
        {
          "id": 55,
          "name": "小米9 Pro 5G",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b0d18a3033b43c0645b78dfc9d759a9.png?thumb=1&w=120&h=120"
        },
        {
          "id": 321,
          "name": "小米9",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d78ed6a88a978b313ba7cf5438d60ff8.png?thumb=1&w=120&h=120"
        },
        {
          "id": 412,
          "name": "小米CC9",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8def00234637f733dfb59d2be3bb1abd.png?thumb=1&w=120&h=120"
        },
        {
          "id": 429,
          "name": "小米CC9e",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6c2fbc0a96d51f5e713fd3daae8f73b.png?thumb=1&w=120&h=120"
        },
        {
          "id": 123,
          "name": "小米CC9 美图版",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff6dd80e3fc674ec70d7361f5409c5dc.png?thumb=1&w=120&h=120"
        },
        {
          "id": 32,
          "name": "小米MIX Alpha",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/266ad6dd5146deaf3ae3602a89e7a217.png?thumb=1&w=120&h=120"
        },
        {
          "id": 31,
          "name": "小米Mix3",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80da1d43af3f1c494f7165bf612adcad.png?thumb=1&w=120&h=120"
        },
        {
          "id": 421,
          "name": "",
          "src": ""
        },
        {
          "id": 431,
          "name": "小米Max3",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/872fdee87f411a310940d27a963654d7.png?thumb=1&w=120&h=120"
        }
      ]
    },
    {
      "type": "红米手机",
      "list": [
        {
          "id": 2,
          "name": "Redmi 8",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120"
        },
        {
          "id": 399,
          "name": "Redmi 8A",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/39ad29e9dce40a7afa494fe9e0cf9b0d.png?thumb=1&w=120&h=120"
        },
        {
          "id": 324,
          "name": "Redmi 7A",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d0ceb8b80da9e0ee31700451f17e984.png?thumb=1&w=120&h=120"
        },
        {
          "id": 123,
          "name": "Redmi 7",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5923b23fa1246a08b7784d94ce0456dc.png?thumb=1&w=120&h=120"
        },
        {
          "id": 391,
          "name": "Redmi Note 8 Pro",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/99022ce28f145ff5a521c848596295ec.gif"
        },
        {
          "id": 121,
          "name": "Redmi Note 8",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/271b3bd052e735143ee7298f2d6d43fa.gif"
        },
        {
          "id": 114,
          "name": "Redmi Note 7 Pro",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5f182ef1ccf4d495ae62f07670baa45.png?thumb=1&w=120&h=120"
        },
        {
          "id": 116,
          "name": "Redmi Note 7",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ff3bb2059f006b1c5699310c9743e62.png?thumb=1&w=120&h=120"
        },
        {
          "id": 113,
          "name": "K20 Pro 尊享版",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/70b1410a2b0002c3d41d8e70abb40cdd.gif"
        }
      ]
    },
    {
      "type": "游戏手机",
      "list": [
        {
          "id": 151,
          "name": "黑鲨游戏手机2 Pro",
          "src": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6c8a112abab1c03285aa915d731f6c3.png?thumb=1&w=120&h=120"
        }
      ]
    }
  ]
  res.json(categoryData)
});

module.exports = router;
