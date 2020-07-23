<!-- 添加项目（需求）组件 -->
<template>
  <div class="peoject-Need-dialog">
    <el-dialog title="添加项目（需求）" @closed="closed" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="标题" style="width: 60%;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目简述标题" style="width: 60%;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="执行状态" style="width: 50%; display: inline-block;">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="保密级别" style="width: 50%; display: inline-block;">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目级别" style="width: 50%; display: inline-block;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目状态" style="width: 50%; display: inline-block;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目名称" style="width: 50%; display: inline-block;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="平台类别" style="width: 50%; display: inline-block;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="客户名称" style="width: 50%; display: inline-block;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="客户型号" style="width: 50%; display: inline-block;">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="计划开始时间" style="width: 50%; display: inline-block;">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="计划结束时间" style="width: 50%; display: inline-block;">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="项目监理" style="width: 50%; display: inline-block;">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="制表人" style="width: 50%; display: inline-block;">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="制表日期" style="width: 50%; display: inline-block;">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="添加附件">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="添加项目内容">
            <el-input size="medium" type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button @click="dialogFormVisible=false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogFormVisible: Boolean,
    form: Object
  },
  data () {
    return {
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      },
      {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  methods: {
    closed () {
      this.$emit('onchangeTb')
    },
    onSubmit () {},
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
