# XiaomiShop

## 基于个人兴趣爱好搭建的仿小米移动端商城的网站

## 应用到的技术：vue全家桶、vantUI、swiper

## 目前还在搭建中...

## 数据接口
| 接口说明       | url                       | 参数                       |
| -------------- | ------------------------- | -------------------------- |
| 热门机型       | dhsphone/api/hot          | 没有                       |
| 轮播图内容     | dhsphone/api/carousel     | 没有                       |
| 手机详细信息   | dhsphone/api/detail       | phoneId                    |
| 手机分类       | dhsphone/api/category     | 没有                       |
| 手机搜索       | dhsphone/api/search       | 手机名称                   |
| 更多评论       | dhsphone/api/morecomment  | phoneId                    |
| 地址列表       | dhsphone/api/address/list | token                      |  | 添加地址 | dhsphone/api/address/add | token、地址信息 |
| 加入购物车     | dhsphone/api/addcart      | token、phoneId             |
| 购物车删除商品 | dhsphone/api/delcart      | token、phoneId             |
| 登录           | dhsphone/api/login        | 邮箱、密码                 |
| 注册           | dhsphone/api/reg          | 邮箱、密码、用户名、验证码 |
| 找回密码       | dhsphone/api/findpass     | token、验证码              |
| 结算           | dhsphone/api/pay          | token、商品id              |

## 运行命令
```cmd
npm run serve
```