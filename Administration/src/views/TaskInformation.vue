/* eslint-disable no-unused-expressions */
<!-- 任务信息 -->
<template>
  <div class="task-information">
    <Title :title="'任务信息'"></Title>
    <div style="float: left; width: 85%;">
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
    </div>

    <div style="float: right; width: 14%; height: 100%;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>积分排名</span>
          <p>我的积分：162分, 排名：16</p>
        </div>
        <div v-for="o in 9" :key="o" class="text item">
          <i :class="`myIcon myIcon${o}`"></i>
          王某某
        </div>
      </el-card>
    </div>

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
  height: 100%;
  .el-card {
    height: 100%;
    .text {
      font-size: 14px;
    }

    .item {
      position: relative;
      margin-bottom: 6px;
    }
    .myIcon {
      position: relative;
      display: inline-block;
      top: 10px;
      width: 30px;
      height: 30px;
      background: url(../assets/1.png) no-repeat;
      background-size: 100%;
    }
    .myIcon2 {
      background: url(../assets/2.png) no-repeat;
      background-size: 100%;
    }
    .myIcon3 {
      background: url(../assets/3.png) no-repeat;
      background-size: 100%;
    }
    .myIcon4 {
      background: url(../assets/4.png) no-repeat;
      background-size: 100%;
    }
    .myIcon5 {
      background: url(../assets/5.png) no-repeat;
      background-size: 100%;
    }
    .myIcon6 {
      background: url(../assets/6.png) no-repeat;
      background-size: 100%;
    }
    .myIcon7 {
      background: url(../assets/7.png) no-repeat;
      background-size: 100%;
    }
    .myIcon8 {
      background: url(../assets/8.png) no-repeat;
      background-size: 100%;
    }
    .myIcon9 {
      background: url(../assets/9.png) no-repeat;
      background-size: 100%;
    }
  }
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
      width: 418px;
      height: 223px;
      line-height: 223px;
      text-align: center;
      color: #ffffff;
      font-size: 20px;
      border-radius: 10px;
      cursor: pointer;
      background: #409eff;
    }
    .item-modular:nth-of-type(1) {
      background: url(../assets/project.png) no-repeat;
    }
    .item-modular:nth-of-type(2) {
      background: url(../assets/need.png) no-repeat;
    }
    .item-modular:nth-of-type(3) {
      background: url(../assets/bug.png) no-repeat;
    }
  }
}
</style>
