<!-- 头部组件 -->
<template>
  <div class="wjj-state">
    <span>进度 0%</span>
    <input type="number" :value="Num">
    <el-button type="success">修改进度</el-button>
    <el-select style="margin: 0 20px;" v-model="activeNames" placeholder="项目状态">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-button type="success">修改项目详情</el-button>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data () {
    return {
      activeNames: '',
      Num: 0
    }
  }
}
</script>

<style lang="scss">
.wjj-state {
  margin: 20px 0;
  >span, >input {
    display: inline-block;
    width: 100px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    text-align: center;
    border: 1px springgreen solid;
    outline:medium;
  }
  >input {
    position: relative;
    top: 1px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"]{
    -moz-appearance: textfield;
  }
  .el-input__inner {
    width: 140px;
  }
}
</style>
