<!-- 项目成员组件 -->
<template>
  <div class="proje-user">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="项目成员" name="1">
          <span v-for="item in 2" :key="item">
            <el-table :data="tableData" border style="width: 50%; display: inline-block;">
              <el-table-column align="center" prop="sord" label="序号" width="55">
              </el-table-column>

              <el-table-column align="center" prop="date" label="项目">
              </el-table-column>

              <el-table-column align="center" prop="date" label="部门">
              </el-table-column>

              <el-table-column align="center" prop="date" label="成员">
              </el-table-column>

              <el-table-column align="center" prop="date" label="项目权限">
              </el-table-column>
            </el-table>
          </span>
          <el-button class="mt-bt" type="primary" @click="dialogFormVisible = true">添加项目成员</el-button>
        </el-collapse-item>
      </el-collapse>

      <el-dialog title="添加项目成员" :visible.sync="dialogFormVisible" center>
        <el-form :model="form">
          <el-form-item label="部门" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="成员" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="参与状态" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目配置权限" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        region: ''
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
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.proje-user {
  margin-top: 20px;
  form {
    padding-left: 20px;
  }
  .mt-bt {
    margin: 10px 0 0 20px;
  }
}
</style>
