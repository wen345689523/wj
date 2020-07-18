<!-- 未完成项目进度表格 -->
<template>
  <div class="table1">
    <p>未完成项目进度</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="date" label="序号">
      </el-table-column>

      <el-table-column align="center" prop="date" label="项目级分类">
      </el-table-column>

      <el-table-column align="center" prop="date" label="平台级类别">
      </el-table-column>

      <el-table-column align="center" prop="date" label="项目名称">
      </el-table-column>

      <el-table-column align="center" prop="date" label="计划开始时间">
      </el-table-column>

      <el-table-column align="center" prop="date" label="计划结束时间">
      </el-table-column>

      <el-table-column align="center" prop="date" label="监理">
      </el-table-column>

      <el-table-column align="center" prop="date" label="执行">
      </el-table-column>

      <el-table-column align="center" prop="date" label="审核">
      </el-table-column>

      <el-table-column align="center" label="总进度%">
        <Progress :number="80"></Progress>
      </el-table-column>

      <el-table-column align="center" label="操作">
        <div class="wjj-bt" @click="$router.push(`/Project/Details?id=${111}`)">查看</div>
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
.table1 {
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
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    color: #00b79c;
  }
}
</style>
