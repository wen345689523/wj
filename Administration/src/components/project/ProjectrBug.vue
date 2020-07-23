<!-- 项目记录组件 -->
<template>
  <div class="projectr-bug">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="ERRBUG列表" name="1">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column align="center" prop="sord" label="序号" width="55">
            </el-table-column>

            <el-table-column align="center" prop="date" label="ErrBug编号">
            </el-table-column>

            <el-table-column align="center" prop="date" label="项目">
            </el-table-column>

            <el-table-column align="center" prop="date" label="所属类型">
            </el-table-column>

            <el-table-column align="center" prop="date" label="提交人员">
            </el-table-column>

            <el-table-column align="center" prop="date" label="提交时间">
            </el-table-column>

            <el-table-column align="center" prop="date" label="解决时间">
            </el-table-column>

            <el-table-column align="center" prop="date" label="完成时间">
            </el-table-column>

            <el-table-column align="center" prop="date" label="指派人员">
            </el-table-column>

            <el-table-column align="center" prop="date" label="解决人员">
            </el-table-column>

            <el-table-column align="center" prop="date" label="等级">
            </el-table-column>

            <el-table-column align="center" prop="date" label="解决状态">
            </el-table-column>

            <el-table-column align="center" prop="date" label="审核状态">
            </el-table-column>

            <el-table-column align="center" prop="date" label="描述内容">
            </el-table-column>

            <el-table-column align="center" prop="date" label="操作">
              <div class="wjj-bt" @click="drawer = true">解决详情</div>
              <div class="wjj-bt" @click="drawer = true">分配</div>
            </el-table-column>
          </el-table>
          <el-button class="mt-bt" type="primary" @click="dialogFormVisible = true">添加ErrBUG</el-button>
        </el-collapse-item>
      </el-collapse>

      <add-bug :dialogFormVisible="dialogFormVisible" @close="dialogFormVisible = false"></add-bug>
      <PdrawerBug :drawer="drawer" :form="form" :tableData="tableData" @onchangeTb="drawer=false"></PdrawerBug>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      inputStlye: 'width: 50%;  display: inline-block;',
      dialogFormVisible: false,
      form: {
        name: ''
      },
      activeNames: [1],
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
        }
      ]
    }
  },
  methods: {
    handleChange () {},
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss">
.projectr-bug {
  margin-top: 20px;
  form {
    padding-left: 20px;
  }
  .el-input__inner {
    width: 200px;
  }
  .el-textarea__inner {
    width: 600px;
    height: 140px;
  }
  .mt-bt {
    margin: 10px 0 0 20px;
  }
}
</style>
