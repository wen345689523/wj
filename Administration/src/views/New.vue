<!-- 消息组件 -->
<template>
  <div class="title">
    <Title :title="'通知消息'"></Title>
    <el-button type="primary">全部标记已读</el-button>
    <el-button type="success" @click="drawer = true">删除</el-button>
    <Tab7 :tableData="tableData"></Tab7>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  position: relative;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding-left: 10px;
  &:before {
    position: absolute;
    top: 20px;
    left: 0px;
    width: 4px;
    height: 22px;
    content: "";
    border-radius: 2px;
    background: #000;
  }
}
</style>
