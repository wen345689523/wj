<!-- 工作日志 -->
<template>
  <div class="need">
    <Title :title="'工作日志'"></Title>
    <el-button type="success">部门日志</el-button>
    <el-button type="success">个人日志</el-button>
    <el-button type="success" @click="drawer = true">添加日志</el-button>
    <Tab5 :tableData="tableData"></Tab5>
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
