<template>
  <div class="CommentView">
    <NavBar title="评论详情"></NavBar>
    <div id="phone-comment">
      <div class="c-item">
        <div class="c-mes">
          <div class="c-left">
            <img :src="comment.avatar" alt />
            <div>
              <p>{{comment.user}}</p>
              <p>{{comment.time}}</p>
            </div>
          </div>
          <div class="c-right">
            <van-icon name="good-job-o" />
            <span>{{comment.like}}</span>
          </div>
        </div>
        <div class="c-con">
          <div>{{comment.con}}</div>
          <img alt v-for="(imgItem,i) in comment.img" :key="i" :src="imgItem" />
        </div>
        <div class="c-reply">
          <span class="repWho">{{comment.repy.name}}：</span>
          <span class="repCon">{{comment.repy.con}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentView',
  data(){
    return {
      comment:{
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
    }
  },

}
</script>

<style lang="scss" scoped>
#phone-comment {
  border-radius: 10px;
  font-size: 0.366rem;
  .c-item {
    background: #ffffff;
    padding: 0.4rem;
    height: 6rem;
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
        height: 2.8rem;
        width: 2.4rem;
        margin-right: 0.3rem;
      }
    }
    .c-reply {
      margin-top: 0.3rem;
      font-size: 0.36rem;
      line-height: 0.5rem;
      background: #f6f6f6;
      padding: 0.2rem;
      .repWho {
        color: #ff6700;
      }
      .repCon {
      }
    }
  }
}
</style>