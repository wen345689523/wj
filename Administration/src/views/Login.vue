<!-- 登录组件 -->
<template>
  <div class="wjj-login">
    <div class="popup">
      <h1>腾进达后台管理系统</h1>
      <div class="user">
        账号：<el-input @keyup.enter.native="Submit" v-model.trim="userName" auto-complete="on" placeholder="请输入账号"></el-input>
      </div>
      <div class="password">
        密码：<el-input @keyup.enter.native="Submit" placeholder="请输入密码" v-model.trim="posseWord" auto-complete="on" show-password></el-input>
      </div>
      <el-button type="primary" @keyup.enter="Submit" @click="Submit">登录</el-button>
    </div>
  </div>
</template>
<script>
import { post, get } from '../api/home'
import { setCookie } from '../utils/aqi'
export default {
  data () {
    return {
      userName: '',
      posseWord: ''
    }
  },
  mounted () {
  },
  methods: {
    Submit () {
      const { userName, posseWord } = this
      this.$router.push('/TaskInformation')
      return
      if (!userName || !posseWord) {
        this.message('账号密码不能为空！', 'error')
      } else {
        // get('http://192.168.3.128:8991/api/app/0.2/front/dat/json').then(req => {
        //   setCookie('isAddRoute', true)
        //   this.userdata = req.data[0]
        // })
        post('api/app/0.2/front/dat/json', { OpName: 'getSttt_BeforeDays_Total' }).then(req => {
          console.log(111)
        })
        // post('api/blog/login', { userName, posseWord }).then(req => {
        //   if (req.state === 200) {
        //     this.message('登录成功！', 'success')
        //     this.$router.push('/TaskInformation')
        //     setCookie('key', JSON.stringify({ name: 1, name1: 2, name2: 2, name3: 3, name4: 4, name5: 5, name6: 6 }))
        //   } else {
        //     this.message(req.message, 'error')
        //   }
        // })
      }
    },

    // 注册账号
    // adduser () {
    //   const userName = 'lingling'
    //   const posseWord = '123'
    //   const name = '玲玲'
    //   const power = 2
    //   const sex = 2
    //   const starttime = '2020-08-06'
    //   post('/api/blog/adduser', { userName, posseWord, name, power, sex, starttime }).then(req => {
    //     console.log('注册成功！')
    //   })
    // },
    message (msg, type) {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
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
