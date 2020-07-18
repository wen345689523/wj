<!-- 任务From组件 -->
<template>
  <div class="title">
    <el-form-item label="任务">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="任务标题">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="指派人">
      <el-select v-model="form.name" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="监理人">
      <el-select v-model="form.name" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="执行人">
      <el-select v-model="form.name" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="计划开始时间">
      <el-date-picker
        v-model="form.name"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="计划结束时间">
      <el-date-picker
        v-model="form.name"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="执行内容">
      <el-input size="medium" type="textarea" v-model="form.name"></el-input>
    </el-form-item>
  </div>
</template>
<script>
export default {
  props: {
    form: Object
  }
}
</script>
