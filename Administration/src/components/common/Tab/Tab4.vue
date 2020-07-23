<!-- 工作任务情况表格 -->
<template>
  <div class="table2">
    <p>工作任务情况</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="date" label="序号" width="55">
      </el-table-column>

      <el-table-column align="center" prop="date" label="姓名">
      </el-table-column>

      <el-table-column align="center" prop="date" label="已完成任务">
      </el-table-column>

      <el-table-column align="center" prop="date" label="未完成任务">
      </el-table-column>

      <el-table-column align="center" prop="date" label="超期任务">
      </el-table-column>

      <el-table-column align="center" prop="date" label="紧急任务">
      </el-table-column>

      <el-table-column align="center" prop="date" label="未处理Bug">
      </el-table-column
      >

      <el-table-column align="center" prop="date" label="操作">
        <div @click="closed" class="wjj-bt">查看</div>
        <div @click="closed" class="wjj-bt">添加</div>
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
    closed () {
      this.$emit('onchangeTb')
    }
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
