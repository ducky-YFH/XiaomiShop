<template>
  <div class="Mine-container">
    <NavBar title="登录"></NavBar>
    <div class="loginBox">
      <form>
        <input v-model="account" type="text" name="account" placeholder="Email" />
        <input v-model="password" name="pass" type="password" placeholder="密码" />
        <input class="loginBtn" @click="handleLogin()" type="button" value="登录" />
        <p class="regAndFind">
          <router-link to="/state/reg" tag="a">立即注册</router-link>
          <router-link to="/state/findpass" tag="a">找回密码</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Movie',
  data(){
    return {
      account: '',
      password: '',
    }
  },
  methods:{
    handleLogin(){

    },
    // 改变验证码
    changeCaptcha(e){
      e.target.src = '/api2/users/captcha?' + Math.random()
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.Mine-container {
  .loginBox {
    padding: 20px;
    input {
      width: 100%;
      height: 40px;
      border: 1px solid transparent;
      outline: none;
      border-bottom: 1px solid #cccccc;
      font-size: 0.4rem;
    }
    .loginBtn {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      background-color: #ff6700;
      border-radius: 6px;
    }
    .regAndFind {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      a{
        color: #666666;
      }
    }
  }
}
</style>