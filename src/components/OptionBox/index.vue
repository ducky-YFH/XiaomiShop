<template>
  <!-- 手机参数 -->
  <div class="option">
    <div id="mask" v-show="option.flag"></div>
    <transition>
      <div id="box" v-show="option.flag">
        <div class="title">
          <span class="mainPara">{{option.title}}</span>
          <span class="close" @click="closeBox">关闭</span>
        </div>
        <div class="allparams">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'OptionBox',
  props:{
    option: {
      type: Object,
    }
  },
  data(){
    return {
      flag: this.option.flag
    }
  },
  methods:{
    closeBox(){
      this.flag = false;
      this.$emit('closeBox',this.flag);
    }
  }
}
</script>

<style lang="scss" scoped>
#mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
}
#box {
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 13.6rem;
  position: fixed;
  background: #fff;
  font-size: 0.4rem;
  bottom: 0;
  padding-bottom: 1.2rem;
  z-index: 1111;
  .title {
    padding: 0.4rem;
    position: relative;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
    .close {
      position: absolute;
      font-size: 0.38rem;
      right: 0.4rem;
      color: red;
    }
  }
  .allparams {
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0.3rem 0;
    overflow: -moz-scrollbars-none;
  }
}
// 动画
.v-enter,
.v-leave-to {
  transform: translateY(13.6rem);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
</style>