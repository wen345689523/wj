<!-- 工作任务情况表格 -->
<template>
  <div class="table4">
    <p>BUG情况</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="date" label="序号" width="55">
      </el-table-column>

      <el-table-column align="center" prop="date" label="项目名称">
      </el-table-column>

      <el-table-column align="center" prop="date" label="项目分类">
      </el-table-column>

      <el-table-column align="center" prop="date" label="总BUG数">
      </el-table-column>

      <el-table-column align="center" prop="date" label="未解决BUG数">
      </el-table-column>

      <el-table-column prop="date" align="center" label="操作">
        <div class="wjj-bt" @click="changetab('task')">查看任务</div>
        <div class="wjj-bt" @click="changetab('bug')">查看BUG</div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: Array
  },
  methods: {
    changetab (type) {
      this.$emit('onchangeTb', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.table4 {
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
