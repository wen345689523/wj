<!-- 任务表单组件 -->
<template>
  <div>
    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column align="center" prop="sord" label="序号" width="55">
      </el-table-column>

      <el-table-column align="center" prop="date" label="指派人">
      </el-table-column>

      <el-table-column align="center" prop="date" label="监理人">
      </el-table-column>

      <el-table-column align="center" prop="date" label="执行人">
      </el-table-column>

      <el-table-column align="center" prop="date" label="记录人员">
      </el-table-column>

      <el-table-column align="center" prop="date" label="计划开始时间">
      </el-table-column>

      <el-table-column align="center" prop="date" label="计划结束时间">
      </el-table-column>

      <el-table-column align="center" prop="date" label="实际开始时间">
      </el-table-column>

      <el-table-column align="center" prop="date" label="实际结束时间">
      </el-table-column>

      <el-table-column align="center" prop="date" label="执行状态">
      </el-table-column>

      <el-table-column align="center" prop="date" label="审核状态">
      </el-table-column>

      <el-table-column align="center" prop="date" label="任务内容">
      </el-table-column>

      <el-table-column align="center" label="操作">
        <div class="wjj-bt" @click="$emit('onchangeTb')">处理</div>
        <div class="wjj-bt" @click="$emit('onchangeTb')">分配</div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: Array
  }
}
</script>

<style lang="scss" scoped>
h1 {
  position: relative;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding-left: 10px;
  font-weight: bold;
  &:before {
    position: absolute;
    top: 20px;
    left: 0px;
    width: 4px;
    height: 22px;
    content: "";
    border-radius: 2px;
    background: #000;
  }
}
</style>
