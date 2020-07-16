<!-- 需求管理 -->
<template>
  <div class="about">
    <Title :title="'需求管理'"></Title>
    <el-button type="success">所有可浏览需求</el-button>
    <el-button type="success" @click="drawer = true">添加需求</el-button>
    <Tab3 :tableData="tableData"></Tab3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    }
  }
}
</script>
