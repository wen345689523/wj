<template>
  <div class="wjj-header">
    <el-button class="myRetrun" type="primary">退出登入</el-button>
    <div class="name" @click="drawer = true">
      <div class="myPhoto"><i class="el-icon-user-solid"></i></div>
      <span class="myName">王正文</span>
    </div>
    <div class="bell">
      <span>99</span>
      <i class="el-icon-message-solid"></i>
    </div>
    <el-drawer :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      drawer: false
    }
  },
  computed: {},
  methods: {},
  components: {},
  watch: {}
}
</script>
<style lang="scss" scoped>
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
}
</style>
