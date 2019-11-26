<template>
  <div class="BackTop">
    <a href="javascript:scrollTo(0,0)" v-show="flag">
      <van-icon name="upgrade" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data(){
    return{
      flag: false
    }
  },
  methods:{
    top(){
      window.onscroll = () => {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 900){
          this.flag = true
        }else{
          this.flag = false
        }
      }
    }
  },
  mounted(){
    this.top()
  }
}
</script>

<style lang="scss" scoped>
.BackTop {
  color: #000;
  position: fixed;
  z-index: 9999;
  right: 0.8rem;
  bottom: 1.7rem;
  a {
    .van-icon-upgrade {
      border-radius: 50%;
      color: #a4a5a5;
      background: #e7e7e7;
    }
  }
}
</style>