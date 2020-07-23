<!-- 职位列表组件 -->
<template>
  <div class="projectr-ecord">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item :title="title" name="1">
          <el-table :data="tableData" border style="width: 70%;">
            <el-table-column align="center" prop="sord" label="序号" width="55">
            </el-table-column>
            <el-table-column align="center" prop="date" label="职位">
            </el-table-column>
            <el-table-column align="center" prop="date" label="职位职责">
            </el-table-column>
            <el-table-column align="center" prop="date" label="操作">
              <el-button class="mt-btt" type="primary" size="mini" @click="dialogFormVisible = true"><i class="el-icon-edit"></i></el-button>
              <el-button class="mt-btt" size="mini" @click="dialogFormVisible = true"><i class="el-icon-delete"></i></el-button>
            </el-table-column>
          </el-table>
          <!-- <el-button class="mt-bt" type="primary" @click="dialogFormVisible = true">添加</el-button> -->
        </el-collapse-item>
      </el-collapse>

      <el-dialog title="修改记录" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="80px">
           <el-form-item label="职位">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="层级">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
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
        }
      ]
    }
  },
  props: {
    title: String
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
  .mt-btt {
    padding: 2px 4px;
    font-size: 14px;
  }
}
</style>
