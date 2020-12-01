<!-- 项目管理 -->
<template>
  <div class="wjj-project">
    <!-- <router-view></router-view> -->
    <Title :title="'项目管理'"></Title>
    <el-button type="success" @click="drawer = true">所有可浏览项目</el-button>
    <el-button type="success" @click="dialogFormVisible = true">添加项目</el-button>
    <Tab3 :tableData="tableData"></Tab3>
    <peoject-need-drawer :drawer="drawer" @onchangeTb="drawer=false"></peoject-need-drawer>
    <peoject-Need-dialog :dialogFormVisible="dialogFormVisible" @onchangeTb="dialogFormVisible=false"></peoject-Need-dialog>
  </div>
</template>
<script>
import { get } from '../api/home'
export default {
  data () {
    return {
      drawer: false,
      dialogFormVisible: false,
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
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      get('/api/blog/getlist').then(req => {
        console.log(req)
      })
    }
  }
}
</script>

<style lang="scss">
.wjj-project {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
