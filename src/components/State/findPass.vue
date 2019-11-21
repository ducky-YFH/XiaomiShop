<template>
  <div>
    <NavBar title="找回密码"></NavBar>
    <div class="registerBox">
      <form>
        <input type="text" name="email" placeholder="输入邮箱地址" />
        <input type="password" name="pass" placeholder="设置新密码" />
        <input name="repass" type="password" placeholder="确认新密码" />
        <div class="verifyBox">
          <input class="verifyInput" v-model="verify" type="text" placeholder="验证码" />
          <input
            ref="verifyBtn"
            class="verifyBtn"
            @click="getVerify()"
            type="button"
            :value="verifyText"
          />
        </div>
        <input class="registerBtn" @click="handleRegister()" type="button" value="修改" />
        <p class="regAndFind">
          <router-link to="/state/login" tag="a">立即登录</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'reg',
  data(){
    return {
      verify:'',
      verifyText:'获取验证码'
    }
  },
  methods:{
    handleRegister(){
    },
    getVerify(){
    },
  }
}
</script>

<style lang="scss" scoped>
.registerBox {
  font-size: 0.4rem;
  padding: 20px;
  input {
    width: 100%;
    height: 40px;
    border: 1px solid transparent;
    outline: none;
    border-bottom: 1px solid #cccccc;
  }
  .verifyBox {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .verifyInput {
      flex: 1;
    }
    .verifyBtn {
      flex: 1;
      color: #fff;
      background-color: #149aff;
      vertical-align: bottom;
    }
  }
  .registerBtn {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    background-color: #ff6700;
    border-radius: 5px;
  }
  .regAndFind {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    a {
      color: #666666;
    }
  }
}
</style>