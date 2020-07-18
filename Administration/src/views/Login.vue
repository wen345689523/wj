<!-- 登录组件 -->
<template>
  <div class="wjj-login">
    <div class="popup">
      <h1>腾进达后台管理系统</h1>
      <div class="user">
        账号：<el-input v-model.trim="user" auto-complete="on" placeholder="请输入账号"></el-input>
      </div>
      <div class="password">
        密码：<el-input placeholder="请输入密码" v-model.trim="password" auto-complete="on" show-password></el-input>
      </div>
      <el-button type="primary" @click="Submit">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    Submit () {
      if (!this.user || !this.password) {
        this.$message({
          showClose: true,
          message: '账号密码不能为空！',
          type: 'error'
        })
      } else {
        this.$router.push('/TaskInformation')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wjj-login {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  background-image: url(../assets/bg.jpg);
  background-size: 100% 100%;
  .popup {
    position: absolute;
    width: 600px;
    height: 360px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    border-radius: 20px;
    background: rgba(0,0,0,.5);
    h1 {
      margin-top: 40px;
      text-align: center;
      font-size: 26px;
      line-height: 60px;
      color: #ffffff;
      font-weight: 800;
      letter-spacing: 6px;
    }
    .user, .password {
      width: 390px;
      font-size: 20px;
      color: #ffffff;
      font-weight: bold;
      margin: 30px auto;
      .el-input {
        width: 320px;
      }
    }
    button {
      width: 100px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
