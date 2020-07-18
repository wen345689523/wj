<!-- 软件版本发布组件 -->
<template>
  <div class="projectr-edition">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="软件版本发布" name="1">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column align="center" prop="sord" label="序号" width="55">
            </el-table-column>

            <el-table-column align="center" prop="date" label="发布编号">
            </el-table-column>

            <el-table-column align="center" prop="date" label="发布人">
            </el-table-column>

            <el-table-column align="center" prop="date" label="审核状态">
            </el-table-column>

            <el-table-column align="center" prop="date" label="项目">
            </el-table-column>

            <el-table-column align="center" prop="date" label="软件发布串码&版本">
            </el-table-column>

            <el-table-column align="center" prop="date" label="编译&发布时间">
            </el-table-column>

            <el-table-column align="center" prop="date" label="发布内容">
            </el-table-column>

            <el-table-column align="center" prop="date" label="操作">
              <div class="wjj-bt" @click="drawer=true">查看</div>
              <div class="wjj-bt" @click="drawer1=true">生成任务</div>
            </el-table-column>
          </el-table>
          <el-button class="mt-bt" type="primary" @click="dialogFormVisible = true">发布管理</el-button>
        </el-collapse-item>
      </el-collapse>

      <el-dialog title="添加ErrBUG" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="软件版本" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="硬件版本" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="发布时间" :style="inputStlye">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="编译时间" :style="inputStlye">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="发布内容">
            <el-input size="medium" type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button @click="dialogFormVisible=false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <PdrawerEdition :drawer="drawer" :form="form" :tableData="tableData" @onchangeTb="drawer=false"></PdrawerEdition>
      <PdrawerEdition1 :drawer1="drawer1" :form="form" :tableData="tableData" @onchangeTb="drawer1=false"></PdrawerEdition1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputStlye: 'width: 50%;  display: inline-block;',
      dialogFormVisible: false,
      drawer: false,
      drawer1: false,
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
.projectr-edition {
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
