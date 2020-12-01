<!-- 任务组件 -->
<template>
  <div class="projectr-task">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="任务" name="1">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="项目管理任务" name="manage" />
            <el-tab-pane label="软件任务" name="software" />
            <el-tab-pane label="硬件任务" name="hardware" />
            <el-tab-pane label="测试任务" name="test" />
          </el-tabs>
          <Ptab :tableData="tableData" @onchangeTb="drawer=true"></Ptab>
          <el-button class="mt-bt" type="primary" @click="dialogFormVisible = true">添加{{name}}</el-button>
        </el-collapse-item>
      </el-collapse>

      <el-dialog :title="`添加${name}`" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="120px">
          <Pform1 :form="form"></Pform1>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="dialogFormVisible=false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <Pdrawer :drawer="drawer" :form="form" :tableData="tableData" @onchangeTb="drawer=false"></Pdrawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'manage',
      name: '项目管理任务',
      dialogFormVisible: false,
      drawer: false,
      form: {
        name: ''
      },
      formLabelWidth: '100px',
      activeNames: [1, '1'],
      tableData: [
        {
          sord: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          sord: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          sord: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          sord: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          sord: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          sord: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          sord: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          sord: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    }
  },
  methods: {
    handleChange () {},
    handleClick (tab, event) {
      this.changeTab(tab.name)
    },
    onSubmit () {
      console.log('submit!')
    },
    changeTab (type) {
      switch (type) {
        case 'manage': this.name = '项目管理任务'
          break
        case 'software': this.name = '软件任务'
          break
        case 'hardware': this.name = '硬件任务'
          break
        case 'test': this.name = '测试任务'
          break
      }
    }
  }
}
</script>

<style lang="scss">
.projectr-task {
  margin-top: 20px;
  .el-tabs__nav-scroll {
    padding-left: 20px;
  }
  .wjj-bt:nth-of-type(2) {
    margin-left: 2px;
  }
  input[type='text'] {
    width: 300px;
  }
  .el-textarea__inner {
    height: 140px;
  }
  .mt-bt {
    margin: 10px 0 0 20px;
  }
}
</style>
