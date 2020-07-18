<!-- 项目记录组件 -->
<template>
  <div class="projectr-ecord">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="项目记录" name="1">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column align="center" prop="sord" label="序号" width="55">
            </el-table-column>

            <el-table-column align="center" prop="date" label="项目">
            </el-table-column>

            <el-table-column align="center" prop="date" label="操作来源">
            </el-table-column>

            <el-table-column align="center" prop="date" label="执行时间">
            </el-table-column>

            <el-table-column align="center" prop="date" label="记录人员">
            </el-table-column>

            <el-table-column align="center" prop="date" label="执行状态">
            </el-table-column>

            <el-table-column align="center" prop="date" label="执行内容">
            </el-table-column>
          </el-table>
          <el-button class="mt-bt" type="primary" @click="dialogFormVisible = true">添加项目记录</el-button>
        </el-collapse-item>
      </el-collapse>

      <el-dialog title="修改记录" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="执行状态">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="执行时间">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="执行内容">
            <el-input size="medium" type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="dialogFormVisible=false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: ''
      },
      formLabelWidth: '100px',
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
.projectr-ecord {
  margin-top: 20px;
  form {
    padding-left: 20px;
  }
  .el-input__inner {
    width: 200px;
  }
  .el-textarea__inner {
    height: 200px;
  }
  .mt-bt {
    margin: 10px 0 0 20px;
  }
}
</style>
