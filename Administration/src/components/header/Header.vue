<template>
  <div class="wjj-header">
    <el-button class="myRetrun" @click="signOut" type="primary">退出登入</el-button>
    <div class="name" @click="drawer = true">
      <div class="myPhoto"><i class="el-icon-user-solid"></i></div>
      <span class="myName">王正文</span>
    </div>
    <div class="bell" @click="$router.push('/New')">
      <span>99</span>
      <i class="el-icon-message-solid"></i>
    </div>
    <el-drawer :visible.sync="drawer" :with-header="false">
      <div class="drawer">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="个人信息" name="user">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="possw">配置管理</el-tab-pane>
        </el-tabs>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      drawer: false,
      activeName: 'user',
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      },
      {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  computed: {},
  methods: {
    signOut () {
      this.$message({
        showClose: true,
        message: '退出成功！',
        type: 'success'
      })
      this.$router.push('/')
    },

    handleClick (v) {
      console.log(v)
    },

    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
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
