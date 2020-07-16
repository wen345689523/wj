<!-- 选择器 -->
<template>
  <div class="Select">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        :popper-append-to-body="false"
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [
        {
          value: "选项1",
          label: "112"
        },
        {
          value: "选项2",
          label: "1221"
        }
      ],
      value: ""
    }
  }
}
</script>

<style lang="scss">
.el-input__inner {
  font-size: 12px;
  height: 30px;
  padding-left: 6px;
}
.el-input__suffix {
  top: 5px;
}
.is-focus .el-input__suffix {
  top: -5px;
}
</style>
