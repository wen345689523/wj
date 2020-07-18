<!-- 头部组件 -->
<template>
  <div class="peoject-Need-dialog">
    <el-dialog title="添加ErrBUG" @closed="closed" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="执行状态">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目级别" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目状态" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目名称" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="平台类别" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="保密级别">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户名称" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="客户型号" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="计划开始时间" :style="inputStlye">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="计划结束时间" :style="inputStlye">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="项目监理">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="制表人">
            <el-select v-model="form.name" placeholder="平台类别:">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="制表日期" :style="inputStlye">
            <el-date-picker
              v-model="form.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="项目简述标题" :style="inputStlye">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="添加附件" :style="inputStlye">
            <el-button type="primary" @click="onSubmit">添加附件</el-button>
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
  methods: {
    closed () {
      this.$emit('onchangeTb')
    },
    onSubmit () {
      this.$emit('onchangeTb')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
