<template>
  <div class="wjj-header">
    <el-button class="myRetrun" @click="signOut" type="primary">退出登入</el-button>
    <div class="name" @click="drawer = true">
      <div class="myPhoto"><i class="el-icon-user-solid"></i></div>
      <span class="myName">{{userdata.realname}}</span>
    </div>
    <div class="bell" @click="$router.push('/New')">
      <span>99</span>
      <i class="el-icon-message-solid"></i>
    </div>
    <el-drawer :visible.sync="drawer" :with-header="false">
      <div class="drawer">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="个人信息" name="user">
            <el-form>
              <el-form-item label="名字" prop="pass">{{userdata.realname}}</el-form-item>
              <el-form-item label="性别" prop="checkPass">{{userdata.sex == 1?'男':'女'}}</el-form-item>
              <el-form-item label="创建时间" prop="checkPass">{{userdata.starttime}}</el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="possw">
            <el-form status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { post, get } from '../../api/home'
import { setCookie, delCookie } from '../../utils/aqi'
const req = {
  name: '',
  starttime: '',
  endtime: '',
  changname: '',
  chane: '',
  num: '',
  task: '',
  titleinfo: '',
  integral: '',
  title: '',
  file: '',
  guest: '',
  supervise: '',
  itemid: '',
  itemname: '',
  itemstate: '',
  itemrank: '',
  content: ''
}
export default {
  props: {},
  data () {
    return {
      drawer: false,
      activeName: 'user',
      userdata: {},
      form: req,
      ruleForm: ''
    }
  },
  // name, content, starttime, endtime, changname, chane, num, task, titleinfo,
  // integral, title, file, guest, supervise, itemid, itemname, itemstate, itemrank
  computed: {},
  mounted () {
    this.$store.dispatch('addUser', 1111)
    console.log(this.$store.state)
    if (this.$route.name !== 'Login') {
      this.userInfo()
    }
  },
  methods: {
    signOut () {
      post('/api/blog/signOut').then(req => {
        if (req.state === 200) {
          this.$message({
            showClose: true,
            message: '退出成功！',
            type: 'success'
          })
          delCookie('isAddRoute')
          delCookie('userId')
          delCookie('key')
          this.$router.push('/')
        }
      })
    },

    userInfo () {
      get('/api/blog/userinfo').then(req => {
        setCookie('isAddRoute', true)
        this.userdata = req.data[0]
      })
    },

    handleClick (v) {
      console.log(v)
    },

    submitForm (formName) {
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  components: {},
  watch: {}
}
</script>
<style lang="scss">
.wjj-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  .el-form-item {
    margin-bottom: 0;
  }
  .name,
  .bell {
    width: 140px;
    height: 60px;
  }
  .name {
    cursor: pointer;
    order: 1;
    border-left: 1px solid #999;
    .myPhoto {
      float: left;
      margin: 10px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 26px;
      color: #ffffff;
      border-radius: 50%;
      background: #00b999;
    }
    .myName {
      text-align: left;
      line-height: 60px;
      font-size: 18px;
    }
  }
  .bell {
    position: relative;
    margin-right: 20px;
    text-align: right;
    span {
      position: absolute;
      top: 10px;
      right: -4px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      color: #ffffff;
      text-align: center;
      border-radius: 50%;
      background: #fc940a;
      cursor: pointer;
    }
    i {
      font-size: 30px;
      line-height: 62px;
      color: #00b999;
      cursor: pointer;
    }
  }
  button {
    order: 2;
  }
  .el-tabs__item {
    box-shadow: none !important;
  }
  .drawer {
    padding: 10px 0 0 20px;
  }
}
</style>
