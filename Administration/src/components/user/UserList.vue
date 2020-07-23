<!-- 组织人列表组件 -->
<template>
  <div class="projectr-ecord">
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item :title="title" name="1">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column align="center" label="姓名" width="120">
              <div class="myPhoto"><i class="el-icon-user-solid"></i></div>
              <p class="name">王某某</p>
            </el-table-column>
            <el-table-column align="center" prop="date" label="部门">
            </el-table-column>
            <el-table-column align="center" prop="date" label="职位">
            </el-table-column>
            <el-table-column align="center" prop="date" label="入职时间">
            </el-table-column>
            <el-table-column align="center" prop="date" label="在职状态">
            </el-table-column>
            <el-table-column align="center" prop="date" label="电话号码">
            </el-table-column>
            <el-table-column align="center" prop="date" label="工作内容描述">
              <el-button class="mt-btt" type="primary" size="mini" @click="dialogFormVisible = true"><i class="el-icon-edit"></i></el-button>
              <el-button class="mt-btt" size="mini" @click="dialogFormVisible = true"><i class="el-icon-delete"></i></el-button>
            </el-table-column>
          </el-table>
          <!-- <el-button class="mt-bt" type="primary" @click="dialogFormVisible = true">添加</el-button> -->
        </el-collapse-item>
      </el-collapse>

      <el-dialog title="添加人员" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="部门">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职位">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="添加时间">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="Ta的权限">
            <el-select v-model="value1" multiple placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
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
      activeNames: [1, '1'],
      radio: '1',
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
      ],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: []
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
  .myPhoto {
    float: left;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    border-radius: 50%;
    background: #00b999;
  }
  .name {
    width: 100%;
    text-align: left;
    height: 30px;
    line-height: 30px;
  }
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
