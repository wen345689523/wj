<!-- 添加项目（需求）组件 -->
<template>
  <div class="peoject-Need-dialog">
    <el-dialog title="添加项目（需求）" @closed="closed" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="标题" style="width: 60%;">
            <el-input v-model.trim="form.title"></el-input>
          </el-form-item>
          <el-form-item label="项目简述标题" style="width: 60%;">
            <el-input v-model.trim="form.titleinfo"></el-input>
          </el-form-item>
          <el-form-item label="执行状态" style="width: 50%; display: inline-block;">
            <el-select v-model="form.state" placeholder="状态">
              <el-option label="进行中" value="1"></el-option>
              <el-option label="已完成" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="保密级别" style="width: 50%; display: inline-block;">
            <el-select v-model="form.level" placeholder="级别">
              <el-option label="低级" value="1"></el-option>
              <el-option label="高级" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目级别" style="width: 50%; display: inline-block;">
            <el-input v-model.trim="form.itemrank"></el-input>
          </el-form-item>
          <el-form-item label="项目状态" style="width: 50%; display: inline-block;">
            <el-input v-model.trim="form.itemstate"></el-input>
          </el-form-item>
          <el-form-item label="项目名称" style="width: 50%; display: inline-block;">
            <el-input v-model.trim="form.itemname"></el-input>
          </el-form-item>
          <el-form-item label="平台类别" style="width: 50%; display: inline-block;">
            <el-input v-model.trim="form.platform"></el-input>
          </el-form-item>
          <el-form-item label="客户名称" style="width: 50%; display: inline-block;">
            <el-input v-model.trim="form.guestname"></el-input>
          </el-form-item>
          <el-form-item label="客户型号" style="width: 50%; display: inline-block;">
            <el-input v-model.trim="form.guest"></el-input>
          </el-form-item>
          <el-form-item label="计划开始时间" style="width: 50%; display: inline-block;">
            <el-date-picker
              v-model="form.starttime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="计划结束时间" style="width: 50%; display: inline-block;">
            <el-date-picker
              v-model="form.endtime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="项目监理" style="width: 50%; display: inline-block;">
            <el-select v-model="form.supervise" placeholder="监理人">
              <el-option label="王某某" value="1"></el-option>
              <el-option label="刘某" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="制表人" style="width: 50%; display: inline-block;">
            <el-select v-model="form.changname" placeholder="制表人">
              <el-option label="王某某" value="1"></el-option>
              <el-option label="刘某" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="制表日期" style="width: 50%; display: inline-block;">
            <el-date-picker
              v-model="form.starttime"
              type="date"
              value-format="yyyy-MM-dd"
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
            </el-upload>
          </el-form-item>
          <el-form-item label="添加项目内容">
            <el-input size="medium" type="textarea" v-model="form.content"></el-input>
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
import { post } from '../api/home'
export default {
  props: {
    dialogFormVisible: Boolean
  },
  data () {
    return {
      form: {
        state: '',
        starttime: '',
        endtime: '',
        changname: '',
        titleinfo: '',
        title: '',
        file: '',
        guest: '',
        supervise: '',
        itemname: '',
        itemstate: '',
        itemrank: '',
        content: '',
        level: '',
        platform: '',
        guestname: ''
      },
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
    onSubmit () {
      const form = this.form
      this.checkUp(form)
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },

    // 添加项目
    checkUp (data) {
      if (!data.title) {
        this.message('请填写项目标题！', 'error')
      } else if (!data.titleinfo) {
        this.message('请简述项目标题！', 'error')
      } else if (!data.state) {
        this.message('请选择执行状态！', 'error')
      } else if (!data.level) {
        this.message('请选择保密级别！', 'error')
      } else if (!data.itemrank) {
        this.message('请填写项目级别！', 'error')
      } else if (!data.itemname) {
        this.message('请填写项目名称！', 'error')
      } else if (!data.itemstate) {
        this.message('请填写项目状态！', 'error')
      } else if (!data.platform) {
        this.message('请填写平台类别！', 'error')
      } else if (!data.guestname) {
        this.message('请填写客户名称！', 'error')
      } else if (!data.guest) {
        this.message('请填写客户型号！', 'error')
      } else if (!data.starttime) {
        this.message('请选择开始时间！', 'error')
      } else if (!data.endtime) {
        this.message('请选择结束时间！', 'error')
      } else if (!data.supervise) {
        this.message('请选择项目监理！', 'error')
      } else if (!data.changname) {
        this.message('请选择制表人！', 'error')
      } else if (!data.starttime) {
        this.message('请选择制表日期！', 'error')
      } else if (!data.content) {
        this.message('请填写项目内容！', 'error')
      } else {
        post('api/blog/addpreject', data).then(req => {
          if (req.state === 200) {
            this.message('添加成功', 'success')
          } else {
            this.message(req.message, 'error')
          }
        })
      }
    },
    message (msg, type) {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-date-editor {
    width: 166px !important;
  }
  .el-input {
    width: 70%;
  }
  .el-select {
    width: 166px;
  }
</style>
