<!-- 积分记录表 -->
<template>
  <div class="table2">
    <p>积分历史</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="date" label="序号" width="55">
      </el-table-column>

      <el-table-column align="center" prop="date" label="姓名">
      </el-table-column>

      <el-table-column align="center" prop="date" label="项目名称">
      </el-table-column>

      <el-table-column align="center" prop="date" label="积分">
      </el-table-column>

      <el-table-column align="center" prop="date" label="积分算计">
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
