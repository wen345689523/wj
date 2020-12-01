<!-- 工作日志 -->
<template>
  <div class="need">
    <Title :title="'工作日志'"></Title>
    <el-button type="success" @click="drawerAll = true">全部日志</el-button>
    <el-button type="success" @click="drawerAll = true">部门日志</el-button>
    <el-button type="success" @click="drawerAll = true">个人日志</el-button>
    <el-button type="success" @click="dialogFormVisible = true">添加日志</el-button>
    <Tab5 :tableData="tableData" @changetab="drawerInfo = true"></Tab5>

    <el-dialog title="添加工作日志" :visible.sync="dialogFormVisible" center>
      <div class="work-left">
        <el-form>
          <el-form-item label="今日日志内容">
            <el-input size="medium" type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-checkbox-group v-model="form.name">
            <el-checkbox label="是否提交SVN" name="type"></el-checkbox>
          </el-checkbox-group>
          <el-form-item label="SVN提交的内容描述">
            <el-input size="medium" type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <Upxlsx></Upxlsx>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="work-right">
        <h1 style="font-size: 16px; margin-bottom: 6px;">今日相关任务</h1>
        <a href="444">54454455454</a>
        <a href="444">54454455454</a>
        <a href="444">54454455454</a>
        <a href="444">54454455454</a>
      </div>
    </el-dialog>
    <Pdrawer :drawer="drawerInfo" :form="form" :tableData="tableData" @onchangeTb="drawerInfo=false"></Pdrawer>
    <WorkDrawer :drawer="drawerAll" :form="form" :tableData="tableData" @onchangeTb="drawerAll=false"></WorkDrawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawerAll: false,
      drawerTask: false,
      drawerInfo: false,
      dialogFormVisible: false,
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
    onSubmit () {
      console.log(this.form.name)
    }
  }
}
</script>

<style lang="scss">
.need {
  .el-textarea__inner {
    width: 60%;
    height: 200px;
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
  .work-left {
    display: inline-block;
    width: 100%;
  }
  .work-right {
    position: absolute;
    top: 96px;
    right: 5%;
    width: 30%;
    a {
      color: red;
      display: block;
    }
  }
}
</style>
