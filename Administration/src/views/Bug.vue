<!-- BUG管理 -->
<template>
  <div class="need">
    <Title :title="'BUG管理'"></Title>
    <el-button type="success" @click="drawer = true">所有BUG浏览</el-button>
    <el-button type="success" @click="drawer = true">已经解决的BUG</el-button>
    <el-button type="success" @click="drawer = true">我要处理的BUG</el-button>
    <Tab4 :tableData="tableData" @onchangeTb="onchangeTb"></Tab4>
    <bug-drawer :drawer="drawer" :form="form" :tableData="tableData" @onchangeTb="drawer = false"></bug-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      form: {
        name: ''
      },
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
  },
  methods: {
    onchangeTb () {
      this.drawer = true
      console.log(12123)
    }
  }
}
</script>
