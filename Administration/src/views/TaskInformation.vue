/* eslint-disable no-unused-expressions */
<!-- 任务信息 -->
<template>
  <div class="task-information">
    <Title :title="'任务信息'"></Title>
    <div class="modular">
      <div class="item-modular" @click="$router.push('/Project')">项目个数</div>
      <div class="item-modular" @click="$router.push('/Need')">需求个数</div>
      <div class="item-modular" @click="$router.push('/Bug')">Bug个数</div>
    </div>
    <br/>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="0 个紧急处理任务" name="1">
        <div class="wjj-text" @click="drawerTask = true" style="cursor: pointer;">XXXXXX大数据大数据的任务</div>
        <div class="wjj-text">剩余时间: 2020-07-23</div>
      </el-collapse-item>
    </el-collapse>
    <Tab1 :tableData="tableData"></Tab1>
    <Tab2 :tableData="tableData" @onchangeTb="onchangeTb"></Tab2>

    <el-drawer :visible.sync="drawerTask">
        <Title style="margin: -82px 0 0 20px; width: 200px;" :title="'个人任务列表'">
          <el-button size="small" style="maegin: 0 10px;" type="primary" @click="drawerTask = false">关闭</el-button>
        </Title>
        <h4>紧急</h4>
        <Ptab :tableData="tableData" @onchangeTb="drawerInfo=true"></Ptab>
        <h4>未完成</h4>
        <Ptab :tableData="tableData" @onchangeTb="drawerInfo=true"></Ptab>
    </el-drawer>

    <bug-drawer :drawer="drawer" :form="form" :tableData="tableData" @onchangeTb="drawer = false"></bug-drawer>
    <Pdrawer :drawer="drawerInfo" :form="form" :tableData="tableData" @onchangeTb="drawerInfo=false"></Pdrawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      drawerTask: false,
      drawerInfo: false,
      activeNames: ['1', '1'],
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
    onchangeTb (type) {
      type === 'bug' ? this.drawer = true : this.drawerTask = true
    },
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
.task-information {
  position: relative;
  .el-drawer {
    width: 85% !important;;
  }
  .wjj-bt {
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
    color: #00b79c;
  }
  .el-collapse-item__header {
    font-size: 22px;
    font-weight: bold;
  }
  .wjj-text {
    font-size: 18px;
    color: #666;
    padding-left: 20px;
  }
  .modular {
    display: flex;
    justify-content: space-around;
    .item-modular {
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: #ffffff;
      font-size: 20px;
      border-radius: 10px;
      cursor: pointer;
      background: #409eff;
    }
  }
}
</style>
