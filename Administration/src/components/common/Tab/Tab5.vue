<!-- 工作日志表格 -->
<template>
  <div class="table2">
    <p>工作日志情况</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="date" label="时间">
      </el-table-column>

      <el-table-column align="center" prop="date" label="内容">
      </el-table-column>

      <el-table-column align="center" prop="date" label="相关任务">
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
.table2 {
  position: relative;
  top: 20px;
  margin-bottom: 20px;
  width: 100%;
  background: #ffffff;
  p {
    padding-left: 10px;
    line-height: 30px;
  }
  .wjj-bt {
    display: inline-block;
    cursor: pointer;
    color: #00b79c;
  }
  .wjj-bt:nth-of-type(2) {
    margin-left: 2px;
  }
}
</style>
