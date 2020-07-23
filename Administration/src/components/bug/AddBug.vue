<!-- 项目记录组件 -->
<template>
  <div class="projectr-bug">
      <el-dialog title="添加ErrBUG" @closed="closed" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="提交人员" :style="inputStlye">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="指派人" :style="inputStlye">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="解决人员" :style="inputStlye">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="异常等级" :style="inputStlye">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="软件版本" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="硬件版本" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Errbug所属类型" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="标题" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="提交时间" :style="inputStlye">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="描述">
            <el-input size="medium" type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="复现方法">
            <el-input size="medium" type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="$emit('close')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      inputStlye: 'width: 50%;  display: inline-block;',
      // dialogFormVisible: false,
      form: {
        name: ''
      },
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
    dialogFormVisible: Boolean
  },
  methods: {
    onSubmit () {
      this.$emit('close')
      console.log('submit!')
    },
    closed () {
      this.$emit('close')
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
